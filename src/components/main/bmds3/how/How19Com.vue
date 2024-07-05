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
          09
        </div>
        <div class="d-flex flex-column">
          <div style="font-size: 1rem">Core Activity</div>
          <div style="font-size: 2rem; color: #1968C1;">
            3) Product - Market Fit
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
          제품(서비스) 판매량 상승을 위한 해결안을 마련하기 위해 고객 반응 조사를 계획합니다.
        </div>
      </div>
    </div>

    <div class="d-flex flex-column mt-3" style="height:40rem;">
      <div style="width:16rem; height:2rem; font-size:20px; margin:0 0 1rem 1rem;">② 고객 반응 분석</div>
      <div class="d-flex justify-content-between" style="width:100%;">
        <div class="d-flex flex-column">
          <div>
            <div class="d-flex align-items-center justify-content-center"
              style="width:81rem; height:3rem; background:#1968C1; color:white; font-size:20px;">
              <div>
                고객 반응 분석
              </div>
            </div>
            <div class="d-flex" style="width:100%;">
              <div class="d-flex align-items-center justify-content-center"
                style="width:22rem; height:2rem; background:#E7E6E6; font-size:20px;">
                <div>
                  분석 항목
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-center"
                style="width:22rem; height:2rem; background:#E7E6E6; font-size:20px; border-right:1px solid #96AAC0;border-left:1px solid #96AAC0;">
                <div>
                  지표/단위
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-center"
                style="width:37rem; height:2rem; background:#E7E6E6; font-size:20px; border-right:1px solid #96AAC0;border-left:1px solid #96AAC0;">
                <div>
                  분석 내용
                </div>
              </div>
            </div>
          </div>
          <div style="max-height:31rem;border-bottom:2px solid #1968C1; overflowY:scroll;">
            <div v-for="(cust, i) in customerRes" :key="i" class="d-flex">
              <input type="text" style="width:22rem; height:3rem; text-align:center; font-size:20px;"
                v-model="cust.items">
              <input type="text" style="width:22rem; height:3rem; text-align:center; font-size:20px;"
                v-model="cust.indicators">
              <textarea style="width:36rem; height:3rem; text-align:center; font-size:20px;"
                v-model="cust.content"></textarea>
              <button class="d-flex justify-content-center align-items-center" type="button"
                style="width:1.5rem; height:1.5rem;margin-left:-1.5rem;" @click="delRes(i)">X</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <button type="button" class="btn btn-sm btn-primary" style="float:right;margin-top:6px;"
        @click="saveCustRes">임시저장</button>
      <button type="button" class="btn btn-sm btn-primary" style="float:right;margin-top:6px;"
        @click="addRes">분석추가</button>
    </div>
  </div>
</template>

<script>

export default {

  data() {
    return {
      customerRes: [ // 고객반응분석
        {
          item: "", // 분석 항목
          indicators: "", // 지표
          content: "" // 내용
        }
      ],
    };
  },
  methods: {
    addRes() {
      this.customerRes.push({
        item: "", // 분석 항목
        indicators: "", // 지표
        content: "" // 내용
      });
    },
    delRes(i) {
      this.customerRes.splice(i, 1);
    },
    saveCustRes() {
      console.log(this.customerRes);
    }
  },
};
</script>

<style scoped>
input[type='text'],
textarea {
  /*border: none;*/
}
</style>
