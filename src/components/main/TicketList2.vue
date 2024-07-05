<template>
  <div class="container" style="height: 36rem">
    <div class="text-center my-5">
      <h1 class="display-4 fw-bolder">이용권</h1>
    </div>
    <section class="row row-cols-1 row-cols-md-3 g-4 mb-5">
      <div class="col" v-for="ticket in TicketList" :key="ticket.id">
        <div class="h-100 border-0 shadow d-flex flex-column justify-content-center align-items-center my-3">
          <!-- 상품 리스트 -->
          <div class="card-body text-center">
            <h5 class="card-title">{{ ticket.type }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{ ticket.price }}원</h6>
            <!-- 이미지 추가 -->
            <img :src="ticket.imageUrl" class="card-img-top" alt="이용권 이미지" style="width: 100px; height: 100px" />
            <p class="card-text">이용권에 대한 간단한 설명</p>
            <button class="btn btn-sm btn-primary" @click="addToCart(ticket)">
              구매하기
            </button>
          </div>
        </div>
      </div>
    </section>
    <!-- 장바구니 표시 부분 -->
    <div class="my-5">
      <h2 class="fw-bolder">장바구니</h2>
      <ul>
        <li v-for="item in cart" :key="item.id">
          {{ item.type }} - {{ item.price }}원
          <input type="number" v-model="item.quantity" @input="updateQuantity(item)" />
          <button @click="removeFromCart(item)">삭제</button>
        </li>
      </ul>
      {{ cart_sum }}
      <button @click="checkout">결제하기</button>
    </div>
  </div>
</template>

<script>
/* eslint-disable  */
import TicketDataService from "@/services/main/TicketDataService";
import UserDataService from "@/services/main/UserDataService";
import jwtDecode from "jwt-decode";
export default {
  name: "TicketList",
  data() {
    return {
      TicketList: [
        {
          type: 'test1',
          price: 5000
        },
        {
          type: 'test2',
          price: 15000
        },
        {
          type: 'test3',
          price: 25000
        },
      ],
      Detail: [],
      numList: Array.from({ length: 10 }, (_, index) => ({ value: index + 1 })), // 횟수 길게 하기에 코드가 더러워보여서 줄임.
      selectedNum: 1, // 기본적으로 선택되는 값
      cart: [
        {
          type: 'test1',
          price: 5000,
          quantity: 1 // 기본 수량
        },
      ],
      cart_sum: 0,
      cart_name: "",
      userInfo: {},
    };
  },
  methods: {
    getAllTicket() {
      TicketDataService.getAllTicket().then((res) => {
        this.TicketList = res.data;
      })
        .catch((e) => {
          console.log('e', e);
        })
    },

    addToCart(ticket) {
      const existingItem = this.cart.find(item => item.type === ticket.type);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        this.cart.push({ ...ticket, quantity: 1 });
      }
      this.cart_sum += Number(this.cart.price) * quantity;
      this.cart_name += ticket.type + ",";
    },
    updateQuantity(item) {
      this.cart_sum += (item.price * (item.quantity - item.prevQuantity));
      item.prevQuantity = item.quantity; // 변경 전 수량 저장
    },
    removeFromCart(item) {
      const index = this.cart.indexOf(item);
      if (index > -1) {
        this.cart.splice(index, 1);
        // 문자열에서 특정 상품 이름을 제거
        this.cart_name = this.cart_name.replace(item.name + ",", "");

        this.cart_sum -= item.price;
      }
    },
    checkout() {
      // 여기에서 결제 진행 로직을 구현합니다.
      // 실제 구현시에는 결제 API를 호출하고, 그 결과에 따라 장바구니를 비우거나 오류 메시지를 표시해야 합니다.
      alert("결제가 완료되었습니다!");
      this.cart = []; // 결제 후 장바구니 비우기
    },
    onPayment(ticket) {
      /* 1. 가맹점 식별하기 */
      const { IMP } = window;
      IMP.init("imp47860156");

      /* 2. 결제 데이터 정의하기 */
      const data = {
        pg: "html5_inicis", // PG사
        pay_method: "card", // 결제수단
        merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
        amount: ticket.price, // 결제금액
        name: ticket.type, // 주문명
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
        response["user_id"] = this.userInfo.id;
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
    getUsr() {
      UserDataService.getUsr(this.getUserId())
        .then((res) => {
          this.userInfo = res.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.getAllTicket();
    this.getUsr();
  },
};
</script>
