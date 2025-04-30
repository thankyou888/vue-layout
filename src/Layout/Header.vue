<template>
    <header class="bg-sky-500 text-white py-4 shadow-md">
        <div class="container mx-auto flex justify-between items-center px-4">
            <div class="flex items-center space-x-4">
                <img src="https://placehold.co/100x100" alt="Logo" class="h-10 w-10" />
                <h1 class="text-2xl font-bold">My Website</h1>
            </div>
            <div class="flex items-center">
                <nav class="hidden lg:flex items-center space-x-4">
                    <ul class="flex space-x-4">
                        <li><router-link to="/">Home</router-link></li>
                        <li><router-link to="/page">Page</router-link></li>
                        <li><router-link to="/single-post">Single Page</router-link></li>
                        <li><router-link to="/archive">Archive Page</router-link></li>
                        <li><router-link to="/blog">Blog Page</router-link></li>
                    </ul>
                </nav>
                <button class="lg:hidden flex px-3 py-2 border rounded text-white border-white" @click="toggleMenu">
                    <svg class="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
                <button class="ml-4 bg-red-500 text-white px-4 py-2 rounded">Register</button>
                <div v-if="isMenuOpen"
                    class="lg:hidden absolute top-16 left-0 w-full bg-sky-700 text-white shadow-lg z-10">
                    <nav class="flex flex-col items-center space-y-4 p-4">
                        <ul class="flex flex-col space-y-4">
                            <li><router-link to="/">Home</router-link></li>
                            <li><router-link to="/page">Page</router-link></li>
                            <li><router-link to="/single-post">Single Page</router-link></li>
                            <li><router-link to="/archive">Archive Page</router-link></li>
                            <li><router-link to="/blog">Blog Page</router-link></li>
                        </ul>
                        <button class="mt-4 bg-red-500 text-white px-4 py-2 rounded">Register</button>
                    </nav>
                </div>
            </div>

        </div>
    </header>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import { ref } from "vue";

defineComponent({
    name: "Header",
});
const isMenuOpen = ref(false);  
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

</script>

<style scoped>
/* Add any additional styles here if needed */
</style>