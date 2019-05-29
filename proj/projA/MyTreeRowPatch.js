/**
 * MyTreeRowPatch
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTreeRowPatch extends CGFobject {
    constructor(scene) {
        super(scene);
        //this.scene = scene;

        this.scene.treeSmall = new MyTree(this.scene, 0.6, 0.1 ,0.8,0.3,'images/wood.jpg', 'images/leaves.png');
        this.scene.treeMedium = new MyTree(this.scene, 0.8,0.2,1,0.5,'images/wood.jpg', 'images/leaves.png');
        this.scene.treeLarge = new MyTree(this.scene, 1,0.3,1.2,0.8,'images/wood.jpg', 'images/leaves.png');
 
    }
    display() 
    {


        this.scene.pushMatrix();
        this.scene.translate(0.2, 0, -2.5);
        this.scene.treeSmall.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.3, 0, -1.7);
        this.scene.treeMedium.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.4, 0, -0.9);
        this.scene.treeMedium.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.15, 0, 0.9);
        this.scene.treeLarge.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(- 0.3, 0, 2.1);
        this.scene.treeMedium.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.3, 0, 3.5);
        this.scene.treeLarge.display();
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
