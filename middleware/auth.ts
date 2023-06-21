export default defineNuxtRouteMiddleware((to, from) => {
  const userLoggedIn = false
  if (!userLoggedIn) {
    console.log("User not logged in!")
    return navigateTo({ path: "/login" })
  }
})
