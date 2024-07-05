<template>
  <div class="">
    <div class="d-flex justify-content-end align-items-center">
      <div style="color: gray; font-size: 1rem; margin-right: 0.5rem">
        Business Model Design Solution
      </div>
      <div style="margin-right: 1rem">
        <img src="@/assets/bmds3/흑백 로고.png" />
      </div>
    </div>
    <div class="d-flex justify-content-start" style="height: 5rem">
      <div class="d-flex" style="margin-left: 1rem">
        <div style="
          font-size: 5.5rem;
            width: 6rem;
            color: rgba(236, 226, 238, 1);
            margin: -1.7rem 0.5rem 0px -5.5rem;
          ">
          02
        </div>
        <div class="d-flex flex-column">
          <div style="font-size: 1rem">Key Partbers</div>
          <div style="font-size: 2rem; color: rgb(199, 121, 196)">
            2) 페르소나 정의
          </div>
        </div>
      </div>
    </div>
    <div>
      <div style="
        width: 81rem;
          height: 2.5rem;
          border-radius: 7px;
          background: rgba(236, 226, 238, 1);
        ">
        <div style="font-size: 17px; margin-left: 39px; line-height: 37px">
          우리가 목표로 하는 비즈니스 집단 중에서 우리 제품(서비스)를 사용할
          만한 특정 고객(페르소나)를 정의합니다.
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-between align-items-center" style="width:81rem; height:38rem; margin-top:2rem;">
      <div class="d-flex flex-column justify-content-between align-items-center" style="height:38rem;">
        <div class="inBox">
          <div>산업 분류</div>
          <textarea v-model="why_industryType" name="industryClassification" id="industryClassification"></textarea>
        </div>
        <div class="inBox">
          <div>기업 규모</div>
          <textarea v-model="why_companySize" name="comSize" id="comSize"></textarea>
        </div>
        <div class="inBox">
          <div>지리적 위치</div>
          <textarea v-model="why_location" name="local" id="local"></textarea>
        </div>
      </div>
      <div style="width: 33rem; height: 32rem; margin-top:2rem;">
        <div class="image-container"></div>
      </div>
      <div class="d-flex flex-column justify-content-between align-items-center" style="height:38rem;">
        <div class="inBox">
          <div>구매 용도</div>
          <textarea v-model="why_purchasePurpos" name="buyGoal" id="buyGoal"></textarea>
        </div>
        <div class="inBox">
          <div>구매 결정권</div>
          <textarea v-model="why_purchaseAuthority" name="buySelect" id="buySelect"></textarea>
        </div>
        <div class="inBox">
          <div>구매 주기</div>
          <textarea v-model="why_purchaseCycle" name="buyCycle" id="buyCycle"></textarea>
        </div>
      </div>
    </div>
    <b-button class="btn btn-sm" style="float: right" @click="savePersona">임시저장</b-button>
  </div>
</template>

<script>
import BMDSService from "@/services/main/BMDSService";

export default {
  data() {
    return {
      why_industryType: "",
      why_companySize: "",
      why_location: "",
      why_purchasePurpos: "",
      why_purchaseAuthority: "",
      why_purchaseCycle: "",
    };
  },
  methods: {
    getPersona(id) {
      BMDSService.getPersona(id)
        .then((res) => {
          this.why_industryType = res.data.why_industryType;
          this.why_companySize = res.data.why_companySize;
          this.why_location = res.data.why_location;
          this.why_purchasePurpos = res.data.why_purchasePurpos;
          this.why_purchaseAuthority = res.data.why_purchaseAuthority;
          this.why_purchaseCycle = res.data.why_purchaseCycle;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    savePersona() {
      if (confirm("저장하시겠습니까?") == true) {
        var data = {
          why_industryType: this.why_industryType,
          why_companySize: this.why_companySize,
          why_location: this.why_location,
          why_purchasePurpos: this.why_purchasePurpos,
          why_purchaseAuthority: this.why_purchaseAuthority,
          why_purchaseCycle: this.why_purchaseCycle,
        };
        BMDSService.createWhy1com(this.$route.params.id, data)
          .then((res) => {
            if (!alert("저장되었습니다.")) {
              console.log(res);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
  mounted() {
    this.getPersona(this.$route.params.id);
  },
};
</script>

<style scoped>
.image-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background-image: url("../../../../assets/persona.png");
  background-size: contain;
  background-position: center;
}

.inBox {
  width: 24rem;
  height: 12rem;
  border-radius: 15px;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.inBox div {
  color: rgb(199, 121, 196);
  font-size: 20px;
  margin: -1rem 0 5px 0;
}

.inBox textarea {
  border: none;
  width: 22rem;
  height: 8.5rem;
  resize: none;
  outline: none;
}
</style>
