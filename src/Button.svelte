<script>

</script>

<style>
    .Button {
        @apply transition duration-200 bg-gradient-to-br from-gray-600 to-gray-700 static left-4 text-white  shadow-sm rounded-md m-4 p-4 hover:to-gray-400;
    }
</style>

<button class="Button">
    <slot></slot>
</button>