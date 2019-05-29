/**
 * MyCampFire
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyCampFire extends CGFobject {
    constructor(scene) {
        super(scene);

        this.scene.cylinder = new MyCylinder(this.scene, 8);
        this.scene.cone = new MyCone(this.scene, 8, 1);

        this.initMaterials();
    }

    initMaterials() {

        //------ Textures
        this.textureTrunk = new CGFtexture(this.scene, 'images/redWood.jpg');

        //------ Applied Material
        this.trunkMaterial = new CGFappearance(this.scene);
        this.trunkMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.trunkMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.trunkMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.trunkMaterial.setShininess(10.0);
        this.trunkMaterial.loadTexture('images/redWood.jpg');
        this.trunkMaterial.setTexture(this.textureTrunk);
        this.trunkMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.textureFire = new CGFtexture(this.scene, 'images/fire.jpg');

        //------ Applied Material
        this.fireMaterial = new CGFappearance(this.scene);
        this.fireMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.fireMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.fireMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.fireMaterial.setShininess(10.0);
        this.fireMaterial.loadTexture('images/redWood.jpg');
        this.fireMaterial.setTexture(this.textureFire);
        this.fireMaterial.setTextureWrap('REPEAT', 'REPEAT');
        //------

    }

    display() {

        this.trunkMaterial.apply();

        this.scene.pushMatrix();
        this.scene.translate(1.5, 0, 0.5);
        this.scene.rotate(Math.PI / 2, 0, 0, 1);
        this.scene.scale(0.3, 4, 0.3);
        this.scene.cylinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(1.5, 0, -1.5);
        this.scene.rotate(Math.PI / 2, 0, 0, 1);
        this.scene.scale(0.3, 4, 0.3);
        this.scene.cylinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.8, 0, -2);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.scene.scale(0.3, 3, 0.3);
        this.scene.cylinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-2, 0, -2);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.scene.scale(0.3, 3, 0.3);
        this.scene.cylinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.8, 0, -2);
        this.scene.rotate(Math.PI / 2, 1, 0, 1);
        this.scene.scale(0.3, 4, 0.3);
        this.scene.cylinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-2, 0, -2);
        this.scene.rotate(Math.PI / 2, 1, 0, -1);
        this.scene.scale(0.3, 4, 0.3);
        this.scene.cylinder.display();
        this.scene.popMatrix();

        this.fireMaterial.apply();

        this.scene.pushMatrix();
        this.scene.translate(-0.6, 0, -0.7);
        this.scene.scale(1, 2, 1);
        this.scene.cone.display();
        this.scene.popMatrix();

        /*  
        this.topMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, this.trunkHeight, 0);
        this.scene.scale(this.treeTopRadius, this.treeTopHeight, this.treeTopRadius);
        this.scene.cone.display();
        this.scene.popMatrix();
        */

    }

    updateBuffers(complexity) {
    }

    enableNormalViz() {
        this.scene.cylinder.enableNormalViz();
        this.scene.cone.enableNormalViz();
    }

    disableNormalViz() {
        this.scene.cylinder.disableNormalViz();
        this.scene.cone.disableNormalViz();
    }
}
