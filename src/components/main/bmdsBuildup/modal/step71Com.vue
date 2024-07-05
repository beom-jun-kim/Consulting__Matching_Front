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
      <div class="basicContentBar preSB">7-1 : 고객 반응 데이터 지표 설계</div>
    </div>
    <div class="modal-wrap">
      <div class="my-3">
        <label for="businessArea" class="preSB form-label" style="font-size: 25px">
          <span class="primeColor">1.</span> 제품 또는 서비스가 시장에 진입한
          이후 시장에서 일어나는 일들을 확인하고 분석합니다.
        </label>

        <div class="my-3 d-flex flex-column justify-content-between align-items-center" style="height: 47rem">
          <div>
            <label for="businessArea" class="preSB form-label fs-3">
              <span class="primeColor">1-1.</span> 우리의 경영 목표를 달성하기
              위하여 어떠한 고객 반응 데이터를 확인해야 할까요?
              <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-size: 17px">(아래에 몇가지 예제를
                참조하세요.)</span></label>
            <div class="d-flex flex-column justify-content-between align-items-start" id="businessArea"
              style="width: 76rem; height: 32rem">
              <div class="d-flex justify-content-between align-items-center" style="
                width: 100%;
                height: 8rem;
                border-width: 0 0 1px 0;
                border-style: solid;
                border-color: rgba(0, 0, 0, 0.5);
              ">
                <div class="d-flex flex-column justify-content-between align-items-center"
                  style="width: 19rem; height: 8rem; letter-spacing: -1px">
                  <div class="d-flex justify-content-start align-items-center w-100"
                    style="height: 3rem; padding-left: 8px">
                    <input class="form-check-input" type="checkbox" id="step71_1" v-model="check71_1" />
                    <label class="preSB form-check-label fs-5" for="step71_1" style="color: #53c5c0">
                      DAU(Daily Active Users)
                    </label>
                  </div>
                  <div class="d-flex justify-content-start align-items-start"
                    style="width: 100%; height: 5rem; padding: 8px">
                    <div style="width: 16rem; font-size: 15px">
                      일일 활성 사용자 수. 어떤 서비스나 앱의 하루 동안 이용되는
                      고유 사용자 수.
                    </div>
                  </div>
                </div>
                <div class="d-flex flex-column justify-content-between align-items-center" style="
                  width: 19rem;
                  height: 8rem;
                  letter-spacing: -1px;
                  border-width: 0 1px 0 1px;
                  border-style: solid;
                  border-color: rgba(0, 0, 0, 0.5);
                ">
                  <div class="d-flex justify-content-start align-items-center w-100"
                    style="height: 3rem; padding-left: 8px">
                    <input class="form-check-input" type="checkbox" id="step71_2" v-model="check71_2" />
                    <label class="preSB form-check-label fs-5" for="step71_2" style="color: #53c5c0">
                      MAU(Monthly Active Users)
                    </label>
                  </div>
                  <div class="d-flex justify-content-start align-items-start"
                    style="width: 100%; height: 5rem; padding: 8px">
                    <div style="width: 16rem; font-size: 15px">
                      월간 활성 사용자 수. 어떤 서비스나 앱의 한 달 동안 이용되는
                      고유 사용자 수.
                    </div>
                  </div>
                </div>
                <div class="d-flex flex-column justify-content-between align-items-center" style="
                  width: 19rem;
                  height: 8rem;
                  letter-spacing: -1px;
                  border-width: 0 1px 0 0;
                  border-style: solid;
                  border-color: rgba(0, 0, 0, 0.5);
                ">
                  <div class="d-flex justify-content-start align-items-center w-100"
                    style="height: 3rem; padding-left: 8px">
                    <input class="form-check-input" type="checkbox" id="step71_3" v-model="check71_3" />
                    <label class="preSB form-check-label fs-5" for="step71_3" style="color: #53c5c0">
                      방문 고객 수
                    </label>
                  </div>
                  <div class="d-flex justify-content-start align-items-start"
                    style="width: 100%; height: 5rem; padding: 8px">
                    <div style="width: 17rem; font-size: 15px">
                      특정 시간 동안의 고유 방문자 수. 웹사이트, 상점 등 해당 기간
                      동안의 방문자 수.
                    </div>
                  </div>
                </div>
                <div class="d-flex flex-column justify-content-between align-items-center"
                  style="width: 19rem; height: 8rem; letter-spacing: -1px">
                  <div class="d-flex justify-content-start align-items-center w-100"
                    style="height: 3rem; padding-left: 8px">
                    <input class="form-check-input" type="checkbox" id="step71_4" v-model="check71_4" />
                    <label class="preSB form-check-label fs-5" for="step71_4" style="color: #53c5c0">
                      누적 방문 고객 수
                    </label>
                  </div>
                  <div class="d-flex justify-content-start align-items-start"
                    style="width: 100%; height: 5rem; padding: 8px">
                    <div style="width: 18rem; font-size: 15px">
                      특정 시간 동안의 누적된 모든 고유 방문자 수. 서비스나 앱의
                      전반적인 이용자 측정에 사용.
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-between align-items-center" style="
                width: 100%;
                height: 8rem;
                border-width: 0 0 1px 0;
                border-style: solid;
                border-color: rgba(0, 0, 0, 0.5);
              ">
                <div class="d-flex flex-column justify-content-between align-items-center"
                  style="width: 19rem; height: 8rem; letter-spacing: -1px">
                  <div class="d-flex justify-content-start align-items-center w-100"
                    style="height: 3rem; padding-left: 8px">
                    <input class="form-check-input" type="checkbox" id="step71_5" v-model="check71_5" />
                    <label class="preSB form-check-label fs-5" for="step71_5" style="color: #53c5c0">
                      NPS(Net Promoter Score)
                    </label>
                  </div>
                  <div class="d-flex justify-content-start align-items-start"
                    style="width: 100%; height: 5rem; padding: 8px">
                    <div style="width: 17rem; font-size: 15px">
                      고객 만족도를 측정하기 위한 지표. 고객이 해당 제품이나
                      서비스를 추천할 가능성을 평가하여 조사.
                    </div>
                  </div>
                </div>
                <div class="d-flex flex-column justify-content-between align-items-center" style="
                  width: 19rem;
                  height: 8rem;
                  letter-spacing: -1px;
                  border-width: 0 1px 0 1px;
                  border-style: solid;
                  border-color: rgba(0, 0, 0, 0.5);
                ">
                  <div class="d-flex justify-content-start align-items-center w-100"
                    style="height: 3rem; padding-left: 8px">
                    <input class="form-check-input" type="checkbox" id="step71_6" v-model="check71_6" />
                    <label class="preSB form-check-label fs-5" for="step71_6" style="color: #53c5c0">
                      사용자 후기 및 피드백
                    </label>
                  </div>
                  <div class="d-flex justify-content-start align-items-start"
                    style="width: 100%; height: 5rem; padding: 8px">
                    <div style="width: 18rem; font-size: 15px">
                      제품이나 서비스에 대한 고객의 의견을 담은 리뷰. 개선점을
                      파악하고 고객만족도를 평가 하는 데 활용.
                    </div>
                  </div>
                </div>
                <div class="d-flex flex-column justify-content-between align-items-center" style="
                  width: 19rem;
                  height: 8rem;
                  letter-spacing: -1px;
                  border-width: 0 1px 0 0;
                  border-style: solid;
                  border-color: rgba(0, 0, 0, 0.5);
                ">
                  <div class="d-flex justify-content-start align-items-center w-100"
                    style="height: 3rem; padding-left: 8px">
                    <input class="form-check-input" type="checkbox" id="step71_7" v-model="check71_7" />
                    <label class="preSB form-check-label fs-5" for="step71_7" style="color: #53c5c0">
                      사용자 이용 통계
                    </label>
                  </div>
                  <div class="d-flex justify-content-start align-items-start"
                    style="width: 100%; height: 5rem; padding: 8px">
                    <div style="width: 17rem; font-size: 15px">
                      서비스나 플랫폼의 이용 패턴 및 행동을 측정하고 분석한
                      데이터. 사용자 활동 및 성과를 이해하여 개선점을 도출하는 데
                      활용.
                    </div>
                  </div>
                </div>
                <div class="d-flex flex-column justify-content-between align-items-center"
                  style="width: 19rem; height: 8rem; letter-spacing: -1px">
                  <div class="d-flex justify-content-start align-items-center w-100"
                    style="height: 3rem; padding-left: 8px">
                    <input class="form-check-input" type="checkbox" id="step71_8" v-model="check71_8" />
                    <label class="preSB form-check-label fs-5" for="step71_8" style="color: #53c5c0">
                      CAC 고객획득비용
                    </label>
                  </div>
                  <div class="d-flex justify-content-start align-items-start"
                    style="width: 100%; height: 5rem; padding: 8px">
                    <div style="width: 17rem; font-size: 15px">
                      고객 획득 비용. 특정 기간 동안의 마케팅 및 판매 비용을 해당
                      기간 동안 새로운 고객을 확보하는 데 소요된 비용으로 측정.
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-between align-items-center" style="
                width: 100%;
                height: 8rem;
                border-width: 0 0 1px 0;
                border-style: solid;
                border-color: rgba(0, 0, 0, 0.5);
              ">
                <div class="d-flex flex-column justify-content-between align-items-center"
                  style="width: 19rem; height: 8rem; letter-spacing: -1px">
                  <div class="d-flex justify-content-start align-items-center w-100"
                    style="height: 3rem; padding-left: 8px">
                    <input class="form-check-input" type="checkbox" id="step71_9" v-model="check71_9" />
                    <label class="preSB form-check-label fs-5" for="step71_9" style="color: #53c5c0">
                      재구매(방문)율
                    </label>
                  </div>
                  <div class="d-flex justify-content-start align-items-start"
                    style="width: 100%; height: 5rem; padding: 8px">
                    <div style="width: 17rem; font-size: 15px">
                      특정 기간 동안 이전에 상품이나 서비스를 구매(방문)한 고객이
                      동일한 기간 동안 다시 구매(방문)하는 비율을 나타내는 지표.
                    </div>
                  </div>
                </div>
                <div class="d-flex flex-column justify-content-between align-items-center" style="
                  width: 19rem;
                  height: 8rem;
                  letter-spacing: -1px;
                  border-width: 0 1px 0 1px;
                  border-style: solid;
                  border-color: rgba(0, 0, 0, 0.5);
                ">
                  <div class="d-flex justify-content-start align-items-center w-100"
                    style="height: 3rem; padding-left: 8px">
                    <input class="form-check-input" type="checkbox" id="step71_10" v-model="check71_10" />
                    <label class="preSB form-check-label fs-5" for="step71_10" style="color: #53c5c0">
                      매장내 고객 대기시간
                    </label>
                  </div>
                  <div class="d-flex justify-content-start align-items-start"
                    style="width: 100%; height: 5rem; padding: 8px">
                    <div style="width: 17rem; font-size: 15px">
                      매장에서 상품이나 서비스를 이용하기 위해 대기하는 시간을
                      나타내며, 서비스 품질과 만족도에 영향을 미칠 수 있는 중요한
                      요소.
                    </div>
                  </div>
                </div>
                <div class="d-flex flex-column justify-content-between align-items-center" style="
                  width: 19rem;
                  height: 8rem;
                  letter-spacing: -1px;
                  border-width: 0 1px 0 0;
                  border-style: solid;
                  border-color: rgba(0, 0, 0, 0.5);
                ">
                  <div class="d-flex justify-content-start align-items-center w-100"
                    style="height: 3rem; padding-left: 8px">
                    <input class="form-check-input" type="checkbox" id="step71_11" v-model="check71_11" />
                    <label class="preSB form-check-label fs-5" for="step71_11" style="color: #53c5c0">
                      테이블 회전율
                    </label>
                  </div>
                  <div class="d-flex justify-content-start align-items-start"
                    style="width: 100%; height: 5rem; padding: 8px">
                    <div style="width: 17rem; font-size: 15px">
                      음식점이나 카페에서 특정 테이블이나 좌석 이 일정 기간 동안
                      얼마나 빨리 새로운 고객 에게 양보되는지를 나타내는 지표.
                    </div>
                  </div>
                </div>
                <div class="d-flex flex-column justify-content-between align-items-center"
                  style="width: 19rem; height: 8rem; letter-spacing: -1px">
                  <div class="d-flex justify-content-start align-items-center w-100"
                    style="height: 3rem; padding-left: 8px">
                    <input class="form-check-input" type="checkbox" id="step71_12" v-model="check71_12" />
                    <label class="preSB form-check-label fs-5" for="step71_12" style="color: #53c5c0">
                      평당 매출액
                    </label>
                  </div>
                  <div class="d-flex justify-content-start align-items-start"
                    style="width: 100%; height: 5rem; padding: 8px">
                    <div style="width: 18rem; font-size: 15px">
                      특정 공간이나 매장 전체의 매출을 평균적인 면적으로 나눈
                      값으로, 매장의 효율성과 매출 성과를 측정하는 지표.
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-between align-items-center" style="width: 100%; height: 8rem">
                <div class="d-flex flex-column justify-content-between align-items-center"
                  style="width: 19rem; height: 8rem; letter-spacing: -1px">
                  <div class="d-flex justify-content-start align-items-center w-100"
                    style="height: 3rem; padding-left: 8px">
                    <input class="form-check-input" type="checkbox" id="step71_13" v-model="check71_13" />
                    <label class="preSB form-check-label fs-5" for="step71_13" style="color: #53c5c0">
                      고객 이탈률
                    </label>
                  </div>
                  <div class="d-flex justify-content-start align-items-start"
                    style="width: 100%; height: 5rem; padding: 8px">
                    <div style="width: 18rem; font-size: 15px">
                      특정 기간 동안 서비스나 제품 이용을 중단한 고객의 비율을
                      나타내며, 고객 유지와 관련된 중요한 지표.
                    </div>
                  </div>
                </div>
                <div class="d-flex flex-column justify-content-between align-items-center" style="
                  width: 19rem;
                  height: 8rem;
                  letter-spacing: -1px;
                  border-width: 0 1px 0 1px;
                  border-style: solid;
                  border-color: rgba(0, 0, 0, 0.5);
                ">
                  <div class="d-flex justify-content-start align-items-center w-100"
                    style="height: 3rem; padding-left: 8px">
                    <input class="form-check-input" type="checkbox" id="step71_14" v-model="check71_14" />
                    <label class="preSB form-check-label fs-5" for="step71_14" style="color: #53c5c0">
                      CTR(Click-Through Rate)
                    </label>
                  </div>
                  <div class="d-flex justify-content-start align-items-start"
                    style="width: 100%; height: 5rem; padding: 8px">
                    <div style="width: 17rem; font-size: 15px">
                      CTR은 특정 광고나 링크를 클릭한 사용자 의 비율을 나타내며,
                      디지털 마케팅에서 광고 효과를 측정하는 지표.
                    </div>
                  </div>
                </div>
                <div class="d-flex flex-column justify-content-between align-items-center" style="
                  width: 19rem;
                  height: 8rem;
                  letter-spacing: -1px;
                  border-width: 0 1px 0 0;
                  border-style: solid;
                  border-color: rgba(0, 0, 0, 0.5);
                ">
                  <div class="d-flex justify-content-start align-items-center w-100"
                    style="height: 3rem; padding-left: 8px">
                    <input class="form-check-input" type="checkbox" id="step71_15" v-model="check71_15" />
                    <label class="preSB form-check-label fs-5" for="step71_15" style="color: #53c5c0">
                      총 매출(매출 성장률)
                    </label>
                  </div>
                  <div class="d-flex justify-content-start align-items-start"
                    style="width: 100%; height: 5rem; padding: 8px">
                    <div style="
                      width: 16rem;
                      font-size: 15px;
                      letter-spacing: -1.5px;
                    ">
                      총 매출은 특정 기간 동안의 전체 매출을 나타내며, 매출
                      성장률은 이전 기간에 비해 얼마나 증가했는지를 백분율로
                      나타낸 지표.
                    </div>
                  </div>
                </div>
                <div class="d-flex flex-column justify-content-between align-items-center"
                  style="width: 19rem; height: 8rem; letter-spacing: -1px">
                  <div class="d-flex justify-content-start align-items-center w-100"
                    style="height: 3rem; padding-left: 8px">
                    <input class="form-check-input" type="checkbox" id="step71_16" v-model="check71_16" />
                    <label class="preSB form-check-label fs-5" for="step71_16" style="color: #53c5c0">
                      ETC.
                    </label>
                  </div>
                  <div class="d-flex justify-content-start align-items-start" style="
                    width: 100%;
                    height: 5rem;
                    font-size: 15px;
                    padding: 8px;
                  ">
                    <textarea v-if="check71_16" class="ms-2 preM" style="
                      height: 5rem;
                      resize: none;
                      outline: none;
                      width: 19rem;
                    " v-model="check71_16_text" placeholder="특별한 사유를 적어주세요." />
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
    </div>
    <!-- <div class="my-3">
      <b-button class="btn btn-sm" style="float: right" @click="saveBuildStep71">저장</b-button>
    </div> -->
  </div>
</template>

<script>
import step71 from "./js/step71.js";
export default {
  name: "step71Com",
  ...step71,
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
  width: 23px;
  height: 23px;
  border: 1px solid #000;
  background-color: #fff;
  margin-top: 3px;
}

input[type="checkbox"]:checked+label:before {
  content: "\2713";
  position: absolute;
  left: 0;
  top: 0;
  text-align: center;
  font-size: 40px;
  font-weight: 600;
  line-height: 5px;
  color: #53c5c0;
  margin-top: 3px;
}
</style>
