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

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.enableTextures(true);
        this.setUpdatePeriod(50);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.plane = new Plane(this, 32);
        this.house = new MyHouse(this);
        this.cubeMap = new MyCubeMap(this);
        this.bird = new MyBird(this);

        //Objects connected to MyInterface
        this.selectedObject = 0;
        this.displayAxis = true;
        this.displayNormals = false;
        this.displayHouse = false;
        this.displayBird = true;
        this.scaleFactor = 4;
        this.ambientFactor = 0.5;
        
        this.speed = 1;

        this.initMaterials();
    }

    update(t) {
        this.bird.dY = 0.25* Math.sin(2*Math.PI*t/1000*this.speed);
        this.bird.wingRot = Math.PI/4*Math.sin(2*Math.PI*t/1000*this.speed);
        this.keyInput();

        this.bird.moveBird();
    }

    keyInput(){
        var text="keys pressed; ";
         
         if(this.gui.isKeyPressed("KeyW")){
            text+=" W ";
            this.bird.accelerateBird(0.1*this.speed);
        }

         if(this.gui.isKeyPressed("KeyS")){
            text+=" S ";
            this.bird.accelerateBird(-0.1*this.speed);
        }

         if(this.gui.isKeyPressed("KeyA")){
            text+=" A ";
            this.bird.rotateBird(Math.PI/12*this.speed);
        }

         if(this.gui.isKeyPressed("KeyD")){
            text+=" D ";
            this.bird.rotateBird(-Math.PI/12*this.speed);
        }

         /*if(this.gui.isKeyPressed("KeyR")){
            text+=" R ";
            this.bird.deltaX = 0;
            this.bird.deltaZ = 0;
            this.bird.rotation = 0;
            this.bird.speed = 0;
        }*///                          this one's NOT WORKING fsr  (╯°□°）╯︵ ┻━┻   

    
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

        /*this.pushMatrix();
        this.rotate(-0.5 * Math.PI, 1, 0, 0);
        this.scale(60, 60, 1);
        this.plane.display();
        this.popMatrix();*/

        /*this.mapMaterial.apply();
        this.cubeMap.display();*/

        if (this.displayHouse)
            this.house.display();

        if (this.displayBird) {
            this.pushMatrix();
            this.translate(0, 0, 0);
            this.bird.display();
            this.popMatrix();
        }

        this.popMatrix();

        // ---- END Primitive drawing section

    }
}