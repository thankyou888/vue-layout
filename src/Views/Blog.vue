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

                    <table class="w-full border-collapse md:border-separate text-center justify-between border border-gray-300 rounded-lg mb-4">
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
            <div class="entry-related-posts mt-8 ">
                <h2 class="section-title">เนื้อหาที่เกี่ยวข้อง</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <img class="w-full h-40 object-cover rounded-t-lg mb-4" src="https://placehold.co/300x200" alt="Related Post 1" />
                        <h3 class="entry-titleentry-titleentry-titleentry-titleentry-titleentry-title">Related Post 1</h3>
                        <div class="entry-meta mb-4">
                            <span class="text-white text-xs bg-sky-700 update-time px-2 py-2.5">อัพเดท ล่าสุด : 2023-10-01</span>
                        </div>
                        <div class="entry-excerpt">
                            <p class="text-gray-600 text-sm mb-4">A brief description of the related post goes here.</p>
                        </div>
                    </div>
                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <img class="w-full h-40 object-cover rounded-t-lg mb-4" src="https://placehold.co/300x200" alt="Related Post 2" />
                        <h3 class="entry-title">Related Post 2</h3>
                        <div class="entry-meta mb-4">
                            <span class="text-white text-xs bg-sky-700 update-time px-2 py-2.5">อัพเดท ล่าสุด : 2023-10-01</span>
                        </div> 
                        <div class="entry-excerpt">
                            <p class="text-gray-600 text-sm mb-4">A brief description of the related post goes here.</p>
                        </div>
                    </div>
                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <img class="w-full h-40 object-cover rounded-t-lg mb-4" src="https://placehold.co/300x200" alt="Related Post 3" />
                        <h3 class="entry-title">Related Post 3</h3>
                        <div class="entry-meta mb-4">
                            <span class="text-white text-xs bg-sky-700 update-time px-2 py-2.5">อัพเดท ล่าสุด : 2023-10-01</span>
                        </div>
                        <div class="entry-excerpt">
                            <p class="text-gray-600 text-sm mb-4">A brief description of the related post goes here.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="w-full lg:w-1/4 bg-white p-4 shadow-md rounded-lg">
                <h2 class="text-xl font-semibold mb-4">Sidebar</h2>
                <img class="w-full h-auto object-cover mb-4" src="https://placehold.co/350x300" alt="Sidebar Image" />
                <ul class="space-y-2">
                    <li><a href="#" class="text-blue-600 hover:underline">Link 1</a></li>
                    <li><a href="#" class="text-blue-600 hover:underline">Link 2</a></li>
                    <li><a href="#" class="text-blue-600 hover:underline">Link 3</a></li>
                    <li><a href="#" class="text-blue-600 hover:underline">Link 4</a></li>
                </ul>
        </div>
      
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Blog",
});
</script>

<style scoped>
ul {

    display: block;
    list-style-type: none;
    padding: 0;
}

ul li {
    text-align: center;
    background: var(--color-blue-600);
    padding: .5rem .7rem;
}

ul li a {
    text-align: center;
    background: var(--color-blue-600);
    padding: .5rem .7rem;
    color: white;
}
</style>