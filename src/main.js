import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Home from "./components/HomePage.vue";
import Users from "./components/UserPage.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/users", component: Users },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
