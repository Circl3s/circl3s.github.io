<script>
    export let open = false;

    function toggleMenu() {
        open = !open;
    }

    function closeMenu() {
        open = false;
    }
</script>

<style>
    @import url("https://fonts.googleapis.com/icon?family=Material+Icons+Round");
    
    .Menu {
        @apply m-4;
    }

    .content {
        @apply absolute text-white flex flex-col top-full right-0 bg-gray-800;
    }

    .content :global(a) {
        @apply text-right;
    }

    .icon {
        @apply text-xl flex align-middle justify-center focus:outline-none;
    }
</style>

<div class="Menu">
    <button class="icon" on:click={toggleMenu}>
        <span class="material-icons-round">menu</span>
    </button>
    <div class="content" style="visibility: {open ? "visible" : "hidden"};" on:click={closeMenu}>
        <slot></slot>
    </div>
</div>