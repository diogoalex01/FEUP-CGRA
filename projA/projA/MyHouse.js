/**
 * MyHouse
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyHouse extends CGFobject {
    constructor(scene) {
        super(scene);
        this.scene = scene;

        this.scene.cubeQuad = new MyUnitCubeQuad(this.scene);
        this.scene.pyramid = new MyPyramid(this.scene, 4, 1);
        this.scene.prism = new MyPrism(this.scene, 10);
        this.scene.cylinder = new MyCylinder(this.scene, 10);
    }

    display() {

        // first stair tread
        this.scene.pushMatrix();
        this.scene.scale(6, 0.125, 4);
        this.scene.cubeQuad.display();
        this.scene.popMatrix();

        // second stair tread
        this.scene.pushMatrix();
        this.scene.translate(0, 0.125, 0);
        this.scene.scale(5.75, 0.125, 3.75);
        this.scene.cubeQuad.display();
        this.scene.popMatrix();

        // third stair tread
        this.scene.pushMatrix();
        this.scene.translate(0, 0.25, 0);
        this.scene.scale(5.5, 0.125, 3.5);
        this.scene.cubeQuad.display();
        this.scene.popMatrix();

        // left columns
        for (var i = 0; i < 5.2; i+= 0.3713) {
            this.scene.pushMatrix();
            this.scene.translate(-2.60 + i, 0.25, 1.6);
            this.scene.scale(0.1, 1, 0.11);
            this.scene.prism.display();
            this.scene.popMatrix();
        }

        // right columns
        for (var i = 0; i < 5.2; i+= 0.3713) {
            this.scene.pushMatrix();
            this.scene.translate(-2.60 + i, 0.25, -1.6);
            this.scene.scale(0.1, 1, 0.11);
            this.scene.prism.display();
            this.scene.popMatrix();
        }

        // front columns
        for (var i = 0; i < 2.8287; i+= 0.3713) {
            this.scene.pushMatrix();
            this.scene.translate(-2.60, 0.25, 1.295 - i);
            this.scene.scale(0.1, 1, 0.11);
            this.scene.prism.display();
            this.scene.popMatrix();
        }

        // back columns
        for (var i = 0; i < 2.8287; i+= 0.3713) {
            this.scene.pushMatrix();
            this.scene.translate(2.60, 0.25, 1.295 - i);
            this.scene.scale(0.1, 1, 0.11);
            this.scene.prism.display();
            this.scene.popMatrix();
        }

        // roof fascia
        this.scene.pushMatrix();
        this.scene.translate(0, 1.25, 0);
        this.scene.scale(5.5, 0.125, 3.5);
        this.scene.cubeQuad.display();
        this.scene.popMatrix();

        // roof
        this.scene.pushMatrix();
        this.scene.translate(0, 1.3135, 0);
        this.scene.scale(3.8903, 0.75, 2.475);
        this.scene.rotate(-Math.PI / 4, 0, 1, 0);
        this.scene.pyramid.display();
        this.scene.popMatrix();

        // inner building
        this.scene.pushMatrix();
        this.scene.translate(0, 0.75, 0);
        this.scene.scale(4.5, 1, 2.75);
        this.scene.cubeQuad.display();
        this.scene.popMatrix();

        // flag pole
        this.scene.pushMatrix();
        this.scene.translate(0, 2, 0);
        this.scene.scale(0.01, 0.75, 0.01);
        this.scene.cylinder.display();
        this.scene.popMatrix();

        // flag
        this.scene.pushMatrix();
        this.scene.translate(0, 2.6, -0.225);
        this.scene.scale(0.01, 0.3, 0.45);
        this.scene.cubeQuad.display();
        this.scene.popMatrix();
    }

    updateBuffers(complexity) {
    }

    enableNormalViz() {
        this.scene.cubeQuad.enableNormalViz();
        this.scene.pyramid.enableNormalViz();
        this.scene.prism.enableNormalViz();
    }

    disableNormalViz() {
        this.scene.cubeQuad.disableNormalViz();
        this.scene.pyramid.disableNormalViz();
        this.scene.prism.disableNormalViz();
    }
}
