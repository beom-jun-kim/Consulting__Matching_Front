<template>
  <div id="layoutSidenav_content">
    <main>
      <div class="container-fluid px-4">
        <h1 class="mt-4">전체컨설팅결과보고서관리</h1>
        <ol class="breadcrumb mb-4">
          <li class="breadcrumb-item active"></li>
        </ol>
        <div class="card2 mb-4">
          <div class="card-header d-flex justify-content-between align-items-center">
            총 {{ rows }} 개
          </div>
          <div class="card-body d-flex flex-column align-items-center">
            <table class="table table-striped table-bordered">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">번호</th>
                  <th scope="col">차수</th>
                  <th scope="col">컨설턴트이름</th>
                  <th scope="col">신청자이름</th>
                  <th scope="col">컨설팅분야</th>
                  <th scope="col">아이템명</th>
                  <th scope="col">신청일시</th>
                  <th scope="col">컨설팅일시</th>
                </tr>
              </thead>
              <!-- 조회 데이터 생성 부분 -->
              <tbody>
                <tr v-for="(journal, index) in journals" :key="index">
                  <td style="cursor:pointer;" @click="goToJournalDetail(journal.id)">{{ index + 1 }}</td>
                  <td style="cursor:pointer;" @click="goToJournalDetail(journal.id)">{{ journal.degree }}</td>
                  <td style="cursor:pointer;" @click="goToJournalDetail(journal.id)">{{ journal.mentorName }}</td>
                  <td style="cursor:pointer;" @click="goToJournalDetail(journal.id)">{{ journal.menteeName }}</td>
                  <td style="cursor:pointer;" @click="goToJournalDetail(journal.id)">{{ journal.mentorArea }}</td>
                  <td style="cursor:pointer;" @click="goToJournalDetail(journal.id)">{{ journal.menteeItem }}</td>
                  <td style="cursor:pointer;" @click="goToJournalDetail(journal.id)">{{ journal.formattedCreatedAt }}</td>
                  <td style="cursor:pointer;" @click="goToJournalDetail(journal.id)">{{ journal.formattedPerformanceDate
                  }}
                  </td>
                </tr>
              </tbody>
            </table>

            <!--    Todo : page 바 태그 추가 -->
            <div class="d-flex flex-column justify-content-center align-items-center w-100">
              <!--위 가로 아래-->
              <!--      Todo : page bar 추가-->
              <nav aria-label="Page navigation">
                <ul class="pagination" style="margin-bottom:0;">
                  <!-- v-for 디렉티브를 사용해 pages 만큼 페이지 번호를 렌더링 -->
                  <li class="page-item" v-for="page in pages" :key="page" :class="{ active: currentPage === page }">
                    <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
                  </li>
                </ul>
              </nav>
              <div class="d-flex justify-content-end w-100">
                <div>
                  <router-link v-if="getUserToken().role == 'admin'" to="/admin/userAdd" type="button"
                    class="btn btn-primary btn-sm but">
                    추가
                  </router-link>
                  <button v-if="getUserToken().role == 'admin'" type="button" class="btn btn-secondary btn-sm but"
                    @click="deleteUserById()">
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
import ConsultDataService from "@/services/admin/ConsultDataService";
import FooterCom from "@/common/admin/FooterCom.vue";
import jwtDecode from "jwt-decode";
import moment from "moment";
/* eslint-disable */
export default {
  name: "journalList",
  components: {
    FooterCom,
  },
  data() {
    return {
      journals: [],
      selected: "",
      searchName: "",
      page: 10,
      rows: 0,
      currentPage: 1,
    };
  },
  computed: {
    // 전체 페이지 수 계산
    pages() {
      return Math.ceil(this.rows / this.page);
    },
  },
  methods: {
    goToJournalDetail(id) {
      this.$router.push(`/admin/journalDetail/${id}`);
    },
    getUserToken() {
      const tokenData = localStorage.getItem("user");
      const parsedToken = JSON.parse(tokenData);
      const accessToken = parsedToken.accessToken;
      const decodedToken = jwtDecode(accessToken);
      return decodedToken;
    },
    async changePage(page) {
      this.currentPage = page;
      await this.getConsultingJournalBySupervisor();
    },
    async getConsultingJournalBySupervisor() {
      try {
        let data = {
          id: this.getUserToken().id,
          currentPage: this.currentPage,
          page: this.page
        }
        const res = await ConsultDataService.getConsultingJournalBySupervisor(data);
        this.journals = res.data.data;
        this.rows = res.data.count;
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
  mounted() {
    this.getConsultingJournalBySupervisor();
  },
};
</script>

<style>
th,
td {
  text-align: center;
}

@import "../../../../public/css/admin/styles.css";
</style>
