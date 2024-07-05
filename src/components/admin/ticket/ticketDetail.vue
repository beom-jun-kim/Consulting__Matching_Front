<template>
  <div id="layoutSidenav_content" class="preR">
    <main>
      <div class="container-fluid px-4">
        <h1 class="mt-4">이용권관리</h1>
        <ol class="breadcrumb mb-4">
          <li class="breadcrumb-item active"></li>
        </ol>
        <div class="row">
          <div class="col-xl-4">
            <div class="card2 mb-4">
              <div class="card-header">회원정보</div>
              <div class="card-body" style="height: 15.7rem">
                <div style="margin: 2rem 0 0 5rem">
                  <div class="block">
                    <label class="label">이름 : </label>
                    {{ ticketBoard.userName }}
                  </div>
                  <div class="block mt-3">
                    <label class="label">아이디 : </label>
                    {{ ticketBoard.userEmail }}
                  </div>
                  <div class="block mt-3">
                    <label class="label">성별 : </label>
                    {{ ticketBoard.gender }}
                  </div>
                  <div class="block mt-3">
                    <label class="label">연락처 : </label>
                    {{ ticketBoard.phone }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-8">
            <div class="card mb-4">
              <div class="card-header">이용권정보</div>
              <div class="card-body">
                <div class="form-group d-flex">
                  <label for="" class="col-md-2 control-label label">이용권 선택 :
                  </label>
                  <div class="col-md-5">
                    <select v-model="ticketBoard.selected" class="form-control valid" style="margin-left: 1rem">
                      <option v-for="(ticket, index) in ticketList" :key="index" :value="ticket.text">
                        {{ ticket.value }}
                      </option>
                    </select>
                  </div>
                </div>
                <div class="form-group d-flex" style="margin: 1rem 0">
                  <label for="" class="col-md-2 control-label label">등록일시 :
                  </label>
                  <div class="col-md-5">
                    <div class="input-group">
                      <input type="dateTime-local" class="form-control valid" style="margin-left: 1rem"
                        v-model="ticketBoard.startTime" />
                    </div>
                  </div>
                  <div class="m-1">
                    <button type="button" class="btn btn-primary btn-sm" @click="today1">
                      지금
                    </button>
                  </div>
                </div>
                <div class="form-group d-flex" style="margin: 1rem 0">
                  <label for="" class="col-md-2 control-label label">만료일시 :
                  </label>
                  <div class="col-md-5">
                    <div class="input-group">
                      <input type="datetime-local" class="form-control valid" placeholder="만료일"
                        style="margin-left: 1rem" v-model="ticketBoard.endTime" />
                    </div>
                  </div>
                  <div class="m-1">
                    <button type="button" class="btn btn-primary btn-sm" @click="today2">
                      지금
                    </button>
                  </div>
                  <div class="m-1">
                    <button type="button" class="btn btn-success btn-sm" @click="mugihan">
                      무기한
                    </button>
                  </div>
                  <div class="m-1">
                    <button type="button" class="btn btn-danger btn-sm" @click="delTime2">
                      삭제
                    </button>
                  </div>
                </div>
                <div class="form-group d-flex" style="margin: 1rem 0">
                  <label for="" class="col-md-2 control-label label">사용일시 :
                  </label>
                  <div class="col-md-5">
                    <div class="input-group">
                      <input type="datetime-local" class="form-control valid" placeholder="사용일"
                        style="margin-left: 1rem" v-model="ticketBoard.useTime" />
                    </div>
                  </div>
                  <div class="m-1">
                    <button type="button" class="btn btn-primary btn-sm" @click="today3">
                      지금
                    </button>
                  </div>
                  <div class="m-1">
                    <button type="button" class="btn btn-danger btn-sm" @click="delTime3">
                      삭제
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex" style="margin-top: 0.5rem">
            <div class="m-auto">
              <button @click="onSubmitForm" class="btn btn-primary btn_marg">
                저장
              </button>
              <router-link to="/admin/ticketList" class="btn btn-secondary btn_marg">
                취소
              </router-link>
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
  name: "userDetail",
  components: {
    FooterCom,
  },
  data() {
    return {
      //ticketBoard: null,
      ticketBoard: {
        userEmail: "kevin@naver.com",
        userName: "김창권",
        gender: "남",
        phone: "010-9331-9687",
        startTime: "2023-03-05 11:30",
        endTime: "2023-03-18 11:28",
        useTime: "2023-03-06",
      },
      dateTime: "", // 지금 날짜로 맞추기
      selected: "0",
      ticketList: [
        {
          text: "0",
          value: "사업계획서전환",
        },
      ],
    };
  },
  methods: {
    // id에 해당하는 회원정보를 조회하는 서비스를 요청(springboot)
    getUsr(id) {
      // axios 통신이용 서비스 호출(springboot)
      TicketDataService.getTicket(id)
        // 성공하면 then으로 결과 데이터가 들어옴(response.data )
        .then((response) => {
          this.ticketBoard = response.data;
        })
        // 실패하면 catch로 에러 데이터가 들어옴
        .catch((e) => {
          alert(e);
        });
    },
    // 버튼 실행시 실행할 함수
    onSubmitForm() {
      if (confirm("저장하시겠습니까?") == true) {
        var data = {
          name: this.ticketBoard.userName,
          email: this.ticketBoard.userEmail,
          gender: this.ticketBoard.gender,
          phone: this.ticketBoard.phone,
          startTime: this.ticketBoard.startTime,
          endTime: this.ticketBoard.endTime,
          useTime: this.ticketBoard.useTime,
        };
        TicketDataService.updateTicket(this.ticketBoard.id, data)
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
    today1() {
      let today = new Date();
      let year = today.getFullYear();
      let month = today.getMonth();
      let date = today.getDate();
      let hour = today.getHours();
      let minute = today.getMinutes();
      let day = "";

      day = year + "-";
      if (month < 10) {
        day += "0";
      }
      day += month + 1 + "-";
      if (date < 10) {
        day += "0";
      }
      day += date;
      let time = hour + ":";
      if (minute < 10) {
        time += "0";
      }
      time += minute;
      this.ticketBoard.startTime = day + " " + time;
    },
    today2() {
      let today = new Date();
      let year = today.getFullYear();
      let month = today.getMonth();
      let date = today.getDate();
      let hour = today.getHours();
      let minute = today.getMinutes();
      let day = "";

      day = year + "-";
      if (month < 10) {
        day += "0";
      }
      day += month + 1 + "-";
      if (date < 10) {
        day += "0";
      }
      day += date;
      let time = hour + ":";
      if (minute < 10) {
        time += "0";
      }
      time += minute;
      this.ticketBoard.endTime = day + " " + time;
    },
    mugihan() {
      let year = 2099;
      let month = 12;
      let date = 31;
      let hour = 23;
      let minute = 59;
      let day = "";

      day = year + "-" + month + "-" + date;
      let time = hour + ":" + minute;
      this.ticketBoard.endTime = day + " " + time;
    },
    delTime2() {
      this.ticketBoard.endTime = "";
    },
    today3() {
      let today = new Date();
      let year = today.getFullYear();
      let month = today.getMonth();
      let date = today.getDate();
      let hour = today.getHours();
      let minute = today.getMinutes();
      let day = "";

      day = year + "-";
      if (month < 10) {
        day += "0";
      }
      day += month + 1 + "-";
      if (date < 10) {
        day += "0";
      }
      day += date;
      let time = hour + ":";
      if (minute < 10) {
        time += "0";
      }
      time += minute;
      this.ticketBoard.useTime = day + " " + time;
    },
    delTime3() {
      this.ticketBoard.useTime = "";
    },
  },
  // 화면이 뜨면 실행되는 이벤트
  // http://localhost:8080/:id
  // $route : router/index.js , params.id
  /* mounted() {
            this.getUsr(this.$route.params.id);
        },*/
};
</script>

<style scoped>
@import url('/public/css/admin/styles.css');

.btn_marg {
  margin: 0 1rem;
}

.inputBox {
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: 12.7rem;
  height: 2.5rem;
  border-radius: 6px;
}

.label {
  display: inline-block;
  width: 140px;
  text-align: right;
}
</style>
