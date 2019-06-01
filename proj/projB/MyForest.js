/**
 * MyForest
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyForest extends CGFobject {
    constructor(scene) {
        super(scene);

        this.plant1 = new MyLSPlant(this.scene);
        this.plant2 = new MyLSPlant(this.scene);
        this.plant3 = new MyLSPlant(this.scene);
        this.plant4 = new MyLSPlant(this.scene);
        this.plant5 = new MyLSPlant(this.scene);
        this.plant6 = new MyLSPlant(this.scene);
        this.plant7 = new MyLSPlant(this.scene);
        this.plant8 = new MyLSPlant(this.scene);

        this.initMaterials();
    }

    initMaterials() {
    }

    display() {

        this.scene.pushMatrix();
        this.scene.translate(15, 4, 5);
        this.plant1.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(12, 4, 13);
        this.plant2.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-15, 4, 5);
        this.plant3.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-12, 4, 13);
        this.plant4.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(15, 4, -5);
        this.plant5.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(8, 4, -13);
        this.plant6.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-15, 4, -5);
        this.plant7.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-5, 4, -13);
        this.plant8.display();
        this.scene.popMatrix();
    }

    updateBuffers(complexity) {
    }

    enableNormalViz() {
    }

    disableNormalViz() {
    }
}
