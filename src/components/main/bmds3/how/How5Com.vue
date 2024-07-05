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
          07
        </div>
        <div class="d-flex flex-column">
          <div style="font-size: 1rem">Key Partners</div>
          <div style="font-size: 2rem; color: #1968C1;">
            2) 핵심파트너 설계
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
          기업의 경쟁우위를 높이기 위해 내부적으로 해결할 수 없는 활동들을 누구와 협력할지 고민합니다.
        </div>
      </div>
    </div>
    <div class="d-flex flex-column justify-content-between">
      <div class="mt-3 d-flex justify-content-between">
        <div class="d-flex align-items-center justify-content-center" style="width:50rem;">
          <div class="planToSecNecesRes" style="width: 20rem;">
            인소싱
          </div>
          <div class="planToSecNecesRes mx-2" style="width: 6rem;">구분</div>
          <div class="planToSecNecesRes" style="width: 20rem;">아웃소싱</div>
        </div>
        <div>
          <div class="planToSecNecesRes" style="width: 23rem;">
            핵심파트너
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-between">
        <div class="d-flex align-items-center justify-content-center"
          style="width:50rem;height:5rem;background:#E7E6E6; margin-top:.5rem; border-radius:45px;">
          <textarea type="text" style="width:20.5rem; font-size:15px; height:4rem;"
            v-model="corePartnerDesign.planDevelop.insourcing"></textarea>
          <div class="d-flex align-items-center justify-content-center"
            style="font-size:15px; height:5rem; width:6rem; background:#DAE3F3; color:#1968C1;">
            <div>
              기획/개발
            </div>
          </div>
          <textarea type="text" style="width:20.5rem; font-size:15px; height:4rem;"
            v-model="corePartnerDesign.planDevelop.outsourcing"></textarea>
        </div>
        <div class="d-flex align-items-center justify-content-center">
          <div style="width:20px; border-top:2px solid #8FAADC;"></div>
          <div class="mx-1" style="width:3rem; height:3rem; background:#8FAADC;"></div>
          <div style="width:20px; border-top:2px solid #8FAADC;"></div>
        </div>

        <div>
          <div class="d-flex align-items-center justify-content-center"
            style="width:23rem; height:5rem; border:1px solid #8FAADC; border-radius:45px; margin-top:.5rem;">
            <textarea type="text" style="width:20rem; font-size:15px; height:4rem;"
              v-model="corePartnerDesign.planDevelop.corePartner"></textarea>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-between">
        <div class="d-flex align-items-center justify-content-center"
          style="width:50rem;height:5rem;background:#E7E6E6; margin-top:.5rem; border-radius:45px;">
          <textarea type="text" style="width:20.5rem; font-size:15px; height:4rem;"
            v-model="corePartnerDesign.purchProcure.insourcing"></textarea>
          <div class="d-flex align-items-center justify-content-center"
            style="font-size:15px; height:5rem; width:6rem; background:#DAE3F3; color:#1968C1;">
            <div>
              구매/조달
            </div>
          </div>
          <textarea type="text" style="width:20.5rem; font-size:15px; height:4rem;"
            v-model="corePartnerDesign.purchProcure.outsourcing"></textarea>
        </div>
        <div class="d-flex align-items-center justify-content-center">
          <div style="width:20px; border-top:2px solid #8FAADC;"></div>
          <div class="mx-1" style="width:3rem; height:3rem; background:#8FAADC;"></div>
          <div style="width:20px; border-top:2px solid #8FAADC;"></div>
        </div>

        <div>
          <div class="d-flex align-items-center justify-content-center"
            style="width:23rem; height:5rem; border:1px solid #8FAADC; border-radius:45px; margin-top:.5rem;">
            <textarea type="text" style="width:20rem; font-size:15px; height:4rem;"
              v-model="corePartnerDesign.purchProcure.corePartner"></textarea>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-between">
        <div class="d-flex align-items-center justify-content-center"
          style="width:50rem;height:5rem;background:#E7E6E6; margin-top:.5rem; border-radius:45px;">
          <textarea type="text" style="width:20.5rem; font-size:15px; height:4rem;"
            v-model="corePartnerDesign.productManufact.insourcing"></textarea>
          <div class="d-flex align-items-center justify-content-center"
            style="font-size:15px; height:5rem; width:6rem; background:#DAE3F3; color:#1968C1;">
            <div>
              생산/제조
            </div>
          </div>
          <textarea type="text" style="width:20.5rem; font-size:15px; height:4rem;"
            v-model="corePartnerDesign.productManufact.outsourcing"></textarea>
        </div>
        <div class="d-flex align-items-center justify-content-center">
          <div style="width:20px; border-top:2px solid #8FAADC;"></div>
          <div class="mx-1" style="width:3rem; height:3rem; background:#8FAADC;"></div>
          <div style="width:20px; border-top:2px solid #8FAADC;"></div>
        </div>

        <div>
          <div class="d-flex align-items-center justify-content-center"
            style="width:23rem; height:5rem; border:1px solid #8FAADC; border-radius:45px; margin-top:.5rem;">
            <textarea type="text" style="width:20rem; font-size:15px; height:4rem;"
              v-model="corePartnerDesign.productManufact.corePartner"></textarea>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-between">
        <div class="d-flex align-items-center justify-content-center"
          style="width:50rem;height:5rem;background:#E7E6E6; margin-top:.5rem; border-radius:45px;">
          <textarea type="text" style="width:20.5rem; font-size:15px; height:4rem;"
            v-model="corePartnerDesign.distInvenManage.insourcing"></textarea>
          <div class="d-flex flex-column align-items-center justify-content-center"
            style="font-size:15px; height:5rem; width:6rem; background:#DAE3F3; color:#1968C1;">
            <div>
              유통/
            </div>
            <div>재고관리</div>
          </div>
          <textarea type="text" style="width:20.5rem; font-size:15px; height:4rem;"
            v-model="corePartnerDesign.distInvenManage.outsourcing"></textarea>
        </div>
        <div class="d-flex align-items-center justify-content-center">
          <div style="width:20px; border-top:2px solid #8FAADC;"></div>
          <div class="mx-1" style="width:3rem; height:3rem; background:#8FAADC;"></div>
          <div style="width:20px; border-top:2px solid #8FAADC;"></div>
        </div>

        <div>
          <div class="d-flex align-items-center justify-content-center"
            style="width:23rem; height:5rem; border:1px solid #8FAADC; border-radius:45px; margin-top:.5rem;">
            <textarea type="text" style="width:20rem; font-size:15px; height:4rem;"
              v-model="corePartnerDesign.distInvenManage.corePartner"></textarea>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-between">
        <div class="d-flex align-items-center justify-content-center"
          style="width:50rem;height:5rem;background:#E7E6E6; margin-top:.5rem; border-radius:45px;">
          <textarea type="text" style="width:20.5rem; font-size:15px; height:4rem;"
            v-model="corePartnerDesign.marketing.insourcing"></textarea>
          <div class="d-flex align-items-center justify-content-center"
            style="font-size:15px; height:5rem; width:6rem; background:#DAE3F3; color:#1968C1;">
            <div>
              마케팅
            </div>
          </div>
          <textarea type="text" style="width:20.5rem; font-size:15px; height:4rem;"
            v-model="corePartnerDesign.marketing.outsourcing"></textarea>
        </div>
        <div class="d-flex align-items-center justify-content-center">
          <div style="width:20px; border-top:2px solid #8FAADC;"></div>
          <div class="mx-1" style="width:3rem; height:3rem; background:#8FAADC;"></div>
          <div style="width:20px; border-top:2px solid #8FAADC;"></div>
        </div>

        <div>
          <div class="d-flex align-items-center justify-content-center"
            style="width:23rem; height:5rem; border:1px solid #8FAADC; border-radius:45px; margin-top:.5rem;">
            <textarea type="text" style="width:20rem; font-size:15px; height:4rem;"
              v-model="corePartnerDesign.marketing.corePartner"></textarea>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-between">
        <div class="d-flex align-items-center justify-content-center"
          style="width:50rem;height:5rem;background:#E7E6E6; margin-top:.5rem; border-radius:45px;">
          <textarea type="text" style="width:20.5rem; font-size:15px; height:4rem;"
            v-model="corePartnerDesign.sales2.insourcing"></textarea>
          <div class="d-flex align-items-center justify-content-center"
            style="font-size:15px; height:5rem; width:6rem; background:#DAE3F3; color:#1968C1;">
            <div>
              판매/영업
            </div>
          </div>
          <textarea type="text" style="width:20.5rem; font-size:15px; height:4rem;"
            v-model="corePartnerDesign.sales2.outsourcing"></textarea>
        </div>
        <div class="d-flex align-items-center justify-content-center">
          <div style="width:20px; border-top:2px solid #8FAADC;"></div>
          <div class="mx-1" style="width:3rem; height:3rem; background:#8FAADC;"></div>
          <div style="width:20px; border-top:2px solid #8FAADC;"></div>
        </div>

        <div>
          <div class="d-flex align-items-center justify-content-center"
            style="width:23rem; height:5rem; border:1px solid #8FAADC; border-radius:45px; margin-top:.5rem;">
            <textarea type="text" style="width:20rem; font-size:15px; height:4rem;"
              v-model="corePartnerDesign.sales2.corePartner"></textarea>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-between">
        <div class="d-flex align-items-center justify-content-center"
          style="width:50rem;height:5rem;background:#E7E6E6; margin-top:.5rem; border-radius:45px;">
          <textarea type="text" style="width:20.5rem; font-size:15px; height:4rem;"
            v-model="corePartnerDesign.costService.insourcing"></textarea>
          <div class="d-flex flex-column align-items-center justify-content-center"
            style="font-size:15px; height:5rem; width:6rem; background:#DAE3F3; color:#1968C1;">
            <div>
              고객
            </div>
            <div>서비스</div>
          </div>
          <textarea type="text" style="width:20.5rem; font-size:15px; height:4rem;"
            v-model="corePartnerDesign.costService.outsourcing"></textarea>
        </div>
        <div class="d-flex align-items-center justify-content-center">
          <div style="width:20px; border-top:2px solid #8FAADC;"></div>
          <div class="mx-1" style="width:3rem; height:3rem; background:#8FAADC;"></div>
          <div style="width:20px; border-top:2px solid #8FAADC;"></div>
        </div>

        <div>
          <div class="d-flex align-items-center justify-content-center"
            style="width:23rem; height:5rem; border:1px solid #8FAADC; border-radius:45px; margin-top:.5rem;">
            <textarea type="text" style="width:20rem; font-size:15px; height:4rem;"
              v-model="corePartnerDesign.costService.corePartner"></textarea>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-between">
        <div class="d-flex align-items-center justify-content-center"
          style="width:50rem;height:5rem;background:#E7E6E6; margin-top:.5rem; border-radius:45px;">
          <textarea type="text" style="width:20.5rem; font-size:15px; height:4rem;"
            v-model="corePartnerDesign.support.insourcing"></textarea>
          <div class="d-flex flex-column align-items-center justify-content-center"
            style="font-size:15px; height:5rem; width:6rem; background:#DAE3F3; color:#1968C1;">
            <div>
              지원
            </div>
            <div>(인사,총무 등)</div>
          </div>
          <textarea type="text" style="width:20.5rem; font-size:15px; height:4rem;"
            v-model="corePartnerDesign.support.outsourcing"></textarea>
        </div>
        <div class="d-flex align-items-center justify-content-center">
          <div style="width:20px; border-top:2px solid #8FAADC;"></div>
          <div class="mx-1" style="width:3rem; height:3rem; background:#8FAADC;"></div>
          <div style="width:20px; border-top:2px solid #8FAADC;"></div>
        </div>

        <div>
          <div class="d-flex align-items-center justify-content-center"
            style="width:23rem; height:5rem; border:1px solid #8FAADC; border-radius:45px; margin-top:.5rem;">
            <textarea type="text" style="width:20rem; font-size:15px; height:4rem;"
              v-model="corePartnerDesign.support.corePartner"></textarea>
          </div>
        </div>
      </div>
    </div>
    <div>
      <button type="button" class="btn btn-sm btn-primary" style="float:right;margin-top:6px;"
        @click="saveCorePartners">임시저장</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      corePartnerDesign: { // 핵심파트너 설계
        planDevelop: { // 기획/개발
          insourcing: "", // 인소싱
          outsourcing: "", // 아웃소싱
          corePartner: "" // 핵심파트너
        },
        purchProcure: { // 구매/조달
          insourcing: "", // 인소싱
          outsourcing: "", // 아웃소싱
          corePartner: "" // 핵심파트너
        },
        productManufact: { // 생산/제조
          insourcing: "", // 인소싱
          outsourcing: "", // 아웃소싱
          corePartner: "" // 핵심파트너
        },
        distInvenManage: { // 유통/재고관리
          insourcing: "", // 인소싱
          outsourcing: "", // 아웃소싱
          corePartner: "" // 핵심파트너
        },
        marketing: { // 마케팅
          insourcing: "", // 인소싱
          outsourcing: "", // 아웃소싱
          corePartner: "" // 핵심파트너
        },
        sales2: { // 판매/영업
          insourcing: "", // 인소싱
          outsourcing: "", // 아웃소싱
          corePartner: "" // 핵심파트너
        },
        costService: { // 고객 서비스
          insourcing: "", // 인소싱
          outsourcing: "", // 아웃소싱
          corePartner: "" // 핵심파트너
        },
        support: { // 지원
          insourcing: "", // 인소싱
          outsourcing: "", // 아웃소싱
          corePartner: "" // 핵심파트너
        },
      },

    };
  },
  methods: {
    saveCorePartners() {
      console.log(this.corePartnerDesign);
    }
  },
};
</script>

<style scoped>
.planToSecNecesRes {
  background: #1968C1;
  color: white;
  font-size: 20px;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

textarea {
  border: none;
  ;
}
</style>
