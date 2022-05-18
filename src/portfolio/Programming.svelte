<script>
    import Button from "../shared/Button.svelte";
    import Card from "../shared/Card.svelte";
    import Footer from "../shared/Footer.svelte";
    import Navbar from "../shared/Navbar.svelte";
    import Portfolio from "./Portfolio.svelte";
    import Section from "../shared/Section.svelte";
    import TechInfo from "../shared/TechInfo.svelte";
</script>

<style>
    .Programming {
        @apply bg-gradient-to-tr from-purple-900 to-blue-900;
    }

    .content {
        @apply flex flex-col-reverse md:flex-row justify-center items-center;
    }

    .col {
        @apply md:w-80 m-8;
    }

    .logo {
        @apply p-0 m-0 object-contain;
        image-rendering: crisp-edges;
    }

    .logotype {
        @apply w-full h-full p-0 m-0 flex flex-row justify-center font-semibold;
    }

    .techstack {
        @apply flex flex-row flex-wrap justify-center;
    }

    .status {
        @apply bg-gray-200 p-2 my-2 w-min whitespace-nowrap rounded-md shadow-inner;
    }

    .actions {
        @apply flex flex-row;
    }

    h1 {
        @apply text-2xl mt-24;
    }
</style>

<div class="Programming">
    <Navbar subtitle="Programming" always_visible />
    <Section>
        <h1>Programming</h1>
        <div class="content">
            <div class="col">
                <p>
                    I love programming. Here are some of the projects I made.<br>
                    (This section will be expanded)
                </p>
            </div>
        </div>
    </Section>
    <Portfolio>
        <Card size="2xl">
            <h2 slot="title">circl3s.github.io</h2>
            <div class="description" slot="content">
                <p class="status">
                    Access: <code class="text-green-500">Public</code><br>
                    Development: <code class="text-green-500">Active</code>
                </p>
                <p>
                    That's this site. 
                    I kinda overengineered it on purpose so there's a lot of technologies and frameworks at play here. 
                    The important part is that it's not a template, it's been built and styled from the ground up by me.
                </p>
                <div class="techstack">
                    <TechInfo bg_color="#F73C00" text_color="white">
                        <img class="logo" src="/img/svelte-logotype.png" alt="Svelte" slot="header" />
                        <p slot="content">
                            The website is made out of custom reusable and responsive components built with Svelte.
                        </p>
                    </TechInfo>
                    <TechInfo bg_color="#2E5E82" text_color="white">
                        <div class="logotype text-2xl" slot="header"><img class="logo" src="/img/snowpack.svg" alt="Snowpack Logo" />Snowpack</div>
                        <p slot="content">
                            I chose Snowpack as the build tool because of its simplicity and speed.
                        </p>
                    </TechInfo>
                    <TechInfo bg_color="#FFFFFF" text_color="black">
                        <img class="logo" src="/img/tailwindcss-logotype.svg" alt="TailwindCSS" slot="header" />
                        <p slot="content">
                            TailwindCSS is used to style the website. It allowed me to maintain creative freedom and minimal stylesheet size while keeping the styles standardized.
                        </p>
                    </TechInfo>
                    <TechInfo bg_color="#1E1E1E" text_color="white">
                        <img class="logo" src="/img/supabase-logo-wordmark--dark.svg" alt="Supabase" slot="header" />
                        <p slot="content">
                            Supabase is used to run the "News" microblog on this site. As an open source alternative to Firebase, it's a great tool for small projects.
                        </p>
                    </TechInfo>
                </div>
                <Button href="https://github.com/Circl3s/circl3s.github.io/">
                    View source code
                </Button>
            </div>
        </Card>
        <Card size="2xl">
            <h2 slot="title">Cybertracks</h2>
            <div class="description" slot="content">
                <p class="status">
                    Access: <code class="text-yellow-500">Soon</code><br>
                    Development: <code class="text-green-500">Active</code>
                </p>
                <p>
                    A tracker-style music creation tool for the web. 
                    I wanted to honor the long-forgotten great-grandfathers of Digital Audio Workstations by implementing their unique workflow on a website.
                </p>
                <div class="techstack">
                    <TechInfo bg_color="#282C34" text_color="white">
                        <img class="logo" src="/img/React.png" alt="React" slot="header" />
                        <p slot="content">
                            The one-page UI is built with custom React components.
                        </p>
                    </TechInfo>
                    <TechInfo bg_color="#FFFFFF" text_color="black">
                        <img class="logo" src="/img/tailwindcss-logotype.svg" alt="TailwindCSS" slot="header" />
                        <p slot="content">
                            TailwindCSS is used to style the website. It allowed me to maintain creative freedom and minimal stylesheet size while keeping the styles standardized.
                        </p>
                    </TechInfo>
                    <TechInfo bg_color="#000000" text_color="white">
                        <img class="logo" src="/img/Tonejs.png" alt="TailwindCSS" slot="header" />
                        <p slot="content">
                            All audio is sequenced, generated and processed by the Web Audio API through the use of Tone.js. 
                        </p>
                    </TechInfo>
                </div>
                <div class="actions">
                    <Button disabled>
                        Open app (soon)
                    </Button>
                    <Button href="https://github.com/Circl3s/cybertracks">
                        View source code
                    </Button>
                </div>
            </div>
        </Card>
        <Card size="2xl">
            <h2 slot="title">Neko Launcher</h2>
            <div class="description" slot="content">
                <p class="status">
                    Access: <code class="text-green-500">Public</code><br>
                    Development: <code class="text-green-500">Active</code>
                </p>
                <p>
                    A game launcher focused on, but not limited to anime-style visual novels. 
                    Allows players to track their play time, categorize their games collection and even socialize, while being customizable.
                </p>
                <div class="techstack">
                    <TechInfo bg_color="#042B59" text_color="white">
                        <img src="/img/Flutter.svg" alt="Flutter" class="logo" slot="header">
                        <p slot="content">
                            The desktop app is built with the Flutter framework using Material widgets.
                        </p>
                    </TechInfo>
                    <TechInfo bg_color="#1E1E1E" text_color="white">
                        <img class="logo" src="/img/supabase-logo-wordmark--dark.svg" alt="Supabase" slot="header" />
                        <p slot="content">
                            Using the launcher you can register and login, customize your profile and socialize with other users. Supabase is the all-in-one backend handling this.
                        </p>
                    </TechInfo>
                </div>
                <div class="actions">
                    <Button href="https://github.com/Neko-Services/neko_launcher_neo/releases" color="green">
                        Download
                    </Button>
                    <Button href="https://github.com/Neko-Services/neko_launcher_neo">
                        View source code
                    </Button>
                </div>
            </div>
        </Card>
        <Card size="2xl">
            <h2 slot="title">LoveShell</h2>
            <div class="description" slot="content">
                <p class="status">
                    Access: <code class="text-yellow-500">Source Only</code><br>
                    Development: <code class="text-red-500">Stopped</code>
                </p>
                <p>
                    LoveShell is a fast and customizable Linux shell I made with my friends. 
                    The main idea was to make a shell that is easy to use and configure to beginners and nice looking out of the box.
                </p>
                <div class="techstack">
                    <TechInfo bg_color="#FFFFFF" text_color="#000000">
                        <img class="logo" src="/img/crystal_logo.svg" alt="Crystal" slot="header" />
                        <p slot="content">
                            LoveShell is written in Crystal, a new blazing fast and type-safe programming language inspired by Ruby, which I really like.
                        </p>
                    </TechInfo>
                    <TechInfo bg_color="#FFFFFF" text_color="#2F3A3E">
                        <img class="logo" src="/img/BASH_logo-transparent-bg-color.svg" alt="Bash" slot="header" />
                        <p slot="content">
                            LoveShell still uses Bash under the hood as to not reinvent the wheel when it comes to scripting and environment variables.
                        </p>
                    </TechInfo>
                </div>
                <Button href="https://github.com/I-love-os/LoveShell">
                    View source code
                </Button>
        </Card>
        <Card size="2xl">
            <h2 slot="title">Circl3s' Super Breakout</h2>
            <div class="description" slot="content">
                <p class="status">
                    Access: <code class="text-green-500">Public</code><br>
                    Development: <code class="text-yellow-500">On-hold</code>
                </p>
                <p>
                    It's a simple breakout clone I made as an easter egg for <a href="/404">this website's 404 page</a>. It's not perfect, but I think that's part of being retro.
                </p>
                <div class="techstack">
                    <TechInfo bg_color="#000000" text_color="#FFF1E8">
                        <img class="logo" src="/img/PICO-8_logo.png" alt="PICO-8" slot="header" />
                        <p slot="content">
                            The game is built for and with the PICO-8 fantasy console, a retro Lua game engine, platform, and toolset.
                        </p>
                    </TechInfo>
                </div>
                <Button href="https://github.com/Circl3s/circl3s-super-breakout/">
                    View source code
                </Button>
        </Card>
        <Card size="2xl">
            <h2 slot="title">Helix</h2>
            <div class="description" slot="content">
                <p class="status">
                    Access: <code class="text-yellow-500">Source only</code><br>
                    Development: <code class="text-green-500">Active</code>
                </p>
                <p>
                    Helix is a self-hosted private video platform suited to host and watch your owned TV series. Frustrated with the setup process of other self-hosted services, I opted to make Helix entirely client-side.
                </p>
                <div class="techstack">
                    <TechInfo bg_color="#FFFFFF" text_color="#000000">
                        <div class="font-normal logotype text-lg self-center text-black" slot="header"><img class="logo" src="/img/webcomponents-logo.svg" alt="WebComponents Logo"  />WEBCOMPONENTS</div>
                        <p slot="content">
                            This site is written in vanilla Javascript using the Web Components standard to harness the power of reusable components without using heavy frameworks and toolchains.
                        </p>
                    </TechInfo>
                </div>
                <Button href="https://github.com/Circl3s/helix/">
                    View source code
                </Button>
            </div>
        </Card>
    </Portfolio>
    <Footer />
</div>