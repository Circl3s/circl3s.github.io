<script>
    export let disabled = false;
</script>

<style>
    .Button {
        @apply transition duration-200 bg-gradient-to-br from-purple-900 to-purple-700 left-4 text-white shadow-sm rounded-md m-4 p-4 hover:brightness-125;
    }

    .Button:disabled {
        @apply hover:brightness-100 cursor-default filter grayscale;
    }
</style>

<button class="Button" {disabled}>
    <slot></slot>
</button>