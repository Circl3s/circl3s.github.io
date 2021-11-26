<script>
    import Marker from "../shared/Marker.svelte";
    import CosmeticNotch from "../shared/CosmeticNotch.svelte";
</script>

<style>
    h2 {
        @apply text-2xl font-semibold;
    }

    h3 {
        @apply text-gray-300 text-3xl font-semibold;
    }

    .News {
        @apply flex flex-col justify-center items-center bg-gray-200 p-4;
    }

    .items {
        @apply h-64 flex flex-row justify-center items-center;
    }
</style>

<CosmeticNotch orientation="bottom-right" />
<Marker name="news" />
<div class="News">
    <h2>News</h2>
    <div class="items" id="items">
        <h3>No news yet.</h3>
    </div>
</div>