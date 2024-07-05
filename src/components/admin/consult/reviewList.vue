<template>
  <div id="layoutSidenav_content">
    <main>
      <div class="container-fluid px-4">
        <h1 class="mt-4">컨설팅후기</h1>
        <ol class="breadcrumb mb-4">
          <li class="breadcrumb-item active"></li>
        </ol>
        <div class="card2 mb-4">
          <div class="card-header">
            총 {{ count }} 개 후기
            <!-- <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0" style="float: right">
              <div class="input-group">
                <input class="form-control" type="text" placeholder="검색어를 입력해 주세요!" aria-label="Search for..."
                  aria-describedby="btnNavbarSearch" />
                <button class="btn btn-primary" id="btnNavbarSearch" type="button" @click="
                  page = 1;
                getReviews();
                ">
                  <i class="fas fa-search"></i>
                </button>
              </div>
            </form> -->
          </div>
          <div class="card-body d-flex flex-column align-items-center">
            <table class="table table-striped table-bordered">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">신청자이름</th>
                  <th scope="col">컨설턴트이름</th>
                  <th scope="col">모델명</th>
                  <th scope="col">작성일시</th>
                </tr>
              </thead>
              <!-- 조회 데이터 생성 부분 -->
              <tbody>
                <tr v-for="(review, index) in reviews" :key="index">
                  <td>{{ review.userName }}</td>
                  <td>{{ review.reviewName }}</td>
                  <td>{{ review.proName }}</td>
                  <td>{{ review.insertTime }}</td>
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
            </div>
          </div>
        </div>
      </div>

    </main>
    <FooterCom />
  </div>
</template>

<script>
import ConsultDataService from "@/services/admin/ConsultDataService";
import jwtDecode from "jwt-decode";
// import moment from "moment";
import FooterCom from "@/common/admin/FooterCom.vue";
/* eslint-disable */
export default {
  name: "reviewList",
  components: {
    FooterCom,
  },
  data() {
    return {
      reviews: [],
      searchName: "",
      currentPage: 1,
      count: 0,
      pageSize: 10,
    };
  },
  computed: {
    // 전체 페이지 수 계산
    pages() {
      return Math.ceil(this.count / this.pageSize);
    },
  },
  methods: {
    goToDetail(matchId) {
      // matchId를 사용하여 디테일 페이지의 경로를 생성하고 이동
      this.$router.push(`/admin/matchingDetail/${matchId}`);
    },
    changePage(page) {
      this.currentPage = page;
      this.getAllMatch();
    },
    getUserToken() {
      const tokenData = localStorage.getItem("user");
      const parsedToken = JSON.parse(tokenData);
      const accessToken = parsedToken.accessToken;
      const decodedToken = jwtDecode(accessToken);
      return decodedToken;
    },
    getReviews() {
      ConsultDataService.getReviewAll(params)
        .then((response) => {
          const { reviews, totalItems } = response.data;
          this.reviews = reviews; // 객체
          this.count = totalItems; // 총건수

        })
        .catch((e) => {
          alert(e);
        });
    },
    handlePageChange(value) {
      this.page = value;
      this.getReviews();
    },
  },
  // 최초 화면이 로딩될때(뜰때) 실행되는 이벤트(모든 회원조회가 실행됨)
  /* mounted() {
            this.getReviews();
        },*/
};
</script>

<style>
th,
td {
  text-align: center;
}

@import "../../../../public/css/admin/styles.css";
</style>
