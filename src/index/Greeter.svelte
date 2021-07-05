<script>
    import {draw} from "svelte/transition";
    import Notch from "./Notch.svelte";

    let ready = false;

    document.body.onload = event => {
        ready = true;
    }
</script>

<style>
    .Greeter {
        @apply bg-black w-full h-screen flex justify-center items-center flex-col;
    }

    .row {
        @apply flex flex-col md:flex-row h-3/4 md:h-1/3 p-8;
    }

    h1 {
        @apply text-white font-semibold text-2xl;
    }

    p {
        @apply text-white;
    }

    svg {
        @apply h-auto md:h-3/4 w-3/4 md:w-auto m-8;
    }
</style>

<div class="Greeter">
    {#if (ready == true)}
        <div class="row">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path d="M2,50a48,48 0 1,0 96,0a48,48 0 1,0 -96,0" fill="transparent" stroke="white" stroke-width="2" in:draw={{delay: 0, duration: 2000}}/>
            </svg>
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path d="M2,50a48,48 0 1,0 96,0a48,48 0 1,0 -96,0" fill="transparent" stroke="white" stroke-width="2" in:draw={{delay: 100, duration: 2000}}/>
            </svg>
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path d="M2,50a48,48 0 1,0 96,0a48,48 0 1,0 -96,0" fill="transparent" stroke="white" stroke-width="2" in:draw={{delay: 200, duration: 2000}}/>
            </svg>
        </div>
        <Notch />
    {/if}
</div>