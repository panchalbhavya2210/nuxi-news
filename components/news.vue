<script setup lang="ts">
const runTC = useRuntimeConfig()

/**
 * todo : search error in website but not on localhost solve
 * 
 */

let q = ref('')

let arr = ref([]);
let loadState: boolean;
let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${runTC.public.secret}`;
const { data: news } = await useFetch(url)
//@ts-ignore
arr.value = news.value.articles

async function fetchForCategory() {
    var url = `https://newsapi.org/v2/everything?q=${q.value}&apiKey=${runTC.public.secret}`;
    console.log(url)
    const { data: news } = await useFetch(url)
    console.log(news)
    //@ts-ignore
    arr.value = news.value.articles
}
</script>

<template>
    <div class="img mt-5  md:mt-0 relative -top-24 sm:-top-24 md:-top-16 lg:-top-20 lg:mt-2">
        <div class="inpfield relative w-full flex justify-center items-center">
            <div class="w-96 relative flex items-center">
                <UInput type="text" v-model="q" name="q" class="w-96 p-1 outline-blue-400" placeholder="Search News..."
                    color="blue"></UInput>
                <img src="~/assets/icon/search.svg" alt="" @click="fetchForCategory()"
                    class="absolute w-auto h-5 right-2 cursor-pointer">
            </div>
        </div>
    </div>


    <div v-if="loadState == true">
        <UTable :empty-state="{ icon: 'i-heroicons-circle-stack-20-solid', label: `No news available for ${q}.` }"
            class="w-full" />
    </div>
    <h1 class="p-5 text-3xl underline">Top Headlines</h1>
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