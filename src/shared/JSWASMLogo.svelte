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

    .img {
        min-height: 8rem;
        min-width: 8rem;
        @apply h-32 w-32;
    }
</style>

<svelte:window on:resize={handleResize} />
<div class="Logo">
    <img class="img" src="img/JavaScript.svg" alt="JavaScript Logo" />
    {#if wide}
        <img class="img" src="img/WebAssembly.svg" alt="WebAssembly Logo" />
    {:else}
        <img class="img" src="img/WebAssembly_Horizontal.svg" alt="WebAssembly Logo" />
    {/if}
</div>