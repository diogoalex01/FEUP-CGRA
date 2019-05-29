/**
 * MyBranch
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyBranch extends CGFobject {
    constructor(scene) {
        super(scene);
        this.scene.cylinder = new MyCylinder(this.scene, 4);
        this.initMaterials();
    }

    initMaterials() {

        //------ Textures
        this.textureTrunk = new CGFtexture(this.scene, 'images/wood.jpg');

        //------ Applied Material
        this.trunkMaterial = new CGFappearance(this.scene);
        this.trunkMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.trunkMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.trunkMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.trunkMaterial.setShininess(10.0);
        this.trunkMaterial.setTexture(this.textureTrunk);
        this.trunkMaterial.setTextureWrap('REPEAT', 'REPEAT');

    }

    display() {

        this.scene.pushMatrix();
        this.trunkMaterial.apply();
        this.scene.scale(0.3, 1, 0.3);
        this.scene.cylinder.display();
        this.scene.popMatrix();

    }

    updateBuffers(complexity) {
    }

    enableNormalViz() {
        this.scene.cylinder.enableNormalViz();
    }

    disableNormalViz() {
        this.scene.cylinder.disableNormalViz();
    }
}
