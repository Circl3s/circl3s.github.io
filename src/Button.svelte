<script>

</script>

<style>
    .Button {
        @apply transition duration-200 bg-gradient-to-br from-purple-900 to-purple-700 left-4 text-white shadow-sm rounded-md m-4 p-4 hover:brightness-125;
    }
</style>

<button class="Button">
    <slot></slot>
</button>