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
    <div class="d-flex justify-content-start preEB" style="height: 5rem">
      <div class="d-flex" style="margin-left: 1rem">
        <div class="d-flex justify-content-between" style="width: 40rem">
          <img
            src="@/assets/선물.png"
            alt="돋보기"
            style="width: 50px; height: 50px"
          />
          <div style="font-size: 35px; color: #fe7003">STEP 02 :</div>
          <div style="font-size: 35px">아이디에이션(아이템 선정)</div>
        </div>
      </div>
    </div>
    <div>
      <div class="basicContentBar preSB">2-1 : 목표시장 선정 및 확인</div>
    </div>

    <div style="width: 81rem; height: 37rem">
      <div class="my-3">
        <label
          for="businessArea"
          class="form-label preSB"
          style="font-size: 27px"
        >
          <span class="primeColor">1.</span> 수요 고객이 존재하는 시장(Market)을
          알아봅니다.
        </label>
      </div>
      <div
        class="my-3 d-flex flex-column justify-content-center align-items-center"
      >
        <div>
          <label
            for="businessArea"
            class="form-label preSB mb-3"
            style="font-size: 27px"
          >
            <span class="primeColor">1-1.</span> 어떠한 시장(마켓)을 생각하고
            계시나요?
          </label>
          <input
            type="text"
            class="form-control bg-light p-2 rounded mb-5 preM fs-4"
            id="businessArea1"
            style="
              border: none;
              resize: none;
              outline: none;
              border-radius: 15px;
            "
            placeholder="ex. 반려동물시장, 카페시장, 유통시장 등"
            v-model="question1"
          />
        </div>
        <div>
          <label class="form-label preSB mb-3" style="font-size: 27px">
            <span class="primeColor">1-2.</span> 목표로 하시는 시장(거점시장)을
            선택해 볼까요?
          </label>
          <input
            type="text"
            class="form-control bg-light p-2 rounded mb-5 preM fs-4"
            id="businessArea2"
            style="
              border: none;
              resize: none;
              outline: none;
              border-radius: 15px;
            "
            placeholder="ex. 반려동물시장->반려동물용 사료 시장, 카페시장->베이커리카페 시장"
            v-model="question2"
          />
        </div>
        <div>
          <label class="form-label preSB mb-3" style="font-size: 27px">
            <span class="primeColor">1-3.</span> 우리가 선정한 시장의 규모는
            어느 정도이고 또 얼마나 성장하고 있나요?
          </label>
          <input
            type="text"
            class="form-control bg-light p-2 rounded mb-3 preM fs-4"
            id="businessArea3"
            style="
              border: none;
              resize: none;
              outline: none;
              border-radius: 15px;
            "
            placeholder="ex. 반려동물시장->반려동물용 사료 시장, 카페시장->베이커리카페 시장"
            v-model="question3"
          />
        </div>
      </div>
    </div>
    <div class="my-3">
      <b-button class="btn btn-sm" style="float: right" @click="saveBetaPpt7"
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
      question1: "", // 1-1-1
      question2: "", // 1-1-2
      question3: "", // 1-1-3
    };
  },
  methods: {
    saveBetaPpt7() {
      if (confirm("저장하시겠습니까?")) {
        var data = {
          question1: this.question1,
          question2: this.question2,
          question3: this.question3,
        };
        BetaService.saveBetaPpt7(this.$route.params.id, data)
          .then(() => {
            alert("저장되었습니다.");
            this.getBetaPpt7(this.$route.params.id);
          })
          .catch(() => {});
      } else {
        alert("취소되었습니다.");
      }
    },
    getBetaPpt7(id) {
      BetaService.getBetaPpt7(id)
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
    this.getBetaPpt7(this.$route.params.id);
  },
};
</script>

<style scoped>
.basicContentBar {
  width: 26.1rem;
  background-color: #fe7003;
  color: white;
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
  color: rgb(249, 156, 27);
}

.form-control {
  width: 75rem;
  height: 5rem;
}
</style>
