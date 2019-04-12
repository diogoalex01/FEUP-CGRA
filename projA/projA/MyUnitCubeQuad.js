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
	
	/*//
	initMaterials() {

        //------ Textures
		this.textureCubeSide = new CGFtexture(this.scene, 'images/mineSide.png');
		this.textureCubeBottom = new CGFtexture(this.scene, 'images/mineBottom.png');
		this.textureCubeTop = new CGFtexture(this.scene, 'images/mineTop.png');

        //------ Applied Material
        this.cubeMaterialSide = new CGFappearance(this.scene);
        this.cubeMaterialSide.setAmbient(0.1, 0.1, 0.1, 1);
        this.cubeMaterialSide.setDiffuse(0.9, 0.9, 0.9, 1);
        this.cubeMaterialSide.setSpecular(0.1, 0.1, 0.1, 1);
        this.cubeMaterialSide.setShininess(10.0);
        this.cubeMaterialSide.setTexture(this.textureCubeSide);
		this.cubeMaterialSide.setTextureWrap('REPEAT', 'REPEAT');
		
		this.cubeMaterialBottom = new CGFappearance(this.scene);
        this.cubeMaterialBottom.setAmbient(0.1, 0.1, 0.1, 1);
        this.cubeMaterialBottom.setDiffuse(0.9, 0.9, 0.9, 1);
        this.cubeMaterialBottom.setSpecular(0.1, 0.1, 0.1, 1);
        this.cubeMaterialBottom.setShininess(10.0);
        this.cubeMaterialBottom.setTexture(this.textureCubeBottom);
		this.cubeMaterialBottom.setTextureWrap('REPEAT', 'REPEAT');
		
		this.cubeMaterialTop = new CGFappearance(this.scene);
        this.cubeMaterialTop.setAmbient(0.1, 0.1, 0.1, 1);
        this.cubeMaterialTop.setDiffuse(0.9, 0.9, 0.9, 1);
        this.cubeMaterialTop.setSpecular(0.1, 0.1, 0.1, 1);
		this.cubeMaterialTop.setShininess(10.0);
        this.cubeMaterialTop.setTexture(this.textureCubeTop);
        this.cubeMaterialTop.setTextureWrap('REPEAT', 'REPEAT');
        //------

	} */

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
		this.scene.rotate(Math.PI,0,1,0);
        this.scene.quad1.display();
		this.scene.popMatrix();

		//side
		//this.cubeMaterialSide.apply();
		//this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

		this.scene.pushMatrix();
		this.scene.translate(0.5,0, 0);
		this.scene.rotate(Math.PI/2,1,0,0);
		this.scene.rotate(Math.PI/2,0,1,0);
        this.scene.quad2.display();
		this.scene.popMatrix();
		
		this.scene.pushMatrix();
		this.scene.translate(0,0.5, 0);
		this.scene.rotate(Math.PI,0,1,0);
		this.scene.rotate(-Math.PI/2,1,0,0);
        this.scene.quad1.display();
		this.scene.popMatrix();
		
		this.scene.pushMatrix();
		this.scene.translate(0,-0.5, 0);
		this.scene.rotate(Math.PI/2,1,0,0);
        this.scene.quad1.display();
		this.scene.popMatrix();
		
		this.scene.pushMatrix();
		this.scene.translate(-0.5,0, 0);
		this.scene.rotate(Math.PI/2,1,0,0);
		this.scene.rotate(-Math.PI/2,0,1,0);
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

