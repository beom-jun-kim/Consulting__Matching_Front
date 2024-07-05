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
            5) 규제와 법규
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
          환경적 / 경제적 / 사회적 정책 등 내 비즈니스모델과 관련된 규제와
          법규에 대해 파악하고 현재는 어떠한 방식으로 각 규제들을 대응하고
          있는지 알아봅니다.
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-start" style="width:81rem;height:40rem;margin-top:2rem;">
      <div class="d-flex flex-column justify-content-center" style="width:40rem;height: 39rem;border: 8px solid #D19BCE">
        <fieldset class="d-flex justify-content-center align-items-center">
          <legend class="d-flex justify-content-center align-items-center" style="
            color: #A84EA4;
            margin-top: -5rem;
            background: white;
            width: 24rem;
            height: 2rem;
            font-size:25px;
          ">
            제품(서비스) 관련 규제 및 법규
          </legend>
        </fieldset>
        <div style="height: 32rem; overflowy: scroll">
          <textarea class="p-3" style="
              border: none;
              font-size: 15px;
              width: 100%;
              height: 100%;
              resize:none;
            " v-model="regulation"></textarea>
        </div>
      </div>
      <div style="margin-top:1rem;">
        <div class="d-flex justify-content-start align-items-center"
          style="width:41rem; height: 3rem; background:#D19BCE; font-size:20px; color:white; font-weight:600;">
          <div class="minTri1"></div><span style="margin-left:2rem;">규제 및 법규 재응 현황</span>
        </div>
        <div class="d-flex justify-content-end"
          style="width:41rem; height: 35rem; border-width: 0 8px 8px 0; border-style: solid; border-color:#D19BCE;">
          <textarea class="p-3" style="
              border: none;
              font-size: 15px;
              width: 100%;
              height: 34rem;
              resize:none;
            " v-model="response"></textarea>
        </div>
      </div>
    </div>
    <div>
      <b-button class="btn btn-sm" style="float: right" @click="saveRegul">임시저장</b-button>
    </div>
  </div>
</template>

<script>
import BMDSService from "@/services/main/BMDSService";

export default {
  data() {
    return {
      regulation: "",
      response: "",
    };
  },
  methods: {
    findRegulation(id) {
      BMDSService.getRegulations(id)
        .then((res) => {
          this.regulation = res.data.regulations[0].regulation;
          this.response = res.data.regulations[0].response;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    saveRegul() {
      if (confirm("저장하시겠습니다?") == true) {
        var data = {
          regulation: this.regulation,
          response: this.response,
        };
        BMDSService.saveRegulations(this.$route.params.id, data)
          .then((res) => {
            if (!alert("저장되었습니다.")) {
              console.log(res);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
  mounted() {
    this.findRegulation(this.$route.params.id);
  },
};
</script>

<style scoped>
.technologyTrends {
  width: 5rem;
  height: 400px;
  background: #e7e6e6;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.titleContent {
  font-size: 17px;
  text-align: center;
  margin-top: 2rem;
  color: rgb(197, 90, 194);
}

.sizedBox {
  width: 5rem;
  height: 400px;
}

.lineOne {
  width: 83rem;
  height: 2.5rem;
  margin-left: -1rem;
  z-index: 1;
}

.technologyTrends_1 {
  width: 15rem;
  height: 400px;
}

.minTri1 {
  width: 0;
  height: 0;
  border-top: 0rem solid transparent;
  border-bottom: 3.5rem solid transparent;
  border-left: 1rem solid #3259a9;
  position: relative;
  top: 0;
  left: 0;
  z-index: 2;
}
</style>
