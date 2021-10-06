<script>
    export let color = "purple";
    export let disabled = false;
    export let href;

    function action() {
        if (href) {
            window.location.href = href;
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

<button class="Button from-{color}-900 to-{color}-700" {disabled} on:click={action}>
    <slot></slot>
</button>