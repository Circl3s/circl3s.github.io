<script>
import Step from "./Step.svelte";
import { Note, Sequence } from "./audio";

    let steps = new Sequence([
        // BAR 1
        new Note("E", 5, 500),
        new Note("B", 5, 500),
        new Note("A", 5, 500),
        new Note("E", 5, 500),
        new Note("G#", 5, 750),
        new Note("G#", 5, 750),
        new Note("A", 5, 500),
        // BAR 2
        new Note("-", "-", 500),
        new Note("E", 5, 500),
        new Note("A", 5, 500),
        new Note("E", 5, 500),
        new Note("G#", 5, 750),
        new Note("G#", 5, 750),
        new Note("A", 5, 500),
        // BAR 3
        new Note("E", 5, 500),
        new Note("B", 5, 500),
        new Note("A", 5, 500),
        new Note("E", 5, 500),
        new Note("G#", 5, 750),
        new Note("G#", 5, 750),
        new Note("A", 5, 500),
        // BAR 4
        new Note("-", "-", 500),
        new Note("E", 5, 500),
        new Note("A", 5, 500),
        new Note("C#", 6, 500),
        new Note("B", 5, 750),
        new Note("A", 5, 750),
        new Note("B", 5, 500)
    ]);

    let bass = new Sequence([
        // BAR 1
        new Note("-", "-", 500),
        new Note("D", 3, 500),
        new Note("-", "-", 500),
        new Note("D", 3, 500),
        new Note("-", "-", 500),
        new Note("D", 3, 500),
        new Note("-", "-", 500),
        new Note("D", 3, 500),
        //BAR 2
        new Note("-", "-", 500),
        new Note("D", 3, 500),
        new Note("-", "-", 500),
        new Note("D", 3, 500),
        new Note("-", "-", 500),
        new Note("D", 3, 500),
        new Note("-", "-", 500),
        new Note("D", 3, 500),
        // BAR 3
        new Note("-", "-", 500),
        new Note("D", 3, 500),
        new Note("-", "-", 500),
        new Note("D", 3, 500),
        new Note("-", "-", 500),
        new Note("D", 3, 500),
        new Note("-", "-", 500),
        new Note("D", 3, 500),
        // BAR 4
        new Note("-", "-", 500),
        new Note("D", 3, 500),
        new Note("-", "-", 500),
        new Note("D", 3, 500),
        new Note("-", "-", 500),
        new Note("D", 3, 500),
        new Note("-", "-", 500),
        new Note("D", 3, 500),
    ]);
</script>

<style>
    .MusicBox {
        @apply bg-gray-900 shadow-inner rounded-md w-full h-52 my-4 p-4 font-mono flex flex-row flex-wrap;
    }
</style>

<div class="MusicBox">
    <!-- {#each steps.notes as step}
        <Step on:clicked={() => step.play()}>
            <p>{step.note + step.octave}</p>
            <p>{step.length}</p>
        </Step>
    {/each} -->
    <button on:click={() => {
        steps.play();
        bass.play();
    }}>Play</button>
</div>