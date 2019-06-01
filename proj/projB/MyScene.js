/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
    }

    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        // Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.enableTextures(true);
        this.setUpdatePeriod(50);

        // Initialize scene objects
        this.axis = new CGFaxis(this);
        this.plane = new Plane(this, 32);
        this.house = new MyHouse(this);
        this.cubeMap = new MyCubeMap(this);
        this.bird = new MyBird(this);
        this.terrain = new MyTerrain(this);
        this.lightning = new MyLightning(this);
        this.nest = new MyNest(this);
        this.sticks = [new MyStick(this, -12, 2.5, 0), new MyStick(this, 10, 2.5, 0), new MyStick(this, 10, 2.5, 10), new MyStick(this, -10, 2.5, -10)]
        this.forest = new MyForest(this);

        // Objects connected to MyInterface
        this.selectedObject = 0;
        this.displayAxis = true;
        this.displayNormals = false;
        this.scaleFactor = 0.5;
        this.birdScaleFactor = 1;
        this.speedFactor = 1;
        this.ambientFactor = 0.75;
        this.time = 0;

        this.initMaterials();
    }

    update(t) {
        this.time = t;
        this.bird.update(t);
        this.keyInput(t);
        this.bird.moveBird();
        this.lightning.update(t / 1000);
        this.bird.upDownBird(t);
        this.checkBirdStickPosition();
        this.checkBirdNestPosition();

        if (this.lightning.newTime > 1) {
            this.lightning.depth = 0;
        }
    }

    keyInput(t) {
        var text = "keys pressed; ";

        if (this.gui.isKeyPressed("KeyW")) {
            text += " W ";
            this.bird.accelerate(0.1 * this.speedFactor);
        }

        if (this.gui.isKeyPressed("KeyS")) {
            text += " S ";
            this.bird.accelerate(-0.1 * this.speedFactor);
        }

        if (this.gui.isKeyPressed("KeyA")) {
            text += " A ";
            this.bird.turn(Math.PI / 12 * this.speedFactor);
        }

        if (this.gui.isKeyPressed("KeyD")) {
            text += " D ";
            this.bird.turn(-Math.PI / 12 * this.speedFactor);
        }

        if (this.gui.isKeyPressed("KeyR")) {
            text += " R ";
            this.bird.dX = 0;
            this.bird.dZ = 0;
            this.bird.rotation = 0;
            this.bird.speedFactor = 0;
            this.bird.birdSpeed = 0;
            this.bird.upDown = false;
            this.bird.pickedStick = false;
            this.bird.readyPickStick = -1;
            this.bird.readyDropStick = false;
        }

        if (this.gui.isKeyPressed("KeyL")) {
            text += " L ";
            this.lightning.startAnimation(this.time / 1000);
        }

        if (this.gui.isKeyPressed("KeyP") && !this.bird.upDown) {
            this.bird.upDown = true;
            this.bird.tInit = t;
        }
    }

    initMaterials() {

        //------ Textures
        this.textureMap = new CGFtexture(this, 'images/cubeMap.jpg');

        //------ Applied Material
        this.mapMaterial = new CGFappearance(this);
        this.mapMaterial.setAmbient(1, 1, 1, 1);
        this.mapMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.mapMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.mapMaterial.setShininess(10.0);
        this.mapMaterial.setTexture(this.textureMap);
        this.mapMaterial.setTextureWrap('REPEAT', 'REPEAT');

    }

    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }

    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(45, 45, 45), vec3.fromValues(0, 0, 0));
    }

    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }

    checkBirdStickPosition() {
        if (this.bird.upDown && !this.bird.pickedStick) {
            for (var i = 0; i < this.sticks.length; i++) {
                if (Math.abs(this.sticks[i].x - this.bird.dX) < 2 && Math.abs(this.sticks[i].z - this.bird.dZ) < 2) {
                    this.bird.readyPickStick = i;
                }
            }
        }
    }

    checkBirdNestPosition() {
        if (this.bird.upDown && this.bird.pickedStick) {
            for (var i = 0; i < this.sticks.length; i++) {
                if (Math.abs(17 - this.bird.dX) < 3.5 && Math.abs(0 - this.bird.dZ) < 2.5) {
                    this.bird.readyDropStick = true;
                }
            }
        }
    }

    display() {

        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();

        // Draw axis
        this.axis.display();

        //Apply default appearance
        this.setDefaultAppearance();

        this.setGlobalAmbientLight(this.ambientFactor, this.ambientFactor, this.ambientFactor, 1);

        if (this.displayNormals) {
            this.cubeMap.enableNormalViz();
            this.house.enableNormalViz();
        }
        else {
            this.house.disableNormalViz();
            this.cubeMap.disableNormalViz();
        }

        // ---- BEGIN Primitive drawing section

        this.pushMatrix();
        this.scale(this.scaleFactor, this.scaleFactor, this.scaleFactor);

        // ---------- Bird
        this.pushMatrix();
        this.translate(0, 5, 0);
        this.translate(this.bird.dX, this.bird.dY, this.bird.dZ);
        this.scale(this.birdScaleFactor, this.birdScaleFactor, this.birdScaleFactor);
        this.translate(-this.bird.dX, -this.bird.dY, -this.bird.dZ);
        this.bird.display();
        this.popMatrix();
        //----------------

        // ----- Lightning
        this.pushMatrix();
        this.translate(0, 20, 0);
        this.rotate(Math.PI, 1, 0, 0);
        this.lightning.display();
        this.popMatrix();
        //----------------

        // --------- Twigs
        for (var i = 0; i < this.sticks.length; i++) {
            this.sticks[i].display();
        }
        //----------------

        // ---------- Nest
        this.pushMatrix();
        this.translate(17, 2.5, 0);
        this.nest.display();
        this.popMatrix();
        //----------------

        // -------- Forest
        this.pushMatrix();
        this.forest.display();
        this.popMatrix();
        //----------------

        // ------- Terrain
        this.terrain.display();
        //----------------

        // -------- House
        this.pushMatrix();
        this.scale(0.7, 0.7, 0.7);
        this.translate(0, 4, 7);
        this.house.display();
        this.popMatrix();
        //----------------

        // -------- SkyBox
        this.pushMatrix();
        this.mapMaterial.apply();
        this.cubeMap.display();
        this.popMatrix();
        //----------------

        this.popMatrix();

        // ---- END Primitive drawing section

    }
}