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
    <div class="d-flex justify-content-start" style="height: 5rem; margin-left:1rem;">
      <div class="d-flex">
        <div style="
            font-size: 6rem;
            width: 6rem;
            color: #DAE3F3;
            margin: -2.7rem 1.5rem 0 -7.5rem;
          ">
          08
        </div>
        <div class="d-flex flex-column">
          <div style="font-size: 1rem">Revenue Structure</div>
          <div style="font-size: 2rem; color: #1968C1;">
            1) 수익 프레임워크 설계
          </div>
        </div>
      </div>
    </div>
    <div>
      <div style="
          width: 81rem;
          height: 2.5rem;
          border-radius: 7px;
          background: #DAE3F3;
        ">
        <div style="font-size: 17px; margin-left: 39px; line-height: 37px">
          판매 전략을 어떻게 세워야 고객을 확보 및 증가시키고 가장 많은 수익을 남길 수 있을지 판매 단계별 3P(Payer / Packaging / Pricing)를 설계합니다.
        </div>
      </div>
    </div>

    <div class="d-flex flex-column mt-3" style="max-height:40rem;">
      <div class="d-flex justify-content-start align-items-center image-container" style="width:100%; height:17rem;">
        <img src="../../../../assets/bmds3/Revenue.png" alt="">
      </div>

      <div class="d-flex flex-column justify-content-start mt-3" style="width:100%; height:23rem;">
        <div class="d-flex justify-content-between align-items-center">
          <div class="RSTitle">
            <div>
              고객 세분화
            </div>
          </div>
          <div class="RSTitle2">
            <div>
              Acquire
            </div>
          </div>
          <div class="RSTitle2">
            <div>
              Activate
            </div>
          </div>
          <div class="RSTitle2">
            <div>
              Keep
            </div>
          </div>
          <div class="RSTitle2">
            <div>
              Up-sell
            </div>
          </div>
          <div class="RSTitle2">
            <div>
              Next-sell
            </div>
          </div>
          <div class="RSTitle2">
            <div>
              Cross-sell
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <div class="dfjccaic" style="background:#DAE3F3; color:#4472C4; width:9rem; height:3.5rem; font-size:20px;">
            <div>
              EX)
            </div>
          </div>
          <div class="d-flex justify-content-start">
            <div class="greyBox">
              <div style="margin: 15px 0 0 15px;">예시</div>
            </div>
          </div>
          <div class="d-flex justify-content-start">
            <div class="greyBox">
              <div style="margin: 15px 0 0 15px;">예시</div>
            </div>
          </div>
          <div class="d-flex justify-content-start">
            <div class="greyBox">
              <div style="margin: 15px 0 0 15px;">예시</div>
            </div>
          </div>
          <div class="d-flex justify-content-start">
            <div class="greyBox">
              <div style="margin: 15px 0 0 15px;">예시</div>
            </div>
          </div>
          <div class="d-flex justify-content-start">
            <div class="greyBox">
              <div style="margin: 15px 0 0 15px;">예시</div>
            </div>
          </div>
          <div class="d-flex justify-content-start">
            <div class="greyBox">
              <div style="margin: 15px 0 0 15px;">예시</div>
            </div>
          </div>
        </div>
        <div style="max-height:36rem;overflowY:scroll;">
          <div v-for="(rev, i) in revFrameDesign2" :key="i" class="d-flex justify-content-between align-items-center">
            <div class="dfjccaic">
              <input type="text" class="cost" v-model="rev.custGroup" />
            </div>
            <div class="dfjccaic">
              <textarea class="textareaBor" v-model="rev.custAcquisit"></textarea>
            </div>
            <div class="dfjccaic">
              <textarea class="textareaBor" v-model="rev.activate"></textarea>
            </div>
            <div class="dfjccaic">
              <textarea class="textareaBor" v-model="rev.custRetent"></textarea>
            </div>
            <div class="dfjccaic">
              <textarea class="textareaBor" v-model="rev.purchInduce"></textarea>
            </div>
            <div class="dfjccaic">
              <textarea class="textareaBor" v-model="rev.servProvision"></textarea>
            </div>
            <div class="dfjccaic">
              <textarea class="textareaBor" v-model="rev.increaseSales"></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <button type="button" class="btn btn-sm btn-primary" style="float:right;margin-top:6px;"
        @click="saveRevStruct">임시저장</button>
      <button type="button" class="btn btn-sm btn-primary" style="float:right;margin-top:6px;"
        @click="addRevStruct">추가하기</button>
      <button type="button" class="btn btn-sm btn-primary" style="float:right;margin-top:6px;"
        @click="delRevStruct">한줄지우기</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      revFrameDesign2: [ // 수익프레임워크설계
        {
          custGroup: "", // 고객군
          custAcquisit: "", // 고객확보
          activate: "", // 활성화
          custRetent: "", // 고객유지
          purchInduce: "", // 구매유도
          servProvision: "", // 서비스제공
          increaseSales: "", // 판매량증가
        }
      ]
    };
  },
  methods: {
    saveRevStruct() {
      console.log(this.revFrameDesign2);
    },
    addRevStruct() {
      this.revFrameDesign2.push({
        custGroup: "", // 고객군
        custAcquisit: "", // 고객확보
        activate: "", // 활성화
        custRetent: "", // 고객유지
        purchInduce: "", // 구매유도
        servProvision: "", // 서비스제공
        increaseSales: "", // 판매량증가
      })
    },
    delRevStruct() {
      if (this.revFrameDesign2.length > 1) {
        this.revFrameDesign2.pop();
      }
    }
  },
};
</script>

<style scoped>
.divBox {
  border: 1px solid #b1b0b0;
  width: 7rem;
  height: 2.5rem;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

input[type='text'],
textarea {
  border: none;
}

.RSTitle {
  background: #8FAADC;
  color: white;
  width: 9rem;
  height: 2.5rem;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}

.RSTitle2 {
  background: #8FAADC;
  color: white;
  width: 11.5rem;
  height: 2.5rem;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}

.dfjccaic {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}

.greyBox {
  background: #E7E6E6;
  color: #7F7F7F;
  width: 11.5rem;
  height: 3.5rem;
  font-size: 15px;
  margin-bottom: 10px;
}

.miArrow {
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 10px solid #BFBFBF;
  /* 화살표의 색상은 여기서 조절하세요 */
}

.textareaBor {
  border: 1px solid #E7E6E6;
  width: 11.5rem;
  height: 5rem;
  font-size: 15px;
}

.cost {
  background: #DAE3F3;
  color: #4472C4;
  width: 9rem;
  height: 5rem;
  font-size: 20px;
  font-size: 15px;
  text-align: center;
}

.oval {
  width: 50px;
  height: 230px;
  background-color: #2F5597;
  border-radius: 50%;
  position: relative;
  margin: 50px auto;
  z-index: 2;
}

.bigArrow1 {
  width: 0;
  height: 0;
  border-top: 115px solid transparent;
  border-bottom: 115px solid transparent;
  border-left: 600px solid #1968C1;
  position: absolute;
  top: 50%;
  left: 326px;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.bigArrow2 {
  width: 0;
  height: 0;
  border-top: 83px solid transparent;
  border-bottom: 83px solid transparent;
  border-left: 458px solid #8FAADC;
  position: absolute;
  top: 50%;
  left: 423px;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.image-container {
  width: 100%;
  /* 부모 요소에 대한 상대적인 너비 설정 */
  height: 100%;
  /* 부모 요소에 대한 상대적인 높이 설정 */
  position: relative;
  /* 위치 설정을 위해 relative를 사용합니다. */
  overflow: hidden;
  /* 내부 내용이 넘칠 경우를 대비하여 오버플로우를 숨깁니다. */
}

/* 이미지의 스타일을 정의합니다. */
.image-container img {
  width: 100%;
  /* 이미지를 부모 요소에 대한 100%로 설정하여 꽉 차게 만듭니다. */
  height: auto;
  /* 가로 비율을 유지하면서 세로 크기를 자동 조정합니다. */
}
</style>
