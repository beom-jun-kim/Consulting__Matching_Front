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
          제품(서비스) 개선이 필요한 상황을 설정하고 각 상황에 대응하는 제품(서비스)의 개선 방안을 마련합니다.
        </div>
      </div>
    </div>

    <div class="d-flex flex-column mt-3" style="height:40rem;">
      <div style="width:16rem; height:2rem; font-size:20px; margin:0 0 1rem 1rem;">③ 제품(서비스) 리비전</div>
      <div class="d-flex justify-content-between" style="width:100%;">
        <div class="d-flex flex-column" style="max-height:36rem;border-bottom:2px solid #1968C1; overflowY:scroll;">
          <div>
            <div class="d-flex">
              <div class="d-flex align-items-center justify-content-center"
                style="width:40rem; height:3rem; background:#1968C1; color:white; font-size:20px;">
                <div>
                  제품(서비스) 개선이 필요한 상황 설정
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-center"
                style="width:40rem; height:3rem; background:#1968C1; color:white; font-size:20px;">
                <div>
                  제품(서비스) 개선방안
                </div>
              </div>
            </div>
            <div v-for="(proRev, i) in productRevision" :key="i" class="d-flex">
              <textarea style="width:40rem; height:8rem;" v-model="proRev.setting"></textarea>
              <textarea style="width:40rem; height:8rem;" v-model="proRev.revision"></textarea>
              <button class="d-flex justify-content-center align-items-center" type="button"
                style="width:1.5rem; height:1.5rem;margin-left:-1.5rem;" @click="delRevision(i)">X</button>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div>
      <button type="button" class="btn btn-sm btn-primary" style="float:right;margin-top:6px;"
        @click="saveRevision">임시저장</button>
      <button type="button" class="btn btn-sm btn-primary" style="float:right;margin-top:6px;"
        @click="addRevision">리비전추가</button>
    </div>
  </div>
</template>

<script>

export default {

  data() {
    return {
      productRevision: [ // 제품 리비전
        {
          setting: "", // 제품개선이 필요한 상황 설정
          revision: "" // 개선방안
        }
      ],
    };
  },
  methods: {
    addRevision() {
      this.productRevision.push({
        setting: "", // 제품개선이 필요한 상황 설정
        revision: "" // 개선방안
      });
    },
    delRevision(i) {
      this.productRevision.splice(i, 1);
    },
    saveRevision() {
      console.log(this.productRevision);
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
