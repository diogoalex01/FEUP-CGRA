/**
 * MyLightningQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLightningQuad extends CGFobject {
	constructor(scene, coords) {
		super(scene);
		this.initBuffers();

		if (coords != undefined)
			this.updateTexCoords(coords);

		//Initialize scene objects
		this.quad = new MyQuad(this.scene);
	}

	display() {

		this.scene.pushMatrix();
		this.scene.scale(0.3, 1.6, 0.20);
		this.quad.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.scale(0.3, 1.6, 0.20);
		this.scene.rotate(Math.PI, 0, 1, 0);
		this.quad.display();
		this.scene.popMatrix();

	}

	updateBuffers(complexity) {
	}

	enableNormalViz() {
		this.scene.quad.enableNormalViz();
	}

	disableNormalViz() {
		this.scene.quad.disableNormalViz();
	}
}

