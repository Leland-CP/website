<script>
    import "../../app.css"

    const targetX = Math.floor(Math.random() * 2000) + 1;
    const targetY = Math.floor(Math.random() * 1000) + 1;

    let m = { x: 0, y: 0 };
    let state = true;

    function handleMove(event) {
        m.x = event.clientX;
        m.y = event.clientY;

        if (m.x === targetX && m.y === targetY) {
            state = false;
        } else {
            state = true;
        }
    }
</script>

{#if state}
    <div on:pointermove={handleMove} class="w-100% h-screen p-8">
        <span>Target: {targetX}, {targetY}</span>
        The pointer is at:
        <h1 class="text-3xl">x: {m.x}</h1>
        <h1 class="text-3xl">y: {m.y}</h1>
    </div>
{:else}
    <div class="w-100% h-screen p-8">
        <h1 class="text-3xl">Win!</h1>
    </div>
{/if}