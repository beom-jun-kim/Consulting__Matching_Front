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
    <!-- 제목 -->
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
            3) 시장 트렌드
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="mb-5" style="
      width: 81rem;
          height: 2.5rem;
          border-radius: 7px;
          background: rgba(236, 226, 238, 1);
        ">
        <div style="font-size: 17px; margin-left: 39px; line-height: 37px">
          관련 시장에 대한 사회적 이슈와 경제적 이슈를 통해 시장의 흐름을
          살펴보고, 해당 이슈가 내 아이템에 긍정적 측면인지 부정적 측면인지
          분석합니다.
        </div>
      </div>
    </div>
    <div class="d-flex flex-column justify-content-between align-items-center">
      <!-- 제목 엔드 -->
      <div class="d-flex justify-content-between" style="width:65rem;height:2rem;">
        <div class="d-flex justify-content-center align-items-center issueBox"
          style="background-color: white; width:22rem;height:4rem; color:#c179be;">
          사회적 이슈
        </div>
        <div class="d-flex justify-content-center align-items-center issueBox"
          style="background-color: white; width:22rem;height:4rem; color:#c179be;">
          경제적 이슈
        </div>
      </div>

      <div class="d-flex flex-column justify-content-center align-items-center"
        style="background-color: #e7e6e6;width: 81rem; height: 34.5rem;">
        <div class="d-flex justify-content-between align-items-end" style="width: 78rem;margin-top: 1rem;">
          <textarea v-model="marketTrend.social_positive" id="socialIssuesPositive" class="p-3 border"
            style="background-color: white; width: 35rem; height: 14rem;resize:none;"></textarea>
          <div class="arrow-box-up" style="font-size: 1rem; text-align:center;">
            긍정적<br />요인
            <span class="whiteOpportunity">기회</span>
          </div>
          <textarea v-model="marketTrend.economic_positive" id="economicIssuesPositive" class="p-3 border"
            style="background-color: white; width: 35rem; height: 14rem;resize:none;"></textarea>
        </div>
        <div class="my-3 d-flex justify-content-between align-items-start" style="width: 78rem;">
          <textarea v-model="marketTrend.social_negative" id="socialIssuesNegative" class="p-3 border"
            style="background-color: white; width: 35rem; height: 14rem;resize:none;"></textarea>
          <div class="arrow-box-down" style="font-size: 1rem; text-align:center;">
            부정적<br />요인
            <span class="whiteThreat">위협</span>
          </div>
          <textarea v-model="marketTrend.economic_negative" id="economicIssuesNegative" class="p-3 border"
            style="background-color: white; width: 35rem; height: 14rem;resize:none;"></textarea>
        </div>
      </div>
    </div>
    <div class="my-3">
      <b-button class="btn btn-sm" style="float: right" @click="saveTrend">임시저장</b-button>
    </div>
  </div>
</template>

<script>
import BMDSService from "@/services/main/BMDSService";

export default {
  data() {
    return {
      marketTrend: {
        social_positive: "",
        social_negative: "",
        economic_positive: "",
        economic_negative: "",
      },
    };
  },
  methods: {
    getMarketTrendsById(id) {
      BMDSService.getMarketTrends(id)
        .then((res) => {
          if (
            res.data &&
            res.data.marketTrendIssues &&
            res.data.marketTrendIssues.length > 0
          ) {
            const trendData = res.data.marketTrendIssues[0];
            this.marketTrend.social_positive = trendData.social_positive;
            this.marketTrend.social_negative = trendData.social_negative;
            this.marketTrend.economic_positive = trendData.economic_positive;
            this.marketTrend.economic_negative = trendData.economic_negative;
          } else {
            console.warn("API response is not as expected");
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
    saveTrend() {
      if (confirm("저장하시겠습니까?") == true) {
        var data = {
          social_positive: this.marketTrend.social_positive,
          social_negative: this.marketTrend.social_negative,
          economic_positive: this.marketTrend.economic_positive,
          economic_negative: this.marketTrend.economic_negative,
        };
        BMDSService.saveMarketTrends(this.$route.params.id, data)
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
    this.getMarketTrendsById(this.$route.params.id);
  },
};
</script>

<style scoped>
textarea {
  width: 98%;
}

.arrow-box-up {
  position: relative;
  background-color: #c179be;
  border: 1px solid #c179be;
  padding: 10px;
  /* 막대 부분 얇게 조절 */
  width: 6rem;
  height: 15rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.issueBox {
  border: 2px solid #c179be;
  position: relative;
  width: 20vmin;
  /* 예: 부모 요소의 너비를 설정 */
  height: 10vmin;
  /* 예: 부모 요소의 높이를 설정 */
  z-index: 1;
  margin-bottom: -5%;
}

.issueBox::before {
  content: "";
  position: absolute;
  left: 21.9rem;
  top: 50%;
  transform: translateY(-100%);
  border-top: 2rem solid transparent;
  border-left: 1.5rem solid #c179be;
}

.arrow-box-up::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-100%);
  border-left: 5rem solid transparent;
  border-right: 5rem solid transparent;
  border-bottom: 5rem solid #c179be;
  z-index: 1;
}

.arrow-box-down {
  position: relative;
  background-color: #7f7f7f;
  border: 1px solid #7f7f7f;
  padding: 10px;
  width: 6rem;
  height: 15rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.arrow-box-down::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) translateY(100%);
  border-left: 5rem solid transparent;
  border-right: 5rem solid transparent;
  border-top: 5rem solid #7f7f7f;
  z-index: 1;
}

.whiteOpportunity {
  width: 3rem;
  height: 1.5rem;
  border-radius: 15px;
  background: white;
  color: #c179be;
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.whiteThreat {
  width: 3rem;
  height: 1.5rem;
  border-radius: 15px;
  background: white;
  color: #7f7f7f;
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
