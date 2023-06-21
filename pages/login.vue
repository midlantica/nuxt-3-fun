<template>
  <div>
    <h1>Login</h1>
    <form>
      <label>
        Username
        <input type="text">
      </label>
      <label>
        Password
        <input type="password">
      </label>
    </form>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: `plain`
  })
</script>

<style scoped>

</style>