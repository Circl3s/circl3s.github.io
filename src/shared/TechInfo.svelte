<script>
    import { onMount } from "svelte";


    export let bg_color = "#e4e4e7";
    export let text_color = "#000000";
    export let open = false;
    export let cta = false;

    let div;

    function toggle() {
        open = !open;
        cta = false;
        div.style.transform = "none";
    }

    function zoom() {
        if (!open) {
            div.style.transform = "scale(1.1)";
        }   
    }

    function unzoom() {
        div.style.transform = "none";
    }

    onMount(() => {

    });
</script>

<style>
    @keyframes wiggle {
        0%  {right: 0px}
        80% {right: 0px}
        85% {right: 5px}
        90% {right: -5px}
        95% {right: 5px}
        100%{right: -5px}
    }
    .TechInfo {
        @apply relative m-4 p-2 min-w-[8rem] h-[min-content] w-full sm:w-2/5 flex flex-col justify-center rounded-md shadow-md duration-200;
    }

    .header {
        @apply h-12 p-2 flex flex-row select-none cursor-pointer justify-center;
    }

    .cta {
        animation: 1.5s linear infinite wiggle;
    }
</style>

<div class="TechInfo {cta ? 'cta' : ''}" style="background-color: {bg_color}; color: {text_color};" bind:this="{div}">
    <div class="header" on:click="{toggle}" on:mouseenter="{zoom}" on:mouseleave="{unzoom}">
        <slot name="header"></slot>
    </div>
    <div class="content" style="display: {open ? 'block' : 'none'}"><slot name="content"></slot></div>
</div>