<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "Sidebar",
});
</script>

<template>
        <div id="sidebar" class="w-full lg:w-1/4 bg-white p-4 shadow-md rounded-lg">
                
                <form class="flex flex-row mb-4" action="/search" method="get">
                    <input type="text" placeholder="Search..." class="w-10/12 p-2 border border-gray-300 rounded" /> 
                    <button  type="submit" class="flex-1 bg-sky-700 text-white p-2 rounded">ค้นหา</button>
                </form>
                <img class="w-full h-auto object-cover mb-4" src="https://placehold.co/350x300" alt="Sidebar Image" />
                <ul class="space-y-2 menu">
                    <li><a href="#" class=" hover:underline">Link 1</a></li>
                    <li><a href="#" class=" hover:underline">Link 2</a></li>
                    <li><a href="#" class=" hover:underline">Link 3</a></li>
                    <li><a href="#" class=" hover:underline">Link 4</a></li>
                </ul>
        </div>
</template>

<style scoped>

    ul {

        display: block;
        list-style-type: none;
        padding: 0;
    }

    ul li {
        text-align: center;
        background: var(--color-sky-700);
        padding: .5rem .7rem;
    }

    ul li a {
        text-align: center;
        padding: .5rem .7rem;
        color: white;
    }
    
</style>
