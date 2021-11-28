<script>
    import Menu from "./Menu.svelte";
    import { _ } from "svelte-i18n";

    export let anchors = [];
    export let title = "Circl3s";
    export let subtitle;
    export let title_link = subtitle ? "/" : "#";
    export let subtitle_link = "#";
    export let always_visible = false;

    let menu;

    let scroll = 0;

    let wide = window.innerWidth > 768;

    function handleResize(e) {
        wide = window.innerWidth > 768;
    }
</script>

<style>
    .Navbar {
        @apply text-white h-20 w-screen fixed top-0 z-50 flex items-center justify-between p-4 transition duration-200;
    }

    .bg {
        @apply bg-gray-100 shadow-lg text-black;
    }

    .title-block {
        @apply flex flex-row items-center;
    }

    h2 {
        @apply text-2xl;
    }

    h3 {
        @apply text-xl font-light;
    }

    a {
        @apply text-xl m-4 transition-colors duration-100 hover:text-purple-600;
    }

    .title-block > * {
        @apply m-1 duration-100;
    }
</style>

<svelte:window bind:scrollY={scroll} on:resize={handleResize} />
<div class="Navbar {scroll == 0 && !menu ? "" : "bg"} {always_visible ? "bg" : ""}">
    <div class="title-block">
            <a href={title_link}><h2>{title}</h2></a>
            {#if subtitle}
                <span>|</span>
                <a href={subtitle_link}><h3>{subtitle}</h3></a>
            {/if}
    </div>
    
    {#if anchors.length > 0}
        {#if wide}
            <div class="links">
                {#each anchors as anchor}
                    <a href="#{anchor.toLowerCase()}">{anchor}</a>
                {/each}
            </div>
        {:else}
            <Menu bind:open={menu}>
                {#each anchors as anchor}
                    <a href="#{anchor.toLowerCase()}">{anchor}</a>
                {/each}
            </Menu>
        {/if}
    {/if}
</div>