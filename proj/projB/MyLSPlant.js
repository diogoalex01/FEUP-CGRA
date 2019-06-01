/**
 * MyLSPlant
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLSPlant extends MyLSystem {
    constructor(scene) {
        super(scene);

        this.initGrammar();
        this.setDefaultValues();
        this.generateTree();
    }

    // cria o lexico da gramática
    initGrammar() {
        this.grammar = {
            "F": new MyBranch(this.scene),
            "X": new MyLeaf(this.scene)
        };
    }

    setDefaultValues() {
        this.axiom = "X";
        this.angle = 30.0;
        this.iterations = 4;
        this.scaleFactor = 0.6;
    }

    generateTree() {
        this.generate(
            this.axiom,
            {
                "F": ["FF"],
                    "X": ["F[-X][X]F[-X]+X", "F[-X][X]+XF[^X]&X", "F[+X]-XF[^X]&X",
                          "​F[/X][X]F[\\X]+XF[^X]&X", "F[\\X][X]/XF[/X]\\X", "F[/X]\\X", "F[^X][X]F[&X]^X", "F[^X]&X", "F[&X]^X"]
            },
            this.angle,
            this.iterations,
            this.scaleFactor
        );
    }
}