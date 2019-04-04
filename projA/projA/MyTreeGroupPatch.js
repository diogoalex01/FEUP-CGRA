/**
 * MyTreeGroupPatch
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTreeGroupPatch extends CGFobject {
    constructor(scene) {
        super(scene);
        //this.scene = scene;

        this.scene.treeSmall = new MyTree(this.scene, 0.6, 0.2 ,0.8,0.3);
        this.scene.treeMedium = new MyTree(this.scene, 0.8,0.3,1,0.5);
        this.scene.treeLarge = new MyTree(this.scene, 1,0.4,1.2,0.8);
 
    }
    display() 
    {


        this.scene.pushMatrix();
        this.scene.translate(1.6, 0, 0);
        this.scene.treeSmall.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(1.4, 0, -1.6);
        this.scene.treeMedium.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(1.3, 0, 1.5);
        this.scene.treeMedium.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.treeLarge.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(- 1.5, 0, 0);
        this.scene.treeMedium.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1.3, 0, 1.4);
        this.scene.treeLarge.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1.2, 0, -1.7);
        this.scene.treeSmall.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0, -1.5);
        this.scene.treeMedium.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0, 1.15);
        this.scene.treeSmall.display();
        this.scene.popMatrix();




        
    }

    updateBuffers(complexity) {
    }

    enableNormalViz() {
        this.scene.treeLarge.enableNormalViz();
        this.scene.treeMedium.enableNormalViz();
        this.scene.treeSmall.enableNormalViz();
    }

    disableNormalViz() {
        this.scene.treeLarge.disableNormalViz();
        this.scene.treeMedium.disableNormalViz();
        this.scene.treeSmall.disableNormalViz();
    }
}
