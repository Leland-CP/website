<script>
    import "../app.css"

    export let title, text, ref, next;
</script>
<div class="flex flex-col items-center justify-center h-screen bg-gray-200">
    <h1 class="text-5xl font-bold mb-4" id="{ref}">{title}</h1>
    <p class="text-xl text-center mb-8 px-4">
        {text}
    </p>
    <div class="flex justify-center">
        <a href="#{next}" class="text-6xl">&#x2193;</a>
    </div>
</div>