<template>
  <div>
    <h1 class="text-5xl">{{message}}</h1>
  </div>
</template>

<script setup>
  const route = useRoute()
  const message = computed(() => `I'm on team ${route.params.teamSlug} and my user id is ${route.params.userId}`)
</script>

<style lang="scss" scoped>

</style>