<template>
    <div class="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <header class="w-full bg-blue-600 text-white py-4 shadow-md">
            <div class="container mx-auto px-4">
                <h1 class="text-2xl font-bold">Welcome to the Home Page</h1>
            </div>
        </header>
        <main class="flex-1 container mx-auto px-4 py-8">
            <section class="text-center">
                <h2 class="text-3xl font-semibold text-gray-800 mb-4">Modern Layout</h2>
                <p class="text-gray-600 mb-6">
                    This is a modern home page built with Vue, TypeScript, and Tailwind CSS.
                </p>
                <button
                    class="bg-blue-600 text-white px-6 py-2 rounded-md shadow hover:bg-blue-700 transition"
                >
                    Get Started
                </button>
            </section>
        </main>
        <footer class="w-full bg-gray-800 text-white py-4">
            <div class="container mx-auto px-4 text-center">
                <p>&copy; 2023 Your Company. All rights reserved.</p>
            </div>
        </footer>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Home",
});
</script>

<style scoped>
</style>