<script>
    import {onMount} from "svelte"
    import Step from "./Step.svelte"

    var length = 16,
        current = 0,
        channel1,
        channel2,
        channel3,
        channel4,
        steps = [
            [true, false, false, false, true, false, false, false, true, false, false, false, true, false, false, false],
            [false, false, false, false, true, false, false, false, false, false, false, false, true, false, false, false],
            [false, false, true, false, false, false, true, true, false, true, true, false, false, false, true, false],
            [false, false, false, false, false, false, false, false, false, false, false, true, false, false, true, false]
        ]

    function blink(elements) {
        elements.forEach(element => {
            element.classList.add("blink");
        });
        setTimeout(() => {
                elements.forEach(element => {
                element.classList.remove("blink");
            });
        }, 500);
    }

    function progress() {
        current = ++current % length;
        let blinkable = [channel1.children[current], channel2.children[current], channel3.children[current], channel4.children[current]];
        blink(blinkable);
    }

    onMount(() => {
        setInterval(progress, 500 / 4);
    })
</script>

<style>
    .Sequencer {
        @apply bg-gray-900 shadow-inner rounded-md w-full h-32 md:h-52 my-4 font-mono grid grid-rows-4 grid-cols-1;
    }

    .channel {
        @apply grid;
        grid-template-columns: repeat(16, minmax(0, 1fr));
    }
</style>

<div class="Sequencer">
    <div bind:this={channel1} class="channel" id="channel-1">
        {#each steps[0] as step}
            <Step color="red" active={step} />
        {/each}
    </div>
    <div bind:this={channel2} class="channel" id="channel-2">
        {#each steps[1] as step}
            <Step color="yellow" active={step} />
        {/each}
    </div>
    <div bind:this={channel3} class="channel" id="channel-3">
        {#each steps[2] as step}
            <Step color="indigo" active={step} />
        {/each}
    </div>
    <div bind:this={channel4} class="channel" id="channel-4">
        {#each steps[3] as step}
            <Step color="green" active={step} />
        {/each}
    </div>
</div>