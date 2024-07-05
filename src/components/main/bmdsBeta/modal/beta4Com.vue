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
      <div class="basicContentBar preSB">1-3 : 아이템 해결 가능성 확인</div>
    </div>

    <div style="width: 81rem; height: 38.5rem">
      <div class="mt-3">
        <label
          for="businessArea"
          class="preSB form-label"
          style="font-size: 27px"
        >
          <span class="primeColor">3.</span> 불편함을 개선한다면 고객입장에서
          비용 지불 의사가 충분히 있는지 확인합니다.
        </label>
      </div>
      <div
        class="mt-2 d-flex flex-column justify-content-center align-items-center"
      >
        <div class="mb-3" style="width: 75rem; border-radius: 20px">
          <label
            for="businessArea"
            class="preSB form-label"
            style="font-size: 27px"
          >
            <span class="primeColor">3-1.</span> 우리가 해결 할 수 있는 고객의
            불편함(문제)은 무엇일까요?
          </label>

          <div class="preM" style="color: #7f7f7f">
            <div class="bg-light p-2">
              <label for="">1.순위 :</label
              ><input
                type="text"
                class="bg-light rounded mb-1 mt-3"
                style="border: none"
                v-model="question1"
              />
            </div>
            <div class="bg-light p-2">
              <label for="">2.순위 :</label
              ><input
                type="text"
                class="bg-light rounded mb-1 mt-3"
                style="border: none"
                v-model="question2"
              />
            </div>
            <div class="bg-light p-2">
              <label for="">3.순위 :</label
              ><input
                type="text"
                class="bg-light rounded mb-1 mt-3"
                style="border: none"
                v-model="question3"
              />
            </div>
            <div class="bg-light p-2">
              <label for="">4.순위 :</label
              ><input
                type="text"
                class="bg-light rounded mb-1 mt-3"
                style="border: none"
                v-model="question4"
              />
            </div>
          </div>
        </div>
        <div>
          <label class="preSB form-label" style="font-size: 27px"
            ><span class="primeColor">3-2.</span> 해결이 되어질 경우 고객이 우리
            제품 또는 서비스를 구매할 가능성은 충분히 있을까요?</label
          >
          <div class="d-flex">
            <div
              class="d-flex bg-light p-2 rounded align-items-center"
              style="
                width: 75rem;
                height: 5rem;
                border-radius: 20px;
                z-index: 1;
                position: relative;
              "
            >
              <div class="form-check ms-3">
                <input
                  class="form-check-input"
                  type="radio"
                  id="marketUnderstanding1"
                  name="marketUnderstanding1"
                  value="잘모르겠어요"
                  v-model="question5"
                />
                <label
                  class="preM form-check-label fs-4"
                  for="marketUnderstanding1"
                >
                  가. 잘 모르겠어요
                </label>
              </div>
              <div class="form-check ms-5">
                <input
                  class="preM form-check-input"
                  type="radio"
                  id="marketUnderstanding2"
                  name="marketUnderstanding1"
                  value="그럴수있을것같아요"
                  v-model="question5"
                />
                <label
                  class="preM form-check-label fs-4"
                  for="marketUnderstanding2"
                >
                  나. 그럴 수 있을 것 같아요
                </label>
              </div>
              <div class="form-check ms-5">
                <input
                  class="preM form-check-input"
                  name="marketUnderstanding1"
                  type="radio"
                  id="marketUnderstanding3"
                  value="충분히그럴거에요"
                  v-model="question5"
                />
                <label
                  class="preM form-check-label fs-4"
                  for="marketUnderstanding3"
                >
                  다. 충분히 그럴거에요
                </label>
              </div>
            </div>
            <img
              src="../../../../assets/bmds3/기회탐색4.png"
              alt="기회탐색4"
              style="
                width: 23rem;
                height: 15rem;
                margin-left: 58rem;
                z-index: 2;
                position: absolute;
              "
            />
          </div>
        </div>
      </div>
    </div>
    <div class="my-3">
      <b-button
        class="btn btn-sm"
        style="float: right; margin-right: 20rem"
        @click="saveBetaPpt5"
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
      question1: "", // 3-1-1
      question2: "", // 3-1-2
      question3: "", // 3-1-3
      question4: "", // 3-1-4
      question5: "잘모르겠어요", // 3-2
    };
  },
  methods: {
    saveBetaPpt5() {
      if (confirm("저장하시겠습니까?")) {
        var data = {
          question1: this.question1,
          question2: this.question2,
          question3: this.question3,
          question4: this.question4,
          question5: this.question5,
        };
        BetaService.saveBetaPpt5(this.$route.params.id, data)
          .then(() => {
            alert("저장되었습니다.");
            this.getBetaPpt5(this.$route.params.id);
          })
          .catch(() => {});
      } else {
        alert("취소되었습니다.");
      }
    },
    getBetaPpt5(id) {
      BetaService.getBetaPpt5(id)
        .then((res) => {
          this.question1 = res.data.question1;
          this.question2 = res.data.question2;
          this.question3 = res.data.question3;
          this.question4 = res.data.question4;
          this.question5 = res.data.question5;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getBetaPpt5(this.$route.params.id);
  },
};
</script>

<style scoped>
.basicContentBar {
  width: 26.1rem;
  background-color: #fa9d1b;
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
  height: 15rem;
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
