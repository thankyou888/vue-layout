<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
        <h1 class="text-6xl font-bold mb-4">404</h1>
        <p class="text-xl mb-6">Oops! The page you're looking for doesn't exist.</p>
        <router-link
            to="/"
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
            Go Back Home
        </router-link>
    </div>
</template>
<script lang="ts" setup>
import { defineComponent } from "vue";      
defineComponent({
    name: "NotFound",
});
</script>