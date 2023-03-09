import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../pages/Dashboard.vue";
import Analytics from "../pages/Analytics.vue";
import AddCoworker from "../components/analytics/AddCoworker.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/dashboard" },
    { path: "/dashboard", component: Dashboard, name: "dashboard" },
    { path: "/analytics", component: Analytics, name: "analytics" },
    { path: "/add", component: AddCoworker, name: "add" },
  ],
});
