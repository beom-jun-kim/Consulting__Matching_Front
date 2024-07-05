<template>
  <div id="layoutSidenav_content" class="preR">
    <main>
      <div class="container-fluid px-4">
        <h1 class="mt-4">비즈니스모델관리</h1>
        <ol class="breadcrumb mb-4">
          <li class="breadcrumb-item active"></li>
        </ol>
        <div class="card2 mb-4">
          <div class="card-header d-flex justify-content-between align-items-center">
            총 {{ rows }} 개
            <form class="form-inline ms-auto me-0 me-md-3 my-2 my-md-0 d-flex" style="float: right">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="이름을 검색하세요" v-model="search" />
              </div>
            </form>
          </div>
          <div class="card-body d-flex flex-column align-items-center">
            <table class="table table-striped table-bordered">
              <thead class="thead-dark">
                <tr>
                  <th v-if="getUserToken().role == 'admin'" scope="col" class="checkbox-container">
                    <label class="allCheck" style="cursor: pointer">
                      <input type="checkbox" @click="selectAll" v-model="allSelected" />
                      <div class="selectAll"><i class="fa fa-check"></i></div>
                    </label>
                  </th>
                  <th v-else>번호</th>
                  <th scope="col">이름</th>
                  <th scope="col">이메일</th>
                  <th scope="col">제목</th>
                  <th scope="col">가입일시</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(BM, index) in BMs" :key="index">
                  <td v-if="getUserToken().role == 'admin'">
                    <input type="checkbox" v-model="BMIds" @click="select" :value="BM.id" style="cursor: pointer" />
                  </td>
                  <td v-else>
                    {{ index + 1 }}
                  </td>
                  <td @click="goToBMDetail(BM.id)" style="cursor: pointer">{{ BM.user.name }}</td>
                  <td @click="goToBMDetail(BM.id)" style="cursor: pointer">{{ BM.user.email }}</td>
                  <td @click="goToBMDetail(BM.id)" style="cursor: pointer">{{ BM.title }}</td>
                  <td @click="goToBMDetail(BM.id)" style="cursor: pointer">{{ BM.formattedCreatedAt }}</td>
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
              <div v-if="getUserToken().role == 'admin'" class="d-flex justify-content-end w-100">
                <div>
                  <button type="button" class="btn btn-secondary btn-sm but" @click="deleteBM()">
                    삭제
                  </button>
                </div>
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
import FooterCom from "@/common/admin/FooterCom.vue";
import jwtDecode from "jwt-decode";
import moment from "moment";
/* eslint-disable */
export default {
  name: "BMList",
  components: {
    FooterCom,
  },
  data() {
    return {
      // BMs:[],
      BMs: [],
      searchName: "",
      search: "",
      BMIds: [], // 체크값 담아두기
      allSelected: "", // 전체체크값(ture, false)
      currentPage: 1, // 현재 페이지
      perPage: 10, // 페이지당 표시되는 아이템 수
      rows: 0, // 전체 행 수
    };
  },
  computed: {
    // 전체 페이지 수 계산
    pages() {
      return Math.ceil(this.rows / this.perPage);
    },
    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      return this.filteredItems.slice(startIndex, endIndex);
    },
    filteredItems() {
      // items 배열을 필터링하여 검색어와 선택된 카테고리에 해당하는 아이템만 반환
      return this.BMs.filter((BM) => {
        return (
          BM.user.name.toLowerCase().includes(this.search.toLowerCase())
        );
      });
    },
  },
  methods: {
    goToBMDetail(id) {
      this.$router.push(`/admin/BMDetail/${id}`);
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
      await this.retrieveBMs();
    },
    async retrieveBMs() {
      try {
        var data = {
          id: this.getUserToken().id,
          page: this.currentPage,
          pageSize: this.perPage
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
    deleteBM() {
      if (confirm("회원(들)을 삭제하시겠습니까?")) {
        for (let i = 0; i < this.BMIds.length; i++) {
          BMDataService.deleteBM(this.BMIds[i])
            .then((res) => {
              if (!alert("삭제되었습니다.")) {
                this.retrieveUsers();
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
      this.BMIds = [];

      if (!this.allSelected) {
        for (let BM in this.BMs) {
          this.BMIds.push(this.BMs[BM].id);
        }
      } else {
      }
    },
    // 채크된 값은 배열에 넣고 아니면 배열에서 빼기
    select(e) {
      this.allSelected = false;
      if (e.target.checked == false) {
        for (let i = 0; i < this.BMIds.length; i++) {
          if (this.BMIds[i] == e.target.value) {
            this.BMIds.splice(i, 1);
          }
        }
      } else {
        this.BMIds.push(e.target.value);
      }
    },
  },
  // 최초 화면이 로딩될때(뜰때) 실행되는 이벤트(모든 BM조회가 실행됨)
  mounted() {
    this.retrieveBMs();
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