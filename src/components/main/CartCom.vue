<template>
  <div class="shopping-cart my-5">
    <!-- 장바구니 -->
    <div class="cart">
      <div class="product">
        <div>
          <img style="width:140px; height:60px; border:1px solid black;" src="../../../public/img/bmds/offlineTicket.jpg"
            alt="바우처">
        </div>
        <div>9,900원</div>
        <div class="d-flex">
          <input type="text" class="text-center" style="width:80px; height:60px;" v-model="cart_sum" />
          <div class="d-flex flex-column" style="width:60px; height:60px;">
            <button class="plusMinusBtn" @click="addToCart()">+</button>
            <button class="plusMinusBtn" @click="removeFromCart()">-</button>
          </div>
        </div>
        <div>19,900원</div>
      </div>

      <!-- 결제하기 -->
      <div class="checkout">
        <button @click="onPayment">바우처 구매하기</button>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable  */
import UserDataService from "@/services/main/UserDataService";
import jwtDecode from "jwt-decode";

export default {
  props: ["ticket"],
  data() {
    return {
      products: [
        {
          name: "cart",
          price: 10000
        }
      ],
      cart: [],
      cart_sum: 0,
      userInfo: {},
      cart_name: "",
    };
  },
  methods: {
    addToCart() {
      this.cart_sum += 1;
    },
    removeFromCart() {
      if (this.cart_sum > 0) {
        this.cart_sum -= 1;
      }
    },
    onPayment() {
      /* 1. 가맹점 식별하기 */
      const { IMP } = window;
      IMP.init("imp47860156");

      /* 2. 결제 데이터 정의하기 */
      const data = {
        pg: "html5_inicis", // PG사
        pay_method: "card", // 결제수단
        merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
        amount: this.cart_sum, // 결제금액
        name: this.cart_name, // 주문명
        buyer_name: this.userInfo.name, // 구매자 이름
        buyer_tel: this.userInfo.phoneNum, // 구매자 전화번호
        buyer_email: this.userInfo.email, // 구매자 이메일
        buyer_company: this.userInfo.company, // 구매자 회사
      };

      /* 4. 결제 창 호출하기 */
      IMP.request_pay(data, this.callback);
    },

    callback(response) {
      /* 3. 콜백 함수 정의하기 */
      const { success, merchant_uid, error_msg } = response;

      if (success) {
        // 서버 호출 뒤 결제 내역과 이용권 내역 수정
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
    // 유저 아이디 받기
    getUserId() {
      const tokenData = localStorage.getItem("user");
      const parsedToken = JSON.parse(tokenData);
      const accessToken = parsedToken.accessToken;
      const decodedToken = jwtDecode(accessToken);
      const userId = decodedToken.id;
      return userId;
    },
    getUsr(id) {
      UserDataService.getUsr(id)
        .then((res) => {
          this.userInfo = res.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.getUsr(this.getUserId());
  },
};
</script>

<style scoped>
.plusMinusBtn {
  width: 30px;
  height: 30px;
  border: 1px solid black;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 이 부분은 스타일링 예시로, 실제 프로젝트에 맞게 커스터마이징하셔야 합니다. */
.shopping-cart {
  display: flex;
  justify-content: space-between;
}

.product-list,
.cart {
  border: 1px solid #ddd;
  padding: 20px;
  width: 60rem;
  height: 20rem;
}

.product,
.cart-item {
  border-bottom: 1px solid #ddd;
  margin-bottom: 10px;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
</style>
