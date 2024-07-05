<template>
  <div id="layoutSidenav_nav" class="preR">
    <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
      <div class="sb-sidenav-menu">
        <div class="nav">
          <div class="sb-sidenav-menu-heading">Main Navigation</div>
          <router-link class="nav-link" to="/admin/home">
            <div class="sb-nav-link-icon">
              <i class="fa fa-home"></i>
            </div>
            Dashboard
          </router-link>
          <router-link class="nav-link" to="/admin/supervisorList">
            <div class="sb-nav-link-icon">
              <i class="fa fa-user"></i>
            </div>
            슈퍼바이저관리
          </router-link>
          <router-link class="nav-link" to="/admin/userList">
            <div class="sb-nav-link-icon">
              <i class="fa fa-user"></i>
            </div>
            일반회원관리
          </router-link>
          <router-link class="nav-link" to="/admin/consultantList">
            <div class="sb-nav-link-icon">
              <i class="fa fa-user"></i>
            </div>
            컨설턴트회원관리
          </router-link>
          <router-link class="nav-link" to="/admin/BMList">
            <div class="sb-nav-link-icon">
              <i class="fa-solid fa-ticket"></i>
            </div>
            비즈니스모델관리
          </router-link>
          <router-link class="nav-link" to="/admin/matchingList">
            <div class="sb-nav-link-icon">
              <i class="fa-solid fa-handshake"></i>
            </div>
            컨설팅매칭관리
          </router-link>
          <router-link class="nav-link" to="/admin/journalList">
            <div class="sb-nav-link-icon">
              <i class="fa-solid fa-credit-card"></i>
            </div>
            컨설팅결과보고서관리
          </router-link>
          <!-- <router-link class="nav-link" to="/admin/reviewList">
            <div class="sb-nav-link-icon">
              <i class="fa-solid fa-ticket"></i>
            </div>
            컨설팅후기관리
          </router-link> -->
          <a v-if="isAdmin" class="nav-link collapsed" href="#" data-bs-toggle="collapse"
            data-bs-target="#serviceCenter" aria-expanded="false" aria-controls="collapseLayouts">
            <div class="sb-nav-link-icon">
              <i class="fa-solid fa-building-circle-arrow-right"></i>
            </div>
            고객센터
            <div class="sb-sidenav-collapse-arrow">
              <i class="fas fa-angle-down"></i>
            </div>
          </a>
          <div class="collapse" id="serviceCenter" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
            <nav class="sb-sidenav-menu-nested nav">
              <router-link class="nav-link" to="/admin/FAQList">자주묻는 질문</router-link>
              <router-link class="nav-link" to="/admin/QnAList">문의관리</router-link>
              <router-link class="nav-link" to="/admin/NoticeList">공지사항</router-link>
            </nav>
          </div>
          <router-link v-if="isAdmin" class="nav-link" to="/admin/fileUploadView">
            <div class="sb-nav-link-icon">
              <i class="fas fa-tachometer-alt"></i>
            </div>
            사업공고 이미지 업로드
          </router-link>
          <router-link v-if="isAdmin" class="nav-link" to="/admin/profile">
            <div class="sb-nav-link-icon">
              <i class="fas fa-tachometer-alt"></i>
            </div>
            관리자정보
          </router-link>
          <router-link class="nav-link" to="/">
            <div class="sb-nav-link-icon">
              <i class="fas fa-tachometer-alt"></i>
            </div>
            BMDS로 가기
          </router-link>
          <a class="nav-link" style="cursor: pointer" @click="logout">
            <div class="sb-nav-link-icon">
              <i class="fas fa-tachometer-alt"></i>
            </div>
            로그아웃
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import jwtDecode from "jwt-decode";
export default {
  name: "SideNavCom",
  data() {
    return {
      isAdmin: false,
    }
  },
  methods: {
    getUserToken() {
      const tokenData = localStorage.getItem("user");
      const parsedToken = JSON.parse(tokenData);
      const accessToken = parsedToken.accessToken;
      const decodedToken = jwtDecode(accessToken);
      return decodedToken;
    },
    adminTrueFalse() {
      if (this.getUserToken().role == "admin") {
        this.isAdmin = true;
      }
      else {
        this.isAdmin = false;
      }
    },
    logout() {
      if (confirm("정말 로그아웃 하시겠습니까?")) {
        this.$store.dispatch("auth/logoutAdmin");
        location.href = "/main/MemberLogin";
      }
    },
  },
  mounted() {
    this.adminTrueFalse();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
@import url('/public/css/admin/styles.css');
</style>
