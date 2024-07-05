import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VeeValidate from "vee-validate";

// Todo : Bootstrap import 4개
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);
Vue.use(VeeValidate);

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem("user");

  // 로그인한 상태에서 새로고침 시에는 로그아웃을 막습니다.
  if (loggedIn && to.path === "/logout") {
    next(false);
  } else {
    next();
  }
});

const app = new Vue({
  router,
  store,
  render: (h) => h(App),
});

app.$mount("#app");
