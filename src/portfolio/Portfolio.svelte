<script>
    import CosmeticNotch from "../shared/CosmeticNotch.svelte";
</script>

<style>
    .Portfolio {
        @apply flex flex-col p-8;
    }

    .Portfolio > :global(.Card) {
        @apply self-center md:self-start md:even:self-end;
    }

    .Portfolio :global(a) {
        @apply underline;
    }
</style>

<div class="Portfolio">
    <slot></slot>
</div>
<CosmeticNotch orientation="bottom-right" />