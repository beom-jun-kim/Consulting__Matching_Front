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
          비즈니스모델을 통해 어떻게 가치를 창출하고, 전달하고, 돈을 회수할지 3P(Payer / Packaging / Pricing)를 설계합니다.
        </div>
      </div>
    </div>
    <div class="d-flex flex-column" style="height:46rem;">
      <div class="d-flex align-items-center justify-content-between mt-3" style="width:79rem;">
        <div class="d-flex justify-content-center align-items-center" style="width:26.3rem; height:11rem;">
          <div>
            <div style="width:25.5rem; height:3rem; margin-bottom:0.5rem;"
              class="d-flex align-content-center justify-content-center">
              <div style="background:#4FC9D9; width:3rem; height:3rem; margin-right:1rem;"></div>
              <div style="color:#4FC9D9;">Payer</div>
            </div>
            <div class="d-flex justify-content-center align-items-center"
              style="width:25.5rem; height:2.5rem; background:#4FC9D9; color:white; font-size:19px;">누구에게 돈을 받을 것인가?</div>
            <div style="width:25.5rem; height:4rem; background:#F2F2F2; font-size:15px;">
              <div style="margin: 10px 0 0 20px;">
                Ex) 사용자 / 구매자 / 의사결정자 / 구매영향자<br />기술애호가(광팬) / 얼리어댑터(경험주의자), ...
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center align-items-center" style="width:26.3rem; height:11rem;">
          <div>
            <div style="width:25.5rem; height:3rem; margin-bottom:0.5rem;"
              class="d-flex align-content-center justify-content-center">
              <div style="background:#274AB0; width:3rem; height:3rem; margin-right:1rem;"></div>
              <div style="color:#274AB0;">Packaging</div>
            </div>
            <div class="d-flex justify-content-center align-items-center"
              style="width:25.5rem; height:2.5rem; background:#274AB0; color:white; font-size:19px;">어떠한 제품/서비스 유형을 제공할
              것인가?
            </div>
            <div style="width:25.5rem; height:4rem; background:#F2F2F2; font-size:15px;">
              <div style="margin: 10px 0 0 20px;">
                Ex) 제품라인업, 서비스 항목 세분화, ...
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center align-items-center" style="width:26.3rem; height:11rem;">
          <div>
            <div style="width:25.5rem; height:3rem; margin-bottom:0.5rem;"
              class="d-flex align-content-center justify-content-center">
              <div style="background:#558ED5; width:3rem; height:3rem; margin-right:1rem;"></div>
              <div style="color:#558ED5;">Pricing</div>
            </div>
            <div class="d-flex justify-content-center align-items-center"
              style="width:25.5rem; height:2.5rem; background:#558ED5; color:white; font-size:19px;">어떤 방법으로 고객가치 교환을 시도할
              것인가?</div>
            <div style="width:25.5rem; height:4rem; background:#F2F2F2; font-size:15px;">
              <div style="margin: 10px 0 0 20px;">
                Ex) 요금/유지보수/과금체계의 선불제, 고객비용기반,<br />시간제, 사용료, 기술이전료, 소모품, ...
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="width:80rem;max-height:50rem; overflowY:scroll;">
        <div v-for="(rev, i) in revFrameDesign" :key="i" class="d-flex justify-content-between align-items-center"
          style="width:100%;">
          <div class="d-flex justify-content-center align-items-center"
            style="background:#F2F2F2; width:27rem; height:11rem;">
            <textarea style="width:25.5rem; height:9.5rem; font-size:20px;" v-model="rev.payer"></textarea>
          </div>
          <div class="d-flex justify-content-center align-items-center"
            style="background:#F2F2F2; width:27rem; height:11rem;">
            <textarea style="width:25.5rem; height:9.5rem; font-size:20px;" v-model="rev.packaging"></textarea>
          </div>
          <div class="d-flex justify-content-center align-items-center"
            style="background:#F2F2F2; width:27rem; height:11rem;">
            <textarea style="width:25.5rem; height:9.5rem; font-size:20px;" v-model="rev.pricing"></textarea>
          </div>
        </div>
      </div>
    </div>
    <div>
      <button type="button" class="btn btn-sm btn-primary" style="float:right;margin-top:6px;"
        @click="saveRevFrame">임시저장</button>
      <button type="button" class="btn btn-sm btn-primary" style="float:right;margin-top:6px;"
        @click="addRevFrame">추가하기</button>
      <button type="button" class="btn btn-sm btn-primary" style="float:right;margin-top:6px;"
        @click="delRevFrame">한줄지우기</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      revFrameDesign: [{ // 수익프레임워크설계
        payer: "", // 페이어
        packaging: "", // 패키징
        pricing: "" // 프라이싱
      }]
    };
  },
  methods: {
    saveRevFrame() {
      console.log(this.revFrameDesign);
    },
    addRevFrame() {
      this.revFrameDesign.push({
        payer: "", // 페이어
        packaging: "", // 패키징
        pricing: "" // 프라이싱
      })
    },
    delRevFrame() {
      if (this.revFrameDesign.length > 1) {
        this.revFrameDesign.pop();
      }
    }
  },
};
</script>

<style scoped></style>
