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
          <div style="font-size: 1rem">Revenue Model</div>
          <div style="font-size: 2rem; color: #1968C1;">
            2) 수익 매력도 분석
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
          고객획득비용(CAC)과 고객생애가치(LTV)를 산출하여 수익 매력도가 있는지 검토해봅니다.
        </div>
      </div>
    </div>

    <div class="d-flex flex-column mt-3" style="height:40.5rem;">
      <div class="d-flex justify-content-between">
        <div style="width:39rem; border-bottom:2px solid #1968C1;">
          <div style="font-size:20px; margin:0 0 1rem 1rem;">●고객획득비용(CAC)</div>
          <div class="d-flex" style="width:100%;">
            <div class="d-flex align-items-center justify-content-center"
              style="width:7rem; height:2rem; background:#1968C1; color:white; font-size:20px;">
              <div>
                구분
              </div>
            </div>
            <div class="d-flex align-items-center justify-content-center"
              style="width:22rem; height:2rem; background:#1968C1; color:white; font-size:20px; border-right:1px solid #96AAC0;border-left:1px solid #96AAC0;">
              <div>
                내용
              </div>
            </div>
            <div class="d-flex align-items-center justify-content-center"
              style="width:10rem; height:2rem; background:#1968C1; color:white; font-size:20px;">
              <div>
                비용
              </div>
            </div>
          </div>
          <div style="width:39rem; height:20rem;">
            <div class="d-flex flex-column justify-content-center">
              <div class="d-flex">
                <div class="d-flex align-items-center"
                  style="width:7rem;height:7rem;font-size:20px;border-bottom:1px solid #C9C9C9;">
                  <div>직접 마케팅</div>
                </div>
                <textarea class="borNoTop" style="width:22rem; height:7rem; font-size:20px;" ref="textarea"
                  v-model="profitAttrAnalysis.custAcquisitCost.directMarketing.content"></textarea>
                <input type="text"
                  style="width:10rem; height:7rem; border-bottom:1px solid #C9C9C9; font-size:20px; text-align:center;"
                  v-model="profitAttrAnalysis.custAcquisitCost.directMarketing.price">
              </div>
              <div class="d-flex">
                <div class="d-flex align-items-center"
                  style="width:7rem;height:7rem;font-size:20px; border-bottom:1px solid #C9C9C9;">
                  <div>간접 마케팅</div>
                </div>
                <textarea class="borNoTop" style="width:22rem; height:7rem; font-size:20px;" ref="textarea2"
                  v-model="profitAttrAnalysis.custAcquisitCost.indirectMarketing.content"></textarea>
                <input type="text"
                  style="width:10rem; height:7rem; border-bottom:1px solid #C9C9C9; font-size:20px; text-align:center;"
                  v-model="profitAttrAnalysis.custAcquisitCost.indirectMarketing.price">
              </div>
            </div>
            <div class="d-flex flex-column">
              <div class="d-flex">
                <div class="d-flex justify-content-center align-items-center"
                  style="width:29rem;height:2rem;font-size:20px;background: #F2F2F2;">
                  <div>
                    합계
                  </div>
                </div>
                <input type="text"
                  style="width:10rem; height:2rem; font-size:20px; text-align:center; border-left:1px solid #C9C9C9;"
                  v-model="priceSum">
              </div>
              <div class="d-flex">
                <div class="d-flex justify-content-center align-items-center borNoLeftRight"
                  style="width:29rem;height:2rem;font-size:20px;background: #F2F2F2;">
                  <div>
                    획득된 신규 고객 수
                  </div>
                </div>
                <input type="text"
                  style="width:10rem; height:2rem; font-size:20px; text-align:center; border-left: 1px solid #C9C9C9; border-top: 1px solid #C9C9C9; border-bottom: 1px solid #C9C9C9;"
                  v-model="profitAttrAnalysis.custAcquisitCost.numOfNewCustAcquired">
              </div>
              <div class="d-flex">
                <div class="d-flex justify-content-center align-items-center"
                  style="width:29rem;height:2rem;font-size:20px;background: #F2F2F2;">
                  <div>
                    고객획득비용(CAC)
                  </div>
                </div>
                <input type="text"
                  style="width:10rem; height:2rem; font-size:20px; text-align:center; border-left:1px solid #C9C9C9;"
                  v-model="CACValue">
              </div>
            </div>
          </div>
        </div>
        <div style="width:39rem; border-bottom:2px solid #1968C1;">
          <div style="font-size:20px; margin:0 0 1rem 1rem;">●고객생애가치(LTV)</div>
          <div class="d-flex align-items-center justify-content-center"
            style="width:100%; height:2rem; background:#1968C1; color:white; font-size:20px;">
            <div>
              산출방법
            </div>
          </div>
          <div class="d-flex flex-column justify-content-end align-items-center" style="width:39rem; height:20rem;">
            <div>
              <div style="width:38rem; height:14rem;font-size:17px;">
                <div>①이익x거래 기간(라이프타임)x할인율(현재 가치 계수)<br />②고객의 연간 거래액 x 수익률 x 고객 지속 연수<br />③고객의 평균 구매 단가 x 평균 구매
                  횟수<br />④(매출액 -
                  매출 원가) / 구매자 수<br />⑤평균 구매 단가 x 구매 빈도 x 계속 구매 기간<br />⑥(평균 구매 단가 x 구매 빈도 x 계속 구매 기간) - (신규 획득 비용) +
                  (고객
                  유지
                  비용)
                </div>
                <div class="d-flex justify-content-center mt-2">
                  <div>
                    ① ~ ⑥ 항목 중 한 가지를 선택하여 고객생애가치를 산출하세요.
                  </div>
                </div>
              </div>
              <div style="width:39rem; height:4rem;font-size:17px;">
                <div class="d-flex mt-2">
                  <div class="greyBox2">
                    <div>
                      산출계산식
                    </div>
                  </div>
                  <div class="greyTeduri">
                    <input type="text" style="width:100%; height:100%; text-align:center;" placeholder="1"
                      v-model="profitAttrAnalysis.custLifetimeValue.selectCalculFormula" />
                  </div>
                </div>
                <div class="d-flex">
                  <div class="greyBox2">
                    <div>
                      고객생애가치(LTV)
                    </div>
                  </div>
                  <div class="greyTeduri">
                    <input type="text" style="width:100%; height:100%; text-align:center;"
                      v-model="profitAttrAnalysis.custLifetimeValue.LTV" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex flex-column mt-4">
        <div class="d-flex">
          <div style="font-size:20px; margin:0 0 1rem 1rem;">●수익 매력도 검토</div>
          <div style="font-size:15px; margin:5px 0 0 5px;">
            (Yes → 다음페이지로 이동 , No → ②~⑤검토)
          </div>
        </div>
        <div style="border-bottom:2px solid #1968C1;">
          <div class="d-flex" style="width:100%;">
            <div class="d-flex" style="width:100%;">
              <div class="d-flex align-items-center justify-content-center"
                style="width:5.5rem; height:2rem; background:#1968C1; color:white; font-size:20px;">
                <div>
                  No.
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-center"
                style="width:35rem; height:2rem; background:#1968C1; color:white; font-size:20px; border-right:1px solid #96AAC0;border-left:1px solid #96AAC0;">
                <div>
                  수익 매력도 체크리스트
                </div>
              </div>
            </div>
            <div class="d-flex" style="width:100%;">
              <div class="d-flex align-items-center justify-content-center"
                style="width:5.5rem; height:2rem; background:#1968C1; color:white; font-size:20px;">
                <div>
                  No.
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-center"
                style="width:35rem; height:2rem; background:#1968C1; color:white; font-size:20px; border-right:1px solid #96AAC0;border-left:1px solid #96AAC0;">
                <div>
                  수익 매력도 체크리스트
                </div>
              </div>
            </div>
          </div>
          <!-- ②③④⑤⑥ -->
          <div class="d-flex">
            <div class="d-flex justify-content-center align-items-center"
              style="width:5.5rem;height:3rem;font-size:20px;">
              <div>①</div>
            </div>
            <div class="d-flex justify-content-center align-items-center borNoTopBot"
              style="width:35rem;height:3rem;font-size:20px; text-align:center;">
              <div>고객생애가치(LTV)가 고객획득비용(CAC)보다 큰가?</div>
            </div>
            <div class="d-flex justify-content-center align-items-center"
              style="width:5.5rem;height:3rem;font-size:20px;">
              <div>④</div>
            </div>
            <div class="d-flex justify-content-center align-items-center borNoTopBot"
              style="width:35rem;height:3rem;font-size:20px; text-align:center;">
              <div>고객유지율(또는 고객이탈율) 개선방안을 확립하였는가?</div>
            </div>
          </div>
          <div class="d-flex">
            <div class="d-flex justify-content-center align-items-center borNoLeftRight"
              style="width:5.5rem;height:3rem;font-size:20px;">
              <div>②</div>
            </div>
            <div class="d-flex justify-content-center align-items-center"
              style="width:35rem;height:3rem;font-size:20px; text-align:center; border:1px solid #C9C9C9;">
              <div>가장 효과적인 신규 고객 획득 채널을 설계하였는가?</div>
            </div>
            <div class="d-flex justify-content-center align-items-center borNoLeftRight"
              style="width:5.5rem;height:3rem;font-size:20px;">
              <div>⑤</div>
            </div>
            <div class="d-flex justify-content-center align-items-center"
              style="width:35rem;height:3rem;font-size:20px; text-align:center; border:1px solid #C9C9C9;">
              <div>고객가치를 증진시키는 제품(서비스) 가치를 설계하였는가?</div>
            </div>
          </div>
          <div class="d-flex">
            <div class="d-flex justify-content-center align-items-center"
              style="width:5.5rem;height:3rem;font-size:20px;">
              <div>③</div>
            </div>
            <div class="d-flex justify-content-center align-items-center borNoTopBot"
              style="width:35rem;height:3rem;font-size:20px; text-align:center;">
              <div>고객 획득을 위한 최적화된 예산을 편성하였는가?</div>
            </div>
            <div class="d-flex justify-content-center align-items-center"
              style="width:5.5rem;height:3rem;font-size:20px;">
              <div>⑥</div>
            </div>
            <div class="d-flex justify-content-center align-items-center borNoTopBot"
              style="width:35rem;height:3rem;font-size:20px; text-align:center;">
              <div>구매전환율을 개선방안을 확립하였는가?</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <button type="button" class="btn btn-sm btn-primary" style="float:right;margin-top:6px;"
        @click="saveProfit">임시저장</button>
    </div>
  </div>
</template>

<script>

export default {

  data() {
    return {
      profitAttrAnalysis: { // 수익매력도분석
        custAcquisitCost: { // 고객획득비용
          directMarketing: { // 직접마케팅
            content: "", // 내용
            price: 0, // 비용
          },
          indirectMarketing: { // 간접마키팅
            content: "", // 내용
            price: 0, // 비용
          },
          priceSum: 0, // 비용합계
          numOfNewCustAcquired: 0, // 획득된신규고객수
          CAC: 0, // 고객획득비용
        },
        custLifetimeValue: { // 고객생애가치
          selectCalculFormula: "", // 선택된 산출 계산식
          LTV: 0, // 고객생애가치
        },
      },
    };
  },
  methods: {
    saveProfit() {
      this.profitAttrAnalysis.custAcquisitCost.priceSum = this.priceSum;
      this.profitAttrAnalysis.custAcquisitCost.CAC = this.CACValue;

      console.log(this.profitAttrAnalysis);
    }
  },
  computed: {
    // 각 항목의 값을 숫자로 변환하고 합산하는 계산된 속성
    CACValue() {
      return this.priceSum / this.profitAttrAnalysis.custAcquisitCost.numOfNewCustAcquired;
    },
    priceSum() {
      return parseInt(this.profitAttrAnalysis.custAcquisitCost.directMarketing.price) + parseInt(this.profitAttrAnalysis.custAcquisitCost.indirectMarketing.price)
    }
  },
  mounted() {
    this.$refs.textarea.placeholder = " - 퍼포먼스 채널\n - 가격할인\n - 1+1 이벤트";
    this.$refs.textarea2.placeholder = " - 보도자료\n - 지하철 광고";
  }
};
</script>

<style scoped>
.greyBox2 {
  width: 13rem;
  height: 2rem;
  background: #F2F2F2;
  border-top: 1px solid #C9C9C9;
  border-right: 1px solid #C9C9C9;
  display: flex;
  align-items: center;
  justify-content: center;
}

.greyTeduri {
  width: 26rem;
  height: 2rem;
  border-top: 1px solid #C9C9C9;
  display: flex;
  justify-content: center;
}

.borNoTop {
  border-bottom: 1px solid #C9C9C9;
  border-left: 1px solid #C9C9C9;
  border-top: 0px solid #C9C9C9;
  border-right: 1px solid #C9C9C9;
}

.borNoTopLeft {
  border-bottom: 1px solid #C9C9C9;
  border-right: 1px solid #C9C9C9;
  border-top: 0px solid #C9C9C9;
  border-left: 0px solid #C9C9C9;
}

.borNoTopBot {
  border-bottom: 0px solid #C9C9C9;
  border-right: 1px solid #C9C9C9;
  border-top: 0px solid #C9C9C9;
  border-left: 1px solid #C9C9C9;
}

.borNoLeft {
  border-bottom: 1px solid #C9C9C9;
  border-right: 1px solid #C9C9C9;
  border-top: 1px solid #C9C9C9;
  border-left: 0px solid #C9C9C9;
}

.borNoLeftRight {
  border-bottom: 1px solid #C9C9C9;
  border-right: 0px solid #C9C9C9;
  border-top: 1px solid #C9C9C9;
  border-left: 0px solid #C9C9C9;
}

input[type='text'],
textarea {
  border: none;
}
</style>
