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
        this.cubemap = new MyCubeMap(this);

        //Other variables connected to MyInterface
        this.selectedObject = 0;
        this.displayAxis = true;
        this.displayNormals = false;
        this.displayTree = false;
        this.displayTreeGroup = false;
        this.displayTreeRow = false;
        this.displayHouse = false;
        this.displayVoxelHill = false;
        this.displayCubeMap = false;
        this.scaleFactor = 2.0;
    }

    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
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
        if (this.displayAxis)
            this.axis.display();

        //Apply default appearance
        this.setDefaultAppearance();

        if (this.displayNormals) {
            this.prism.enableNormalViz();
            this.cylinder.enableNormalViz();
            this.tree.enableNormalViz();
            this.house.enableNormalViz();
            this.cubemap.enableNormalViz();
        }
        else {
            this.prism.disableNormalViz();
            this.cylinder.disableNormalViz();
            this.tree.disableNormalViz();
            this.house.disableNormalViz();
            this.cubemap.disableNormalViz();
        }

        // ---- BEGIN Primitive drawing section

        this.pushMatrix();
        this.scale(this.scaleFactor, this.scaleFactor, this.scaleFactor);

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

        if (this.displayCubeMap)
            this.cubemap.display();

        this.popMatrix();

        // ---- END Primitive drawing section
    }
}