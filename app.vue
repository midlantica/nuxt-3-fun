<template>
  <div class="p-10">
    <NuxtLayout>
      <div class="p-10 mt-6 border">
        <NuxtPage />
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - My Movie Site` : `My Movie site`
  }
})
</script>