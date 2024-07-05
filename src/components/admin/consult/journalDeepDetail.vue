<template>
  <div id="layoutSidenav_content">
    <main>
      <div class="container-fluid px-4">
        <h1 class="mt-4">컨설팅일지</h1>
        <ol class="breadcrumb mb-4">
          <li class="breadcrumb-item active"></li>
        </ol>
        <div class="card2 mb-4">
          <div class="card-header"></div>
          <div class="card-body">
            <div class="m-auto" style="width: 30rem; height: 28rem">
              <form>
                <div class="mb-3 mt-3">
                  <label for="bno" class="form-label">수행일</label>
                  <input type="text" class="form-control" id="bno" name="bno" :value="journals.doTime" disabled />
                </div>
                <div class="mb-3">
                  <label for="title" class="form-label">작성자</label>
                  <input type="text" class="form-control" id="title" name="title" :value="journals.name" disabled />
                </div>
                <div class="mb-3">
                  <label for="content" class="form-label">제목</label>
                  <input type="text" class="form-control" id="regDate" name="regDate" :value="journals.title" disabled />
                </div>
                <div class="mb-3">
                  <label for="regDate" class="form-label">내용</label>
                  <textarea class="form-control" id="regDate" name="regDate" v-model="journals.content"
                    disabled></textarea>
                </div>
                <div class="mb-3">
                  <label for="writer" class="form-label">작성일</label>
                  <input type="text" class="form-control" id="writer" name="writer" :value="journals.insertTime"
                    disabled />
                </div>
              </form>
            </div>
            <div class="d-flex" style="width: 100%">
              <div class="m-auto">
                <router-link type="button" class="btn btn-primary btn-sm" to="/admin/journalDetail">
                  돌아가기
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </main><FooterCom />
  </div>
</template>

<script>
import ConsultDataService from "@/services/admin/ConsultDataService";
import FooterCom from "@/common/admin/FooterCom.vue";
export default {
  components: {
    FooterCom,
  },
  data() {
    return {
      journals: {
        id: "1",
        doTime: "2023/03/05",
        title: "제목1",
        name: "컨설턴트이름1",
        content: "내용1",
        insertTime: "2023/03/05",
      },
    };
  },
  methods: {
    // id에 해당하는 회원정보를 조회하는 서비스를 요청(springboot)
    getJournal(id) {
      // axios 통신이용 서비스 호출(springboot)
      ConsultDataService.getJournal(id)
        // 성공하면 then으로 결과 데이터가 들어옴(response.data )
        .then((response) => {
          this.journals = response.data;
        })
        // 실패하면 catch로 에러 데이터가 들어옴
        .catch((e) => {
          alert(e);
        });
    },
  },

  // 화면이 뜨면 실행되는 이벤트
  // http://localhost:8080/:id
  // $route : router/index.js , params.id
  /* mounted() {
            this.getJournal(this.$route.params.id);
        },*/
};
</script>

<style>
@import "../../../../public/css/admin/styles.css";
</style>
