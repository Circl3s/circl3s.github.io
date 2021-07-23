<script>
    let scroll = 0;
    console.log(scroll);

    function handleScroll(e) {
        scroll = window.scrollY;
        console.log(scroll);
    } 
</script>

<style>
    .Navbar {
        @apply text-white h-20 w-full fixed top-0 z-50 flex items-center justify-between p-4 transition duration-200;
    }

    .bg {
        @apply bg-gray-800 shadow-lg;
    }

    h2 {
        @apply text-2xl;
    }

    a {
        @apply text-xl m-4;
    }
</style>

<svelte:window bind:scrollY={scroll} />
<div class="Navbar {scroll == 0 ? "" : "bg"}">
    <h2>Circl3s</h2>
    <div class="links">
        <a href="#about">About</a>
        <a href="#hobbies">Hobbies</a>
        <a href="#toolbox">Toolbox</a>
        <a href="">Contact</a>
    </div>
</div>