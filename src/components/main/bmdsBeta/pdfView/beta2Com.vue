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
    <div class="d-flex justify-content-start">
      <div class="d-flex" style="margin-left: 1rem">
        <div class="d-flex justify-content-between" style="width: 22rem">
          <img
            src="@/assets/bmds3/basicIcon1.png"
            alt="돋보기"
            style="width: 50px; height: 50px"
          />
          <div class="preEB" style="font-size: 35px; color: #fa9d1b">
            STEP 01 :
          </div>
          <div class="preEB" style="font-size: 35px">기회탐색</div>
        </div>
      </div>
    </div>
    <div>
      <div class="preSB basicContentBar">1-1 : 아이템이 속한 시장 이해</div>
    </div>

    <div style="width: 81rem; height: 38.5rem">
      <div class="my-3">
        <label
          for="businessArea"
          class="preSB form-label"
          style="font-size: 27px"
        >
          <span class="primeColor">1.</span> 준비하고 있는 아이템과 관련하여
          창업자가 가진 역량 수준을 파악하고 아이템이 속한 시장에 대해서 얼마나
          이해하고<br />
          &nbsp;&nbsp;&nbsp;있는지를 확인합니다.
        </label>
      </div>
      <div
        class="my-3 d-flex flex-column justify-content-center align-items-center"
      >
        <div class="mb-4">
          <label for="businessArea" class="preSB form-label fs-3">
            <span class="primeColor">1-1.</span> 생각하고 계시는 아이디어는 어느
            분야에 속하나요?</label
          >
          <div
            type="text"
            class="form-control bg-light p-2 rounded fs-4 preM"
            id="businessArea"
            style="border-style: none"
            v-html="formattedQuestion1"
          ></div>
        </div>
        <div class="mb-4">
          <label class="preSB form-label fs-3"
            ><span class="primeColor">1-2.</span> 관련 시장에 대해 얼마나
            이해하고 계시나요?</label
          >
          <div
            class="d-flex bg-light p-2 rounded align-items-center"
            style="width: 75rem; height: 5rem"
          >
            <div class="form-check ms-3">
              <input
                disabled
                class="form-check-input"
                type="radio"
                id="marketUnderstanding1"
                name="marketUnderstanding1"
                v-model="question2"
                value="전혀몰라요"
                :class="{ selected: isOption1Selected }"
              />
              <label
                class="preM form-check-label fs-4"
                for="marketUnderstanding1"
              >
                가. 전혀 몰라요
              </label>
            </div>
            <div class="form-check ms-3">
              <input
                disabled
                class="form-check-input"
                type="radio"
                id="marketUnderstanding2"
                name="marketUnderstanding2"
                value="경험이있어요"
                v-model="question2"
                :class="{ selected: isOption2Selected }"
              />
              <label
                class="preM form-check-label fs-4"
                for="marketUnderstanding2"
              >
                나. 경험이 있어요
              </label>
            </div>
            <div class="form-check ms-3">
              <input
                disabled
                class="form-check-input"
                type="radio"
                id="marketUnderstanding3"
                name="marketUnderstanding3"
                v-model="question2"
                value="전문가수준이에요"
                :class="{ selected: isOption3Selected }"
              />
              <label
                class="preM form-check-label fs-4"
                for="marketUnderstanding3"
              >
                다. 전문가 수준이에요
              </label>
            </div>
          </div>
        </div>
        <div>
          <label for="marketChanges" class="preSB form-label fs-3"
            ><span class="preSB primeColor">1-3.</span> 목표 시장에서 일어나고
            있는 눈 여겨 볼 만한 변화는 어떠한 것들이 있나요?</label
          >
          <div
            type="text"
            class="form-control bg-light p-2 rounded mb-5 preM"
            style="height: 9rem; border-style: none"
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
      question1: "", // 1-1
      question2: "", // 1-2
      question3: "", // 1-3
    };
  },
  methods: {
    getBetaPpt3(id) {
      BetaService.getBetaPpt3(id)
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
    formattedQuestion1() {
      let formattedText = this.question1.replace(/\n/g, "<br>");

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

    isOption1Selected() {
      return this.question2 === "전혀몰라요";
    },
    isOption2Selected() {
      return this.question2 === "경험이있어요";
    },
    isOption3Selected() {
      return this.question2 === "전문가수준이에요";
    },
  },
  mounted() {
    this.getBetaPpt3(this.$route.params.id);
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
  color: rgb(249, 156, 27);
}

.form-control {
  width: 75rem;
  height: 5rem;
}

input:disabled {
  color: black;
}

/* 체크박스 크기 변경 */

/* 체크 표시의 크기와 색상 변경 */
.form-check-input:checked {
  background-color: rgb(249, 156, 27);
  /* 부트스트랩 성공 색 */
  border-color: rgb(249, 156, 27);
}

.form-check-input:disabled {
  background-color: rgb(249, 156, 27);
  /* 부트스트랩 성공 색 */
  border-color: rgb(249, 156, 27);
}

/* 숨겨진 기본 라디오 버튼 스타일링 */
input[type="radio"] {
  display: none;
  vertical-align: middle;
  /* 라디오 버튼을 수직 중앙 정렬 */
}

label {
  vertical-align: middle;
  /* 라벨을 수직 중앙 정렬 */
}

/* 가상 체크박스 디자인 */
input[type="radio"] + label {
  position: relative;
  padding-left: 30px;
  /* 체크박스 크기 조절 */
  cursor: pointer;
}

/* 가상 체크박스의 외관 (체크 표시) */
input[type="radio"] + label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 4.5px;
  width: 20px;
  /* 체크 표시 크기 조절 */
  height: 20px;
  /* 체크 표시 크기 조절 */
  border: 2px solid #000;
  /* 체크 표시의 외곽선 스타일 지정 */
  background-color: #fff;
  /* 체크 표시의 배경색 지정 */
  border-radius: 4px;
  /* 체크 표시의 둥근 테두리 만들기 */
}

/* 라디오 버튼이 체크됐을 때의 가상 체크박스 스타일 */
input[type="radio"]:checked + label:before {
  /* 체크 표시의 배경색 지정 */
  content: "\2713";
  /* 유니코드로 체크 마크 추가 */
  text-align: center;
  /* 텍스트를 중앙 정렬 */
  font-size: 40px;
  font-weight: 600;
  /* 체크 마크의 크기 조절 */
  line-height: 0;
  /* 체크 마크의 높이 조절 */
  color: rgb(249, 156, 27);
  /* 체크 마크의 색상 지정 */
}

/* 비활성화된 체크박스 연결 라벨의 글자색 유지 */
.form-check-input:disabled + .form-check-label {
  color: #000; /* 원하는 글자색으로 설정 */
  opacity: 1; /* 투명도를 1로 설정하여 희미해지는 것을 방지 */
}
</style>
