<script>
    import {onMount} from "svelte";

    let editor;
    let cursor;
    let writer;
    let snippets = [
        `function hello() {\n⠀⠀console.log("Hello World!")\n}\n\nfor (let i = 0; i < 5; i++) {\n⠀⠀hello()\n}`,
        `define hello():\n⠀⠀print("Hello World!")\n\nfor _ in range(5):\n⠀⠀hello()`,
        `def hello()\n⠀⠀puts "Hello World!"\nend\n\n5.times do\n⠀⠀hello()\nend`,
        `function Write-Greeting {\n⠀⠀Write-Output "Hello World!"\n}\n\nFor ($i = 0; $i -lt 5; $i++) {\n⠀⠀Write-Greeting\n}`
    ];

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
                editor.innerHTML = editor.innerHTML.replace("let", `<span class="text-purple-400 italic">let</span>`);
                editor.innerHTML = editor.innerHTML.replace("for", `<span class="text-purple-400 italic">for</span>`);
                editor.innerHTML = editor.innerHTML.replaceAll("i ", `<span class="text-red-400">i </span>`);
                editor.innerHTML = editor.innerHTML.replaceAll("i++", `<span class="text-red-400">i</span>++`);
                editor.innerHTML = editor.innerHTML.replaceAll("hello", `<span class="text-green-400">hello</span>`);
                editor.innerHTML = editor.innerHTML.replace("console", `<span class="text-yellow-400">console</span>`);
                editor.innerHTML = editor.innerHTML.replace("log", `<span class="text-green-400">log</span>`);
                editor.innerHTML = editor.innerHTML.replace(`"Hello World!"`, `<span class="text-red-400">"Hello World!"</span>`);
                editor.innerHTML = editor.innerHTML.replace(" 0", `<span class="text-yellow-400"> 0</span>`);
                editor.innerHTML = editor.innerHTML.replace(" 5", `<span class="text-yellow-400"> 5</span>`);
                break;
            case 1:
                editor.innerHTML = editor.innerHTML.replace("define", `<span class="text-purple-400 italic">define</span>`);
                editor.innerHTML = editor.innerHTML.replace("for", `<span class="text-purple-400 italic">for</span>`);
                editor.innerHTML = editor.innerHTML.replace(" in", `<span class="text-purple-400 italic"> in</span>`);
                editor.innerHTML = editor.innerHTML.replaceAll("hello", `<span class="text-green-400">hello</span>`);
                editor.innerHTML = editor.innerHTML.replace("print", `<span class="text-green-400">print</span>`);
                editor.innerHTML = editor.innerHTML.replace("range", `<span class="text-green-400">range</span>`);
                editor.innerHTML = editor.innerHTML.replace("5", `<span class="text-yellow-400">5</span>`);
                editor.innerHTML = editor.innerHTML.replace(`"Hello World!"`, `<span class="text-red-400">"Hello World!"</span>`);
                break;
            case 2:
                editor.innerHTML = editor.innerHTML.replace("def", `<span class="text-purple-400 italic">def</span>`);
                editor.innerHTML = editor.innerHTML.replaceAll("end", `<span class="text-purple-400 italic">end</span>`);
                editor.innerHTML = editor.innerHTML.replace("do", `<span class="text-purple-400 italic">do</span>`);
                editor.innerHTML = editor.innerHTML.replaceAll("hello", `<span class="text-green-400">hello</span>`);
                editor.innerHTML = editor.innerHTML.replace("puts", `<span class="text-green-400">puts</span>`);
                editor.innerHTML = editor.innerHTML.replace(`"Hello World!"`, `<span class="text-red-400">"Hello World!"</span>`);
                editor.innerHTML = editor.innerHTML.replace("5", `<span class="text-yellow-400">5</span>`);
                editor.innerHTML = editor.innerHTML.replace("times", `<span class="text-green-400">times</span>`);
                break;
            case 3:
                editor.innerHTML = editor.innerHTML.replace("function", `<span class="text-purple-400 italic">function</span>`);
                editor.innerHTML = editor.innerHTML.replace("For", `<span class="text-purple-400 italic">For</span>`);
                editor.innerHTML = editor.innerHTML.replaceAll("Write-Greeting", `<span class="text-green-400">Write-Greeting</span>`);
                editor.innerHTML = editor.innerHTML.replace("Write-Output", `<span class="text-green-400">Write-Output</span>`);
                editor.innerHTML = editor.innerHTML.replaceAll("$i ", `<span class="text-red-400">$i </span>`);
                editor.innerHTML = editor.innerHTML.replace("$i++", `<span class="text-red-400">$i</span>++`);
                editor.innerHTML = editor.innerHTML.replace("-lt", `<span class="text-gray-400">-lt</span>`);
                editor.innerHTML = editor.innerHTML.replace(" 0", `<span class="text-yellow-400"> 0</span>`);
                editor.innerHTML = editor.innerHTML.replace(" 5", `<span class="text-yellow-400"> 5</span>`);
                editor.innerHTML = editor.innerHTML.replace(`"Hello World!"`, `<span class="text-red-400">"Hello World!"</span>`);
                break;
            default:
                break;
        }
    }

    let i = 0;
    let snippet_i = -1;
    function typeWriter() {
        if (i < snippets[snippet_i].length) {
            editor.innerText += snippets[snippet_i].charAt(i);
            i++;
            colorize();
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
        scrollbar-width: none;
        @apply bg-gray-900 text-white shadow-inner rounded-md w-full h-32 md:h-52 overflow-hidden my-4 p-4 font-mono text-sm md:text-base flex justify-end flex-col md:block;
    }
</style>

<div class="Typewriter" bind:this={writer}>
    <div class="block">
        <span bind:this={editor}></span>
        <span style="visibility: hidden;" bind:this={cursor} id="fakecursor">█</span>
    </div>
</div>