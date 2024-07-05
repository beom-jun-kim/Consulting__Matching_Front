<template>
  <div>
    <Nav />
    <!-- <div class="py-5" style="height: 7.5rem; ">
      <div class="container"></div>
    </div> -->
    <!-- 컴포넌트 영역 -->
    <div class="component-area" style="width: 100%">
      <!-- state 값에 따라 동적으로 컴포넌트 렌더링 -->
      <component :is="currentComponent" @data="receiveData" />
      <!-- 버튼 컨테이너에 flex 속성 추가 -->
      <div class="bm_location preM">
        <button id="bm_basic" @click="goToTest2">
          <span class="beginText">BMDS 시작하기</span>
        </button>
        <!-- <button id="bm_buildUp" class="disabled-button">
          Premium .ver<br /><span class="beginText">시작하기</span>
        </button>
        <button id="bm_premium" class="disabled-button">
          LivingLab .ver<br /><span class="beginText">시작하기</span>
        </button> -->
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
/*eslint-disable*/
import Nav from "@/common/main/Nav.vue";
import Footer from "@/common/main/Footer.vue";
import BMLearning from "@/components/main/BMLearning.vue";
import Bmds1Com from "@/components/main/bmdsBasic/Bmds1Com.vue";
export default {
  name: "Header",
  components: {
    Nav,
    Footer,
  },
  data() {
    return {
      state: "BMLearning",
      footerStyle: {}, // 초기 스타일은 빈 객체로 설정
    };
  },
  computed: {
    currentComponent() {
      // state 값에 따라 렌더할 컴포넌트 결정
      if (this.state === "BMLearning") {
        return BMLearning;
      } else if (this.state === "bmds1List") {
        return Bmds1Com;
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
    receiveData(state) {
      this.state = state.state;
    },
    goToTest2() {
      this.$router.push({ name: "BmdsBuildupListView" });
    },
  },
};
</script>
<style scoped>
/* #bm_basic {
  margin-right: 1rem;
  width: 23rem;
  height: 5rem;
  line-height: 28px;
  padding: auto 70px;
  font-size: 26px;
  color: #fff;
  background: linear-gradient(45deg, #8a7eaf, #6a5a9b);
  border-radius: 15px;
  border: 1px solid #644d9d;
  transition: all 0.3s;
  cursor: pointer;
} */

#bm_buildUp {
  margin: auto;
  width: 20rem;
  height: 5rem;
  line-height: 28px;
  padding: auto 70px;
  font-size: 26px;
  color: #fff;
  background: linear-gradient(45deg, #6a5a9b, #4a3882);
  border-radius: 15px;
  border: 1px solid #644d9d;
  transition: all 0.3s;
  cursor: pointer;
}

#bm_premium {
  margin-left: 1rem;
  width: 20rem;
  height: 5rem;
  line-height: 28px;
  padding: auto 70px;
  font-size: 26px;
  color: #fff;
  background: linear-gradient(45deg, #4a3882, #3c247e);
  border-radius: 15px;
  border: 1px solid #644d9d;
  transition: all 0.3s;
  cursor: pointer;
}

.bm_location {
  max-width: 1024px;
  margin: 30px auto;
}

.bm_location button {
  width: 100%;
  background: linear-gradient(45deg, #8a7eaf, #6a5a9b);
  border-radius: 15px;
  border: 1px solid #644d9d;
  color: #fff;
  padding: 15px 0;
}

.beginText {
  font-size: 1.3rem;
}

.disabled-button {
  position: relative;
}

.disabled-button::after {
  content: "준비 중";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  font-size: 1.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: not-allowed;
  border-radius: 15px;
}
</style>
