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
		/*
		As this plane is being drawn on the xy plane, the normal to the plane will be along the positive z axis.
		So all the vertices will have the same normal, (0, 0, 1).
		*/
		this.normals = [];

		this.normals.push(0, 0, 1);
		
	}
	
	updateBuffers(complexity){
    }

    //enableNormalViz() {
    //}

    //disableNormalViz() {
    //}
}

