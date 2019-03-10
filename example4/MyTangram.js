/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers(scene);
    }

    initBuffers(scene) {

        //Initialize scene objects
        this.scene.diamond = new MyDiamond(scene);
        this.scene.triangle = new MyTriangle(scene);
        this.scene.parallelogram = new MyParallelogram(scene);
        this.scene.smalltriangle1 = new MyTriangleSmall(scene);
        this.scene.bigtriangle1 = new MyTriangleBig(scene);
        this.scene.smalltriangle2 = new MyTriangleSmall(scene);
        this.scene.bigtriangle2 = new MyTriangleBig(scene);

        //Objects connected to MyInterface
        this.scene.displayDiamond = true;
        this.scene.displayTriangle = true;
        this.scene.displayParallelogram = true;
        this.scene.displayTriangleSmall1 = true;
        this.scene.displayTriangleBig1 = true;
        this.scene.displayTriangleSmall2 = true;
        this.scene.displayTriangleBig2 = true;

    }

    display(scene) {

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
