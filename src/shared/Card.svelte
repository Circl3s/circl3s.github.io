<script>

</script>

<style>
    .Card {
        @apply z-10 text-white bg-gray-800 rounded-md shadow-md m-4 p-4 w-full md:max-w-xl;
    }
</style>

<div class="Card">
    <div class="text-2xl font-semibold mb-4">
        <slot name="title"></slot>
    </div>
    <slot name="content"></slot>
</div>