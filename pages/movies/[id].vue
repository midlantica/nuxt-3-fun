<template>
  <div class="flex gap-8 text-2xl">
    <img class="w-[300px] h-[400px]" :src="data.Poster" alt="data.Title"/>
    <div class="w-auto">
      <h1 class="mb-4 text-3xl font-bold">{{ data.Title }}</h1>
      <div class="flex flex-wrap w-full my-3 flex-start">
        <p class="w-[7rem]">Year:</p>
        <p class="w-auto">{{ data.Year }}</p>
      </div>
      <div class="flex flex-wrap w-full my-3 flex-start">
        <p class="w-[7rem]">Rated:</p>
        <p class="w-auto">{{ data.Rated }}</p>
      </div>
      <div class="flex flex-wrap w-full my-3 flex-start">
        <p class="w-[7rem]">Released:</p>
        <p class="w-auto">{{ data.Released }}</p>
      </div>
      <div class="flex flex-wrap w-full my-3 flex-start">
        <p class="w-[7rem]">Genre:</p>
        <p class="w-auto">{{ data.Genre }}</p>
      </div>
      <div class="flex flex-wrap w-full my-3 flex-start">
        <p class="w-[7rem]">Director:</p>
        <p class="w-auto">{{ data.Director }}</p>
      </div>
      <div class="flex flex-wrap w-full my-3 flex-start">
        <p class="w-[7rem]">Writer:</p>
        <p class="w-auto">{{ data.Writer }}</p>
      </div>
      <div class="flex flex-wrap w-full my-3 flex-start">
        <p class="w-[7rem]">Actor:</p>
        <p class="w-auto">{{ data.Actors }}</p>
      </div>
      <div class="flex flex-wrap w-full my-3 flex-start">
        <p class="flex-grow w-[7rem]">Plot:</p>
        <p class="flex-shrink">{{ data.Plot }}</p>
      </div>
    </div>
    <!-- {{ data }} -->
  </div>
</template>

<script setup>
  const route = useRoute()

  const { data, error } = await useFetch(`https://www.omdbapi.com/?apikey=7ec30ddd&i=${route.params.id}`, {
    pick: ['Poster', 'Title', 'Year', 'Rated', 'Released', 'Genre', 'Director', 'Writer', 'Actors', 'Plot', 'Error'],
    key: `/movies/${route.params.id}`
  })

  if (error.value) {
    console.log("Error Jacko")
  }

  if (data.value.Error === "Incorrect IMDb ID.") {
    showError({ statusCode: 404, statusMessage: "Page Not Found" })
  }

  useHead({
    title: data.value.Title,
    meta: [
      { name: "description", content: data.value.Plot },
      { property: "og:description", content: data.value.Plot },
      { property: "og:image", content: data.value.Poster },
      { name: "twitter.card", content: `summary_large_image` }
    ]
  })
</script>

<style lang="scss" scoped>

</style>