<script>
    export let color = "purple";
    export let disabled = false;
    export let target = "";
    export let href;

    function action() {
        if (href) {
            window.open(href, target);
        }
    }
</script>

<style>
    .Button {
        @apply transition duration-200 bg-gradient-to-br text-white shadow-sm rounded-md m-4 p-4 hover:brightness-125 focus:outline-none;
    }

    .Button:disabled {
        @apply cursor-default filter grayscale hover:brightness-100;
    }
</style>

<button class="Button from-{color}-700 to-{color}-500" {disabled} on:click={action}>
    <slot></slot>
</button>