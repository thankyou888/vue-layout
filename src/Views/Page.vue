<template>
    
</template>
<script setup lang="ts">
import { defineComponent } from "vue";
import Sidebar from "../components/Sidebar.vue";
import RelatedPosts from "../components/RelatedPosts.vue";
defineComponent({
    name: "Page",
    components: {
        Sidebar,
        RelatedPosts,
    },
});
</script>