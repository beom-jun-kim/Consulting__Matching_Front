<template>
  <div>
    <Nav />
    <div class="pb-md-5 pt-md-4">
      <div class="container">
        <h1 class="display-5 preSB my-auto">나의 서비스 : {{ btnName }}</h1>
      </div>
    </div>

    <div class="sp_wrap">
      <div class="container py-5 bg-white d-flex dd preR" style="
        
        box-shadow: 0px 0px 23px 2px rgba(0, 0, 0, 0.25);
      ">
      <div class="mx-5 d-flex flex-column mt-5" style="width: 15rem;">
        <button v-for="(button, index) in buttons" :key="index" class="btn btn-lg btn-secondary w-100 mb-1"
          @click="updateState(button.state)" :style="{ height: '70px' }">
          {{ button.label }}
        </button>
      </div>

      <!-- 컴포넌트 영역 -->
      <div class="component-area" style="width: 100%">
        <!-- state 값에 따라 동적으로 컴포넌트 렌더링 -->
        <component :is="currentComponent" @update:state="state = $event" @data="receiveData" :state="state" :id="id">
        </component>
      </div>
    </div>

    </div>
    <Footer />
  </div>
</template>

<script>
/*eslint-disable*/
import Nav from "@/common/main/Nav.vue";
import InfoUpdate from "@/components/main/InfoUpdate.vue";
import MyPage from "@/components/main/MyPage.vue";
import MypageQnaDetail from "@/components/main/MypageQnADetail.vue";
import PayResult from "@/components/main/PayResult.vue";
import TicketResult from "@/components/main/TicketResult.vue";
import UserCheck from "@/components/main/UserCheck.vue";
import UserCheckDetail from "@/components/main/UserCheckDetail.vue"
import Footer from "@/common/main/Footer.vue";
import Bmds1ListCom from "@/components/main/bmdsBasic/Bmds1ListCom.vue";
import Bmds1Com from "@/components/main/bmdsBasic/Bmds1Com.vue";
export default {
  name: "Header",
  components: {
    Nav,
    Footer,
  },
  data() {
    return {
      state: "mypage",
      id: "",
      btnName: "마이페이지",
      footerStyle: {},
      buttons: [
        // {
        //   label: "마이페이지",
        //   state: "mypage"
        // },
        {
          label: "정보수정",
          state: "infoupdate"
        },
        // {
        //   label: "결제내역",
        //   state: "payresult"
        // },
        // {
        //   label: "이용권내역",
        //   state: "ticketresult"
        // },
        // {
        //   label: "유저조회",
        //   state: "userCheck"
        // },
        // {
        //   label: "일지조회",
        //   state: "journalCheck"
        // },
      ]
    };
  },
  computed: {
    currentComponent() {
      // state 값에 따라 렌더할 컴포넌트 결정
      if (this.state === "mypage") {
        this.btnName = "마이페이지";
        // return MyPage;
          return InfoUpdate;
      } else if (this.state === "mypageQnaDetail") {
        this.btnName = "상세보기";
        return MypageQnaDetail;
      } else if (this.state === "infoupdate") {
        this.btnName = "정보수정";
        return InfoUpdate;
      } else if (this.state === "payresult") {
        this.btnName = "결제내역";
        return PayResult;
      } else if (this.state === "ticketresult") {
        this.btnName = "이용권내역";
        return TicketResult;
      } else if (this.state === "userCheck") {
        this.btnName = "유저조회";
        return UserCheck;
      } else if (this.state === "journalCheck") {
        this.btnName = "일지조회";
        return JournalCheck;
      } else if (this.state === "bmds1List") {

        this.btnName = "BMDS1 목록";
        const dd = document.getElementsByClassName("dd");
        for (let i = 0; i < dd.length; i++) {
          dd[i].style.height = "55rem";
        }
        return Bmds1ListCom;
      } else if (this.state === "bmds1Add") {
        this.btnName = "BMDS1 작성";
        const dd = document.getElementsByClassName("dd");
        for (let i = 0; i < dd.length; i++) {
          dd[i].style.height = "auto";
        }
        return Bmds1Com;
      } else if (this.state === "userCheckDetail") {
        return UserCheckDetail;
      }
      return null;
    },
  },
  mounted() {
    this.updateFooterPosition(); // 컴포넌트가 마운트될 때 스타일 업데이트
    window.addEventListener("resize", this.updateFooterPosition); // 창 크기 변경 시 스타일 업데이트
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateFooterPosition); // 컴포넌트가 파괴되기 전 이벤트 리스너 제거
  },
  methods: {
    receiveData(state, id) {
      this.state = state.state;
      this.id = state.id;
    },
    stateFooter(state) {
      this.state = state;
      this.updateFooterPosition();
    },
    updateState(newState) {
      this.state = newState;
    },
    updateFooterPosition() {
      const windowHeight = window.innerHeight;
      const contentHeight = this.getContentHeight();

      if (contentHeight < windowHeight) {
        // 내용의 높이가 창 높이보다 작을 때만 푸터를 고정
        this.footerStyle = {
          position: "fixed",
          left: 0,
          bottom: 0,
          width: "100%",
          backgroundColor: "#444",
          padding: "20px",
        };
      } else {
        // 내용의 높이가 창 높이보다 클 때에는 푸터를 일반적인 위치로 설정
        this.footerStyle = {
          position: "static", // 또는 다른 기본 위치 값
        };
      }
    },
    getContentHeight() {
      const memberLoginElement = this.$refs.memberLogin.$el;
      if (memberLoginElement) {
        return memberLoginElement.offsetHeight;
      }
      return 0;
    },
  },
};
</script>
<style scoped>
@import "../../../../public/css/main/styles.css";
</style>