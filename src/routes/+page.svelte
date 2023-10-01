<script>
    import "../app.css"
    import Landing from "./Landing.svelte";
</script>

<div class="flex flex-col items-center justify-center h-screen bg-gray-200">
    <h1 class="text-5xl font-bold mb-4">Welcome to Leland's Competitive Programming Club</h1>
    <p class="text-xl text-center mb-8 px-4">
        We are a community of passionate students digging deeper into computer science and algorithms through competition.
    </p>
    <div class="flex space-x-4">
        <button id="learn" class="px-8 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700">
            Join Us
        </button>
        <button class="px-8 py-3 bg-gray-300 rounded-lg shadow-md hover:bg-gray-400" onclick="window.location.href='#below';">
            Learn More
        </button>
    </div>
</div>

<Landing title="Algorithms" text="A fundamental building block of any piece of software." ref="below" next="next"></Landing>