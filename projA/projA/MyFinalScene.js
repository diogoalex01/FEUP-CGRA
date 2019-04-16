/**
 * MyFinalScene
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyFinalScene extends CGFobject {
    constructor(scene) {
        super(scene);
        this.scene = scene;
        this.initMaterials();

        //Initialize scene objects
        this.scene.cubeMap = new MyCubeMap(this.scene);
        this.scene.quad = new MyQuad(this.scene);
        this.scene.house = new MyHouse(this.scene);
        this.scene.treeGroup = new MyTreeGroupPatch(this.scene);
        this.scene.treeRow = new MyTreeRowPatch(this.scene);
        this.scene.smallHill = new MyVoxelHill(this.scene, 8);
        this.scene.mediumHill = new MyVoxelHill(this.scene, 9);
        this.scene.largeHill = new MyVoxelHill(this.scene, 10);
        this.scene.campFire = new MyCampFire(this.scene);
    }

    initMaterials() {

        //------ Textures
        this.textureMap = new CGFtexture(this.scene, 'images/cubeMap.jpg');

        //------ Applied Material
        this.mapMaterial = new CGFappearance(this.scene);
        this.mapMaterial.setAmbient(1, 1, 1, 1);
        this.mapMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.mapMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.mapMaterial.setShininess(10.0);
        this.mapMaterial.setTexture(this.textureMap);
        this.mapMaterial.setTextureWrap('REPEAT', 'REPEAT');

        //------ Textures
        this.textureNight = new CGFtexture(this.scene, 'images/cubeNight.png');

        //------ Applied Material
        this.nightMaterial = new CGFappearance(this.scene);
        this.nightMaterial.setAmbient(1, 1, 1, 1);
        this.nightMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.nightMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.nightMaterial.setShininess(10.0);
        this.nightMaterial.setTexture(this.textureNight);
        this.nightMaterial.setTextureWrap('REPEAT', 'REPEAT');

        //------ Textures
        this.textureQuad = new CGFtexture(this.scene, 'images/quad.png');

        //------ Applied Material
        this.quadMaterial = new CGFappearance(this.scene);
        this.quadMaterial.setAmbient(1, 1, 1, 1);
        this.quadMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.quadMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.quadMaterial.setShininess(10.0);
        this.quadMaterial.setTexture(this.textureQuad);
        this.quadMaterial.setTextureWrap('REPEAT', 'REPEAT');

        //------ Textures
        this.textureWater = new CGFtexture(this.scene, 'images/water.jpg');

        //------ Applied Material
        this.waterMaterial = new CGFappearance(this.scene);
        this.waterMaterial.setAmbient(1, 1, 1, 1);
        this.waterMaterial.setDiffuse(0.1, 0.1, 0.1, 1);
        this.waterMaterial.setSpecular(0.9, 0.9, 0.9, 1);
        this.waterMaterial.setShininess(10.0);
        this.waterMaterial.setTexture(this.textureWater);
        this.waterMaterial.setTextureWrap('REPEAT', 'REPEAT');

    }

    display(mode) {

        //Draw background
        this.scene.pushMatrix();
        if (mode == 0) {
            this.mapMaterial.apply();
            //console.log('dia');
        }
        else if (mode == 1) {
            this.nightMaterial.apply();
            //console.log('noite');
        }
        this.scene.cubeMap.display();
        this.scene.popMatrix();

        //Draw Quad
        this.scene.pushMatrix();
        this.quadMaterial.apply();
        this.scene.translate(0, 0.6, 0);
        this.scene.scale(60, 1, 60);
        this.scene.rotate(-Math.PI / 2, 1, 0, 0);
        this.scene.quad.display();
        this.scene.popMatrix();

        //Draw house
        this.scene.pushMatrix();
        this.scene.scale(2, 3, 2);
        this.scene.house.display();
        this.scene.popMatrix();

        //Draw bigHill
        this.scene.pushMatrix();
        this.scene.translate(-16, 0.6, -18);
        this.scene.scale(1.2, 1.2, 1.2);
        this.scene.largeHill.display();
        this.scene.popMatrix();

        //Draw MediumHill
        this.scene.pushMatrix();
        this.scene.translate(3, 0.6, -18);
        this.scene.scale(1.2, 1.2, 1.2);
        this.scene.mediumHill.display();
        this.scene.popMatrix();

        //Draw SmallHill
        this.scene.pushMatrix();
        this.scene.translate(21, 0.6, -18);
        this.scene.scale(1.2, 1.2, 1.2);
        this.scene.smallHill.display();
        this.scene.popMatrix();

        //Draw treeGroupPatch
        this.scene.pushMatrix();
        this.scene.translate(24.5, 0.6, 0);
        this.scene.scale(3, 3, 3);
        this.scene.treeGroup.display();
        this.scene.popMatrix();

        //Draw treeRowPatch
        this.scene.pushMatrix();
        this.scene.translate(-22, 0.6, 2);
        this.scene.scale(3, 3.2, 3);
        this.scene.treeRow.display();
        this.scene.popMatrix();

        //Draw treeRowPatch
        this.scene.pushMatrix();
        this.scene.translate(-16, 0.6, 3);
        this.scene.scale(3, 3.2, 3);
        this.scene.treeRow.display();
        this.scene.popMatrix();

        //Draw treeGroup
        this.scene.pushMatrix();
        this.scene.translate(18, 0.6, 0);
        this.scene.scale(2, 2.2, 2);
        this.scene.treeGroup.display();
        this.scene.popMatrix();

        //Draw treeRow
        this.scene.pushMatrix();
        this.scene.translate(-18, 0.6, 18);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.scene.scale(3.5, 4.2, 3.5);
        this.scene.treeRow.display();
        this.scene.popMatrix();

        //Draw treeGroup
        this.scene.pushMatrix();
        this.scene.translate(20, 0.6, 13);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.scene.scale(4, 4.5, 4);
        this.scene.treeGroup.display();
        this.scene.popMatrix();

        //Draw treeRowPatch
        this.scene.pushMatrix();
        this.scene.translate(14, 0.6, 25);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.scene.scale(3.8, 4.5, 3.8);
        this.scene.treeRow.display();
        this.scene.popMatrix();

        //Draw treeRowPatch
        this.scene.pushMatrix();
        this.scene.translate(-16, 0.6, 24);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.scene.scale(2, 2.2, 2);
        this.scene.treeRow.display();
        this.scene.popMatrix();

        //Draw treeRowPatch
        this.scene.pushMatrix();
        this.scene.translate(-19, 0.6, 25);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.scene.scale(3, 3.2, 3);
        this.scene.treeRow.display();
        this.scene.popMatrix();

        //Draw campFire
        this.scene.pushMatrix();
        this.scene.translate(0, 0.6, 10);
        this.scene.scale(1, 1.5, 1);
        this.scene.campFire.display();
        this.scene.popMatrix();

        this.waterMaterial.apply();

        //Draw pool
        this.scene.pushMatrix();
        this.scene.translate(-28.5, 0.8, 0);
        this.scene.scale(3, 1, 60);
        this.scene.rotate(-Math.PI / 2, 1, 0, 0);
        this.scene.quad.display();
        this.scene.popMatrix();
    }

    updateBuffers(complexity) {
    }

    enableNormalViz() {
    }

    disableNormalViz() {
    }
}
