<template>
  <div id="layoutSidenav_content" class="preR">
    <main>
      <div class="container-fluid px-4">
        <h1 class="mt-4">Dashboard</h1>
        <ol class="breadcrumb mb-4">
          <li class="breadcrumb-item active">Dashboard</li>
        </ol>
        <div class="row">
          <div class="col-xl-4 col-md-6">
            <div class="card2 mb-4">
              <div class="card-body d-flex justify-content-between align-items-center">
                <div>일반회원</div>
                <div>총 {{ pageNum }}명</div>
              </div>
              <div class="card-footer d-flex align-items-center justify-content-between">
                <router-link class="small text-black stretched-link" to="/admin/userList">일반회원관리</router-link>
                <div class="small text-black"><i class="fas fa-angle-right"></i></div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-6">
            <div class="card2 mb-4">
              <div class="card-body d-flex justify-content-between align-items-center">
                <div>컨설턴트회원</div>
                <div>총 {{ count }}명</div>
              </div>
              <div class="card-footer d-flex align-items-center justify-content-between">
                <router-link class="small text-black stretched-link" to="/admin/consultantList">컨설턴트회원관리</router-link>
                <div class="small text-black"><i class="fas fa-angle-right"></i></div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-6">
            <div class="card2 mb-4">
              <div class="card-body d-flex justify-content-between align-items-center">
                <div>비즈니스모델</div>
                <div>총 {{ rows }}개</div>
              </div>
              <div class="card-footer d-flex align-items-center justify-content-between">
                <router-link class="small text-black stretched-link" to="/admin/BMList">비즈니스모델관리</router-link>
                <div class="small text-black"><i class="fas fa-angle-right"></i></div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-6 col-md-6">
            <div class="card2 mb-4">
              <div class="card-body d-flex justify-content-between align-items-center">
                <div>멘토링매칭</div>
                <div>총 {{ count2 }}개</div>
              </div>
              <div class="card-footer d-flex align-items-center justify-content-between">
                <router-link class="small text-black stretched-link" to="/admin/matchingList">멘토링매칭관리</router-link>
                <div class="small text-black"><i class="fas fa-angle-right"></i></div>
              </div>
            </div>
          </div>
          <div class="col-xl-6 col-md-6">
            <div class="card2 mb-4">
              <div class="card-body d-flex justify-content-between align-items-center">
                <div>멘토링결과보고서</div>
                <div>총 {{ rows2 }}개</div>
              </div>
              <div class="card-footer d-flex align-items-center justify-content-between">
                <router-link class="small text-black stretched-link" to="/admin/journalList">멘토링결과보고서관리</router-link>
                <div class="small text-black"><i class="fas fa-angle-right"></i></div>
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
import UserDataService from "@/services/admin/UserDataService";
import ConsultDataService from "@/services/admin/ConsultDataService";
import FooterCom from "@/common/admin/FooterCom.vue";
import jwtDecode from "jwt-decode";
import moment from "moment";
/* eslint-disable */
export default {
  name: "userList",
  components: {
    FooterCom,
  },
  data() {
    return {
      users: [],
      pageNum: 0,
      count: 0,
      count2: 0,
      rows: 0,
      rows2: 0,
      isMobile: false,
    };
  },
  created() {
    this.isMobile = this.detectMobile(); // Initial check
    window.addEventListener('resize', this.handleResize);
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    detectMobile() {
      return window.innerWidth <= 768; // Adjust the width according to your needs
    },
    getUserToken() {
      const tokenData = localStorage.getItem("user");
      const parsedToken = JSON.parse(tokenData);
      const accessToken = parsedToken.accessToken;
      const decodedToken = jwtDecode(accessToken);
      return decodedToken;
    },
    // 모든 회원 조회 서비스 호출
    async getUserListByAdmin() {
      try {
        var data = {
          affiliationGroup: this.getUserToken().affiliationGroup,
          role: '/common',
          page: 1,
          pageSize: 10
        }
        const response = this.getUserToken().role == 'admin'
          ? await UserDataService.getUserListByAdmin(this.getUserToken().id, data)
          : await UserDataService.getUserListBySupervisor(this.getUserToken().id, data);
        this.users = response.data.data;
        this.users.map((user) => {
          user.formattedCreatedAt = moment(user.createdAt).format('YYYY-MM-DD');
          return user;
        })
        this.pageNum = response.data.count;
      }
      catch (e) {
        console.log("Error: ", e.response.data.message);
      }
    },
    // 모든 컨설턴트 회원 조회 서비스 호출
    async retrieveConsultants() {
      var data = {
        affiliationGroup: this.getUserToken().affiliationGroup,
        role: '/g-consultant',
        page: 1,
        pageSize: 10
      }
      try {
        const response = this.getUserToken().role == 'admin'
          ? await UserDataService.getUserListByAdmin(this.getUserToken().id, data)
          : await UserDataService.getUserListBySupervisor(this.getUserToken().id, data);
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
    async retrieveBMs() {
      try {
        var data = {
          id: this.getUserToken().id,
          page: 1,
          pageSize: 10
        }
        const res = await UserDataService.getSupervisorList(data);
        this.BMs = res.data.data;
        this.rows = res.data.count;
        this.BMs.map((bm) => {
          bm.formattedCreatedAt = moment(bm.createdAt).format('YYYY-MM-DD');
          return bm;
        })
      }
      catch (e) {
        alert(e.response.data.message);
      }

    },
    async getAllMatch() {
      var data = {
        id: this.getUserToken().id,
        page: 1,
        pageSize: 10
      }
      try {
        const response = this.getUserToken().role == 'admin'
          ? await UserDataService.getAllMatchAdmin(data)
          : await UserDataService.getAllMatchSupervisor(data);
        const matches = response.data;
        console.log('matches', matches)
        this.matches = matches; // 객체
        this.count2 = matches.length; // 총건수
        this.matches.forEach((match) => {
          match.formattedCreatedAt = moment(match.createdAt).format(
            "YYYY-MM-DD HH:mm:ss"
          );
          match.formattedEndDate = moment(match.endDate).format(
            "YYYY-MM-DD HH:mm:ss"
          );
          match.formattedMatchedDate = moment(match.matchedDate).format(
            "YYYY-MM-DD HH:mm:ss"
          );
        });
      }
      catch (e) {
        console.log('e', e);
      }
    },
    async getConsultingJournalBySupervisor() {
      try {
        let data = {
          id: this.getUserToken().id,
          currentPage: 1,
          page: 10
        }
        const res = await ConsultDataService.getConsultingJournalBySupervisor(data);
        this.journals = res.data.data;
        console.log('this.journals', this.journals);
        this.rows2 = res.data.count;
        this.journals.map((journal) => {
          journal.formattedCreatedAt = moment(journal.createdAt).format('YYYY-MM-DD hh:mm:ss');
          journal.formattedPerformanceDate = moment(journal.performanceDate).format('YYYY-MM-DD hh:mm:ss');
          return journal;
        })
      }
      catch (e) {
        console.log(e.message);
      }
    },
  },
  // 최초 화면이 로딩될때(뜰때) 실행되는 이벤트(모든 회원조회가 실행됨)
  async mounted() {
    await this.getUserListByAdmin();
    await this.retrieveConsultants();
    await this.retrieveBMs();
    await this.getAllMatch();
    await this.getConsultingJournalBySupervisor();
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
  width: 1.5rem;
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
