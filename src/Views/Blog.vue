<template>
    <div class="flex flex-col lg:flex-row min-h-screen gapx-4">  
     <div class="lg:flex-1 bg-gray-100 p-4">
            <article>
                <img class="w-full h-auto object-cover mb-4" src="https://placehold.co/1200x630" alt="Blog Image" />
                <div class="breadcrumbs">
                    <a href="#" class="text-blue-600 hover:underline">Home</a> &gt;
                    <a href="#" class="text-blue-600 hover:underline">Blog</a>
                    &gt; <span class="text-gray-500">Current Post</span>
                </div>
                <h1 class="entry-title text-2xl font-bold mb-4">Blog Page Get $21 per bet</h1>
                <div class="entry-meta flex mb-4 gap-2">
                    <span class="text-white text-xs bg-sky-700 update-time px-2 py-2.5">เผยแพร่ : 2023-10-01</span>
                    <span class="text-white text-xs bg-sky-700 update-time px-2 py-2.5">อัพเดท ล่าสุด : 2023-10-01</span>
                </div>
                <div class="entry-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.</p>
                        <figure>
                            <img class="w-full h-auto object-cover mb-2" src="https://placehold.co/1200x630" alt="Blog Image" />
                            <figcaption class="text-center text-gray-500">Image Caption</figcaption>
                        </figure>
                    
                        <h2>Tele Nakub</h2>

                    <table class="w-full border-collapse text-center justify-between border border-gray-300 mb-4">
                        <thead>
                            <tr>
                                <th class="p-2">Header 1</th>
                                <th class="p-2">Header 2</th>
                                <th class="p-2">Header 3</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="p-2">Data 1</td>
                                <td class="p-2">Data 2</td>
                                <td class="p-2">Data 3</td>
                            </tr>
                            <tr>
                                <td class="p-2">Data 4</td>
                                <td class="p-2">Data 5</td>
                                <td class="p-2">Data 6</td>
                            </tr>
                        </tbody>    
                    </table>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur.</p>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.</p>
                </div>
                <div class="entry-tags">
                    <h2 class="text-xl font-semibold mb-4">คำค้นหาที่เเเกี่ยวข้อง</h2>
                    <span class="text-gray-500">Tags: </span>
                    <a href="#" class="text-blue-600 hover:underline">Tag1</a>,
                    <a href="#" class="text-blue-600 hover:underline">Tag2</a>,
                    <a href="#" class="text-blue-600 hover:underline">Tag3</a>
                </div>
            </article>
            <div class="post-navigation flex flex-col lg:flex-row  items-center mt-8"> 
                <div class="w-full bg-gray-300 items-center p-4 text-left"><a href="#" class="text-blue-600 hover:underline ">Previous Post</a></div>
                <div class="w-full bg-gray-300 items-center p-4 text-right"><a href="#" class="text-blue-600 hover:underline ">Next Post</a></div>
            </div>
            <RelatedPosts/>
        </div>
       
        <Sidebar/>  
      
    </div>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import Sidebar from "../components/Sidebar.vue";
import RelatedPosts from "../components/RelatedPosts.vue";
defineComponent({
    name: "Blog",
});

</script>

<style scoped>




</style>