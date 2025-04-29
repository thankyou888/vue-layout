<template>
    <header class="w-ful bg-sky-500 text-white py-4 shadow-md">
        <div class="container mx-auto flex justify-between items-center px-4">
            <h1 class="text-xl font-bold">My App</h1>
            <nav>
                <ul class="flex space-x-4">
                   
                    <router-link to="/">Home</router-link>
                    <router-link to="/page">Page</router-link>
                    <router-link to="/single-page">Single Page</router-link>
                    <router-link to="/archive">Archive Page</router-link>
                    <router-link to="/blog">Blog Page</router-link>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Header',
});
</script>

<style scoped>
/* Add any additional styles here if needed */
</style>