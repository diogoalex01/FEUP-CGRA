/**
 * MyPrism
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyPrism extends CGFobject {
	constructor(scene, slices) {
		super(scene);
		this.slices = slices;
		this.initBuffers();
	}

	initBuffers() {

		this.vertices = [];
		this.indices = [];
		this.normals = [];
		this.texCoords = [];

		var ang = 0;
		var alphaAng = 2 * Math.PI / this.slices;

		for (var i = 0; i < this.slices; i++) {

			var sa = Math.sin(ang);
			var saa = Math.sin(ang + alphaAng);
			var ca = Math.cos(ang);
			var caa = Math.cos(ang + alphaAng);
			var cam = Math.cos(ang + alphaAng / 2);
			var sam = Math.sin(ang + alphaAng / 2);

			this.vertices.push(ca, 1, sa); //0 //4
			this.vertices.push(caa, 1, saa); //1 //5
			this.vertices.push(caa, 0, saa); //2 //6
			this.vertices.push(ca, 0, sa); //3 //7

			this.texCoords.push(ang / (2 * Math.PI), 1);
			this.texCoords.push((ang + alphaAng) / (2 * Math.PI), 1);
			this.texCoords.push((ang + alphaAng) / (2 * Math.PI), 0);
			this.texCoords.push(ang / (2 * Math.PI), 0);

			this.indices.push(4 * i, (4 * i + 1), (4 * i + 2));
			this.indices.push((4 * i), (4 * i + 2), (4 * i + 3));

			var normal = [
				cam,
				0,
				sam
			];

			// push normal once for each vertex of this triangle
			this.normals.push(...normal);
			this.normals.push(...normal);
			this.normals.push(...normal);
			this.normals.push(...normal);

			ang += alphaAng;
		}
		//alert(this.vertices.length);
		//console.log(this.normals.length);

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}

	updateBuffers(complexity) {
		this.slices = 3 + Math.round(9 * complexity); //complexity varies 0-1, so slices varies 3-12

		// reinitialize buffers
		this.initBuffers();
		this.initNormalVizBuffers();
	}
}