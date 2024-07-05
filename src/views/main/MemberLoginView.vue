<template>
  <div>
    <Nav />
    <MemberLogin ref="memberLogin" />
    <Footer />
  </div>
</template>

<script>
import Nav from "@/common/main/Nav.vue";
import MemberLogin from "@/components/main/MemberLogin.vue";
import Footer from '@/common/main/Footer.vue'
export default {
  name: "MemberLoginView",
  components: { Nav, MemberLogin, Footer },
  data() {
    return {
      footerStyle: {} // 초기 스타일은 빈 객체로 설정
    };
  },
  mounted() {
    this.updateFooterPosition(); // 컴포넌트가 마운트될 때 스타일 업데이트
    window.addEventListener('resize', this.updateFooterPosition); // 창 크기 변경 시 스타일 업데이트
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateFooterPosition); // 컴포넌트가 파괴되기 전 이벤트 리스너 제거
  },
  methods: {
    updateFooterPosition() {
      const windowHeight = window.innerHeight;
      const contentHeight = this.getContentHeight();

      if (contentHeight < windowHeight) {
        // 내용의 높이가 창 높이보다 작을 때만 푸터를 고정
        this.footerStyle = {
          position: 'fixed',
          left: 0,
          bottom: 0,
          width: '100%',
          backgroundColor: '#f8f8f8',
          padding: '20px'
        };
      } else {
        // 내용의 높이가 창 높이보다 클 때에는 푸터를 일반적인 위치로 설정
        this.footerStyle = {
          position: 'static' // 또는 다른 기본 위치 값
        };
      }
    },
    getContentHeight() {
      const memberLoginElement = this.$refs.memberLogin.$el;
      if (memberLoginElement) {
        return memberLoginElement.offsetHeight;
      }
      return 0;
    }
  }
};
</script>

<style></style>
