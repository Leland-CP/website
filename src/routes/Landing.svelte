<script lang="ts">
    import "../app.css";
    import { fade } from "svelte/transition";
    import { createEventDispatcher } from "svelte";
    import Item from "./Item.svelte";

    export let title: any, text: any, ref: any, next: any;
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
    <div class="grid justify-center items-center p-10 bg-gray-200">
        <Item ht="129" wi="207" src="https://www.recursivedragon.com/usacologo.png" title="Programming Competitions" text="
Programming competitions such as USACO are a great way to have fun competing with your peers while learning important algorithmic concepts that underpin the field of computer science!"></Item>
        <Item ht="160" wi="240" src="http://codeprogramming.org/wp-content/uploads/2022/01/C-Logo.wine_.png" title="Learn to Code" text="Learn how to communicate with computers, devices we use every single day! Join to learn how to code efficiently and accurately."></Item>
        <Item ht="128" wi="128" src="https://avatars3.githubusercontent.com/u/5315773?s=280&v=4" title="CTF Competitions" text="Capture The Flag (CTF) competitions allow contestants to learn how computer technologies work and prepare them for ethical hacking in the real world."></Item>
    </div>
<!--    <div class="flex justify-center absolute bottom-10">-->
<!--        <a href="#{next}" class="text-6xl">&#x2193;</a>-->
<!--    </div>-->
</div>