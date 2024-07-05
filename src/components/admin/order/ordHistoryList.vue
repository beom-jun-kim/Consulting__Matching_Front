<template>
  <div id="layoutSidenav_content">
    <main>
      <div class="container-fluid px-4">
        <h1 class="mt-4">주문내역</h1>
        <ol class="breadcrumb mb-4">
          <li class="breadcrumb-item active"></li>
        </ol>
        <div class="card2 mb-4">
          <div class="card-header">
            <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0" style="float: right">
              <div class="input-group">
                <input class="form-control" type="text" placeholder="검색어를 입력해 주세요!" aria-label="Search for..."
                  aria-describedby="btnNavbarSearch" />
                <button class="btn btn-primary" id="btnNavbarSearch" type="button" @click="
                  page = 1;
                retrieveOrders();
                ">
                  <i class="fas fa-search"></i>
                </button>
              </div>
            </form>
          </div>
          <div class="card-body d-flex flex-column align-items-center">
            <table class="table table-striped table-bordered">
              <thead class="thead-dark">
                <tr>
                  <th scope="col" class="checkbox-container">
                    <label class="allCheck" style="cursor: pointer">
                      <input type="checkbox" @click="selectAll" v-model="allSelected" />
                      <div class="selectAll"><i class="fa fa-check"></i></div>
                    </label>
                  </th>
                  <th scope="col">주문자아이디</th>
                  <th scope="col">주문자명</th>
                  <th scope="col">신청이용권명</th>
                  <th scope="col">총결제금액</th>
                  <th scope="col">신청일시</th>
                  <th scope="col">결제방식</th>
                  <th scope="col">결제상태</th>
                </tr>
              </thead>
              <!-- 조회 데이터 생성 부분 -->
              <tbody>
                <tr v-for="(order, index) in orders" :key="index">
                  <td>
                    <input type="checkbox" v-model="orderIds" @click="select" :value="order.id" />
                  </td>
                  <td>
                    <router-link to="/admin/orderDetail">
                      {{ order.email }}
                    </router-link>
                  </td>
                  <td>{{ order.name }}</td>
                  <td>{{ order.ticket }}</td>
                  <td>{{ order.totalMoney }}원</td>
                  <td>{{ order.insertTime }}</td>
                  <td>{{ order.payMeth }}</td>
                  <td>{{ order.payState }}</td>
                </tr>
              </tbody>
            </table>

            <!--    Todo : page 바 태그 추가 -->
            <div style="margin: 1rem auto 0; width: 100%">
              <!--위 가로 아래-->
              <!--      Todo : page bar 추가-->
              <div class="d-flex">
                <div style="margin: 0 30% 0 43%">
                  <b-pagination v-model="page" :total-rows="count" :per-page="pageSize" prev-text="<" next-text=">"
                    @change="handlePageChange">
                  </b-pagination>
                </div>
                <div>
                  <button type="button" class="btn btn-secondary btn-sm but" @click="orderDelete()">
                    삭제
                  </button>
                </div>
              </div>
            </div>
            <!--    Todo : page 바 끝-->
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
/* eslint-disable */
export default {
  name: "orderList",
  components: {
    FooterCom,
  },
  data() {
    return {
      orders: [
        {
          id: "1",
          email: "4571ck@naver.com",
          name: "김이름",
          ticket: "BMDS컨설팅",
          totalMoney: "1,100,000",
          insertTime: "2023/03/09",
          payMeth: "가상계좌",
          payState: "결제완료",
        },
      ],
      searchName: "",
      orderIds: [], // 체크값 담아두기
      allSelected: "", // 전체체크값(ture, false)
      page: 1, // 페이지번호
      count: 0,
      // pageSize : 한페이지당 건수
      pageSize: 10,
    };
  },
  methods: {
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
    retrieveOrders() {
      const params = this.getRequestParams(
        this.searchName,
        this.page,
        this.pageSize
      );
      // axios로 spring에 모든 회원 조회 요청
      OrderDataService.getOrderAll(params)
        // 성공하면 then으로 서버 데이터(response.data)가 들어옴
        .then((response) => {
          const { orders, totalItems } = response.data;
          this.orders = orders; // 객체
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
      this.retrieveOrders();
    },
    orderDelete() {
      if (confirm("회원(들)을 삭제하시겠습니까?")) {
        for (let i = 0; i < this.orderIds.length; i++) {
          OrderDataService.deleteOrder(this.orderIds[i])
            .then((res) => {
              if (!alert("삭제되었습니다.")) {
                this.retrieveOrders();
              }
            })
            .catch((e) => {
              alert(e);
              return false;
            });
        }
      }
    },
    // 전체선택
    selectAll() {
      this.orderIds = [];

      if (!this.allSelected) {
        for (let order in this.orders) {
          this.orderIds.push(this.orders[order].id);
        }
      } else {
      }
    },
    // 채크된 값은 배열에 넣고 아니면 배열에서 빼기
    select(e) {
      this.allSelected = false;
      if (e.target.checked == false) {
        for (let i = 0; i < this.orderIds.length; i++) {
          if (this.orderIds[i] == e.target.value) {
            this.orderIds.splice(i, 1);
          }
        }
      } else {
        this.orderIds.push(e.target.value);
      }
    },
  },
  // 최초 화면이 로딩될때(뜰때) 실행되는 이벤트(모든 회원조회가 실행됨)
  /* mounted() {
            this.retrieveOrders();
        },*/
};
</script>

<style>
th,
td {
  text-align: center;
}

.but {
  margin: 0 1rem;
}

.signBtn {
  background: #0d6efd;
  width: 25px;
  height: 25px;
}

.selectAll {
  background: #0d6efd;
  width: 4rem;
  color: #fff;
  border-radius: 10%;
}

/* 기본 체크박스 없애기*/

.checkbox-container input[type="checkbox"] {
  position: absolute;

  width: 1px;

  height: 1px;

  padding: 0;

  margin: -1px;

  overflow: hidden;

  clip: rect(0, 0, 0, 0);

  border: 0;
}

@import "../../../../public/css/admin/styles.css";
</style>
