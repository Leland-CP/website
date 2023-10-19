<script lang="ts">
    import { RevealJsContext, Slide } from 'svelte-reveal.js';

    import 'reveal.js/dist/reset.css';
    import 'reveal.js/dist/reveal.css';
    import 'reveal.js/dist/theme/black.css';
    import 'reveal.js/plugin/highlight/monokai.css';
    import {onMount} from "svelte";


    let plugins: Reveal.PluginFunction[];

    onMount(async () => {
        plugins = [
            await import('reveal.js/plugin/highlight/highlight').then(res => res.default),
        ]
    })
</script>

{#if plugins}
    <RevealJsContext options={{
			controls: true,
			progress: true,
			center: true,
			hash: true,
			plugins
		}}>
        <Slide>
            <h1>01 - First Meeting</h1>
            <h2>10/20/2023</h2>
            Fill out the sign up form if you haven't yet!<br>
            <a href="lelandcp.org/join">lelandcp.org/join</a><br>
            Join the discord server!<br>
            <a href="lelandcp.org/discord">lelandcp.org/discord</a>
        </Slide>
        <Slide>
            <h2>Meeting</h2>
            <ul>
                <li class="fragment">Club Constitution</li>
                <li class="fragment">Semester Plan</li>
                <li class="fragment">Secretary Elections</li>
            </ul>
        </Slide>
        <Slide>
            <h1>Club Constitution</h1>
        </Slide>
        <Slide>
            <h2>Semester Plan</h2>
            <ul>
                <li class="fragment">Intro to Programming/Fundamentals</li>
                <li class="fragment">Complete search/brute force</li>
                <li class="fragment">Recursive search</li>
                <li class="fragment">Simulation problems</li>
                <li class="fragment">Sorting problems</li>
                <li class="fragment">Intro to graphs</li>
            </ul>
        </Slide>
        <Slide>
            <h1>Secretary Elections</h1>
            <p>Please form a line in front of the ballot area. You may vote for as many or as little
            candidates as you wish. Please do NOT discuss your vote with any other person until
            voting is completed.</p>
        </Slide>
        <Slide>
            <h2>What's next</h2>
            <ul>
                <li class="fragment">Create a USACO account</li>
                <li class="fragment">Create a Codeforces account</li>
                <li class="fragment">Setup an IDE of your choice (rec. VSCodium, Jetbrains, nvim)</li>
            </ul>
            <p class="fragment">Additional details will be sent out post-meeting.</p>
        </Slide>
    </RevealJsContext>
{/if}