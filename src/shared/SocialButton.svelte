<script>
    export let src, alt, href;

    function navigate() {
        window.open(href, '_blank').focus();
    }
</script>

<style>
    img {
        @apply transition duration-200 w-24 h-24 m-4 filter grayscale brightness-75 hover:filter-none hover:cursor-pointer;
    }
</style>

<img {src} {alt} on:click={navigate}>