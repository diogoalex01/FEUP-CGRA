/**
 * MyTerrain
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTerrain extends CGFobject {
    constructor(scene) {
        super(scene);
        this.scene = scene;

        this.plane = new Plane(this.scene, 32);

        this.initMaterials();
    }

    initMaterials() {

        //------ Textures
        this.appearence = new CGFtexture(this.scene, 'images/stairs.jpg');

        //------ Applied Material
        this.appearence = new CGFappearance(this.scene);
        this.appearence.setAmbient(0.1, 0.1, 0.1, 1);
        this.appearence.setDiffuse(0.9, 0.9, 0.9, 1);
        this.appearence.setSpecular(0.1, 0.1, 0.1, 1);
        this.appearence.setShininess(10.0);
        this.texture = new CGFtexture(this.scene, "images/terrain.jpg");
        this.appearence.setTexture(this.texture);
        this.appearence.setTextureWrap('REPEAT', 'REPEAT');

        //------ Textures
        this.texture2 = new CGFtexture(this.scene, 'images/heightmap.jpg');
        this.gradient = new CGFtexture(this.scene, 'images/altimetry.png');

        // shaders initialization
        this.testShaders = new CGFshader(this.scene.gl, "shaders/terrain.vert", "shaders/terrain.frag")
        this.testShaders.setUniformsValues({ uSampler2: 1 });
        this.testShaders.setUniformsValues({ uSampler3: 2 });
    }

    display() {

        this.appearence.apply();
        this.scene.setActiveShader(this.testShaders);

        // bind additional texture to texture unit 1
        this.texture2.bind(1);
        this.gradient.bind(2);
        /*
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI/2,1,0,0);
        this.scene.translate(60,0,60);
        this.plane.display();
        this.scene.popMatrix();*/

        this.scene.pushMatrix();
        this.scene.rotate(-0.5 * Math.PI, 1, 0, 0);
        this.scene.scale(60, 60, 0.15);
        this.plane.display();
        this.scene.popMatrix();

        // restore default shader (will be needed for drawing the axis in next frame)
        this.scene.setActiveShader(this.scene.defaultShader);

    }

    updateBuffers(complexity) {
    }

    enableNormalViz() {
    }

    disableNormalViz() {
    }
}
