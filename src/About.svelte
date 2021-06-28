<script>
import Card from "./Card.svelte";
import Marker from "./Marker.svelte";

</script>

<style>
    .About {
        @apply bg-gray-900 w-full flex flex-col md:flex-row items-center justify-center p-8;
    }

    img {
        @apply rounded-full w-1/3 md:w-1/6 m-4;
    }

    h2, p {
        @apply text-center md:text-left;
    }
</style>

<Marker name="about" />
<div class="About">
    <img src="https://thispersondoesnotexist.com/image" alt="">
    <Card>
        <h2 slot="title">
            About
        </h2>
        <p slot="content">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error est voluptas hic natus voluptate ullam ipsa saepe. Pariatur fuga nemo autem assumenda architecto! Perferendis culpa repudiandae at quaerat ab ipsum?
        </p>
    </Card>
</div>