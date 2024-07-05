<template>
  <div id="layoutSidenav_content" class="preR">
    <main>
      <div class="container-fluid px-4">
        <h1 class="mt-4">이용권관리</h1>
        <ol class="breadcrumb mb-4">
          <li class="breadcrumb-item active"></li>
        </ol>
        <div class="card2 mb-4">
          <div class="card-header">
            <form class="form-inline ms-auto me-0 me-md-3 my-2 my-md-0 d-flex" style="float: right">
              <!-- 사용여부 선택 드롭다운 -->
              <div class="input-group">
                <select v-model="useSelected" class="form-control">
                  <option value="">사용여부</option>
                  <option v-for="(use, index) in useList" :key="index" :value="use.text">
                    {{ use.value }}
                  </option>
                </select>
              </div>
              <!-- 카테고리 선택 드롭다운 -->
              <div class="input-group">
                <select v-model="ticketSelected" class="form-control">
                  <option value="">티켓을 선택하세요</option>
                  <option v-for="FAQ in ticketList" :key="FAQ.id" :value="FAQ.value">
                    {{ FAQ.value }}
                  </option>
                </select>
              </div>
              <div class="input-group">
                <!-- 회원관리 검색 바 -->
                <input type="text" class="form-control" placeholder="제목을 검색하세요" v-model="search" />
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
                  <th scope="col">아이디</th>
                  <th scope="col">이용권명</th>
                  <!-- <th scope="col">이름</th> -->
                  <!-- <th scope="col">발급일시</th> -->
                  <!-- <th scope="col">만료일시</th> -->
                  <!-- <th scope="col">사용일시</th> -->
                  <!-- <th scope="col">모델명</th> -->
                </tr>
              </thead>
              <!-- 조회 데이터 생성 부분 -->
              <tbody>
                <tr v-for="(ticket, index) in tickets" :key="index">
                  <td>
                    <input type="checkbox" v-model="ticketIds" @click="select" :value="ticket.id" />
                  </td>
                  <td>
                    <router-link to="/admin/ticketDetail">
                      {{ ticket.id }}
                    </router-link>
                  </td>
                  <td>{{ ticket.type }}</td>
                </tr>
              </tbody>
            </table>

            <!--    Todo : page 바 태그 추가 -->
            <div style="margin: 1rem auto 0; width: 100%">
              <!--위 가로 아래-->
              <!--      Todo : page bar 추가-->
              <nav aria-label="Page navigation" style="width: 5rem; margin: 0 0 0 47rem">
                <ul class="pagination">
                  <!-- v-for 디렉티브를 사용해 pages 만큼 페이지 번호를 렌더링 -->
                  <li class="page-item" v-for="page in pages" :key="page" :class="{ active: currentPage === page }">
                    <a class="page-link" href="#" @click.prevent="currentPage = page">{{ page }}</a>
                  </li>
                </ul>
              </nav>
              <div class="d-flex justify-content-end">
                <div>
                  <button type="button" class="btn btn-secondary btn-sm but" @click="ticketDelete()">
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
import TicketDataService from "@/services/admin/TicketDataService";
import FooterCom from "@/common/admin/FooterCom.vue";
/* eslint-disable */
export default {
  name: "ticketList",
  components: {
    FooterCom,
  },
  data() {
    return {
      tickets: [],
      useSelected: "",
      ticketSelected: "",
      search: "",
      ticketIds: [], // 체크값 담아두기
      allSelected: "", // 전체체크값(true, false)
      currentPage: 1, // 현재 페이지
      perPage: 10, // 페이지당 표시되는 아이템 수
      rows: 20, // 전체 행 수
      useList: [
        {
          text: "0",
          value: "미사용",
        },
        {
          text: "1",
          value: "사용",
        },
      ],
      ticketList: [
        {
          text: "0",
          value: "비즈니스모델작성",
        },
        {
          text: "1",
          value: "사업게획서전환",
        },
        {
          text: "2",
          value: "밀착컨설팅",
        },
        {
          text: "3",
          value: "BMDS전문가과정",
        },
        {
          text: "4",
          value: "Online Consulting Basic",
        },
        {
          text: "5",
          value: "Online Consulting Standard",
        },
        {
          text: "6",
          value: "Online Consulting Premium",
        },
      ],
    };
  },
  computed: {
    // 전체 페이지 수 계산
    pages() {
      return Math.ceil(this.rows / this.perPage);
    },
    filteredItems() {
      // items 배열을 필터링하여 검색어와 선택된 카테고리에 해당하는 아이템만 반환
      return this.tickets.filter((ticket) => {
        return (
          ticket.question.toLowerCase().includes(this.search.toLowerCase()) &&
          (this.ticketSelected === "" ||
            this.useSelected === "" ||
            ticket.useSelected === this.useSelected ||
            ticket.category === this.ticketSelected)
        );
      });
    },
  },
  methods: {
    retrieveTickets() {
      TicketDataService.getTicketAll()
        .then((response) => {
          this.tickets = response.data; // 객체
        })
        .catch((e) => {
          alert(e);
        });
    },
    ticketDelete() {
      if (confirm("이용권(들)을 삭제하시겠습니까?")) {
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
    // 전체선택
    selectAll() {
      this.ticketIds = [];

      if (!this.allSelected) {
        for (let ticket in this.tickets) {
          this.ticketIds.push(this.tickets[ticket].id);
        }
      } else {
      }
    },
    // 채크된 값은 배열에 넣고 아니면 배열에서 빼기
    select(e) {
      this.allSelected = false;
      if (e.target.checked == false) {
        for (let i = 0; i < this.ticketIds.length; i++) {
          if (this.ticketIds[i] == e.target.value) {
            this.ticketIds.splice(i, 1);
          }
        }
      } else {
        this.ticketIds.push(e.target.value);
      }
    },
  },
  // 최초 화면이 로딩될때(뜰때) 실행되는 이벤트(모든 회원조회가 실행됨)
  mounted() {
    // this.retrieveTickets();
  },
};
</script>

<style scoped>
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

@import url('/public/css/admin/styles.css');
</style>
