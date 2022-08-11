<script>
    import Marker from "../shared/Marker.svelte";
    import Card from "../shared/Card.svelte";
    import CosmeticNotch from "../shared/CosmeticNotch.svelte";
    import Timestamp from "../shared/Timestamp.svelte";
    import Button from "../shared/Button.svelte";
    import { onMount } from "svelte";

    import { createClient } from "@supabase/supabase-js";

    let ph_text;
    let post_array = [];

    const supabaseUrl = 'https://chailagpncxzrnujqznl.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNzk0NDE2MywiZXhwIjoxOTUzNTIwMTYzfQ.j7HbrIrT1elnirf8zk1hT3cM0xi6JLc9A92qH4_rEJ0';
    const supabase = createClient(supabaseUrl, supabaseKey);

    async function populate() {
        let { data: posts, error} = await supabase.from("posts").select("*").limit(3);

        if (error) {
            ph_text.innerText = "Error while getting posts."
        } else if (posts.length == 0) {
            ph_text.innerText = "No posts found."
        } else {
            ph_text.style.display = "none";
            post_array = posts.reverse();
        }
    }

    onMount(async () => {
        await populate();
    });
</script>

<style>
    h1 {
        @apply text-3xl font-semibold;
    }

    h3 {
        @apply text-gray-300 text-3xl font-semibold;
    }

    .mobile-first {
        @apply hidden first:flex md:flex;
    }

    .News {
        @apply flex flex-col justify-center items-center bg-gray-200 p-4;
    }

    .items {
        @apply min-h-[16rem] w-full flex flex-col md:flex-row justify-center items-center;
    }

    .thumb {
        @apply h-40 w-full object-cover rounded-md my-4;
    }

    .content {
        @apply w-full m-0;
    }

    .content > p {
        @apply text-justify;
    }
</style>

<CosmeticNotch orientation="bottom-right" />
<Marker name="news" />
<div class="News">
    <h1>News</h1>
    <div class="items" id="items">
        {#if post_array.length == 0}
            <h3 bind:this="{ph_text}">Getting posts...</h3>
        {:else}
            {#each post_array as post}
                <div class="mobile-first">
                    <Card size="sm">
                        <h2 slot="title">{post.title}</h2>
                        <div class="content" slot="content">
                            <Timestamp time={new Date(post.created_at)} />
                            <img class="thumb" src="https://chailagpncxzrnujqznl.supabase.in/storage/v1/object/public/post-images/{post.image}" alt="{post.alt}">
                            <p>{post.content}</p>
                            {#if post.link}
                                <Button href={post.link}>
                                    {post.action ?? "Open"}
                                </Button>
                            {/if}
                        </div>
                    </Card>
                </div>
            {/each}
        {/if}
        
    </div>
</div>