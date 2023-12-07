<script setup lang="ts">
const runTC = useRuntimeConfig()

let source: any[];
// let purl = `https://newsapi.org/v2/sources?&apiKey=${runTC.public.secret}`;
// const { data: newspurl } = await useFetch(purl)
// source = newspurl.value.sources

let countries = ['us', 'in']

for (let i = 0; i < countries.length; i++) {
    let purl = `https://newsapi.org/v2/top-headlines/sources?country=${countries[i]}&apiKey=${runTC.public.secret}`;
    console.log(purl)
    const { data: newspurl } = await useFetch(purl)
    //@ts-ignore
    source = newspurl.value.sources
    console.log(source)
}
</script>

<template>
    <div v-for="sources in source">
        <ol class="list-decimal">
            <li>{{ sources.name }}</li>
        </ol>
    </div>
</template>