<template>
  <div id="layoutSidenav_content">
    <main>
      <div class="container-fluid px-4">
        <h1 class="mt-4">주문내역</h1>
        <ol class="breadcrumb mb-4">
          <li class="breadcrumb-item active"></li>
        </ol>
        <div class="row">
          <div class="col-xl-6">
            <div class="card2 mb-4">
              <div class="card-header d-flex">
                <div>주문회원정보</div>
                <div style="margin: auto">주문정보</div>
              </div>
              <div class="card-body">
                <div class="d-flex" style="height: 12.9rem">
                  <div style="margin-right: -8rem">
                    <div class="block">
                      <label class="label">이름 : </label>
                      {{ orderBoard.orderName }}
                    </div>
                    <div class="block mt-3">
                      <label class="label">아이디 : </label>
                      {{ orderBoard.orderEmail }}
                    </div>
                    <div class="block mt-3">
                      <label class="label">성별 : </label>
                      {{ orderBoard.gender }}
                    </div>
                    <div class="block mt-3">
                      <label class="label">연락처 : </label>
                      {{ orderBoard.phone }}
                    </div>
                  </div>

                  <div style="margin-left: 33%">
                    <div class="block">
                      <label class="label">주문번호 : </label>
                      {{ orderBoard.orderNum }}
                    </div>
                    <div class="block mt-3">
                      <label class="label">주문일시 : </label>
                      {{ orderBoard.orderTime }}
                    </div>
                    <div class="block mt-3">
                      <label class="label">총 결제금액 : </label>
                      {{ orderBoard.totalMoney }}원
                    </div>
                    <div class="block mt-3">
                      <label class="label">결제상태 : </label>
                      <input class="form-check-input" style="margin-left: 0.5rem" type="radio" name="payState"
                        id="payState" value="N" v-model="orderBoard.payState" />
                      미결제
                      <input class="form-check-input" type="radio" name="payState" id="payState" value="Y"
                        v-model="orderBoard.payState" />
                      결제완료
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="card mb-4">
              <div class="card-header">
                <div>결제상세정보</div>
              </div>
              <div class="card-body">
                <div class="d-flex">
                  <table class="table table-striped table-bordered">
                    <thead class="thead-dark">
                      <tr>
                        <th scope="col">입금은행</th>
                        <th scope="col">계좌번호</th>
                        <th scope="col">발급일시</th>
                        <th scope="col">입금마감</th>
                      </tr>
                    </thead>
                    <!-- 조회 데이터 생성 부분 -->
                    <tbody>
                      <tr v-for="(order, index) in orders" :key="index">
                        <td>{{ order.totalMoney }}</td>
                        <td>{{ order.insertTime }}</td>
                        <td>{{ order.payMeth }}</td>
                        <td>{{ order.payState }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="row-xl-6">
              <div class="card mb-4">
                <div class="card-header">
                  <div>관리자메모</div>
                </div>
                <div class="card-body">
                  <div class="d-flex">
                    <textarea class="form-control" style="width: 100%; font-size: 12px; border: none"
                      v-model="orderBoard.memo"></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-4">
            <div class="card mb-4">
              <div class="card-header">신청이용권</div>
              <div class="card-body">
                <div class="d-flex">
                  <table class="table table-striped table-bordered">
                    <thead class="thead-dark">
                      <tr>
                        <th scope="col">이용권명</th>
                        <th scope="col">회당금액</th>
                        <th scope="col">신청횟수</th>
                        <th scope="col">총금액</th>
                      </tr>
                    </thead>
                    <!-- 조회 데이터 생성 부분 -->
                    <tbody>
                      <tr v-for="(order, index) in orders" :key="index">
                        <td>{{ order.totalMoney }}</td>
                        <td>{{ order.insertTime }}</td>
                        <td>{{ order.payMeth }}</td>
                        <td>{{ order.payState }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4">
            <div class="card mb-4">
              <div class="card-header">입금통보내역</div>
              <div class="card-body">
                <div class="d-flex">
                  <table class="table table-striped table-bordered">
                    <thead class="thead-dark">
                      <tr>
                        <th scope="col">통보고유번호</th>
                        <th scope="col">통보일시</th>
                        <th scope="col">입금자명</th>
                        <th scope="col">입금액</th>
                      </tr>
                    </thead>
                    <!-- 조회 데이터 생성 부분 -->
                    <tbody>
                      <tr v-for="(order, index) in orders" :key="index">
                        <td>
                          <a href="#">{{ order.uniqueNum }}</a>
                        </td>
                        <td>{{ order.alertTime }}</td>
                        <td>{{ order.payName }}</td>
                        <td>{{ order.pay }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4">
            <div class="card mb-4">
              <div class="card-header">발급된이용권</div>
              <div class="card-body">
                <div class="d-flex">
                  <button type="button" class="btn btn-primary btn-sm m-auto" @click="balgb">
                    이용권발급하기
                  </button>
                </div>
                <div class="d-flex">
                  <div style="font-size: 13px; margin: auto">
                    ※ 신청한 이용권에 맞게 이용권을 발급합니다.<br />
                    (이미 발급된 이용권이 있을 경우 부족한 수만큼만 발급)
                  </div>
                </div>
                <div class="d-flex">
                  <div style="font-size: 13px; margin: auto">
                    ※ 무통장입금으로 입금하였거나, <br />신청한 이용권과 발급된
                    이용권 수량이 맞지 않을때에 사용하세요.
                  </div>
                </div>
                <div class="d-flex">
                  <table class="table table-striped table-bordered">
                    <thead class="thead-dark">
                      <tr>
                        <th scope="col">이용권명</th>
                        <th scope="col">발급일시</th>
                        <th scope="col">만료일시</th>
                        <th scope="col">사용일시</th>
                      </tr>
                    </thead>
                    <!-- 조회 데이터 생성 부분 -->
                    <tbody>
                      <tr v-for="(order, index) in orders" :key="index">
                        <td>{{ order.ticketName }}</td>
                        <td>{{ order.tickStart }}</td>
                        <td>{{ order.tickEnd }}</td>
                        <td>{{ order.tickUse }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr style="width: 100%" />
        <div style="display: flex; margin-top: 1rem">
          <div style="margin: auto">
            <button @click="onSubmitForm" class="btn btn-primary btn_marg">
              저장
            </button>
            <router-link to="/admin/ordHistoryList" class="btn btn-secondary btn_marg">
              취소
            </router-link>
          </div>
        </div>
      </div>

    </main>
    <FooterCom />
  </div>
</template>

<script>
import OrderDataService from "@/services/admin/OrderDataService";
import FooterCom from "@/common/admin/FooterCom.vue";
export default {
  components: {
    FooterCom,
  },
  data() {
    return {
      orders: [],
      conChoice: "",
      searchName: "",
      page: 1, // 페이지번호
      count: 0,
      // pageSize : 한페이지당 건수
      pageSize: 10,
      //orderBoard: null,
      orderBoard: {
        orderEmail: "kevin@naver.com",
        orderName: "김창권",
        gender: "남",
        phone: "010-9331-9687",
        orderTime: "2023/03/06",
        orderNum: "201508071030",
        totalMoney: "1,100,000",
        payState: "Y",
        memo: "메모장",
      },
    };
  },
  methods: {
    // id에 해당하는 회원정보를 조회하는 서비스를 요청(springboot)
    getorder(id) {
      // axios 통신이용 서비스 호출(springboot)
      OrderDataService.getorder(id)
        // 성공하면 then으로 결과 데이터가 들어옴(response.data )
        .then((response) => {
          this.orderBoard = response.data;
        })
        // 실패하면 catch로 에러 데이터가 들어옴
        .catch((e) => {
          alert(e);
        });
    },
    getRequestParams(searchName, page, pageSize) {
      let params = {};

      // searchName 값이 있으면 params객체에 title로 저장
      if (searchName) {
        params["name"] = searchName;
      }
      // page 값이 있으면 params객체에 page 저장
      if (page) {
        params["page"] = page - 1;
      }
      // pageSize 값이 있으면 params객체에 size 저장
      if (pageSize) {
        params["size"] = pageSize;
      }

      return params;
    },
    // 모든 회원 조회 서비스 호출
    retrieveorders() {
      const params = this.getRequestParams(
        this.searchName,
        this.page,
        this.pageSize
      );
      // axios로 spring에 모든 회원 조회 요청
      OrderDataService.getorderantAll(params)
        // 성공하면 then으로 서버 데이터(response.data)가 들어옴
        .then((response) => {
          const { orderants, totalItems } = response.data;
          this.orderants = orderants; // 객체
          this.count = totalItems; // 총건수

        })
        // 실패하면 catch로 에러메세지가 들어옴
        .catch((e) => {
          alert(e);
        });
    },
    handlePageChange(value) {
      // 페이지번호 저장
      this.page = value;
      // 다시 데이터 조회
      this.retrieveorders();
    },
    // 버튼 실행시 실행할 함수
    onSubmitForm() {
      if (confirm("저장하시겠습니까?") == true) {
        var data = {
          name: this.orderBoard.orderantName,
          email: this.orderBoard.orderantEmail,
          phone: this.orderBoard.orderantPhone,
          selected: this.selected,
        };
        OrderDataService.updateorder(this.orderBoard.id, data)
          .then(() => {
            if (!alert("저장되었습니다.")) {
              window.location.reload(true);
            }
          })
          .catch((e) => {
            // 실패하면 이쪽으로 결과가 들어옴
            alert(e);
          });
      }
    },
    balgb() {
      let answer = confirm(
        "이용권을 발급하시겠습니까?\n\n신청한 이용권에 맞게 이용권을 발급합니다.\n\n(이미 발급된 이용권이 있을 경우 부족한 수만큼만 발급)"
      );
      if (answer == true) {
        alert("이용권이 발급되엇습니다.");
      }
    },
  },

  // 화면이 뜨면 실행되는 이벤트
  // http://localhost:8080/:id
  // $route : router/index.js , params.id
  /* mounted() {
            this.getorderant(this.$route.params.id);
        },*/
};
</script>

<style>
th,
td {
  text-align: center;
}

.btn_marg {
  margin: 0 1rem;
}

.label {
  display: inline-block;
  width: 140px;
  text-align: right;
}

@import "../../../../public/css/admin/styles.css";
</style>
