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
            4) 기술 트렌드
          </div>
        </div>
      </div>
    </div>
    <div>
      <div style="
      width: 81rem;
          height: 2.5rem;
          border-radius: 7px;
          background: rgba(236, 226, 238, 1);
        ">
        <div style="font-size: 17px; margin-left: 39px; line-height: 37px">
          시장 트렌드에 근거하여 제반기술의 이슈와 기술동향을 분석하고 그에 따른
          전략적 핵심기술을 정의합니다.
        </div>
      </div>
    </div>
    <div style="width: 81rem; height: 41rem;">
      <div class="my-3" style="width: 81rem; height: 14.9rem;">
        <div class="image-container"></div>
      </div>
      <div style="width: 81rem; height: 28rem;">
        <div class="d-flex justify-content-between">
          <div class="technologyTrends">
            <div style="width: 20px">내용</div>
          </div>
          <textarea class="technologyTrends_1" v-model="why_tech_issue"></textarea>
          <textarea class="technologyTrends_1" v-model="why_tech_trend"></textarea>
          <textarea class="technologyTrends_1" v-model="why_tech_core"></textarea>
          <textarea class="technologyTrends_1" v-model="why_tech_def"></textarea>
          <textarea class="technologyTrends_1" v-model="why_tech_invest"></textarea>
        </div>
        <b-button class="btn btn-sm mt-2" style="float: right" @click="saveTrends">임시저장</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import BMDSService from "@/services/main/BMDSService";

export default {
  data() {
    return {
      why_tech_issue: "",
      why_tech_trend: "",
      why_tech_core: "",
      why_tech_def: "",
      why_tech_invest: "",
    };
  },
  methods: {
    getTechTrends(id) {
      BMDSService.getTechTrends(id).then((response) => {
        this.why_tech_issue = response.data.why_tech_issue;
        this.why_tech_trend = response.data.why_tech_trend;
        this.why_tech_core = response.data.why_tech_core;
        this.why_tech_def = response.data.why_tech_def;
        this.why_tech_invest = response.data.why_tech_invest;
      });
    },
    saveTrends() {
      if (confirm("저장하시겠습니까?") == true) {
        var data = {
          why_tech_issue: this.why_tech_issue,
          why_tech_trend: this.why_tech_trend,
          why_tech_core: this.why_tech_core,
          why_tech_def: this.why_tech_def,
          why_tech_invest: this.why_tech_invest,
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
    this.getTechTrends(this.$route.params.id);
  },
};
</script>

<style scoped>
.image-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background-image: url("../../../../assets/기술트렌드.png");
  background-size: contain;
  background-position: center;
}

.technologyTrends {
  width: 5rem;
  height: 24rem;
  background: #e7e6e6;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.technologyTrends_1 {
  width: 15rem;
  height: 24rem;
  resize: none;
}
</style>
