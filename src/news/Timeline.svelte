<script>
    import Button from "../shared/Button.svelte";
    import Card from "../shared/Card.svelte";
    import WebGL from "../shared/WebGL.svelte";
    import Timestamp from "../shared/Timestamp.svelte";
    import gradient from "../shaders/gradient.frag";

    let timeline;

    import { onMount } from "svelte";

    import { createClient } from "@supabase/supabase-js";

    const PER_PAGE = 9;

    let post_array = [];
    let current_page = 0;
    let status = "Getting posts...";
    let end = false;

    const supabaseUrl = 'https://chailagpncxzrnujqznl.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNzk0NDE2MywiZXhwIjoxOTUzNTIwMTYzfQ.j7HbrIrT1elnirf8zk1hT3cM0xi6JLc9A92qH4_rEJ0';
    const supabase = createClient(supabaseUrl, supabaseKey);

    async function populate(page) {
        let { data: posts, error} = await supabase.from("posts").select("*").order("created_at", {ascending: false}).range(page * PER_PAGE, ((page + 1) * PER_PAGE) - 1);

        if (error) {
            status = "Error while getting posts."
        } else if (posts.length == 0) {
            end = true;
            if (post_array.length == 0) {
                status = "No posts found."
            }
        } else {
            if (posts.length < PER_PAGE) {
                end = true;
            }
            status = "";
            post_array = post_array.concat(posts);
        }
    }

    async function nextPage() {
        current_page += 1;
        await populate(current_page);
        console.log(current_page);
    }

    onMount(async () => {
        await populate(current_page);
    });
</script>

<style>
    .Timeline {
        @apply flex flex-col flex-grow;
    }
    .bg {
        @apply w-full h-full fixed bottom-0 bg-gradient-to-tr from-purple-900 to-blue-900;
        z-index: -1;
    }

    .more {
        @apply text-3xl text-gray-500 italic m-10;
    }

    .news-grid {
        @apply grid grid-cols-1 md:grid-cols-3 justify-evenly justify-items-center items-center;
    }
</style>

<div class="Timeline" bind:this={timeline}>
    <div class="news-grid">
        {#if status != ""}
        <div class="col-span-3">
            <Card size="xl">
                <p class="content" slot="content">{status}</p>
            </Card>
        </div>
        {:else}
            {#each post_array as post}
                <div class="mobile-first">
                    <Card size="lg">
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
            {#if end}
                <p class="more">That's all...</p>
            {:else}
                <div class="col-span-3">
                    <Button callback={nextPage} color="green">Load more</Button>
                </div>
            {/if}
        {/if}
    </div>
</div>
<div class="bg">
    <WebGL shader_import={gradient} />
</div>