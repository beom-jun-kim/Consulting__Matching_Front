<template>
  <div class="">
    <div class="d-flex justify-content-end align-items-center">
      <div style="color: gray; font-size: 1rem; margin-right: 0.5rem">
        Business Model Design Solution
      </div>
      <div style="margin-right: 1rem">
        <img src="@/assets/bmds3/흑백 로고.png" />
      </div>
    </div>
    <div class="d-flex justify-content-start" style="height: 5rem">
      <div class="d-flex" style="margin-left: 1rem">
        <div style="
            font-size: 5.5rem;
            width: 6rem;
            color: rgba(236, 226, 238, 1);
            margin: -1.7rem 0.5rem 0px -5.5rem;
          ">
          01
        </div>
        <div class="d-flex flex-column">
          <div style="font-size: 1rem">Market Insight</div>
          <div style="font-size: 2rem; color: rgb(199, 121, 196)">
            1) 시장 정의
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="mb-4" style="
          width: 81rem;
          height: 2.5rem;
          border-radius: 7px;
          background: rgba(236, 226, 238, 1);
        ">
        <div style="font-size: 17px; margin-left: 39px; line-height: 37px">
          제품(서비스)의 시장에 대해 간략히 서술하고, 해당 시장의 시장 규모와
          시장의 성장성을 파악합니다.
        </div>
      </div>
    </div>

    <div style="width: 81rem; height: 38.5rem">
      <!-- 시장 개요 입력 부분 -->
      <div class="d-flex flex-column justify-content-between align-items-start"
        style="width: 100%; height: 6rem; border: 1px solid #a84ea4">
        <div class="overview-title" style="font-size: 1rem; margin: 10px 0 0 15px">
          ●시장 개요
        </div>
        <textarea style="
            width: 100%;
            height: 4.5rem;
            border: none;
            outline: none;
            resize: none;
          " v-model="marketInsight.why_market_overview" placeholder="시장 개요를 입력하세요..."></textarea>
      </div>

      <!-- 이미지 및 입력 폼 부분 -->
      <div class="tam-sam-som">
        <div class="definition-title" style="margin: 20px 0 0 30px">
          ●TAM-SAM-SOM 정의
        </div>
        <div class="circle-container">
          <div class="col-4">
            <div class="circle-box-content">
              <span class="label label-tam">TAM</span>
              <div class="middle-circle">
                <span class="label label-sam">SAM</span>
                <div class="small-circle">
                  <span class="label label-som">SOM</span>
                </div>
              </div>
            </div>
          </div>

          <div class="input-section col-6">
            <div class="row" style="height: 33.3%">
              <label for="tam_num">
                <span>시장규모</span><input type="number" v-model="marketInsight.why_tam_size"
                  placeholder="ex: 300,000,000,000" />
              </label>
              <label for="tam_txt">
                <span style="font-size: 1.2rem">전체 시장 정의</span><input type="text" v-model="marketInsight.why_tam_name"
                  placeholder="ex: 글로벌 헬스케어 어플리케이션 시장" />
              </label>
            </div>
            <div class="row" style="height: 33.3%">
              <label for="sam_num">
                <span>시장규모</span><input type="number" v-model="marketInsight.why_sam_size"
                  placeholder="ex: 30,000,000,000" />
              </label>
              <label for="sam_txt">
                <span>유효 시장 정의</span><input type="text " v-model="marketInsight.why_sam_name"
                  placeholder="ex: 헬스케어 어플리케이션 시장" />
              </label>
            </div>
            <!--  -->
            <div class="row" style="height: 33.3%">
              <label for="som_num">
                <span>시장규모</span><input type="number" v-model="marketInsight.why_som_size"
                  placeholder="ex: 3,000,000,000" />
              </label>
              <label for="som_txt">
                <span>수익 시장 정의</span><input type="text" v-model="marketInsight.why_som_name"
                  placeholder="ex: 만보기 어플리케이션 시장" />
              </label>
            </div>
            <!--  -->
          </div>
        </div>
      </div>

      <!-- 가로 배치 입력 폼 부분 -->
      <div style="font-size: 1rem; margin: 20px 0 15px 15px">
        ●타겟시장 설정
      </div>
      <div class="horizontal-inputs">
        <div class="icon-input-container" style="border: 1px solid #a84ea4">
          <div class="d-flex justify-content-center align-items-center" style="width: 4rem; height: 4rem">
            <i class="icon">🔍</i>
          </div>
          <div class="input-container">
            <div class="input-label">시장 정의</div>
            <input type="text" style="font-size: 15px; width: 19rem; height: 3rem" v-model="marketInsight.why_set_def" />
          </div>
        </div>
        <div class="icon-input-container" style="border: 1px solid #a84ea4">
          <div class="d-flex justify-content-center align-items-center" style="width: 4rem; height: 4rem">
            <i class="icon">🔍</i>
          </div>
          <div class="input-container">
            <div class="input-label">시장 규모</div>
            <input type="number" style="font-size: 15px; width: 13rem; height: 3rem"
              v-model="marketInsight.why_set_size" />
          </div>
        </div>
        <div class="icon-input-container" style="border: 1px solid #a84ea4">
          <div class="d-flex justify-content-center align-items-center" style="width: 4rem; height: 4rem">
            <i class="icon">🔍</i>
          </div>
          <div class="input-container">
            <div class="input-label">시장 분류</div>
            <input type="text" style="font-size: 15px; width: 13rem; height: 3rem"
              v-model="marketInsight.why_set_category" />
          </div>
        </div>
        <div class="icon-input-container" style="border: 1px solid #a84ea4">
          <div class="d-flex justify-content-center align-items-center" style="width: 4rem; height: 4rem">
            <i class="icon">🔍</i>
          </div>
          <div class="input-container">
            <div class="input-label">평균 성장률</div>
            <input type="number" style="font-size: 15px; width: 13rem; height: 3rem"
              v-model="marketInsight.why_set_growth" />%
          </div>
        </div>
      </div>
    </div>
    <div>
      <button class="btn btn-sm btn-primary" style="float: right; margin-top: 2.5rem;" @click="insightSave">
        임시저장
      </button>
    </div>
  </div>
</template>

<script>
import BMDSService from "@/services/main/BMDSService";
/* eslint-disable */

export default {
  data() {
    return {
      marketInsight: {
        why_market_overview: "",
        why_tam_name: "",
        why_tam_size: null,
        why_sam_name: "",
        why_sam_size: null,
        why_som_name: "",
        why_som_size: null,
        why_set_def: "",
        why_set_size: null,
        why_set_category: "",
        why_set_growth: null,
      },
    };
  },
  methods: {
    getInsight(id) {
      BMDSService.getWhy1com(id)
        .then((res) => {
          this.marketInsight = res.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    insightSave() {
      if (confirm("저장하시겠습니까?") == true) {
        var data = {
          why_market_overview: this.marketInsight.why_market_overview,
          why_tam_name: this.marketInsight.why_tam_name,
          why_tam_size: parseInt(this.marketInsight.why_tam_size),
          why_sam_name: this.marketInsight.why_sam_name,
          why_sam_size: parseInt(this.marketInsight.why_sam_size),
          why_som_name: this.marketInsight.why_som_name,
          why_som_size: parseInt(this.marketInsight.why_som_size),
          why_set_def: this.marketInsight.why_set_def,
          why_set_size: parseInt(this.marketInsight.why_set_size),
          why_set_category: this.marketInsight.why_set_category,
          why_set_growth: this.marketInsight.why_set_growth,
        };
        BMDSService.createWhy1com(this.$route.params.id, data)
          .then((res) => {
            if (!alert("저장되었습니다.")) {
              console.log(res);
            }
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
  },
  mounted() {
    this.getInsight(this.$route.params.id);
  },
};
</script>

<style scoped>
.pink-box {
  background-color: #ece2ee;
  padding: 1rem;
  margin: 1rem 0;
}

.circle-box-content {
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  background-color: #a84ea4;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
}

.middle-circle {
  width: 14rem;
  height: 14rem;
  border-radius: 50%;
  background-color: #c179be;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
}

.small-circle {
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background-color: #d19bce;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.label {
  position: absolute;
  color: white;
  font-weight: bold;
}

.label-tam {
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
}

.label-sam {
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
}

.label-som {
  position: relative;
  color: white;
  font-weight: bold;
}

.col-6 label {
  display: flex;
  /* label 내의 요소들을 가로로 배열합니다. */
  align-items: center;
  /* 세로 방향으로 중앙 정렬합니다. */
  justify-content: space-between;
  /* 라벨과 입력 사이의 최대 간격을 확보합니다. */
  margin-bottom: 10px;
  /* 각 label 간의 여백을 제공합니다. */
}

.col-6 label span {
  margin-right: 10px;
  /* span과 input 사이에 약간의 여백을 제공합니다. */
}

.col-6 label input {
  width: 70%;
  /* input의 폭을 조절합니다. 필요에 따라 변경 가능합니다. */
  font-size: 1rem;
  /* input의 폰트 크기를 부모인 label의 폰트 크기와 동일하게 설정합니다. */
  border: none;
}

.title-text {
  font-size: 1rem;
}

.title-text h1 {
  color: #a84ea4;
}

.pink-box {
  font-size: 1rem;
}

.market-overview {
  border: 1px solid #a84ea4;
}

.market-overview textarea {
  border: none;
  outline: none;
}

.definition-title {
  width: 100%;
  height: 2rem;
  font-size: 1rem;
}

.input-section label span {
  color: #a84ea4;
}

.input-section label span {
  font-size: 1.2rem;
}

.horizontal-inputs {
  display: flex;
}

.horizontal-inputs>div {
  border: 1px solid #a84ea4;
  box-sizing: border-box;
  /* border와 padding을 포함한 전체 너비를 정의 */
  margin-right: 10px;
}

.horizontal-inputs>div:last-child {
  margin-right: 0;
  /* 마지막 컨테이너는 오른쪽 마진을 없애줌 */
}

.horizontal-inputs>div:nth-child(1) {
  flex: 4;
  /* 첫 번째 항목 (시장정의)에 대한 flex 값을 4로 설정 */
}

.horizontal-inputs>div:nth-child(n + 2) {
  flex: 3;
  /* 두 번째, 세 번째, 네 번째 항목들에 대한 flex 값을 3으로 설정 */
}

.horizontal-inputs input {
  width: 100%;
  /* 부모 요소의 전체 너비 사용 */
  padding: 5px;
  /* 편의를 위한 패딩 추가 */
  margin: 0;
  /* margin을 0으로 설정 */
  box-sizing: border-box;
  /* border와 padding을 포함한 전체 너비를 정의 */
}

.icon-input-container {
  display: flex;
  align-items: center;
  border: 1px solid #a84ea4;
  padding: 5px;
  box-sizing: border-box;
}

.icon {
  margin-right: 5px;
}

.icon-input-container input {
  flex-grow: 1;
  border: none;
  outline: none;
}

.input-container {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.input-label {
  font-size: 1rem;
}

.input-container input {
  padding: 5px;
  /* 내부 여백 설정 */
  box-sizing: border-box;
  /* padding과 border를 전체 크기에 포함 */
  background-color: #f0f0f0;
  /* 회색 배경색 설정 */
  font-size: 1.5rem;
}

.tam-sam-som {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.circle-container {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
</style>
