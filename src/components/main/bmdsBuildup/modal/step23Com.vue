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
        2-2 : 고객 페르소나 설계(B2B)
      </div>
    </div>

    <div class="preM modal-wrap">
      <div class="my-5">
        <div class="mb-3">
          <label for="businessArea" class="preSB form-label fs-3">
            <span class="primeColor">2.</span> 우리가 생각하는 고객을
            그려봅니다.
            <span style="font-size: 17px">(B2B 타입 페르소나 설계)</span></label>
          <div class="d-flex justify-content-start align-items-center">
            <div class="d-flex board flex-column primeColor fs-4 text-center">
              <div class="d-flex flex-column mb-5 text-start">
                <div>
                  <div class="d-flex justify-content-start align-items-center">
                    <img class="me-3" src="@/assets/buildup/industryClassification.png" alt="산업분류"
                      style="width: 50px; height: 50px" />
                    <span class="preSB fs-3" style="color: black">
                      산업분류</span>
                  </div>
                  <select class="preM form-control bg-light p-2 rounded"
                    style="border-style: none; width: 20rem; height: 2.5rem" v-model="category23_1">
                    <option disabled value="">선택하세요</option>
                    <option value="농업, 임업 및 어업">
                      농업, 임업 및 어업
                    </option>
                    <option value="광업">광업</option>
                    <option value="제조업">제조업</option>
                    <option value="기,가스,증기 및 공기 조절 공급업">
                      전기,가스,증기 및 공기 조절 공급업
                    </option>
                    <option value="수도,하수 및 폐기물 처리, 원료 재생업">
                      수도,하수 및 폐기물 처리, 원료 재생업
                    </option>
                    <option value="건설업">건설업</option>
                    <option value="도매 및 소매업">도매 및 소매업</option>
                    <option value="운수 및 창고업">운수 및 창고업</option>
                    <option value="숙박 및 음식점업">숙박 및 음식점업</option>
                    <option value="정보통신업">정보통신업</option>
                    <option value="금융 및 보험업">금융 및 보험업</option>
                    <option value="부동산업">부동산업</option>
                    <option value="전문,과학 및 기술 서비스업">
                      전문,과학 및 기술 서비스업
                    </option>
                    <option value="사업시설 관리, 사업 지원 및 임대 서비스업">
                      사업시설 관리, 사업 지원 및 임대 서비스업
                    </option>
                    <option value="공공 행정, 국방 및 사회보장 행정">
                      공공 행정, 국방 및 사회보장 행정
                    </option>
                    <option value="교육 서비스업">교육 서비스업</option>
                    <option value="보건업 및 사회복지 서비스업">
                      보건업 및 사회복지 서비스업
                    </option>
                    <option value="예술, 스포츠 및 여가관련 서비스업">
                      예술, 스포츠 및 여가관련 서비스업
                    </option>
                    <option value="협회 및 단체, 수리 및 기타 개인 서비스업">
                      협회 및 단체, 수리 및 기타 개인 서비스업
                    </option>
                    <option value="가구 내 고용활동 및 달리 분류되지 않은 자가 소비 생산활동">
                      가구 내 고용활동 및 달리 분류되지 않은 자가 소비 생산활동
                    </option>
                    <option value="국제 및 외국기관">국제 및 외국기관</option>
                    <!-- 추가적인 옵션들 -->
                  </select>
                  <input type="text" class="preM form-control bg-light p-2 rounded"
                    style="border-style: none; width: 20rem; height: 2.5rem" placeholder="상세 업종을 작성해주세요."
                    v-model="detailCategory23_1" />
                </div>
              </div>
              <div class="d-flex flex-column mb-4 mt-1 text-start">
                <div>
                  <div class="d-flex justify-content-start align-items-center">
                    <img class="me-3" src="@/assets/buildup/companySize.png" alt="기업규모"
                      style="width: 50px; height: 50px" />
                    <span class="preSB fs-3" style="color: black">
                      기업규모</span>
                  </div>
                  <select class="preM form-control bg-light p-2 rounded"
                    style="border-style: none; width: 20rem; height: 5rem" v-model="scale23_1">
                    <option disabled value="">선택하세요</option>
                    <option value="10억원 미만">10억원 미만</option>
                    <option value="10억원~50억원">10억원~50억원</option>
                    <option value="50억원~200억원">50억원~200억원</option>
                    <option value="200억원~500억원">200억원~500억원</option>
                    <option value="500억원~1000억원">500억원~1000억원</option>
                    <option value="1000억원 이상">1000억원 이상</option>
                    <!-- 추가적인 옵션들 -->
                  </select>
                </div>
              </div>
              <div class="d-flex flex-column mt-5 text-start">
                <div>
                  <div class="d-flex justify-content-start align-items-center">
                    <img class="me-3" src="@/assets/buildup/geographicalLocation.png" alt="지리적 위치"
                      style="width: 50px; height: 50px" />
                    <span class="preSB fs-3" style="color: black">
                      지리적 위치</span>
                  </div>
                  <textarea class="preM form-control bg-light p-2 rounded" style="
                      border-style: none;
                      width: 20rem;
                      height: 5rem;
                      resize: none;
                    " placeholder="지리적 위치를 입력하세요." v-model="logical23_1"></textarea>
                </div>
              </div>
            </div>
            <div class="d-flex board flex-column primeColor fs-4 justify-item-">
              <img style="width:607px; height:519px;" src="@/assets/buildup/persona.png" alt="페르소나" />
            </div>
            <div class="d-flex board flex-column primeColor fs-4 text-start">
              <div class="d-flex flex-column mb-5">
                <div>
                  <div class="d-flex justify-content-start align-items-center">
                    <img class="me-3" src="@/assets/buildup/purposeOfPurchase.png" alt="구매 용도"
                      style="width: 50px; height: 50px" />
                    <span class="preSB fs-3" style="color: black">
                      구매 용도</span>
                  </div>
                  <textarea class="preM form-control bg-light p-2 rounded" style="
                      border-style: none;
                      width: 20rem;
                      height: 5rem;
                      resize: none;
                    " placeholder="구매용도를 입력하세요." v-model="goal23_1"></textarea>
                </div>
              </div>
              <div class="d-flex flex-column mb-4 mt-1 text-start">
                <div>
                  <div class="d-flex justify-content-start align-items-center">
                    <img class="me-3" src="@/assets/buildup/rightToPurchaseDecision.png" alt="구매 결정권"
                      style="width: 50px; height: 50px" />
                    <span class="preSB fs-3" style="color: black">
                      구매 결정권</span>
                  </div>
                  <textarea class="preM form-control bg-light p-2 rounded" style="
                      border-style: none;
                      width: 20rem;
                      height: 5rem;
                      resize: none;
                    " placeholder="누구에게 구매 결정권이 있나요?" v-model="selected23_1"></textarea>
                </div>
              </div>
              <div class="d-flex flex-column mt-5 text-start">
                <div>
                  <div class="d-flex justify-content-start align-items-center">
                    <img class="me-3" src="@/assets/buildup/purchaseCycle.png" alt="구매 주기"
                      style="width: 50px; height: 50px" />
                    <span class="preSB fs-3" style="color: black">
                      구매 주기</span>
                  </div>
                  <textarea class="preM form-control bg-light p-2 rounded" style="
                      border-style: none;
                      width: 20rem;
                      height: 5rem;
                      resize: none;
                    " placeholder="얼마나 자주 구매하나요?" v-model="cycle23_1"></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
        <textarea placeholder="메모..." v-model="memo" class="form-control bg-light p-2 rounded fs-4 preM my-5 memo">
        </textarea>
      </div>
    </div>
    <!-- <div class="my-3">
      <b-button class="btn btn-sm" style="float: right" @click="saveBuildStep23">저장</b-button>
    </div> -->
  </div>
</template>

<script>
import step23 from "./js/step23.js";
export default {
  name: "step23Com",
  ...step23,
};
</script>

<style scoped>
.memo {
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
