<style>
#app {
  background: #fff;
}
</style>
<template>
  <div
    class="listDetailWrap d-flex justify-content-center mb-5 flex-wrap container mx-auto"
    style="min-height: 50rem; margin: 4rem 0 0 0"
  >
    <img
      src="../../../../public/img/main/bmdsBuildupDetailImg.png"
      alt="bmdsBuildupDetailImg"
    />
    <div
      class="d-flex justify-content-between"
      style="width: 100%; margin: 2rem 0"
    >
      <div class="opacityZero">빈공간임</div>
      <button class="preM prettyBtn" @click="preView" style="height: 3.5rem">
        <img style="width:28px;margin-right: 5px" src="../../../../public/img/main/find_icon.png" alt="나의 BM설계 전체보기"> 나의 BM설계 전체보기
      </button>
      <button type="button" class="preM prettyBtn2" @click="buildupList">
        <img style="width:28px;margin-right: 5px" src="../../../../public/img/main/back_icon.png" alt="뒤로가기">뒤로가기
      </button>
    </div>
    <div class="d-flex justify-content-between mb-5" style="width: 92rem">
      <div
        class="stepBtnWrap d-flex justify-content-between w-100 align-content-center gap-3"
      >
        <div class="stepBtn" @click="updateStep(true, 'step10Com', 1)">
          <div class="">
            <div class="card_top">
              <img src="../../../../public/img/main/mybmIcon01.png" alt="" />
              STEP 01
              <bold>기회탐색</bold>
            </div>
            <div class="card-body">
              <p>
                아이디어가 속한 시장의 <br />
                환경분석, 고객의 불편사항, <br />
                문제해결 가능성 확인
              </p>
              <ul>
                <li>1-1. 아이템이 속한 시장 이해</li>
                <li>1-2. 고객의 불편사항 파악</li>
                <li>1-3. 아이템 해결 가능성 확인</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="stepBtn" @click="updateStep(true, 'step20Com', 2)">
          <div class="">
            <div class="card_top">
              <img src="../../../../public/img/main/mybmIcon02.png" alt="" />
              STEP 02
              <bold>아이디에이션 <small>(아이템 선정)</small></bold>
            </div>
            <div class="card-body">
              <p>
                목표시장 정의, 시장현황 파악,<br />
                STP(시장세분화,타켓팅수립,<br />
                고객 페르소나 정의
              </p>
              <ul>
                <li>2-1. 목표시장 선정 및 확인</li>
                <li>2-2. 고객 페르소나 확인</li>
                <li>2-3. Point of View 정의</li>
                <li>2-4. 아이템 핵심가치 설계</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="stepBtn" @click="updateStep(true, 'step30Com', 3)">
          <div class="">
            <div class="card_top">
              <img src="../../../../public/img/main/mybmIcon03.png" alt="" />
              STEP 03
              <bold
                >아이디어 컨셉 <br />
                정의 및 구체화</bold
              >
            </div>
            <div class="card-body">
              <p>
                고객불편요소 정의, <br />
                해결안 설계, <br />
                시장 적합성과 적응성 설계
              </p>
              <ul>
                <li>3-1. 고객관점 불편요소 탐색 및 원인분석</li>
                <li>3-2. 해결안 설계</li>
                <li>3-3. 시장 적합성 및 적응성 설계</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="stepBtn" @click="updateStep(true, 'step40Com', 4)">
          <div class="">
            <div class="card_top">
              <img src="../../../../public/img/main/mybmIcon04.png" alt="" />
              STEP 04
              <bold
                >제품 또는 <br />
                서비스 개발</bold
              >
            </div>
            <div class="card-body">
              <p>
                제품/서비스의 <br />
                핵심요소 정의, <br />
                세부추진 일정 수립
              </p>
              <ul>
                <li>4-1. 제품(서비스)고객 핵심요소 정의</li>
                <li>4-2. 제품(서비스)스케치</li>
                <li>4-3. 세부추진 계획 수립</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="stepBtn" @click="updateStep(true, 'step50Com', 5)">
          <div class="">
            <div class="card_top">
              <img src="../../../../public/img/main/mybmIcon05.png" alt="" />
              STEP 05
              <bold
                >MVP 및<br />
                고객평가</bold
              >
            </div>
            <div class="card-body">
              <p>
                시장적합성을 높이기,
                <br />
                시장검증 시나리오 설계
                <br />
                시장 최적화 제품/서비스 구현
              </p>
              <ul>
                <li>5-1. MVP설계 및 제작</li>
                <li>5-2. 시장검증 시나리오 설계, 고객반응 평가</li>
                <li>5-3. 시장최적화 제품/서비스 구현</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="stepBtn" @click="updateStep(true, 'step60Com', 6)">
          <div class="">
            <div class="card_top">
              <img src="../../../../public/img/main/mybmIcon06.png" alt="" />
              STEP 06
              <bold>시장 론칭</bold>
            </div>
            <div class="card-body">
              <p>
                인/아웃바운드 채널 설계
                <br />
                판촉전략,가격전략,
                <br />
                수익구조 설계
              </p>
              <ul>
                <li>6-1. 인/아웃바운드 채널 설계 및 판촉전략</li>
                <li>6-2. 제품(서비스)소개</li>
                <li>6-3. 수익구조 및 가격전략 수립</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="stepBtn" @click="updateStep(true, 'step70Com', 7)">
          <div class="">
            <div class="card_top">
              <img src="../../../../public/img/main/mybmIcon07.png" alt="" />
              STEP 07
              <bold
                >고객 개발 및 <br />
                시장 확장</bold
              >
            </div>
            <div class="card-body">
              <p>
                고객 반응 데이터 확인
                <br />
                고객 반응 데이터 수집 및 분석
                <br />
                성장을 위한 준비 및 계획
              </p>
              <ul>
                <li>7-1. 고객반응 데이터 지표 설계</li>
                <li>7-2. 고객 반응 데이터 수집 및 분석</li>
                <li>7-3. 성장을 위한 준비 및 비즈니스로드맵 계획 수립</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="buildupImg">
        <div class="d-flex justify-content-center align-items-center">
          <div
            class="d-flex justify-content-between"
            style="width: 91%; height: 3.5rem; margin: 6rem 0 0 0"
          >
            <div class="opacityZero">빈공간임</div>
            <button
              class="preM prettyBtn"
              @click="preView"
              style="height: 3.5rem"
            >
              전체보기
            </button>
            <button type="button" class="preM prettyBtn2" @click="buildupList">
              뒤로가기
            </button>
          </div>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <div style="width: 26rem; height: 43rem; padding: 0 1rem 3rem 3rem">
            <div
              class="d-flex flex-column justify-content-start align-items-center"
              style="width: 100%; height: 100%"
            >
              <div
                class="stepBtn step1"
                @mouseover="showSubStep(0)"
                @mouseleave="hideSubStep(0)"
                @click="updateSteptrue, 'step10Com', 1"
              >
                <div class="sub-step1" v-show="hoveredIndex === 0">
                  <div
                    class="sub-step1-item"
                    @click="updateStep(true, 'step11Com', 1)"
                  >
                    1-1. 아이템이 속한 시장 이해1
                  </div>
                  <div
                    class="sub-step1-item"
                    @click="updateStep(true, 'step12Com', 1)"
                  >
                    1-1. 아이템이 속한 시장 이해2
                  </div>
                  <div
                    class="sub-step1-item"
                    @click="updateStep(true, 'step13Com', 1)"
                  >
                    1-2. 고객의 불편시장 파악1
                  </div>
                  <div
                    class="sub-step1-item"
                    @click="updateStep(true, 'step14Com', 1)"
                  >
                    1-2. 고객의 불편시장 파악2
                  </div>
                  <div
                    class="sub-step1-item"
                    @click="updateStep(true, 'step15Com', 1)"
                  >
                    1-3. 아이템 해결 가능성 확인
                  </div>
                </div>
              </div>
              <div
                class="stepBtn step2 mt-3"
                @mouseover="showSubStep(1)"
                @mouseleave="hideSubStep(1)"
                @click="updateStep(true, 'step20Com', 2)"
              >
                <div class="sub-step2" v-show="hoveredIndex === 1">
                  <div
                    class="sub-step2-item"
                    @click="updateStep(true, 'step21Com', 2)"
                  >
                    2-1. 목표시장 선정 및 확인
                  </div>
                  <div
                    class="sub-step2-item"
                    @click="updateStep(true, 'step22Com', 2)"
                  >
                    2-2. 고객 페르소나 설계(B2C)
                  </div>
                  <div
                    class="sub-step2-item"
                    @click="updateStep(true, 'step23Com', 2)"
                  >
                    2-2. 고객 페르소나 설계(B2B)
                  </div>
                  <div
                    class="sub-step2-item"
                    @click="updateStep(true, 'step24Com', 2)"
                  >
                    2-3. POV(Point of View)정의
                  </div>
                  <div
                    class="sub-step2-item"
                    @click="updateStep(true, 'step25Com', 2)"
                  >
                    2-4. 아이템의 핵심가치 설계
                  </div>
                </div>
              </div>
              <div
                class="stepBtn step3 mt-3"
                @mouseover="showSubStep(2)"
                @mouseleave="hideSubStep(2)"
                @click="updateStep(true, 'step30Com', 3)"
              >
                <div class="sub-step3" v-show="hoveredIndex === 2">
                  <div
                    class="sub-step3-item"
                    @click="updateStep(true, 'step31Com', 3)"
                  >
                    3-1. 고객관점 불편요소<br />(Pain point)탐색 및 원인분석1
                  </div>
                  <div
                    class="sub-step3-item"
                    @click="updateStep(true, 'step32Com', 3)"
                  >
                    3-1. 고객관점 불편요소<br />(Pain point)탐색 및 원인분석2
                  </div>
                  <div
                    class="sub-step3-item"
                    @click="updateStep(true, 'step33Com', 3)"
                  >
                    3-1. 고객관점 불편요소<br />(Pain point)탐색 및 원인분석3
                  </div>
                  <div
                    class="sub-step3-item"
                    @click="updateStep(true, 'step34Com', 3)"
                  >
                    3-2. 해결안 설계1
                  </div>
                  <div
                    class="sub-step3-item"
                    @click="updateStep(true, 'step35Com', 3)"
                  >
                    3-2. 해결안 설계2
                  </div>
                  <div
                    class="sub-step3-item"
                    @click="updateStep(true, 'step36Com', 3)"
                  >
                    3-3. 시장 적합성(KBF) 및<br />적응성 설계(4P)1
                  </div>
                  <div
                    class="sub-step3-item"
                    @click="updateStep(true, 'step37Com', 3)"
                  >
                    3-3. 시장 적합성(KBF) 및<br />적응성 설계(4P)2
                  </div>
                </div>
              </div>
              <div
                class="stepBtn step4 mt-3"
                @mouseover="showSubStep(3)"
                @mouseleave="hideSubStep(3)"
                @click="updateStep(true, 'step40Com', 4)"
              >
                <div class="sub-step4" v-show="hoveredIndex === 3">
                  <div
                    class="sub-step4-item"
                    @click="updateStep(true, 'step41Com', 4)"
                  >
                    4-1. 제품(서비스)<br />핵심요소 정의1
                  </div>
                  <div
                    class="sub-step4-item"
                    @click="updateStep(true, 'step42Com', 4)"
                  >
                    4-1. 제품(서비스)<br />핵심요소 정의2
                  </div>
                  <div
                    class="sub-step4-item"
                    @click="updateStep(true, 'step42_1Com', 4)"
                  >
                    4-1. 제품(서비스)<br />핵심요소 정의3
                  </div>
                  <div
                    class="sub-step4-item"
                    @click="updateStep(true, 'step43Com', 4)"
                  >
                    4-2. 제품 또는 서비스 스케치
                  </div>
                  <div
                    class="sub-step4-item"
                    @click="updateStep(true, 'step44Com', 4)"
                  >
                    4-3. 세부 추진 계획 수립1
                  </div>
                  <div
                    class="sub-step4-item"
                    @click="updateStep(true, 'step45Com', 4)"
                  >
                    4-3. 세부 추진 계획 수립2
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style="width: 27rem; height: 44rem; padding: 0 4rem 5rem 0rem">
            <div
              class="d-flex flex-column justify-content-start align-items-center"
              style="width: 100%; height: 100%"
            >
              <div
                class="stepBtn step7"
                style="margin-top: 0.5rem"
                @mouseover="showSubStep(4)"
                @mouseleave="hideSubStep(4)"
                @click="updateStep(true, 'step70Com', 5)"
              >
                <div class="sub-step7" v-show="hoveredIndex === 4">
                  <div
                    class="sub-step7-item"
                    @click="updateStep(true, 'step71Com', 5)"
                  >
                    7-1. 고객 반응 데이터<br />지표 설계
                  </div>
                  <div
                    class="sub-step7-item"
                    @click="updateStep(true, 'step72Com', 5)"
                  >
                    7-2. 고객 반응 데이터<br />수집 및 분석1
                  </div>
                  <div
                    class="sub-step7-item"
                    @click="updateStep(true, 'step73Com', 5)"
                  >
                    7-2. 고객 반응 데이터<br />수집 및 분석2
                  </div>
                  <div
                    class="sub-step7-item"
                    @click="updateStep(true, 'step74Com', 5)"
                  >
                    7-2. 고객 반응 데이터<br />수집 및 분석3
                  </div>
                  <div
                    class="sub-step7-item"
                    @click="updateStep(true, 'step75Com', 5)"
                  >
                    7-2. 고객 반응 데이터<br />수집 및 분석4
                  </div>
                  <div
                    class="sub-step7-item"
                    @click="updateStep(true, 'step76Com', 5)"
                  >
                    7-3. 성장을 위한 준비 및<br />비즈니스 로드맵 계획 수립
                  </div>
                </div>
              </div>
              <div
                class="stepBtn step6"
                style="margin-top: 5rem"
                @mouseover="showSubStep(5)"
                @mouseleave="hideSubStep(5)"
                @click="updateStep(true, 'step61Com', 6)"
              >
                <div class="sub-step6" v-show="hoveredIndex === 5">
                  <div
                    class="sub-step6-item"
                    @click="updateStep(true, 'step62Com', 6)"
                  >
                    6-1. 인바운드/아웃바운드<br />채널 설계
                  </div>
                  <div
                    class="sub-step6-item"
                    @click="updateStep(true, 'step63Com', 6)"
                  >
                    6-2. 제품/서비스 소개<br />및 판촉전략
                  </div>
                  <div
                    class="sub-step6-item"
                    @click="updateStep(true, 'step64Com', 6)"
                  >
                    6-3. 수익구조 및 가격전략 수립
                  </div>
                </div>
              </div>
              <div
                class="stepBtn step5"
                style="margin-top: 5.5rem"
                @mouseover="showSubStep(6)"
                @mouseleave="hideSubStep(6)"
                @click="updateStep(true, 'step50Com', 7)"
              >
                <div class="sub-step5" v-show="hoveredIndex === 6">
                  <div
                    class="sub-step5-item"
                    @click="updateStep(true, 'step51Com', 7)"
                  >
                    5-1. MVP 설계 및 제작1
                  </div>
                  <div
                    class="sub-step5-item"
                    @click="updateStep(true, 'step52Com', 7)"
                  >
                    5-1. MVP 설계 및 제작2
                  </div>
                  <div
                    class="sub-step5-item"
                    @click="updateStep(true, 'step53Com', 7)"
                  >
                    5-1. MVP 설계 및 제작3
                  </div>
                  <div
                    class="sub-step5-item"
                    @click="updateStep(true, 'step54Com', 7)"
                  >
                    5-1. MVP 설계 및 제작4
                  </div>
                  <div
                    class="sub-step5-item"
                    @click="updateStep(true, 'step55Com', 7)"
                  >
                    5-2. 시장 검증 시나리오 설계<br />및 고객 반응 평가1
                  </div>
                  <div
                    class="sub-step5-item"
                    @click="updateStep(true, 'step56Com', 7)"
                  >
                    5-2. 시장 검증 시나리오 설계<br />및 고객 반응 평가2
                  </div>
                  <div
                    class="sub-step5-item"
                    @click="updateStep(true, 'step57Com', 7)"
                  >
                    5-2. 시장 검증 시나리오 설계<br />및 고객 반응 평가3
                  </div>
                  <div
                    class="sub-step5-item"
                    @click="updateStep(true, 'step58Com', 7)"
                  >
                    5-2. 시장 검증 시나리오 설계<br />및 고객 반응 평가4
                  </div>
                  <div
                    class="sub-step5-item"
                    @click="updateStep(true, 'step58_1Com', 7)"
                  >
                    5-2. 시장 검증 시나리오 설계<br />및 고객 반응 평가5
                  </div>
                  <div
                    class="sub-step5-item"
                    @click="updateStep(true, 'step59Com', 7)"
                  >
                    5-3. 시장 최적화<br />제품/서비스 구현1
                  </div>
                  <div
                    class="sub-step5-item"
                    @click="updateStep(true, 'step60Com', 7)"
                  >
                    5-3. 시장 최적화<br />제품/서비스 구현2
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
    <div class="modal-wrapper" v-if="showModal">
      <ModalInBmdsBuildup
        @close="showModal = false"
        :screenName="screen"
        :indexNum="index"
      />
    </div>
  </div>
</template>

<script>
import ModalInBmdsBuildup from "./modal/ModalInBmdsBuildup.vue";
export default {
  components: {
    ModalInBmdsBuildup,
  },
  data() {
    return {
      showModal: false,
      hoveredIndex: null,
      userName: "Kevin",
      screen: "", // 모달창으로 props보낼때 쓰는 이름
      index: "",
    };
  },
  methods: {
    buildupList() {
      this.$router.push(`/main/bmds/buildup/list`);
    },
    preView() {
      this.$router.push(`/main/bmds/buildup/preView/${this.$route.params.id}`);
    },
    showSubStep(index) {
      this.hoveredIndex = index;
      const stepBtns = document.querySelectorAll(".stepBtn");
      stepBtns.forEach((e, i) => {
        if (i === index) {
          if (i >= 4) {
            e.style.boxShadow = "-4px 4px 4px rgba(0,0,0,0.5)";
          } else {
            e.style.boxShadow = "4px 4px 4px rgba(0,0,0,0.5)";
          }
        } else {
          e.style.boxShadow = "none";
        }
      });
    },
    hideSubStep(index) {
      this.hoveredIndex = null;
      const stepBtns2 = document.querySelectorAll(".stepBtn");
      stepBtns2.forEach((e, i) => {
        if (i === index) {
          e.style.boxShadow = "none";
        } else {
          e.style.boxShadow = "none";
        }
      });
    },
    updateStep(value, screenName, index) {
      this.showModal = value;
      this.screen = screenName;
      this.index = index;
      // location.href = `/main/MyBmDetail/${id}`;
    },
  },
};
</script>

<style scoped>
@import url("../../../../public/css/main/styles.css");
</style>
