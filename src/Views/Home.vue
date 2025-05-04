<template>
    <section class="flex flex-col md:flex-row gap-4 p-4 rounded-lg shadow-md">
        <div class="lg:w-3/4 w-full items-center">
            <h1 class="text-3xl font-bold">Welcome to the Blog</h1>
            <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
            </p>

            <div class="entry-meta">
                <span class="text-white text-xs bg-sky-700 update-time px-2 py-2">อัพเดท ล่าสุด : 2023-10-01</span>
            </div>
            <div class="inline-flex gap-2 mt-4">
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
    <section class="call-action mb-4">
        <div class="bg-blue-500 text-white p-6 rounded-lg shadow-md text-center">
            <h2 class="text-2xl font-bold">Join Us Today!</h2>
            <p>Sign up now and get access to exclusive content and updates.</p>
            <button class="bg-white text-blue-500 font-bold px-6 py-2 rounded hover:bg-gray-100 transition">
                Get Started
            </button>
        </div>
    </section>
    <section class="cta flex flex-col lg:flex-row gap-4 p-4 text-center items-center bg-sky-700 text-white">
        <div class="flex-none lg:w-1/3 ">
            <h3 class="text-2xl">สมัครใหม่รับโบนัส 100%</h3>
        </div>
        <div class="flex-1">
            <p>สมัครเล่น สล็อตออนไลน์</p>
            <p class="text-sm text-gray-300">รับโบนัสสูงสุด 6,000 บาท</p>
        </div>
        <div class="flex-none lg:w-1/3 p-4"><a class="font-bold py-4 px-6 rounded bg-red-800 text-white"
                href="/">สมัครรับโบนัส</a></div>
    </section>
    <section class="flex flex-col gap-4 p-4 rounded-lg shadow-md">
        <div class="flex flex-row gap-4 items-center mb-4">
            <div class="flex flex-none lg:w-1/3 ">
                <h2 class="text-2xl font-bold">โปรโมชั่นล่าสุด</h2>
            </div>
            <div class="sub-description flex lg:w-1/3 border-l-4 pl-2 border-amber-400 text-left">
                <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div class="flex-auto lg:w-1/3 text-right">
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
    <section class="faq-section flex flex-col lg:flex-row gap-4 p-4 rounded-lg shadow-md">
        <div class="w-full lg:w-1/2 items-center">
            <figure class="w-full h-auto">
                <img class="w-full h-auto object-cover" src="https://placehold.co/800x600" alt="Blog Image" />
            </figure>
        </div>
        <div class="w-full lg:w-1/2 items-center">
            <header class="entry-harder">
                <h2 class="text-2xl">คำถามที่พบบ่อย (FAQ)</h2>
            </header>
            <div class="schema-faq">
                <div id="faq-question-1" class="schema-faq-section">
                    <h3 class="schema-faq-question">เว็บ W88 ดีไหม โกงไหม ทำไมต้องเล่นพนันที่นี่?</h3>
                    <p class="schema-faq-answer">ถ้าจะถามว่า W88 ดีไหม
                        แน่นอนเว็บพนันออนไลน์เจ้าใหญ่เจ้าดังของเอเชียเจ้านี้มีดีไม่แพ้เว็บไหนๆแน่นอน
                        ทั้งด้านความมั่นคงทางด้านการเงิน จ่ายชัวจ่ายจริง ไม่โกงแน่นอน
                        ทั้งด้านเทคโนโลยีและด้านการบริการลูกค้าก็ดีอันดับ 1 ไม่แพ้เว็บพนันอื่นอย่างแน่นอน</p>

                </div>
                <div id="faq-question-2" class="schema-faq-section">
                    <h3 class="schema-faq-question">รหัสรับเงินฟรี W88 มีจริงไหม?</h3>
                    <p class="schema-faq-answer">ที่เว็บของเราไม่มีรหัสรับเงินฟรี หากมีพันธมิตรเว็บไหนโฆษณาว่า
                        "มีรหัสรับเงินฟรีแจกลูกค้า" ให้เข้าใจว่าเป็นการหลอกลวงไว้ก่อนนะครับ
                        นโยบายของที่นี่ตอนนี้ยังไม่มีจริงแจกเงินฟรี
                        หากมีการเปลี่ยนแปลงทางเว็บไซต์จะแจ้งให้ทราบทางหน้าประกาศอีกครั้ง ตอนนี้มีเพียงการแจก <a
                            href="/tips/refer-friend/">W88 ฟรีเครดิต</a>&nbsp;จากการแนะนำเพื่อนเท่านั้น</p>

                </div>
                <div id="faq-question-3" class="schema-faq-section">
                    <h3 class="schema-faq-question">W88 เข้าไม่ได้ ทำยังไง ทางเข้าสำรองดีที่สุด</h3>
                    <p class="schema-faq-answer">เมื่อติดปัญหาเข้าไม่ได้
                        การลองเปลี่ยนทางเข้าใหม่เป็นสิ่งแรกที่ควรจะทำ โดยทางเข้าของ W88HUB
                        เป็นตัวเลือกทางเข้าสำรองที่ดีที่สุดในขณะนี้ เพราะทีมงานของเราเป็นทีมพันธมิตรหลักที่ถูกต้อง
                        ไม่มีลิงค์แอบแฝงหรืออื่นใด่ ทั้งผู้เล่นเก่าหรือใหม่
                        สามารคใช้งานลิงค์ทางเข้าของเราได้ไม่มีปัญหา</p>

                </div>
                <div id="faq-question-4" class="schema-faq-section">
                    <h3 class="schema-faq-question">เว็บพนันออนไลน์ เว็บตรง W88 เชื่อถือได้แค่ไหน?</h3>
                    <p class="schema-faq-answer">เป็นที่รู้กันว่า เว็บพนันออนไลน์ W88 เว็บตรง
                        เปิดให้บริการโดยบริษัทเอง ไม่มีระบบเอเย่น
                        ซึ่งทางเว็บเป็นบริษัทพนันออนไลน์ถูกกฏหมายที่มีสำนักงานใหญ่อยู่ที่ประเทศฟิลิปปินส์
                        มีความมั่นคงทางด้านการเงินสูง เป็นพาร์ทเนอร์กับองค์กรระดับโลกมากมาย
                        จึงมีความน่าเชื่อถือสูงมากๆ</p>

                </div>
            </div>
        </div>
    </section>
    <section class="flex flex-col gap-4 p-4 rounded-lg shadow-md">
        <div class="flex flex-row gap-4 items-center mb-4">
            <div class="flex flex-none lg:w-1/3 ">
                <h2 class="text-2xl font-bold">เนื้อหาล่าสุด</h2>
            </div>
            <div class="sub-description flex lg:w-1/3 border-l-4 pl-2 border-amber-400 text-left">
                <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div class="flex-auto lg:w-1/3 text-right">
                <a href="#" class="text-blue-500 hover:underline">See All</a>
            </div>
        </div>
        <div class="flex flex-col lg:flex-row gap-4 mb-4">
            <div class="block lg:w-2/3 ">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <!-- Loop Post grid-->
                    <div class="bg-sky-300 p-4 rounded-lg shadow-md">
                        <img class="w-full h-auto object-cover " src="https://placehold.co/1200x630" alt="Blog Image" />
                        <h3 class="text-xl font-bold mb-2">สมาชิกใหม่ FUN88 แจกฟรีเครดิต 300 บาท รายวัน ตลอดเดือน 2025</h3>
                        <p class="text-gray-600 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div class="entry-meta ">
                            <span class="text-white text-xs bg-sky-700 update-time px-2 py-2">อัพเดท ล่าสุด :
                                2023-10-01</span>
                        </div>
                    </div>
                    <div class="bg-sky-300 p-4 rounded-lg shadow-md">
                        <img class="w-full h-auto object-cover " src="https://placehold.co/1200x630" alt="Blog Image" />
                        <h3 class="text-xl font-bold mb-2">Blog Post Title</h3>
                        <p class="text-gray-600 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div class="entry-meta ">
                            <span class="text-white text-xs bg-sky-700 update-time px-2 py-2">อัพเดท ล่าสุด :
                                2023-10-01</span>
                        </div>
                    </div>
                    <div class="bg-sky-300 p-4 rounded-lg shadow-md">
                        <img class="w-full h-auto object-cover " src="https://placehold.co/1200x630" alt="Blog Image" />
                        <h3 class="text-xl font-bold mb-2">Blog Post Title</h3>
                        <p class="text-gray-600 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <div class="entry-meta ">
                            <span class="text-white text-xs bg-sky-700 update-time px-2 py-2">อัพเดท ล่าสุด :
                                2023-10-01</span>
                        </div>
                    </div>
                    <div class="bg-sky-300 p-4 rounded-lg shadow-md">
                        <img class="w-full h-auto object-cover " src="https://placehold.co/1200x630" alt="Blog Image" />
                        <h3 class="text-xl font-bold mb-2">Blog Post Title</h3>
                        <p class="text-gray-600 ">Lorem ipsum dolor sitLorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. amet, consectetur adipiscing elit.</p>
                        <div class="entry-meta ">
                            <span class="text-white text-xs bg-sky-700 update-time px-2 py-2">อัพเดท ล่าสุด :
                                2023-10-01</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col lg:w-1/3 gap-4">
                <!-- Loop Post List-->
                <div class="bg-sky-300 p-4 rounded-lg shadow-md flex flex-row items-center gap-4">
                    <div class="entry-image w-1/3">
                        <img class="w-full object-cover" src="https://placehold.co/1200x630" alt="Thumbnail Image" />
                    </div>
                    <div class="w-2/3">
                        <h2 class="text-xl font-bold mb-2">Thumbnail Title</h2>
                        <p class="text-gray-600">This is a short description for the thumbnail.</p>
                    </div>
                </div>
                <div class="bg-sky-300 p-4 rounded-lg shadow-md flex flex-row items-center gap-4">
                    <div class="entry-image w-1/3">
                        <img class="w-full object-cover" src="https://placehold.co/1200x630" alt="Thumbnail Image" />
                    </div>
                    <div class="w-2/3">
                        <h2 class="text-xl font-bold mb-2">Thumbnail Title</h2>
                        <p class="text-gray-600">This is a short description for the thumbnail.</p>
                    </div>
                </div>
                <div class="bg-sky-300 p-4 rounded-lg shadow-md flex flex-row items-center gap-4">
                    <div class="entry-image w-1/3">
                        <img class="w-full object-cover" src="https://placehold.co/1200x630" alt="Thumbnail Image" />
                    </div>
                    <div class="w-2/3">
                        <h2 class="text-xl font-bold mb-2">Thumbnail Title</h2>
                        <p class="text-gray-600">This is a short description for the thumbnail.</p>
                    </div>
                </div>
                <div class="bg-sky-300 p-4 rounded-lg shadow-md flex flex-row items-center gap-4">
                    <div class="entry-image w-1/3">
                        <img class="w-full object-cover" src="https://placehold.co/1200x630" alt="Thumbnail Image" />
                    </div>
                    <div class="w-2/3">
                        <h2 class="text-xl font-bold mb-2">Thumbnail Title</h2>
                        <p class="text-gray-600">This is a short description for the thumbnail.</p>
                    </div>
                </div>
                <div class="bg-sky-300 p-4 rounded-lg shadow-md flex flex-row items-center gap-4">
                    <div class="entry-image w-1/3">
                        <img class="w-full object-cover" src="https://placehold.co/1200x630" alt="Thumbnail Image" />
                    </div>
                    <div class="w-2/3">
                        <h2 class="text-xl font-bold mb-2">Thumbnail Title</h2>
                        <p class="text-gray-600">This is a short description for the thumbnail.</p>
                    </div>
                </div>
                <div class="bg-sky-300 p-4 rounded-lg shadow-md flex flex-row items-center gap-4">
                    <div class="entry-image w-1/3">
                        <img class="w-full object-cover" src="https://placehold.co/1200x630" alt="Thumbnail Image" />
                    </div>
                    <div class="w-2/3">
                        <h2 class="text-xl font-bold mb-2">สมาชิกใหม่ FUN88 แจกฟรีเครดิต 300 บาท รายวัน ตลอดเดือน 2025</h2>
                        <p class="text-gray-600">This is a short description for the thumbnail.</p>
                    </div>
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