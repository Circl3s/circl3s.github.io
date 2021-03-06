precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    vec2 gst = st;
    float ar = u_resolution.x / u_resolution.y;
    gst.x *= ar;
    vec2 grid = gst * 10.0;
    gst.x = fract(grid.x);
    gst.y = fract(grid.y + u_time);

    float circle = -1.0 * smoothstep(st.y * 0.7, st.y * 0.7 + 0.05, distance(gst, vec2(0.5, 0.5))) + 1.0;

    gl_FragColor = vec4(0.094118 * circle, 0.094118 * circle, 0.105882 * circle, 1.0);
}