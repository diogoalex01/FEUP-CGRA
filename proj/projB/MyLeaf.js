/**
 * MyLeaf
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLeaf extends CGFobject {
    constructor(scene) {
        super(scene);
        this.scene.triangle = new MyTriangle(this.scene);
        this.initMaterials();
    }

    initMaterials() {

        this.green = new CGFappearance(this.scene);
        this.green.setAmbient(0.04, 0.4, 0.14, 1.0);
        this.green.setDiffuse(0.04, 0.4, 0.14, 1.0);
        this.green.setSpecular(1, 1, 1, 1.0);
        this.green.setShininess(10.0);

    }

    display() {

        this.scene.pushMatrix();
        this.green.apply();
        this.scene.rotate(Math.PI / 2, 0, 0, 1);
        this.scene.triangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.green.apply();
		this.scene.rotate(Math.PI, 0, 1, 0);
        this.scene.rotate(Math.PI / 2, 0, 0, 1);
        this.scene.triangle.display();
        this.scene.popMatrix();

    }

    updateBuffers(complexity) {
    }

    enableNormalViz() {
        this.scene.triangle.enableNormalViz();
    }

    disableNormalViz() {
        this.scene.triangle.disableNormalViz();
    }
}
