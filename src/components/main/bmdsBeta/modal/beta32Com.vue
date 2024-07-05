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
            alt="집"
            style="width: 50px; height: 50px"
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
        7-3 : 성장을 위한 준비 단계 및 계획 수립
      </div>
    </div>

    <div style="width: 81rem; height: 40rem">
      <div class="my-3">
        <label
          for="businessArea"
          class="preSB form-label"
          style="font-size: 30px"
        >
          <span class="primeColor">3.</span> 앞으로 우리가 성장하기 위해서는
          단기, 중기, 장기적으로 무엇을 할 계획인가요?
        </label>
        <div class="image-container" style="margin-right: 7.2rem"></div>
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <label
              for="businessArea"
              class="preSB form-label"
              style="font-size: 25.5px"
            >
              <span class="primeColor">3-1.</span> 단기 목표(1년 이내)</label
            >
            <textarea
              type="text"
              class="form-control bg-light p-2 rounded preM fs-4 mb-4"
              id="businessArea"
              style="border: none; resize: none; height: 15rem; width: 25.6rem"
              placeholder="매출,고용,투자,제품/서비스
              개선 등"
              v-model="question1"
            />
          </div>
          <div>
            <label
              for="businessArea"
              class="preSB form-label"
              style="font-size: 25.5px"
            >
              <span class="primeColor">3-1.</span> 중기 목표(2년~3년
              이내)</label
            >
            <textarea
              type="text"
              class="form-control bg-light p-2 rounded preM fs-4 mb-4"
              id="businessArea"
              style="border: none; resize: none; height: 15rem; width: 25.6rem"
              placeholder="매출,고용,투자,제품/서비스
              개선 등"
              v-model="question2"
            />
          </div>
          <div>
            <label
              for="businessArea"
              class="preSB form-label"
              style="font-size: 25.5px"
            >
              <span class="primeColor">3-1.</span> 장기 목표(4년~5년
              이내)</label
            >
            <textarea
              type="text"
              class="form-control bg-light p-2 rounded preM fs-4 mb-4"
              id="businessArea"
              style="border: none; resize: none; height: 15rem; width: 25.6rem"
              placeholder="매출,고용,투자,제품/서비스
              개선 등"
              v-model="question3"
            />
          </div>
        </div>
      </div>
      <!-- <div
        class="my-3 d-flex flex-column justify-content-between align-items-center"
        style="height: 34rem; padding-left: 3rem"
      >
        <div>
          <label for="businessArea" class="preSB form-label fs-3">
            <span class="primeColor">1-1.</span> 고객 반응 데이터를 확인하기
            위하여 우리는 어떠한 데이터를 확인해야 합니까?</label
          >
          <textarea
            type="text"
            class="form-control3 bg-light p-2 rounded preM fs-4"
            id="businessArea"
            style="border: none; resize: none"
            placeholder="ex. DAU, MAU, 고객방문수, 누적방문수, 재구매율, 매장 대기시간, 테이블 회전율 등"
          ></textarea>
        </div>
      </div> -->
    </div>
    <div class="my-3">
      <b-button class="btn btn-sm" style="float: right" @click="saveBetaPpt33"
        >저장</b-button
      >
    </div>
  </div>
</template>

<script>
import BetaService from "@/services/main/BetaService";
export default {
  data() {
    return {
      question1: "",
      question2: "",
      question3: "",
    };
  },
  methods: {
    saveBetaPpt33() {
      if (confirm("저장하시겠습니까?") == true) {
        var data = {
          question1: this.question1,
          question2: this.question2,
          question3: this.question3,
        };
        BetaService.saveBetaPpt33(this.$route.params.id, data)
          .then(() => {
            alert("저장되었습니다.");
            this.getBetaPpt33(this.$route.params.id);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        alert("취소되었습니다.");
      }
    },
    getBetaPpt33(id) {
      BetaService.getBetaPpt33(id)
        .then((res) => {
          this.question1 = res.data.question1;
          this.question2 = res.data.question2;
          this.question3 = res.data.question3;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getBetaPpt33(this.$route.params.id);
  },
};
</script>

<style scoped>
.basicContentBar {
  width: 32rem;
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

.image-container {
  width: 81rem;
  height: 17rem;
  position: relative;
  overflow: hidden;
  background-image: url("../../../../assets/beta/31.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
