<script>
import Card from "./Card.svelte";
import WebGL from "./WebGL.svelte";


</script>

<style>
    .Hobbies {
        @apply bg-black bg-opacity-50 flex flex-col md:flex-row p-4;
    }

    .hobby {
        @apply w-full md:w-1/2 flex justify-center;
    }
</style>

<div class="Hobbies" id="hobbies">
    <div class="hobby">
        <Card>
            <h2 slot="title">
                Sound Design
            </h2>
            <p slot="content">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. In error consequatur natus ipsum ab, facere voluptatem eaque perferendis eveniet! Dolor mollitia, omnis ea consectetur id sint eos dolorem veniam quae!
            </p>
        </Card>
    </div>
    <div class="hobby">
        <Card>
            <h2 slot="title">
                Programming
            </h2>
            <p slot="content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae facilis autem nostrum nam! Maxime quaerat expedita iste quo sunt nostrum ipsa, esse id sint adipisci blanditiis amet. Minus, in qui.
            </p>
        </Card>
    </div>
</div>
<WebGL />