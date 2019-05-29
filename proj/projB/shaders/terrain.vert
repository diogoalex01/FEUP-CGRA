attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec2 vTextureCoord;

uniform sampler2D uSampler2;

void main() {

	vTextureCoord = aTextureCoord;
	vec4 filter = texture2D(uSampler2, vTextureCoord);

	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + aVertexNormal * 50.0 * filter.r, 1.0);
	
}
