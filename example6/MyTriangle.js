/**
 * MyTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangle extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			1, -1, 0,	//0
			-1, 1, 0,	//1
			-1, -1, 0,	//2
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

	   this.texCoords = [
		0.5, 1,
		0, 0.5,
		0, 1
		];

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();

	}
}
