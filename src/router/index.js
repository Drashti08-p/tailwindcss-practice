import { createRouter, createWebHistory } from "vue-router";
import NavigationPage from "../components/NavigationPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "nav",
      component: NavigationPage,
    },
  ],
});

export default router;
