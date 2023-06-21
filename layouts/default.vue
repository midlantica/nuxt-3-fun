<template>
  <nav class="flex gap-6 text-3xl">
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/movies">Movies</NuxtLink>
    <NuxtLink v-if="!isLoggedIn" to="/login">Login</NuxtLink>
    <a v-else href="/" @click.prevent="isLoggedIn = false">Logout</a>
  </nav>
  <slot></slot>
</template>

<script setup>
  const isLoggedIn = useIsLoggedIn()
</script>