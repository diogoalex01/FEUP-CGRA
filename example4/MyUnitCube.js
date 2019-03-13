/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);

		//nDivs = typeof nDivs !== 'undefined' ? nDivs : 1;
		//this.nDivs = nDivs;

		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			// X
			0.5, 0.5, -0.5,	//0
			0.5, 0.5, 0.5,	//1
			-0.5, 0.5, -0.5, //2
			-0.5, 0.5, 0.5,	//3
			0.5, -0.5, -0.5, //4
			0.5, -0.5, 0.5,	//5
			-0.5, -0.5, -0.5, //6
			-0.5, -0.5, 0.5,	//7
			// Y
			0.5, 0.5, -0.5,	//0
			0.5, 0.5, 0.5,	//1
			-0.5, 0.5, -0.5, //2
			-0.5, 0.5, 0.5,	//3
			0.5, -0.5, -0.5, //4
			0.5, -0.5, 0.5,	//5
			-0.5, -0.5, -0.5, //6
			-0.5, -0.5, 0.5,	//7
			// Z
			0.5, 0.5, -0.5,	//0
			0.5, 0.5, 0.5,	//1
			-0.5, 0.5, -0.5, //2
			-0.5, 0.5, 0.5,	//3
			0.5, -0.5, -0.5, //4
			0.5, -0.5, 0.5,	//5
			-0.5, -0.5, -0.5, //6
			-0.5, -0.5, 0.5	//7
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 5,
			4, 0, 5,
			1, 0, 2,
			2, 3, 1,
			3, 2, 6,
			7, 3, 6,
			7, 6, 5,
			4, 5, 6,
			0, 4, 6,
			6, 2, 0,
			1, 3, 7,
			7, 5, 1
		];
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();

		// Generating normals
		this.normals = [];

		// X
		this.normals.push(1, 0, 0); //0
		this.normals.push(1, 0, 0); //1
		this.normals.push(-1, 0, 0); //2
		this.normals.push(-1, 0, 0); //3
		this.normals.push(1, 0, 0); //4
		this.normals.push(1, 0, 0); //5
		this.normals.push(-1, 0, 0); //6
		this.normals.push(-1, 0, 0); //7

		// Y
		this.normals.push(0, 1, 0); //0
		this.normals.push(0, 1, 0); //1
		this.normals.push(0, 1, 0); //2
		this.normals.push(0, 1, 0); //3
		this.normals.push(0, -1, 0); //4
		this.normals.push(0, -1, 0); //5
		this.normals.push(0, -1, 0); //6
		this.normals.push(0, -1, 0); //7

		// Z
		this.normals.push(0, 0, -1); //0
		this.normals.push(0, 0, 1); //1
		this.normals.push(0, 0, -1); //2
		this.normals.push(0, 0, 1); //3
		this.normals.push(0, 0, -1); //4
		this.normals.push(0, 0, 1); //5
		this.normals.push(0, 0, -1); //6
		this.normals.push(0, 0, 1); //7
	}
	
	updateBuffers(complexity){
    }
}
