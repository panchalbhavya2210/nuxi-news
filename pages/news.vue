<script setup lang="ts">


let q = ref('')

let arr
let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=d2960a9bdccc489b80de2f566a89c3ef`;

const { data: news } = await useFetch(url)

arr = news.value.articles
console.log(news.value.articles)

// async function fetchForCategory() {
//     var url = `https://newsapi.org/v2/everything?q=${q.value}&apiKey=d2960a9bdccc489b80de2f566a89c3ef`;

//     const { pending, data: news } = await useFetch(url)
//     console.log(news)

//     arr = news.value
// }
</script>

<template>
    <div v-for="newss in arr">
        <img :src="newss.urlToImage" alt="" srcset="">
        <p>{{ newss.title }}</p>
    </div>
</template>

