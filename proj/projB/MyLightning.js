/**
 * MyLightning
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLightning extends MyLSystem {
    constructor(scene) {
        super(scene);

        this.quad = new MyLightningQuad(this.scene);

        this.axiom = "X";
        this.ruleF = "FF";
        this.ruleX = "F[-X][X]F[-X]+FX";
        this.angle = 25.0;
        this.iterations = 4;
        this.scale = 0.65;

        this.initGrammar();
    }

    // cria o lexico da gramática
    initGrammar() {
        this.grammar = {
            "F": this.quad,
            "X": this.quad
        };
    }

    doGenerate() {
        this.generate(
            this.axiom,
            {
                "F": ["FF"],
                "X": ["F[-X][X]F[-X]+FX", "F[-X][X]F[+X]-FX"]
            },
            this.angle,
            this.iterations,
            this.scale
        );
    }
}