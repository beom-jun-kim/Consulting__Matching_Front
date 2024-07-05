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
        <div class="d-flex justify-content-between" style="width: 37rem">
          <img
            src="@/assets/basicBulb.png"
            alt="돋보기"
            style="width: 50px; height: 50px"
          />
          <div class="preEB" style="font-size: 35px; color: #f75943">
            STEP 03 :
          </div>
          <div class="preEB" style="font-size: 35px">
            아이디어 컨셉 정의 및 개발
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="basicContentBar preSB mb-4" style="width: 20rem">
        3-2 : 해결안 설계
      </div>
    </div>

    <div style="width: 81rem; height: 37rem">
      <div
        class="mt-2 d-flex flex-column justify-content-center align-items-center"
      >
        <div class="mb-3" style="width: 75rem; border-radius: 20px">
          <label
            for="businessArea"
            class="preSB form-label mb-4"
            style="font-size: 27px"
          >
            <span class="primeColor">2-3.</span> 우리가 문제를 해결함으로써
            고객이 얻을 수 있는 혜택과 가치가 더욱 분명해 졌나요?<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(고객에게
            직접 확인하거나 정략적 수치로 나타내어 주세요.)
          </label>
          <textarea
            type="text"
            class="form-control bg-light p-2 mb-3 preM"
            id="businessArea"
            style="
              border: none;
              resize: none;
              outline: none;
              border-radius: 15px;
              font-size: 25px;
              width: 74rem;
              height: 12rem;
            "
            placeholder="우리가 해결한 문제가 고객에게는 어느정도의 혜택을 제공하는지 가늠해 봅니다."
            v-model="question1"
          />
          <label class="preSB form-label mb-4" style="font-size: 27px"
            ><span class="primeColor">2-4.</span> 우리 제품은 수요 고객에게
            결정적인 구매 요소를 충분히 제공하고 있나요?(핵심 구매요소를
            설계합니다.)</label
          >
          <textarea
            type="text"
            class="form-control bg-light p-2 mb-5 preM"
            id="businessArea"
            style="
              border: none;
              resize: none;
              outline: none;
              border-radius: 15px;
              font-size: 25px;
              width: 74rem;
              height: 12rem;
            "
            placeholder="우리가 제공하는 제품/서비스를 고객이 선택할 가능성에 대하여 확인하여 봅니다.
  (고객이 제품/서비스를 구매할 때 필요한 의사결정과 연계)"
            v-model="question2"
          />
        </div>
      </div>
    </div>
    <div class="my-3">
      <b-button class="btn btn-sm" style="float: right" @click="saveBetaPpt15"
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
      question1: "누가", // 1-1-1
      question2: "언제", // 1-1-2
    };
  },
  methods: {
    saveBetaPpt15() {
      if (confirm("저장하시겠습니까?")) {
        var data = {
          question1: this.question1,
          question2: this.question2,
        };
        BetaService.saveBetaPpt15(this.$route.params.id, data)
          .then(() => {
            alert("저장되었습니다.");
            this.getBetaPpt15(this.$route.params.id);
          })
          .catch(() => {});
      } else {
        alert("취소되었습니다.");
      }
    },
    getBetaPpt15(id) {
      BetaService.getBetaPpt15(id)
        .then((res) => {
          this.question1 = res.data.question1;
          this.question2 = res.data.question2;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getBetaPpt15(this.$route.params.id);
  },
};
</script>

<style scoped>
.basicContentBar {
  width: 46rem;
  background-color: #f75943;
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
  color: #f75943;
}

.form-control {
  width: 81rem;
  height: 5rem;
}

.form-control2 {
  width: 81rem;
  height: 10rem;
}

table {
  width: 100%;
  /* 테이블의 전체 너비 */
  border-collapse: collapse;
  /* 테두리가 겹치게 설정 */
}

th,
td {
  border: none;
  /* 테두리 설정 */
  border-top: #818181 1px solid;
}

td:first-child {
  width: 10%;
  /* 첫 번째 열의 너비를 전체의 10%로 설정 */
}

td:last-child {
  width: 90%;
  /* 두 번째 열의 너비를 전체의 90%로 설정 */
}

tr:last-child {
  border-bottom: #f75943 1px solid;
}

/* 체크박스 크기 변경 */

/* 체크 표시의 크기와 색상 변경 */
.form-check-input:checked {
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
  top: 8.5px;
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
  font-size: 35px;
  font-weight: 600;
  /* 체크 마크의 크기 조절 */
  line-height: 0;
  /* 체크 마크의 높이 조절 */
  color: rgb(249, 156, 27);
  /* 체크 마크의 색상 지정 */
}
</style>
