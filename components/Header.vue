
<script setup lang="ts">
const q = ref('')

// const data = await useFetch('/api/autocomp')

// const { data: prd } = await useFetch('https://fakestoreapi.com/products')

// console.log(prd.value)
// var url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=d2960a9bdccc489b80de2f566a89c3ef`;

// var req = new Request(url);

// fetch(req)
//     .then(function (response) {
//         console.log(response.json());
//     })

</script>

<template>
    <div>
        <div
            class="md:flex lg:flex w-full md:items-center lg:items-center h-28 md:h-14 md:justify-between lg:justify-between lg:h-14 bg-gray-900 p-3">
            <div class="img w-full md:w-56 lg:w-56">
                <img src="~/assets/icon/logo.svg" alt=""
                    class="w-auto md:h-5 lg:h-5 h-8  md:ml-5 lg:ml-5 mx-auto pointer-events-none">
            </div>
            <div class="img mt-5  md:mt-0 lg:mt-0">
                <UInput v-model="q" name="q" class="w-96 mx-auto" color="blue" placeholder="Search By Topic/Channel..."
                    icon="i-heroicons-magnifying-glass-20-solid" autocomplete="off"
                    :ui="{ icon: { trailing: { pointer: '' } } }">
                    <template #trailing>
                        <UButton v-show="q !== ''" color="gray" variant="link" icon="i-heroicons-x-mark-20-solid"
                            :padded="false" @click="q = ''" />
                    </template>
                </UInput>

            </div>
            <div class="img mr-10 md:block lg:block hidden">
                <NuxtLink to="/api/login" external>
                    <UAvatar src="https://avatars.githubusercontent.com/u/94476517?v=4" alt="Avatar" size="md" />
                </NuxtLink>
                <NuxtLink to="/api/register" external>

                    <UAvatar src={{ $auth.user.picture }} alt="Avatar" size="md" />

                </NuxtLink>
            </div>

        </div>
    </div>
</template>