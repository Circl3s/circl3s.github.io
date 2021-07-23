<script>
    let wide = window.innerWidth > 768;

    function handleResize(e) {
        wide = window.innerWidth > 768;
    }
</script>

<style>
    .Logo {
        @apply flex flex-row md:flex-col m-4;
    }

    img {
        @apply h-32 w-32;
    }
</style>

<svelte:window on:resize={handleResize} />
<div class="Logo">
    <img src="img/JavaScript.svg" alt="JavaScript Logo" />
    {#if wide}
        <img src="img/WebAssembly.svg" alt="WebAssembly Logo" />
    {:else}
        <img src="img/WebAssembly_Horizontal.svg" alt="WebAssembly Logo" />
    {/if}
</div>