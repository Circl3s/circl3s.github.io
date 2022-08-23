<script>
    import CosmeticNotch from "../shared/CosmeticNotch.svelte";
    import WebGL from "../shared/WebGL.svelte";

    import gradient from "../shaders/gradient.frag";
</script>

<style>
    .Portfolio {
        @apply flex flex-col p-8;
    }

    .bg {
        @apply w-full h-full fixed bottom-0 bg-gradient-to-tr from-purple-900 to-blue-900;
        z-index: -1;
    }

    .Portfolio :global(.Card) {
        @apply my-4 mx-0 md:mx-4;
    }

    .Portfolio :global(a) {
        @apply underline;
    }
</style>

<div class="Portfolio">
    <slot></slot>
</div>
<div class="bg">
    {#if window.WebGLRenderingContext}
        <WebGL shader_import={gradient} />
    {/if}
</div>
<CosmeticNotch orientation="bottom-right" />