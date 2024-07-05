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
        <div class="d-flex justify-content-between" style="width: 38rem">
          <img
            src="@/assets/선물.png"
            alt="선물"
            style="width: 50px; height: 50px"
          />
          <div class="preEB" style="font-size: 35px; color: #fe7403">
            STEP 02 :
          </div>
          <div class="preEB" style="font-size: 35px">
            아이디에이션(아이템 선정)
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="preSB basicContentBar" style="background-color: #fe7403">
        2-4 : 아이템의 핵심가치 설계
      </div>
    </div>

    <div style="width: 81rem; height: 40rem">
      <div class="my-3">
        <label
          for="businessArea"
          class="preSB form-label"
          style="font-size: 30px"
        >
          <span class="primeColor">4.</span> 고객에게 제공하고자 하는 핵심가치는
          무엇입니까?
        </label>
      </div>
      <div
        class="my-3 d-flex flex-column justify-content-between align-items-center"
        style="height: 34rem"
      >
        <div>
          <label for="businessArea" class="preSB form-label fs-4">
            <span class="primeColor">4-1.</span> 경쟁적 요소(다른
            경쟁제품/서비스와 비교하여 고객이 우수하다고 판단할 수 있는 부분은
            무엇일까요?)</label
          >
          <input
            disabled
            type="text"
            class="form-control bg-light p-2 rounded preM"
            id="businessArea"
            style="border-style: none"
            placeholder="ex. 반려동물시장, 카페시장, 유통시장 등"
            v-model="question1"
          />
        </div>
        <div>
          <label for="businessArea2" class="preSB form-label fs-4"
            ><span class="primeColor">4-2.</span> 차별적 요소(다른
            경쟁제품/서비스와 비교하여 고객이 다르게 생각할 수 있는 부분은
            무엇일까요?)</label
          >
          <input
            disabled
            type="text"
            class="form-control bg-light p-2 rounded preM"
            id="businessArea2"
            style="border-style: none"
            placeholder="ex. 반려동물시장->반려동물용 사료 시장, 카페시장->베이커리카페 시장"
            v-model="question2"
          />
        </div>
        <div>
          <label for="marketChanges" class="preSB form-label fs-4"
            ><span class="preSB primeColor">4-3.</span> 고객이 얻을 수 있는
            혜택과 가치는 무엇일까요?</label
          >
          <div
            class="form-control bg-light p-2 rounded preM"
            style="height: 9rem; border: none; resize: none"
            id="marketChanges"
            v-html="formattedQuestion3"
          ></div>
        </div>
      </div>
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
    getBetaPpt10(id) {
      BetaService.getBetaPpt10(id)
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
  computed: {
    formattedQuestion3() {
      let formattedText = this.question3.replace(/\n/g, "<br>");

      // 50자마다 <br> 추가하기
      const maxLineLength = 100;
      let result = "";
      while (formattedText.length > 0) {
        // 최대 길이까지의 부분 문자열 추출
        let part = formattedText.substring(0, maxLineLength);
        // 나머지 문자열 업데이트
        formattedText = formattedText.substring(maxLineLength);

        // 결과 문자열에 부분 문자열과 줄바꿈 추가
        result += part + "<br>";
      }

      return result;
    },
  },
  mounted() {
    this.getBetaPpt10(this.$route.params.id);
  },
};
</script>

<style scoped>
.basicContentBar {
  width: 25rem;
  background-color: rgb(249, 156, 27);
  color: white;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.primeColor {
  color: #fe7003;
}

.form-control {
  width: 75rem;
  height: 5rem;
}

input:disabled {
  color: #000;
  opacity: 1;
}
textarea:disabled {
  color: #000;
  opacity: 1;
}
</style>
