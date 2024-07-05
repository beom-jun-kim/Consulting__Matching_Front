<template>
  <div class="black-bg">
    <div class="white-bg">
      <button @click="$emit('close', false)" class="close-button">X</button>
      <!-- 사이드바 -->
      <div class="sidebarBeta">
        <div class="modalSideBarTitle">
          The 7 Stages of Initial BM Build-up for Startup's
        </div>
        <div class="modalSideBarBtnListBeta">
          <div class="modalSideBarBtnListBeta2">
            <div v-for="(bm, i) in bmds" :key="i">
              <label :for="'btn' + i" class="modalSideBarBtnBeta" :class="{ active: activeBtnIndex === i }"
                @click="handleButtonClick(i)" :checked="activeBtnIndex === i || i === 0">
                <input type="radio" name="videoCategories" :id="'btn' + i" :checked="activeBtnIndex === i" />
                {{ bm }}
              </label>
            </div>
          </div>
        </div>
      </div>
      <div style="margin: 0 3rem">
        <!-- Dynamic component rendering based on activeBtnIndex -->
        <component :is="selectedComponent" />
      </div>
    </div>
  </div>
</template>

<script>
const betaComponents = {};

for (let i = 1; i <= 32; i++) {
  betaComponents[`beta${i}Com`] = () =>
    import(`@/components/main/bmdsBeta/modal/beta${i}Com.vue`);
}

export default {
  name: "BetaBmds",
  data() {
    return {
      activeBtnIndex: 0,
      bmds: [
        "기획탐색",
        "아이템이 속한 시장 이해",
        "고객의 불편사항 파악",
        "아이템 해결 가능성 확인",
        "아이디에이션(아이템 선정)",
        "목표시장 선정 및 확인",
        "고객 페르소나 설계",
        "POV(Point of View) 정의",
        "아이템의 핵심가치 설계",
        "아이디어 컨셉 정의 및 개발",
        "고객관점 불편요서 탐색 및 원인 분석1",
        "고객관점 불편요서 탐색 및 원인 분석2",
        "해결안 설계1",
        "헤결안 설계2",
        "4P(with 4C) Mix 설계",
        "제품 또는 서비스 개발",
        "제품 또는 서비스 정의",
        "제품 또는 서비스 스케치",
        "세부 추진 계획 수립1",
        "세부 추진 계획 수립2",
        "MVP 및 고객 평가",
        "MVP 설계 및 제작",
        "시장 검증 시나리오 설계",
        "시장 최적화 제품/서비스 구현",
        "시장 론칭",
        "인바운드/아웃바운드 채널 설계",
        "제품 소개 및 판촉 전략",
        "수익구조 및 가격전략 수립",
        "고객 개발 및 시장 확장",
        "고객 반응 데이터 지표 설계",
        "고객 반응 데이터 수집 및 분석",
        "성장을 위한 준비 및 계획 수립",
      ],
    };
  },
  components: {
    ...betaComponents,
  },
  computed: {
    selectedComponent() {
      // Generate the component name based on activeBtnIndex
      return `beta${this.activeBtnIndex + 1}Com`;
    },
  },
  methods: {
    handleButtonClick(index) {
      this.activeBtnIndex = index;
    },
  },
};
</script>

<style>
@import url("../../../../../public/css/main/styles.css");
</style>
