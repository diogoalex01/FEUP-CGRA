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

		// Initialize scene objects
		this.quad = new MyQuad(this.scene);

		this.initMaterials();
	}

	initMaterials() {

		// Colors
		this.white = new CGFappearance(this.scene);
		this.white.setAmbient(1, 1, 1, 1.0);
		this.white.setDiffuse(1, 1, 1, 1.0);
		this.white.setSpecular(1, 1, 1, 1.0);
		this.white.setShininess(10.0);
	}

	display() {

		this.white.apply();

		this.scene.pushMatrix();
		this.scene.translate(0, 0.8, 0);
		this.scene.scale(0.20, 1.75, 0.20);
		this.quad.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
		this.scene.translate(0, 0.8, 0);
		this.scene.scale(0.20, 1.6, 0.20);
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

