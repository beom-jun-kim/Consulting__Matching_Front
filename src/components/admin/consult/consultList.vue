<template>
  <div id="layoutSidenav_content">
    <main>
      <div class="container-fluid px-4">
        <h1 class="mt-4">컨설팅신청</h1>
        <ol class="breadcrumb mb-4">
          <li class="breadcrumb-item active"></li>
        </ol>
        <div class="card2 mb-4">
          <div class="card-header d-flex justify-content-end">
            <div style="width: 10rem">
              <select v-model="selected" class="form-control">
                <option v-for="(pro, index) in proList" :key="index" :value="pro.text">
                  {{ pro.value }}
                </option>
              </select>
            </div>
            <div style="float: right">
              <form class="d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
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
            </div>
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
                  <th scope="col">신청자아이디</th>
                  <th scope="col">신청자이름</th>
                  <th scope="col">컨설턴트아이디</th>
                  <th scope="col">컨설턴트이름</th>
                  <th scope="col">진행상태</th>
                  <th scope="col">모델유형</th>
                  <th scope="col">모델명</th>
                  <th scope="col">신청일시</th>
                </tr>
              </thead>
              <!-- 조회 데이터 생성 부분 -->
              <tbody>
                <tr v-for="(consult, index) in consults" :key="index">
                  <td>
                    <input type="checkbox" v-model="consultIds" @click="select" :value="consult.id" />
                  </td>
                  <td>
                    <router-link to="/admin/consultDetail">
                      {{ consult.userEmail }}
                    </router-link>
                  </td>
                  <td>{{ consult.userName }}</td>
                  <td>{{ consult.consultantEmail }}</td>
                  <td>{{ consult.consultantName }}</td>
                  <td>{{ consult.consultState }}</td>
                  <td>{{ consult.proType }}</td>
                  <td>{{ consult.proName }}</td>
                  <td>{{ consult.insertTime }}</td>
                </tr>
              </tbody>
            </table>

            <!--    Todo : page 바 태그 추가 -->
            <div style="margin: 1rem auto 0; width: 100%">
              <!--위 가로 아래-->
              <!--      Todo : page bar 추가-->
              <div class="d-flex">
                <div style="margin: 0 36.5% 0 43%">
                  <b-pagination v-model="page" :total-rows="count" :per-page="pageSize" prev-text="<" next-text=">"
                    @change="handlePageChange">
                  </b-pagination>
                </div>
                <div>
                  <button type="button" class="btn btn-secondary btn-sm but" @click="consultDelete()">
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
import UserDataService from "@/services/admin/UserDataService";
import FooterCom from "@/common/admin/FooterCom.vue";
/* eslint-disable */
export default {
  name: "consultList",
  components: {
    FooterCom,
  },
  data() {
    return {
      consults: [
        {
          id: "1",
          userEmail: "kevin@naver.com",
          userName: "김창권",
          consultantEmail: "name@naver.com",
          consultantName: "김이름",
          consultState: "진행대기",
          proType: "쇼핑몰형",
          proName: "룰루랄라",
          insertTime: "2023/01/30",
        },
        {
          id: "2",
          userEmail: "kevin@naver.com",
          userName: "김창권2",
          consultantEmail: "name@naver.com",
          consultantName: "김이름2",
          consultState: "진행완료",
          proType: "쇼핑몰형",
          proName: "룰루랄라",
          insertTime: "2023/01/30",
        },
        {
          id: "3",
          userEmail: "kevin@naver.com",
          userName: "김창권3",
          consultantEmail: "name@naver.com",
          consultantName: "김이름3",
          consultState: "진행중",
          proType: "쇼핑몰형",
          proName: "룰루랄라",
          insertTime: "2023/01/30",
        },
        {
          id: "4",
          userEmail: "kevin@naver.com",
          userName: "김창권2",
          consultantEmail: "",
          consultantName: "",
          consultState: "미매칭",
          proType: "쇼핑몰형",
          proName: "룰루랄라",
          insertTime: "2023/01/30",
        },
      ],
      selected: "",
      searchName: "",
      consultIds: [], // 체크값 담아두기
      allSelected: "", // 전체체크값(true, false)
      page: 1, // 페이지번호
      count: 0,
      // pageSize : 한페이지당 건수
      pageSize: 10,
      proList: [
        {
          text: "",
          value: "진행상태",
        },
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
    getRequestParams(searchName, selected, page, pageSize) {
      let params = {};

      // searchTitle 값이 있으면 params객체에 title로 저장
      if (searchName) {
        params["name"] = searchName;
      }
      // searchTitle 값이 있으면 params객체에 title로 저장
      if (selected) {
        params["selected"] = selected;
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
        this.selected,
        this.page,
        this.pageSize
      );
      // axios로 spring에 모든 회원 조회 요청
      UserDataService.getConsultAll(params)
        // 성공하면 then으로 서버 데이터(response.data)가 들어옴
        .then((response) => {
          const { consults, totalItems } = response.data;
          this.consults = consults; // 객체
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
    consultDelete() {
      if (confirm("회원(들)을 삭제하시겠습니까?")) {
        for (let i = 0; i < this.consultIds.length; i++) {
          UserDataService.deleteConsult(this.consultIds[i])
            .then((res) => {
              if (!alert("삭제되었습니다.")) {
                this.retrieveConsults();
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
      this.consultIds = [];

      if (!this.allSelected) {
        for (let consult in this.consults) {
          this.consultIds.push(this.consults[consult].id);
        }
      } else {
      }
    },
    // 채크된 값은 배열에 넣고 아니면 배열에서 빼기
    select(e) {
      this.allSelected = false;
      if (e.target.checked == false) {
        for (let i = 0; i < this.consultIds.length; i++) {
          if (this.consultIds[i] == e.target.value) {
            this.consultIds.splice(i, 1);
          }
        }
      } else {
        this.consultIds.push(e.target.value);
      }
    },
  },
  // 최초 화면이 로딩될때(뜰때) 실행되는 이벤트(모든 회원조회가 실행됨)
  /* mounted() {
            this.retrieveConsults();
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
