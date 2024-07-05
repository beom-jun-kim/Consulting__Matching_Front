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
          10
        </div>
        <div class="d-flex flex-column">
          <div style="font-size: 1rem">Customer Experience Management</div>
          <div style="font-size: 2rem; color: #1968C1;">
            2) 물리적 채널 - 인바운드/아웃바운드 채널
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
          효율적,효과적 마케팅 수립을 위한 인바운드(Inbound) 채널과 아웃바운드 채널(Outbound)을 설계합니다.
        </div>
      </div>
    </div>

    <div class="d-flex flex-column mt-3" style="height:44rem;">
      <div class="d-flex flex-column justify-content-between align-items-center">
        <textarea v-model="outInBound.InBound"
          placeholder="페이스북 광고, QR코드 광고, 유튜브 인스트림 광고, 키워드 광고, 구독 기반 이메일 마케팅, 콘텐츠 마케팅, 웨비나, 웹사이트 최적화, SEO, PPC,구글 애널리스트"></textarea>
        <div class="d-flex justify-content-center align-items-center" style="width:100%; height:10rem;">
          <div class="image-container" style="width:81rem; height:7.5rem;"></div>
        </div>
        <textarea v-model="outInBound.outBound"
          placeholder="콜드 콜링, 텔레 마케팅, 옥외광고, 라디오 광고, TV광고, 잡지 광고, 무역 박람회, 이벤트, 이메일, SMS, SNS 광고, 배너 광고"></textarea>
      </div>
    </div>
    <div>
      <button class="btn btn-sm btn-primary" style="float:right;margin-top:6px;" @click="saveBound">임시저장</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      outInBound: {
        outBound: "", // 아웃바운드
        InBound: "" // 인바운드
      }
    }
  },
  methods: {
    saveBound() {
      console.log(this.outInBound);
    }
  },
};
</script>

<style scoped>
textarea {
  width: 65rem;
  height: 17rem;
  resize: none;
  font-size: 20px;
  outline: none;
}

.image-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-image: url('../../../../assets/bmds3/물리적채널.png');
}
</style>