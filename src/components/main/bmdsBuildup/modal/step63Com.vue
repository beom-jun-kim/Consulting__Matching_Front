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
        <div class="d-flex justify-content-between" style="width: 23rem">
          <img src="@/assets/beta/step06집.png" alt="큐브" style="width: 60px; height: 60px" />
          <div class="preEB" style="font-size: 35px; color: #0098d5">
            STEP 06 :
          </div>
          <div class="preEB" style="font-size: 35px">시장 론칭</div>
        </div>
      </div>
    </div>
    <div>
      <div class="basicContentBar preSB" style="height: 4rem">
        6-2 : 제품/서비스 소개 및 판촉전략
      </div>
    </div>

    <div class="modal-wrap">
      <div class="">
        <label for="businessArea" class="preSB form-label" style="font-size: 27px; margin:0;">
          <span class="primeColor">2.</span> 우리 제품/서비스가 제공하는 가치와
          유용성을 잠재 고객에게 알리기 위한 제품/서비스 소개 방법을 설계하고
          직접적인<br />구매 효과를 유발할 수 있는 판매 촉진 활동을 수립합니다.
        </label>

        <div class="d-flex flex-column justify-content-between align-items-center" style="height:49.5rem;">
          <div>
            <div class="d-flex justify-content-between align-items-center">
              <label for="businessArea2" class="preSB form-label fs-4" style="margin:0;"><span
                  class="primeColor">2-1.</span> 제품/서비스를 잠재 수요
                고객에게 소개할 수 있는 유용한 방법을 선택하고 구체적으로
                설계합니다.</label>
              <div class="custom-file-input">
                <input type="file" @change="handleFileChange" ref="fileInput" />
                <div class="file-label" ref="fileLabel">
                  {{ selectedFileName ? selectedFileName : " + 파일업로드" }}
                </div>
              </div>
              <!-- <a :href="imgUrl63_1" class="btn btn-sm btn-primary" download>다운로드</a> -->
              <!-- <button class="btn btn-sm btn-primary" @click="downloadFile">다운로드</button> -->
            </div>
            <div class="d-flex justify-content-between align-items-center" style="
              width: 75rem;
              border: #bfbfbf 1px solid;
              height: 8rem;
              border-radius: 10px;
              padding: 0.5rem 1rem;
            ">
              <div class="d-flex flex-column justify-content-between align-items-center"
                style="width: 9rem; height: 7rem">
                <div style="width: 9rem; height: 5rem">
                  <img src="../../../../assets/buildup/step63Homepage.png" alt="홈페이지" class="step63Img" />
                </div>
                <div>
                  <input class="form-check-input check3" type="checkbox" id="step62check_1" value="홈페이지"
                    v-model="imgCheck63_1" />
                  <label class="preM form-check-label" for="step62check_1" style="font-size: 15px">
                    홈페이지
                  </label>
                </div>
              </div>
              <div class="d-flex flex-column justify-content-between align-items-center"
                style="width: 9rem; height: 7rem">
                <div style="width: 9rem; height: 5rem">
                  <img src="../../../../assets/buildup/step63Intro.png" alt="회사(제품)소개서" class="step63Img" />
                </div>
                <div>
                  <input class="form-check-input check3" type="checkbox" id="step62check_2" value="회사(제품)소개서"
                    v-model="imgCheck63_2" />
                  <label class="preM form-check-label" for="step62check_2" style="font-size: 15px; line-height: 12px">
                    회사(제품)소개서<br /><span style="font-size: 10px">(ppt,word,pdf 등)</span>
                  </label>
                </div>
              </div>
              <div class="d-flex flex-column justify-content-between align-items-center"
                style="width: 10rem; height: 7rem">
                <div style="width: 10rem; height: 5rem">
                  <img src="../../../../assets/buildup/step63Video.png" alt="회사(제품)소개 영상" class="step63Img" />
                </div>
                <div>
                  <input class="form-check-input check3" type="checkbox" id="step62check_3" value="회사(제품)소개영상"
                    v-model="imgCheck63_3" />
                  <label class="preM form-check-label" for="step62check_3" style="font-size: 15px">
                    회사(제품)소개 영상
                  </label>
                </div>
              </div>
              <div class="d-flex flex-column justify-content-between align-items-center"
                style="width: 9rem; height: 7rem">
                <div style="width: 9rem; height: 5rem">
                  <img src="../../../../assets/buildup/step63Poster.png" alt="포스터" class="step63Img" />
                </div>
                <div>
                  <input class="form-check-input check3" type="checkbox" id="step62check_4" value="포스터"
                    v-model="imgCheck63_4" />
                  <label class="preM form-check-label" for="step62check_4" style="font-size: 15px">
                    포스터
                  </label>
                </div>
              </div>
              <div class="d-flex flex-column justify-content-between align-items-center"
                style="width: 9rem; height: 7rem">
                <div style="width: 9rem; height: 5rem">
                  <img src="../../../../assets/buildup/step63Replat.png" alt="책자 및 리플렛" class="step63Img" />
                </div>
                <div>
                  <input class="form-check-input check3" type="checkbox" id="step62check_5" value="책자 및 리플렛"
                    v-model="imgCheck63_5" />
                  <label class="preM form-check-label" for="step62check_5" style="font-size: 15px">
                    책자 및 리플렛
                  </label>
                </div>
              </div>
              <div class="d-flex flex-column justify-content-between align-items-center"
                style="width: 9rem; height: 7rem">
                <div style="width: 9rem; height: 5rem">
                  <img src="../../../../assets/buildup/step63Banner.png" alt="배너(블로그,인스타 등)" class="step63Img" />
                </div>
                <div>
                  <input class="form-check-input check3" type="checkbox" id="step62check_6" value="배너(블로그,인스타 등)"
                    v-model="imgCheck63_6" />
                  <label class="preM form-check-label" for="step62check_6" style="font-size: 15px; line-height: 12px">
                    배너(블로그,인스타 등)
                  </label>
                </div>
              </div>
              <div class="d-flex flex-column justify-content-between align-items-center"
                style="width: 9rem; height: 7rem">
                <div style="width: 9rem; height: 5rem">
                  <img src="../../../../assets/buildup/step63Etc.png" alt="기타" class="step63Img" />
                </div>
                <div>
                  <input class="form-check-input check4" type="checkbox" id="step62check_7" value="기타"
                    v-model="imgCheck63_7" />
                  <label class="preM form-check-label" for="step62check_7" style="font-size: 15px">
                    <input type="text" placeholder="기타" style="width: 5rem" v-model="imgEtc63_1" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div>
            <label for="marketChanges" class="preSB form-label fs-4 mb-0"><span class="preSB primeColor">2-2.</span> 다양한
              판매촉진 활동
              가운데 우리에게 가장 적합한 항목을 선택하고 구체적으로 내용을
              작성합니다.</label>
            <div class="d-flex justify-content-center align-items-center" style="height: 10rem">
              <div class="d-flex flex-column justify-content-between align-items-center" style="
                width: 75rem;
                border: #bfbfbf 1px solid;
                height: 9rem;
                border-radius: 10px;
                padding: 1rem 3rem;
              ">
                <div class="d-flex justify-content-start align-items-center w-100">
                  <div class="form-check" style="padding-left: 0">
                    <input class="form-check-input check2" type="checkbox" id="step62_1" value="광고 캠페인"
                      v-model="check63_1" />
                    <label class="preM form-check-label fs-5" for="step62_1">
                      광고 캠페인
                    </label>
                  </div>
                  <div class="form-check ms-5" style="padding-left: 0">
                    <input class="form-check-input check2" type="checkbox" id="step62_2" value="이벤트 행사"
                      v-model="check63_2" />
                    <label class="preM form-check-label fs-5" for="step62_2">
                      이벤트 행사
                    </label>
                  </div>
                  <div class="form-check ms-5" style="padding-left: 0">
                    <input class="form-check-input check2" type="checkbox" id="step62_3" value="콘텐츠 마케팅"
                      v-model="check63_3" />
                    <label class="preM form-check-label fs-5" for="step62_3">
                      콘텐츠 마케팅
                    </label>
                  </div>
                  <div class="form-check ms-5" style="padding-left: 0">
                    <input class="form-check-input check2" type="checkbox" id="step62_4" value="고객 참여 마케팅"
                      v-model="check63_4" />
                    <label class="preM form-check-label fs-5" for="step62_4">
                      고객 참여 마케팅
                    </label>
                  </div>
                  <div class="form-check ms-5" style="padding-left: 0">
                    <input class="preM form-check-input check2" type="checkbox" id="step62_5" value="쿠폰 및 리베이트"
                      v-model="check63_5" />
                    <label class="preM form-check-label fs-5" for="step62_5">
                      쿠폰 및 리베이트
                    </label>
                  </div>
                </div>
                <div class="d-flex justify-content-start align-items-center w-100">
                  <div class="form-check" style="padding-left: 0">
                    <input class="preM form-check-input check2" type="checkbox" id="step62_6" value="제휴 마케팅"
                      v-model="check63_6" />
                    <label class="preM form-check-label fs-5" for="step62_6">
                      제휴 마케팅
                    </label>
                  </div>
                  <div class="form-check ms-4" style="padding-left: 0">
                    <input class="preM form-check-input check2" type="checkbox" id="step62_7" value="가격 할인 및 프로모션"
                      v-model="check63_7" />
                    <label class="preM form-check-label fs-5" for="step62_7">
                      가격 할인 및 프로모션
                    </label>
                  </div>
                  <div class="form-check ms-4" style="padding-left: 0">
                    <input class="preM form-check-input check2" type="checkbox" id="step62_8" value="리워드 프로그램"
                      v-model="check63_8" />
                    <label class="preM form-check-label fs-5" for="step62_8">
                      리워드 프로그램
                    </label>
                  </div>
                  <div class="form-check ms-4" style="padding-left: 0">
                    <input class="preM form-check-input check2" type="checkbox" id="step62_9" value="멤버십(우대)"
                      v-model="check63_9" />
                    <label class="preM form-check-label fs-5" for="step62_9">
                      멤버십(우대)
                    </label>
                  </div>
                  <div class="form-check ms-4" style="padding-left: 0">
                    <input class="preM form-check-input check2" type="checkbox" id="step62_10" value="PR 활동"
                      v-model="check63_10" />
                    <label class="preM form-check-label fs-5" for="step62_10">
                      PR 활동
                    </label>
                  </div>
                  <div class="form-check ms-4" style="padding-left: 0">
                    <input class="preM form-check-input check2" type="checkbox" id="step62_11" value="판촉물 제공"
                      v-model="check63_11" />
                    <label class="preM form-check-label fs-5" for="step62_11">
                      판촉물 제공
                    </label>
                  </div>
                </div>
                <div class="d-flex justify-content-start align-items-center w-100">
                  <div class="form-check" style="padding-left: 0">
                    <input class="preM form-check-input check2" type="checkbox" id="step62_12" value="무료 샘플 제공"
                      v-model="check63_12" />
                    <label class="preM form-check-label fs-5" for="step62_12">
                      무료 샘플 제공
                    </label>
                  </div>
                  <div class="form-check ms-3" style="padding-left: 0">
                    <input class="preM form-check-input check2" type="checkbox" id="step62_13" value="프리미엄"
                      v-model="check63_13" />
                    <label class="preM form-check-label fs-5" for="step62_13">
                      프리미엄
                    </label>
                  </div>
                  <div class="form-check ms-3" style="padding-left: 0">
                    <input class="preM form-check-input check2" type="checkbox" id="step62_14" value="시연회 또는 설명회"
                      v-model="check63_14" />
                    <label class="preM form-check-label fs-5" for="step62_14">
                      시연회 또는 설명회
                    </label>
                  </div>
                  <div class="form-check ms-3" style="padding-left: 0">
                    <input class="preM form-check-input check2" type="checkbox" id="step62_15" value="1+1(or 2+1) 행사"
                      v-model="check63_15" />
                    <label class="preM form-check-label fs-5" for="step62_15">
                      1+1(or 2+1) 행사
                    </label>
                  </div>
                  <div class="d-flex align-items-start form-check ms-3" style="padding-left: 0">
                    <input class="form-check-input check2" type="checkbox" id="otherOption" value="기타"
                      v-model="check63_16" />
                    <label class="preM form-check-label fs-5" for="otherOption">
                      기타
                    </label>
                    <input class="ms-2" style="
                      width: 15rem;
                      height: 2rem;
                      resize: none;
                      outline: none;
                    " v-model="etc63_1" placeholder="특별한 방식을 적어주세요." />
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex flex-column justify-content-between align-items-center" style="width: 76rem">
              <div class="ThirdProperty2">
                <div class="ThirdPropertyLeftRight2 me-1">
                  <div class="ThirdPropertyTopDown2" style="height: 16rem; width: 5rem">
                    <div class="ThirdPropertyTop2 preSB">순위</div>
                    <div style="
                      padding: 8px;
                      width: 100%;
                      height: 13rem;
                      background: linear-gradient(180deg, #e7f5fe, #fff);
                    ">
                      <div
                        class="form-control transparent-input preM text-center d-flex justify-content-center align-items-center">
                        1
                      </div>
                      <hr class="custom-divider" />
                      <div
                        class="form-control transparent-input preM text-center d-flex justify-content-center align-items-center">
                        2
                      </div>
                      <hr class="custom-divider" />
                      <div
                        class="form-control transparent-input preM text-center d-flex justify-content-center align-items-center">
                        3
                      </div>
                      <hr class="custom-divider" />
                      <div
                        class="form-control transparent-input preM text-center d-flex justify-content-center align-items-center">
                        4
                      </div>
                    </div>
                  </div>
                </div>

                <div class="ThirdPropertyLeftRight2 me-1">
                  <div class="ThirdPropertyTopDown2" style="height: 16rem; width: 15rem">
                    <div class="ThirdPropertyTop2 preSB">선택 채널</div>
                    <div style="
                      padding: 8px;
                      width: 100%;
                      height: 13rem;
                      background: linear-gradient(180deg, #e7f5fe, #fff);
                    ">
                      <select class="form-control transparent-input preM" style="color: grey; width: 14rem"
                        v-model="channel63_1">
                        <option disabled selected>인풋 1</option>
                        <option v-for="(v, i) in selectedOptions" :key="i" :value="v">
                          {{ v }}
                        </option>
                        <!-- 추가 옵션들 -->
                      </select>
                      <hr class="custom-divider" />

                      <select class="form-control transparent-input preM" style="color: grey; width: 14rem"
                        v-model="channel63_2">
                        <option disabled selected>인풋 2</option>
                        <option v-for="(v, i) in selectedOptions" :key="i" :value="v">
                          {{ v }}
                        </option>
                        <!-- 추가 옵션들 -->
                      </select>
                      <hr class="custom-divider" />

                      <select class="form-control transparent-input preM" style="color: grey; width: 14rem"
                        v-model="channel63_3">
                        <option disabled selected>인풋 3</option>
                        <option v-for="(v, i) in selectedOptions" :key="i" :value="v">
                          {{ v }}
                        </option>
                        <!-- 추가 옵션들 -->
                      </select>
                      <hr class="custom-divider" />

                      <select class="form-control transparent-input preM" style="color: grey; width: 14rem"
                        v-model="channel63_4">
                        <option disabled selected>인풋 4</option>
                        <option v-for="(v, i) in selectedOptions" :key="i" :value="v">
                          {{ v }}
                        </option>
                        <!-- 추가 옵션들 -->
                      </select>
                    </div>
                  </div>
                </div>
                <div class="ThirdPropertyLeftRight2 me-1">
                  <div class="ThirdPropertyTopDown2" style="height: 16rem; width: 55rem">
                    <div class="ThirdPropertyTop2 preSB">활동 계획</div>
                    <div style="
                      padding: 8px;
                      width: 100%;
                      height: 13rem;
                      background: linear-gradient(180deg, #e7f5fe, #fff);
                    ">
                      <textarea class="form-control transparent-input preM" v-model="plan63_1"
                        style="width: 49rem"></textarea>
                      <hr class="custom-divider" />
                      <textarea class="form-control transparent-input preM" v-model="plan63_2"
                        style="width: 49rem"></textarea>
                      <hr class="custom-divider" />
                      <textarea class="form-control transparent-input preM" v-model="plan63_3"
                        style="width: 49rem"></textarea>
                      <hr class="custom-divider" />
                      <textarea class="form-control transparent-input preM" v-model="plan63_4"
                        style="width: 49rem"></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <textarea placeholder="메모..." v-model="memo"
            style="width:76rem; height: 100px !important; resize: none; border: none;"
            class="form-control bg-light p-2 rounded fs-4 preM my-4"></textarea>
        </div>
      </div>
    </div>
    <!-- <div class="my-3">
      <b-button class="btn btn-sm" style="float: right" @click="saveBuildStep62">저장</b-button>
    </div> -->
  </div>
</template>

<script>
import step63 from "./js/step63.js";
export default {
  name: "step63Com",
  ...step63,
};
</script>

<style scoped>
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

.basicContentBar {
  width: 26.1rem;
  background-color: #0098d5;
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
  color: #0098d5;
}

.form-control {
  width: 75rem;
  height: 15rem;
}

.productImg {
  width: 7.5rem;
  height: 5.5rem;
  position: relative;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
}

/* 숨겨진 기본 라디오 버튼 스타일링 */
input[type="checkbox"] {
  display: none;
  vertical-align: middle;
  /* 라디오 버튼을 수직 중앙 정렬 */
}

label {
  vertical-align: middle;
  /* 라벨을 수직 중앙 정렬 */
}

/* 가상 체크박스 디자인 */
input[type="checkbox"]+label {
  position: relative;
  padding-left: 30px;
  /* 체크박스 크기 조절 */
  cursor: pointer;
}

/* 라디오 버튼이 체크됐을 때의 가상 체크박스 스타일 */
input[type="checkbox"]:checked+label:before {
  /* 체크 표시의 배경색 지정 */
  content: "\2713";
  /* 유니코드로 체크 마크 추가 */
  text-align: center;
  /* 텍스트를 중앙 정렬 */
  font-size: 35px;
  font-weight: 600;
  /* 체크 마크의 크기 조절 */
  line-height: 6px;
  /* 체크 마크의 높이 조절 */
  color: #0098d5;
  /* 체크 마크의 색상 지정 */
}

.redPropertyTop {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2rem;
  background: #0098d5;
  font-size: 21px;
  color: white;
}

.lightRedProp {
  width: 100%;
  background: #fee2de;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.borderTopBottomGray {
  border-width: 3px 0;
  border-style: solid;
  border-color: #e0d1cf;
}

.transparent-input {
  background-color: transparent;
  border: none;
  outline: none;
  box-shadow: none;
  height: 2rem;
}

.ThirdProperty {
  width: 100%;
  height: 11rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ThirdPropertyLeftRight {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 11.5rem;
}

.ThirdPropertyLeftRight:nth-child(1) {
  flex-grow: 2;
}

.ThirdPropertyLeftRight:nth-child(2) {
  flex-grow: 3;
}

.ThirdPropertyLeftRight:nth-child(3) {
  flex-grow: 5;
}

.ThirdPropertyTopDown {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.ThirdPropertyTop {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2rem;
  background: #0098d5;
  border-radius: 30px;
  color: white;
}

.ThirdtextareaCss {
  padding: 15px;
  width: 100%;
  height: 12rem;
  background: linear-gradient(180deg, #fdc6bf, #fff);
  border: none;
  resize: none;
  outline: none;
}

.custom-divider {
  border: 0;
  /* 기본 테두리 제거 */
  height: 1px;
  /* 선의 두께 */
  background-color: black;
  /* 선의 색상 */
  margin: 0;
  /* 상하 마진 제거 */
}

.ThirdProperty2 {
  width: 100%;
  height: 16rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ThirdPropertyLeftRight2 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 15.5rem;
}

.ThirdPropertyLeftRight2:nth-child(1) {
  flex-grow: 3;
}

.ThirdPropertyLeftRight2:nth-child(2) {
  flex-grow: 3;
}

.ThirdPropertyLeftRight2:nth-child(3) {
  flex-grow: 3;
}

.ThirdPropertyTopDown2 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.ThirdPropertyTop2 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2rem;
  background: #0098d5;
  border-radius: 30px;
  color: white;
}

.transparent-input textarea {
  resize: none;
  /* 크기 조절 비활성화 */
  padding: 10px;
  /* 상하 패딩으로 수직 중앙에 가깝게 */
}

.d-flex.align-items-center {
  display: flex;
  width: 100%;
}

.d-flex.align-items-center>.label {
  flex: 3;
  /* label의 비율 */
  min-width: 0;
  /* flex 항목의 줄바꿈 방지 */
}

.d-flex.align-items-center>textarea {
  flex: 7;
  /* textarea의 비율 */
  min-width: 0;
  /* flex 항목의 줄바꿈 방지 */
}

.form-control.transparent-input.preM {
  padding: 0;
  /* 필요한 경우 패딩 조절 */
}

select.form-control,
textarea.form-control {
  width: 100%;
  height: 2rem !important;
  /* Same height for both */
  resize: none;
  /* other styling properties */
}

.step63Img {
  width: 100%;
  height: 100%;
  position: relative;
  background-size: cover;
  background-position: center;
}

.check2+label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 4.5px;
  width: 20px;
  height: 20px;
  border: 2px solid #000;
  background-color: #fff;
  border-radius: 4px;
}

.check3+label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 20px;
  height: 20px;
  border: 2px solid #000;
  background-color: #fff;
  border-radius: 4px;
}

.check4+label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 5px;
  width: 20px;
  height: 20px;
  border: 2px solid #000;
  background-color: #fff;
  border-radius: 4px;
}

.custom-file-input {
  position: relative;
  overflow: hidden;
  display: inline-block;
  width: 9rem;
}

input[type="file"] {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
  width: 9rem;
}

.file-label {
  background-color: #ddd;
  padding: 4px 12px;
  display: inline-block;
  cursor: pointer;
  width: 9rem;
  white-space: nowrap;
  /* 파일명이 길어지면 줄 바꿈 방지 */
  overflow: hidden;
  text-overflow: ellipsis;
  /* 일정 길이 이상이면 '...'으로 대체 */
}
</style>
