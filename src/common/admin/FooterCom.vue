<template>
  <footer class="py-4 bg-light mt-5 preR" ref="contentWrapper">
    <div class="container-fluid px-4">
      <div class="d-flex align-items-center justify-content-between small">
        <div class="text-muted">
          &copy; 2023. merakl Inc. all rights reserved.
        </div>
        <div>
          <a href="#">Privacy Policy</a>
          &middot;
          <a href="#">Terms &amp; Conditions</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterCom",
  data() {
    return {
      footerStyle: {}, // 초기 스타일은 빈 객체로 설정
    };
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
    getContentHeight() {
      const contentWrapper = this.$refs.contentWrapper;
      if (contentWrapper) {
        return contentWrapper.offsetHeight;
      }
      return 0;
    },
  },
};
</script>

<style scoped>
@import url('/public/css/admin/styles.css');
</style>
