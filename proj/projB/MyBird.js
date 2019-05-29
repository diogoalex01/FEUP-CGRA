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
        this.cube = new MyUnitCube(this.scene);

        this.dX = 0;
        this.dY = 0;
        this.dZ = 0;
        this.wingRot = 0;

        this.birdRotation = 2 * Math.PI; // rotation is taken (●'◡'●)

        this.birdSpeed = 0; // speed is taken ╰(*°▽°*)╯

        // this.initMaterials();
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
        this.textureTrunk = new CGFtexture(this.scene, 'images/redWood.jpg');

        //------ Applied Material
        this.trunkMaterial = new CGFappearance(this.scene);
        this.trunkMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.trunkMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.trunkMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.trunkMaterial.setShininess(10.0);
        this.trunkMaterial.loadTexture('images/redWood.jpg');
        this.trunkMaterial.setTexture(this.textureTrunk);
        this.trunkMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.textureFire = new CGFtexture(this.scene, 'images/fire.jpg');

        //------ Applied Material
        this.fireMaterial = new CGFappearance(this.scene);
        this.fireMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.fireMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.fireMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.fireMaterial.setShininess(10.0);
        this.fireMaterial.loadTexture('images/redWood.jpg');
        this.fireMaterial.setTexture(this.textureFire);
        this.fireMaterial.setTextureWrap('REPEAT', 'REPEAT');

        //---------------

    }

    display() {

        this.scene.pushMatrix(); // whole bird

        this.scene.translate(this.dX, this.dY, this.dZ);
        this.scene.rotate(this.birdRotation + 3 * Math.PI / 2, 0, 1, 0);

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

        // beak
        this.scene.pushMatrix();
        this.scene.translate(0.6, 0.4, 0);
        this.scene.scale(0.5, 0.25, 0.25);
        this.scene.rotate(-Math.PI / 2, 0, 0, 1);
        this.pyramid.display();
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
