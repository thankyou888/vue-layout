<template>
    <div class="flex flex-col lg:flex-row min-h-screen gapx-4">
        <div class="lg:flex-1 bg-gray-100 p-4">
            <!--recent post list y -->
            <h1 class="text-2xl font-bold mb-4">บทความล่าสด</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <article class="bg-white p-4 rounded shadow-md" itemscope itemtype="https://schema.org/Article">
                    <div class="entry-image relative">
                        <img class="object-cover rounded-lg" src="https://placehold.co/1200x630" alt="Archive Image" />
                        <div class="badge rounded-full badge-accent top-[-0.7rem] left-[-0.7rem] absolute py-4 text-xs">
                            <a href="#">โปรโมชั่นล่าสุด
                            </a>
                        </div>
                    </div>
                    <h2 class="text-xl font-bold mb-2">สมัคร Fun888asia ฟรี 300 บาท วิธีง่าย ๆ เพื่อรับโบนัสต้อนรับ 1
                    </h2>
                    <div class="entry-meta">
                        <span class="text-white text-xs bg-sky-700 update-time px-2 py-2">อัพเดท ล่าสุด :
                            2023-10-01</span>
                    </div>
                </article>
                <article class="bg-white p-4 rounded shadow-md" itemscope itemtype="https://schema.org/Article">
                    <div class="entry-image relative">
                        <img class="object-cover rounded-lg" src="https://placehold.co/1200x630" alt="Archive Image" />
                        <div class="badge rounded-full badge-accent top-[-0.7rem] left-[-0.7rem] absolute py-4 text-xs">
                            <a href="#">โปรโมชั่นล่าสุด
                            </a>
                        </div>
                    </div>
                    <h2 class="text-xl font-bold mb-2">Post Title 2</h2>
                    <div class="entry-meta">
                        <span class="text-white text-xs bg-sky-700 update-time px-2 py-2">อัพเดท ล่าสุด :
                            2023-10-01</span>
                    </div>
                </article>
            </div>
            <!-- recent post by catagory -->
            <Section class="post-catagory mt-4">
                <h2 class="text-2xl font-bold mb-4 flex items-center gap-4">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 12H20M12 4L20 12L12 20" fill="black" />
                    </svg>
                    <a href="#">โปรโมชั่น</a>
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <article class="bg-white p-4 rounded shadow-md" itemscope itemtype="https://schema.org/Article">
                        <div class="entry-image  relative">
                            <img class="object-cover rounded-lg" src="https://placehold.co/1200x630"
                                alt="Archive Image" />
                        </div>
                        <header>
                            <h2 class="text-xl font-bold mb-2">สมัคร Fun888asia ฟรี 300 บาท วิธีง่าย ๆ
                                เพื่อรับโบนัสต้อนรับ</h2>
                            <div class="entry-meta">
                                <span class="text-white text-xs bg-sky-700 update-time px-2 py-2">อัพเดท ล่าสุด :
                                    2023-10-01</span>
                            </div>
                        </header>
                    </article>
                </div>
            </Section>


        </div>

        <Sidebar />

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

<style scoped></style>