<template>
  <div class="container-fluid px-4 mt-5">
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">번호</th>
          <th scope="col">구매상품명</th>
          <th scope="col">첫결제 일시</th>
          <th scope="col">최근 결제 일시</th>
          <th scope="col">다음 결제 예정일</th>
          <th scope="col">결제금액</th>
          <th scope="col">구독상태</th>
          <th scope="col">비고</th>
        </tr>
      </thead>
      <!-- 조회 데이터 생성 부분 -->
      <tbody v-if="pays">
        <tr v-for="(pay, index) in pays" :key="index" @click="openModal">
          <td>{{ index + 1 }}</td>
          <td>{{ "BMDS(" + pay.order_name.toUpperCase() + ")" }}</td>
          <td>{{ formatDate(new Date(pay.created_at)) }}</td>
          <td>{{ formatDate(new Date(pay.updated_at)) }}</td>
          <td>{{ pay.nextpay_at ? formatDate(new Date(pay.nextpay_at)) : '없음' }}</td>
          <td>{{ pay.price + "원" }}</td>
          <td>{{ pay.status_locale }}</td>
          <td><button v-if="pay.status_locale != '구독해지'" class="btn btn-danger btn-sm" @click="cancelPay(pay.id)">구독해지
            </button>
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>결제내역이 없습니다.</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <div class="d-flex justify-content-center w-100 my-4 mx-auto">
      <nav aria-label="Page navigation w-25">
        <ul class="pagination">
          <li class="page-item" v-for="page in pages" :key="page" :class="{ active: currentPage === page }">
            <a class="page-link" href="#" @click.prevent="currentPage = page">{{
        page
      }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import BootPayDataService from '@/services/main/BootPayDataService';
import jwtDecode from "jwt-decode";
import UserDataService from '@/services/main/UserDataService';

/* eslint-disable */
export default {
  name: "PayResult",
  data() {
    return {
      pays: [],
      search: "",
      orderIds: [], // 체크값 담아두기
      allSelected: "", // 전체체크값(ture, false)
      currentPage: 1, // 현재 페이지
      perPage: 10, // 페이지당 표시되는 아이템 수
      rows: 10, // 전체 행 수
      token: "",
      imid: "",
      payHistory: {},
      showModal: false,
      reason: "",
      showReason: false,
      showCancle: false,
    };
  },
  computed: {
    // 전체 페이지 수 계산
    pages() {
      return Math.ceil(this.rows / this.perPage);
    },
    formattedPaidAt() {
      return this.formatDate(this.payHistory.paid_at);
    },
  },
  filters: {
    currencyFormat(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
  methods: {
    // 유저 아이디 받기
    getUserId() {
      const tokenData = localStorage.getItem("user");
      const parsedToken = JSON.parse(tokenData);
      const accessToken = parsedToken.accessToken;
      const decodedToken = jwtDecode(accessToken);
      const userId = decodedToken.id;
      return userId;
    },
    async getUsr() {
      try {
        const response = await UserDataService.getUsr(this.getUserId());
        this.userInfo = response.data;
      } catch (error) {
        console.error('Error in getUsr:', error);
      }
    },
    async cancelPay(id) {
      try {
        if (confirm('구독을 해지하시겠습니까?')) {
          await this.getUsr();
          if (this.userInfo) {
            let response = await BootPayDataService.getReserveId(id);
            console.log('response', response);
            if (response.data.reserve_id) {
              var reserveId = {
                reserve_id: response.data.reserve_id
              }
              await BootPayDataService.cancelReservation(reserveId);
              alert('구독이 해지되었습니다.');
              this.retrievePays(this.getUserId());
            }
          }
        }
      }
      catch (e) {
        alert('결제가 예약되어있지 않거나 결제된 내역이 없습니다.');
      }
    },

    // 모든 회원 조회 서비스 호출
    async retrievePays(id) {
      try {
        let res = await BootPayDataService.getPaymentById(id);
        if (res.length !== 0) {
          this.pays = res.data;
          console.log('this.pays', this.pays);
        }
      }
      catch (e) {
        console.log('e', e);
      };
    },
    openModal() {
      this.showModal = true;
    },
    formatDate(timestamp) {
      let date = new Date(timestamp);  // Remove the * 1000
      let year = date.getFullYear();
      let month = ("0" + (date.getMonth() + 1)).slice(-2);
      let day = ("0" + date.getDate()).slice(-2);
      let hour = ("0" + date.getHours()).slice(-2);
      let minute = ("0" + date.getMinutes()).slice(-2);
      let second = ("0" + date.getSeconds()).slice(-2);
      return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
    },
    closeModal() {
      this.showModal = false;
    },
  },
  // 최초 화면이 로딩될때(뜰때) 실행되는 이벤트(모든 조회가 실행됨)
  mounted() {
    this.retrievePays(this.getUserId());
  },
};
</script>

<style>
th,
td {
  text-align: center;
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.modal-transition-enter-active,
.modal-transition-leave-active {
  transition: opacity 0.5s;
}

.modal-transition-enter,
.modal-transition-leave-to {
  opacity: 0;
}

.modal-body textarea {
  width: 100%;
  min-height: 200px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.modal-cancel-reason {
  z-index: 1000;
}
</style>
