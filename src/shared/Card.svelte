<script>
    export let size = "xl";
</script>

<style>
    .Card {
        @apply z-10 text-black bg-gray-100 rounded-md shadow-md m-4 p-4 w-full;
    }
</style>

<div class="Card max-w-{size}">
    <div class="text-2xl font-semibold mb-4">
        <slot name="title"></slot>
    </div>
    <slot name="content"></slot>
</div>