<template>
  <div id="layoutSidenav_content" class="preR">
    <main>
      <div class="container-fluid px-4">
        <h1 class="mt-4">비즈니스모델샘플관리</h1>
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
                retrieveBMSamples();
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
                  <th scope="col" class="checkbox-container">
                    <label class="allCheck" style="cursor: pointer">
                      <input type="checkbox" @click="selectAll" v-model="allSelected" />
                      <div class="selectAll"><i class="fa fa-check"></i></div>
                    </label>
                  </th>
                  <th scope="col">아이디</th>
                  <th scope="col">이름</th>
                  <th scope="col">프로젝트타입</th>
                  <th scope="col">프로젝트명</th>
                  <th scope="col">생성일시</th>
                  <th scope="col">진행율</th>
                </tr>
              </thead>
              <!-- 조회 데이터 생성 부분 -->
              <tbody>
                <tr v-for="(BMSample, index) in BMSamples" :key="index">
                  <td>
                    <input type="checkbox" v-model="BMSampleIds" @click="select" :value="BMSample.id" />
                  </td>
                  <td>{{ BMSample.email }}</td>
                  <td>{{ BMSample.name }}</td>
                  <td>{{ BMSample.proType }}</td>
                  <td>
                    <a href="/admin/BMSampleDetail">
                      {{ BMSample.proName }}
                    </a>
                  </td>
                  <td>{{ BMSample.insertTime }}</td>
                  <td>{{ BMSample.proRate }}</td>
                </tr>
              </tbody>
            </table>

            <!--    Todo : page 바 태그 추가 -->
            <div style="margin: 1rem auto 0; width: 100%">
              <!--위 가로 아래-->
              <!--      Todo : page bar 추가-->
              <div class="d-flex">
                <div style="margin: 0 30% 0 43%">
                  <b-pagination v-model="page" :total-rows="count" :per-page="pageSize" prev-text="<" next-text=">"
                    @change="handlePageChange">
                  </b-pagination>
                </div>
                <div>
                  <router-link to="/BMSampleAdd" type="button" class="btn btn-primary btn-sm but">
                    추가
                  </router-link>
                  <button type="button" class="btn btn-secondary btn-sm but" @click="BMSampleDelete()">
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
import FooterCom from "@/common/admin/FooterCom.vue";
import BMDataService from "@/services/admin/BMDataService";
/* eslint-disable */
export default {
  name: "betaBmdsSample",
  components: {
    FooterCom,
  },
  data() {
    return {
      // BMSamples: [],
      BMSamples: [
        {
          id: "1",
          email: "kevin@naver.com",
          name: "김창권",
          proType: "쇼핑몰형",
          proName: "신발쇼핑",
          insertTime: "2023/01/30 10:50:11",
          proRate: "0%",
        },
        {
          id: "2",
          email: "kevin@naver.com",
          name: "김이름",
          proType: "공유가치형",
          proName: "company build",
          insertTime: "2023/01/30 10:50:11",
          proRate: "5%",
        },
      ],
      searchName: "",
      BMSampleIds: [], // 체크값 담아두기
      allSelected: "", // 전체체크값(ture, false)
      page: 1, // 페이지번호
      count: 0,
      // pageSize : 한페이지당 건수
      pageSize: 10,
    };
  },
  methods: {
    getRequestParams(searchName, page, pageSize) {
      let params = {};

      // searchTitle 값이 있으면 params객체에 title로 저장
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
    // 모든 회원 조회 서비스 호출
    retrieveBMSamples() {
      const params = this.getRequestParams(
        this.searchName,
        this.page,
        this.pageSize
      );
      // axios로 spring에 모든 회원 조회 요청
      BMDataService.getBMSampleAll(params)
        // 성공하면 then으로 서버 데이터(response.data)가 들어옴
        .then((response) => {
          const { BMSamples, totalItems } = response.data;
          this.BMSamples = BMSamples; // 객체
          this.count = totalItems; // 총건수

        })
        // 실패하면 catch로 에러메세지가 들어옴
        .catch((e) => {
          alert(e);
        });
    },
    handlePageChange(value) {
      // 페이지번호 저장
      this.page = value;
      // 다시 데이터 조회
      this.retrieveBMSamples();
    },
    BMSampleDelete() {
      if (confirm("BM샘플(들)을 삭제하시겠습니까?")) {
        for (let i = 0; i < this.BMSampleIds.length; i++) {
          BMDataService.deleteBMSample(this.BMSampleIds[i])
            .then((res) => {
              if (!alert("삭제되었습니다.")) {
                this.retrieveBMSamples();
              }
            })
            .catch((e) => { });
        }
      }
    },
    // 전체선택
    selectAll() {
      this.BMSampleIds = [];

      if (!this.allSelected) {
        for (let BMSample in this.BMSamples) {
          this.BMSampleIds.push(this.BMSamples[BMSample].id);
        }
      } else {
        console.log(this.BMSampleIds);
      }
    },
    // 채크된 값은 배열에 넣고 아니면 배열에서 빼기
    select(e) {
      this.allSelected = false;
      if (e.target.checked == false) {
        for (let i = 0; i < this.BMSampleIds.length; i++) {
          if (this.BMSampleIds[i] == e.target.value) {
            this.BMSampleIds.splice(i, 1);
          }
        }
      } else {
        this.BMSampleIds.push(e.target.value);
      }
    },
  },
  // 최초 화면이 로딩될때(뜰때) 실행되는 이벤트(모든 회원조회가 실행됨)
  /* mounted() {
            this.retrieveBMSamples();
        },*/
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
