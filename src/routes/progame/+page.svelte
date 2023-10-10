<script>
    import "../../app.css"
    import {onMount} from "svelte";

    const targetX = Math.floor(Math.random() * 2000) + 1;
    const targetY = Math.floor(Math.random() * 1000) + 1;

    let m = { x: 0, y: 0 };
    let state = true;
    let start = Date.now();
    let timing = 0;

    function handleMove(event) {
        m.x = Math.round(event.clientX);
        m.y = Math.round(event.clientY);

        if (m.x === targetX && m.y === targetY) {
            state = false;
        } else {
            state = true;
        }
    }

    function stopwatch() {
        if (!state) return;
        requestAnimationFrame(stopwatch);
        timing = (Date.now() - start) / 1000;
    }

    function getTime() {
        state = false;
        return timing;
    }

    onMount(stopwatch);
</script>

{#if state}
    <div on:pointermove={handleMove} class="w-100% h-screen p-8">
        <span>Target: {targetX}, {targetY}</span>
        <span>The pointer is at:</span>
        <h1 class="text-3xl">x: {m.x}</h1>
        <h1 class="text-3xl">y: {m.y}</h1>
        <h1 class="relative bottom-0 text-3xl">{timing}</h1>
    </div>
{:else}
    <div class="w-100% h-screen p-8">
        <h1 class="text-3xl">Win!</h1>
        <p>Final time: {timing}</p>
    </div>
{/if}