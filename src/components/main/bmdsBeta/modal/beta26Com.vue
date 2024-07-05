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
        <div class="d-flex justify-content-between" style="width: 24rem">
          <img
            src="@/assets/beta/step06집.png"
            alt="사람"
            style="width: 50px; height: 50px"
          />
          <div class="preEB" style="font-size: 35px; color: #0098d5">
            STEP 06 :
          </div>
          <div class="preEB" style="font-size: 35px">시장 론칭</div>
        </div>
      </div>
    </div>
    <div>
      <div class="basicContentBar preSB">
        6-1 : 인바운드/아웃바운드 채널 설계
      </div>
    </div>

    <div style="width: 81rem; height: 40rem">
      <div class="my-3">
        <label
          for="businessArea"
          class="preSB form-label"
          style="font-size: 30px"
        >
          <span class="primeColor">1.</span> 고객과 의사소통하기 위한 마케팅
          채널을 정의하고 설계합니다.
        </label>
      </div>
      <div
        class="my-3 d-flex flex-column justify-content-between align-items-center"
        style="height: 33rem; padding-left: 3rem"
      >
        <div>
          <label
            for="businessArea"
            class="preSB form-label"
            style="font-size: 25.5px"
          >
            <span class="primeColor">1-1.</span> 우리가 제공하는 제품 또는
            서비스에 대해 최종 목표 고객이 가장 이해하기 쉽고 접근하기 쉬운
            마케팅 채널은 무엇입니까?</label
          >
          <textarea
            type="text"
            class="form-control1 bg-light p-2 rounded preM fs-4 mb-4"
            id="businessArea"
            style="border: none; resize: none; height: 7rem"
            placeholder="직접 반응 온라인 마케팅(이메일), 소셜미디어(블로그,포럼,게시판,유튜브,인스타그램 등), 검색엔진(검색 키워드 및 검색순위), 원격회의(화상서비스회의),DM(Direct Marketing),직접광고,직접 반응 등"
            v-model="question1"
          />
          <label
            for="businessArea"
            class="preSB form-label"
            style="font-size: 25.5px"
          >
            <span class="primeColor">1-2.</span> 여러가지 채널들을 우선
            순위화하고 각 채널 단위로 실행 계획을 수립합니다.</label
          >
          <input
            type="text"
            class="form-control bg-light p-2 rounded preM fs-4 mb-4"
            id="businessArea"
            style="border: none; resize: none"
            placeholder="1-1에서 채널을 선택하시고 활동 계획을 작성하여 주세요."
            v-model="question2"
          />
          <label
            for="businessArea"
            class="preSB form-label"
            style="font-size: 25.5px"
          >
            <span class="primeColor">1-2.</span> 각 채널에 필요한 활동을
            구체적으로 수행하시기 바랍니다.</label
          >
          <input
            type="text"
            class="form-control bg-light p-2 rounded preM fs-4"
            id="businessArea"
            style="border: none; resize: none"
            placeholder="ex.고객에게 전달할 내용 작성, 처리할 수 있는 채널 또는 도구 설계"
            v-model="question3"
          />
        </div>
      </div>
    </div>
    <div class="my-3">
      <b-button class="btn btn-sm" style="float: right" @click="saveBetaPpt27"
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
      question3: "",
    };
  },
  methods: {
    saveBetaPpt27() {
      if (confirm("저장하시겠습니까?")) {
        var data = {
          question1: this.question1,
          question2: this.question2,
          question3: this.question3,
        };
        BetaService.saveBetaPpt27(this.$route.params.id, data)
          .then(() => {
            alert("저장되었습니다.");
          })
          .catch(() => {});
      } else {
        alert("취소되었습니다.");
      }
    },
    getBetaPpt27(id) {
      BetaService.getBetaPpt27(id)
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
    this.getBetaPpt27(this.$route.params.id);
  },
};
</script>

<style scoped>
.basicContentBar {
  width: 30rem;
  background-color: #0098d5;
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
  color: #0098d5;
}

.form-control {
  width: 75rem;
  height: 5rem;
}

.form-control1 {
  width: 75rem;
  height: 12rem;
}

.form-control2 {
  width: 75rem;
  height: 15rem;
}

.form-control3 {
  width: 75rem;
  height: 28rem;
}
</style>
