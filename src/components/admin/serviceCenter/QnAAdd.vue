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
                          <select v-model="category" class="form-control" style="width: 10rem">
                            <option v-for="(cate, index) in cateList" :key="index" :value="cate.value">
                              {{ cate.value }}
                            </option>
                          </select>
                        </div>
                        <div class="form-group col-md-12" style="margin-left: 10rem">
                          <label for="writer">작성자 : </label>
                          <input type="text" class="form-control" id="writer" placeholder="writer" :value="writer" />
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
                  <div style="margin-left: 11%">
                    <div class="form-group">
                      <label for="answer">답변달기 :
                        <!-- <textarea type="text" class="form-control" id="answer" placeholder="answer" v-model="QnAs.answer"
                          name="answer" style="height: 15rem; width: 30rem"></textarea> -->
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
import UserDataService from "@/services/admin/UserDataService";
import jwtDecode from "jwt-decode";
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
      writer: "", // 작성자 이름(이메일인데 0자리에서부터 @까지만 표시)
    };
  },
  methods: {
    // 유저 아이디 받기
    getUserId() {
      const tokenData = localStorage.getItem("user");
      const parsedToken = JSON.parse(tokenData);
      const accessToken = parsedToken.accessToken;
      const decodedToken = jwtDecode(accessToken);
      const userId = decodedToken.id;
      return userId;
    },
    // id에 해당하는 회원email을 조회하는 서비스를 요청
    getUsr(id) {
      // axios 통신이용 서비스 호출
      UserDataService.getUsr(id)
        // 성공하면 then으로 결과 데이터가 들어옴(res.data )
        .then((res) => {
          this.writer = res.data.email.split("@", 1); // 이메일에서 '@'앞에문자열만 출력
        })
        // 실패하면 catch로 에러 데이터가 들어옴
        .catch((e) => {
          alert(e);
        });
    },
    // 버튼 실행시 실행할 함수
    onSubmitForm() {
      if (confirm("저장하시겠습니까?") == true) {
        var data = {
          category: this.category,
          question: this.QnAs.question,
          writer: this.writer[0],
          answer: this.QnAs.answer,
          userId: this.getUserId(),
        };
        ServCenterDataService.createQnA(data)
          .then(() => {
            if (!alert("저장되었습니다.")) {
              window.location = "/admin/QnAList";
            }
          })
          .catch((e) => {
            // 실패하면 이쪽으로 결과가 들어옴
            console.log(e);
          });
      }
    },
  },
  mounted() {
    this.getUsr(this.getUserId());
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
