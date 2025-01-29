<!-- App.vue -->
<template>
  <div>
    <navigation-page />
    <section-1 />
  </div>
</template>

<script>
// Import necessary functions from Vue Router
import { createRouter, createWebHistory } from "vue-router";
import NavigationPage from "./components/NavigationPage.vue";
// Define routes
const routes = [
  {
    path: "/",
    component: NavigationPage,
  },
];

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default {
  components: { NavigationPage },
  name: "App",
  // Provide the router instance to the app
  router,
};
</script>

<style>
/* Global styles */
</style>
