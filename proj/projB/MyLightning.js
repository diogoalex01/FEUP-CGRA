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
        this.angle = 25.0;
        this.iterations = 3;
        this.scale = 0.5;

        this.time = 1;
        this.depth = 0;

        this.initGrammar();
    }

    // cria o lexico da gramática
    initGrammar() {
        this.grammar = {
            "F": this.quad,
            "X": this.quad
        };
    }

    startAnimation(t){
        this.generate(
            "X",
            {
                "F": ["FF"],
                "X": ["F[-X][X]F[-X]+FX", "F[-X][X]F[+X]-FX"]
            },
            this.angle,
            this.iterations,
            this.scale
        );

        this.time = t;
        this.depth =1;
    }
}