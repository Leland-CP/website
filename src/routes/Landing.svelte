<script>
    import "../app.css";
    import { fade } from "svelte/transition";
    import { createEventDispatcher } from "svelte";

    export let title, text, ref, next;
    const dispatch = createEventDispatcher();
    let start = true;

    function sendClick() {
        dispatch('more');
    }
</script>

<div class="flex flex-col items-center justify-center h-screen bg-gray-200" transition:fade>
    <div class="flex justify-center absolute top-10">
        <button class="text-6xl" on:click={sendClick}>&#x2191;</button>
    </div>
    <h1 class="text-5xl font-bold mb-4" id="{ref}">{title}</h1>
    <p class="text-xl text-center mb-8 px-4">
        {text}
    </p>
    <div class="flex justify-center absolute bottom-10">
        <a href="#{next}" class="text-6xl">&#x2193;</a>
    </div>
</div>