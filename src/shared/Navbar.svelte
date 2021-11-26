<script>
    import Menu from "./Menu.svelte";
    import { _ } from "svelte-i18n";

    export let anchors = [];
    export let title = "Circl3s";
    export let title_link = "#";

    let menu;

    let scroll = 0;

    let wide = window.innerWidth > 768;

    function handleResize(e) {
        wide = window.innerWidth > 768;
    }
</script>

<style>
    .Navbar {
        @apply text-white h-20 w-full fixed top-0 z-50 flex items-center justify-between p-4 transition duration-200;
    }

    .bg {
        @apply bg-gray-100 shadow-lg text-black;
    }

    h2 {
        @apply text-2xl;
    }

    a {
        @apply text-xl m-4 duration-100 hover:text-purple-600;
    }
</style>

<svelte:window bind:scrollY={scroll} on:resize={handleResize} />
<div class="Navbar {scroll == 0 && !menu ? "" : "bg"}">
    <a href={title_link}><h2>{title}</h2></a>
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