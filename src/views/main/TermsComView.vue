<template>
  <div>
    <Nav />
    <div ref="memberLogin">
      <TermPrivacyCom />
    </div>
    <Footer />
  </div>
</template>

<script>
/*eslint-disable*/
import Nav from '@/common/main/Nav.vue'
import TermPrivacyCom from '@/components/main/TermPrivacyCom.vue';
import Footer from '@/common/main/Footer.vue'
export default {
  name: "Header",
  components: {
    Nav, TermPrivacyCom, Footer
  },
  data() {
    return {
      footerStyle: {}, // 초기 스타일은 빈 객체로 설정
    };
  },
  // 컴포넌트의 높이가 화면보다 낮을때 푸터가 하단에 고정이 안되는것을 고정되게함.
  mounted() {
    this.updateFooterPosition(); // 컴포넌트가 마운트될 때 스타일 업데이트
    window.addEventListener('resize', this.updateFooterPosition); // 창 크기 변경 시 스타일 업데이트
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateFooterPosition); // 컴포넌트가 파괴되기 전 이벤트 리스너 제거
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
          position: 'fixed',
          left: 0,
          bottom: 0,
          width: '100%',
          backgroundColor: '#444',
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
