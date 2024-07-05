<template>
  <div id="layoutSidenav_content" class="preR">
    <main>
      <div class="container-fluid px-4">
        <h1 class="mt-4">공지사항</h1>
        <ol class="breadcrumb mb-4">
          <li class="breadcrumb-item active"></li>
        </ol>
        <div class="row">
          <div class="col-xl-12">
            <div class="card2 mb-4">
              <div class="card-header">공지사항추가</div>
              <div class="card-body">
                <div style="margin-left: 5%">
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
                      <label for="title">제목 : </label>
                      <input type="text" class="form-control" id="title" placeholder="title" v-model="Notices.title" />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="content">내용 : </label>
                      <!-- <textarea type="text" class="form-control" id="content" placeholder="content"
                        v-model="Notices.content" style="height: 20rem"></textarea> -->
                      <vue-Editor id="content" :editorToolbar="customToolbar" @imageAdded="handleImageAdded"
                        v-model="Notices.content">
                      </vue-Editor>
                      <div>
                        {{ Notices.content }}
                      </div>
                    </div>
                    <div class="form-group">
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="display: flex; margin-top: 1rem">
          <div style="margin: auto">
            <button @click="onSubmitForm" class="btn btn-primary btn_marg">
              저장
            </button>
            <router-link to="/admin/NoticeList" class="btn btn-secondary btn_marg">취소</router-link>
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
import axios from "axios";
export default {
  name: "noticeAdd",
  components: {
    FooterCom,
    VueEditor,
  },
  data() {
    return {
      Notices: {},
      // 데이터에 필요한 옵션을 구성하면 된다.
      customToolbar: [
        ["bold", "italic", "underline"],
        [{ list: "ordered" }, { list: "bullet" }],
        [
          { align: "" },
          { align: "center" },
          { align: "right" },
          { align: "justify" },
        ],
        [{ color: [] }],
        ["link", "image", "video", "formula"],
      ],
      file_name: "", //vue에서 보이게만 하는 변수
      fileData: null, //업로드할 파일
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
        const formData = new FormData();
        formData.append("category", this.category);
        formData.append("title", this.Notices.title);
        formData.append("content", this.Notices.content);
        formData.append("file", this.fileData);

        ServCenterDataService.createNotice(formData)
          .then(() => {
            if (!alert("저장되었습니다.")) {
              window.location = "/admin/NoticeList";
            }
          })
          .catch((e) => {
            // 실패하면 이쪽으로 결과가 들어옴
            alert(e);
          });
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

    handleImageUpload(file, Editor, cursorLocation, resetUploader) {
      const formData = new FormData();
      formData.append("file", file); // 'file'이라는 이름으로 파일 데이터를 추가합니다.

      ServCenterDataService.uploadNoticeImg(formData)
        .then((res) => {
          const imageUrl = res.data.path; // 서버에서 반환된 이미지 URL
          Editor.insertEmbed(cursorLocation, "image", imageUrl);
          resetUploader();
        })
        .catch((err) => {
          console.error("이미지 업로드 실패:", err);
          resetUploader();
        });
    },
    handleImageAdded: function (file, Editor, cursorLocation, resetUploader) {
      // An example of using FormData
      // NOTE: Your key could be different such as:
      // formData.append('file', file)

      const formData = new FormData();
      formData.append("file", file); // 'file'이라는 이름으로 파일 데이터를 추가합니다.


      axios({
        url: "localhost:3000/api/admin/notice/img",
        method: "POST",
        data: formData,
      })
        .then((result) => {
          const url = result.data.url; // Get url from response

          Editor.insertEmbed(cursorLocation, "image", url);
          resetUploader();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
@font-face {
  font-family: "Pretendard_ExtraBold";
  src: url("../../../../src/common/fonts/PRETENDARD-EXTRABOLD.OTF") format("opentype");
}

@font-face {
  font-family: "Pretendard_Medium";
  src: url("../../../../src/common/fonts/PRETENDARD-MEDIUM.OTF") format("opentype");
}

@font-face {
  font-family: "Pretendard_SemiBold";
  src: url("../../../../src/common/fonts/PRETENDARD-SEMIBOLD.OTF") format("opentype");
}

@font-face {
  font-family: "Pretendard_THIN";
  src: url("../../../../src/common/fonts/PRETENDARD-THIN.OTF") format("opentype");
}

@font-face {
  font-family: "Pretendard_Rgula";
  src: url("../../../../src/common/fonts/PRETENDARD-REGULAR.OTF") format("opentype");
}

.preEB {
  font-family: "Pretendard_ExtraBold" !important;
}

.preM {
  font-family: "Pretendard_Medium" !important;
}

.preSB {
  font-family: "Pretendard_SemiBold" !important;
}

.preT {
  font-family: "Pretendard_THIN" !important;
}

.preR {
  font-family: "Pretendard_Rgula" !important;
}

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

@import "../../../../public/css/admin/styles.css";
</style>
