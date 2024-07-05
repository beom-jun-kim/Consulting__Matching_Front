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
            src="@/assets/beta/step4큐브.png"
            alt="큐브"
            style="width: 60px; height: 60px"
          />
          <div class="preEB" style="font-size: 35px; color: #4264ae">
            STEP 04 :
          </div>
          <div class="preEB" style="font-size: 35px">제품 또는 서비스 개발</div>
        </div>
      </div>
    </div>
    <div>
      <div class="preSB basicContentBar" style="background-color: #4264ae">
        4-2 : 제품 또는 서비스 스케치
      </div>
    </div>

    <div style="width: 81rem; height: 40rem">
      <div class="my-3">
        <label
          for="businessArea"
          class="preSB form-label"
          style="font-size: 30px"
        >
          <span class="primeColor">1.</span> 제품이나 서비스를 시각적으로 표현해
          봅니다.(3D, 플로우 차트 등을 활용해 보세요.)
        </label>
      </div>
      <!-- <div class="image-container" style="margin-right: 7.2rem">
        추후 업로드 된 이미지 표시거나 엠바스 링크 필요
      </div> -->
      <div
        class="d-flex justify-content-center align-items-center"
        style="height: 33rem; background: #e7e6e6; border-radius: 25px"
      >
        <div
          class="d-flex justify-content-center align-items-center"
          style="
            width: 79rem;
            height: 32rem;
            background: #b3b3b3;
            border-radius: 25px;
          "
        >
          <div
            style="
              width: 78rem;
              height: 31rem;
              background: white;
              border-radius: 25px;
            "
          >
            <div @click="handleClick">
              <input
                ref="fileInput"
                type="file"
                style="display: none"
                accept="image/*"
                @change="handleFileUpload"
              />
              <div
                class="d-flex flex-column align-items-center"
                style="
                  width: 78rem;
                  height: 31rem;
                  background: white;
                  border-radius: 25px;
                "
              >
                <!-- 스프링표현부분 -->
                <div class="d-flex justify-content-center">
                  <div
                    class="d-flex flex-row justify-content-evenly"
                    style="width: 75rem"
                  >
                    <div v-for="(t, i) in 25" :key="i">
                      <div
                        class="d-flex justify-content-center align-items-end"
                        style="
                          width: 1.5rem;
                          height: 1.5rem;
                          background: #e7e6e6;
                          margin: 1rem 0 1rem 0;
                        "
                      >
                        <div
                          style="
                            width: 15px;
                            height: 4rem;
                            background: #7f7f7f;
                            margin-bottom: 10px;
                          "
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- 클릭 영역 -->
                <img
                  v-if="imgUrl"
                  :src="imgUrl"
                  alt="uploaded image"
                  class="productImg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="my-3">
      <b-button class="btn btn-sm" style="float: right" @click="saveBetaPpt19"
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
      imgUrl: "",
    };
  },
  methods: {
    handleClick() {
      this.$refs.fileInput.click();
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = () => {
          this.imgUrl = reader.result;
        };
        reader.readAsDataURL(file);
      }
    },
    saveBetaPpt19() {
      if (confirm("저장하시겠습니까?")) {
        const formData = new FormData();
        formData.append("file", this.$refs.fileInput.files[0]);
        BetaService.saveBetaPpt19(this.$route.params.id, formData)
          .then(() => {
            alert("저장되었습니다.");
            this.getBetaPpt19(this.$route.params.id);
          })
          .catch(() => {});
      } else {
        alert("취소되었습니다.");
      }
    },
    getBetaPpt19(id) {
      BetaService.getBetaPpt19(id)
        .then((res) => {
          this.imgUrl = res.data.imgUrl;
          console.log(this.imgUrl);
        })
        .catch((e) => {
          console.log("e", e);
        });
    },
  },

  mounted() {
    this.getBetaPpt19(this.$route.params.id);
  },
};
</script>

<style scoped>
.productImg {
  width: 75rem;
  height: 33rem;
  border-radius: 25px;
  position: relative;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
}

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
  color: #4264ae;
}

.form-control {
  width: 75rem;
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
  font-size: 35px;
  font-weight: 600;
  /* 체크 마크의 크기 조절 */
  line-height: 0;
  /* 체크 마크의 높이 조절 */
  color: rgb(249, 156, 27);
  /* 체크 마크의 색상 지정 */
}
</style>
