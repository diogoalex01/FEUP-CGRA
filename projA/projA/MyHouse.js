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
        this.scene.pyramid = new MyPyramid(this.scene, 12, 1);
        this.scene.prism = new MyPrism(this.scene, 10);
    }


    display() {

        this.scene.cubeQuad.display();
        this.scene.pyramid.display();
        this.scene.prism.display();

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
