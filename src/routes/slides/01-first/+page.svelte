<script>
    import { RevealJsContext, Slide } from 'svelte-reveal.js';

    import 'reveal.js/dist/reset.css';
    import 'reveal.js/dist/reveal.css';
    import 'reveal.js/dist/theme/white.css';
</script>

<!-- a container with fixed size is required -->
<div style:width="100%" style:height="100vh">
    <RevealJsContext>
        <Slide>
            <h1>Hello world!</h1>
        </Slide>
    </RevealJsContext>
</div>