/**
 * MyLightning
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLightning extends MyLSystem {
    constructor(scene) {
        super(scene);
        this.quad = new MyLightningQuad(this.scene);

        this.setDefaultValues();
        this.time = 0;
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

    setDefaultValues() {
        this.axiom = "X";
        this.angle = 25.0;
        this.iterations = 3;
        this.scale = 0.5;
    }

    update(t) {
        this.newTime = t - this.time;
        this.depth = this.newTime * this.axiom.length;
        console.log(this.depth);
    }

    startAnimation(t) {
        this.setDefaultValues();
        this.time = t;
        this.depth = 1;

        this.generate(
            this.axiom,
            {
                "F": ["FF"],
                "X": ["F[-X][X]F[-X]+FXF[-X]F[+X]-FX", "F[-X][X]F[+X]-FXF[X]F[-X]+FX",
                    "F[-X][X]F[-X]+FX", "F[-X][X]F[+X]-FX"]
            },
            this.angle,
            this.iterations,
            this.scale
        );
    }

    display() {
        this.scene.pushMatrix();
        this.scene.scale(this.scale, this.scale, this.scale);

        var i;

        // percorre a cadeia de caracteres
        for (i = 0; i < this.axiom.length; ++i) {

            if (this.depth == 0)
                break;

            // verifica se sao caracteres especiais
            switch (this.axiom[i]) {
                case "+":
                    // roda a esquerda
                    this.scene.rotate(this.angle, 0, 0, 1);
                    break;

                case "-":
                    // roda a direita
                    this.scene.rotate(-this.angle, 0, 0, 1);
                    break;

                case "[":
                    // push
                    this.scene.pushMatrix();
                    break;

                case "]":
                    // pop
                    this.scene.popMatrix();
                    break;

                // processa primitiva definida na gramatica, se existir
                default:
                    var primitive = this.grammar[this.axiom[i]];

                    if (i >= this.depth)
                        break;

                    if (primitive) {
                        primitive.display();
                        this.scene.translate(0, 1, 0);
                    }
                    break;
            }
        }

        this.scene.popMatrix();
    }
}