<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <label>
        Username
        <input type="text">
      </label>
      <label>
        Password
        <input type="password">
      </label>
      <button>Login</button>
    </form>
  </div>
</template>

<script setup>
  const isLoggedIn = useIsLoggedIn()
  definePageMeta({
    layout: `plain`
  })

  const login = () => {
    isLoggedIn.value = true
    useRouter().push("/")
  }
</script>

<style scoped>

</style>