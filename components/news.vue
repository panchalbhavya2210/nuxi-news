<script setup lang="ts">
console.log(1)
var url = `https://newsapi.org/v2/everything?q=technology&apiKey=d2960a9bdccc489b80de2f566a89c3ef`;

// let arr

let arr

const { pending, data: news } = await useFetch(url)
console.log(news)

arr = news.value
console.log(arr)
// var req = new Request(url);

// fetch(req)
//     .then(function (response) {
//         // Check if the request was successful
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }

//         // Parse the JSON data from the response
//         return response.json();
//     })
//     .then(function (articles) {
//         arr = articles.articles
//         console.log(arr);
//     })
//     .catch(function (error) {
//         // Handle errors here
//         console.error('Error:', error);
//     });

// setTimeout(() => {
//     console.log(arr)
// }, 1400)
</script>

<template>
    hello
    <li v-for="newss in  arr.articles ">
        <img :src=newss.urlToImage alt="d">
        {{ newss.title }}
    </li>
    <!-- <li v-for="article in arr">
        {{ article.title }}
    </li> -->
</template>