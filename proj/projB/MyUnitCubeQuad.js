/**
 * MyQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {
	constructor(scene, coords) {
		super(scene);
		this.initBuffers();
		if (coords != undefined)
			this.updateTexCoords(coords);

		//Initialize scene objects
		this.scene.quad1 = new MyQuad(this.scene);
		this.scene.quad2 = new MyQuad(this.scene);
		this.scene.quad3 = new MyQuad(this.scene);
	}

	display() {

		//top
		//this.cubeMaterialTop.apply();
		//this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

		this.scene.pushMatrix();
		this.scene.translate(0, 0, 0.5);
		this.scene.quad1.display();
		this.scene.popMatrix();

		//bottom
		//this.cubeMaterialBottom.apply();	
		//this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

		this.scene.pushMatrix();
		this.scene.translate(0, 0, -0.5);
		this.scene.rotate(Math.PI, 0, 1, 0);
		this.scene.quad1.display();
		this.scene.popMatrix();

		//side
		//this.cubeMaterialSide.apply();
		//this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

		this.scene.pushMatrix();
		this.scene.translate(0.5, 0, 0);
		this.scene.rotate(Math.PI / 2, 1, 0, 0);
		this.scene.rotate(Math.PI / 2, 0, 1, 0);
		this.scene.quad2.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(0, 0.5, 0);
		this.scene.rotate(Math.PI, 0, 1, 0);
		this.scene.rotate(-Math.PI / 2, 1, 0, 0);
		this.scene.quad1.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(0, -0.5, 0);
		this.scene.rotate(Math.PI / 2, 1, 0, 0);
		this.scene.quad1.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(-0.5, 0, 0);
		this.scene.rotate(Math.PI / 2, 1, 0, 0);
		this.scene.rotate(-Math.PI / 2, 0, 1, 0);
		this.scene.quad1.display();
		this.scene.popMatrix();

	}

	updateBuffers(complexity) {
	}

	enableNormalViz() {
		this.scene.quad1.enableNormalViz();
	}

	disableNormalViz() {
		this.scene.quad1.disableNormalViz();
	}
}

