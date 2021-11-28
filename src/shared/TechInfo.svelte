<script>
    import { onMount } from "svelte";


    export let bg_color = "#e4e4e7";
    export let text_color = "#000000";
    export let open = false;

    let twisty;

    function toggle() {
        open = !open;
    }

    onMount(() => {

    });
</script>

<style>
    .TechInfo {
        @apply m-4 p-2 min-w-[8rem] h-[min-content] w-full md:w-2/5 flex flex-col justify-center rounded-md shadow-md;
    }

    .header {
        @apply h-12 p-2 flex flex-row select-none cursor-pointer;
    }
</style>

<div class="TechInfo" style="background-color: {bg_color}; color: {text_color}">
    <div class="header" on:click="{toggle}">
        <slot name="header"></slot>
    </div>
    <div class="content" style="display: {open ? 'block' : 'none'}"><slot name="content"></slot></div>
</div>