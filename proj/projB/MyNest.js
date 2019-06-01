/**
 * MyNest
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyNest extends CGFobject {
    constructor(scene) {
        super(scene);

        this.scene.cylinder = new MyCylinder(this.scene, 8);

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
        this.trunkMaterial.loadTexture('images/wood.jpg');
        this.trunkMaterial.setTexture(this.textureTrunk);
        this.trunkMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.textureStick = new CGFtexture(this.scene, 'images/wood2.jpg');

        //------ Applied Material
        this.stickMaterial = new CGFappearance(this.scene);
        this.stickMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.stickMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.stickMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.stickMaterial.setShininess(10.0);
        this.stickMaterial.loadTexture('images/wood2.jpg');
        this.stickMaterial.setTexture(this.textureStick);
        this.stickMaterial.setTextureWrap('REPEAT', 'REPEAT');
        //------

    }

    display() {

        this.stickMaterial.apply();
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

        this.trunkMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(-0.6, 0, -0.7);
        this.scene.scale(2, 1, 2);
        this.scene.cylinder.display();
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
