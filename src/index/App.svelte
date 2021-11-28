<script>
    import About from "./About.svelte";
    import Greeter from "./Greeter.svelte";
    import Hobbies from "./Hobbies.svelte";
    import Navbar from "../shared/Navbar.svelte";
    import News from "./News.svelte";
    import Toolbox from "./Toolbox.svelte";
    import Social from "./Social.svelte";
    import Footer from "../shared/Footer.svelte";
    import { waitLocale } from "svelte-i18n";

    let anchors = ["About", "Hobbies", "News", "Toolbox", "Social"];

    export async function preload() {
        return waitLocale();
    }
</script>

<style>
    .App {
        @apply bg-gradient-to-tr from-purple-900 to-blue-900;
    }
</style>

<div class="App">
    <Navbar {anchors} />
    <Greeter />
    <About />
    <Hobbies />
    <News />
    <Toolbox />
    <Social />
    <Footer />
</div>