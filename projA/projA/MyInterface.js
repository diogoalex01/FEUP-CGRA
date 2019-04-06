/**
* MyInterface
* @constructor
*/
class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();

        var obj = this;

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayAxis').name("Display Axis");
        this.gui.add(this.scene, 'displayTree').name("Display Tree");
        this.gui.add(this.scene, 'displayTreeGroup').name("Display TreeGroup");
        this.gui.add(this.scene, 'displayTreeRow').name("Display TreeRow");
        this.gui.add(this.scene, 'displayHouse').name("Display House");
        this.gui.add(this.scene, 'displayNormals').name("Display Normals");
        this.gui.add(this.scene, 'scaleFactor', 0.1, 10.0).name('Scale');

        return true;
    }
}