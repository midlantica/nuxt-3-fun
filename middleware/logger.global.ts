export default defineNuxtRouteMiddleware((to, from) => {
  console.log(to, from, "From the named Middleware")
})
