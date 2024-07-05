<template>
  <div id="layoutSidenav_content" class="preR">
    <main>
      <div class="container-fluid px-4">
        <h1 class="mt-4">문의관리</h1>
        <ol class="breadcrumb mb-4">
          <li class="breadcrumb-item active"></li>
        </ol>
        <div class="row">
          <div class="col-xl-12">
            <div class="card2 mb-4">
              <div class="card-header d-flex">
                <div>문의글쓰기</div>
                <div style="margin: auto">답변달기</div>
              </div>
              <div class="card-body">
                <div class="d-flex">
                  <div style="margin-left: 2%">
                    <div class="form-row">
                      <div class="form-group col-md-4 d-flex">
                        <div>
                          <label for="category">카테고리 : </label>
                          <select v-model="QnAs.category" class="form-control" style="width: 10rem">
                            <option v-for="(cate, index) in cateList" :key="index" :value="cate.value">
                              {{ cate.value }}
                            </option>
                          </select>
                        </div>
                        <div class="form-group col-md-12" style="margin-left: 10rem">
                          <label for="writer">작성자 : </label>
                          <input type="text" class="form-control" id="writer" placeholder="writer"
                            :value="QnAs.writer" />
                        </div>
                      </div>
                      <div class="form-group col-md-6">
                        <label for="question">질문 : </label>
                        <!-- <textarea
                          type="text"
                          class="form-control"
                          id="question"
                          placeholder="question"
                          style="height: 20rem; width: 33rem"
                          v-model="QnAs.question"
                        ></textarea> -->
                        <VueEditor v-model="QnAs.question" :editorToolbar="customToolbar" style="width:31.5rem;" />
                      </div>
                    </div>
                  </div>
                  <div style="margin-left: 3%">
                    <div class="form-group">
                      <label for="answer">답변달기 :
                        <!-- <textarea
                          type="text"
                          class="form-control"
                          id="answer"
                          placeholder="answer"
                          v-model="QnAs.answer"
                          name="answer"
                          style="height: 15rem; width: 30rem"
                        ></textarea> -->
                        <VueEditor v-model="QnAs.answer" :editorToolbar="customToolbar" style="width:31.5rem;" />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex" style="margin-top: 0.5rem">
          <div class="m-auto">
            <button @click="onSubmitForm" class="btn btn-primary btn_marg">
              저장
            </button>
            <router-link to="/admin/QnAList" class="btn btn-secondary btn_marg">
              취소
            </router-link>
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
import { VueEditor } from "vue2-editor";
export default {
  name: "QnADetail",
  components: {
    FooterCom,
    VueEditor
  },
  data() {
    return {
      QnAs: {},
      // 데이터에 필요한 옵션을 구성하면 된다.
      customToolbar: [
        ["bold", "italic", "underline"],
        [{ list: "ordered" }, { list: "bullet" }],
        [
          { align: "" },
          { align: "center" },
          { align: "right" },
          { align: "justify" }
        ],
        [{ color: [] }],
        ["link", "image", "video", "formula"],
      ],
      cateList: [
        {
          text: "",
          value: "전체",
        },
        {
          text: "0",
          value: "사업계획서문의",
        },
        {
          text: "1",
          value: "비즈니스모델문의",
        },
        {
          text: "2",
          value: "컨설팅문의",
        },
        {
          text: "3",
          value: "결제문의",
        },
        {
          text: "4",
          value: "환불문의",
        },
        {
          text: "5",
          value: "기타문의",
        },
        {
          text: "6",
          value: "공지사항",
        },
      ],
    };
  },
  methods: {
    getQna(id) {
      ServCenterDataService.getQnA(id)
        .then((res) => {
          this.QnAs = res.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    // 버튼 실행시 실행할 함수
    onSubmitForm() {
      if (confirm("댓글을 저장하시겠습니까?") == true) {
        var data = {
          answer: this.QnAs.answer,
        };
        ServCenterDataService.updateQnA(this.QnAs.id, data)
          .then(() => {
            if (!alert("저장되었습니다.")) {
              window.location = "/admin/QnAList";
            }
          })
          .catch((e) => {
            // 실패하면 이쪽으로 결과가 들어옴
            alert(e);
          });
      }
    },
  },
  mounted() {
    this.getQna(this.$route.params.id);
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
