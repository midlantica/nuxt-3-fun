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
  const user = useUser()
  definePageMeta({
    layout: "plain"
  })

  const login = () => {
    user.isLoggedIn = true
    useRouter().push("/")
  }
</script>

<style scoped>

</style>