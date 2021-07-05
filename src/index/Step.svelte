<script>
    import {createEventDispatcher} from "svelte";

    const dispatch = createEventDispatcher();

    const clicked = () => {
        dispatch("clicked");
    };
</script>

<style>
    .Step {
        @apply h-1/3 w-12 m-2 bg-gray-800 rounded-md transition duration-100 hover:bg-gray-700;
    }
</style>

<div class="Step" on:click={clicked}>
    <slot>

    </slot>
</div>