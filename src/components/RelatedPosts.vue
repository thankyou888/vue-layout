<template>
 <div class="entry-related-posts mt-8 ">
                <h2 class="section-title">เนื้อหาที่เกี่ยวข้อง</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <div class="entry-image">
                            <img class="object-cover rounded-lg" src="https://placehold.co/1200x630" alt="Archive Image" />
                        </div>
                        <h3 class="entry-titleentry-titleentry-titleentry-titleentry-titleentry-title">Related Post 1</h3>
                        <div class="entry-meta mb-4">
                            <span class="text-white text-xs bg-sky-700 update-time px-2 py-2">อัพเดท ล่าสุด : 2023-10-01</span>
                        </div>
                        <div class="entry-excerpt">
                            <p class="text-gray-600 text-sm mb-4">A brief description of the related post goes here.</p>
                        </div>
                    </div>
                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <div class="entry-image">
                            <img class="object-cover rounded-lg" src="https://placehold.co/1200x630" alt="Archive Image" />
                        </div>
                        <h3 class="entry-title">Related Post 2</h3>
                        <div class="entry-meta mb-4">
                            <span class="text-white text-xs bg-sky-700 update-time px-2 py-2">อัพเดท ล่าสุด : 2023-10-01</span>
                        </div> 
                        <div class="entry-excerpt">
                            <p class="text-gray-600 text-sm mb-4">A brief description of the related post goes here.</p>
                        </div>
                    </div>
                    <div class="bg-white p-4 rounded-lg shadow-md">
                        <div class="entry-image">
                            <img class="object-cover rounded-lg" src="https://placehold.co/1200x630" alt="Archive Image" />
                        </div>
                        <h3 class="entry-title">Related Post 3</h3>
                        <div class="entry-meta mb-4">
                            <span class="text-white text-xs bg-sky-700 update-time px-2 py-2">อัพเดท ล่าสุด : 2023-10-01</span>
                        </div>
                        <div class="entry-excerpt">
                            <p class="text-gray-600 text-sm mb-4">A brief description of the related post goes here.</p>
                        </div>
                    </div>
                </div>
            </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "RelatedPosts",
});
</script>