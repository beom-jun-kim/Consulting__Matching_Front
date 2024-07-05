<template>
  <div class="container-fluid px-4 mb-5">
    <form class="form-inline ms-auto me-0 my-3 d-flex justify-content-between" style="float: right">
      <!-- 카테고리 선택 드롭다운 -->
      <div class="input-group mx-3">
        <select v-model="selectedCategory" class="form-control">
          <option value="">카테고리를 선택하세요</option>
          <option v-for="QnA in cateList" :key="QnA.id" :value="QnA.value">
            {{ QnA.value }}
          </option>
        </select>
      </div>
      <div class="input-group">
        <!-- 회원관리 검색 바 -->
        <input type="text" class="form-control" placeholder="제목을 검색하세요" v-model="search" />
      </div>
    </form>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">번호</th>
          <th scope="col">카테고리</th>
          <th scope="col">질문</th>
          <th scope="col">답변여부</th>
          <th scope="col">작성자</th>
          <th scope="col">작성일</th>
        </tr>
      </thead>
      <!-- 조회 데이터 생성 부분 -->
      <tbody>
        <tr v-for="(QnA, index) in paginatedItems" :key="index" @click="detail(QnA.id)" style="cursor: pointer">
          <td style="align-items: center">{{ index + 1 }}</td>
          <td style="width: 180px; align-items: center">{{ QnA.category }}</td>
          <td style="width: 400px; align-items: center">
            <div style="align-items: center" v-html="QnA.question" />
          </td>
          <td>
            <div v-if="QnA.answer">
              <i class="fa-solid fa-check-to-slot"></i>
            </div>
          </td>
          <td>{{ QnA.writer }}</td>
          <td>{{ QnA.formattedCreatedAt }}</td>
        </tr>
      </tbody>
    </table>
    <!--    Todo : page 바 태그 추가 -->
    <div class="d-flex justify-content-center my-3 mx-auto w-100">
      <!--위 가로 아래-->
      <!--      Todo : page bar 추가-->
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
    <div class="d-flex justify-content-end">
      <button @click="handleClick()" ref="memberLogin" type="button" class="btn btn-primary btn-sm but">
        문의하기
      </button>
    </div>
    <!--    Todo : page 바 끝-->
  </div>
</template>

<script>
import ServCenterDataService from "@/services/main/ServCenterDataService";
import moment from "moment";
/* eslint-disable */
export default {
  name: "QnAList",
  props: ["state"],
  data() {
    return {
      selected: "",
      QnAs: [],
      selectedCategory: "", // 선택된 카테고리
      search: "",
      QnAIds: [], // 체크값 담아두기
      allSelected: "", // 전체체크값(ture, false)
      currentPage: 1, // 현재 페이지
      perPage: 10, // 페이지당 표시되는 아이템 수
      rows: 20, // 전체 행 수
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
    };
  },
  computed: {
    // 전체 페이지 수 계산
    pages() {
      return Math.ceil(this.pagedQnaList.length / this.perPage);
    },
    paginatedItems() {
      // 현재 페이지에 해당하는 아이템만 반환
      const startIndex = (this.currentPage - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      return this.pagedQnaList.slice(startIndex, endIndex);
    },
    // 현재 페이지에 따른 항목 계산
    pagedQnaList() {
      return this.QnAs.filter((QnA) => {
        return (
          QnA.question.toLowerCase().includes(this.search.toLowerCase()) &&
          (this.selectedCategory === "" ||
            QnA.category === this.selectedCategory)
        );
      });
    },
  },
  methods: {
    detail(id) {
      this.$emit("data", { state: "qnaDetail", id: id });
    },
    handleClick() {
      this.$emit("update:state", "qnaAdd");
    },
    async retrieveQnAs() {
      try {
        const response = await ServCenterDataService.getQnAAll();
        this.QnAs = response.data;
        this.QnAs.forEach((QnA) => {
          QnA.formattedCreatedAt = moment(QnA.created_at).format(
            "YYYY-MM-DD"
          );
        })
      }
      catch (e) {
        console.log(e.response.data.message);
      }

    },
  },
  // 최초 화면이 로딩될때(뜰때) 실행되는 이벤트(모든 회원조회가 실행됨)
  mounted() {
    this.retrieveQnAs();
  },
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
