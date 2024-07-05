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
          <img src="@/assets/beta/step07로켓.png" alt="큐브" style="width: 60px; height: 60px" />
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
    <div class="modal-wrap">
      <div class="my-3 d-flex flex-column justify-content-between align-items-start" style="height: 52rem">
        <label for="businessArea" class="preSB form-label fs-3">
          <span class="primeColor">2-1.</span> 데이터 수집의 목표를 설정하고
          데이터 수집 결과를 어떠한 용도로 활용할 계획인지를 선택해봅시다.
          <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-size: 17px">(확실한 데이터 활용의 목표가 있어야 그에 알맞은 데이터를
            추출하고
            분석할 수 있습니다.)</span></label>
        <div class="my-3 d-flex flex-column justify-content-between align-items-center" id="businessArea"
          style="width: 76rem; height: 14rem">
          <div class="d-flex flex-column justify-content-center align-items-center" style="
                border: #bfbfbf 1px solid;
                height: 14rem;
                border-radius: 3%;
                width: 76rem;
              ">
            <div class="d-flex justify-content-start align-items-start" style="width: 77rem">
              <div class="form-check" style="margin-right: 13rem">
                <input class="form-check-input" type="checkbox" id="step73_1" value="신규 제품/서비스 개발"
                  v-model="check73_1_1" />
                <label class="preM form-check-label fs-5" for="step73_1">
                  신규 제품/서비스 개발
                </label>
              </div>
              <div class="form-check" style="margin-right: 13rem">
                <input class="form-check-input" type="checkbox" id="step73_2" value="기존 제품/서비스 보완 및 개선"
                  v-model="check73_1_2" />
                <label class="preM form-check-label fs-5" for="step73_2">
                  기존 제품/서비스 보완 및 개선
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="step73_3" value="구매 고객 세분화" v-model="check73_1_3" />
                <label class="preM form-check-label fs-5" for="step73_3">
                  구매 고객 세분화
                </label>
              </div>
            </div>
            <div class="d-flex justify-content-start align-items-start ms-4" style="width: 78.4rem">
              <div class="form-check" style="margin-right: 13.5rem">
                <input class="preM form-check-input ms-3" type="checkbox" id="step73_4" value="고객 프로파일링 변화"
                  v-model="check73_1_4" />
                <label class="preM form-check-label fs-5" for="step73_4">
                  고객 프로파일링 변화
                </label>
              </div>
              <div class="form-check" style="margin-right: 15.5rem">
                <input class="preM form-check-input ms-3" type="checkbox" id="step73_5" value="광고 및 홍보 효과 테스팅"
                  v-model="check73_1_5" />
                <label class="preM form-check-label fs-5" for="step73_5">
                  광고 및 홍보 효과 테스팅
                </label>
              </div>
              <div class="form-check">
                <input class="preM form-check-input ms-3" type="checkbox" id="step73_6" value="매출 및 수요 예측"
                  v-model="check73_1_6" />
                <label class="preM form-check-label fs-5" for="step73_6">
                  매출 및 수요 예측
                </label>
              </div>
            </div>
            <div class="d-flex justify-content-between align-items-start ms-4" style="width: 78.4rem">
              <div class="form-check" style="margin-right: -4rem">
                <input class="preM form-check-input ms-3" type="checkbox" id="step73_7" value="브랜드 인지도 조사"
                  v-model="check73_1_7" />
                <label class="preM form-check-label fs-5" for="step73_7">
                  브랜드 인지도 조사
                </label>
              </div>
              <div class="form-check">
                <input class="preM form-check-input ms-3" type="checkbox" id="step73_8" value="매출 및 수요 예측"
                  v-model="check73_1_8" />
                <label class="preM form-check-label fs-5" for="step73_8">
                  매출 및 수요 예측
                </label>
              </div>
              <div class="form-check" style="margin-right: 5rem">
                <input class="preM form-check-input ms-3" type="checkbox" id="step73_9" value="마케팅 전략 수립 및 수정"
                  v-model="check73_1_9" />
                <label class="preM form-check-label fs-5" for="step73_9">
                  마케팅 전략 수립 및 수정
                </label>
              </div>
            </div>
            <div class="d-flex justify-content-start align-items-start ms-4" style="width: 78.4rem">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="step73_10" value="추가적인 의사결정 요소"
                  v-model="check73_1_10" />
                <label class="preM form-check-label fs-5" for="step73_10">
                  추가적인 의사결정 요소
                </label>
                <input class="ms-2 preM" style="
                      height: 2rem;
                      resize: none;
                      outline: none;
                      width: 32rem;
                    " v-model="etc73_1" placeholder="특별한 사유를 적어주세요." />
              </div>
            </div>
          </div>
        </div>

        <div class="my-3 d-flex flex-column justify-content-between align-items-center" style="height: 19rem">
          <div>
            <label for="businessArea" class="preSB form-label fs-3">
              <span class="primeColor">2-2.</span> 목표를 달성하기 위한 어떤 로우
              데이터들을 수집할 지 선택합니다.
            </label>
            <div class="my-3 d-flex flex-column justify-content-between align-items-center" id="businessArea"
              style="width: 76rem; height: 14rem">
              <div class="d-flex flex-column justify-content-center align-items-center" style="
                border: #bfbfbf 1px solid;
                height: 14rem;
                border-radius: 3%;
                width: 76rem;
              ">
                <div class="d-flex justify-content-start align-items-start" style="width: 77rem">
                  <div class="form-check" style="margin-right: 7rem">
                    <input class="form-check-input" type="checkbox" id="step73_2_1" value="제품/서비스의 구매율"
                      v-model="check73_2_1" />
                    <label class="preM form-check-label fs-5" for="step73_2_1">
                      제품/서비스의 구매율
                    </label>
                  </div>
                  <div class="form-check" style="margin-right: 10rem">
                    <input class="form-check-input" type="checkbox" id="step73_2_2" value="고객 리뷰와 피드백"
                      v-model="check73_2_2" />
                    <label class="preM form-check-label fs-5" for="step73_2_2">
                      고객 리뷰와 피드백
                    </label>
                  </div>
                  <div class="form-check" style="margin-right: 10rem">
                    <input class="form-check-input" type="checkbox" id="step73_2_3" value="고객 전환율"
                      v-model="check73_2_3" />
                    <label class="preM form-check-label fs-5" for="step73_2_3">
                      고객 전환율
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="preM form-check-input ms-3" type="checkbox" id="step73_2_4" value="유입 채널 조사"
                      v-model="check73_2_4" />
                    <label class="preM form-check-label fs-5" for="step73_2_4">
                      유입 채널 조사
                    </label>
                  </div>
                </div>
                <div class="d-flex justify-content-start align-items-start ms-4" style="width: 78.4rem">
                  <div class="form-check" style="margin-right: 11rem">
                    <input class="preM form-check-input ms-3" type="checkbox" id="step73_2_5" value="DAU / MAU"
                      v-model="check73_2_5" />
                    <label class="preM form-check-label fs-5" for="step73_2_5">
                      DAU / MAU
                    </label>
                  </div>
                  <div class="form-check" style="margin-right: 11.1rem">
                    <input class="preM form-check-input ms-3" type="checkbox" id="step73_2_6" value="고객 리텐션 비율"
                      v-model="check73_2_6" />
                    <label class="preM form-check-label fs-5" for="step73_2_6">
                      고객 리텐션 비율
                    </label>
                  </div>
                  <div class="form-check" style="margin-right: 9.7rem">
                    <input class="preM form-check-input ms-3" type="checkbox" id="step73_2_7" value="CTR / CTC"
                      v-model="check73_2_7" />
                    <label class="preM form-check-label fs-5" for="step73_2_7">
                      CTR / CTC
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="preM form-check-input ms-3" type="checkbox" id="step73_2_8" value="고객 만족도(CS)"
                      v-model="check73_2_8" />
                    <label class="preM form-check-label fs-5" for="step73_2_8">
                      고객 만족도(CS)
                    </label>
                  </div>
                </div>
                <div class="d-flex justify-content-between align-items-start ms-4" style="width: 78.4rem">
                  <div class="form-check" style="margin-right: -0.8rem">
                    <input class="preM form-check-input ms-3" type="checkbox" id="step73_2_9" value="NPS"
                      v-model="check73_2_9" />
                    <label class="preM form-check-label fs-5" for="step73_2_9">
                      NPS
                    </label>
                  </div>
                  <div class="form-check" style="margin-right: -3.5rem">
                    <input class="preM form-check-input ms-3" type="checkbox" id="step73_2_10" value="재구매(방문)율"
                      v-model="check73_2_10" />
                    <label class="preM form-check-label fs-5" for="step73_2_10">
                      재구매(방문)율
                    </label>
                  </div>
                  <div class="form-check" style="margin-right: -3.5rem">
                    <input class="preM form-check-input ms-3" type="checkbox" id="step73_2_11" value="회전율"
                      v-model="check73_2_11" />
                    <label class="preM form-check-label fs-5" for="step73_2_11">
                      회전율
                    </label>
                  </div>
                  <div class="form-check" style="margin-right: 4.7rem">
                    <input class="preM form-check-input ms-3" type="checkbox" id="step73_2_12" value="유저당 평균수입"
                      v-model="check73_2_12" />
                    <label class="preM form-check-label fs-5" for="step73_2_12">
                      유저당 평균수입
                    </label>
                  </div>
                </div>
                <div class="d-flex justify-content-start align-items-start ms-4" style="width: 78.4rem">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="step73_2_13" value="추가적인 의사결정 요소"
                      v-model="check73_2_13" />
                    <label class="preM form-check-label fs-5" for="step73_2_13">
                      추가할 데이터 항목
                    </label>
                    <input class="ms-2 preM" style="
                      height: 2rem;
                      resize: none;
                      outline: none;
                      width: 32rem;
                    " v-model="etc73_2" placeholder="특별한 사유를 적어주세요." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <textarea placeholder="메모..." v-model="memo"
          style="width:76rem; height: 100px !important; resize: none; border: none;"
          class="form-control bg-light p-2 rounded fs-4 preM my-4"></textarea>
      </div>
    </div>
    <!-- <div class="my-3">
      <b-button class="btn btn-sm" style="float: right" @click="saveBuildStep72">저장</b-button>
    </div> -->
  </div>
</template>

<script>
import step73 from "./js/step73.js";
export default {
  name: "step73Com",
  ...step73,
};
</script>

<style scoped>
.modal-wrap {
  width: 81rem;
  height: 41.5rem;
  overflow-y: scroll;
}

.modal-wrap::-webkit-scrollbar {
  width: 12px;
}

.modal-wrap::-webkit-scrollbar-thumb {
  background: #eee;
  border-radius: 10px;
}

.modal-wrap::-webkit-scrollbar-track {
  background: none;
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
input[type="checkbox"]+label {
  position: relative;
  padding-left: 30px;
  /* 체크박스 크기 조절 */
  cursor: pointer;
}

/* 가상 체크박스의 외관 (체크 표시) */
input[type="checkbox"]+label:before {
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
input[type="checkbox"]:checked+label:before {
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

.form-check {
  margin-bottom: 1rem;
}

input[type="checkbox"] {
  display: none;
  vertical-align: middle;
}

label {
  vertical-align: middle;
}

input[type="checkbox"]+label {
  position: relative;
  padding-left: 30px;
  cursor: pointer;
}

input[type="checkbox"]+label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 27px;
  height: 27px;
  border: 1px solid #000;
  background-color: #fff;
}

input[type="checkbox"]:checked+label:before {
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
