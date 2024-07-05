<template>
  <div>
    <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark preR">
      <!-- Navbar Brand-->
      <router-link class="navbar-brand ps-3 text-center" to="/admin/home">BMDS 관리자 페이지</router-link>
      <!-- Sidebar Toggle-->
      <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"
        @click="sidebarToggle">
        <i class="fas fa-bars"></i>
      </button>
      <!-- Navbar Search-->
      <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
        <!--<div class="input-group">
          <input class="form-control" type="text" placeholder="검색어를 입력해 주세요!" aria-label="Search for..."
            aria-describedby="btnNavbarSearch" />
          <button class="btn btn-primary" id="btnNavbarSearch" type="button"><i class="fas fa-search"></i></button>
        </div>-->
      </form>
      <!-- Navbar-->

      <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
        <li class="nav-item dropdown d-flex">
          <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            <p class="text-white" style="margin-top: 37px">
              <i class="fas fa-user fa-fw"></i>
              BMDS 관리자님 환영합니다!
            </p>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import jwtDecode from "jwt-decode";

export default {
  name: "navBar",
  data() {
    return {
      manager: {},
    }
  },
  methods: {
    // 네비게이션바에서 버튼 클릭시 사이드바 숨김
    sidebarToggle() {
      document.querySelector("#app>div").classList.toggle("sb-sidenav-toggled");
    },
    // 유저 아이디 받기
    getUserId() {
      const tokenData = localStorage.getItem("user");
      const parsedToken = JSON.parse(tokenData);
      const accessToken = parsedToken.accessToken;
      const decodedToken = jwtDecode(accessToken);
      const userId = decodedToken.id;
      return userId;
    },
  },
  mounted() {
    // this.getManager(this.getUserId());
  },
};
</script>

<style scoped>
@import url('/public/css/admin/styles.css');
</style>
