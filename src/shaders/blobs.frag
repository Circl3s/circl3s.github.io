precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

const vec3 purple = vec3(0.345,0.11,0.529);
const vec3 blue = vec3(0.118,0.227,0.541);

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    vec2 gst = st;
    float ar = u_resolution.x / u_resolution.y;
    gst.x *= ar;
    vec2 grid = gst * 10.0;
    gst.x = fract(grid.x);
    gst.y = fract(grid.y + u_time / 10.0);

    float circle = -1.0 * smoothstep(st.y * 0.7, st.y * 0.7 + 0.05, distance(gst, vec2(0.5, 0.5))) + 1.0;

    gl_FragColor = vec4(mix(purple, blue, st.y) * circle, 1.0);
}