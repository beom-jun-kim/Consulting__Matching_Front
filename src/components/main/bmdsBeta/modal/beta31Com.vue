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
        7-2 : 고객 반응 데이터 수집 및 분석
      </div>
    </div>

    <div style="width: 81rem; height: 40rem">
      <div class="my-3">
        <label
          for="businessArea"
          class="preSB form-label"
          style="font-size: 30px"
        >
          <span class="primeColor">2.</span> 고객 반응 데이터를
          정기적/수시적으로 수집하고 데이터 변화에 대하여 분석합니다.<br />(데이터
          수치의 변화 원인과 개선 방향을 도출합니다.)
        </label>
      </div>
      <div
        class="my-3 d-flex flex-column justify-content-between align-items-center"
        style="height: 34rem"
      >
        <div>
          <textarea
            type="text"
            class="form-control3 bg-light p-2 rounded preM fs-4"
            id="businessArea"
            style="border: none; resize: none"
            placeholder="수집된 데이터를 비쥬얼라이제이션하여 보여주고 의사결정을 진행합니다."
            v-model="question1"
          ></textarea>
        </div>
      </div>
    </div>
    <div class="my-3">
      <b-button class="btn btn-sm" style="float: right" @click="saveBetaPpt32"
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
    };
  },
  methods: {
    saveBetaPpt32() {
      if (confirm("저장하시겠습니까?") == true) {
        var data = {
          question1: this.question1,
        };
        BetaService.saveBetaPpt32(this.$route.params.id, data)
          .then(() => {
            alert("저장되었습니다.");
            this.getBetaPpt32(this.$route.params.id);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        alert("취소되었습니다.");
      }
    },
    getBetaPpt32(id) {
      BetaService.getBetaPpt32(id)
        .then((res) => {
          this.question1 = res.data.question1;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getBetaPpt32(this.$route.params.id);
  },
};
</script>

<style scoped>
.basicContentBar {
  width: 30rem;
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
  width: 79rem;
  height: 28rem;
}
</style>
