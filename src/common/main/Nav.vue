<template>
  <div class="topMenu preR">
    <div class="navbar navbar-expand-lg navbar-white bg-white wrap">
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
        <div class="ci">
        <router-link class="navbar-brand a2" to="/">
          <img src="@/assets/merakl_update.png" />
        </router-link>
      </div>

        <ul class="">
          <li class="nav-item menuTopBar">

            <router-link class="nav-link menu2 a2" to="/main/BMLearning">BMDS 소개</router-link>
          </li>
          <li class="nav-item menuTopBar" v-if="menuFollow">
            <router-link class="nav-link menu8 a2" to="/main/learn">BMDS 따라하기</router-link>
          </li>

          <li class="nav-item menuTopBar" v-if="menuBmDesign">
            <router-link class="nav-link menu1 a1" to="/main/bmds/buildup/list">My BM 설계</router-link>
          </li>
          <li class="nav-item dropdown menuTopBar" v-if="menuMento">
            <div class="serviceCenterMenuBtn">
              <div class="nav-link menu3 a2" id="serviceCenter" style="cursor:pointer;">
                <router-link class="nav-link menu8 a2" to="/main/mentor/mentorMatch">멘토</router-link>                
              </div>
              <ul class="dropdown-menu serviceCenterSubMenu">
                <li>
                  <router-link class="dropdown-item" to="/main/mentor/mentorMatch">
                    멘토링 진행
                  </router-link>
                </li>
                <li>
                  <router-link class="dropdown-item" to="/main/mentor/mentorHistory">
                    멘토링 내역
                  </router-link>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item dropdown menuTopBar" v-if="menuMentee">
            <div class="serviceCenterMenuBtn">
              <div class="nav-link menu3 a2" id="serviceCenter" style="cursor:pointer;">
                <router-link class="nav-link menu8 a2" to="/main/mentor/MenteeManagement">멘티</router-link>
              </div>
              <ul class="dropdown-menu serviceCenterSubMenu">
                <li>
                  <router-link class="dropdown-item" to="/main/mentor/MenteeManagement">
                    멘토링 관리
                  </router-link>
                </li>
                <li>
                  <router-link class="dropdown-item" to="/main/mentor/menteeMatch">
                    멘토링 매칭
                  </router-link>
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item menuTopBar" v-if="menuAnnouncement">
            <router-link class="nav-link menu8 a2" to="/main/roadmap">지원사업 알아보기</router-link>
          </li>
          <!-- <li class="nav-item dropdown menuTopBar" v-if="menuMentoring">
            <div class="serviceCenterMenuBtn">
              <div class="nav-link menu3 a2" id="serviceCenter" style="cursor:pointer;">
                멘토링관리
              </div>
              <ul class="dropdown-menu serviceCenterSubMenu">
                <li>
                  <router-link class="dropdown-item" to="/main/mentor/menteeList">
                    멘티 리스트
                  </router-link>
                </li>
                <li>
                  <router-link class="dropdown-item" to="/main/mentor/mentorList">
                    멘토 리스트
                  </router-link>
                </li>
                <li>
                  <router-link class="dropdown-item" to="/main/mentor/mentoringList">
                    멘토링 리스트
                  </router-link>
                </li>
              </ul>
            </div>
          </li> -->
          <!-- <li class="nav-item dropdown menuTopBar" v-if="menuCs">
            <div class="serviceCenterMenuBtn">
              <div class="nav-link menu3 a2" id="serviceCenter" style="cursor:pointer;">
                고객센터
              </div>
              <ul class="dropdown-menu serviceCenterSubMenu">
                <li>
                  <router-link class="dropdown-item" to="/main/notice">
                    공지사항
                  </router-link>
                </li>
                <li>
                  <router-link class="dropdown-item" to="/main/faq">
                    자주 묻는 질문
                  </router-link>

                </li>
                <li>
                  <router-link class="dropdown-item" :to="`/main/qna/${userId}`">
                    문의하기
                  </router-link>
                </li>
              </ul>
            </div>
          </li> 
          <li class="nav-item menuTopBar" v-if="menuSign">
            <router-link class="nav-link menu4 a2" to="/main/ticketList">구독하기</router-link>
          </li>
          
          <div v-if="menuMypage">
            <li class="nav-item menuTopBar">
              <router-link class="nav-link menu5 a2" to="/main/mypage">마이페이지</router-link>
            </li>
          </div>
-->

          <div v-if="menuAdmin">
            <li class="nav-item menuTopBar">
              <router-link class="nav-link menu5 a2" to="/admin/home">관리자페이지</router-link>
            </li>
          </div>
        </ul>


        <ul class="">
          <div v-if="loggedIn == true"  class="d-flex">
            <li class="nav-item">
              <router-link class="nav-link menu5 a2" to="/main/mypage"><i class="fa-regular fa-user"></i>마이페이지</router-link>
            </li>
            <li class="nav-item">
              <a href @click.prevent="logOut" class="nav-link text-dark btnWrap">
                <i class="fa-solid fa-arrow-right-from-bracket"></i>로그아웃
              </a>
            </li>
          </div>
          <div v-else>
            <div class="d-flex">
              <li class="nav-item">
                <router-link to="/main/MemberLogin" class="nav-link text-dark btnWrap">
                  <i class="fa-solid fa-arrow-right-to-bracket"></i>로그인
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/main/join" class="nav-link text-dark btnWrap">
                  <i class="fa-regular fa-user"></i>회원가입
                </router-link>
              </li>
            </div>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
/*eslint-disable*/
import jwtDecode from "jwt-decode";
import UserDataService from "@/services/main/UserDataService";
export default {
  name: "Nav",
  data() {
    return {
      isLinkEnabled: false,
      freeUser: ["common", "basic"],
      userId: 0,
      menuIntro : false,
      menuFollow : false,	
      menuBmDesign : false,
      menuMento : false,
      menuMentee : false,
      menuAnnouncement : false,
      menuCs : false,
      menuSign : false,
      menuMypage : false,
      menuMentoring : false,
      menuAdmin : false,
      userCnt : 0,
    };
  },

  methods: {
    noFreeUser() {
      if (this.loggedIn) {
        if (this.freeUser.includes(this.getUser().role)) {
          if (confirm('유료회원 전환 후 사용 가능합니다.')) {
            this.$router.push('/main/ticketList');
          }
        }
        else {
          this.$router.push('/main/mentor');
        }
      }
      else {
        this.$router.push('/main/MemberLogin');
      }
    },
    getUser() {
      const tokenData = localStorage.getItem("user");
      const parsedToken = JSON.parse(tokenData);
      const accessToken = parsedToken.accessToken;
      const decodedToken = jwtDecode(accessToken);
      return decodedToken;
    },
    logOut() {
      if (confirm("정말 로그아웃 하시겠습니까?")) {
        // dispatch 호출하는 메소드 : actions에 있는 메소드를 호출함
        this.$store.dispatch("auth/logoutMain");
        localStorage.removeItem("user");
        // 로그아웃 후 이동할 페이지 지정
        window.location = "/";
      }
    },
    async loadUserCnt(){
      try {
        const response = await UserDataService.userCnt();
        this.userCnt = response.data.count; 
      }catch(e){
        console.log(e);
      }
    },
    test() {
      console.log("test");
    },
  },

  computed: {
    // 값 : false, true
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
    loggedOut() {
      return !this.$store.state.auth.status.loggedIn;
    },
  },
  mounted() {
    if(localStorage.getItem("user") == null) {
      // 로그아웃 상태 메뉴 셋팅
      this.menuIntro = true;
      this.menuFollow = true;	
      this.menuBmDesign = false;
      this.menuMento = false;
      this.menuMentee = false;
      this.menuAnnouncement = false;
      this.menuCs = true;
      this.menuSign = true;
      this.menuMypage = false;
      this.menuMentoring = false;
      this.menuAdmin = false;

    } else {
      // 로그인 상태 메뉴 셋팅
      var role = this.getUser().role;
      console.log(role);

      if(role == "admin") {
        this.menuIntro = true;
        this.menuFollow = true;
        this.menuBmDesign = true;
        this.menuMento = true;
        this.menuMentee = true;
        this.menuAnnouncement = true;
        this.menuCs = true;
        this.menuSign = true;
        this.menuMypage = true;
        this.menuMentoring = true;
        this.menuAdmin = true;	
      }

      if(role == "supervisor") {
        this.menuIntro = true;
        this.menuFollow = true;
        this.menuBmDesign = true;
        this.menuMento = true;
        this.menuMentee = false;
        this.menuAnnouncement = true;
        this.menuCs = true;
        this.menuSign = true;
        this.menuMypage = true;
        this.menuMentoring = true;
        this.menuAdmin = false;	
      }

      if(role == "g-consultant") {
        this.menuIntro = true;
        this.menuFollow = true;
        this.menuBmDesign = true;
        this.menuMento = true;
        this.menuMentee = false;
        this.menuAnnouncement = true;
        this.menuCs = true;
        this.menuSign = true;
        this.menuMypage = true;
        this.menuMentoring = false;
        this.menuAdmin = false;
      }

      if(role == "s-consultant") {
        this.menuIntro = true;
        this.menuFollow = true;
        this.menuBmDesign = true;
        this.menuMento = true;
        this.menuMentee = true;
        this.menuAnnouncement = true;
        this.menuCs = true;
        this.menuSign = true;
        this.menuMypage = true;
        this.menuMentoring = false;
        this.menuAdmin = false;
      }

      if(role == "common") {
        this.menuIntro = true;
        this.menuFollow = true;
        this.menuBmDesign = false;
        this.menuMento = false;
        this.menuMentee = false;
        this.menuAnnouncement = false;
        this.menuCs = true;
        this.menuSign = true;
        this.menuMypage = true;
        this.menuMentoring = false;
        this.menuAdmin = false;
      }

      if(role == "basic") {
        this.menuIntro = true;
        this.menuFollow = true;
        this.menuBmDesign = true;
        this.menuMento = false;
        this.menuMentee = false;
        this.menuAnnouncement = true;
        this.menuCs = true;
        this.menuSign = true;
        this.menuMypage = true;
        this.menuMentoring = false;
        this.menuAdmin = false;
      }

      if(role == "buildup") {
        this.menuIntro = true;
        this.menuFollow = true;
        this.menuBmDesign = true;
        this.menuMento = false;
        this.menuMentee = true;
        this.menuAnnouncement = true;
        this.menuCs = true;
        this.menuSign = true;
        this.menuMypage = true;
        this.menuMentoring = false;
        this.menuAdmin = false;
      }

      if(role == "premium") {
        this.menuIntro = false;
        this.menuFollow = false;
        this.menuBmDesign = false;
        this.menuMento = false;
        this.menuMentee = false;
        this.menuAnnouncement = false;
        this.menuCs = false;
        this.menuSign = false;
        this.menuMypage = false;
        this.menuMentoring = false;
        this.menuAdmin = false;
      }

      if(role == "student") {
        this.menuIntro = true;
        this.menuFollow = true;
        this.menuBmDesign = true;
        this.menuMento = false;
        this.menuMentee = true;
        this.menuAnnouncement = false;
        this.menuCs = true;
        this.menuSign = true;
        this.menuMypage = true;
        this.menuMentoring = false;
        this.menuAdmin = false;
      }

      // 추후 오픈
      this.menuSign = false;
      this.menuCs = false;

      this.userId = this.getUser().id;
    }
    
  }
};
</script>
