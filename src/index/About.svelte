<script>
import Card from "../shared/Card.svelte";
import Marker from "../shared/Marker.svelte";

</script>

<style>
    .About {
        @apply bg-gray-200 w-full flex flex-col md:flex-row items-center justify-center p-8;
    }

    img {
        @apply rounded-full w-36 h-36 md:w-56 md:h-56 m-4 object-cover border-solid border-8 border-gray-100;
    }

    h2, p {
        @apply text-center md:text-left;
    }

    p {
        text-indent: 8px;
    }
</style>

<Marker name="about" />
<div class="About">
    <img src="/img/_MG_0902_edit2.jpg" alt="">
    <Card>
        <h2 slot="title">
            About
        </h2>
        <div slot="content">
            <p>
                My name is Feliks and I'm a {new Date((new Date) - (new Date("11 Oct 2001"))).getFullYear() - 1970} year old music producer/sound designer and programmer.
            </p>
            <p>
                When it comes to music I make mostly electronic music with emphasis on sound design or music inspired by my love for hardware analogue synthesizers of old.
            </p>
            <p>
                When programming I tend to stick to frontend development, but I have also designed and implemented APIs and managed databases for my personal as well as school projects.
            </p>
            <p>
                You can find out more about my work in the next section.
            </p>
        </div>
    </Card>
</div>
