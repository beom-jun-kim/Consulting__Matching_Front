<template>
  <div class="container-fluid px-4" style="margin-top:7rem;">
    <!-- <h1 class="mb-4">Bmds1 목록</h1> -->
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">번호</th>
          <th scope="col">제목</th>
          <th scope="col">작성일</th>
          <!-- <th scope="col">최근 수정일</th> -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="(bmds1, index) in pagedBmds1List" :key="index">
          <td style="width:50px;">{{ index + 1 }}</td>
          <td style="width:350px;" @click="testconsole(bmds1)">
            <router-link :to="`/main/bmds1/${bmds1._id}`">
              {{ bmds1.title }}
            </router-link>
          </td>
          <td style="width:80px;">{{ bmds1.formattedCreatedAt }}</td>
          <!-- <td>{{ bmds1.updatedAt }}</td> -->
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
            <a class="page-link" href="#" @click.prevent="currentPage = page">{{
              page
            }}</a>
          </li>
        </ul>
      </nav>
      <div class="d-flex justify-content-end">
        <div>
          <button @click="handleClick()" ref="memberLogin" type="button" class="btn btn-primary btn-sm but">
            추가
          </button>
        </div>
      </div>
    </div>
    <!--    Todo : page 바 끝-->
  </div>
</template>

<script>
/* eslint-disable  */
import BMDataService from "@/services/main/BMDataService";
import jwtDecode from "jwt-decode";
import moment from "moment";

export default {
  name: "bmds1List",
  data() {
    return {
      bmds1List: [
        {
          title: "",
          createdAt: "",
          //   updatedAt: "",
        },
      ],
      currentPage: 1, // 현재 페이지
      perPage: 10, // 페이지당 표시되는 아이템 수
      rows: 10, // 전체 행 수
      userId: 0,
    };
  },
  methods: {
    handleClick() { //mypage폴더로 상태값을 전달
      this.$emit('update:state', 'bmds1Add');
    },
    // 유저 아이디 받기
    getUserId() {
      const tokenData = localStorage.getItem("user");
      const parsedToken = JSON.parse(tokenData);
      const accessToken = parsedToken.accessToken;
      const decodedToken = jwtDecode(accessToken);
      const userId = decodedToken.id;
      this.userId = userId;
      return userId;
    },
    getBmList(userId) {
      BMDataService.getBmUser(userId)
        .then((response) => {
          this.bmds1List = response.data;

          // createdAt 날짜 포맷 변경
          this.bmds1List.forEach((bmds1) => {
            bmds1.formattedCreatedAt = moment(bmds1.createdAt).format(
              "YYYY-MM-DD"
            );
          });
        })
        .catch((e) => {
          alert(e);
        });
    },
  },
  computed: {
    // 전체 페이지 수 계산
    pages() {
      return Math.ceil(this.bmds1List.length / this.perPage);
    },
    // 현재 페이지에 따른 항목 계산
    pagedBmds1List() {
      let start = (this.currentPage - 1) * this.perPage;
      let end = start + this.perPage;
      return this.bmds1List.slice(start, end);
    },
  },
  mounted() {
    this.getBmList(this.getUserId());
  },
};
</script>

<style scoped>
.table {
  width: 100%;
  margin-top: 20px;
}

.container {
  margin-bottom: 50px;
}
</style>
