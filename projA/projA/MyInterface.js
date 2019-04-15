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
        this.gui.add(this.scene, 'displayVoxelHill').name("Display VoxelHill");
        this.gui.add(this.scene, 'displayFinalScene').name("Display Final Scene");
        this.gui.add(this.scene, 'displayNormals').name("Display Normals");
        this.gui.add(this.scene, 'scaleFactor', 0.1, 1.0).name('Scale');

        this.gui.add(this.scene, 'ambientFactor', 0.1, 1).name('Ambient Light');

        // a folder for grouping parameters for one of the lights
        var f0 = this.gui.addFolder('Light 0 ');
        f0.add(this.scene.lights[0], 'enabled').name("Enabled");
        // a subfolder for grouping only the three coordinates of the light
        var sf0 = f0.addFolder('Light 0 Position');
        sf0.add(this.scene.lights[0].position, '0', -5.0, 5.0).name("X Position");
        sf0.add(this.scene.lights[0].position, '1', -5.0, 5.0).name("Y Position");
        sf0.add(this.scene.lights[0].position, '2', -5.0, 5.0).name("Z Position");

        // similar but for light 1
        var f1 = this.gui.addFolder('Light 1 ');
        f1.add(this.scene.lights[1], 'enabled').name("Enabled");
        var sf1 = f1.addFolder('Light 1 Position');
        sf1.add(this.scene.lights[1].position, '0', -5.0, 5.0).name("X Position");
        sf1.add(this.scene.lights[1].position, '1', -5.0, 5.0).name("Y Position");
        sf1.add(this.scene.lights[1].position, '2', -5.0, 5.0).name("Z Position");
        var sf2 = f1.addFolder('Light 1 Attenuation');
        sf2.add(this.scene.lights[1], 'constant_attenuation', 0.00, 1.00).name("Const. Atten.");
        sf2.add(this.scene.lights[1], 'linear_attenuation', 0.0, 1.0).name("Linear Atten.");
        sf2.add(this.scene.lights[1], 'quadratic_attenuation', 0.0, 1.0).name("Quad. Atten.");

        return true;
    }
}