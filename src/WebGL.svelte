<script>
    import {onMount} from "svelte";

    let canvas;

    onMount(() => {
        const vertexShaderText = `
precision mediump float;

attribute vec2 vertPosition;

varying vec3 fragColor;

void main() {
    gl_Position = vec4(vertPosition, 0.0, 1.0);
}
        `;

        const fragmentShaderText = `
        precision mediump float;

#define PI 3.1415926535897932384626433832795

uniform float u_time;
uniform vec2 u_resolution;

float normalized_sin(float x) {
    return (sin(x) / 2.0) + 0.5;
}

float normalized_offset(float x) {
    return (x * 2.0 * PI);
}

void main() {
    vec2 pos = gl_FragCoord.xy / u_resolution;

    // float rst = normalized_sin(2.0 * u_time + normalized_offset(pos.x + pos.y)) / sin(normalized_offset(pos.x));
    // float gst = normalized_sin(1.5 * u_time + normalized_offset(pos.x + pos.y) + normalized_offset(1.0 / 3.0)) / sin(normalized_offset(pos.y));
    // float bst = normalized_sin(2.5 * u_time + normalized_offset(pos.x + pos.y) + normalized_offset(2.0 / 3.0)) / sin(normalized_offset(pos.x * pos.y) + 2.0 / 3.0 * PI);

    float rst = normalized_sin(u_time + pos.x) / pow(normalized_sin(pos.y), 5.0);
    float gst = normalized_sin(u_time + normalized_offset(1.0 / 3.0) + pos.x) / pow(normalized_sin(pos.y), 3.0);
    float bst = normalized_sin(u_time + normalized_offset(2.0 / 3.0) + pos.x) / pow(normalized_sin(pos.y), 2.0);
    gl_FragColor = vec4(rst, gst, bst, 1.0);
}
        `;

//         const fragmentShaderText = `
// precision mediump float;

// #define PI 3.1415926535897932384626433832795

// uniform float u_time;
// uniform vec2 u_resolution;

// float plot(vec2 st, float pct){
//   return  smoothstep( pct-0.02, pct, st.y) -
//           smoothstep( pct, pct+0.02, st.y);
// }

// vec3 music() {
//     vec2 st = gl_FragCoord.xy / u_resolution.xy;

//     float ar = u_resolution.x / u_resolution.y;

//     st.y = st.y * 5.0 * ar;
//     float grid = floor(st.y);
//     st.y = fract(st.y);

//     float val = plot(st, ((sin(u_time * 5.0 + st.x * 10.0 * (grid + 10.0)) / 5.0) + 0.5));

//     return vec3(val);
// }

// void main() {
//     vec2 st = gl_FragCoord.xy / u_resolution.xy;
//     float ar = u_resolution.y / u_resolution.x;
//     if (st.x < 0.1) {
//         gl_FragColor = vec4(music(), 1.0);
//     }
// }
//         `;

        var canvas = document.getElementById("webgl");
        var gl = canvas.getContext("webgl");

        if (!gl) {
            gl = canvas.getContext("experimental-webgl");
        }

        gl.clearColor(0.75, 0.85, 0.8, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        var vertexShader = gl.createShader(gl.VERTEX_SHADER);
        var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

        gl.shaderSource(vertexShader, vertexShaderText);
        gl.shaderSource(fragmentShader, fragmentShaderText);

        gl.compileShader(vertexShader);
        if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
            console.error("ERROR compiling vertex shader!", gl.getShaderInfoLog(vertexShader));
            return;
        }

        gl.compileShader(fragmentShader);
        if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
            console.error("ERROR compiling fragment shader!", gl.getShaderInfoLog(fragmentShader));
            return;
        }

        var program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            console.error("ERROR linking program", gl.getProgramInfoLog(program));
            return;
        }

        gl.validateProgram(program);
        if (!gl.getProgramParameter(program, gl.VALIDATE_STATUS)) {
            console.error("ERROR validating program", gl.getProgramInfoLog(program));
            return;
        }



        var triangleVertices = [
        //  X, Y
            -1.0, 3,
            -1.0, -1.0,
            3, -1.0
        ];

        var triangleVertexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleVertices), gl.STATIC_DRAW);

        var positionAttribLocation = gl.getAttribLocation(program, "vertPosition");
        // var colorAttribLocation = gl.getAttribLocation(program, "vertColor");

        gl.vertexAttribPointer(
            positionAttribLocation,
            2,
            gl.FLOAT,
            gl.FALSE,
            2 * Float32Array.BYTES_PER_ELEMENT,
            0
        );

        // gl.vertexAttribPointer(
        //     colorAttribLocation,
        //     3,
        //     gl.FLOAT,
        //     gl.FALSE,
        //     5 * Float32Array.BYTES_PER_ELEMENT,
        //     2 * Float32Array.BYTES_PER_ELEMENT
        // );

        gl.enableVertexAttribArray(positionAttribLocation);
        // gl.enableVertexAttribArray(colorAttribLocation);

        gl.useProgram(program);

        var timeLocation = gl.getUniformLocation(program, "u_time");
        var resLocation = gl.getUniformLocation(program, "u_resolution");

        function renderLoop(time) {
            gl.uniform1f(timeLocation, time / 1000);
            gl.uniform2f(resLocation, canvas.getBoundingClientRect().width, canvas.getBoundingClientRect().height);
            gl.drawArrays(gl.TRIANGLES, 0, 3);
            requestAnimationFrame(renderLoop);
        }
        
        requestAnimationFrame(renderLoop);
    });
</script>

<style>
    .WebGL {
        @apply w-full h-full fixed top-0;
        z-index: -1 !important;
    }
</style>

<canvas bind:this={canvas} class="WebGL" id="webgl">

</canvas>