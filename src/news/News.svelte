<script>
    import Navbar from "../shared/Navbar.svelte";
    import Section from "../shared/Section.svelte";
    import Timeline from "./Timeline.svelte";
    import CosmeticNotch from "../shared/CosmeticNotch.svelte";
    import Footer from "../shared/Footer.svelte";
</script>

<style>
    .News {
        @apply flex flex-col min-h-[100vh];
    }
</style>

<div class="News">
    <Navbar subtitle="News" always_visible />
    <Section>
        <p class="py-40 text-xl">Welcome to the News section of my site.</p>
    </Section>
    <Timeline />
    <CosmeticNotch orientation="bottom-right" />
    <Footer />
</div>