import { createRouter, createWebHashHistory } from "vue-router";

import TourPage from "../views/TourPage.vue";

const homePage = () => import("../views/homePage.vue");

const routes = [
  { path: "/", component: homePage },
  { path: "/TourPage/:name", name: "User", component: TourPage },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
