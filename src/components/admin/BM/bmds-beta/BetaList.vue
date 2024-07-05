<template>
  <div id="layoutSidenav_content" class="preR">
    <main>
      <div class="container-fluid px-4">
        <h1 class="mt-4">비즈니스모델관리</h1>
        <ol class="breadcrumb mb-4">
          <li class="breadcrumb-item active"></li>
        </ol>
        <div class="card2 mb-4">
          <div class="card-header">
            <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0" style="float: right">
              <div class="input-group">
                <input class="form-control" type="text" placeholder="검색어를 입력해 주세요!" aria-label="Search for..."
                  aria-describedby="btnNavbarSearch" />
                <button class="btn btn-primary" id="btnNavbarSearch" type="button" @click="
                  page = 1;
                retrieveBMs();
                ">
                  <i class="fas fa-search"></i>
                </button>
              </div>
            </form>
          </div>
          <div class="card-body d-flex flex-column align-items-center">
            <table class="table table-striped table-bordered">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Index</th>
                  <th scope="col">프로젝트명</th>
                  <th scope="col">카테고리</th>
                  <th scope="col">작성자</th>
                  <th scope="col">작성자 ID</th>
                  <!-- <th scope="col">진행율</th> -->
                </tr>
              </thead>
              <!-- 조회 데이터 생성 부분 -->
              <tbody>
                <tr v-for="(Beta, index) in Betas" :key="index">
                  <td>{{ Beta.id }}</td>
                  <td>
                    <a href="/admin/BMDetail">
                      {{ Beta.title }}
                    </a>
                  </td>
                  <td>{{ Beta.category }}</td>
                  <td>
                    {{ Beta.user.name }}
                  </td>
                  <td>{{ Beta.userId }}</td>
                </tr>
              </tbody>
            </table>

            <!--    Todo : page 바 태그 추가 -->
            <div style="margin: 1rem auto 0">
              <!--위 가로 아래-->
              <!--      Todo : page bar 추가-->
              <b-pagination v-model="page" :total-rows="count" :per-page="pageSize" prev-text="<" next-text=">"
                @change="handlePageChange">
              </b-pagination>
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
import BetaService from "@/services/admin/BetaService";
import FooterCom from "@/common/admin/FooterCom.vue";
/* eslint-disable */
export default {
  name: "BetaList",
  components: {
    FooterCom,
  },
  data() {
    return {
      // BMs:[],
      Betas: [],
      searchName: "",
      page: 1, // 페이지번호
      count: 0,
      // pageSize : 한페이지당 건수
      pageSize: 10,
    };
  },
  methods: {
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
    getAllBetaBmds() {
      // const params = this.getRequestParams(
      //   this.searchName,
      //   this.page,
      //   this.pageSize
      // );
      BetaService.getAllBetaBmds()
        .then((response) => {
          // const { Betas, totalItems } = response.data;
          this.Betas = response.data;
          // this.consults = Betas;
          // this.count = totalItems;

        })
        // 실패하면 catch로 에러메세지가 들어옴
        .catch((e) => {
          alert(e);
        });
    },
    // handlePageChange(value) {
    //   this.page = value;
    //   this.retrieveBMs();
    // },
  },
  mounted() {
    this.getAllBetaBmds();
  },
};
</script>

<style>
th,
td {
  text-align: center;
}

@import url('/public/css/admin/styles.css');
</style>
