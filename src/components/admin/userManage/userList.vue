<template>
  <div id="layoutSidenav_content" class="preR">
    <main>
      <div class="container-fluid px-4">
        <h1 class="mt-4">일반회원</h1>
        <ol class="breadcrumb mb-4">
          <li class="breadcrumb-item active"></li>
        </ol>
        <div class="card2 mb-4">
          <div class="card-header d-flex justify-content-between align-items-center">
            총 {{ pageNum }} 명
            <form class="form-inline ms-auto me-0 me-md-3 my-2 my-md-0 d-flex" style="float: right">
              <!-- 카테고리 선택 드롭다운 -->
              <div v-if="getUserToken().role == 'admin'" class="input-group">
                <select v-model="selectedCategory" class="form-control" @click="getUserListByAdmin">
                  <option value="">회원권한을 선택하세요</option>
                  <option v-for="role in roles" :key="role.key" :value="role.key">
                    {{ role.value }}
                  </option>
                </select>
              </div>
              <!-- <div class="input-group">
                <input type="text" class="form-control" placeholder="이름을 검색하세요" v-model="search" />
              </div> -->
            </form>
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
                  <th scope="col" v-if="!isMobile">이메일</th>
                  <th scope="col">이름</th>
                  <th scope="col" v-if="!isMobile">성별</th>
                  <!-- <th scope="col" v-if="!isMobile">이력서 여부</th> -->
                  <!-- <th scope="col" v-if="!isMobile">연락처</th> -->
                  <th scope="col">가입일시</th>
                </tr>
              </thead>
              <!-- 조회 데이터 생성 부분 -->
              <tbody>
                <tr v-for="(user, index) in users" :key="index">
                  <td>
                    <input type="checkbox" v-model="userIds" @click="select" :value="user.id" style="cursor: pointer" />
                  </td>
                  <td @click="goToUserDetail(user.id)" style="cursor: pointer">{{ user.role }}</td>
                  <td v-if="!isMobile" @click="goToUserDetail(user.id)" style="cursor: pointer">{{ user.email }}</td>
                  <td @click="goToUserDetail(user.id)" style="cursor: pointer">{{ user.name }}</td>
                  <td v-if="!isMobile" @click="goToUserDetail(user.id)" style="cursor: pointer">{{ user.gender }}</td>
                  <!-- <td v-if="!isMobile" @click="goToUserDetail(user.id)">{{ user.resume ? "O" : "" }}</td> -->
                  <!-- <td v-if="!isMobile" @click="goToUserDetail(user.id)">{{ user.phoneNum }}</td> -->
                  <td @click="goToUserDetail(user.id)" style="cursor: pointer">{{ user.formattedCreatedAt }}</td>
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
                  <button type="button" class="btn btn-secondary btn-sm but" @click="deleteUserById()">
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
  name: "userList",
  components: {
    FooterCom,
  },
  data() {
    return {
      users: [],
      selectedCategory: "", // 선택된 카테고리
      search: "",
      userIds: [], // 체크값 담아두기
      allSelected: "", // 전체체크값(ture, false)
      currentPage: 1, // 현재 페이지
      perPage: 10, // 페이지당 표시되는 아이템 수
      pageNum: 0, // 페이지수
      password: "",
      resume2: "", //이력서 여부
      isMobile: false,
      roles: [
        {
          key: 'supervisor',
          value: '수퍼바이저'
        },
        {
          key: 'common',
          value: '일반유저'
        }
      ]
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
      return Math.ceil(this.pageNum / this.perPage);
    },
    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      return this.filteredItems.slice(startIndex, endIndex);
    },
    filteredItems() {
      // items 배열을 필터링하여 검색어와 선택된 카테고리에 해당하는 아이템만 반환
      return this.users.filter((user) => {
        return (
          user.name.toLowerCase().includes(this.search.toLowerCase()) &&
          (this.selectedCategory === "" || user.role === this.selectedCategory) &&
          (this.currentPage)
        );
      });
    },
  },
  methods: {
    goToUserDetail(id) {
      this.$router.push(`/admin/userDetail/${id}`);
    },
    detectMobile() {
      return window.innerWidth <= 768; // Adjust the width according to your needs
    },
    handleResize() {
      this.isMobile = this.detectMobile(); // Update on resize
    },
    async changePage(page) {
      this.currentPage = page;
      await this.getUserListByAdmin()
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
          page: this.currentPage,
          pageSize: this.perPage
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
    async deleteUserById() {
      if (confirm("회원(들)을 삭제하시겠습니까?")) {
        try {
          for (let i = 0; i < this.userIds.length; i++) {
            await UserDataService.deleteUserById(this.userIds[i])
          }
          if (!alert("삭제되었습니다.")) {
            await this.getUserListByAdmin();
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
      this.userIds = [];

      if (!this.allSelected) {
        for (let user in this.users) {
          this.userIds.push(this.users[user].id);
        }
      } else {
      }
    },
    // 채크된 값은 배열에 넣고 아니면 배열에서 빼기
    select(e) {
      this.allSelected = false;
      if (e.target.checked == false) {
        for (let i = 0; i < this.userIds.length; i++) {
          if (this.userIds[i] == e.target.value) {
            this.userIds.splice(i, 1);
          }
        }
      } else {
        this.userIds.push(e.target.value);
      }
    },
  },
  // 최초 화면이 로딩될때(뜰때) 실행되는 이벤트(모든 회원조회가 실행됨)
  async mounted() {
    await this.getUserListByAdmin();
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
