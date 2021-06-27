<script>
import { slide } from "svelte/transition";

</script>

<style>
    .Notch {
        @apply bg-gray-900 w-full h-32 absolute bottom-0;
        clip-path: polygon(0 0, 0 100%, 100% 100%);
    }

    svg {
        @apply h-full w-12 text-gray-800 my-auto mx-4;
    }
</style>

<div class="Notch" in:slide={{duration: 1000, delay: 1500}}>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
    </svg>
</div>