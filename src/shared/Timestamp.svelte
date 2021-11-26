<script>
    import { onMount } from 'svelte';

    export let time;
    let stamp;

    onMount(() => {
        if (time) {
            let now = new Date();
            let diff = now - time;
            let days = Math.floor(diff / (1000 * 60 * 60 * 24));
            let hours = Math.floor(diff / (1000 * 60 * 60));
            let minutes = Math.floor(diff / (1000 * 60));

            if (days > 28) {
                stamp.innerText = time.toDateString();
            } else if (days > 0 && days < 28) {
                stamp.innerText = `${days} ${days == 1 ? "day" : "days"} ago`;
            } else if (days < 1) {
                stamp.innerText = `${hours} ${hours == 1 ? "hour" : "hours"} ago`;
            } else if (hours < 1) {
                stamp.innerText = `${minutes} ${minutes == 1 ? "minute" : "minutes"} ago`;
            } else {
                stamp.innerText = 'Just now';
            }
        } else {
            stamp.innerText = "Long ago"
        }
    });
</script>

<style>
    span {
        @apply mr-2;
    }
</style>

<p class="Timestamp">
    <span>🕒</span><span bind:this="{stamp}"></span>
</p>