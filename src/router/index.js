import { createRouter, createWebHistory } from "vue-router";
import NavigationPage from "../components/NavigationPage.vue";
import HomePage from "../components/HomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "nav",
      component: NavigationPage,
    },
    {
      path: "/home",
      name: "home",
      component: HomePage,
    },
  ],
});

export default router;
