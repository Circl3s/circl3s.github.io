<script>
    import Button from "../shared/Button.svelte";
    import Card from "../shared/Card.svelte";
    import JSWASMLogo from "../shared/JSWASMLogo.svelte";
    import Marker from "../shared/Marker.svelte";

    let scroll;
</script>

<style>
    .Toolbox {
        @apply w-full flex flex-col md:flex-row items-center justify-center p-8 shadow-inner;
    }
</style>

<svelte:window bind:scrollY={scroll} />
<Marker name="toolbox" />
<div class="Toolbox" style="background-position-y: {scroll / 3}px">
    <JSWASMLogo />
    <Card>
        <h1 slot="title">Circl3s' Toolbox</h1>
        <div slot="content">
            <p>A collection of common web-based tools hosted on my own site for security and ease of access. Implemented using JavaScript and WebAssembly.</p>
            <Button disabled>
                Coming soon
            </Button>
        </div>
    </Card>
</div>