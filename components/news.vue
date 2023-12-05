<script setup lang="ts">
console.log(1)
let q = ref('')

let arr
console.log(arr)

async function fetchForHome() {
    var url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=d2960a9bdccc489b80de2f566a89c3ef`;

    const { pending, data: news } = await useFetch(url)
    console.log(news)

    arr = news.value
}
fetchForHome()


async function fetchForCategory() {
    var url = `https://newsapi.org/v2/everything?q=${q.value}&apiKey=d2960a9bdccc489b80de2f566a89c3ef`;

    const { pending, data: news } = await useFetch(url)
    console.log(news)

    arr = news.value
}
</script>

<template>
    <div class="img mt-5  md:mt-0 lg:mt-0">
        <UInput v-model="q" name="q" class="md:w-96 lg:w-96 w-full mx-auto" color="blue" v-on:input="fetchForCategory"
            placeholder="Search By Topic/Channel..." icon="i-heroicons-magnifying-glass-20-solid" autocomplete="off"
            :ui="{ icon: { trailing: { pointer: '' } } }">
            <template #trailing>
                <UButton v-show="q !== ''" color="gray" variant="link" icon="i-heroicons-x-mark-20-solid" :padded="false"
                    @click="q = ''" />
            </template>
        </UInput>

    </div>
    hello
    <div v-if="arr === undefined">
        no news available
    </div>
    <div v-else>
        <li v-for="newss in arr.articles">

            <img v-if="newss.urlToImage != null" :src=newss.urlToImage alt="d">
            <img v-else="newss.urlToImage == null" src="https://picsum.photos/200" alt="d">

            <p>{{ newss.title }}</p>
        </li>
    </div>
    <!-- <li v-for="article in arr">
        {{ article.title }}
    </li> -->
</template>

<style>
.v-lazy-image {
    filter: blur(10px);
    transition: filter 0.7s;
}

.v-lazy-image-loaded {
    filter: blur(0);
}
</style>