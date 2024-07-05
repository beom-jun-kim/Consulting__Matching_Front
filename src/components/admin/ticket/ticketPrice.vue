<template>
  <div id="layoutSidenav_content" class="preR">
    <main>
      <div class="container-sm px-4">
        <h1 class="mt-4">이용권가격설정</h1>
        <ol class="breadcrumb mb-4">
          <li class="breadcrumb-item active"></li>
        </ol>
        <div class="card2 mb-4">
          <div class="card-header">
            ※ 금액/제공횟수/추가1회 금액은 반드시 '숫자'로만 입력해 주세요.<br />
            ※ 제공횟수 및 금액 변경시 사용자측 화면 수정이 필요할 수
            있습니다.<br />
            ※ 내용을 변경하더라도 기존 발급된 이용권은 영향을 받지 않습니다.
          </div>
          <div class="card-body">
            <div style="margin: 0 auto 0">
              <table class="table table-bordered" id="ticketTable">
                <thead>
                  <tr>
                    <th scope="col" class="checkbox-container">
                      <label class="allCheck" style="cursor: pointer">
                        <input type="checkbox" @click="selectAll" v-model="allSelected" />
                        <div class="selectAll"><i class="fa fa-check"></i></div>
                      </label>
                    </th>
                    <th scope="col">이용권명</th>
                    <th scope="col">금액</th>
                    <th scope="col">제공 횟수</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(ticket, index) in tickets" :key="index">
                    <td>
                      <input type="checkbox" v-model="ticketIds" @click="select" :value="ticket.id" />
                    </td>
                    <td>
                      <div class="d-flex justify-content-between">
                        <input type="text" class="form-control" name="ticketName" v-model="ticket.type"
                          style="text-align: center" required />
                      </div>
                    </td>
                    <td>
                      <div class="d-flex justify-content-between">
                        <input type="text" class="form-control" name="ticketPrice" v-model="ticket.price"
                          style="text-align: center" required />
                        <div class="form-control" style="width: 20%">원</div>
                      </div>
                    </td>
                    <td>
                      <div class="d-flex justify-content-between">
                        <input type="text" class="form-control" name="ticketCount" v-model="ticket.available_count"
                          style="text-align: center" required />
                        <div class="form-control" style="width: 20%">회</div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="d-flex" style="width: 100%">
              <div class="m-auto">
                <button @click="onSubmitForm" class="btn btn-primary btn_marg but">
                  저장
                </button>
                <button @click="addRow" class="btn btn-secondary btn_marg">
                  추가
                </button>
                <button type="button" class="btn btn-danger btn_marg but" @click="ticketDelete()">
                  삭제
                </button>
              </div>
            </div>
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
export default {
  components: {
    FooterCom,
  },
  data() {
    return {
      ticketIds: [], // 체크값 담아두기
      allSelected: "", // 전체체크값(true, false)
      tickets: [],
      newTicket: [],
      newId: 0, // 동적으로 할당된 id값
      proList: [
        {
          text: "0",
          value: "무재한",
        },
        {
          text: "1",
          value: "1개월",
        },
        {
          text: "2",
          value: "2개월",
        },
        {
          text: "3",
          value: "3개월",
        },
        {
          text: "4",
          value: "4개월",
        },
        {
          text: "5",
          value: "5개월",
        },
      ],
    };
  },
  methods: {
    addRow() {
      // ID 생성
      this.newId = this.tickets.length + 1;

      // 새로운 티켓 객체 생성
      this.newTicket = {
        id: this.newId,
        type: "",
        price: "",
        available_count: "",
      };

      // 새로운 티켓을 tickets 배열에 추가
      this.tickets.push(this.newTicket);
    },
    getTicketAll() {
      TicketDataService.getTicketAll().then((res) => {
        this.tickets = res.data;
      });
    },
    // 버튼 실행시 실행할 함수
    onSubmitForm() {
      if (confirm("저장하시겠습니까?") == true) {
        TicketDataService.createTicket(this.tickets)
          .then(() => {
            if (!alert("저장되었습니다.")) {
              window.location = "/admin/ticketPrice";
            }
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
    ticketDelete() {
      if (confirm("이용권(들)을 삭제하시겠습니까?")) {
        for (let i = 0; i < this.ticketIds.length; i++) {
          TicketDataService.deleteTicket(this.ticketIds[i])
            .then(() => {
              if (!alert("삭제되었습니다.")) {
                window.location = "/admin/ticketPrice";
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
      }
    },
    // 채크된 값은 배열에 넣고 아니면 배열에서 빼기
    select(e) {
      this.allSelected = false;
      const ticketId = parseInt(e.target.value);

      if (e.target.checked) {
        this.ticketIds.push(ticketId);
      } else {
        const index = this.ticketIds.indexOf(ticketId);
        if (index !== -1) {
          this.ticketIds.splice(index, 1);
        }
      }
    },
  },

  // 화면이 뜨면 실행되는 이벤트
  // http://localhost:8080/:id
  // $route : router/index.js , params.id
  mounted() {
    this.getTicketAll();
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
