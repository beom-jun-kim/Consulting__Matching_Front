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
            2) Problem - Solution Fit
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
          제품(서비스)의 대부분의 형태를 갖춘 프로토타입(Prototype) 모델을 설계하고, 디자인, 성능, 사용성 등을 전체적으로 테스트하기 위한 가설을 수립합니다.
        </div>
      </div>
    </div>

    <div class="d-flex flex-column mt-3" style="height:40rem;">
      <div style="width:16rem; height:2rem; font-size:20px; margin:0 0 1rem 1rem;">④ 프로토타입 설계 및 검증</div>
      <div class="d-flex justify-content-between" style="width:100%;">
        <div class="d-flex flex-column">
          <div>
            <div class="d-flex align-items-center justify-content-center"
              style="width:39rem; height:2rem; background:#1968C1; color:white; font-size:20px;">
              <div>
                프로토타입(Prototype) 설계
              </div>
            </div>
            <div class="d-flex" style="width:100%;">
              <div class="d-flex align-items-center justify-content-center"
                style="width:7rem; height:2rem; background:#E7E6E6; font-size:20px;">
                <div>
                  구분
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-center"
                style="width:10rem; height:2rem; background:#E7E6E6; font-size:20px; border-right:1px solid #96AAC0;border-left:1px solid #96AAC0;">
                <div>
                  세부항목
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-center"
                style="width:22rem; height:2rem; background:#E7E6E6; font-size:20px;">
                <div>
                  설계 내용
                </div>
              </div>
            </div>
          </div>

          <div class="d-flex" style="width:39rem; max-height:13rem;">
            <div class="d-flex align-items-center justify-content-center"
              style="width:7rem; height:100%;background:#DAE3F3;font-size:20px;">
              성능
            </div>
            <div class="d-flex flex-column h-100" style="overflowY:scroll;overflowX:hidden;">
              <div v-for="(perfor, i) in prototype.prototypeDesign.performance" :key="i" class="d-flex"
                style="height:100%;">
                <input type="text"
                  style="width:10rem;height:2rem; font-size:15px; border-right:1px solid #C2C2C2;border-top:1px solid #C2C2C2;"
                  v-model="perfor.detail" />
                <input type="text" style="width:19.5rem;height:2rem; font-size:15px;border-top:1px solid #C2C2C2;"
                  v-model="perfor.detailcontent" />
                <button class="d-flex justify-content-center align-items-center" type="button"
                  style="width:1.5rem; height:2rem;" @click="delPerfor(i)">X</button>
              </div>
            </div>
          </div>
          <div class="d-flex" style="width:39rem; max-height:13rem;">
            <div class="d-flex align-items-center justify-content-center"
              style="width:7rem; height:100%;background:#DAE3F3;font-size:20px;border-top:1px solid #C2C2C2;">
              디자인
            </div>
            <div class="d-flex flex-column h-100" style="overflowY:scroll;overflowX:hidden;">
              <div v-for="(desi, i) in prototype.prototypeDesign.design" :key="i" class="d-flex" style="height:100%;">
                <input type="text"
                  style="width:10rem;height:2rem; font-size:15px;border-top:1px solid #C2C2C2; border-right:1px solid #C2C2C2;"
                  v-model="desi.detail" />
                <input type="text" style="width:19.5rem;height:2rem; font-size:15px;border-top:1px solid #C2C2C2;"
                  v-model="desi.detailcontent" />
                <button class="d-flex justify-content-center align-items-center" type="button"
                  style="width:1.5rem; height:2rem;" @click="delDesign(i)">X</button>
              </div>
            </div>
          </div>
          <div class="d-flex" style="width:39rem; height:7rem;">
            <div class="d-flex align-items-center justify-content-center"
              style="width:7rem; height:100%;background:#DAE3F3;font-size:20px; border-bottom:2px solid #1968C1;border-top:1px solid #C2C2C2;">
              가격
            </div>
            <input type="text"
              style="width:32rem;height:100%; font-size:15px; text-align:center;border-bottom:2px solid #1968C1;border-top:1px solid #C2C2C2;"
              v-model="prototype.price" />
          </div>
        </div>
        <div class="d-flex flex-column">
          <div>
            <div class="d-flex align-items-center justify-content-center"
              style="width:39rem; height:2rem; background:#1968C1; color:white; font-size:20px;">
              <div>
                프로토타입(Prototype) 검증
              </div>
            </div>
            <div class="d-flex" style="width:100%;">
              <div class="d-flex align-items-center justify-content-center"
                style="width:26rem; height:2rem; background:#E7E6E6; font-size:20px;">
                <div>
                  가설수립
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-center"
                style="width:13rem; height:2rem; background:#E7E6E6; font-size:20px; border-right:1px solid #96AAC0;border-left:1px solid #96AAC0;">
                <div>
                  수집데이터(지표)
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex flex-column" style="max-height:33rem; overflowY:scroll;border-bottom:2px solid #1968C1;">
            <div v-for="(verifi, i) in prototype.prototypeVerification" :key="i" class="d-flex">
              <textarea
                style="width:26rem; height:4rem; font-size:15px; border-top:2px solid #C2C2C2;border-right:2px solid #C2C2C2;"
                v-model="verifi.FormulateHypothesis"></textarea>
              <input type="text"
                style="width:12rem; height:4rem; font-size:15px; text-align:center;border-top:2px solid #C2C2C2;"
                v-model="verifi.collectionMetrics">
              <button class="d-flex justify-content-center align-items-center" type="button"
                style="width:1.5rem; height:2rem; margin-left:-1.5rem;" @click="delVerifi(i)">X</button>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div>
      <button type="button" class="btn btn-sm btn-primary" style="float:right;margin-top:6px;"
        @click="saveProto2">임시저장</button>
      <button type="button" class="btn btn-sm btn-primary" style="float:right;margin-top:6px;"
        @click="addPerfor">성능추가</button>
      <button type="button" class="btn btn-sm btn-primary" style="float:right;margin-top:6px;"
        @click="addDesign">디자인추가</button>
      <button type="button" class="btn btn-sm btn-primary" style="float:right;margin-top:6px;"
        @click="addVerifi">검증추가</button>
    </div>
  </div>
</template>

<script>

export default {

  data() {
    return {
      prototype: { // 프로토타입
        prototypeDesign: { // 프로토타입 설계
          performance: [ // 성능
            {
              category: "성능", // 카테고리
              detail: "", // 세부항목
              detailcontent: "" // 설계내용
            },
          ],
          design: [ // 디자인
            {
              category: "디자인", // 카테고리
              detail: "", // 세부항목
              detailcontent: "" // 설계내용
            },
          ],
        },
        price: 0, // 가격
        prototypeVerification: [ // 프로토타입 검증
          {
            FormulateHypothesis: "", // 가설 수립
            collectionMetrics: "" // 수집 지표
          },
        ]
      },
    };
  },
  methods: {
    addPerfor() {
      this.prototype.prototypeDesign.performance.push({
        category: "성능", // 카테고리
        detail: "", // 세부항목
        detailcontent: "" // 설계내용
      });
    },
    delPerfor(i) {
      this.prototype.prototypeDesign.performance.splice(i, 1);
    },
    addDesign() {
      this.prototype.prototypeDesign.design.push({
        category: "디자인", // 카테고리
        detail: "", // 세부항목
        detailcontent: "" // 설계내용
      });
    },
    delDesign(i) {
      this.prototype.prototypeDesign.design.splice(i, 1);
    },
    addVerifi() {
      this.prototype.prototypeVerification.push({
        FormulateHypothesis: "", // 가설 수립
        collectionMetrics: "" // 수집 지표
      });
    },
    delVerifi(i) {
      this.prototype.prototypeVerification.splice(i, 1);
    },
    saveProto2() {
      console.log(this.prototype);
    }
  },
};
</script>

<style scoped>
input[type='text'],
textarea {
  border: none;
}
</style>
