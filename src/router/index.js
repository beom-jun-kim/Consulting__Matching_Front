/* eslint-disable*/
import Vue from "vue";
import VueRouter from "vue-router";
import adminRoutes from "./admin";
import mainRoutes from "./main";
import jwtDecode from "jwt-decode";
import store from "@/store";

Vue.use(VueRouter);

const routes = [...adminRoutes, ...mainRoutes];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  // 인증 없이 접근가능한 경로(화면)
  const publicPages = [
    "/main/MemberLogin",
    "/main/join",
    "/",
    "/admin/Login",
    "/main/findEmailPass",
    "/main/consultantJoin",
    "/main/BMLearning",
    "/main/notice",
    "/main/ticketList",
  ];
  // 인증이 있어야만 접근 가능한 경로(화면)
  const authRequired = !publicPages.includes(to.path);

  const loggedIn = localStorage.getItem("user");

  // 비회원일 경우
  if (authRequired && !loggedIn) {
    // 강제로 /login 화면으로 전환
    next("/main/MemberLogin");
  } else if (authRequired && loggedIn) {
    //회원일 경우
    const parsedToken = JSON.parse(loggedIn);
    const accessToken = parsedToken.accessToken;
    const decodedToken = jwtDecode(accessToken);
    const userRole = decodedToken.role;
    //관리자인경우
    if (
      userRole === "admin" ||
      userRole === "tester" ||
      userRole === "g-supervisor" ||
      userRole === "s-supervisor"
    ) {
      next();
    }
    // 관리자가 아닌 경우 관리자 페이지로 접근 시 메인 화면으로 리디렉션
    else if (to.path.includes("/admin/")) {
      next("/");
    }
    // 관리자가 아닌 경우 나머지 페이지로 접근 허용
    else if (to.path.includes("/main/")) {
      const currentTime = Math.floor(Date.now() / 1000); // 현재 시간 (초 단위)
      const tokenExpiration = decodedToken.exp; // 토큰 만료 시간 (초 단위)

      if (tokenExpiration && tokenExpiration < currentTime) {
        // 토큰이 만료된 경우
        if (!alert("로그아웃되었습니다.")) {
          // Vuex 액션을 사용하여 로그아웃 프로세스를 처리합니다.
          store.dispatch("auth/logoutMain").then(() => {
            next("/main/MemberLogin");
          });
          return; // 추가 실행을 방지하기 위해 일찍 반환합니다.
        }
      } else {
        next(); // 토큰이 유효한 경우 다음 화면으로 이동
      }
    }
  } else {
    // 다음 화면으로 이동
    next();
  }
});

export default router;
