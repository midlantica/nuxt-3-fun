<template>
  <h1 class="mb-4 text-5xl">Movies</h1>
  <form @submit.prevent="search" class="flex w-auto mb-4">
    <input type="text" class="flex-auto px-12 py-6 text-3xl border-none rounded-none rounded-l-full bg-blue-50 outline-0" v-model="query">
    <button class="px-12 py-6 text-3xl text-white bg-blue-800 border-2 rounded-r-full border-bluebg-blue-800">Search</button>
  </form>

  <div class="flex flex-wrap items-center justify-center gap-2 py-6">
    <div class="flex items-center justify-center flex-auto" v-for="movie in movies" :key="movie.imdbID">
      <NuxtLink :to="{ name: 'movies-id', params: { id: movie.imdbID}}">
        <img :src="movie.Poster" :alt="movie.Title" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
  const query = ref('Batman')
  const movies = ref([])

  async function search() {
    const { Search } = await $fetch(
      `http://www.omdbapi.com/?apikey=7ec30ddd&s=${query.value}`
    )
    movies.value = Search
  }
  search()
</script>

<style scoped>

</style>
