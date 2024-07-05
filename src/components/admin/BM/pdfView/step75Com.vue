<template>
  <div>
    <div class="d-flex justify-content-end align-items-center">
      <div style="color: gray; font-size: 1rem; margin-right: 0.5rem">
        Copyright 2023. MERAKL Inc. all rights reserved.
      </div>
      <div style="margin-right: 1rem">
        <img src="@/assets/bmds3/흑백 로고.png" />
      </div>
    </div>
    <div class="d-flex justify-content-start" style="height: 5rem">
      <div class="d-flex" style="margin-left: 1rem">
        <div class="d-flex justify-content-between" style="width: 34rem">
          <img
            src="@/assets/beta/step07로켓.png"
            alt="큐브"
            style="width: 60px; height: 60px"
          />
          <div class="preEB" style="font-size: 35px; color: #53c5c0">
            STEP 07 :
          </div>
          <div class="preEB" style="font-size: 35px">
            고객 개발 및 시장 확장
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="basicContentBar preSB">
        7-2 : 고객 반응 데이터 수집 및 분석
      </div>
    </div>
    <div style="width: 81rem; height: 41.5rem">
      <div
        class="my-3 d-flex flex-column justify-content-between align-items-center"
      >
        <div class="w-100 d-flex justify-content-start align-items-center">
          <label
            for="businessArea"
            class="preSB fs-3"
            style="margin-left: 1rem"
          >
            <span class="primeColor">2-5.</span> 의사결정</label
          >
        </div>
        <div
          class="mb-3 d-flex flex-column justify-content-between align-items-center"
          id="businessArea"
          style="width: 81rem"
        >
          <div
            class="primeColor preEB d-flex justify-content-center align-items-center"
            style="
              width: 13rem;
              height: 3rem;
              font-size: 30px;
              background-color: white;
              margin-bottom: -1.5rem;
              position: relative;
              z-index: 1;
            "
          >
            의사결정 항목
          </div>
          <div
            class="d-flex justify-content-between align-items-center"
            style="
              border: #bfbfbf 1px solid;
              height: 14rem;
              border-radius: 15px;
              width: 80rem;
              height: 34.5rem;
              position: relative;
              padding: 1.5rem 1rem;
            "
          >
            <div
              class="d-flex flex-column justify-content-between align-items-start leftDiv preEB colorGrey"
            >
              <div
                class="d-flex justify-content-start align-items-center hclass fs-5"
              >
                <div class="colorBox"></div>
                <div>전략적 의사결정</div>
              </div>
              <div
                class="d-flex justify-content-start align-items-center hclass fs-5"
              >
                <div class="colorBox"></div>
                <div>기술 및 IT 의사결정</div>
              </div>
              <div
                class="d-flex justify-content-start align-items-center hclass fs-5"
              >
                <div class="colorBox"></div>
                <div>운영 의사결정</div>
              </div>
              <div
                class="d-flex justify-content-start align-items-center hclass fs-5"
              >
                <div class="colorBox"></div>
                <div>재무 의사결정</div>
              </div>
              <div
                class="d-flex justify-content-start align-items-center hclass fs-5"
              >
                <div class="colorBox"></div>
                <div>마케팅 및 판매 의사결정</div>
              </div>
              <div
                class="d-flex justify-content-start align-items-center hclass fs-5"
              >
                <div class="colorBox"></div>
                <div>인적 자원 의사결정</div>
              </div>
              <div
                class="d-flex justify-content-start align-items-center hclass fs-5"
              >
                <div class="colorBox"></div>
                <div>구매 의사결정</div>
              </div>
              <div
                class="d-flex justify-content-start align-items-center hclass fs-5"
              >
                <div class="colorBox"></div>
                <div>유통 채널 의사결정</div>
              </div>
              <div
                class="d-flex justify-content-start align-items-center hclass fs-5"
              >
                <div class="colorBox"></div>
                <div>추가적인 의사결정</div>
              </div>
            </div>
            <div
              class="d-flex flex-column justify-content-between align-items-start rightDiv"
            >
              <div
                class="d-flex justify-content-start align-items-center hclass fs-5 preM"
              >
                <!-- 체크 아이템  start-->
                <div class="form-check" style="padding: 0">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="check1"
                    value="시장 진입"
                    v-model="check75_1"
                    @click.prevent
                  />
                  <label class="form-check-label" for="check1">
                    시장 진입
                  </label>
                </div>
                <!-- 체크 아이템  end-->
                <!-- 체크 아이템  start-->
                <div class="form-check ms-4" style="padding: 0">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="check2"
                    value="시장 철수"
                    v-model="check75_2"
                    @click.prevent
                  />
                  <label class="form-check-label" for="check2">
                    시장 철수
                  </label>
                </div>
                <!-- 체크 아이템  end-->
                <!-- 체크 아이템  start-->
                <div class="form-check ms-4" style="padding: 0">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="check3"
                    value="M&A 결정"
                    v-model="check75_3"
                    @click.prevent
                  />
                  <label class="form-check-label" for="check3">
                    M&A 결정
                  </label>
                </div>
                <!-- 체크 아이템  end-->
                <!-- 체크 아이템  start-->
                <div class="form-check ms-4" style="padding: 0">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="check4"
                    value="제품/서비스 라인업"
                    v-model="check75_4"
                    @click.prevent
                  />
                  <label class="form-check-label" for="check4">
                    제품/서비스 라인업
                  </label>
                </div>
                <!-- 체크 아이템  end-->
                <!-- 체크 아이템  start-->
                <div class="form-check ms-4" style="padding: 0">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="check5"
                    value="포트폴리오 관리"
                    v-model="check75_5"
                    @click.prevent
                  />
                  <label class="form-check-label" for="check5">
                    포트폴리오 관리
                  </label>
                </div>
                <!-- 체크 아이템  end-->
                <!-- 체크 아이템  start-->
                <div class="form-check ms-4" style="padding: 0">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="check6"
                    value="글로벌 전략"
                    v-model="check75_6"
                    @click.prevent
                  />
                  <label class="form-check-label" for="check6">
                    글로벌 전략
                  </label>
                </div>
                <!-- 체크 아이템  end-->
              </div>
              <div
                class="d-flex justify-content-start align-items-center hclass fs-5 preM"
              >
                <!-- 체크 아이템  start-->
                <div class="form-check" style="padding: 0">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="check7"
                    value="신규 기술 및 신제품(신서비스) 개발 및 투자"
                    v-model="check75_7"
                    @click.prevent
                  />
                  <label class="form-check-label" for="check7">
                    신규 기술 및 신제품(신서비스) 개발 및 투자
                  </label>
                </div>
                <!-- 체크 아이템  end-->
                <!-- 체크 아이템  start-->
                <div class="form-check ms-4" style="padding: 0">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="check8"
                    value="기술이전 및 도입"
                    v-model="check75_8"
                    @click.prevent
                  />
                  <label class="form-check-label" for="check8">
                    기술이전 및 도입
                  </label>
                </div>
                <!-- 체크 아이템  end-->
                <!-- 체크 아이템  start-->
                <div class="form-check ms-4" style="padding: 0">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="check9"
                    value="IT 시스템 구축"
                    v-model="check75_9"
                    @click.prevent
                  />
                  <label class="form-check-label" for="check9">
                    IT 시스템 구축
                  </label>
                </div>
                <!-- 체크 아이템  end-->
              </div>
              <!-- 행바꿈 -->
              <div
                class="d-flex justify-content-start align-items-center hclass fs-5 preM"
              >
                <!-- 체크 아이템  start-->
                <div class="form-check" style="padding: 0">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="check10"
                    value="생산 계획 및 재고관리"
                    v-model="check75_10"
                    @click.prevent
                  />
                  <label class="form-check-label" for="check10">
                    생산 계획 및 재고관리
                  </label>
                </div>
                <!-- 체크 아이템  end-->
                <!-- 체크 아이템  start-->
                <div class="form-check ms-3" style="padding: 0">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="check11"
                    value="양산 설비 확대 및 투자"
                    v-model="check75_11"
                    @click.prevent
                  />
                  <label class="form-check-label" for="check11"
                    >양산 설비 확대 및 투자</label
                  >
                </div>
                <!-- 체크 아이템  end-->
                <!-- 체크 아이템  start-->
                <div class="form-check ms-3" style="padding: 0">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="check12"
                    value="디지털 전환(스마트팩토리)"
                    v-model="check75_12"
                    @click.prevent
                  />
                  <label class="form-check-label" for="check12"
                    >디지털 전환(스마트팩토리)
                  </label>
                </div>
                <!-- 체크 아이템  end-->
                <!-- 체크 아이템  start-->
                <div class="form-check ms-3" style="padding: 0">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="check13"
                    value="설비 축소 또는 아웃소싱"
                    v-model="check75_13"
                    @click.prevent
                  />
                  <label class="form-check-label" for="check13"
                    >설비 축소 또는 아웃소싱
                  </label>
                </div>
                <!-- 체크 아이템  end-->
              </div>
              <div
                class="d-flex justify-content-start align-items-center hclass fs-5 preM"
              >
                <!-- 체크 아이템  start-->
                <div class="form-check" style="padding: 0">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="check14"
                    value="자금조달(투자유치, 대출)"
                    v-model="check75_14"
                    @click.prevent
                  />
                  <label class="form-check-label" for="check14"
                    >자금조달(투자유치, 대출)
                  </label>
                </div>
                <!-- 체크 아이템  end-->
                <!-- 체크 아이템  start-->
                <div class="form-check ms-5" style="padding: 0">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="check15"
                    value="예산 편성(확대 또는 축소)"
                    v-model="check75_15"
                    @click.prevent
                  />
                  <label class="form-check-label" for="check15"
                    >예산 편성(확대 또는 축소)
                  </label>
                </div>
                <!-- 체크 아이템  end-->
                <!-- 체크 아이템  start-->
                <div class="form-check ms-5" style="padding: 0">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="check16"
                    value="비용 절감 활동(CR)"
                    v-model="check75_16"
                    @click.prevent
                  />
                  <label class="form-check-label" for="check16"
                    >비용 절감 활동(CR)
                  </label>
                </div>
                <!-- 체크 아이템  end-->
              </div>
              <div
                class="d-flex justify-content-start align-items-center hclass fs-5 preM"
              >
                <!-- 체크 아이템  start-->
                <div class="form-check" style="padding: 0">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="check17"
                    value="마케팅 채널(확대 또는 축소)
"
                    v-model="check75_17"
                    @click.prevent
                  />
                  <label class="form-check-label" for="check17"
                    >마케팅 채널(확대 또는 축소)
                  </label>
                </div>
                <!-- 체크 아이템  end-->
                <!-- 체크 아이템  start-->
                <div class="form-check ms-5" style="padding: 0">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="check18"
                    value="판매촉진 활동(추가, 변경, 축소)
"
                    v-model="check75_18"
                    @click.prevent
                  />
                  <label class="form-check-label" for="check18"
                    >판매촉진 활동(추가, 변경, 축소)
                  </label>
                </div>
                <!-- 체크 아이템  end-->
                <!-- 체크 아이템  start-->
                <div class="form-check ms-5" style="padding: 0">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="check19"
                    value="마케팅 전략
"
                    v-model="check75_19"
                    @click.prevent
                  />
                  <label class="form-check-label" for="check19"
                    >마케팅 전략
                  </label>
                </div>
                <!-- 체크 아이템  end-->
              </div>
              <div
                class="d-flex justify-content-start align-items-center hclass fs-5 preM"
              >
                <!-- 체크 아이템  start-->
                <div class="form-check" style="padding: 0">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="check20"
                    value="신규 인력 추가고용"
                    v-model="check75_20"
                    @click.prevent
                  />
                  <label class="form-check-label" for="check20"
                    >신규 인력 추가고용
                  </label>
                </div>
                <!-- 체크 아이템  end-->
                <!-- 체크 아이템  start-->
                <div class="form-check ms-5" style="padding: 0">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="check21"
                    value="인력 축소 또는 변경
"
                    v-model="check75_21"
                    @click.prevent
                  />
                  <label class="form-check-label" for="check21"
                    >인력 축소 또는 변경
                  </label>
                </div>
                <!-- 체크 아이템  end-->
                <!-- 체크 아이템  start-->
                <div class="form-check ms-5" style="padding: 0">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="check22"
                    value="교육 및 개발
"
                    v-model="check75_22"
                    @click.prevent
                  />
                  <label class="form-check-label" for="check22"
                    >교육 및 개발
                  </label>
                </div>
                <!-- 체크 아이템  end-->
              </div>
              <div
                class="d-flex justify-content-start align-items-center hclass fs-5 preM"
              >
                <!-- 체크 아이템  start-->
                <div class="form-check" style="padding: 0">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="check23"
                    value="공급 파트너사 추가 및 확대
"
                    v-model="check75_23"
                    @click.prevent
                  />
                  <label class="form-check-label" for="check23"
                    >공급 파트너사 추가 및 확대
                  </label>
                </div>
                <!-- 체크 아이템  end-->
                <!-- 체크 아이템  start-->
                <div class="form-check ms-5" style="padding: 0">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="check24"
                    value="공급 파트너사 축소 및 변경

"
                    v-model="check75_24"
                    @click.prevent
                  />
                  <label class="form-check-label" for="check24"
                    >공급 파트너사 축소 및 변경
                  </label>
                </div>
                <!-- 체크 아이템  end-->
                <!-- 체크 아이템  start-->
                <div class="form-check ms-5" style="padding: 0">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="check25"
                    value="구매 가격 조정"
                    v-model="check75_25"
                    @click.prevent
                  />
                  <label class="form-check-label" for="check25"
                    >구매 가격 조정
                  </label>
                </div>
                <!-- 체크 아이템  end-->
              </div>
              <div
                class="d-flex justify-content-start align-items-center hclass fs-5 preM"
              >
                <!-- 체크 아이템  start-->
                <div class="form-check" style="padding: 0">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="check26"
                    value="신규 판매 채널 확보"
                    v-model="check75_26"
                    @click.prevent
                  />
                  <label class="form-check-label" for="check26"
                    >신규 판매 채널 확보
                  </label>
                </div>
                <!-- 체크 아이템  end-->
                <!-- 체크 아이템  start-->
                <div class="form-check ms-3" style="padding: 0">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="check27"
                    value="기존 판매 채널 변경"
                    v-model="check75_27"
                    @click.prevent
                  />
                  <label class="form-check-label" for="check27"
                    >기존 판매 채널 변경
                  </label>
                </div>
                <!-- 체크 아이템  end-->
                <!-- 체크 아이템  start-->
                <div class="form-check ms-3" style="padding: 0">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="check28"
                    value="기존 판매 채널 확대"
                    v-model="check75_28"
                    @click.prevent
                  />
                  <label class="form-check-label" for="check28"
                    >기존 판매 채널 확대
                  </label>
                </div>
                <div class="form-check ms-3" style="padding: 0">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="check29"
                    value="기존 판매 채널 축소"
                    v-model="check75_29"
                    @click.prevent
                  />
                  <label class="form-check-label" for="check29"
                    >기존 판매 채널 축소
                  </label>
                </div>
                <div class="form-check ms-3" style="padding: 0">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="check30"
                    value="채널 통합"
                    v-model="check75_30"
                    @click.prevent
                  />
                  <label class="form-check-label" for="check30"
                    >채널 통합
                  </label>
                </div>
                <!-- 체크 아이템  end-->
              </div>
              <div
                class="d-flex justify-content-start align-items-center hclass fs-5 preM"
              >
                <div class="form-check" style="padding: 0">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="check31"
                    v-model="check75_31"
                    @click.prevent
                  />
                  <label class="preM form-check-label fs-5" for="check31">
                    추가할 데이터 항목
                  </label>
                  <input
                    class="ms-2"
                    style="
                      height: 2rem;
                      resize: none;
                      outline: none;
                      width: 32rem;
                    "
                    v-model="etc75_1"
                    placeholder="특별한 사유를 적어주세요."
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import step75 from "../modal/js/step75.js";
export default {
  name: "step75Com",
  ...step75,
};
</script>

<style scoped>
/* .hclass {
  height: 4.3rem;
} */

.colorGrey {
  color: #404040;
}

.colorBox {
  width: 1rem;
  height: 1rem;
  margin-right: 1rem;
  background: #53c5c0;
}

.leftDiv,
.rightDiv {
  height: 100%;
  /* 자식 div의 높이를 부모 div의 높이와 동일하게 설정 */
}

.leftDiv {
  flex: 19%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
}

.rightDiv {
  flex: 81%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
}

/* 숨겨진 기본 라디오 버튼 스타일링 */
input[type="checkbox"] {
  display: none;
  vertical-align: middle;
  /* 라디오 버튼을 수직 중앙 정렬 */
}

label {
  vertical-align: middle;
  /* 라벨을 수직 중앙 정렬 */
}

/* 가상 체크박스 디자인 */
input[type="checkbox"] + label {
  position: relative;
  padding-left: 30px;
  /* 체크박스 크기 조절 */
  cursor: pointer;
}

/* 가상 체크박스의 외관 (체크 표시) */
input[type="checkbox"] + label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 4.5px;
  width: 20px;
  /* 체크 표시 크기 조절 */
  height: 20px;
  /* 체크 표시 크기 조절 */
  border: 2px solid #000;
  /* 체크 표시의 외곽선 스타일 지정 */
  background-color: #fff;
  /* 체크 표시의 배경색 지정 */
  border-radius: 4px;
  /* 체크 표시의 둥근 테두리 만들기 */
}

/* 라디오 버튼이 체크됐을 때의 가상 체크박스 스타일 */
input[type="checkbox"]:checked + label:before {
  /* 체크 표시의 배경색 지정 */
  content: "\2713";
  /* 유니코드로 체크 마크 추가 */
  text-align: center;
  /* 텍스트를 중앙 정렬 */
  font-size: 35px;
  font-weight: 600;
  /* 체크 마크의 크기 조절 */
  line-height: 6px;
  /* 체크 마크의 높이 조절 */
  color: #53c5c0;
  /* 체크 마크의 색상 지정 */
}

.basicContentBar {
  width: 26rem;
  background-color: #53c5c0;
  color: white;
  border-radius: 12px;
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.placeholderColor {
  font-size: 20px;
  color: #818181;
}

.primeColor {
  color: #53c5c0;
}

.form-control {
  width: 75rem;
  height: 5rem;
}

.form-control2 {
  width: 75rem;
  height: 15rem;
}

.form-control3 {
  width: 75rem;
  height: 28rem;
}

/* .form-check {
  margin-bottom: 1rem;
} */
input[type="checkbox"] {
  display: none;
  vertical-align: middle;
}

label {
  vertical-align: middle;
}

input[type="checkbox"] + label {
  position: relative;
  padding-left: 30px;
  cursor: pointer;
}

input[type="checkbox"] + label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 27px;
  height: 27px;
  border: 1px solid #000;
  background-color: #fff;
}

input[type="checkbox"]:checked + label:before {
  content: "\2713";
  position: absolute;
  left: 0;
  top: 0;
  text-align: center;
  font-size: 50px;
  font-weight: 600;
  line-height: 9px;
  color: #53c5c0;
}
</style>
