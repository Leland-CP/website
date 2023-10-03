<script>
    import "../app.css"
    import Landing from "./Landing.svelte";
    import Title from "./Title.svelte";
    import { fade } from "svelte/transition";

    let start = true;
</script>

{#if start}
    <Title on:more={() => {
        start = false;
    }}></Title>
{:else}
    <Landing title="Algorithms" text="A fundamental building block of any piece of software." ref="below" next="next" on:more={() => {
        start = true;
    }}></Landing>
{/if}