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

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.prism = new MyPrism(this, 8);
        this.cylinder = new MyCylinder(this, 12);
        this.tree = new MyTree(this, 1.5, 0.2, 1.2, 0.8, 'images/wood.jpg', 'images/leaves.png');
        this.house = new MyHouse(this);
        this.treeGroup = new MyTreeGroupPatch(this);
        this.treeRow = new MyTreeRowPatch(this);
        this.hill = new MyVoxelHill(this, 5);
        this.finalScene = new MyFinalScene(this);

        //Objects connected to MyInterface
        this.selectedObject = 0;
        this.displayAxis = true;
        this.displayNormals = false;
        this.displayTree = false;
        this.displayTreeGroup = false;
        this.displayTreeRow = false;
        this.displayHouse = false;
        this.displayVoxelHill = false;
        this.displayFinalScene = false;
        this.displayTextures = true;
        this.scaleFactor = 0.2;
        this.ambientFactor = 0.9;

        //Other variables connected to MyInterface
        this.selectedDayMode = 0;
        this.dayMode = [0, 1];
        this.dayModeIds = { 'Day': 0, 'Night': 1 };
    }

    initLights() {

        // sun light
        this.lights[0].setPosition(0, 90.0, 0, 1.0);
        this.lights[0].setDiffuse(1, 0.90, 0.7, 1.0);
        this.lights[0].setSpecular(1, 0.90, 0.7, 1.0);
        this.lights[0].setConstantAttenuation(0.1);
        //this.lights[0].setLinearAttenuation(0.1);
        //this.lights[0].setQuadraticAttenuation(0.1);
        this.lights[0].setVisible(true);
        this.lights[0].enable();
        this.lights[0].update();

        // moon light
        this.lights[1].setPosition(0.0, 70.0, 0.0, 1.0);
        this.lights[1].setDiffuse(0.2, 0.7, 0.9, 1.0);
        this.lights[1].setSpecular(0.2, 0.7, 0.9, 1.0);
        //this.lights[1].setConstantAttenuation(0.4);
        this.lights[1].setLinearAttenuation(0.2);
        //this.lights[1].setQuadraticAttenuation(0.2);
        this.lights[1].disable();
        this.lights[1].update();

        // campfire light
        this.lights[2].setPosition(-0.1, 1.5, 1.9, 1.0);
        this.lights[2].setDiffuse(0.9, 0.7, 0.2, 1.0);
        this.lights[2].setSpecular(0.9, 0.7, 0.2, 1.0);
        //this.lights[2].setConstantAttenuation(0.9);
        this.lights[2].setLinearAttenuation(0.5);
        //this.lights[2].setQuadraticAttenuation(0.7);
        this.lights[2].disable();
        this.lights[2].update();

    }

    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
    }

    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }

    //Function that resets selected day mode
    updateDayMode() {
        if (this.selectedDayMode == 1) { // night
            this.ambientFactor = 0.3;
            this.lights[0].disable();
            this.lights[1].enable();
            this.lights[2].enable();
        }
        else if (this.selectedDayMode == 0) { // day
            this.ambientFactor = 0.9;
            this.lights[0].enable();
            this.lights[1].disable();
            this.lights[2].disable();
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

        this.lights[0].update();
        this.lights[1].update();
        this.lights[2].update();
        this.setGlobalAmbientLight(this.ambientFactor, this.ambientFactor, this.ambientFactor, 1);

        // Draw axis
        if (this.displayAxis)
            this.axis.display();

        //Apply default appearance
        //this.setDefaultAppearance();

        if (this.displayNormals) {
            this.prism.enableNormalViz();
            this.cylinder.enableNormalViz();
            this.tree.enableNormalViz();
            this.house.enableNormalViz();
        }
        else {
            this.prism.disableNormalViz();
            this.cylinder.disableNormalViz();
            this.tree.disableNormalViz();
            this.house.disableNormalViz();
        }

        // ---- BEGIN Primitive drawing section

        this.pushMatrix();
        this.scale(this.scaleFactor, this.scaleFactor, this.scaleFactor);

        if (this.displayTextures) {
            this.enableTextures(1);
        }
        else {
            this.enableTextures(0);
        }

        if (this.displayTreeGroup)
            this.treeGroup.display();

        if (this.displayTreeRow)
            this.treeRow.display();

        if (this.displayTree)
            this.tree.display();

        if (this.displayHouse)
            this.house.display();

        if (this.displayVoxelHill)
            this.hill.display();

        if (this.displayFinalScene) {
            //console.log(this.selectedDayMode);
            this.finalScene.display(this.selectedDayMode);
        }

        this.popMatrix();

        // ---- END Primitive drawing section
    }
}