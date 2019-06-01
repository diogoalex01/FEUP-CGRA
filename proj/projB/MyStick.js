/**
 * MyStick
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyStick extends CGFobject {
    constructor(scene, x, y, z) {
        super(scene);
        this.x = x;
        this.y = y;
        this.z = z;
        this.scene.cylinder = new MyCylinder(this.scene, 8);

        this.initMaterials();
    }

    initMaterials() {


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
        this.scene.translate(this.x, this.y, this.z);
        this.scene.translate(1.5, 0, 0.5);
        this.scene.rotate(Math.PI / 2, 0, 0, 1);
        this.scene.scale(0.1, 2, 0.1);
        this.scene.cylinder.display();
        this.scene.popMatrix();


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
