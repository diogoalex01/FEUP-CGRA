/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.diamond = new MyDiamond(this);
        this.triangle = new MyTriangle(this);
        this.parallelogram = new MyParallelogram(this);
        this.smalltriangle1 = new MyTriangleSmall(this);
        this.bigtriangle1 = new MyTriangleBig(this);
        this.smalltriangle2 = new MyTriangleSmall(this);
        this.bigtriangle2 = new MyTriangleBig(this);

        //Objects connected to MyInterface
        this.displayAxis = true;
        this.displayDiamond = false;
        this.displayTriangle = false;
        this.displayParallelogram = false;
        this.displayTriangleSmall1 = false;
        this.displayTriangleBig1 = false;
        this.displayTriangleSmall2 = false;
        this.displayTriangleBig2 = false;
        this.scaleFactor = 1;
    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();
        
        // Draw axis
        if (this.displayAxis)
            this.axis.display();

        this.setDefaultAppearance();

        var sca = [this.scaleFactor, 0.0, 0.0, 0.0,
                    0.0, this.scaleFactor, 0.0, 0.0,
                    0.0, 0.0, this.scaleFactor, 0.0,
                    0.0, 0.0, 0.0, 1.0];
        this.multMatrix(sca);

        // ---- BEGIN Primitive drawing section

        // Draw diamond
        if (this.displayDiamond)
        {
            this.pushMatrix();
            
            this.multMatrix([1, 0, 0, 0,
                             0, 1, 0, 0,
                             0, 0, 1, 0,
                             0, -5*Math.sqrt(2)/2 , 0, 1]);
            this.multMatrix([Math.cos(Math.PI/4), Math.sin(Math.PI/4), 0, 0,
                             -Math.sin(Math.PI/4), Math.cos(Math.PI/4), 0, 0,
                             0, 0, 1, 0,
                             0, 0, 0, 1]);
            this.diamond.display();
            this.popMatrix();
        }

        // Draw triangle
        if (this.displayTriangle)
        {
            this.pushMatrix();

            this.translate(Math.sqrt(2)/2,-Math.sqrt(2),0);
            this.rotate(-Math.PI/4,0,0,1);

            this.triangle.display();

            this.popMatrix();
            
        }

        // Draw parallelogram
        if (this.displayParallelogram)
        {
            this.pushMatrix();
            
            //this.scale(-1,1,1);
            this.translate(0,2*Math.sqrt(2),0);
            this.rotate(1.25,0,0,1);
            

            this.parallelogram.display();

            this.popMatrix();
        }
            

        // Draw Small Triangle 1
        if (this.displayTriangleSmall1)
        {
            this.pushMatrix();

            this.translate(0,-Math.sqrt(2)/2,0);
            this.rotate(Math.PI/4,0,0,1);

            this.smalltriangle1.display();

            this.popMatrix();
        }

        // Draw Small Triangle 2
        if (this.displayTriangleSmall2)
        {
            this.pushMatrix();

            this.translate(0,-3/Math.sqrt(2),0);
            this.rotate(3*Math.PI/4,0,0,1);

            this.smalltriangle2.display();

            this.popMatrix();
        }


        // Draw Big Triangle 1
        if (this.displayTriangleBig1)
        {
            this.pushMatrix();

            this.translate(0,Math.sqrt(2),0);
            this.rotate(3*Math.PI/4,0,0,1);
           
            this.bigtriangle1.display();

            this.popMatrix();
        }

        // Draw Big Triangle 2
        if (this.displayTriangleBig2)
        {
            this.pushMatrix();

            this.translate(0,Math.sqrt(2),0);
            this.rotate(-Math.PI/4,0,0,1);
           
            this.bigtriangle2.display();

            this.popMatrix();
        }

        // ---- END Primitive drawing section
    }
}