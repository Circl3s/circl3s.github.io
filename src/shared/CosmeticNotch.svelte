<script>
    import { onMount } from 'svelte';

    export let orientation = "bottom-right";
    export let color = "gray-200";
    let element;

    onMount(() => {
        switch (orientation.toLowerCase()) {
            case "bottom-right":
                element.style.clipPath = "polygon(0 100%, 100% 0, 100% 100%)"
                break;
            case "top-right":
                element.style.clipPath = "polygon(0 0, 100% 0, 100% 100%)"
                break;
            case "top-left":
                element.style.clipPath = "polygon(0 0, 100% 0, 0 100%)"
                break;
            case "bottom-left":
                element.style.clipPath = "polygon(0 100%, 100% 100%, 0 0)"
                break;
            default:
                break;
        }
    });
</script>

<style>
    .CosmeticNotch {
        @apply w-full h-32;
    }
</style>

<div class="CosmeticNotch bg-{color}" bind:this="{element}">

</div>