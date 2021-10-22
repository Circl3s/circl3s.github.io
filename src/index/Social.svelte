<script>
    import Button from "../shared/Button.svelte";
    import Marker from "../shared/Marker.svelte";
    import SocialButton from "../shared/SocialButton.svelte";
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

    .container {
        @apply w-full flex flex-row flex-wrap p-4 justify-evenly;
        max-width: none !important;
    }
</style>

<Marker name="social" />
<div class="Social">
    <h1>You can find me on these platforms:</h1>
    <div class="container">
        <SocialButton src="img/YouTube.svg" alt="YouTube Logo" href="https://youtube.com/c/Circl3s" />
        <SocialButton src="img/Spotify.svg" alt="Spotify Logo" href="https://open.spotify.com/artist/63EPBIlscwLmgEeGq7O3rj" />
        <SocialButton src="img/Bandcamp.svg" alt="Bandcamp Logo" href="https://circl3s.bandcamp.com" />
        <SocialButton src="img/iTunes.svg" alt="Apple Music Logo" href="https://music.apple.com/gb/artist/circl3s/1112995196" />
        <SocialButton src="img/Github.png" alt="Github Logo" href="https://github.com/Circl3s" />
        <!-- <SocialButton src="img/Facebook.svg" alt="Facebook Logo" href="https://facebook.com/Circl3s" /> -->
    </div>
    <h1>...or contact me directly:</h1>
    <div class="container">
        <Button href="mailto:maak4422+contact@gmail.com">
            Send an email
        </Button>
        <Button href="https://m.me/feliatar" color="blue" target="_blank">
            Messenger
        </Button>
    </div>
</div>