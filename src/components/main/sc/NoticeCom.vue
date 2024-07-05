<template>
  <div class="container-fluid px-4 mb-5">
    <!-- 공지사항 목록 테이블 -->
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">번호</th>
          <th scope="col">카테고리</th>
          <th scope="col">제목</th>
          <th scope="col">파일첨부</th>
          <th scope="col">작성일</th>
        </tr>
      </thead>
      <tbody>
        <!-- v-for 디렉티브를 사용해 items 배열의 각 요소를 테이블의 행으로 렌더링 -->
        <tr v-for="item in paginatedItems" :key="item.id" @click.prevent="detailNotice(item.id)"
          style="cursor: pointer">
          <td style="align-items: center">{{ item.id }}</td>
          <td style="width: 200px; align-items: center">{{ item.category }}</td>
          <td style="width: 400px; text-align: center !important">
            {{ item.title }}
          </td>
          <td>{{ item.hasFile }}</td>
          <td>{{ formattedDate(item.created_at) }}</td>
        </tr>
      </tbody>
    </table>
    <!--    Todo : page 바 태그 추가 -->
    <div class="d-flex justify-content-center w-100 my-3 mx-auto">
      <!-- 페이지네이션 -->
      <nav aria-label="Page navigation w-25">
        <ul class="pagination">
          <!-- v-for 디렉티브를 사용해 pages 만큼 페이지 번호를 렌더링 -->
          <li class="page-item" v-for="page in pages" :key="page" :class="{ active: currentPage === page }">
            <a class="page-link" href="#" @click.prevent="currentPage = page">{{
          page
        }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
/*eslint-disable */
import ServCenterDataService from "@/services/main/ServCenterDataService";
export default {
  data() {
    return {
      selectedCategory: "", // 선택된 카테고리
      search: "", //검색어
      options: ["All", "Category1", "Category2", "Category3"], // 카테고리 옵션
      items: [
        {
          category: "",
          content: "",
          created_at: "",
          id: 0,
          nopath: null,
          title: "",
        },
      ],
      cateList: [
        {
          text: "1",
          value: "비즈니스모델 작성",
        },
        {
          text: "2",
          value: "사업계획서 전환",
        },
        {
          text: "3",
          value: "탈퇴",
        },
        {
          text: "4",
          value: "환불",
        },
        {
          text: "5",
          value: "결제",
        },
        {
          text: "6",
          value: "아이디 찾기",
        },
        {
          text: "7",
          value: "사업계획서 양식",
        },
        {
          text: "8",
          value: "컨설팅",
        },
        {
          text: "9",
          value: "기타",
        },
      ],
      currentPage: 1, // 현재 페이지
      perPage: 10, // 페이지당 표시되는 아이템 수
      rows: 10, // 전체 행 수
    };
  },
  computed: {
    // 전체 페이지 수 계산
    pages() {
      return Math.ceil(this.filteredItems.length / this.perPage);
    },
    paginatedItems() {
      // 현재 페이지에 해당하는 아이템만 반환
      const startIndex = (this.currentPage - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      return this.filteredItems.slice(startIndex, endIndex);
    },
    filteredItems() {
      // items 배열을 필터링하여 검색어와 선택된 카테고리에 해당하는 아이템만 반환
      return this.items.filter((item) => {
        return (
          item.title.toLowerCase().includes(this.search.toLowerCase()) &&
          (this.selectedCategory === "" ||
            item.category === this.selectedCategory)
        );
      });
    },
  },
  methods: {
    getAllNotice() {
      ServCenterDataService.getNoticeAll()
        .then((res) => {
          this.items = res.data;
        })
        .catch((error) => {
          console.log("Error occurred while fetching data: ", error);
        });
    },
    formattedDate(created_at) {
      let date = new Date(created_at);
      return `${date.getUTCFullYear()}-${("0" + (date.getUTCMonth() + 1)).slice(
        -2
      )}-${("0" + date.getUTCDate()).slice(-2)}`;
    },

    detailNotice(id) {
      this.$emit("data", { state: "nodetails", id: id });
      //router.push({ name: "nodetails", params: { id: item.id } });
    },
  },
  mounted() {
    this.getAllNotice();
  },
};
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 0 auto;
  height: 50vh;
  overflow-y: auto;
  position: relative;
  /* 추가 */
  top: 200px;
  /* 원하는 값으로 조정 */
}

table .thead-dark tr th {
  border-top: 2px solid #777;
  text-align: center;
  padding: 10px 0px;
  border-bottom: 1px solid #dfdfdf;
  background: #f5f5f5;
  font-size: 14px;
  color: #555;
}
</style>
