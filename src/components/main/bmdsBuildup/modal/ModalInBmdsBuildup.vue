<template>
  <div class="black-bgBuildup">
    <div class="white-bgBuildup">
      <button @click="$emit('close', false)" class="close-button">X</button>
      <!-- 사이드바 -->
      <div class="sidebarBuildup">
        <div class="modalSideBarTitleBuildup preB"
          :style="{ color: indexNum == 1 ? '#FA9D1B' : indexNum == 2 ? '#FD7C02' : indexNum == 3 ? '#F75842' : indexNum == 4 ? '#3B60AC' : indexNum == 7 ? '#0978D0' : indexNum == 6 ? '#009ED4' : '#43BDC9' }">
          Build-up
        </div>
        <img src="../../../../assets/buildup/sideBarImg.png" alt="빌드업사이드바이미지" style="width:10rem; height:8rem;">
        <div class="modalSideBarBtnListBuildup">
          <div class="modalSideBarBtnListBuildup2">
            <div class="d-flex flex-column justify-content-center align-items-center"
              style=" padding:.5rem;  border-radius:15px;"
              :style="{ 'border': activeBtnIndex === 'step10Com' || activeBtnIndex === 'step11Com' || activeBtnIndex === 'step12Com' || activeBtnIndex === 'step13Com' || activeBtnIndex === 'step14Com' || activeBtnIndex === 'step15Com' ? '2px dotted #fa9e1b' : '' }"
              @click="showSubMenu(1)">
              <label class="modalSideBarBtnBeta BtnBeta1"
                :class="{ active1: activeBtnIndex === 'step10Com' || activeBtnIndex === 'step11Com' || activeBtnIndex === 'step12Com' || activeBtnIndex === 'step13Com' || activeBtnIndex === 'step14Com' || activeBtnIndex === 'step15Com' }"
                @click="handleButtonClick('step10Com')">
                <input type="radio" name="videoCategories1" id="btnbeta1Com" :checked="activeBtnIndex === 'step10Com'" />
                기획탐색
              </label>
              <div class="subMenu1" v-if="showSubmenu[1]">
                <div class="submenuItem submenuItem1" :class="{ active1: activeBtnIndex === 'step11Com' }"
                  @click="activeBtnIndex = 'step11Com'">1-1 : 아이템이 속한 시장 이해1</div>
              </div>
              <div class="subMenu1" v-if="showSubmenu[1]">
                <div class="submenuItem submenuItem1" :class="{ active1: activeBtnIndex === 'step12Com' }"
                  @click="activeBtnIndex = 'step12Com'">1-1 : 아이템이 속한 시장 이해2</div>
              </div>
              <div class="subMenu1" v-if="showSubmenu[1]">
                <div class="submenuItem submenuItem1" :class="{ active1: activeBtnIndex === 'step13Com' }"
                  @click="activeBtnIndex = 'step13Com'">1-2 : 고객의 불편사항 파악1</div>
              </div>
              <div class="subMenu1" v-if="showSubmenu[1]">
                <div class="submenuItem submenuItem1" :class="{ active1: activeBtnIndex === 'step14Com' }"
                  @click="activeBtnIndex = 'step14Com'">1-2 : 고객의 불편사항 파악2</div>
              </div>
              <div class="subMenu1" v-if="showSubmenu[1]">
                <div class="submenuItem submenuItem1" :class="{ active1: activeBtnIndex === 'step15Com' }"
                  @click="activeBtnIndex = 'step15Com'">1-3 : 아이템 해결 가능성 확인</div>
              </div>
            </div>
            <div class="d-flex flex-column justify-content-center align-items-center"
              style=" padding:.5rem; border-radius:15px;"
              :style="{ 'border': activeBtnIndex === 'step20Com' || activeBtnIndex === 'step21Com' || activeBtnIndex === 'step22Com' || activeBtnIndex === 'step23Com' || activeBtnIndex === 'step24Com' || activeBtnIndex === 'step25Com' ? '2px dotted #fe7003' : '' }"
              @click="showSubMenu(2)">
              <label class="modalSideBarBtnBeta BtnBeta2"
                :class="{ active2: activeBtnIndex === 'step20Com' || activeBtnIndex === 'step21Com' || activeBtnIndex === 'step22Com' || activeBtnIndex === 'step23Com' || activeBtnIndex === 'step24Com' || activeBtnIndex === 'step25Com' }"
                @click="handleButtonClick('step20Com')">
                <input type="radio" name="videoCategories1" id="btnbeta5Com" :checked="activeBtnIndex === 'step20Com'" />
                아이디에이션<br />(아이템 선정)
              </label>
              <div class="subMenu2" v-if="showSubmenu[2]">
                <div class="submenuItem submenuItem2" :class="{ active2: activeBtnIndex === 'step21Com' }"
                  @click="activeBtnIndex = 'step21Com'">2-1 : 목표시장 선정 및 확인</div>
              </div>
              <div class="subMenu2" v-if="showSubmenu[2]">
                <div class="submenuItem submenuItem2" :class="{ active2: activeBtnIndex === 'step22Com' }"
                  @click="activeBtnIndex = 'step22Com'">2-2 : 고객 페르소나 설계(B2C)</div>
              </div>
              <div class="subMenu2" v-if="showSubmenu[2]">
                <div class="submenuItem submenuItem2" :class="{ active2: activeBtnIndex === 'step23Com' }"
                  @click="activeBtnIndex = 'step23Com'">2-2 : 고객 페르소나 설계(B2B)</div>
              </div>
              <div class="subMenu2" v-if="showSubmenu[2]">
                <div class="submenuItem submenuItem2" :class="{ active2: activeBtnIndex === 'step24Com' }"
                  @click="activeBtnIndex = 'step24Com'">2-3 : POV(Point of View) 정의</div>
              </div>
              <div class="subMenu2" v-if="showSubmenu[2]">
                <div class="submenuItem submenuItem2" :class="{ active2: activeBtnIndex === 'step25Com' }"
                  @click="activeBtnIndex = 'step25Com'">2-4 : 아이템의 핵심가치 설계</div>
              </div>
            </div>
            <div class="d-flex flex-column justify-content-center align-items-center"
              style=" padding:.5rem; border-radius:15px;"
              :style="{ 'border': activeBtnIndex === 'step30Com' || activeBtnIndex === 'step31Com' || activeBtnIndex === 'step32Com' || activeBtnIndex === 'step33Com' || activeBtnIndex === 'step34Com' || activeBtnIndex === 'step35Com' || activeBtnIndex === 'step36Com' || activeBtnIndex === 'step37Com' ? '2px dotted #fc4331' : '' }"
              @click="showSubMenu(3)">
              <label class="modalSideBarBtnBeta BtnBeta3"
                :class="{ active3: activeBtnIndex === 'step30Com' || activeBtnIndex === 'step31Com' || activeBtnIndex === 'step32Com' || activeBtnIndex === 'step33Com' || activeBtnIndex === 'step34Com' || activeBtnIndex === 'step35Com' || activeBtnIndex === 'step36Com' || activeBtnIndex === 'step37Com' }"
                @click="handleButtonClick('step30Com')">
                <input type="radio" name="videoCategories1" id="btnbeta10Com" :checked="activeBtnIndex === 'step30Com'" />
                아이디어 컨셉<br />정의 및 개발
              </label>
              <div class="subMenu3" v-if="showSubmenu[3]">
                <div class="submenuItem submenuItem3" :class="{ active3: activeBtnIndex === 'step31Com' }"
                  @click="activeBtnIndex = 'step31Com'">3-1 : 고객관점 불편요소 탐색 및 원인분석1</div>
              </div>
              <div class="subMenu3" v-if="showSubmenu[3]">
                <div class="submenuItem submenuItem3" :class="{ active3: activeBtnIndex === 'step32Com' }"
                  @click="activeBtnIndex = 'step32Com'">3-1 : 고객관점 불편요소 탐색 및 원인분석2</div>
              </div>
              <div class="subMenu3" v-if="showSubmenu[3]">
                <div class="submenuItem submenuItem3" :class="{ active3: activeBtnIndex === 'step33Com' }"
                  @click="activeBtnIndex = 'step33Com'">3-1 : 고객관점 불편요소 탐색 및 원인분석3</div>
              </div>
              <div class="subMenu3" v-if="showSubmenu[3]">
                <div class="submenuItem submenuItem3" :class="{ active3: activeBtnIndex === 'step34Com' }"
                  @click="activeBtnIndex = 'step34Com'">3-2 : 해결안 설계1</div>
              </div>
              <div class="subMenu3" v-if="showSubmenu[3]">
                <div class="submenuItem submenuItem3" :class="{ active3: activeBtnIndex === 'step35Com' }"
                  @click="activeBtnIndex = 'step35Com'">3-2 : 해결안 설계2</div>
              </div>
              <div class="subMenu3" v-if="showSubmenu[3]">
                <div class="submenuItem submenuItem3" :class="{ active3: activeBtnIndex === 'step36Com' }"
                  @click="activeBtnIndex = 'step36Com'">3-3 : 시장 적합성(KBF) 및 적응성 설계(4P)1</div>
              </div>
              <div class="subMenu3" v-if="showSubmenu[3]">
                <div class="submenuItem submenuItem3" :class="{ active3: activeBtnIndex === 'step37Com' }"
                  @click="activeBtnIndex = 'step37Com'">3-3 : 시장 적합성(KBF) 및 적응성 설계(4P)2</div>
              </div>
            </div>
            <div class="d-flex flex-column justify-content-center align-items-center"
              style=" padding:.5rem; border-radius:15px;"
              :style="{ 'border': activeBtnIndex === 'step40Com' || activeBtnIndex === 'step41Com' || activeBtnIndex === 'step42Com' || activeBtnIndex === 'step42_1Com' || activeBtnIndex === 'step43Com' || activeBtnIndex === 'step44Com' || activeBtnIndex === 'step45Com' ? '2px dotted #3259a9' : '' }"
              @click="showSubMenu(4)">
              <label class="modalSideBarBtnBeta BtnBeta4"
                :class="{ active4: activeBtnIndex === 'step40Com' || activeBtnIndex === 'step41Com' || activeBtnIndex === 'step42Com' || activeBtnIndex === 'step42_1Com' || activeBtnIndex === 'step43Com' || activeBtnIndex === 'step44Com' || activeBtnIndex === 'step45Com' }"
                @click="handleButtonClick('step40Com')">
                <input type="radio" name="videoCategories1" id="btnbeta16Com" :checked="activeBtnIndex === 'step40Com'" />
                제품 또는<br />서비스 개발
              </label>
              <div class="subMenu4" v-if="showSubmenu[4]">
                <div class="submenuItem submenuItem4" :class="{ active4: activeBtnIndex === 'step41Com' }"
                  @click="activeBtnIndex = 'step41Com'">4-1 : 제품 또는 서비스 정의1</div>
              </div>
              <div class="subMenu4" v-if="showSubmenu[4]">
                <div class="submenuItem submenuItem4" :class="{ active4: activeBtnIndex === 'step42Com' }"
                  @click="activeBtnIndex = 'step42Com'">4-1 : 제품 또는 서비스 정의2</div>
              </div>
              <div class="subMenu4" v-if="showSubmenu[4]">
                <div class="submenuItem submenuItem4" :class="{ active4: activeBtnIndex === 'step42_1Com' }"
                  @click="activeBtnIndex = 'step42_1Com'">4-1 : 제품 또는 서비스 정의3</div>
              </div>
              <div class="subMenu4" v-if="showSubmenu[4]">
                <div class="submenuItem submenuItem4" :class="{ active4: activeBtnIndex === 'step43Com' }"
                  @click="activeBtnIndex = 'step43Com'">4-2 : 제품 또는 서비스 스케치</div>
              </div>
              <div class="subMenu4" v-if="showSubmenu[4]">
                <div class="submenuItem submenuItem4" :class="{ active4: activeBtnIndex === 'step44Com' }"
                  @click="activeBtnIndex = 'step44Com'">4-3 : 세부 추진 계획 수립1</div>
              </div>
              <div class="subMenu4" v-if="showSubmenu[4]">
                <div class="submenuItem submenuItem4" :class="{ active4: activeBtnIndex === 'step45Com' }"
                  @click="activeBtnIndex = 'step45Com'">4-3 : 세부 추진 계획 수립2</div>
              </div>
            </div>
            <div class="d-flex flex-column justify-content-center align-items-center"
              style=" padding:.5rem; border-radius:15px;"
              :style="{ 'border': activeBtnIndex === 'step50Com' || activeBtnIndex === 'step51Com' || activeBtnIndex === 'step52Com' || activeBtnIndex === 'step53Com' || activeBtnIndex === 'step54Com' || activeBtnIndex === 'step55Com' || activeBtnIndex === 'step56Com' || activeBtnIndex === 'step57Com' || activeBtnIndex === 'step58Com' || activeBtnIndex === 'step58_1Com' || activeBtnIndex === 'step59Com' || activeBtnIndex === 'step60Com' ? '2px dotted #0a6dc9' : '' }"
              @click="showSubMenu(7)">
              <label class="modalSideBarBtnBeta BtnBeta5"
                :class="{ active5: activeBtnIndex === 'step50Com' || activeBtnIndex === 'step51Com' || activeBtnIndex === 'step52Com' || activeBtnIndex === 'step53Com' || activeBtnIndex === 'step54Com' || activeBtnIndex === 'step55Com' || activeBtnIndex === 'step56Com' || activeBtnIndex === 'step57Com' || activeBtnIndex === 'step58Com' || activeBtnIndex === 'step58_1Com' || activeBtnIndex === 'step59Com' || activeBtnIndex === 'step60Com' }"
                @click="handleButtonClick('step50Com')">
                <input type="radio" name="videoCategories1" id="btnbeta21Com" :checked="activeBtnIndex === 'step50Com'" />
                MVP 및<br />고객 평가
              </label>
              <div class="subMenu5" v-if="showSubmenu[7]">
                <div class="submenuItem submenuItem5" :class="{ active5: activeBtnIndex === 'step51Com' }"
                  @click="activeBtnIndex = 'step51Com'">5-1 : MVP 설계 및 제작1</div>
              </div>
              <div class="subMenu5" v-if="showSubmenu[7]">
                <div class="submenuItem submenuItem5" :class="{ active5: activeBtnIndex === 'step52Com' }"
                  @click="activeBtnIndex = 'step52Com'">5-1 : MVP 설계 및 제작2</div>
              </div>
              <div class="subMenu5" v-if="showSubmenu[7]">
                <div class="submenuItem submenuItem5" :class="{ active5: activeBtnIndex === 'step53Com' }"
                  @click="activeBtnIndex = 'step53Com'">5-1 : MVP 설계 및 제작3</div>
              </div>
              <div class="subMenu5" v-if="showSubmenu[7]">
                <div class="submenuItem submenuItem5" :class="{ active5: activeBtnIndex === 'step54Com' }"
                  @click="activeBtnIndex = 'step54Com'">5-1 : MVP 설계 및 제작4</div>
              </div>
              <div class="subMenu5" v-if="showSubmenu[7]">
                <div class="submenuItem submenuItem5" :class="{ active5: activeBtnIndex === 'step55Com' }"
                  @click="activeBtnIndex = 'step55Com'">5-2 : 시장 검증 시나리오 설계1</div>
              </div>
              <div class="subMenu5" v-if="showSubmenu[7]">
                <div class="submenuItem submenuItem5" :class="{ active5: activeBtnIndex === 'step56Com' }"
                  @click="activeBtnIndex = 'step56Com'">5-2 : 시장 검증 시나리오 설계2</div>
              </div>
              <div class="subMenu5" v-if="showSubmenu[7]">
                <div class="submenuItem submenuItem5" :class="{ active5: activeBtnIndex === 'step57Com' }"
                  @click="activeBtnIndex = 'step57Com'">5-2 : 시장 검증 시나리오 설계3</div>
              </div>
              <div class="subMenu5" v-if="showSubmenu[7]">
                <div class="submenuItem submenuItem5" :class="{ active5: activeBtnIndex === 'step58Com' }"
                  @click="activeBtnIndex = 'step58Com'">5-2 : 시장 검증 시나리오 설계4</div>
              </div>
              <div class="subMenu5" v-if="showSubmenu[7]">
                <div class="submenuItem submenuItem5" :class="{ active5: activeBtnIndex === 'step58_1Com' }"
                  @click="activeBtnIndex = 'step58_1Com'">5-2 : 시장 검증 시나리오 설계5</div>
              </div>
              <div class="subMenu5" v-if="showSubmenu[7]">
                <div class="submenuItem submenuItem5" :class="{ active5: activeBtnIndex === 'step59Com' }"
                  @click="activeBtnIndex = 'step59Com'">5-3 : 시장 최적화 제품/서비스 구현1</div>
              </div>
              <div class="subMenu5" v-if="showSubmenu[7]">
                <div class="submenuItem submenuItem5" :class="{ active5: activeBtnIndex === 'step60Com' }"
                  @click="activeBtnIndex = 'step60Com'">5-3 : 시장 최적화 제품/서비스 구현2</div>
              </div>
            </div>
            <div class="d-flex flex-column justify-content-center align-items-center"
              style=" padding:.5rem; border-radius:15px;"
              :style="{ 'border': activeBtnIndex === 'step61Com' || activeBtnIndex === 'step62Com' || activeBtnIndex === 'step63Com' || activeBtnIndex === 'step64Com' ? '2px dotted #0099d5' : '' }"
              @click="showSubMenu(6)">
              <label class="modalSideBarBtnBeta BtnBeta6"
                :class="{ active6: activeBtnIndex === 'step61Com' || activeBtnIndex === 'step62Com' || activeBtnIndex === 'step63Com' || activeBtnIndex === 'step64Com' }"
                @click="handleButtonClick('step61Com')">
                <input type="radio" name="videoCategories1" id="btnbeta25Com" :checked="activeBtnIndex === 'step61Com'" />
                시장 론칭
              </label>
              <div class="subMenu6" v-if="showSubmenu[6]">
                <div class="submenuItem submenuItem6" :class="{ active6: activeBtnIndex === 'step62Com' }"
                  @click="activeBtnIndex = 'step62Com'">6-1 : 인바운드/아웃바운드 채널 설계</div>
              </div>
              <div class="subMenu6" v-if="showSubmenu[6]">
                <div class="submenuItem submenuItem6" :class="{ active6: activeBtnIndex === 'step63Com' }"
                  @click="activeBtnIndex = 'step63Com'">6-2 : 제품 소개 및 판촉전략</div>
              </div>
              <div class="subMenu6" v-if="showSubmenu[6]">
                <div class="submenuItem submenuItem6" :class="{ active6: activeBtnIndex === 'step64Com' }"
                  @click="activeBtnIndex = 'step64Com'">6-3 : 수익구조 및 가격전략 수립</div>
              </div>
            </div>
            <div class="d-flex flex-column justify-content-center align-items-center"
              style=" padding:.5rem; border-radius:15px;"
              :style="{ 'border': activeBtnIndex === 'step70Com' || activeBtnIndex === 'step71Com' || activeBtnIndex === 'step72Com' || activeBtnIndex === 'step73Com' || activeBtnIndex === 'step74Com' || activeBtnIndex === 'step75Com' || activeBtnIndex === 'step76Com' ? '2px dotted #28b2cd' : '' }"
              @click="showSubMenu(5)">
              <label class="modalSideBarBtnBeta BtnBeta7"
                :class="{ active7: activeBtnIndex === 'step70Com' || activeBtnIndex === 'step71Com' || activeBtnIndex === 'step72Com' || activeBtnIndex === 'step73Com' || activeBtnIndex === 'step74Com' || activeBtnIndex === 'step75Com' || activeBtnIndex === 'step76Com' }"
                @click="handleButtonClick('step70Com')">
                <input type="radio" name="videoCategories1" id="btnbeta29Com" :checked="activeBtnIndex === 'step70Com'" />
                고객 개발 및<br />시장 확장
              </label>
              <div class="subMenu7" v-if="showSubmenu[5]">
                <div class="submenuItem submenuItem7" :class="{ active7: activeBtnIndex === 'step71Com' }"
                  @click="activeBtnIndex = 'step71Com'">7-1 : 고객 반응 데이터 지표 설계</div>
              </div>
              <div class="subMenu7" v-if="showSubmenu[5]">
                <div class="submenuItem submenuItem7" :class="{ active7: activeBtnIndex === 'step72Com' }"
                  @click="activeBtnIndex = 'step72Com'">7-2 : 고객 반응 데이터 수집 및 분석1</div>
              </div>
              <div class="subMenu7" v-if="showSubmenu[5]">
                <div class="submenuItem submenuItem7" :class="{ active7: activeBtnIndex === 'step73Com' }"
                  @click="activeBtnIndex = 'step73Com'">7-2 : 고객 반응 데이터 수집 및 분석2</div>
              </div>
              <div class="subMenu7" v-if="showSubmenu[5]">
                <div class="submenuItem submenuItem7" :class="{ active7: activeBtnIndex === 'step74Com' }"
                  @click="activeBtnIndex = 'step74Com'">7-2 : 고객 반응 데이터 수집 및 분석3</div>
              </div>
              <div class="subMenu7" v-if="showSubmenu[5]">
                <div class="submenuItem submenuItem7" :class="{ active7: activeBtnIndex === 'step75Com' }"
                  @click="activeBtnIndex = 'step75Com'">7-2 : 고객 반응 데이터 수집 및 분석4</div>
              </div>
              <div class="subMenu7" v-if="showSubmenu[5]">
                <div class="submenuItem submenuItem7" :class="{ active7: activeBtnIndex === 'step76Com' }"
                  @click="activeBtnIndex = 'step76Com'">7-3 : 성장을 위한 준비 및 계획 수립</div>
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
import ModalInBmdsBuildup from './js/ModalInBmdsBuildup.js';
export default {
  ...ModalInBmdsBuildup,
}
</script>

<style>
@import url("../../../../../public/css/main/styles.css");
</style>
