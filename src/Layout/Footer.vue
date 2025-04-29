<template>
    <footer class="bg-gray-800 text-white">
        <div class="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
                <h3 class="text-lg font-semibold mb-4">Column 1</h3>
                <ul>
                    <li><a href="#" class="hover:underline">Link 1</a></li>
                    <li><a href="#" class="hover:underline">Link 2</a></li>
                    <li><a href="#" class="hover:underline">Link 3</a></li>
                    <li><a href="#" class="hover:underline">Link 4</a></li>
                </ul>
            </div>
            <div>
                <h3 class="text-lg font-semibold mb-4">Column 2</h3>
                <ul>
                    <li><a href="#" class="hover:underline">Link 1</a></li>
                    <li><a href="#" class="hover:underline">Link 2</a></li>
                    <li><a href="#" class="hover:underline">Link 3</a></li>
                    <li><a href="#" class="hover:underline">Link 4</a></li>
                </ul>
            </div>
            <div>
                <h3 class="text-lg font-semibold mb-4">Column 3</h3>
                <ul>
                    <li><a href="#" class="hover:underline">Link 1</a></li>
                    <li><a href="#" class="hover:underline">Link 2</a></li>
                    <li><a href="#" class="hover:underline">Link 3</a></li>
                    <li><a href="#" class="hover:underline">Link 4</a></li>
                </ul>
            </div>
            <div>
                <h3 class="text-lg font-semibold mb-4">Column 4</h3>
                <ul>
                    <li><a href="#" class="hover:underline">Link 1</a></li>
                    <li><a href="#" class="hover:underline">Link 2</a></li>
                    <li><a href="#" class="hover:underline">Link 3</a></li>
                    <li><a href="#" class="hover:underline">Link 4</a></li>
                </ul>
            </div>
        </div>
        <div class="bg-gray-900 text-center py-4">
            <p class="text-sm">&copy; 2023 Your Company. All rights reserved.</p>
        </div>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Footer',
});
</script>

<style scoped>
</style>