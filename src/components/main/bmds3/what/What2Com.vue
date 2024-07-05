<template>
  <div class="container">
    <div class="d-flex justify-content-end">
      <div style="color: gray; font-size: 1rem; margin: 1rem 1rem 0 0">
        Business Model Design Solution
      </div>
      <div>
        <img src="@/assets/bmds3/흑백 로고.png" />
      </div>
    </div>
    <div
      class="d-flex justify-content-start"
      style="height: 5rem; margin-left: 1rem"
    >
      <div class="d-flex">
        <div
          style="
            font-size: 6rem;
            width: 6rem;
            color: #fdf3d7;
            margin: -2.7rem 1.5rem 0 -7.5rem;
          "
        >
          05
        </div>
        <div class="d-flex flex-column">
          <div style="font-size: 1rem">Solution</div>
          <div style="font-size: 2rem; color: #ffc000">1) 핵심가치 제안</div>
        </div>
      </div>
    </div>
    <div>
      <div
        style="
          width: 81rem;
          height: 3.5rem;
          border-radius: 7px;
          background: #fdf3d7;
        "
      >
        <div style="font-size: 17px; margin-left: 39px">
          제품(서비스)이 기존에 해결되지 못한 고객의 과업 / 불만 / 니즈를 해결해
          줄 수 있는지 파악하기 위해<br />
          제품(서비스)의 가치가 고객이 중요하게 생각하는 문제에 부합하는지
          분석합니다.
        </div>
      </div>
    </div>
    <!-- todo:============================================================================== -->
    <div class="container" style="height: 500px">
      <div class="row">
        <div class="col-7">
          <div class="d-flex justify-content-center mt-3" style="height: 600px">
            <!-- 첫 번째 세로 박스 그룹 -->
            <div
              class="col-4 d-flex flex-column justify-content-center text-center"
            >
              <div class="m-1 yelloBox" style="flex: 1">해결안</div>
              <div class="m-1 greyBox" style="flex: 3">
                <!-- 3의 비율을 가진 박스 -->
                <div style="flex: 3" class="mb-1">불만 해소 방안</div>

                <!-- 나머지 비율을 가진 textarea -->
                <textarea
                  v-model="coreValueProposal.complaint.solution"
                  style="flex: 1"
                ></textarea>
              </div>
              <div class="m-1 greyBox" style="flex: 3">
                <!-- 3의 비율을 가진 박스 -->
                <div style="flex: 3" class="mb-1">불충족 요구 충족 방안</div>

                <!-- 나머지 비율을 가진 textarea -->
                <textarea
                  v-model="coreValueProposal.unmetRequirement.solution"
                  style="flex: 1"
                ></textarea>
              </div>
              <div class="m-1 greyBox" style="flex: 3">
                <!-- 3의 비율을 가진 박스 -->
                <div style="flex: 3" class="mb-1">고객요구 품질 충족 방안</div>

                <!-- 나머지 비율을 가진 textarea -->
                <textarea
                  v-model="
                    coreValueProposal.customerQualityRequirement.solution
                  "
                  style="flex: 1"
                ></textarea>
              </div>
            </div>

            <!-- 두 번째 세로 박스 그룹 -->
            <div class="col-4 d-flex flex-column text-center">
              <div class="m-1 yelloBox" style="flex: 1">
                고객 혜택(가치 제안)
              </div>
              <div class="m-1 greyBox" style="flex: 3">
                <!-- 3의 비율을 가진 박스 -->
                <div style="flex: 3" class="mb-1">
                  불만 해소를 통한 고객 혜택
                </div>

                <!-- 나머지 비율을 가진 textarea -->
                <textarea
                  v-model="coreValueProposal.complaint.customerBenefit"
                  style="flex: 1"
                ></textarea>
              </div>
              <div class="m-1 greyBox" style="flex: 3">
                <!-- 3의 비율을 가진 박스 -->
                <div style="flex: 3" class="mb-1">
                  니즈 충족을 통한 고객 혜택
                </div>

                <!-- 나머지 비율을 가진 textarea -->
                <textarea
                  v-model="coreValueProposal.unmetRequirement.customerBenefit"
                  style="flex: 1"
                ></textarea>
              </div>
              <div class="m-1 greyBox" style="flex: 3">
                <!-- 3의 비율을 가진 박스 -->
                <div style="flex: 3" class="mb-1">
                  품질 충족을 통한 고객 혜택
                </div>

                <!-- 나머지 비율을 가진 textarea -->
                <textarea
                  v-model="
                    coreValueProposal.customerQualityRequirement.customerBenefit
                  "
                  style="flex: 1"
                ></textarea>
              </div>
            </div>

            <!-- 세 번째 세로 박스 그룹 -->
            <div class="col-4 d-flex flex-column text-center">
              <div class="m-1 yelloBox" style="flex: 1">핵심가치</div>
              <div class="m-1 greyBox" style="flex: 3">
                <!-- 3의 비율을 가진 박스 -->
                <div style="flex: 1" class="mb-1">핵심 가치 정의</div>

                <!-- 나머지 비율을 가진 textarea -->
                <textarea
                  v-model="coreValueProposal.complaint.coreValue"
                  style="flex: 2"
                ></textarea>
                <div class="d-flex m-3">
                  <input
                    class="m-3"
                    type="radio"
                    name="coreValueCheckItem1"
                    value="1"
                    v-model="coreValueProposal.complaint.coreValueCheckItem"
                  />
                  <input
                    class="m-3"
                    type="radio"
                    name="coreValueCheckItem1"
                    value="2"
                    v-model="coreValueProposal.complaint.coreValueCheckItem"
                  />
                  <input
                    class="m-3"
                    type="radio"
                    name="coreValueCheckItem1"
                    value="3"
                    v-model="coreValueProposal.complaint.coreValueCheckItem"
                  />
                  <input
                    class="m-3"
                    type="radio"
                    name="coreValueCheckItem1"
                    value="4"
                    v-model="coreValueProposal.complaint.coreValueCheckItem"
                  />
                </div>
              </div>
              <div class="m-1 greyBox" style="flex: 3">
                <!-- 3의 비율을 가진 박스 -->
                <div style="flex: 1" class="mb-1">핵심 가치 정의</div>

                <!-- 나머지 비율을 가진 textarea -->
                <textarea
                  v-model="coreValueProposal.unmetRequirement.coreValue"
                  style="flex: 2"
                ></textarea>
                <div class="d-flex m-3">
                  <input
                    class="m-3"
                    type="radio"
                    name="coreValueCheckItem2"
                    value="1"
                    v-model="
                      coreValueProposal.unmetRequirement.coreValueCheckItem
                    "
                  />
                  <input
                    class="m-3"
                    type="radio"
                    name="coreValueCheckItem2"
                    value="2"
                    v-model="
                      coreValueProposal.unmetRequirement.coreValueCheckItem
                    "
                  />
                  <input
                    class="m-3"
                    type="radio"
                    name="coreValueCheckItem2"
                    value="3"
                    v-model="
                      coreValueProposal.unmetRequirement.coreValueCheckItem
                    "
                  />
                  <input
                    class="m-3"
                    type="radio"
                    name="coreValueCheckItem2"
                    value="4"
                    v-model="
                      coreValueProposal.unmetRequirement.coreValueCheckItem
                    "
                  />
                </div>
              </div>
              <div class="m-1 greyBox" style="flex: 3">
                <!-- 3의 비율을 가진 박스 -->
                <div style="flex: 1" class="mb-1">핵심 가치 정의</div>

                <!-- 나머지 비율을 가진 textarea -->
                <textarea
                  v-model="
                    coreValueProposal.customerQualityRequirement.coreValue
                  "
                  style="flex: 2"
                ></textarea>
                <div class="d-flex m-3">
                  <input
                    class="m-3"
                    type="radio"
                    name="coreValueCheckItem3"
                    value="1"
                    v-model="
                      coreValueProposal.customerQualityRequirement
                        .coreValueCheckItem
                    "
                  />
                  <input
                    class="m-3"
                    type="radio"
                    name="coreValueCheckItem3"
                    value="2"
                    v-model="
                      coreValueProposal.customerQualityRequirement
                        .coreValueCheckItem
                    "
                  />
                  <input
                    class="m-3"
                    type="radio"
                    name="coreValueCheckItem3"
                    value="3"
                    v-model="
                      coreValueProposal.customerQualityRequirement
                        .coreValueCheckItem
                    "
                  />
                  <input
                    class="m-3"
                    type="radio"
                    name="coreValueCheckItem3"
                    value="4"
                    v-model="
                      coreValueProposal.customerQualityRequirement
                        .coreValueCheckItem
                    "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-2 d-flex">
          <img
            class="mt-5"
            src="@/assets/core_value_mini.png"
            style="height: 550px; margin-left: -30px"
            alt=""
          />
        </div>
        <div class="col-3 d-flex mt-3" style="600px">
          <div
            class="col d-flex flex-column justify-content-center text-center"
          >
            <div class="m-1 greyBox" style="flex: 3">
              <!-- 3의 비율을 가진 박스 -->
              <div style="flex: 3" class="mb-1">불만 해소 방안</div>

              <!-- 나머지 비율을 가진 textarea -->
              <textarea style="flex: 1"></textarea>
            </div>
            <div class="m-1 greyBox" style="flex: 3">
              <!-- 3의 비율을 가진 박스 -->
              <div style="flex: 3" class="mb-1">불충족 요구 충족 방안</div>

              <!-- 나머지 비율을 가진 textarea -->
              <textarea style="flex: 1"></textarea>
            </div>
            <div class="m-1 greyBox" style="flex: 3">
              <!-- 3의 비율을 가진 박스 -->
              <div style="flex: 3" class="mb-1">고객요구 품질 충족 방안</div>

              <!-- 나머지 비율을 가진 textarea -->
              <textarea style="flex: 1"></textarea>
            </div>
            <div class="m-1 pBox" style="flex: 1">해결안</div>
          </div>
        </div>
      </div>
    </div>
    <!-- todo:============================================================================== -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      coreValueProposal: {
        complaint: {
          solution: "",
          customerBenefit: "",
          coreValue: "",
          coreValueCheckItem: null,
        },
        unmetRequirement: {
          solution: "",
          customerBenefit: "",
          coreValue: "",
          coreValueCheckItem: null,
        },
        customerQualityRequirement: {
          solution: "",
          customerBenefit: "",
          coreValue: "",
          coreValueCheckItem: null,
        },
      },
    };
  },

  methods: {
    saveRow() {
      console.log(this.coreValueProposal);
    },
  },
};
</script>

<style scoped>
.yelloBox {
  background-color: #ffc000;
  color: white;
  border-radius: 5%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: 1.5rem;
}
.pBox {
  background-color: #a84ea4;
  color: white;
  border-radius: 5%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: 1.5rem;
}

.greyBox {
  background-color: #f2f2f2;
  font-size: 1rem;
  padding: 0.5rem;
}
input[type="radio"] {
  display: block !important;
}
</style>
