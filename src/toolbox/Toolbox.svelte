<script>
    import Footer from "../shared/Footer.svelte";
    import Navbar from "../shared/Navbar.svelte";
    import About from "./About.svelte";

    let anchors = ["Download Video", "Convert Video", "Extract Audio"]
</script>

<style>

</style>

<div class="Toolbox">
    <Navbar title="Circl3s' Toolbox" {anchors} />
    <About />
    <Footer />
</div>