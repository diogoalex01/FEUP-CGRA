/**
 * MyVoxelHill
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyVoxelHill extends CGFobject {
    constructor(scene, levels) {
        super(scene);
        this.scene = scene;
        this.levels = levels;

        this.scene.cubeQuad = new MyUnitCubeQuad(this.scene);
    }

    display() {

        // Draw Cube Quad
        for (var lvl = 1; lvl < this.levels + 1; lvl++) {
            for (var i = -(lvl - 1); i < lvl; i++) {
                for (var k = lvl - 1; k > -lvl; k--) {
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
