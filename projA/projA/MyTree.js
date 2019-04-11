/**
 * MyTree
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTree extends CGFobject {
    constructor(scene, trunkHeight, trunkRadius, treeTopHeight, treeTopRadius, trunkTexture,
        treeTopTexture) {
        super(scene);
        //this.scene = scene;
        this.trunkHeight = trunkHeight;
        this.trunkRadius = trunkRadius;
        this.treeTopHeight = treeTopHeight;
        this.treeTopRadius = treeTopRadius;
        this.trunkTexture = trunkTexture;
        this.treeTopTexture = treeTopTexture;

        this.scene.cylinder = new MyCylinder(this.scene, 8);
        this.scene.cone = new MyCone(this.scene, 8), 1;

        this.initMaterials();
    }
    initMaterials() {

        //------ Textures
        this.textureTrunk = new CGFtexture(this.scene, this.trunkTexture);

        //------ Applied Material
        this.trunkMaterial = new CGFappearance(this.scene);
        this.trunkMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.trunkMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.trunkMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.trunkMaterial.setShininess(10.0);
        this.trunkMaterial.loadTexture(this.trunkTexture);
        this.trunkMaterial.setTexture(this.textureTrunk);
        this.trunkMaterial.setTextureWrap('REPEAT', 'REPEAT');

        //------ Textures
        this.textureTop = new CGFtexture(this.scene, this.treeTopTexture);

        //------ Applied Material
        this.topMaterial = new CGFappearance(this.scene);
        this.topMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.topMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.topMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.topMaterial.setShininess(10.0);
        this.topMaterial.loadTexture(this.treeTopTexture);
        this.topMaterial.setTexture(this.textureTop);
        this.topMaterial.setTextureWrap('REPEAT', 'REPEAT');
        //------

    }
    display() 
    {

        this.scene.pushMatrix();

        this.trunkMaterial.apply();

        this.scene.scale(this.trunkRadius, this.trunkHeight, this.trunkRadius);
        this.scene.cylinder.display();
        this.scene.popMatrix();

        this.topMaterial.apply();

        this.scene.pushMatrix();
        this.scene.translate(0, this.trunkHeight, 0);
        this.scene.scale(this.treeTopRadius, this.treeTopHeight, this.treeTopRadius);
        this.scene.cone.display();
        this.scene.popMatrix();
        
    }

    updateBuffers(complexity) {
    }

    enableNormalViz() {
        this.scene.cylinder.enableNormalViz();
        this.scene.cone.enableNormalViz();
        //this.scene.prism.enableNormalViz();
    }

    disableNormalViz() {
        this.scene.cylinder.disableNormalViz();
        this.scene.cone.disableNormalViz();
        //this.scene.prism.disableNormalViz();
    }
}
