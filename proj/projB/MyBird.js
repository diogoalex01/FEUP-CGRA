/**
 * MyBird
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyBird extends CGFobject {
    constructor(scene) {
        super(scene);

        this.cylinder = new MyCylinder(this.scene, 5);
        this.pyramid = new MyPyramid(this.scene, 5, 1);
        this.wingPyramid = new MyPyramid(this.scene, 4, 1);
        this.cone = new MyCone(this.scene, 5, 1);
        this.cube = new MyUnitCubeQuad(this.scene);

        this.dX = 0;
        this.dY = 0;
        this.dZ = 0;
        this.wingRot = 0;

        this.birdRotation = 2 * Math.PI; // rotation is taken (●'◡'●)

        this.birdSpeed = 0; // speed is taken ╰(*°▽°*)╯

        this.initMaterials();
    }

    turn(v) { // turn is taken ༼ つ ◕_◕ ༽つ
        this.birdRotation += v;
    }

    accelerate(v) { // accelerate is taken (⌐■_■)
        this.birdSpeed += v;
    }

    moveBird() {// move is taken ¯\_(ツ)_/¯
        this.dZ += this.birdSpeed * Math.cos(this.birdRotation);
        this.dX += this.birdSpeed * Math.sin(this.birdRotation);
    }
    initMaterials() {

        //------ Textures
        this.textureBird = new CGFtexture(this.scene, 'images/feather.png');

        //------ Applied Material
        this.birdMaterial = new CGFappearance(this.scene);
        this.birdMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.birdMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.birdMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.birdMaterial.setShininess(10.0);
        this.birdMaterial.loadTexture('images/feather.png');
        this.birdMaterial.setTexture(this.textureBird);
        this.birdMaterial.setTextureWrap('REPEAT', 'REPEAT');

         //------ Textures
         this.textureBick = new CGFtexture(this.scene, 'images/bick.jpg');

         //------ Applied Material
         this.bickMaterial = new CGFappearance(this.scene);
         this.bickMaterial.setAmbient(0.1, 0.1, 0.1, 1);
         this.bickMaterial.setDiffuse(0.4, 0.4, 0.4, 1);
         this.bickMaterial.setSpecular(0.9, 0.9, 0.9, 1);
         this.bickMaterial.setShininess(10.0);
         this.bickMaterial.setTexture(this.textureBick);
         this.bickMaterial.setTextureWrap('REPEAT', 'REPEAT');
 

    }

    display() {

        this.scene.pushMatrix(); // whole bird

        this.scene.translate(this.dX, this.dY, this.dZ);
        this.scene.rotate(this.birdRotation + 3 * Math.PI / 2, 0, 1, 0);

        this.birdMaterial.apply();
        // body
        this.scene.pushMatrix();
        this.scene.scale(0.8, 0.5, 0.5);
        this.scene.rotate(Math.PI / 2, 0, 0, 1);
        this.cylinder.display();
        this.scene.popMatrix();

        // booty
        this.scene.pushMatrix();
        this.scene.scale(0.8, 0.5, 0.5);
        this.scene.translate(-1, 0, 0);
        this.scene.rotate(Math.PI / 2, 0, 0, 1);
        this.pyramid.display();
        this.scene.popMatrix();

        // chest
        this.scene.pushMatrix();
        this.scene.scale(0, 0.5, 0.5);
        this.scene.rotate(-Math.PI / 2, 0, 0, 1);
        this.scene.rotate(-Math.PI / 5, 0, 1, 0);
        this.cone.display();
        this.scene.popMatrix();

        // head
        this.scene.pushMatrix();
        this.scene.translate(0, 0.4, 0);
        this.scene.scale(0.6, 0.5, 0.5);
        this.scene.rotate(-Math.PI / 2, 0, 0, 1);
        this.scene.rotate(-Math.PI / 5, 0, 1, 0);
        this.cylinder.display();
        this.scene.popMatrix();

        // neck
        this.scene.pushMatrix();
        this.scene.translate(0, 0.4, 0);
        this.scene.scale(0.2, 0.5, 0.5);
        this.scene.rotate(Math.PI / 2, 0, 0, 1);
        this.cone.display();
        this.scene.popMatrix();

        // face
        this.scene.pushMatrix();
        this.scene.translate(0.6, 0.4, 0);
        this.scene.scale(0.2, 0.5, 0.5);
        this.scene.rotate(-Math.PI / 2, 0, 0, 1);
        this.scene.rotate(Math.PI / 5, 0, 1, 0);
        this.cone.display();
        this.scene.popMatrix();

        // eyes
        this.scene.pushMatrix();
        this.scene.translate(0.6, 0.6, -0.2);
        this.scene.scale(0.1, 0.1, 0.1);
        this.scene.rotate(-Math.PI / 2, 0, 0, 1);
        this.pyramid.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.6, 0.6, 0.2);
        this.scene.scale(0.1, 0.1, 0.1);
        this.scene.rotate(-Math.PI / 2, 0, 0, 1);
        this.pyramid.display();
        this.scene.popMatrix();

        // left wing
        this.scene.pushMatrix();
        //this.scene.translate(0,0,0.025);
        this.scene.rotate(this.wingRot, 1, 0, 0); // Wing rotation, wrong axis (⊙_⊙;)

        this.scene.pushMatrix();
        this.scene.translate(-0.4, 0.1, 0.5);
        this.scene.scale(0.7, 0.025, 1);
        this.cube.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.4, 0.1, 1);
        this.scene.rotate(Math.PI / 1.5, 1, 0, 0);
        this.scene.scale(0.35, 0.7, 0.025);
        this.wingPyramid.display();
        this.scene.popMatrix();

        this.scene.popMatrix();
        //---------------

        // right wing
        this.scene.pushMatrix();

        this.scene.scale(1, 1, -1);
        this.scene.rotate(this.wingRot, 1, 0, 0); // Wing rotation, wrong axis (⊙_⊙;)

        this.scene.pushMatrix();
        this.scene.translate(-0.4, 0.1, 0.5);
        this.scene.scale(0.7, 0.025, 1);
        this.cube.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.4, 0.1, 1);
        this.scene.rotate(Math.PI / 1.5, 1, 0, 0);
        this.scene.scale(0.35, 0.7, 0.025);
        this.wingPyramid.display();
        this.scene.popMatrix();

        this.scene.popMatrix();
        //---------------

        // beak
        this.bickMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(0.6, 0.4, 0);
        this.scene.scale(0.5, 0.25, 0.25);
        this.scene.rotate(-Math.PI / 2, 0, 0, 1);
        this.pyramid.display();
        this.scene.popMatrix();

        this.scene.popMatrix();  // whole bird
    }

    updateBuffers(complexity) {
    }

    enableNormalViz() {
        this.cylinder.enableNormalViz();
        this.pyramid.enableNormalViz();
        this.cone.enableNormalViz();
        this.cube.enableNormalViz();
    }

    disableNormalViz() {
        this.scene.cylinder.disableNormalViz();
        this.pyramid.disableNormalViz();
        this.cone.disableNormalViz();
        this.cube.disableNormalViz();
    }
}
