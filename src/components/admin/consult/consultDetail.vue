<template>
  <div id="layoutSidenav_content">
    <main>
      <div class="container-fluid px-4">
        <h1 class="mt-4">컨설팅신청</h1>
        <ol class="breadcrumb mb-4">
          <li class="breadcrumb-item active"></li>
        </ol>
        <div class="row">
          <div class="col-xl-6">
            <div class="card2 mb-4" style="height: 400px">
              <div class="card-header">신청자정보</div>
              <div class="card-body">
                <div style="margin-left: 10%">
                  <div class="block">
                    <label class="label">신청자 명 : </label>
                    {{ consultBoard.consultName }}
                  </div>
                  <div class="block mt-3">
                    <label class="label">신청자 아이디 : </label>
                    {{ consultBoard.consultEmail }}
                  </div>
                  <div class="block mt-3">
                    <label class="label">신청자 연락처 : </label>
                    {{ consultBoard.phone }}
                  </div>
                  <div class="block mt-3">
                    <label class="label">모델유형 : </label>
                    {{ consultBoard.proType }}
                  </div>
                  <div class="block mt-3">
                    <label class="label">모델명 : </label>
                    {{ consultBoard.proName }}
                  </div>
                  <div class="block mt-3">
                    <label class="label">성별 : </label>
                    <input class="form-check-input" style="margin-left: 0.5rem" disabled="true" type="radio" name="gender"
                      id="gender" value="남" v-model="consultBoard.gender" />
                    남
                    <input class="form-check-input" disabled="true" type="radio" name="gender" id="gender" value="여"
                      v-model="consultBoard.gender" />
                    여
                  </div>
                  <div class="block mt-3">
                    <label class="label">진행상태 : </label>
                    <select v-model="consultBoard.selected" style="margin-left: 0.5rem">
                      <option v-for="(pro, index) in proList" :key="index" :value="pro.text">
                        {{ pro.value }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="card mb-4">
              <div class="card-header">컨설턴트정보</div>
              <div class="card-body">
                <div class="d-flex flex-column">
                  <div style="margin-left: 10%">
                    <div class="block">
                      <label>컨설턴트 명 : </label>
                      {{ consultBoard.consultantName }}
                    </div>
                    <div class="block mt-1">
                      <label>컨설턴트 아이디 : </label>
                      {{ consultBoard.consultantEmail }}
                    </div>
                    <div class="block mt-1">
                      <label>컨설턴트 연락처 : </label>
                      {{ consultBoard.consultantPhone }}
                    </div>
                  </div>
                  <div class="width:100%;">
                    <button class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal"
                      style="float: right">
                      컨설턴트찾기
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-4">
              <div class="card-header">상세진행정보</div>
              <div class="card-body">
                <div style="margin-left: 10%">
                  <div class="block">
                    <label>시작일시 : </label>
                    {{ consultBoard.consultantName }}
                  </div>
                  <div class="block mt-1">
                    <label>종료일시 : </label>
                    {{ consultBoard.consultantEmail }}
                  </div>
                  <div class="block mt-1">
                    <label>일지작성 : </label>
                    {{ consultBoard.consultantPhone }} 건
                    <button class="btn btn-primary btn-sm" type="button">
                      일지확인하기
                    </button>
                  </div>
                  <div class="block mt-1">
                    <label>후기 : </label>
                    {{ consultBoard.consultantPhone }}
                  </div>
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
            <router-link to="/admin/consultList" class="btn btn-secondary btn_marg">
              취소
            </router-link>
          </div>
        </div>
      </div>
    </main>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              컨설턴트찾기
            </h1>
            <button type="button" class="btn-close" id="btnClose" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form class="d-none d-md-inline-block form-inline ms-auto me-0 my-2 my-md-0" style="float: right">
              <div class="input-group">
                <input class="form-control" type="text" placeholder="검색어를 입력해 주세요!" aria-label="Search for..."
                  aria-describedby="btnNavbarSearch" />
                <button class="btn btn-primary" id="btnNavbarSearch" type="button" @click="
                  page = 1;
                retrieveConsults();
                ">
                  <i class="fas fa-search"></i>
                </button>
              </div>
            </form>
            <table class="table table-striped table-bordered">
              <thead class="thead-dark">
                <tr>
                  <th scope="col" class="text-center">이름</th>
                  <th scope="col" class="text-center">아이디</th>
                  <th scope="col" class="text-center">선택</th>
                </tr>
              </thead>
              <!-- 조회 데이터 생성 부분 -->
              <tbody>
                <tr v-for="(con, index) in consultantBoard" :key="index">
                  <td>{{ con.consultantName }}</td>
                  <td>{{ con.consultantEmail }}</td>
                  <td scope="col" class="checkbox-container">
                    <div class="d-flex" style="width: 100%">
                      <label class="allCheck" style="cursor: pointer; width: 100%">
                        <input type="checkbox" @click="choice" v-model="conChoice" :value="con.consultantId" />
                        <div class="choice m-auto">
                          <i class="fa fa-check" style="margin-left: 27%"></i>
                        </div>
                      </label>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <!--    Todo : page 바 태그 추가 -->

            <!--위 가로 아래-->
            <!--      Todo : page bar 추가-->
            <div class="d-flex">
              <div class="m-auto">
                <b-pagination v-model="page" :total-rows="count" :per-page="pageSize" prev-text="<" next-text=">"
                  @change="handlePageChange">
                </b-pagination>
              </div>
            </div>
            <!--    Todo : page 바 끝-->
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              닫기
            </button>
          </div>
        </div>
      </div>

    </div>
    <FooterCom />
  </div>
</template>

<script>
import UserDataService from "@/services/admin/UserDataService";
import ConsultDataService from "@/services/admin/ConsultDataService";
import FooterCom from "@/common/admin/FooterCom.vue";
export default {
  name: "consultDetail",
  components: {
    FooterCom,
  },
  data() {
    return {
      consultants: [],
      conChoice: "",
      searchName: "",
      page: 1, // 페이지번호
      count: 0,
      // pageSize : 한페이지당 건수
      pageSize: 10,
      //consultBoard: null,
      consultBoard: {
        consultEmail: "kevin@naver.com",
        consultName: "김창권",
        gender: "남",
        phone: "010-9331-9687",
        instDate: "2023/03/06",
        proType: "쇼핑몰형",
        proName: "룰루랄라",
        consultantId: "5",
        consultantName: "김이름",
        consultantEmail: "Name@naver.com",
        consultantPhone: "010-1234-1234",
        selected: "0",
      },
      consultantBoard: [
        {
          consultantId: "",
          consultantName: "",
          consultantEmail: "",
        },
      ],
      proList: [
        {
          text: "0",
          value: "미매칭",
        },
        {
          text: "1",
          value: "진행대기",
        },
        {
          text: "2",
          value: "진행중",
        },
        {
          text: "3",
          value: "완료대기",
        },
        {
          text: "4",
          value: "진행완료",
        },
      ],
    };
  },
  methods: {
    // id에 해당하는 회원정보를 조회하는 서비스를 요청(springboot)
    getConsult(id) {
      // axios 통신이용 서비스 호출(springboot)
      ConsultDataService.getConsult(id)
        // 성공하면 then으로 결과 데이터가 들어옴(response.data )
        .then((response) => {
          this.consultBoard = response.data;
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
    retrieveConsults() {
      const params = this.getRequestParams(
        this.searchName,
        this.page,
        this.pageSize
      );
      // axios로 spring에 모든 회원 조회 요청
      UserDataService.getConsultantAll(params)
        // 성공하면 then으로 서버 데이터(response.data)가 들어옴
        .then((response) => {
          const { consultants, totalItems } = response.data;
          this.consultants = consultants; // 객체
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
      this.retrieveConsults();
    },
    // 버튼 실행시 실행할 함수
    onSubmitForm() {
      if (confirm("저장하시겠습니까?") == true) {
        var data = {
          name: this.consultBoard.consultantName,
          email: this.consultBoard.consultantEmail,
          phone: this.consultBoard.consultantPhone,
          selected: this.selected,
        };
        ConsultDataService.updateConsult(this.consultBoard.id, data)
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
    choice(e) {
      UserDataService.getConsultant(e.target.vale)
        .then((res) => {
          this.consultantBoard = res.data;
          this.consultBoard.consultantName =
            this.consultantBoard.consultantName;
          this.consultBoard.consultantEmail =
            this.consultantBoard.consultantEmail;
          this.consultBoard.consultantPhone =
            this.consultantBoard.consultantPhone;
          document.querySelector("#btnClose").click();
        })
        .catch((e) => {
          alert(e);
        });
    },
  },

  // 화면이 뜨면 실행되는 이벤트
  // http://localhost:8080/:id
  // $route : router/index.js , params.id
  /* mounted() {
            this.getConsultant(this.$route.params.id);
        },*/
};
</script>

<style>
.btn_marg {
  margin: 0 1rem;
}

.inputBox {
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: 12.7rem;
  height: 2.5rem;
  border-radius: 6px;
}

.inputBox2 {
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: 25rem;
  height: 2.5rem;
  border-radius: 6px;
}

.label {
  display: inline-block;
  width: 140px;
  text-align: right;
}

.choice {
  background: #0d6efd;
  width: 2rem;
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
