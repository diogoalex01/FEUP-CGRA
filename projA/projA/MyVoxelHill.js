/**
 * MyVoxelHill
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyVoxelHill extends CGFobject {
    constructor(scene, levels) {
        super(scene);
        this.initMaterials();
        this.scene = scene;
        this.levels = levels;

        this.scene.cubeQuad = new MyUnitCubeQuad(this.scene);
    }

    initMaterials() {

        //------ Textures
        this.textureHill = new CGFtexture(this.scene, 'images/hill.jpg');

        //------ Applied Material
        this.hillMaterial = new CGFappearance(this.scene);
        this.hillMaterial.setAmbient(1, 1, 1, 1);
        this.hillMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.hillMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.hillMaterial.setShininess(10.0);
        this.hillMaterial.setTexture(this.textureHill);
        this.hillMaterial.setTextureWrap('REPEAT', 'REPEAT');
        
    }

    display() {

        // Draw Cube Quad

        this.hillMaterial.apply();
        for (var lvl = 1; lvl < this.levels + 1; lvl++) {
            for (var i = -(lvl - 1); i < lvl; i++) {
                for (var k = lvl - 1; k > -lvl; k--) {
                    if (Math.abs(k) + 1 != lvl && Math.abs(i) + 1 != lvl)
                        continue;

                    this.scene.pushMatrix();
                    this.scene.translate(i, -lvl + this.levels, k);
                    this.scene.cubeQuad.display();
                    this.scene.popMatrix();
                }
            }
        }
    }

    updateBuffers(complexity) {
    }

    enableNormalViz() {
        this.scene.cubeQuad.enableNormalViz();
    }

    disableNormalViz() {
        this.scene.cubeQuad.disableNormalViz();
    }
}
