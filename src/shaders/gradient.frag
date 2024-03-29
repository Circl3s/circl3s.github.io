precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;
uniform float u_scroll;

const vec3 purple = vec3(0.345,0.11,0.529);
const vec3 blue = vec3(0.118,0.227,0.541);

void main() {
    vec2 screenspace = gl_FragCoord.xy / u_resolution.xy;
    float aspect_ratio = u_resolution.x / u_resolution.y;
    float wave1 = sin(screenspace.x * 5.0 * aspect_ratio + u_scroll / 600.0 + u_time / 3.1) / 8.0 + 0.75;
    float wave2 = sin(screenspace.x * 3.0 * aspect_ratio + u_scroll / 400.0 + u_time / 1.9) / 8.0 + 0.5;
    float wave3 = sin(screenspace.x * 1.5 * aspect_ratio + u_scroll / 200.0 + u_time) / 8.0 + 0.25;
    if (screenspace.y < wave3) {
        gl_FragColor = vec4(mix(purple, blue, 0.30), 1.0);
    } else if (screenspace.y < wave2) {
        gl_FragColor = vec4(mix(purple, blue, 0.45), 1.0);
    } else if (screenspace.y < wave1) {
        gl_FragColor = vec4(mix(purple, blue, 0.70), 1.0);
    } else {
        gl_FragColor = vec4(blue, 1.0);
    }
}