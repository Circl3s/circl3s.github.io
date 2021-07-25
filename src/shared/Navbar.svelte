<script>
    import Menu from "./Menu.svelte";

    export let anchors;
    export let title;

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
        @apply bg-gray-800 shadow-lg;
    }

    h2 {
        @apply text-2xl;
    }

    a {
        @apply text-xl m-4;
    }
</style>

<svelte:window bind:scrollY={scroll} on:resize={handleResize} />
<div class="Navbar {scroll == 0 && !menu ? "" : "bg"}">
    <a href="#"><h2>{title}</h2></a>
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
</div>