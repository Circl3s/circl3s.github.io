<script>
import Button from "./Button.svelte";
import Card from "./Card.svelte";
import Marker from "./Marker.svelte";
import Typewriter from "./Typewriter.svelte";
import WebGL from "./WebGL.svelte";
</script>

<style>
    .Hobbies {
        @apply bg-transparent;
    }

    .bg {
        @apply w-full h-full absolute;
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
    <div class="bg">
        <WebGL />
    </div>
    <div class="columns">
        <div class="hobby">
            <Card>
                <h2 slot="title">
                    Sound Design
                </h2>
                <div slot="content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae facilis autem nostrum nam! Maxime quaerat expedita iste quo sunt nostrum ipsa, esse id sint adipisci blanditiis amet. Minus, in qui.
                    </p>
                    <Button>
                        Browse
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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae facilis autem nostrum nam! Maxime quaerat expedita iste quo sunt nostrum ipsa, esse id sint adipisci blanditiis amet. Minus, in qui.
                    </p>
                    <Button>
                        Browse
                    </Button>
                </div>
            </Card>
        </div>
    </div>
</div>