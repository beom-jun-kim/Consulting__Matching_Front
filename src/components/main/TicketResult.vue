<template>
  <div class="container-fluid px-4 mt-5">
    <!--<form class="form-inline ms-auto me-0 d-flex" style="float: right">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="제목을 검색하세요" v-model="search" />
      </div>
    </form>-->
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <!-- <th scope="col" class="checkbox-container">
            <label class="allCheck" style="cursor: pointer">
              <input type="checkbox" @click="selectAll" v-model="allSelected" />
              <div class="selectAll"><i class="fa fa-check"></i></div>
            </label>
          </th> -->
          <th scope="col">등급</th>
          <th scope="col">상태</th>
          <th scope="col">사용일시</th>
          <th scope="col">만료일시</th>
        </tr>
      </thead>
      <!-- 조회 데이터 생성 부분 -->
      <tbody>
        <tr v-for="(ticket, index) in tickets" :key="index">
          <!-- <td>
            <input type="checkbox" v-model="ticketIds" @click="select" :value="ticket.voucher_id" />
          </td> -->
          <td>{{ ticket.grade }}</td>
          <td>
            {{ ticket.status }}
          </td>
          <td>{{ ticket.start_date }}</td>
          <td>{{ ticket.end_date }}</td>
        </tr>
      </tbody>
    </table>
    <!--    Todo : page 바 태그 추가 -->
    <div class="d-flex justify-content-center w-100 my-4 mx-auto">
      <!--위 가로 아래-->
      <!--      Todo : page bar 추가-->
      <nav aria-label="Page navigation w-25">
        <ul class="pagination">
          <!-- v-for 디렉티브를 사용해 pages 만큼 페이지 번호를 렌더링 -->
          <li class="page-item" v-for="page in pages" :key="page" :class="{ active: currentPage === page }">
            <a class="page-link" href="#" @click.prevent="currentPage = page">{{
              page
            }}</a>
          </li>
        </ul>
      </nav>
    </div>
    <!-- <div class="d-flex justify-content-end">
      <div>
        <button type="button" class="btn btn-secondary btn-sm but" @click="ticketDelete()">
          삭제
        </button>
      </div>
    </div> -->

    <!--    Todo : page 바 끝-->
  </div>
</template>

<script>
import TicketDataService from '@/services/main/TicketDataService';
import jwtDecode from "jwt-decode";
import moment from "moment";
/* eslint-disable */
export default {
  name: "TicketResult",
  data() {
    return {
      tickets: [],
      search: "",
      ticketIds: [], // 체크값 담아두기
      allSelected: "", // 전체체크값(ture, false)
      currentPage: 1, // 현재 페이지
      perPage: 10, // 페이지당 표시되는 아이템 수
      rows: 20, // 전체 행 수
    };
  },
  computed: {
    // 전체 페이지 수 계산
    pages() {
      return Math.ceil(this.rows / this.perPage);
    },
  },
  methods: {
    getUserId() {
      const tokenData = localStorage.getItem("user");
      const parsedToken = JSON.parse(tokenData);
      const accessToken = parsedToken.accessToken;
      const decodedToken = jwtDecode(accessToken);
      const userId = decodedToken.id;
      return userId;
    },
    // 모든 회원 조회 서비스 호출
    retrieveTickets(id) {
      // axios로 spring에 모든 회원 조회 요청
      TicketDataService.getOneTicket(id)
        // 성공하면 then으로 서버 데이터(response.data)가 들어옴
        .then((response) => {
          this.tickets = response.data; // 객체
          // // createdAt 날짜 포맷 변경
          this.tickets.forEach((ticket) => {
            ticket.start_date = moment(ticket.start_date).format(
              "YYYY-MM-DD"
            );
            ticket.end_date = moment(ticket.end_date).format(
              "YYYY-MM-DD"
            );
          });
        })
        // 실패하면 catch로 에러메세지가 들어옴
        .catch((e) => {
          alert(e);
        });
    },
    ticketDelete() {
      if (confirm("결제내역(들)을 삭제하시겠습니까?")) {
        for (let i = 0; i < this.ticketIds.length; i++) {
          TicketDataService.deleteTicket(this.ticketIds[i])
            .then(() => {
              if (!alert("삭제되었습니다.")) {
                this.retrieveTickets();
              }
            })
            .catch((e) => {
              alert(e);
              return false;
            });
        }
      }
    },
  },
  // 최초 화면이 로딩될때(뜰때) 실행되는 이벤트(모든 조회가 실행됨)
  mounted() {
    this.retrieveTickets(this.getUserId());
  },
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
</style>