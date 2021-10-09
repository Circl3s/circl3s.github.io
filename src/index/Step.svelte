<script>
    export let color = "gray";
    export let active = false;
    export let blink = false;

    function toggle() {
        active = !active
    }
</script>

<style>
    .Step {
        @apply m-0.5 md:m-1 duration-100;
    }

    @keyframes blink {
        0%      {filter: brightness(2);}
        100%    {filter: none;}
    }

    .blink {
        animation-name: blink;
        animation-duration: 0.5s;
        animation-iteration-count: 1;
        animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    .no-blink {
        animation: none !important;
    }
</style>

<div class="Step bg-{active ? color : "gray"}-800 {blink ? "blink" : ""} {!active ? "no-blink" : ""}" on:click={toggle}>
    
</div>