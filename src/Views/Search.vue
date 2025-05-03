<template>
    <div class="flex flex-col lg:flex-row min-h-screen gapx-4">
        <div class="lg:flex-1 bg-gray-100 p-4">
            <h1 class="entry-title">ค้นหาคำว่า "ww" </h1>
            <div class="breadcrumbs">
                <a href="#" class="text-blue-600 hover:underline">Home</a> &gt;
                <a href="#" class="text-blue-600 hover:underline">Blog</a>
                &gt; <span class="text-gray-500">Current Post</span>
            </div>
            <!-- Content Archive First Post-->
            <div class="flex flex-col bg-white p-4 rounded-lg shadow-md mb-4">
                <div class="entry-image ">
                    <img class="object-cover rounded-lg" src="https://placehold.co/1200x630" alt="Archive Image" />

                </div>
                <div>
                    <h2 class="entry-title">Blog Title Post 1</h2>
                    <div class="entry-meta">
                        <span class="text-white text-xs bg-sky-700 update-time px-2 py-2">อัพเดท ล่าสุด :
                            2023-10-01</span>
                    </div>
                    <div class="entry-excerpt">
                        <p class="text-gray-600 text-sm mb-4">A brief description of the blog post goes here.</p>
                    </div>
                </div>
            </div>
            <!-- Content Archive Second Post-->
            <div class="bg-white p-4 rounded-lg shadow-md mb-4 flex flex-col md:flex-row gap-4">
                <div class="entry-image w-full md:w-2/5">
                    <img class="object-cover rounded-lg" src="https://placehold.co/1200x630" alt="Archive Image" />

                </div>
                <div class="flex-1">
                    <h2 class="entry-title">Blog Title Post 2</h2>
                    <div class="entry-meta">
                        <span class="text-white text-xs bg-sky-700 update-time px-2 py-2">อัพเดท ล่าสุด :
                            2023-10-01</span>
                    </div>
                    <div class="entry-excerpt">
                        <p class="text-gray-600 text-sm mb-4">A brief description of the blog post goes here.</p>
                    </div>
                </div>
            </div>
             <!-- Content Archive thirht Post-->
            <div class="bg-white p-4 rounded-lg shadow-md mb-4 flex flex-col md:flex-row gap-4">
                <div class="entry-image w-full md:w-2/5">
                    <img class="object-cover rounded-lg" src="https://placehold.co/1200x630" alt="Archive Image" />

                </div>
                <div class="flex-1">
                    <h2 class="entry-title">Blog Title Post 2</h2>
                    <div class="entry-meta">
                        <span class="text-white text-xs bg-sky-700 update-time px-2 py-2">อัพเดท ล่าสุด :
                            2023-10-01</span>
                    </div>
                    <div class="entry-excerpt">
                        <p class="text-gray-600 text-sm mb-4">A brief description of the blog post goes here.</p>
                    </div>
                </div>
            </div>
        </div>
        <Sidebar />

    </div>

</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import Sidebar from "../components/Sidebar.vue";

defineComponent({
    name: "Search",
});         
</script>