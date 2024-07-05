<template>
  <div>
    <Nav></Nav>
    <!-- 페이지 시작 -->
    <div class="container mt-4">
      <div class="d-flex gap-3">
        <div class="flex-grow-1 text-center border">
          <b>비즈니스 모델</b><br />
          추가하기
          <br /><i class="material-icons">add</i>
        </div>
        <div class="flex-grow-1 text-center border">
          <div class="boxHead d-flex justify-content-end">
            <button
              style="
                background-color: rgba(255, 255, 255, 0);
                border-style: none;
              "
            >
              <i class="material-icons">settings</i>
            </button>
          </div>
          <div class="boxBody d-flex flex-column align-content-start">
            <div class="fw-bold fs-4 d-flex justify-content-start">쇼핑몰</div>
            <div class="fs-6 d-flex justify-content-start">쇼핑몰형</div>
          </div>
          <div class="boxFooter">
            <button class="btn btn-outline-warning">자체 평가</button>
            <button class="btn btn-warning" style="color: white">
              평가 결과
            </button>
          </div>
        </div>
        <div class="flex-grow-1 text-center border">3</div>
        <div class="flex-grow-1 text-center border">4</div>
        <div class="flex-grow-1 text-center border">5</div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from "@/common/main/Nav.vue";
import Footer from "@/common/main/Footer.vue";
export default {
  components: { Nav, Footer },
  data() {
    return {};
  },
  mounted() {
    this.updateFooterPosition(); // 컴포넌트가 마운트될 때 스타일 업데이트
    window.addEventListener("resize", this.updateFooterPosition); // 창 크기 변경 시 스타일 업데이트
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateFooterPosition); // 컴포넌트가 파괴되기 전 이벤트 리스너 제거
  },
  methods: {
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
          backgroundColor: "#f8f8f8",
          padding: "20px",
        };
      } else {
        // 내용의 높이가 창 높이보다 클 때에는 푸터를 일반적인 위치로 설정
        this.footerStyle = {
          position: "static", // 또는 다른 기본 위치 값
        };
      }
    },
  },
};
</script>

<style scoped>
.material-icons {
  font-size: 40px;
  transform: rotate(0deg);
  transition: color 0.2s ease, background-color 0.2s ease, transform 0.3s ease;
  cursor: pointer;
  color: black;
}

.material-icons:hover {
  transform: rotate(90deg);
}
.boxHead {
  background-color: grey;
}
.boxBody {
  background-color: grey;
}
</style>
