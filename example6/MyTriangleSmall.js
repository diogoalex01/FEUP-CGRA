/**
 * MyTriangleSmall
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangleSmall extends CGFobject {
	constructor(scene, color) {
		super(scene);
		this.color = color;
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			-1, 0, 0,	//0
			1, 0, 0,	//1
			0, 1, 0,	//2

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
				0, 0,
				0, 0.5,
				0.25, 0.25
			];
		}
		else
		{
			this.texCoords = [
				0.25, 0.75,
				0.75, 0.75,
				0.5, 0.5
			];
		}

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}

