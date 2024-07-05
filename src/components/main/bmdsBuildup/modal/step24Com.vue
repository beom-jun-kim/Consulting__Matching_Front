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
        <div class="d-flex justify-content-between preEB" style="width: 40rem">
          <img src="@/assets/선물.png" alt="돋보기" style="width: 50px; height: 50px" />
          <div style="font-size: 35px; color: #fe7003">STEP 02 :</div>
          <div style="font-size: 35px">아이디에이션(아이템 선정)</div>
        </div>
      </div>
    </div>
    <div>
      <div class="basicContentBar preSB">2-3 : POV(Point of View) 정의</div>
    </div>

    <div class="preM modal-wrap">
      <div class="my-4">
        <label for="businessArea" class="form-label preSB" style="font-size: 27px">
          <span class="primeColor">3.</span> 고객의 관점에서 일어나는 상황을
          생각하고 정리해 봅니다.(Point of View)
        </label>
      </div>
      <div class="d-flex justify-content-start align-items-center" style="width: 80rem; height: 30rem; margin-top:5rem;">
        <div class="d-flex flex-column justify-content-between align-items-center" style="width: 25rem; height: 30rem;">
          <div style="width: 25rem; height: 8.5rem">
            <div class="d-flex" style="margin-bottom: 0.5rem">
              <img src="@/assets/누가.png" alt="who" style="width: 35px; height: 35px; margin-right: 0.5rem" />
              <div class="preSB fs-3">Who (누가)</div>
            </div>
            <input type="text" class="form-control bg-light p-2 mb-5 preM" id="businessArea" style="
                border: none;
                resize: none;
                outline: none;
                border-radius: 15px;
                font-size: 25px;
                width:25rem;
              " placeholder="ex.구매자,사용자,의사결정자 등" v-model="who24_1" />
          </div>
          <div style="width: 25rem; height: 8.5rem">
            <div class="d-flex" style="margin-bottom: 0.5rem">
              <img src="@/assets/언제.png" alt="돋보기" style="width: 35px; height: 35px; margin-right: 0.5rem" />
              <div class="preSB fs-3">When (언제)</div>
            </div>
            <input type="text" class="form-control bg-light p-2 mb-5 preM" id="businessArea" style="
                border: none;
                resize: none;
                outline: none;
                border-radius: 15px;
                font-size: 25px;
                width:25rem;
              " placeholder="ex.특정 시간대" v-model="whened24_1" />
          </div>
          <div style="width: 25rem; height: 8.5rem">
            <div class="d-flex" style="margin-bottom: 0.5rem">
              <img src="@/assets/어디서.png" alt="돋보기" style="width: 35px; height: 35px; margin-right: 0.5rem" />
              <div class="preSB fs-3">Where (어디서)</div>
            </div>
            <input type="text" class="form-control bg-light p-2 mb-5 preM" id="businessArea" style="
                border: none;
                resize: none;
                outline: none;
                border-radius: 15px;
                font-size: 25px;
                width:25rem;
              " placeholder="ex.특정 장소" v-model="whereed24_1" />
          </div>
        </div>
        <div class="d-flex justify-content-center align-items-center image-container">
        </div>
        <div class="d-flex flex-column justify-content-between align-items-center" style="width: 25rem; height: 35rem;">
          <div style="width: 25rem; height: 8.5rem">
            <div class="d-flex" style="margin-bottom: 0.5rem">
              <img src="@/assets/무엇을.png" alt="돋보기" style="width: 35px; height: 35px; margin-right: 0.5rem" />
              <div class="preSB fs-3">
                What is happening?<br />(무슨 일이 일어나고 있나요?)
              </div>
            </div>
            <textarea type="text" class="form-control2 bg-light p-2 preM" id="businessArea" style="
                border: none;
                resize: none;
                outline: none;
                border-radius: 15px;
                font-size: 25px;
                width:25rem;
              " placeholder="ex.사용자 또는 구매자에게 발생하고 있는 불편함에 대하여 구체적으로 작성하세요." v-model="what24_1" />
          </div>
          <div style="width: 25rem">
            <div class="d-flex mt-4" style="margin-bottom: 0.5rem">
              <img src="@/assets/왜.png" alt="돋보기" style="width: 35px; height: 35px; margin-right: 0.5rem" />
              <div class="preSB fs-3">Why (왜)</div>
            </div>
            <textarea type="text" class="form-control bg-light p-2 mb-5 preM" id="businessArea" style="
                border: none;
                resize: none;
                outline: none;
                border-radius: 15px;
                font-size: 25px;
                height: 10rem;
                width:25rem;
              " placeholder="ex.무슨 이유로 일어나나요?" v-model="why24_1" />
          </div>
        </div>
      </div>
      <textarea placeholder="메모..." v-model="memo" class="form-control bg-light p-2 rounded fs-4 preM my-5 memo">
        </textarea>
    </div>
    <!-- <div class="my-3">
      <b-button class="btn btn-sm" style="float: right" @click="saveBuildStep24">저장</b-button>
    </div> -->
  </div>
</template>

<script>
import step24 from "./js/step24.js"
export default {
  name: 'step24Com',
  ...step24,
};
</script>

<style scoped>
.memo {
  width: 78rem !important;
  height: 100px !important;
  resize: none;
  border: none;
}

.modal-wrap {
  width: 81rem;
  height: 41.5rem;
  overflow-y: scroll;
}

.modal-wrap::-webkit-scrollbar {
  width: 12px;
}

.modal-wrap::-webkit-scrollbar-thumb {
  background: #eee;
  border-radius: 10px;
}

.modal-wrap::-webkit-scrollbar-track {
  background: none;
}

.image-container {
  width: 28rem;
  height: 25rem;
  margin-top: 2rem;
  overflow: hidden;
  background-image: url("../../../../assets/POV.png");
  background-size: cover;
  background-position: center;
}

.basicContentBar {
  width: 29rem;
  height: 3.5rem;
  border-radius: 10px;
  background-color: #fe7003;
  color: white;
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.primeColor {
  color: rgb(249, 156, 27);
}

.form-control {
  width: 27rem;
  height: 5rem;
}

.form-control2 {
  width: 27rem;
  height: 12rem;
}
</style>
