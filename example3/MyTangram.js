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
        scene.diamond = new MyDiamond(scene);
        scene.triangle = new MyTriangle(scene);
        scene.parallelogram = new MyParallelogram(scene);
        scene.smalltriangle1 = new MyTriangleSmall(scene);
        scene.bigtriangle1 = new MyTriangleBig(scene);
        scene.smalltriangle2 = new MyTriangleSmall(scene);
        scene.bigtriangle2 = new MyTriangleBig(scene);

        //Objects connected to MyInterface
        scene.displayDiamond = true;
        scene.displayTriangle = true;
        scene.displayParallelogram = true;
        scene.displayTriangleSmall1 = true;
        scene.displayTriangleBig1 = true;
        scene.displayTriangleSmall2 = true;
        scene.displayTriangleBig2 = true;

	}

	display(scene)
	{

	// Draw diamond
        if (scene.displayDiamond)
        {
            scene.pushMatrix();
            
            scene.multMatrix([1, 0, 0, 0,
                             0, 1, 0, 0,
                             0, 0, 1, 0,
                             0, -5*Math.sqrt(2)/2 , 0, 1]);
            scene.multMatrix([Math.cos(Math.PI/4), Math.sin(Math.PI/4), 0, 0,
                             -Math.sin(Math.PI/4), Math.cos(Math.PI/4), 0, 0,
                             0, 0, 1, 0,
                             0, 0, 0, 1]);
            scene.diamond.display();
            scene.popMatrix();
        }

        // Draw triangle
        if (scene.displayTriangle)
        {
            scene.pushMatrix();

            scene.translate(Math.sqrt(2)/2,-Math.sqrt(2),0);
            scene.rotate(-Math.PI/4,0,0,1);

            scene.triangle.display();

            scene.popMatrix();
            
        }

        // Draw parallelogram
        if (scene.displayParallelogram)
        {
            scene.pushMatrix();
            
            //scene.scale(-1,1,1);
           	scene.translate(0,2*Math.sqrt(2),0);
            scene.rotate(1.241,0,0,1);
          
            scene.parallelogram.display();

            scene.popMatrix();
        }
            

        // Draw Small Triangle 1
        if (scene.displayTriangleSmall1)
        {
            scene.pushMatrix();

            scene.translate(0,-Math.sqrt(2)/2,0);
            scene.rotate(Math.PI/4,0,0,1);

            scene.smalltriangle1.display();

            scene.popMatrix();
        }

        // Draw Small Triangle 2
        if (scene.displayTriangleSmall2)
        {
            scene.pushMatrix();

            scene.translate(0,-3/Math.sqrt(2),0);
            scene.rotate(3*Math.PI/4,0,0,1);

            scene.smalltriangle2.display();

            scene.popMatrix();
        }


        // Draw Big Triangle 1
        if (scene.displayTriangleBig1)
        {
            scene.pushMatrix();

            scene.translate(0,Math.sqrt(2),0);
            scene.rotate(3*Math.PI/4,0,0,1);
           
            scene.bigtriangle1.display();

            scene.popMatrix();
        }

        // Draw Big Triangle 2
        if (scene.displayTriangleBig2)
        {
            scene.pushMatrix();

            scene.translate(0,Math.sqrt(2),0);
            scene.rotate(-Math.PI/4,0,0,1);
           
            scene.bigtriangle2.display();

            scene.popMatrix();
        }
	}
}

