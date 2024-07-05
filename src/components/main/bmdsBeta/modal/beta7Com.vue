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
          <img src="@/assets/선물.png" alt="선물" style="width: 50px; height: 50px" />
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
        2-2 : 고객 페르소나 설계
      </div>
    </div>

    <div style="width: 81rem; height: 38.5rem">
      <div class="mb-5">
        <div class="mb-3">
          <label for="businessArea" class="preSB form-label fs-3">
            <span class="primeColor">2.</span> 우리가 생각하는 고객을
            그려봅니다. (페르소나 설계)</label>
          <div class="d-flex justify-content-between m-3">
            <div class="d-flex board flex-column primeColor fs-4 text-center">
              <div class="d-flex flex-column mb-5 text-start">
                <div>
                  <img src="@/assets/gender.png" alt="성별" style="width: 50px; height: 50px" />
                  <span class="preSB fs-3" style="color: black"> 성별</span>
                </div>
                <!--  -->
                <div class="bg-light p-2 rounded mb-1 d-flex align-items-center justify-content-center"
                  style="height: 5rem">
                  <!-- 고정된 마진을 사용하여 요소들이 동일한 공간을 차지하도록 조정 -->
                  <div class="form-check mx-1" style="padding-left: 1rem">
                    <input class="form-check-input" type="radio" id="male" value="남" name="genderChoice"
                      v-model="gender" />
                    <label class="preM form-check-label fs-5" for="male" style="color: black">
                      남성
                    </label>
                  </div>
                  <div class="form-check mx-1" style="padding-left: 1rem">
                    <input class="form-check-input" type="radio" id="female" value="여" name="genderChoice"
                      v-model="gender" />
                    <label class="preM form-check-label fs-5" for="female" style="color: black">
                      여성
                    </label>
                  </div>
                  <div class="form-check mx-1" style="padding-left: 1rem">
                    <input class="form-check-input" type="radio" id="gita" value="기타" name="genderChoice"
                      v-model="gender" />
                    <label class="preM form-check-label fs-5" for="gita" style="color: black">
                      기타
                    </label>
                  </div>
                </div>

                <!--  -->
              </div>
              <div class="d-flex flex-column mb-4 mt-1 text-start">
                <div>
                  <img src="@/assets/basicAge.png" alt="연령" style="width: 50px; height: 50px" />
                  <span class="preSB fs-3" style="color: black"> 연령</span>
                  <textarea class="preM form-control bg-light p-2 rounded" style="
                      border-style: none;
                      width: 20rem;
                      height: 5rem;
                      resize: none;
                    " placeholder="ex.17세 또는 35세 등" v-model="age"></textarea>
                </div>
              </div>
              <div class="d-flex flex-column mt-5 text-start">
                <div>
                  <img src="@/assets/basicMoney.png" alt="수입 수준(수입원천)" style="width: 50px; height: 50px" />
                  <span class="preSB fs-3" style="color: black">
                    수입 수준(수입원천)</span><textarea class="preM form-control bg-light p-2 rounded" style="
                      border-style: none;
                      width: 20rem;
                      height: 5rem;
                      resize: none;
                    " placeholder="ex.350만원(급여)" v-model="inComeLevel"></textarea>
                </div>
              </div>
            </div>
            <div class="d-flex board flex-column primeColor fs-4 justify-item-">
              <img width="627px" height="519px" src="@/assets/basicPersona.png" alt="페르소나" />
            </div>
            <div class="d-flex board flex-column primeColor fs-4 text-start">
              <div class="d-flex flex-column mb-5">
                <div>
                  <img src="@/assets/basicMajor.png" alt="주 관심사" style="width: 50px; height: 50px" />
                  <span class="preSB fs-3" style="color: black">
                    주 관심사</span>
                  <textarea class="preM form-control bg-light p-2 rounded" style="
                      border-style: none;
                      width: 20rem;
                      height: 5rem;
                      resize: none;
                    " placeholder="ex.테니스/등산,육아" v-model="major"></textarea>
                </div>
              </div>
              <div class="d-flex flex-column mb-4 mt-1 text-start">
                <div>
                  <img src="@/assets/basicSocial.png" alt="사회적 활동" style="width: 50px; height: 50px" />
                  <span class="preSB fs-3" style="color: black">
                    사회적 활동</span>
                  <textarea class="preM form-control bg-light p-2 rounded" style="
                      border-style: none;
                      width: 20rem;
                      height: 5rem;
                      resize: none;
                    " placeholder="ex.친목동호회, 독서토론회" v-model="socialActivity"></textarea>
                </div>
              </div>
              <div class="d-flex flex-column mt-5 text-start">
                <div>
                  <img src="@/assets/basicCart.png" alt="소비 활동" style="width: 50px; height: 50px" />
                  <span class="preSB fs-3" style="color: black">
                    소비 활동</span>
                  <textarea class="preM form-control bg-light p-2 rounded" style="
                      border-style: none;
                      width: 20rem;
                      height: 5rem;
                      resize: none;
                    " placeholder="ex.도서구입, 자동차용품" v-model="consumptionActivity"></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="my-3">
      <b-button class="btn btn-sm" style="float: right" @click="saveBetaPpt8">저장</b-button>
    </div>
  </div>
</template>

<script>
import BetaService from "@/services/main/BetaService";
export default {
  data() {
    return {
      gender: "",
      age: "", // 1-1-2
      inComeLevel: "", // 1-1-3
      major: "",
      socialActivity: "",
      consumptionActivity: "",
    };
  },
  methods: {
    saveBetaPpt8() {
      if (confirm("저장하시겠습니까?")) {
        var data = {
          gender: this.gender,
          age: this.age,
          inComeLevel: this.inComeLevel,
          major: this.major,
          socialActivity: this.socialActivity,
          consumptionActivity: this.consumptionActivity,
        };
        BetaService.saveBetaPpt8(this.$route.params.id, data)
          .then(() => {
            alert("저장되었습니다.");
            this.getBetaPpt8(this.$route.params.id);
          })
          .catch(() => { });
      } else {
        alert("취소되었습니다.");
      }
    },
    getBetaPpt8(id) {
      BetaService.getBetaPpt8(id)
        .then((res) => {
          this.gender = res.data.gender;
          this.age = res.data.age;
          this.inComeLevel = res.data.inComeLevel;
          this.major = res.data.major;
          this.socialActivity = res.data.socialActivity;
          this.consumptionActivity = res.data.consumptionActivity;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getBetaPpt8(this.$route.params.id);
  },
};
</script>

<style scoped>
.basicContentBar {
  width: 24rem;
  height: 3.5rem;
  background-color: rgb(249, 156, 27);
  color: white;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.primeColor {
  color: #fe7403;
}

.form-control {
  width: 78rem;
  height: 5rem;
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
input[type="radio"]+label {
  position: relative;
  padding-left: 30px;
  /* 체크박스 크기 조절 */
  cursor: pointer;
}

/* 가상 체크박스의 외관 (체크 표시) */
input[type="radio"]+label:before {
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
input[type="radio"]:checked+label:before {
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
</style>
