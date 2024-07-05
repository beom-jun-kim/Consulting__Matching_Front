<template>
  <div id="layoutSidenav_content" class="preR">
    <main>
      <div class="container-fluid px-4">
        <h1 class="mt-4">자주묻는질문</h1>
        <ol class="breadcrumb mb-4">
          <li class="breadcrumb-item active"></li>
        </ol>
        <div class="row">
          <div class="col-xl-12">
            <div class="card2 mb-4">
              <div class="card-header">질문상세보기</div>
              <div class="card-body">
                <form style="margin-left: 5%">
                  <div class="form-row">
                    <div class="form-group col-md-4 d-flex">
                      <div>
                        <label for="category">카테고리 : </label>
                        <select v-model="FAQs.category" class="form-control" style="width: 10rem">
                          <option v-for="(cate, index) in cateList" :key="index" :value="cate.value">
                            {{ cate.value }}
                          </option>
                        </select>
                      </div>
                      <div style="margin-left: 7.9rem">
                        <label for="title">제목 : </label>
                        <input type="text" class="form-control" id="title" placeholder="title" v-model="FAQs.question"
                          style="width: 30rem" />
                      </div>
                    </div>
                    <div class="form-group col-md-6">
                      <label for="name">작성자 : </label>
                      <div class="form-control" id="name">관리자</div>
                    </div>
                    <div class="form-group col-md-6">
                      <label for="contents">내용 : </label>
                      <textarea type="text" class="form-control" id="contents" placeholder="contents"
                        style="height: 20rem" v-model="FAQs.answer"></textarea>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex" style="margin-top: 0.5rem">
          <div class="m-auto">
            <button @click="onSubmitForm" class="btn btn-primary btn_marg">
              수정
            </button>
            <router-link to="/admin/FAQList" class="btn btn-secondary btn_marg">
              취소
            </router-link>
            <button @click="deleteForm" class="btn btn-danger btn_marg">
              삭제
            </button>
          </div>
        </div>
      </div>
    </main>
    <FooterCom />
  </div>
</template>

<script>
import FooterCom from "@/common/admin/FooterCom.vue";
import ServCenterDataService from "@/services/admin/ServCenterDataService";
export default {
  name: "FAQDetail",
  components: {
    FooterCom,
  },
  data() {
    return {
      FAQs: {},
      cateList: [
        {
          text: "0",
          value: "카테고리를 선택해주세요",
        },
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
  methods: {
    getFaq(id) {
      ServCenterDataService.getFaqBy(id)
        // 성공하면 then으로 결과 데이터가 들어옴(response.data )
        .then((response) => {
          this.FAQs = response.data;
        })
        // 실패하면 catch로 에러 데이터가 들어옴
        .catch((e) => {
          alert(e);
        });
    },
    // 버튼 실행시 실행할 함수
    onSubmitForm() {
      if (confirm("수정하시겠습니까?") == true) {
        var data = {
          category: this.FAQs.category,
          answer: this.FAQs.answer,
          question: this.FAQs.question,
        };
        ServCenterDataService.updateFaq(this.FAQs.id, data)
          .then(() => {
            if (!alert("수정되었습니다.")) {
              window.location = "/admin/FAQList";
            }
          })
          .catch((e) => {
            // 실패하면 이쪽으로 결과가 들어옴
            alert(e);
          });
      }
    },
    deleteForm() {
      if (confirm("삭제하시겠습니까?") == true) {
        ServCenterDataService.deleteFaq(this.FAQs.id)
          .then(() => {
            if (!alert("삭제되었습니다.")) {
              window.location = "/admin/FAQList";
            }
          })
          .catch((e) => {
            // 실패하면 이쪽으로 결과가 들어옴
            alert(e);
          });
      }
    },
  },
  // 화면이 뜨면 실행되는 이벤트
  // http://localhost:8080/:id
  // $route : router/index.js , params.id
  mounted() {
    this.getFaq(this.$route.params.id);
  },
};
</script>

<style>
.btn_marg {
  margin: 0 1rem;
}

.label {
  display: inline-block;
  width: 140px;
  text-align: right;
}

@import url('/public/css/admin/styles.css');
</style>
