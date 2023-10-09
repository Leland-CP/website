<script lang="ts">
    export let title: any, text: any, src: any, ht: any, wi: any;
</script>

<div class="text-center m-4">
    <img {src} alt="Placeholder" class="mx-auto" style="height: {ht}px; width: {wi}px"/>
    <h2 class="text-xl font-bold mt-4">{title}</h2>
    <p class="text-gray-600">{text}</p>
</div>