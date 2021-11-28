<script>
import Button from "../shared/Button.svelte";
import Card from "../shared/Card.svelte";
import Marker from "../shared/Marker.svelte";
import Sequencer from "./Sequencer.svelte";
import Typewriter from "./Typewriter.svelte";
import WebGL from "../shared/WebGL.svelte";

import blobs from "../shaders/blobs.frag";
</script>

<style>
    .Hobbies {
        @apply bg-transparent;
    }

    .bg {
        @apply w-full h-full fixed bottom-0 bg-gradient-to-b from-gray-900 to-black;
        z-index: -1;
    }

    .columns {
        @apply h-full flex flex-col md:flex-row p-4;
    }

    .hobby {
        @apply w-full md:w-1/2 flex justify-center;
    }

    p {
        @apply text-justify;
    }
</style>

<Marker name="hobbies" />
<div class="Hobbies">
    <div class="columns">
        <div class="hobby">
            <Card>
                <h2 slot="title">
                    Sound Design
                </h2>
                <div slot="content">
                    <Sequencer />
                    <p>
                        I started listening to electronic music when I was a little kid and became interested in making it myself soon after. 
                        I released my first track on YouTube in 2014 and since then my various tracks and covers have gathered over 1 million streams in total. 
                        Over the years I realized I am much more interested in the sound design aspect of creating electronic music than the composition itself, and therefore have spent my life mastering various synthesis methods and collecting hardware synthesizers. 
                        Genres like Electro House and Synthwave are my bread and butter, but I also like to experiment and even dabble in cinematic/orchestral composing.
                    </p>
                    <Button disabled>
                        Browse (coming soon)
                    </Button>
                </div>
            </Card>
        </div>
        <div class="hobby">
            <Card>
                <h2 slot="title">
                    Programming
                </h2>
                <div slot="content">
                    <Typewriter />
                    <p>
                        I've been deeply invested in computers and programming for a long time. 
                        I've written in many programming and scripting languages, predominantly Javascript, Python, Crystal and PowerShell, but I'm always learning new languages and frameworks. 
                        Other languages I'm learning or have used in the past include Rust, PHP, Ruby and Lua among others. 
                        I have experience using MySQL and Redis databases and have utilized SSR, designed APIs and written server-side applications that interact with them. 
                        I have a grasp on component-based frontend building having used Flutter and Svelte. 
                        I often spend my free time learning new technologies, like WebGL, WebAssembly, PWA, etc.
                    </p>
                    <Button href="/programming" target="_self">
                        Browse
                    </Button>
                </div>
            </Card>
        </div>
    </div>
    <div class="bg">
        <!-- {#if window.WebGLRenderingContext}
            <WebGL shader_import={blobs} />
        {/if} -->
    </div>
</div>