<template>
  <div>
    <Nav />
    <div class="pb-md-5 pt-md-4">
      <div class="container">
        <h1 class="display-5 preSB my-auto">고객센터 : 공지사항</h1>
      </div>
    </div>
    <div class="container py-5 bg-white d-flex preR" style="
        min-height: 55rem;
        box-shadow: 0px 0px 23px 2px rgba(0, 0, 0, 0.25);
      ">
      <div class="component-are w-100">
        <NoticeCom />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
/*eslint-disable*/
import Nav from "@/common/main/Nav.vue";
import NoticeCom from "@/components/main/sc/NoticeCom.vue";
import Footer from "@/common/main/Footer.vue";
export default {
  name: "Header",
  components: {
    Nav,
    Footer,
    NoticeCom
  },
  data() {
    return {
      state: "notice",
      id: "",
      btnName: "공지사항",
      footerStyle: {}, // 초기 스타일은 빈 객체로 설정
    };
  },
  computed: {
    currentComponent() {
      // state 값에 따라 렌더할 컴포넌트 결정
      if (this.state === "notice") {
        this.btnName = "공지사항";
        return NoticeCom;
      } else if (this.state === "faq") {
        this.btnName = "자주 묻는 질문";
        return FaqCom;
      } else if (this.state === "nodetails") {
        this.btnName = "공지상세보기";
        return NoticeDetailCom;
      } else if (this.state === "qna") {
        this.btnName = "고객문의";
        return QnaCom;
      } else if (this.state === "qnaUpdate") {
        this.btnName = "문의수정하기";
        return QnAUpdate;
      } else if (this.state === "qnaAdd") {
        this.btnName = "문의하기";
        return QnaAdd;
      } else if (this.state === "qnaDetail") {
        this.btnName = "문의보기";
        return QnaDetail;
      }
      return null;
    },
  },
  // 컴포넌트의 높이가 화면보다 낮을때 푸터가 하단에 고정이 안되는것을 고정되게함.
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