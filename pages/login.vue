<template>
  <div class="flex flex-col flex-auto max-w-[500px] m-auto place-content-center min-h-[200px] pt-32 pb-48">
    <h1 class="mb-6 text-3xl font-bold">Login</h1>
    <form class="flex gap-6" @submit.prevent="login">
      <label>
        <p class="leading-loose">Username</p>
        <input class="px-4 py-2 border" type="text">
      </label>
      <label>
        <p class="leading-loose">Password</p>
        <input class="px-4 py-2 border" type="password">
      </label>
      <button class="self-end px-6 py-2 text-white border bg-sky-900 max-h-12">Login</button>
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