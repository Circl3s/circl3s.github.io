<script>
    export let shader_import;

    import {onMount} from "svelte";

    let canvas;

    function handleResize() {
        canvas.width = canvas.getBoundingClientRect().width;
        canvas.height = canvas.getBoundingClientRect().height;
    }

    onMount(() => {
        canvas.width = canvas.getBoundingClientRect().width;
        canvas.height = canvas.getBoundingClientRect().height;
        const vertexShaderText = `
precision mediump float;

attribute vec2 vertPosition;

varying vec3 fragColor;

void main() {
    gl_Position = vec4(vertPosition, 0.0, 1.0);
}
        `;

        const fragmentShaderText = shader_import;

        var gl = canvas.getContext("webgl");

        if (!gl) {
            gl = canvas.getContext("experimental-webgl");
        }

        if (gl) {
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

            gl.vertexAttribPointer(
                positionAttribLocation,
                2,
                gl.FLOAT,
                gl.FALSE,
                2 * Float32Array.BYTES_PER_ELEMENT,
                0
            );

            gl.enableVertexAttribArray(positionAttribLocation);

            gl.useProgram(program);

            var timeLocation = gl.getUniformLocation(program, "u_time");
            var resLocation = gl.getUniformLocation(program, "u_resolution");

            function renderLoop(time) {
                gl.uniform1f(timeLocation, (time / 5000) % 1);
                gl.uniform2f(resLocation, canvas.getBoundingClientRect().width, canvas.getBoundingClientRect().height);
                gl.drawArrays(gl.TRIANGLES, 0, 3);
                requestAnimationFrame(renderLoop);
            }
            
            requestAnimationFrame(renderLoop);
        }
    });
</script>


<style>
    .WebGL {
        @apply w-full h-full top-0;
    }
</style>

<svelte:window on:resize={handleResize} />
<canvas bind:this={canvas} class="WebGL">

</canvas>