
attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;
uniform float timeFactor;

varying vec2 vTextureCoord;

uniform sampler2D uSampler2;

void main() {

	vTextureCoord = aTextureCoord;
	vec2 temp =  vTextureCoord + vec2(timeFactor*.01, 0.0);
	temp.x = mod(temp.x, 1.0);
	vec4 filter = texture2D(uSampler2, temp);

	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + aVertexNormal * 0.1 * filter.r, 1.0);
	
}
