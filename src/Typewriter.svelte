<script>
    import {onMount} from "svelte";

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    let editor;
    let cursor;
    // let snippets = [
    //     [
    //         `<span class="text-purple-400 italic">function </span>`,
    //         `<span class="text-green-400">hello</span>`
    //     ]
    // ]
    let snippets = [
        `function hello() {\n⠀⠀console.log("Hello World!")\n}`,
        `define hello():\n⠀⠀print("Hello World!")`,
        `def hello()\n⠀⠀puts "Hello World!"\nend`,
        `function Write-Greeting {\n⠀⠀Write-Output "Hello World!"\n}`,
        `fn hello() {\n⠀⠀println!("Hello World!");\n}`
    ]

    function blink() {
        if (cursor.style.visibility == "visible") {
            cursor.style.visibility = "hidden";
        } else {
            cursor.style.visibility = "visible";
        }
    }

    function colorize() {
        switch (snippet_i) {
            case 0:
                editor.innerHTML = editor.innerHTML.replace("function", `<span class="text-purple-400 italic">function</span>`);
                editor.innerHTML = editor.innerHTML.replace("hello", `<span class="text-green-400">hello</span>`);
                editor.innerHTML = editor.innerHTML.replace("console", `<span class="text-yellow-400">console</span>`);
                editor.innerHTML = editor.innerHTML.replace("log", `<span class="text-green-400">log</span>`);
                editor.innerHTML = editor.innerHTML.replace(`"Hello World!"`, `<span class="text-red-400">"Hello World!"</span>`);
                break;
            case 1:
                editor.innerHTML = editor.innerHTML.replace("define", `<span class="text-purple-400 italic">define</span>`);
                editor.innerHTML = editor.innerHTML.replace("hello", `<span class="text-green-400">hello</span>`);
                editor.innerHTML = editor.innerHTML.replace("print", `<span class="text-green-400">print</span>`);
                editor.innerHTML = editor.innerHTML.replace(`"Hello World!"`, `<span class="text-red-400">"Hello World!"</span>`);
                break;
            case 2:
                editor.innerHTML = editor.innerHTML.replace("def", `<span class="text-purple-400 italic">def</span>`);
                editor.innerHTML = editor.innerHTML.replace("end", `<span class="text-purple-400 italic">end</span>`);
                editor.innerHTML = editor.innerHTML.replace("hello", `<span class="text-green-400">hello</span>`);
                editor.innerHTML = editor.innerHTML.replace("puts", `<span class="text-green-400">puts</span>`);
                editor.innerHTML = editor.innerHTML.replace(`"Hello World!"`, `<span class="text-red-400">"Hello World!"</span>`);
                break;
            case 3:
                editor.innerHTML = editor.innerHTML.replace("function", `<span class="text-purple-400 italic">function</span>`);
                editor.innerHTML = editor.innerHTML.replace("Write-Greeting", `<span class="text-green-400">Write-Greeting</span>`);
                editor.innerHTML = editor.innerHTML.replace("Write-Output", `<span class="text-green-400">Write-Output</span>`);
                editor.innerHTML = editor.innerHTML.replace(`"Hello World!"`, `<span class="text-red-400">"Hello World!"</span>`);
                break;
            case 4:
                editor.innerHTML = editor.innerHTML.replace("fn", `<span class="text-purple-400 italic">fn</span>`);
                editor.innerHTML = editor.innerHTML.replace("hello", `<span class="text-green-400">hello</span>`);
                editor.innerHTML = editor.innerHTML.replace("println!", `<span class="text-green-400">println!</span>`);
                editor.innerHTML = editor.innerHTML.replace(`"Hello World!"`, `<span class="text-red-400">"Hello World!"</span>`);

            default:
                break;
        }
    }

    let i = 0;
    let snippet_i = 0;
    function typeWriter() {
        if (i < snippets[snippet_i].length) {
            editor.innerText += snippets[snippet_i].charAt(i);
            i++;
            colorize()
            setTimeout(typeWriter, 3000 / snippets[snippet_i].length);
        }
    }

    function reset() {
        i = 0;
        snippet_i += 1;
        if (snippet_i > snippets.length - 1) {
            snippet_i = 0;
        }
        editor.innerHTML = "";
        typeWriter()
        setTimeout(reset, 5000);
    }

    onMount(() => {
        setInterval(blink, 500);
        reset()
    })
</script>

<style>
    .Typewriter {
        @apply bg-gray-900 shadow-inner rounded-md w-full h-48 my-4 p-4 font-mono;
    }
</style>

<div class="Typewriter">
    <span bind:this={editor}></span>
    <span style="visibility: hidden;" bind:this={cursor} id="fakecursor">█</span>
    
</div>