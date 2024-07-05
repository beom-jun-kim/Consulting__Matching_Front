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
        <div class="d-flex justify-content-between" style="width: 34rem">
          <img src="@/assets/beta/step07로켓.png" alt="집" style="width: 50px; height: 50px" />
          <div class="preEB" style="font-size: 35px; color: #53c5c0">
            STEP 07 :
          </div>
          <div class="preEB" style="font-size: 35px">
            고객 개발 및 시장 확장
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="basicContentBar preSB">7-1 : 고객 반응 데이터 지표 설계</div>
    </div>

    <div style="width: 81rem; height: 40rem">
      <div class="my-3">
        <label for="businessArea" class="preSB form-label" style="font-size: 30px">
          <span class="primeColor">1.</span> 제품 또는 서비스가 시장에 진입한
          이후 시장에서 일어나는 일들을 확인하고 분석합니다.
        </label>
      </div>
      <div class="my-3 d-flex flex-column justify-content-between align-items-center"
        style="height: 34rem; padding-left: 3rem">
        <div>
          <label for="businessArea" class="preSB form-label fs-3">
            <span class="primeColor">1-1.</span> 고객 반응 데이터를 확인하기
            위하여 우리는 어떠한 데이터를 확인해야 합니까?</label>
          <textarea type="text" class="form-control3 bg-light p-2 rounded preM fs-4" id="businessArea"
            style="border: none; resize: none" placeholder="ex. DAU, MAU, 고객방문수, 누적방문수, 재구매율, 매장 대기시간, 테이블 회전율 등"
            v-model="question1"></textarea>
        </div>
      </div>
    </div>
    <div class="my-3">
      <b-button class="btn btn-sm" style="float: right" @click="saveBetaPpt31">저장</b-button>
    </div>
  </div>
</template>

<script>
import BetaService from "@/services/main/BetaService";
export default {
  data() {
    return {
      question1: "",
    };
  },
  methods: {
    saveBetaPpt31() {
      if (confirm("저장하시겠습니까?") == true) {
        var data = {
          question1: this.question1,
        };
        BetaService.saveBetaPpt31(this.$route.params.id, data)
          .then(() => {
            alert("저장되었습니다.");
          })
          .catch((err) => {
            console.log(err);
          });
      }
      else {
        alert('취소되었습니다.')
      }
    },
    getBetaPpt31(id) {
      BetaService.getBetaPpt31(id)
        .then((res) => {
          this.question1 = res.data.question1;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getBetaPpt31(this.$route.params.id);
  },
};
</script>

<style scoped>
.basicContentBar {
  width: 30rem;
  background-color: #53c5c0;
  color: white;
  border-radius: 12px;
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.placeholderColor {
  font-size: 20px;
  color: #818181;
}

.primeColor {
  color: #53c5c0;
}

.form-control {
  width: 75rem;
  height: 5rem;
}

.form-control2 {
  width: 75rem;
  height: 15rem;
}

.form-control3 {
  width: 75rem;
  height: 28rem;
}
</style>
