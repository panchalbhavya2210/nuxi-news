
<script setup lang="ts">
const q = ref('')


// const data = await useFetch('/api/autocomp')

// const { data: prd } = await useFetch('https://fakestoreapi.com/products')

// console.log(prd.value)


</script>

<template>
    <div>
        <div
            class="md:flex lg:flex w-full md:items-center lg:items-center h-28 md:h-14 md:justify-between lg:justify-between lg:h-14 bg-gray-900 p-3">
            <div class="img w-full md:w-56 lg:w-56">
                <img src="~/assets/icon/logo.svg" alt=""
                    class="w-auto md:h-5 lg:h-5 h-8  md:ml-5 lg:ml-5 mx-auto pointer-events-none">
            </div>

            <div class="img mr-10 md:block lg:block hidden">
                <!-- <NuxtLink to="/api/login" external>
                </NuxtLink>-->


            </div>

        </div>
        <NuxtLink to="/sources">
            GO Source
        </NuxtLink>
    </div>
</template>