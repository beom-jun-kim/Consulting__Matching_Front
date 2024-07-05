<template>
  <div id="layoutSidenav_content">
    <main>
      <div class="container-fluid px-4">
        <div class="row">
          <div class="col-xl-12">
            <div class="card2 mb-4">
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
                        <div class="form-group col-md-12" style="margin-left:10rem;">
                          <label for="writer">작성자 : </label>
                          <input type="text" class="form-control" id="writer" placeholder="writer" v-model="writer" />
                        </div>
                      </div>
                      <div class="form-group col-md-6">
                        <label for="question">질문 : </label>
                        <!-- <textarea type="text" class="form-control" id="question" placeholder="question"
                          style="height: 20rem; width: 33rem" v-model="question"></textarea> -->
                        <VueEditor v-model="question" :editorToolbar="customToolbar" style="width:31.5rem;" />
                      </div>
                      <!-- <div class="form-group">
                        <label for="formFile" class="form-label">첨부파일 :</label>
                        <div class="d-flex">
                          <button class="btn btn-secondary" @click="uploadFile">
                            파일 선택
                          </button>
                          <input class="form-control" type="file" id="formFile" ref="fileInput"
                            style="width: 20rem; visibility: hidden" @change="handleFileChange" />
                          <div class="inputBox2" style="margin-left: -20rem">
                            <div style="margin: 6px 0 0 14px">
                              {{ file_name }}
                            </div>
                          </div>
                        </div>
                      </div> -->
                    </div>
                  </div>
                </div>
                <div class="d-flex mt-4" style="width:35rem;justify-content: space-between;">
                  <div v-if="errMessage" class="alert alert-danger text-center" style="width:22rem;">
                    {{ errMessage }}
                  </div>
                  <div class="mt-2" style="width:100%;">
                    <div style="float:right;">
                      <button @click="onSubmitForm" class="btn btn-primary btn_marg">
                        저장
                      </button>
                      <button @click="handleClick" class="btn btn-secondary btn_marg">
                        취소
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import ServCenterDataService from "@/services/main/ServCenterDataService";
import jwtDecode from 'jwt-decode';
import { VueEditor } from "vue2-editor";
export default {
  name: "QnAAdd",
  props: ["id"],
  components: {
    VueEditor
  },
  data() {
    return {
      file_name: "", //vue에서 보이게만 하는 변수
      fileData: null, //업로드할 파일
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
      category: "",
      question: "",
      writer: "", // 작성자 이름(이메일인데 0자리에서부터 @까지만 표시)
      userId: 0,
      errMessage: "",
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
        // ["link", "image", "video", "formula"],
      ],
    };
  },
  methods: {
    detail(id) {//sc폴더로 상태값과 id값을 전달
      this.$emit('data', { state: 'qnaDetail', id: id });
    },
    handleClick() { //sc폴더로 상태값을 전달
      this.$emit('update:state', 'qna');
    },
    // 유저 아이디 받기
    getUserId() {
      const tokenData = localStorage.getItem("user");
      const parsedToken = JSON.parse(tokenData);
      const accessToken = parsedToken.accessToken;
      const decodedToken = jwtDecode(accessToken);
      const userId = decodedToken.id;
      return userId;
    },
    async getQnA(id) {
      try {
        const res = await ServCenterDataService.getQnA(id);
        this.category = res.data.category;
        this.question = res.data.question;
        this.writer = res.data.writer;
        this.userId = res.data.id;
        console.log('this.userId', this.userId);
      }
      catch (e) {
        console.log(e.response.data.messag);
      }

    },
    // 버튼 실행시 실행할 함수
    async onSubmitForm() {
      if (confirm("수정하시겠습니까?")) {
        try {
          let data = {
            category: this.category,
            question: this.question,
            writer: this.writer[0]
          }
          await ServCenterDataService.updateQnA(this.userId, data);
          if (!alert("수정되었습니다.")) {
            this.$emit('update:state', 'qna');
          }
        }
        catch (e) {
          console.log(e.response.data.message);
        }
      }
    },
    uploadFile() {
      // 파일 선택 버튼 클릭 시 input[type=file] 클릭 이벤트 발생
      this.$refs.fileInput.click();
    },
    handleFileChange(event) {
      this.file_name = event.target.files[0].name;
      this.fileData = event.target.files[0];
    },
  },
  async mounted() {
    await this.getQnA(this.id);
  }
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

.inputBox2 {
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: 25rem;
  height: 2.5rem;
  border-radius: 6px;
}
</style>
