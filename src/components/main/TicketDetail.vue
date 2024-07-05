<template>
  <section>
    <div class="container px-3">
      <div style="margin-top: 5rem">
        <div class="slider-container">
          <div class="slider">
            <div class="slide d-flex" style="height: 25rem; background-color: rgba(223, 74, 74, 0.2)">
              <div class="col-lg-8" style="width: 66rem">
                <div style="margin: 5rem 5rem 0 2rem">
                  <h2 class="fw-bolder mb-4">{{ Detail.type }}</h2>
                  <p class="lead fw-normal mb-3" style="font-size: 17px; color: rgba(176, 103, 219, 1)">
                    BMDS의 “비즈니스 모델 만들기”는 기존의 비즈니스 모델
                    캔버스와 다릅니다.
                  </p>
                  <p class="lead fw-normal text-muted mb-2" style="font-size: 17px">
                    일반적인 사업계획서와 일맥상통한 모형으로서 오랜 비즈니스
                    모델 및 사업계획 기획 실무와 강연을 바탕으로 개발된 또 다른
                    비즈니스 모델 캔버스입니다. 캔버스의 블록의 의미를 하나하나
                    배우고 채워나감으로서 머릿속에 복잡하게 얽혀있던 사업계획의
                    실마리를 풀 수 있으며 자체평가는 물론 외부 전문가 평가를
                    지원받을 수 있습니다. 비즈니스 모델 기획은 어렵지 않습니다.
                    자신의 사업계획서와 가장 유사한 비즈니스 모델 샘플을
                    참조하여 쉽고 재미있게 비즈니스 모델을 만들어 보세요.
                  </p>
                </div>
              </div>
              <div style="
                  height: 25rem;
                  width: 15rem;
                  background-color: rgba(228, 26, 26, 0.2);
                ">
                <div>
                  <div class="d-flex flex-column">
                    <p style="margin: 2rem 2rem 0 2rem">비즈니스모델 작성</p>
                    <p style="margin: auto 2rem">비즈니스모델 러닝 포함</p>
                    <p style="margin: auto 2rem">비즈니스모델 평가 포함</p>
                  </div>
                  <div>
                    <label style="margin: 2rem 2rem 0 2rem" for="available_count">횟수 :
                      <select v-model="selectedNum" class="form-control" style="width: 10rem">
                        <option v-for="(num, index) in numList" :key="index" :value="num.value">
                          {{ num.value }}
                        </option>
                      </select>
                    </label>
                  </div>
                </div>
                <hr />
                <div style="margin: 2rem 2rem 0 2rem">
                  <h5>총1회</h5>
                  <h3>{{ Detail.price }}원</h3>
                  <h6>(VAT)포함</h6>
                </div>
                <div style="margin: 1rem 2rem 0 2rem">
                  <button class="btn btn-sm btn-secondary" style="margin-right: 1rem">
                    상품담기
                  </button>
                  <button class="btn btn-sm btn-primary">결제하기</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="">
        <button @click="handleClick()" ref="memberLogin" class="btn btn-secondary btn_marg my-3" style="float:right;">
          목록가기
        </button>
      </div>
    </div>
    <div class="container px-3">
      <div class="row gx-5 py-5 d-flex">
        <div class="wrap cont">
          <div class="refund">
            <h3 class="ttl">※환불규정</h3>
            <table>
              <tbody style="border-top: 2px solid #000">
                <tr>
                  <th><b>비즈니스모델 작성</b></th>
                  <td>
                    결제일로부터 7일이내 청약 철회 시 100% 환불 (만일 취소기한이
                    지났거나 구매 아이템을 사용했다면 당사의 이용약관에 따라
                    환불이 제한될 수 있다)
                  </td>
                </tr>
                <tr style="border-top: 1px solid #000">
                  <th><b>사업계획서 전환</b></th>
                  <td>
                    결제일로부터 7일이내 청약 철회 시 100% 환불 (만일 취소기한이
                    지났거나 구매 아이템을 사용했다면 당사의 이용약관에 따라
                    환불이 제한될 수 있다)
                  </td>
                </tr>
                <tr style="border-top: 1px solid #000">
                  <th><b>멘토링</b></th>
                  <td>
                    1회 진행시 : 50% 환불 (40% 멘토링 서비스 사용, 10%
                    취소수수료)<br />
                    2회 진행시 : 20% 환불 (70% 멘토링 서비스, 10% 취소수수료)<br />
                    3회 진행시 : 서비스 완료로 인한 환불 제한<br />
                    * 결제일로부터 7일이내 청약 철회 시 100% 환불 (만일
                    취소기한이 지났거나 구매 아이템을 사용했다면 당사의
                    이용약관에 따라 환불이 제한될 수 있다)
                  </td>
                </tr>
                <tr style="border-top: 1px solid #000">
                  <th><b>컨설팅</b></th>
                  <td>
                    1회 진행시 : 65% 환불 (25% 컨설팅 서비스, 10% 취소수수료)<br />
                    2회 진행시 : 50% 환불 (40% 컨설팅 서비스, 10%취소수수료)<br />
                    3회 진행시 : 30% 환불 (60% 컨설팅 서비스, 10%취소수수료)<br />
                    4회 진행시 : 10% 환불 (80% 컨설팅 서비스, 10%취소수수료)<br />
                    5회 진행시 : 서비스 완료로 인한 환불 제한<br />
                    * 결제일로부터 7일이내 청약 철회 시 100% 환불 (만일
                    취소기한이 지났거나 구매 아이템을 사용했다면 당사의
                    이용약관에 따라 환불이 제한될 수 있다)
                  </td>
                </tr>
                <tr style="
                    border-top: 1px solid #000;
                    border-bottom: 1px solid #000;
                  ">
                  <th><b>전문가 과정</b></th>
                  <td>
                    1회 진행시 : 50% 환불 (40% 전문가과정 서비스 사용, 10%
                    취소수수료)<br />
                    2회 진행시 : 20% 환불 (70% 전문가과정 서비스 사용, 10%
                    취소수수료)<br />
                    3회 진행시 : 서비스 완료로 인한 환불 제한<br />
                    * 결제일로부터 7일이내 청약 철회 시 100% 환불 (만일
                    취소기한이 지났거나 구매 아이템을 사용했다면 당사의
                    이용약관에 따라 환불이 제한될 수 있다)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TicketDataService from "@/services/main/TicketDataService";
export default {
  name: "ticketDetail",
  props: ["state", "id"],
  data() {
    return {
      Detail: [],
      numList: Array.from({ length: 10 }, (_, index) => ({ value: index + 1 })), // 횟수 길게 하기에 코드가 더러워보여서 줄임.
      selectedNum: 1, // 기본적으로 선택되는 값
    };
  },
  methods: {
    handleClick() {
      //sc폴더로 상태값을 전달
      this.$emit("update:state", "mainticketList");
    },
    getOneTicket(id) {
      TicketDataService.getOneTicket(id).then((res) => {
        this.Detail = res.data;
      });
    },
  },
  mounted() {
    this.getOneTicket(this.id);
  },
};
</script>

<style>
.slider-container {
  overflow: hidden;
}

.slider {
  display: flex;
  transition: transform 0.5s ease;
}

.slide {
  flex: 0 0 100%;
  /* 슬라이드 아이템 스타일링 */
}
</style>