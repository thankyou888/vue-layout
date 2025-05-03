<template>
    <section class="flex flex-col md:flex-row gap-4 p-4 rounded-lg shadow-md">
        <div class="lg:w-3/4 w-full items-center">
            <h1 class="text-3xl font-bold">Welcome to the Blog</h1>
            <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div class="entry-meta">
                <span class="text-white text-xs bg-sky-700 update-time px-2 py-2">อัพเดท ล่าสุด : 2023-10-01</span>
            </div>
            <div class="flex">
                <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Read More</button>
                <button class="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition ml-2">Contact
                    Us</button>
            </div>
        </div>
        <div class="lg:w-1/4 w-full items-center">
            <ul class="space-y-2 menu">
                <li><a href="#" class=" hover:underline">Link 1</a></li>
                <li><a href="#" class=" hover:underline">Link 2</a></li>
                <li><a href="#" class=" hover:underline">Link 3</a></li>
                <li><a href="#" class=" hover:underline">Link 4</a></li>
                <li><a href="#" class=" hover:underline">Link 5</a></li>
            </ul>
        </div>
    </section>
    <section class="flex flex-col gap-4 p-4 rounded-lg shadow-md">
        <div class="w-full">
            <h1 class="text-3xl font-bold text-center">คู่มือการใช้งาน Fun88</h1>
        </div>
        <div class="flex flex-col lg:flex-row gap-4">
            <div class=" bg-sky-300 p-4 rounded-lg shadow-md">
                <img class="w-full h-auto object-cover" src="https://placehold.co/1200x630" alt="Blog Image" />
                <div class="entry-meta">
                    <span class="text-white text-xs bg-sky-700 update-time px-2 py-2">อัพเดท ล่าสุด : 2023-10-01</span>
                </div>
            </div>
            <div class=" bg-sky-300 p-4 rounded-lg shadow-md">
                <img class="w-full h-auto object-cover" src="https://placehold.co/1200x630" alt="Blog Image" />
                <div class="entry-meta">
                    <span class="text-white text-xs bg-sky-700 update-time px-2 py-2">อัพเดท ล่าสุด : 2023-10-01</span>
                </div>
            </div>
            <div class=" bg-sky-300 p-4 rounded-lg shadow-md">
                <img class="w-full h-auto object-cover" src="https://placehold.co/1200x630" alt="Blog Image" />
                <div class="entry-meta">
                    <span class="text-white text-xs bg-sky-700 update-time px-2 py-2">อัพเดท ล่าสุด : 2023-10-01</span>
                </div>
            </div>
        </div>
    </section>
    <section class="flex flex-col lg:flex-row gap-4 p-4 rounded-lg shadow-md">
        <div class="w-full lg:w-1/2 items-center">
            <h2 class="text-2xl font-bold">Latest Articles</h2>
            <p class="text-gray-600"> ทางเข้าล่าสุด <a class="bg-sky-700" href="/"> wwwww Click</a> </p>
            <p class="text-gray-600"> ทางเข้าล่าสุด <a class="bg-sky-700" href="/"> wwwww Click</a> </p>
            <p class="text-gray-600"> ทางเข้าล่าสุด <a class="bg-sky-700" href="/"> wwwww Click</a> </p>
        </div>
        <div class="w-full lg:w-1/2 items-center">
            <h2 class="text-2xl font-bold">About us</h2>
            <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.</p>
            <p class="text-gray-600">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.</p>
            <p class="text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                eu fugiat nulla pariatur.</p>
        </div>
    </section>
    <section class="call-action">
        <div class="bg-blue-500 text-white p-6 rounded-lg shadow-md text-center">
            <h2 class="text-2xl font-bold">Join Us Today!</h2>
            <p>Sign up now and get access to exclusive content and updates.</p>
            <button class="bg-white text-blue-500 font-bold px-6 py-2 rounded hover:bg-gray-100 transition">
                Get Started
            </button>
        </div>
    </section>
    <section class="flex flex-col gap-4 p-4 rounded-lg shadow-md">
        <div class="flex gap-4 items-center">
            <div class="w-1/3 "><h2 class="text-2xl font-bold text-justify">Latest Blog Posts</h2></div>
            <div class="sub-description flex-1 text-left">
                <p class="text-gray-600">ทางเข้า W88 เว็บตรง</p>
            </div>
            <div class="w-1/4 text-right">
                <a href="#" class="text-blue-500 hover:underline">See All</a>   
            </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div class="bg-sky-300 p-4 rounded-lg shadow-md">
                <img class="w-full h-auto object-cover " src="https://placehold.co/1200x630" alt="Blog Image" />
                <h3 class="text-xl font-bold mb-2">Blog Post Title</h3>
                <p class="text-gray-600 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div class="entry-meta ">
                    <span class="text-white text-xs bg-sky-700 update-time px-2 py-2">อัพเดท ล่าสุด : 2023-10-01</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Home",
});
</script>

<style scoped></style>