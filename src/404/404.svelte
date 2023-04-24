<script>
    import Navbar from "../shared/Navbar.svelte";
    import WebGL from "../shared/WebGL.svelte";
    import Card from "../shared/Card.svelte";

    import blobs from "../shaders/blobs.frag";
</script>

<style>
    .NotFound {
        @apply w-screen h-screen flex;
    }

    .bg {
        @apply w-full h-full fixed bottom-0 bg-gradient-to-b from-gray-900 to-black;
        z-index: -1;
    }

    .content {
        @apply w-full h-full flex justify-center items-center;
    }

    iframe {
        @apply w-full h-80 md:h-96 mt-4;
    }

    a {
        @apply underline;
    }
</style>

<div class="NotFound">
    <Navbar title_link="/" />
    <div class="content">
        <Card>
            <h2 slot="title">404: Not Found</h2>
            <div slot="content">
                You can <a href="/">go to the homepage</a> or play some Breakout while you're here. :)
                <iframe title="Circl3s' Super Breakout" src="/dist/404/generated/breakout.html" frameborder="0"></iframe>
            </div>
        </Card>
    </div>
    <div class="bg">
        {#if window.WebGLRenderingContext}
            <WebGL shader_import={blobs} />
        {/if}
    </div>
</div>