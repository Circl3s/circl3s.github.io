<script>
    import CosmeticNotch from "./CosmeticNotch.svelte";
</script>

<style>
    .Section {
        @apply w-full bg-gray-200 flex flex-col justify-center items-center p-8;
    }
</style>

<div class="Section">
    <slot></slot>
</div>
<CosmeticNotch orientation="top-left" />