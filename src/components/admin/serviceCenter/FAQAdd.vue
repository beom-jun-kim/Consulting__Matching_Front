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
              <div class="card-header">자주묻는질문추가</div>
              <div class="card-body">
                <form style="margin-left: 5%">
                  <div class="form-row">
                    <div class="form-group col-md-4">
                      <label for="category">카테고리 : </label>
                      <select v-model="category" class="form-control">
                        <option v-for="(cate, index) in cateList" :key="index" :value="cate.value">
                          {{ cate.value }}
                        </option>
                      </select>
                    </div>
                    <div class="form-group col-md-6">
                      <label for="question">제목 : </label>
                      <input type="text" class="form-control" id="question" placeholder="question"
                        v-model="FAQs.question" />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="answer">내용 : </label>
                      <textarea type="text" class="form-control" id="answer" placeholder="answer" v-model="FAQs.answer"
                        style="height: 20rem"></textarea>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div style="display: flex; margin-top: 1rem">
          <div style="margin: auto">
            <button @click="onSubmitForm" class="btn btn-primary btn_marg">
              저장
            </button>
            <router-link to="/admin/FAQList" class="btn btn-secondary btn_marg">취소</router-link>
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
  name: "FAQAdd",
  components: {
    FooterCom,
  },
  data() {
    return {
      FAQs: {},
      cateList: [
        {
          text: "0",
          value: "카테고리를 선택해 주세요.",
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
      category: "카테고리를 선택해 주세요.",
    };
  },
  methods: {
    // 버튼 실행시 실행할 함수
    onSubmitForm() {
      if (confirm("저장하시겠습니까?") == true) {
        var data = {
          category: this.category,
          question: this.FAQs.question,
          answer: this.FAQs.answer,
        };
        ServCenterDataService.createFaq(data)
          .then(() => {
            if (!alert("저장되었습니다.")) {
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
