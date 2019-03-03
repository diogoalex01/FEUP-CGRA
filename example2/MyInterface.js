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
        this.gui.add(this.scene, 'displayAxis').name('Display Axis');

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayDiamond').name('Display Diamond');

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayTriangle').name('Display Triangle');
        
        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayParallelogram').name('Display Parallel');
        
        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayTriangleSmall1').name('Display Small 1');

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayTriangleSmall2').name('Display Small 2');

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayTriangleBig1').name('Display Big 1');

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayTriangleBig2').name('Display Big 2');

         //Checkbox element in GUI
        this.gui.add(this.scene, 'displayTangram').name('Display Tangram');

        //Slider element in GUI
        this.gui.add(this.scene, 'scaleFactor', 0.1, 5).name('Scale Factor');

        return true;
    }
}