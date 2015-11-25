precision mediump float;

uniform sampler2D tex;

varying vec2 texcoord;

void calc_color() {
	gl_FragColor = texture2D(tex, texcoord);
}

void main() {
	calc_color();
}
