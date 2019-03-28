/**
 * MyTriangleBig
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangleBig extends CGFobject {
	constructor(scene, color) {
		super(scene);
		this.color = color;
		this.initBuffers();
	}

	initBuffers() {
		this.vertices = [
			0, 2, 0,	//0
			-2, 0, 0,	//1
			2, 0, 0,	//2

		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
		];
		

		// Generating normals
		this.normals = [];

		this.normals.push(0, 0, 1); //0
		this.normals.push(0, 0, 1); //1
		this.normals.push(0, 0, 1); //2
		
		/*
		Texture coords (s,t)
		+----------> s
		|
		|
		|
		v
		t
		*/

		if (this.color)
		{
	   		this.texCoords = [
				0.5, 0.5,
				1, 0,
				0, 0
			];
		}
		else
		{
			this.texCoords = [
				0.5, 0.5,
				1, 1,
				1, 0
			];
		}

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}

