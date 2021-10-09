<script>
    export let color = "gray";
    export let active = false;
    export let blink = false;
</script>

<style>
    .Step {
        @apply m-1;
    }

    .blink {
        filter: brightness(1.5);
    }
</style>

<div class="Step bg-{active ? color : "gray"}-800 {blink ? "blink" : ""}">
    
</div>