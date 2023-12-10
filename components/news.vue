<script setup lang="ts">
const runTC = useRuntimeConfig()

/**
 * todo : search error in website but not on localhost solve [can't be solved] (reason : api upgrade)
 * 
 */

let q = ref('')

let arr = ref([]);
let loadState: boolean;
let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${runTC.public.secret}`;
const { data: news } = await useFetch(url)
//@ts-ignore
arr.value = news.value.articles


</script>

<template>
    <div v-if="loadState == true">
        <UTable :empty-state="{ icon: 'i-heroicons-circle-stack-20-solid', label: `No news available for ${q}.` }"
            class="w-full" />
    </div>
    <h1 class="p-5 text-3xl underline">Top Headlines India</h1>
    <div
        class="sm:grid sm:grid-cols-3 sm:gap-4 sm:p-5 md:grid md:grid-cols-3 md:gap-4 md:p-5 lg:grid lg:grid-cols-3 lg:gap-4 lg:p-5 p-5">
        <div v-for="newss in arr" class="">

            <!-- @vue-ignore -->
            <div class="bg-gray-800 p-3 rounded-md my-5">
                <!-- @vue-ignore -->
                <a :href="newss.url" target="_blank">
                    <div class="img w-full h-56">
                        <!-- @vue-ignore -->
                        <img v-if="newss.urlToImage != null" :src="newss.urlToImage" alt="" class="h-full w-full">
                        <UAvatar v-else icon="i-heroicons-photo" class="w-full h-full" size="3xl"></UAvatar>
                    </div>
                    <p class="my-2 font-medium"> {{ newss.title }}</p>
                    <p class="my-2">{{ newss.publishedAt }}</p>
                </a>
            </div>
        </div>
    </div>
</template>


<style>
body {
    font-family: Poppins;
}
</style>