<template>
  <div>
    <div class="exp-container">
      <h1>아임포트 테스트</h1>
      <h3>아임포트 뷰 테스트 화면입니다.</h3>
      <h3>아래 버튼을 눌러 결제 또는 본인인증 테스트를 진행해주세요.</h3>
    </div>
    <div class="imp-home">
      <div class="nav-container">
        <button @click="onPayment">결제하기</button>
        <router-link to="test/certification"> 본인인증 </router-link>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable  */
import UserDataService from "@/services/main/UserDataService";
export default {
  methods: {
    onPayment() {
      /* 1. 가맹점 식별하기 */
      const { IMP } = window;
      IMP.init("imp47860156");

      /* 2. 결제 데이터 정의하기 */
      const data = {
        pg: "html5_inicis", // PG사
        pay_method: "card", // 결제수단
        merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
        amount: 101, // 결제금액
        name: "아임포트 결제 데이터 분석", // 주문명
        buyer_name: "홍길동", // 구매자 이름
        buyer_tel: "01012341234", // 구매자 전화번호
        buyer_email: "office@meraklus.com", // 구매자 이메일
        buyer_addr: "신사동 661-16", // 구매자 주소
        buyer_postcode: "06018", // 구매자 우편번호
      };

      /* 4. 결제 창 호출하기 */
      IMP.request_pay(data, this.callback);
    },
    callback(response) {
      /* 3. 콜백 함수 정의하기 */
      const { success, merchant_uid, error_msg } = response;

      if (success) {
        // 서버 호출 뒤 결제 내역과 이용권 내역 수정
        console.log(
          "🚀 ~ file: portOneTestView.vue:45 ~ callback ~ response:",
          response
        );

        // 결제 성공 시 서버에 결제 내역 저장
        UserDataService.createPay(response)
          .then(() => {
            alert("결제와 데이터 저장이 성공하였습니다.");
          })
          .catch((error) => {
            console.error(`Failed to save payment data: ${error.message}`);
            alert("데이터 저장에 실패하였습니다. 다시 시도해 주세요.");
          });
      } else {
        alert(`결제 실패: ${error_msg}`);
      }
    },
  },
};
</script>
