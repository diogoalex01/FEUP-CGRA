/**
 * MyTree
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTree extends CGFobject {
    constructor(scene, trunkHeight, trunkRadius, treeTopHeight, treeTopRadius, trunkTexture,
        treeTopTexture) {
        super(scene);
        this.scene = scene;
        this.scene.trunkHeight = trunkHeight;
        this.scene.trunkRadius = trunkRadius;
        this.scene.treeTopHeight = treeTopHeight;
        this.scene.treeTopRadius = treeTopRadius;
        this.scene.trunkTexture = trunkTexture;
        this.scene.treeTopTexture = treeTopTexture;
    }


    display() {

        //this.diamondMaterial.apply();
        
    }

    updateBuffers(complexity) {
    }

    enableNormalViz() {
        //this.scene.cubeQuad.enableNormalViz();
        //this.scene.pyramid.enableNormalViz();
        //this.scene.prism.enableNormalViz();
    }

    disableNormalViz() {
        //this.scene.cubeQuad.disableNormalViz();
        //this.scene.pyramid.disableNormalViz();
        //this.scene.prism.disableNormalViz();
    }
}
