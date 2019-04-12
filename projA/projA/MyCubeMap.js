/**
 * MyCubeMap
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyCubeMap extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();	
		this.initMaterials();	
	}

	initMaterials() {

        //------ Textures
        this.texture1 = new CGFtexture(this.scene, 'images/stairs.jpg');

        //------ Applied Material
        this.texture1 = new CGFappearance(this.scene);
        this.texture1.setAmbient(0.1, 0.1, 0.1, 1);
        this.texture1.setDiffuse(0.9, 0.9, 0.9, 1);
        this.texture1.setSpecular(0.1, 0.1, 0.1, 1);
        this.texture1.setShininess(10.0);
        this.texture1.setTexture(this.texture1);
		this.texture1.setTextureWrap('REPEAT', 'REPEAT');
	}

	initBuffers() {
		this.vertices = [
			
			-10, -10, 10,
			10, -10, 10,
			10, 10, 10,
			-10, 10, 10,

			10, -10, -10,
			-10, -10, -10,
			10, 10, -10,
			-10, 10, -10,

			10, 10, 10,
			10, -10, 10,
			10, -10, -10,
			10, 10, -10,

			-10, -10, -10,
			-10, -10, 10,
			-10, 10, -10,
			-10, 10, 10,

			10, 10, 10,
			-10, 10, -10,
			-10, 10, 10,
			10, 10, -10,

			10, -10, 10,
			-10, -10, 10,
			10, -10, -10,
			-10, -10, -10,

		];

		//Counter-clockwise reference of vertices
		this.indices = [

			2,1,0,
			0,3,2,

			6,5,4,
			7,5,6,

			10,9,8,
			8,11,10,

			14,13,12,
			13,14,15,

			18,17,16,
			19,16,17,

			22,21,20,
			23,21,22

		];
		

		// Generating normals
		this.normals = [

			0,0,1,
			0,0,1,
			0,0,1,
			0,0,1,

			0,0,-1,
			0,0,-1,
			0,0,-1,
			0,0,-1,

			1,0,0,
			1,0,0,
			1,0,0,
			1,0,0,

			-1,0,0,
			-1,0,0,
			-1,0,0,
			-1,0,0,
			
			0,1,0,
			0,1,0,
			0,1,0,
			0,1,0,

			0,-1,0,
			0,-1,0,
			0,-1,0,
			0,-1,0

		];

		/*
		Texture coords (s,t)
		+----------> s
        |
        |
		|
		v
        t
        */

	   this.texCoords = [
		-10, -10,
		10, -10,
		10, 10,
		-10, 10
		]

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
	
	updateBuffers(complexity){
    }
}
