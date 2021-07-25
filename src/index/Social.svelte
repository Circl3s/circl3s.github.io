<script>
    import Button from "../shared/Button.svelte";
    import Marker from "../shared/Marker.svelte";
</script>

<style>
    .Social {
        /* height: calc(100vh - 5rem); */
        background-color: #121214;
        @apply w-full text-white text-center;
    }

    h1 {
        @apply text-3xl p-4;
    }

    img {
        @apply transition duration-200 w-24 h-24 m-4 filter grayscale brightness-75 hover:filter-none hover:cursor-pointer;
    }

    .container {
        @apply w-full flex flex-row flex-wrap p-4 justify-around;
        max-width: none !important;
    }
</style>

<Marker name="social" />
<div class="Social">
    <h1>You can find me on these platforms:</h1>
    <div class="container">
        <img src="img/YouTube.svg" alt="YouTube Logo">
        <img src="img/Spotify.svg" alt="Spotify Logo">
        <img src="img/Bandcamp.svg" alt="Bandcamp Logo">
        <img src="img/iTunes.svg" alt="iTunes Logo">
        <img src="img/Github.png" alt="Github Logo">
        <img src="img/Facebook.svg" alt="Facebook Logo">
    </div>
    <h1>...or contact me directly:</h1>
    <div class="container">
        <Button>
            Send an email
        </Button>
        <Button color={"blue"}>
            Send a message
        </Button>
        <Button color={"red"}>
            Send a nude
        </Button>
        <Button disabled>
            Send a bomb
        </Button>
    </div>
</div>