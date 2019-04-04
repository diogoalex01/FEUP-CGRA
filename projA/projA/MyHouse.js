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
        this.scene.pyramid = new MyPyramid(this.scene, 6, 1);
        this.scene.prism = new MyPrism(this.scene, 10);
    }

    display() {

        // Draw Cube Quad
        this.scene.cubeQuad.display();
        
        // Draw Pyramid
        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0);
        //this.scene.rotate(-Math.PI / 4, 0, 0, 1);
        this.scene.pyramid.display();
        this.scene.popMatrix();

        // Draw Prism
        //this.scene.prism.display();

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
