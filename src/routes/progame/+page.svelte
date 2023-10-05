<script>
    import "../../app.css"
    let m = { x: 0, y: 0 };
    let state = true;

    function handleMove(event) {
        m.x = event.clientX;
        m.y = event.clientY;

        if (m.x === 1000 && m.y === 500) {
            state = false;
        } else {
            state = true;
        }
    }
</script>

{#if state}
    <div on:pointermove={handleMove} class="w-100% h-screen p-8">
        The pointer is at:
        <h1 class="text-3xl">x: {m.x}</h1>
        <h1 class="text-3xl">y: {m.y}</h1>
    </div>
{:else}
    <div class="w-100% h-screen p-8">
        <h1 class="text-3xl">Win!</h1>
    </div>
{/if}