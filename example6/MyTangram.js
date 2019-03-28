/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
    constructor(scene) {
        super(scene);
        this.scene = scene;
        this.initMaterials();

        //Initialize scene objects
        this.scene.diamond = new MyDiamond(this.scene);
        this.scene.triangle = new MyTriangle(this.scene);
        this.scene.parallelogram = new MyParallelogram(this.scene);
        this.scene.smalltriangle1 = new MyTriangleSmall(this.scene, true);
        this.scene.smalltriangle2 = new MyTriangleSmall(this.scene, false);
        this.scene.bigtriangle1 = new MyTriangleBig(this.scene, true);
        this.scene.bigtriangle2 = new MyTriangleBig(this.scene, false);
        
        //Objects connected to MyInterface
        this.scene.displayDiamond = true;
        this.scene.displayTriangle = true;
        this.scene.displayParallelogram = true;
        this.scene.displayTriangleSmall1 = true;
        this.scene.displayTriangleBig1 = true;
        this.scene.displayTriangleSmall2 = true;
        this.scene.displayTriangleBig2 = true;
    }
         
    initMaterials() {

        // Colors
        this.red = new CGFappearance(this.scene);
        this.red.setAmbient(1, 0.11, 0.11, 1.0);
        this.red.setDiffuse(1, 0.11, 0.11, 1.0);
        this.red.setSpecular(1, 1, 1, 1.0);
        this.red.setShininess(10.0);

        this.green = new CGFappearance(this.scene);
        this.green.setAmbient(0, 1, 0, 1.0);
        this.green.setDiffuse(0, 1, 0, 1.0);
        this.green.setSpecular(1, 1, 1, 1.0);
        this.green.setShininess(10.0);

        this.blue = new CGFappearance(this.scene);
        this.blue.setAmbient(0, 0.61, 1, 1.0);
        this.blue.setDiffuse(0, 0.61, 1, 1.0);
        this.blue.setSpecular(1, 1, 1, 1.0);
        this.blue.setShininess(10.0);

        this.yellow = new CGFappearance(this.scene);
        this.yellow.setAmbient(1, 1, 0, 1.0);
        this.yellow.setDiffuse(1, 1, 0, 1.0);
        this.yellow.setSpecular(1, 1, 1, 1.0);
        this.yellow.setShininess(10.0);

        this.orange = new CGFappearance(this.scene);
        this.orange.setAmbient(1, 0.61, 0, 1.0);
        this.orange.setDiffuse(1, 0.61, 0, 1.0);
        this.orange.setSpecular(1, 1, 1, 1.0);
        this.orange.setShininess(10.0);

        this.purple = new CGFappearance(this.scene);
        this.purple.setAmbient(0.59, 0.31, 0.75, 1.0);
        this.purple.setDiffuse(0.59, 0.31, 0.75, 1.0);
        this.purple.setSpecular(1, 1, 1, 1.0);
        this.purple.setShininess(10.0);

        this.pink = new CGFappearance(this.scene);
        this.pink.setAmbient(1, 0.61, 0.81, 1.0);
        this.pink.setDiffuse(1, 0.61, 0.81, 1.0);
        this.pink.setSpecular(1, 1, 1, 1.0);
        this.pink.setShininess(10.0);

        //------ Textures
        this.textureTangram = new CGFtexture(this.scene, 'images/tangram.png');

        //------ Applied Material
        this.diamondMaterial = new CGFappearance(this.scene);
        this.diamondMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.diamondMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.diamondMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.diamondMaterial.setShininess(10.0);
        this.diamondMaterial.loadTexture('images/tangram.png');
        this.diamondMaterial.setTexture(this.textureTangram);
        this.diamondMaterial.setTextureWrap('REPEAT', 'REPEAT');
        //------

    }


    display() {

        this.scene.pushMatrix();
        this.scene.scale(0.25, 0.25, 0.25);

        this.diamondMaterial.apply();

        // Draw diamond
        this.scene.pushMatrix();
        this.scene.multMatrix(
            [1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, -5 * Math.sqrt(2) / 2, 0, 1]);
        this.scene.multMatrix(
            [Math.cos(Math.PI / 4), Math.sin(Math.PI / 4), 0, 0,
            -Math.sin(Math.PI / 4), Math.cos(Math.PI / 4), 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1]);
        this.scene.diamond.display();
        this.scene.popMatrix();


        // Draw triangle
        this.scene.pushMatrix();
        this.scene.translate(Math.sqrt(2) / 2, -Math.sqrt(2), 0);
        this.scene.rotate(-Math.PI / 4, 0, 0, 1);
        this.scene.triangle.display();
        this.scene.popMatrix();

        
        // Draw parallelogram
        this.scene.pushMatrix();
        //this.scene.scale(-1,1,1);
        this.scene.translate(0, 2 * Math.sqrt(2), 0);
        this.scene.rotate(1.241, 0, 0, 1);
        this.scene.parallelogram.display();
        this.scene.popMatrix();


        // Draw Small Triangle 1
        this.scene.pushMatrix();
        this.scene.translate(0, -Math.sqrt(2) / 2, 0);
        this.scene.rotate(Math.PI / 4, 0, 0, 1);
        this.scene.smalltriangle1.display();
        this.scene.popMatrix();


        // Draw Small Triangle 2
        this.scene.pushMatrix();
        this.scene.translate(0, -3 / Math.sqrt(2), 0);
        this.scene.rotate(3 * Math.PI / 4, 0, 0, 1);
        this.scene.smalltriangle2.display();
        this.scene.popMatrix();


        // Draw Big Triangle 1
        this.scene.pushMatrix();
        this.scene.translate(0, Math.sqrt(2), 0);
        this.scene.rotate(3 * Math.PI / 4, 0, 0, 1);
        this.scene.bigtriangle1.display();
        this.scene.popMatrix();


        // Draw Big Triangle 2
        this.scene.pushMatrix();
        this.scene.translate(0, Math.sqrt(2), 0);
        this.scene.rotate(-Math.PI / 4, 0, 0, 1);
        this.scene.bigtriangle2.display();
        this.scene.popMatrix();

        this.scene.popMatrix();
    }

    updateBuffers(complexity) {
    }

    enableNormalViz() {
        this.scene.triangle.enableNormalViz();
        this.scene.diamond.enableNormalViz();
        this.scene.parallelogram.enableNormalViz();
        this.scene.bigtriangle1.enableNormalViz();
        this.scene.bigtriangle2.enableNormalViz();
        this.scene.smalltriangle1.enableNormalViz();
        this.scene.smalltriangle2.enableNormalViz();
    }

    disableNormalViz() {
        this.scene.triangle.disableNormalViz();
        this.scene.diamond.disableNormalViz();
        this.scene.parallelogram.disableNormalViz();
        this.scene.bigtriangle1.disableNormalViz();
        this.scene.bigtriangle2.disableNormalViz();
        this.scene.smalltriangle1.disableNormalViz();
        this.scene.smalltriangle2.disableNormalViz();
    }
}
