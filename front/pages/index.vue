<template>
    <div>
        <Nav />
        <div class="content">
            <div style="font-weight: bold;">
                <NuxtLayout>
                    <NuxtPage />
                </NuxtLayout>
            </div>
            <div v-if="loader" style="width: 100px; z-index: 1122211; margin: 0 auto; position: absolute; right: 40%; top: 50%;">
                <Spinner />
            </div>

        </div>
    </div>
</template>
<script setup>

definePageMeta({
    middleware: ["guest"],
});
const loader=useState('loader')

// watch(()=>{
//     loader.value= useLoader().value
// })
console.log(loader.value);
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap');

body {
    font-family: 'Cairo', sans-serif;
    background-color: rgb(207, 157, 157);
}

.sticky+.content {
    padding-top: 5em;
}
</style>
