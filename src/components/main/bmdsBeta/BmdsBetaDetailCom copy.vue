<template>
  <div class="d-flex justify-content-center mb-5" style="min-height: 50rem; margin: 5rem 0 0 0;">
    <div class="d-flex justify-content-between mb-5" style="width: 93rem; height: 37rem;">
      <div class="buildupImg">
        <div class="d-flex flex-column justify-content-between align-items-center" style="width: 93rem; height: 37rem;">
          <div class="d-flex justify-content-end align-items-center" style="width: 83rem; height: 5.5rem; ">
            <div class="d-flex justify-content-between align-items-center"
              style="width: 30.5rem; height: 3rem; font-size:25px; margin:0 5rem 0 0;">
              <div class="d-flex justify-content-end align-items-center mx-3" style="font-size:25px; font-weight:600;">
                (Beta version.)
              </div>
              <div>
                {{
                  userName
                }}님 안녕하세요!
              </div>
            </div>
          </div>
          <div class="d-flex" style="width: 92rem; height: 6rem;">
            <button class="basicBtn" @mouseover="showSubMenu(0)" @mouseleave="hideSubMenu(0)"
              @click="updateModal(true, 'beta1Com')">
              <div class="sub-menu1" v-show="hoveredIndex === 0">
                <div class="sub-menu1-item" @click="updateModal(true, 'beta2Com')">1-1. 아이템이 속한 시장 이해</div>
                <div class="sub-menu1-item" @click="updateModal(true, 'beta3Com')">1-2. 고객의 불편시장 파악</div>
                <div class="sub-menu1-item" @click="updateModal(true, 'beta4Com')">1-3. 아이템 해결 가능성 확인</div>
              </div>
            </button>
            <button class="basicBtn" @mouseover="showSubMenu(1)" @mouseleave="hideSubMenu(1)"
              @click="updateModal(true, 'beta5Com')">
              <div class="sub-menu2" v-show="hoveredIndex === 1">
                <div class="sub-menu2-item" @click="updateModal(true, 'beta6Com')">2-1. 목표시장 선정 및 확인</div>
                <div class="sub-menu2-item" @click="updateModal(true, 'beta7Com')">2-2. 고객 페르소나 설계</div>
                <div class="sub-menu2-item" @click="updateModal(true, 'beta8Com')">2-3. POV(Point of View)정의</div>
                <div class="sub-menu2-item" @click="updateModal(true, 'beta9Com')">2-4. 아이템의 핵심가치 설계</div>
              </div>
            </button>
            <button class="basicBtn" @mouseover="showSubMenu(2)" @mouseleave="hideSubMenu(2)"
              @click="updateModal(true, 'beta10Com')">
              <div class="sub-menu3" v-show="hoveredIndex === 2">
                <div class="sub-menu3-item" @click="updateModal(true, 'beta11Com')">3-1. 고객관점 불편요소 탐색 및 원인분석1</div>
                <div class="sub-menu3-item" @click="updateModal(true, 'beta12Com')">3-1. 고객관점 불편요소 탐색 및 원인분석2</div>
                <div class="sub-menu3-item" @click="updateModal(true, 'beta13Com')">3-2. 해결안 설계1</div>
                <div class="sub-menu3-item" @click="updateModal(true, 'beta14Com')">3-2. 해결안 설계2</div>
                <div class="sub-menu3-item" @click="updateModal(true, 'beta15Com')">3-3. 4P(with 4C) Mix 설계</div>
              </div>
            </button>
            <button class="basicBtn" @mouseover="showSubMenu(3)" @mouseleave="hideSubMenu(3)"
              @click="updateModal(true, 'beta16Com')">
              <div class="sub-menu4" v-show="hoveredIndex === 3">
                <div class="sub-menu4-item" @click="updateModal(true, 'beta17Com')">4-1. 제품 또는 서비스 정의</div>
                <div class="sub-menu4-item" @click="updateModal(true, 'beta18Com')">4-2. 제품 또는 서비스 스케치</div>
                <div class="sub-menu4-item" @click="updateModal(true, 'beta19Com')">4-3. 세부 추진 계획 수립1</div>
                <div class="sub-menu4-item" @click="updateModal(true, 'beta20Com')">4-3. 세부 추진 계획 수립2</div>
              </div>
            </button>
            <button class="basicBtn" @mouseover="showSubMenu(4)" @mouseleave="hideSubMenu(4)"
              @click="updateModal(true, 'beta21Com')">
              <div class="sub-menu5" v-show="hoveredIndex === 4">
                <div class="sub-menu5-item" @click="updateModal(true, 'beta22Com')">5-1. MVP 설계 및 제작</div>
                <div class="sub-menu5-item" @click="updateModal(true, 'beta23Com')">5-2. 시장 검증 시나리오 설계</div>
                <div class="sub-menu5-item" @click="updateModal(true, 'beta24Com')">5-3. 시장 최적화 제품/서비스 구현</div>
              </div>
            </button>
            <button class="basicBtn" @mouseover="showSubMenu(5)" @mouseleave="hideSubMenu(5)"
              @click="updateModal(true, 'beta25Com')">
              <div class="sub-menu6" v-show="hoveredIndex === 5">
                <div class="sub-menu6-item" @click="updateModal(true, 'beta26Com')">6-1. 인바운드/아웃바운드 채널 설계</div>
                <div class="sub-menu6-item" @click="updateModal(true, 'beta27Com')">6-2. 제품 소개 및 판촉전략</div>
                <div class="sub-menu6-item" @click="updateModal(true, 'beta28Com')">6-3. 수익구조 및 가격전략 수립</div>
              </div>
            </button>
            <button class="basicBtn" @mouseover="showSubMenu(6)" @mouseleave="hideSubMenu(6)"
              @click="updateModal(true, 'beta29Com')">
              <div class="sub-menu7" v-show="hoveredIndex === 6">
                <div class="sub-menu7-item" @click="updateModal(true, 'beta30Com')">7-1. 고객 반응 데이터 지표 설계</div>
                <div class="sub-menu7-item" @click="updateModal(true, 'beta31Com')">7-2. 고객 반응 데이터 수집 및 분석</div>
                <div class="sub-menu7-item" @click="updateModal(true, 'beta32Com')">7-3. 성장을 위한 준비 및 계획 수립</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-wrapper" v-if="showModal">
      <ModalInBmdsBetaVue @close="showModal = false" :screenName="screen" />
    </div>
  </div>
</template>

<script>
import UserDataService from '@/services/main/UserDataService';
import ModalInBmdsBetaVue from './modal/ModalInBmdsBeta.vue';
export default {
  components: {
    ModalInBmdsBetaVue,
  },
  data() {
    return {
      showModal: false,
      hoveredIndex: null,
      userName: 'Kevin',
      screen: '', // 모달창으로 props보낼때 쓰는 이름
    };
  },
  methods: {
    showSubMenu(index) {
      this.hoveredIndex = index;
    },
    hideSubMenu() {
      this.hoveredIndex = null;
    },
    getUserName() {
      UserDataService.getUsr()
    },
    updateModal(value, screenName) {
      this.showModal = value;
      this.screen = screenName;
      // location.href = `/main/MyBmDetail/${id}`;
    },
  },
  mounted() { },
};
</script>

<style scoped>
@import url('../../../../public/css/main/styles.css');
</style>
