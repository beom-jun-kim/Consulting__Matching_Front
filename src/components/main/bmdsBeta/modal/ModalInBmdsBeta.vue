<template>
  <div class="black-bg">
    <div class="white-bgBeta">
      <button @click="$emit('close', false)" class="close-button">X</button>
      <!-- 사이드바 -->
      <div class="sidebarBeta">
        <div class="modalSideBarTitleBeta">
          The 7 Stages of Initial BM Build-up for Startup's
        </div>
        <div class="modalSideBarBtnListBeta">
          <div class="modalSideBarBtnListBeta2">
            <div class="d-flex flex-column justify-content-center align-items-center"
              style=" padding:.5rem;  border-radius:15px;"
              :style="{ 'border': activeBtnIndex === 'beta1Com' || activeBtnIndex === 'beta2Com' || activeBtnIndex === 'beta3Com' || activeBtnIndex === 'beta4Com' ? '2px dotted #fa9e1b' : '' }"
              @click="showSubMenu(1)">
              <label class="modalSideBarBtnBeta BtnBeta1"
                :class="{ active1: activeBtnIndex === 'beta1Com' || activeBtnIndex === 'beta2Com' || activeBtnIndex === 'beta3Com' || activeBtnIndex === 'beta4Com' }"
                @click="handleButtonClick('beta1Com')">
                <input type="radio" name="videoCategories1" id="btnbeta1Com" :checked="activeBtnIndex === 'beta1Com'" />
                기획탐색
              </label>
              <div class="subMenu1" v-if="showSubmenu[1]">
                <div class="submenuItem submenuItem1" :class="{ active1: activeBtnIndex === 'beta2Com' }"
                  @click="activeBtnIndex = 'beta2Com'">1-1 : 아이템이 속한 시장 이해</div>
              </div>
              <div class="subMenu1" v-if="showSubmenu[1]">
                <div class="submenuItem submenuItem1" :class="{ active1: activeBtnIndex === 'beta3Com' }"
                  @click="activeBtnIndex = 'beta3Com'">1-2 : 고객의 불편사항 파악</div>
              </div>
              <div class="subMenu1" v-if="showSubmenu[1]">
                <div class="submenuItem submenuItem1" :class="{ active1: activeBtnIndex === 'beta4Com' }"
                  @click="activeBtnIndex = 'beta4Com'">1-3 : 아이템 해결 가능성 확인</div>
              </div>
            </div>
            <div class="d-flex flex-column justify-content-center align-items-center"
              style=" padding:.5rem; border-radius:15px;"
              :style="{ 'border': activeBtnIndex === 'beta5Com' || activeBtnIndex === 'beta6Com' || activeBtnIndex === 'beta7Com' || activeBtnIndex === 'beta8Com' || activeBtnIndex === 'beta9Com' ? '2px dotted #fe7003' : '' }"
              @click="showSubMenu(2)">
              <label class="modalSideBarBtnBeta BtnBeta2"
                :class="{ active2: activeBtnIndex === 'beta5Com' || activeBtnIndex === 'beta6Com' || activeBtnIndex === 'beta7Com' || activeBtnIndex === 'beta8Com' || activeBtnIndex === 'beta9Com' }"
                @click="handleButtonClick('beta5Com')">
                <input type="radio" name="videoCategories1" id="btnbeta5Com" :checked="activeBtnIndex === 'beta5Com'" />
                아이디에이션<br />(아이템 선정)
              </label>
              <div class="subMenu2" v-if="showSubmenu[2]">
                <div class="submenuItem submenuItem2" :class="{ active2: activeBtnIndex === 'beta6Com' }"
                  @click="activeBtnIndex = 'beta6Com'">2-1 : 목표시장 선정 및 확인</div>
              </div>
              <div class="subMenu2" v-if="showSubmenu[2]">
                <div class="submenuItem submenuItem2" :class="{ active2: activeBtnIndex === 'beta7Com' }"
                  @click="activeBtnIndex = 'beta7Com'">2-2 : 고객 페르소나 설계</div>
              </div>
              <div class="subMenu2" v-if="showSubmenu[2]">
                <div class="submenuItem submenuItem2" :class="{ active2: activeBtnIndex === 'beta8Com' }"
                  @click="activeBtnIndex = 'beta8Com'">2-3 : POV(Point of View) 정의</div>
              </div>
              <div class="subMenu2" v-if="showSubmenu[2]">
                <div class="submenuItem submenuItem2" :class="{ active2: activeBtnIndex === 'beta9Com' }"
                  @click="activeBtnIndex = 'beta9Com'">2-4 : 아이템의 핵심가치 설계</div>
              </div>
            </div>
            <div class="d-flex flex-column justify-content-center align-items-center"
              style=" padding:.5rem; border-radius:15px;"
              :style="{ 'border': activeBtnIndex === 'beta10Com' || activeBtnIndex === 'beta11Com' || activeBtnIndex === 'beta12Com' || activeBtnIndex === 'beta13Com' || activeBtnIndex === 'beta14Com' || activeBtnIndex === 'beta15Com' ? '2px dotted #fc4331' : '' }"
              @click="showSubMenu(3)">
              <label class="modalSideBarBtnBeta BtnBeta3"
                :class="{ active3: activeBtnIndex === 'beta10Com' || activeBtnIndex === 'beta11Com' || activeBtnIndex === 'beta12Com' || activeBtnIndex === 'beta13Com' || activeBtnIndex === 'beta14Com' || activeBtnIndex === 'beta15Com' }"
                @click="handleButtonClick('beta10Com')">
                <input type="radio" name="videoCategories1" id="btnbeta10Com" :checked="activeBtnIndex === 'beta10Com'" />
                아이디어 컨셉<br />정의 및 개발
              </label>
              <div class="subMenu3" v-if="showSubmenu[3]">
                <div class="submenuItem submenuItem3" :class="{ active3: activeBtnIndex === 'beta11Com' }"
                  @click="activeBtnIndex = 'beta11Com'">3-1 : 고객관점 불편요소 탐색 및 원인분석1</div>
              </div>
              <div class="subMenu3" v-if="showSubmenu[3]">
                <div class="submenuItem submenuItem3" :class="{ active3: activeBtnIndex === 'beta12Com' }"
                  @click="activeBtnIndex = 'beta12Com'">3-1 : 고객관점 불편요소 탐색 및 원인분석2</div>
              </div>
              <div class="subMenu3" v-if="showSubmenu[3]">
                <div class="submenuItem submenuItem3" :class="{ active3: activeBtnIndex === 'beta13Com' }"
                  @click="activeBtnIndex = 'beta13Com'">3-2 : 해결안 설계1</div>
              </div>
              <div class="subMenu3" v-if="showSubmenu[3]">
                <div class="submenuItem submenuItem3" :class="{ active3: activeBtnIndex === 'beta14Com' }"
                  @click="activeBtnIndex = 'beta14Com'">3-2 : 해결안 설계2</div>
              </div>
              <div class="subMenu3" v-if="showSubmenu[3]">
                <div class="submenuItem submenuItem3" :class="{ active3: activeBtnIndex === 'beta15Com' }"
                  @click="activeBtnIndex = 'beta15Com'">3-3 : 4P(with 4C) Mix 설계</div>
              </div>
            </div>
            <div class="d-flex flex-column justify-content-center align-items-center"
              style=" padding:.5rem; border-radius:15px;"
              :style="{ 'border': activeBtnIndex === 'beta16Com' || activeBtnIndex === 'beta17Com' || activeBtnIndex === 'beta18Com' || activeBtnIndex === 'beta19Com' || activeBtnIndex === 'beta20Com' ? '2px dotted #3259a9' : '' }"
              @click="showSubMenu(4)">
              <label class="modalSideBarBtnBeta BtnBeta4"
                :class="{ active4: activeBtnIndex === 'beta16Com' || activeBtnIndex === 'beta17Com' || activeBtnIndex === 'beta18Com' || activeBtnIndex === 'beta19Com' || activeBtnIndex === 'beta20Com' }"
                @click="handleButtonClick('beta16Com')">
                <input type="radio" name="videoCategories1" id="btnbeta16Com" :checked="activeBtnIndex === 'beta16Com'" />
                제품 또는<br />서비스 개발
              </label>
              <div class="subMenu4" v-if="showSubmenu[4]">
                <div class="submenuItem submenuItem4" :class="{ active4: activeBtnIndex === 'beta17Com' }"
                  @click="activeBtnIndex = 'beta17Com'">4-1 : 제품 또는 서비스 정의</div>
              </div>
              <div class="subMenu4" v-if="showSubmenu[4]">
                <div class="submenuItem submenuItem4" :class="{ active4: activeBtnIndex === 'beta18Com' }"
                  @click="activeBtnIndex = 'beta18Com'">4-2 : 제품 또는 서비스 스케치</div>
              </div>
              <div class="subMenu4" v-if="showSubmenu[4]">
                <div class="submenuItem submenuItem4" :class="{ active4: activeBtnIndex === 'beta19Com' }"
                  @click="activeBtnIndex = 'beta19Com'">4-3 : 세부 추진 계획 수립1</div>
              </div>
              <div class="subMenu4" v-if="showSubmenu[4]">
                <div class="submenuItem submenuItem4" :class="{ active4: activeBtnIndex === 'beta20Com' }"
                  @click="activeBtnIndex = 'beta20Com'">4-3 : 세부 추진 계획 수립2</div>
              </div>
            </div>
            <div class="d-flex flex-column justify-content-center align-items-center"
              style=" padding:.5rem; border-radius:15px;"
              :style="{ 'border': activeBtnIndex === 'beta21Com' || activeBtnIndex === 'beta22Com' || activeBtnIndex === 'beta23Com' || activeBtnIndex === 'beta24Com' ? '2px dotted #0a6dc9' : '' }"
              @click="showSubMenu(5)">
              <label class="modalSideBarBtnBeta BtnBeta5"
                :class="{ active5: activeBtnIndex === 'beta21Com' || activeBtnIndex === 'beta22Com' || activeBtnIndex === 'beta23Com' || activeBtnIndex === 'beta24Com' }"
                @click="handleButtonClick('beta21Com')">
                <input type="radio" name="videoCategories1" id="btnbeta21Com" :checked="activeBtnIndex === 'beta21Com'" />
                MVP 및<br />고객 평가
              </label>
              <div class="subMenu5" v-if="showSubmenu[5]">
                <div class="submenuItem submenuItem5" :class="{ active5: activeBtnIndex === 'beta22Com' }"
                  @click="activeBtnIndex = 'beta22Com'">5-1 : MVP 설계 및 제작</div>
              </div>
              <div class="subMenu5" v-if="showSubmenu[5]">
                <div class="submenuItem submenuItem5" :class="{ active5: activeBtnIndex === 'beta23Com' }"
                  @click="activeBtnIndex = 'beta23Com'">5-2 : 시장 검증 시나리오 설계</div>
              </div>
              <div class="subMenu5" v-if="showSubmenu[5]">
                <div class="submenuItem submenuItem5" :class="{ active5: activeBtnIndex === 'beta24Com' }"
                  @click="activeBtnIndex = 'beta24Com'">5-3 : 시장 최적화 제품/서비스 구현</div>
              </div>
            </div>
            <div class="d-flex flex-column justify-content-center align-items-center"
              style=" padding:.5rem; border-radius:15px;"
              :style="{ 'border': activeBtnIndex === 'beta25Com' || activeBtnIndex === 'beta26Com' || activeBtnIndex === 'beta27Com' || activeBtnIndex === 'beta28Com' ? '2px dotted #0099d5' : '' }"
              @click="showSubMenu(6)">
              <label class="modalSideBarBtnBeta BtnBeta6"
                :class="{ active6: activeBtnIndex === 'beta25Com' || activeBtnIndex === 'beta26Com' || activeBtnIndex === 'beta27Com' || activeBtnIndex === 'beta28Com' }"
                @click="handleButtonClick('beta25Com')">
                <input type="radio" name="videoCategories1" id="btnbeta25Com" :checked="activeBtnIndex === 'beta25Com'" />
                시장 론칭
              </label>
              <div class="subMenu6" v-if="showSubmenu[6]">
                <div class="submenuItem submenuItem6" :class="{ active6: activeBtnIndex === 'beta26Com' }"
                  @click="activeBtnIndex = 'beta26Com'">6-1 : 인바운드/아웃바운드 채널 설계</div>
              </div>
              <div class="subMenu6" v-if="showSubmenu[6]">
                <div class="submenuItem submenuItem6" :class="{ active6: activeBtnIndex === 'beta27Com' }"
                  @click="activeBtnIndex = 'beta27Com'">6-2 : 제품 소개 및 판촉전략</div>
              </div>
              <div class="subMenu6" v-if="showSubmenu[6]">
                <div class="submenuItem submenuItem6" :class="{ active6: activeBtnIndex === 'beta28Com' }"
                  @click="activeBtnIndex = 'beta28Com'">6-3 : 수익구조 및 가격전략 수립</div>
              </div>
            </div>
            <div class="d-flex flex-column justify-content-center align-items-center"
              style=" padding:.5rem; border-radius:15px;"
              :style="{ 'border': activeBtnIndex === 'beta29Com' || activeBtnIndex === 'beta30Com' || activeBtnIndex === 'beta31Com' || activeBtnIndex === 'beta32Com' ? '2px dotted #28b2cd' : '' }"
              @click="showSubMenu(7)">
              <label class="modalSideBarBtnBeta BtnBeta7"
                :class="{ active7: activeBtnIndex === 'beta29Com' || activeBtnIndex === 'beta30Com' || activeBtnIndex === 'beta31Com' || activeBtnIndex === 'beta32Com' }"
                @click="handleButtonClick('beta29Com')">
                <input type="radio" name="videoCategories1" id="btnbeta29Com" :checked="activeBtnIndex === 'beta29Com'" />
                고객 개발 및<br />시장 확장
              </label>
              <div class="subMenu7" v-if="showSubmenu[7]">
                <div class="submenuItem submenuItem7" :class="{ active7: activeBtnIndex === 'beta30Com' }"
                  @click="activeBtnIndex = 'beta30Com'">7-1 : 고객 반응 데이터 지표 설계</div>
              </div>
              <div class="subMenu7" v-if="showSubmenu[7]">
                <div class="submenuItem submenuItem7" :class="{ active7: activeBtnIndex === 'beta31Com' }"
                  @click="activeBtnIndex = 'beta31Com'">7-2 : 고객 반응 데이터 수집 및 분석</div>
              </div>
              <div class="subMenu7" v-if="showSubmenu[7]">
                <div class="submenuItem submenuItem7" :class="{ active7: activeBtnIndex === 'beta32Com' }"
                  @click="activeBtnIndex = 'beta32Com'">7-3 : 성장을 위한 준비 및 계획 수립</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="margin: 0 3rem">
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
  props: {
    screenName: String,
    indexNum: Number,
  },
  data() {
    return {
      showSubmenu: [false, false, false, false, false, false, false, false],
      activeBtnIndex: '',
      bmds: [
        "기획탐색",
        "아이디에이션(아이템 선정)",
        "아이디어 컨셉 정의 및 개발",
        "제품 또는 서비스 개발",
        "MVP 및 고객 평가",
        "시장 론칭",
        "고객 개발 및 시장 확장",
      ],
    };
  },
  components: {
    ...betaComponents,
  },
  computed: {
    selectedComponent() {
      return `${this.activeBtnIndex}`;
    },
  },
  methods: {

    handleButtonClick(fileName) {
      this.activeBtnIndex = fileName;
    },
    showSubMenu(index) {
      this.$set(this.showSubmenu, index, !this.showSubmenu[index]);
      this.showSubmenu = this.showSubmenu.map((value, i) => i === index);
    },
    modalScreen(screen) {
      this.activeBtnIndex = screen;
    }
  },
  mounted() {
    this.modalScreen(this.screenName);
    this.showSubMenu(this.indexNum);
  }
};
</script>

<style>
@import url("../../../../../public/css/main/styles.css");
</style>
