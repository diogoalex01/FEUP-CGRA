/**
 * MyParallelogram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyParallelogram extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}

	initBuffers() {

		this.vertices = [
			0, 0, 0,	//0
			1, 1, 0,	//1
			2, 0, 0,	//2
			3, 1, 0		//3
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 2, 1,
			3, 1, 2
		];


		// Generating normals
		this.normals = [];

		this.normals.push(0, 0, 1); //0
		this.normals.push(0, 0, 1); //1
		this.normals.push(0, 0, 1); //2
		this.normals.push(0, 0, 1); //3

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
			0.25, 0.75,
			0.5, 1,
			0.75, 0.75,
			1, 1
		];

		this.initGLBuffers();
		this.primitiveType = this.scene.gl.TRIANGLES;
	}
}

