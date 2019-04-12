/**
 * MyHouse
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyHouse extends CGFobject {
    constructor(scene) {
        super(scene);
        this.scene = scene;

        this.scene.cubeQuad = new MyUnitCubeQuad(this.scene);
        this.scene.pyramid = new MyPyramid(this.scene, 4, 1);
        this.scene.prism = new MyPrism(this.scene, 10);
        this.scene.cylinder = new MyCylinder(this.scene, 10);

        this.initMaterials();
    }

    initMaterials() {

        //------ Textures
        this.textureStair = new CGFtexture(this.scene, 'images/stairs.jpg');

        //------ Applied Material
        this.StairsMaterial = new CGFappearance(this.scene);
        this.StairsMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.StairsMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.StairsMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.StairsMaterial.setShininess(10.0);
        this.StairsMaterial.setTexture(this.textureStair);
        this.StairsMaterial.setTextureWrap('REPEAT', 'REPEAT');

        //------ Textures
        this.textureMarble = new CGFtexture(this.scene, 'images/marble.jpg');

        //------ Applied Material
        this.columnMaterial = new CGFappearance(this.scene);
        this.columnMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.columnMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.columnMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.columnMaterial.setShininess(10.0);
        this.columnMaterial.setTexture(this.textureMarble);
        this.columnMaterial.setTextureWrap('REPEAT', 'REPEAT');

                //------ Textures
        this.textureRoof = new CGFtexture(this.scene, 'images/roof.jpg');

        //------ Applied Material
        this.roofMaterial = new CGFappearance(this.scene);
        this.roofMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.roofMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.roofMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.roofMaterial.setShininess(10.0);
        this.roofMaterial.setTexture(this.textureRoof);
        this.roofMaterial.setTextureWrap('REPEAT', 'REPEAT');

        //------ Textures
        this.textureWall = new CGFtexture(this.scene, 'images/wall.jpg');

        //------ Applied Material
        this.wallMaterial = new CGFappearance(this.scene);
        this.wallMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.wallMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.wallMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.wallMaterial.setShininess(10.0);
        this.wallMaterial.setTexture(this.textureWall);
        this.wallMaterial.setTextureWrap('REPEAT', 'REPEAT');
        //------

        //------ Textures
        this.texturePole = new CGFtexture(this.scene, 'images/metal.jpg');

        //------ Applied Material
        this.poleMaterial = new CGFappearance(this.scene);
        this.poleMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.poleMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.poleMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.poleMaterial.setShininess(10.0);
        this.poleMaterial.setTexture(this.texturePole);
        this.poleMaterial.setTextureWrap('REPEAT', 'REPEAT');

        //------ Textures
        this.textureFlag = new CGFtexture(this.scene, 'images/flag.png');

        //------ Applied Material
        this.flagMaterial = new CGFappearance(this.scene);
        this.flagMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.flagMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.flagMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.flagMaterial.setShininess(10.0);
        this.flagMaterial.setTexture(this.textureFlag);
        this.flagMaterial.setTextureWrap('REPEAT', 'REPEAT');
        //------
    }

    display() {

        this.StairsMaterial.apply();

        // first stair tread
        this.scene.pushMatrix();
        this.scene.scale(6, 0.125, 4);
        this.scene.cubeQuad.display();
        this.scene.popMatrix();

        // second stair tread
        this.scene.pushMatrix();
        this.scene.translate(0, 0.125, 0);
        this.scene.scale(5.75, 0.125, 3.75);
        this.scene.cubeQuad.display();
        this.scene.popMatrix();

        // third stair tread
        this.scene.pushMatrix();
        this.scene.translate(0, 0.25, 0);
        this.scene.scale(5.5, 0.125, 3.5);
        this.scene.cubeQuad.display();
        this.scene.popMatrix();

        this.columnMaterial.apply();

        // left columns
        for (var i = 0; i < 5.2; i+= 0.3713) {
            this.scene.pushMatrix();
            this.scene.translate(-2.60 + i, 0.25, 1.6);
            this.scene.scale(0.1, 1, 0.11);
            this.scene.prism.display();
            this.scene.popMatrix();
        }

        // right columns
        for (var i = 0; i < 5.2; i+= 0.3713) {
            this.scene.pushMatrix();
            this.scene.translate(-2.60 + i, 0.25, -1.6);
            this.scene.scale(0.1, 1, 0.11);
            this.scene.prism.display();
            this.scene.popMatrix();
        }

        // front columns
        for (var i = 0; i < 2.8287; i+= 0.3713) {
            this.scene.pushMatrix();
            this.scene.translate(-2.60, 0.25, 1.295 - i);
            this.scene.scale(0.1, 1, 0.11);
            this.scene.prism.display();
            this.scene.popMatrix();
        }

        // back columns
        for (var i = 0; i < 2.8287; i+= 0.3713) {
            this.scene.pushMatrix();
            this.scene.translate(2.60, 0.25, 1.295 - i);
            this.scene.scale(0.1, 1, 0.11);
            this.scene.prism.display();
            this.scene.popMatrix();
        }

        // roof fascia
        this.scene.pushMatrix();
        this.scene.translate(0, 1.25, 0);
        this.scene.scale(5.5, 0.125, 3.5);
        this.scene.cubeQuad.display();
        this.scene.popMatrix();

        this.roofMaterial.apply();

        // roof
        this.scene.pushMatrix();
        this.scene.translate(0, 1.3135, 0);
        this.scene.scale(3.8903, 0.75, 2.475);
        this.scene.rotate(-Math.PI / 4, 0, 1, 0);
        this.scene.pyramid.display();
        this.scene.popMatrix();

        this.wallMaterial.apply();

        // inner building
        this.scene.pushMatrix();
        this.scene.translate(0, 0.75, 0);
        this.scene.scale(4.5, 1, 2.75);
        this.scene.cubeQuad.display();
        this.scene.popMatrix();

        this.poleMaterial.apply();

        // flag pole
        this.scene.pushMatrix();
        this.scene.translate(0, 2, 0);
        this.scene.scale(0.01, 0.75, 0.01);
        this.scene.cylinder.display();
        this.scene.popMatrix();

        this.flagMaterial.apply();

        // flag
        this.scene.pushMatrix();
        this.scene.translate(0, 2.6, -0.225);
        this.scene.scale(0.01, 0.3, 0.45);
        this.scene.rotate(3 * Math.PI / 2, 1, 0, 0);
        this.scene.cubeQuad.display();
        this.scene.popMatrix();
    }

    updateBuffers(complexity) {
    }

    enableNormalViz() {
        this.scene.cubeQuad.enableNormalViz();
        this.scene.pyramid.enableNormalViz();
        this.scene.prism.enableNormalViz();
    }

    disableNormalViz() {
        this.scene.cubeQuad.disableNormalViz();
        this.scene.pyramid.disableNormalViz();
        this.scene.prism.disableNormalViz();
    }
}
