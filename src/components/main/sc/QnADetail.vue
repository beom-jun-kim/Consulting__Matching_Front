<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-12 mb-3">
        <h2 class="text-center">{{ QnAs.title }}</h2>
        <hr />
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 mb-3">
        <h5>카테고리</h5>
        <p class="bg-light p-2 rounded">{{ QnAs.category }}</p>
      </div>
      <div class="col-md-6 mb-3">
        <h5>작성자</h5>
        <p class="bg-light p-2 rounded">{{ QnAs.writer }}</p>
      </div>
      <!-- <div class="col-md-4 mb-3">
        <h5>첨부파일</h5>
        <a @click="downloadFile(QnAs.filePath)">
          {{ QnAs.filePath }}
        </a>
      </div> -->
    </div>
    <div class="row">
      <div class="col-12 mb-4">
        <h5>질문</h5>
        <div class="bg-light p-3 rounded" v-html="QnAs.question" />
      </div>
    </div>
    <div class="row">
      <div class="col-12 mb-4">
        <h5>답변</h5>
        <div class="bg-light p-3 rounded" v-if="!QnAs.answer">
          <p>답변을 달기 전 입니다.</p>
        </div>
        <div class="bg-light p-3 rounded" v-else>
          <p>{{ QnAs.answer }}</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 d-flex justify-content-end">
        <button v-if="QnAs.user.id == getUser().id || getUser().role == 'admin' || getUser().role == 'supervisor'"
          @click="goToUpdate" class="btn btn-success btn_marg">
          수정
        </button>
        <button @click="handleClick()" ref="memberLogin" class="btn btn-primary btn_marg">
          목록가기
        </button>
        <button v-if="QnAs.user.id == getUser().id || getUser().role == 'admin' || getUser().role == 'supervisor'"
          @click="deleteForm" class="btn btn-danger btn_marg">
          삭제
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ServCenterDataService from "@/services/main/ServCenterDataService";
import jwtDecode from "jwt-decode";
export default {
  props: ["state", "id"],
  name: "QnADetail",
  data() {
    return {
      QnAs: {},
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
      category: "전체",
      writer: "",
      user: "",
    };
  },
  methods: {
    goToUpdate() {
      this.$emit("data", { state: "qnaUpdate", id: this.id });
    },
    getUser() {
      const tokenData = localStorage.getItem("user");
      const parsedToken = JSON.parse(tokenData);
      const accessToken = parsedToken.accessToken;
      const decodedToken = jwtDecode(accessToken);
      return decodedToken;
    },
    handleClick() {
      this.$emit("update:state", "qna");
    },
    async getQnA() {
      try {
        const res = await ServCenterDataService.getQnA(this.id);
        this.QnAs = res.data;
      }
      catch (e) {
        console.log(e.response.data.message);
      }
    },
    async deleteForm() {
      if (confirm("삭제하시겠습니까?")) {
        try {
          await ServCenterDataService.deleteQnA(this.QnAs.id);
          if (!alert("삭제되었습니다.")) {
            this.$emit("update:state", "qna");
          }
        }
        catch (e) {
          console.log(e.response.data.message);
        }
      }
    },
  },
  mounted() {
    this.getQnA();
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

.card2 {
  --bs-card-spacer-y: 1rem;
  --bs-card-spacer-x: 1rem;
  --bs-card-title-spacer-y: 0.5rem;
  --bs-card-border-width: 1px;
  --bs-card-border-color: var(--bs-border-color-translucent);
  --bs-card-border-radius: 0.375rem;
  --bs-card-box-shadow: ;
  --bs-card-inner-border-radius: calc(0.375rem - 1px);
  --bs-card-cap-padding-y: 0.5rem;
  --bs-card-cap-padding-x: 1rem;
  --bs-card-cap-bg: rgba(0, 0, 0, 0.03);
  --bs-card-cap-color: ;
  --bs-card-height: ;
  --bs-card-color: ;
  --bs-card-bg: #fff;
  --bs-card-img-overlay-padding: 1rem;
  --bs-card-group-margin: 0.75rem;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  height: var(--bs-card-height);
  word-wrap: break-word;
  background-color: var(--bs-card-bg);
  background-clip: border-box;
  border: var(--bs-card-border-width) solid var(--bs-card-border-color);
  border-radius: var(--bs-card-border-radius);
}
</style>
