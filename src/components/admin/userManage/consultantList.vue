<template>
  <div id="layoutSidenav_content" class="preR">
    <main>
      <div class="container-fluid px-4">
        <h1 class="mt-4">컨설턴트회원</h1>
        <ol class="breadcrumb mb-4">
          <li class="breadcrumb-item active"></li>
        </ol>
        <div class="card2 mb-4">
          <div class="card-header d-flex justify-content-between align-items-center">
            총 {{ count }} 명
            <!-- <div class="input-group">
                <input type="text" class="form-control" placeholder="이름을 검색하세요" v-model="search" />
              </div> -->
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
                  <th scope="col">권한</th>
                  <th scope="col">이메일</th>
                  <th scope="col">이름</th>
                  <th scope="col">성별</th>
                  <!-- <th scope="col">연락처</th> -->
                  <th scope="col">가입일시</th>
                </tr>
              </thead>
              <!-- 조회 데이터 생성 부분 -->
              <tbody>
                <tr v-for="(consultant, index) in consultants" :key="index">
                  <td>
                    <input type="checkbox" v-model="consultantIds" @click="select" :value="consultant.id"
                      style="cursor: pointer" />
                  </td>
                  <td @click="goToConsultantDetail(consultant.id)" style="cursor: pointer">{{ consultant.role }}</td>
                  <td v-if="!isMobile" @click="goToConsultantDetail(consultant.id)" style="cursor: pointer">{{
              consultant.email }}</td>
                  <td @click="goToConsultantDetail(consultant.id)" style="cursor: pointer">{{ consultant.name }}</td>
                  <td v-if="!isMobile" @click="goToConsultantDetail(consultant.id)" style="cursor: pointer">{{
              consultant.gender }}</td>
                  <!-- <td v-if="!isMobile" @click="goToConsultantDetail(consultant.id)">{{ consultant.phoneNum }}</td> -->
                  <td @click="goToConsultantDetail(consultant.id)" style="cursor: pointer">{{
              consultant.formattedCreatedAt }}</td>
                </tr>
              </tbody>
            </table>


            <div class="d-flex flex-column justify-content-center align-items-center w-100">
              <nav aria-label="Page navigation">
                <ul class="pagination" style="margin-bottom:0;">
                  <li class="page-item" v-for="page in pages" :key="page" :class="{ active: currentPage === page }">
                    <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
                  </li>
                </ul>
              </nav>
              <div class="d-flex justify-content-end w-100">
                <div>
                  <!-- <router-link to="/admin/consultantAdd" type="button" class="btn btn-primary btn-sm but">
                    추가
                  </router-link> -->
                  <button type="button" class="btn btn-secondary btn-sm but" @click="consultantDelete()">
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
import jwtDecode from "jwt-decode";
import moment from "moment";
/* eslint-disable */
export default {
  name: "consultantList",
  components: {
    FooterCom,
  },
  data() {
    return {
      consultants: [],
      searchName: "",
      consultantIds: [], // 체크값 담아두기
      allSelected: "", // 전체체크값(ture, false)
      currentPage: 1, // 페이지번호
      count: 0,
      pageSize: 10,
      role: '',
      isMobile: false
    };
  },
  created() {
    this.isMobile = this.detectMobile(); // Initial check
    window.addEventListener('resize', this.handleResize);
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  computed: {
    // 전체 페이지 수 계산
    pages() {
      return Math.ceil(this.count / this.pageSize);
    },
  },
  methods: {
    goToConsultantDetail(id) {
      this.$router.push(`/admin/consultantDetail/${id}`);
    },
    detectMobile() {
      return window.innerWidth <= 768; // Adjust the width according to your needs
    },
    handleResize() {
      this.isMobile = this.detectMobile(); // Update on resize
    },
    changePage(page) {
      this.currentPage = page;
    },
    getUserToken() {
      const tokenData = localStorage.getItem("user");
      const parsedToken = JSON.parse(tokenData);
      const accessToken = parsedToken.accessToken;
      const decodedToken = jwtDecode(accessToken);
      return decodedToken;
    },
    getRequestParams(searchName, page, pageSize) {
      let params = {};

      // searchTitle 값이 있으면 params객체에 title로 저장
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
    // 모든 컨설턴트 회원 조회 서비스 호출
    async retrieveConsultants() {
      var data = {
        affiliationGroup: this.getUserToken().affiliationGroup,
        role: '/g-consultant',
        page: this.currentPage,
        pageSize: this.pageSize
      }
      try {
        const response = this.getUserToken().role == 'admin'
          ? await UserDataService.getUserListByAdmin(this.getUserToken().id, data)
          : await UserDataService.getUserListBySupervisor(this.getUserToken().id, data);
        console.log('response.data', response.data);
        this.consultants = response.data.data;
        this.consultants.map((consultant) => {
          consultant.formattedCreatedAt = moment(consultant.createdAt).format('YYYY-MM-DD');
          return consultant;
        })
        this.count = response.data.count; // 총건수
      }
      catch (e) {
        console.log('e', e);
      }
    },
    handlePageChange(value) {
      // 페이지번호 저장
      this.page = value;
      // 다시 데이터 조회
      this.retrieveConsultants();
    },
    async consultantDelete() {
      if (confirm("회원(들)을 삭제하시겠습니까?")) {
        try {
          for (let i = 0; i < this.consultantIds.length; i++) {
            await UserDataService.deleteUserById(this.consultantIds[i])
            if (!alert("삭제되었습니다.")) {
              this.retrieveConsultants();
            }
          }
        }
        catch (e) {
          alert(e.response.data.message);
          return false;
        }
      }
    },
    // 전체선택
    selectAll() {
      this.consultantIds = [];

      if (!this.allSelected) {
        for (let consultant in this.consultants) {
          this.consultantIds.push(this.consultants[consultant].id);
        }
      } else {
      }
    },
    // 채크된 값은 배열에 넣고 아니면 배열에서 빼기
    select(e) {
      this.allSelected = false;
      if (e.target.checked == false) {
        for (let i = 0; i < this.consultantIds.length; i++) {
          if (this.consultantIds[i] == e.target.value) {
            this.consultantIds.splice(i, 1);
          }
        }
      } else {
        this.consultantIds.push(e.target.value);
      }
    },
  },
  // 최초 화면이 로딩될때(뜰때) 실행되는 이벤트(모든 회원조회가 실행됨)
  mounted() {
    this.retrieveConsultants();
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
