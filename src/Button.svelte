<script>

</script>

<style>
    .Button {
        @apply transition duration-200 bg-gray-700 left-4 text-white shadow-sm rounded-md m-4 p-4 hover:bg-gray-600;
    }
</style>

<button class="Button">
    <slot></slot>
</button>