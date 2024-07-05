<template>
  <div id="layoutSidenav_content" class="preR">
    <main>
      <div class="container-fluid px-4">
        <h1 class="mt-4">문의관리</h1>
        <ol class="breadcrumb mb-4">
          <li class="breadcrumb-item active"></li>
        </ol>
        <div class="card2 mb-4">
          <div class="card-header">
            <form class="form-inline ms-auto me-0 me-md-3 my-2 my-md-0 d-flex" style="float: right">
              <!-- 카테고리 선택 드롭다운 -->
              <div class="input-group">
                <select v-model="selectedCategory" class="form-control">
                  <option value="">카테고리를 선택하세요</option>
                  <option v-for="QnA in QnAs" :key="QnA.id" :value="QnA.category">
                    {{ QnA.category }}
                  </option>
                </select>
              </div>
              <div class="input-group">
                <!-- 회원관리 검색 바 -->
                <input type="text" class="form-control" placeholder="제목을 검색하세요" v-model="search" />
              </div>
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
                  <th scope="col">카테고리</th>
                  <th scope="col">질문</th>
                  <th scope="col">답변여부</th>
                  <th scope="col">작성자</th>
                  <th scope="col">작성일</th>
                  <!-- <th scope="col">조회수</th> -->
                </tr>
              </thead>
              <!-- 조회 데이터 생성 부분 -->
              <tbody>
                <tr v-for="(QnA, index) in filteredItems" :key="index">
                  <td>
                    <input type="checkbox" v-model="QnAIds" @click="select" :value="QnA.id" />
                  </td>
                  <td style="width: 180px">{{ QnA.category }}</td>
                  <td style="width: 600px">
                    <div class="d-flex">
                      <router-link :to="'/admin/QnADetail/' + QnA.id">
                        {{ QnA.question }}
                      </router-link>
                    </div>
                  </td>
                  <td>
                    <div v-if="QnA.answer">
                      <i class="fa-solid fa-check-to-slot"></i>
                    </div>
                  </td>
                  <td>{{ QnA.writer }}</td>
                  <td>{{ QnA.formattedCreatedAt }}</td>
                  <!-- <td>{{ QnA.hit }}</td> -->
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
                    <a class="page-link" href="#" @click.prevent="currentPage = page">{{ page }}</a>
                  </li>
                </ul>
              </nav>
              <div class="d-flex justify-content-end">
                <div>
                  <router-link to="/admin/QnAAdd" type="button" class="btn btn-primary btn-sm but">
                    추가
                  </router-link>
                  <button type="button" class="btn btn-secondary btn-sm but" @click="QnADelete()">
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
import ServCenterDataService from "@/services/admin/ServCenterDataService";
import FooterCom from "@/common/admin/FooterCom.vue";
import moment from "moment";
/* eslint-disable */
export default {
  name: "QnAList",
  components: {
    FooterCom,
  },
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
      return Math.ceil(this.rows / this.perPage);
    },
    filteredItems() {
      // items 배열을 필터링하여 검색어와 선택된 카테고리에 해당하는 아이템만 반환
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
    // 모든 회원 조회 서비스 호출
    retrieveQnAs() {
      // axios로 spring에 모든 회원 조회 요청
      ServCenterDataService.getQnAAll()
        // 성공하면 then으로 서버 데이터(response.data)가 들어옴
        .then((response) => {
          this.QnAs = response.data;
          // createdAt 날짜 포맷 변경
          this.QnAs.forEach((QnA) => {
            QnA.formattedCreatedAt = moment(QnA.created_at).format(
              "YYYY-MM-DD"
            );
          });
        })
        // 실패하면 catch로 에러메세지가 들어옴
        .catch((e) => {
          alert(e);
        });
    },
    QnADelete() {
      if (confirm("QnA(들)을 삭제하시겠습니까?")) {
        for (let i = 0; i < this.QnAIds.length; i++) {
          ServCenterDataService.deleteQnA(this.QnAIds[i])
            .then(() => {
              if (!alert("삭제되었습니다.")) {
                this.retrieveQnAs();
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
      this.QnAIds = [];

      if (!this.allSelected) {
        for (let QnA in this.QnAs) {
          this.QnAIds.push(this.QnAs[QnA].id);
        }
      } else {
      }
    },
    // 채크된 값은 배열에 넣고 아니면 배열에서 빼기
    select(e) {
      this.allSelected = false;
      if (e.target.checked == false) {
        for (let i = 0; i < this.QnAIds.length; i++) {
          if (this.QnAIds[i] == e.target.value) {
            this.QnAIds.splice(i, 1);
          }
        }
      } else {
        this.QnAIds.push(e.target.value);
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

@import url('/public/css/admin/styles.css');
</style>
