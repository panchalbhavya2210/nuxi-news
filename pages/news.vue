<script setup lang="ts">
console.log(1)
var url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=d2960a9bdccc489b80de2f566a89c3ef`;

let arr
var req = new Request(url);

fetch(req)
    .then(function (response) {
        // Check if the request was successful
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Parse the JSON data from the response
        return response.json();
    })
    .then(function (articles) {
        arr = articles
        console.log(articles);
    })
    .catch(function (error) {
        // Handle errors here
        console.error('Error:', error);
    });

// setTimeout(() => {
//     console.log(arr)
// }, 1400)
</script>

<template>
    hello
    <li v-for="article in arr.articles">
        {{ article.title }}
    </li>
</template>