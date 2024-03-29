precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    bool longboi = u_resolution.y > u_resolution.x;
    float ar = u_resolution.y / u_resolution.x;
    float amnt = longboi ? 10.0 : 20.0;
    vec2 scaled = vec2(st.x * amnt, st.y * amnt * ar);
    if (!longboi) {
        scaled.x += u_time / 4.0 * (floor(scaled.y - 4.0) - 0.5);
    } else {
        scaled.y += u_time / 4.0 * (floor(scaled.x - 4.0) - 0.5);
    }
    vec2 grid = fract(scaled);
    float circle = -1.0 * smoothstep(0.2, 0.23, distance(grid, vec2(0.5, 0.5))) + 1.0;

    gl_FragColor = vec4(0.094118 * circle, 0.094118 * circle, 0.105882 * circle, 1.0);
}