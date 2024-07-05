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
                      <select v-model="Notices.category" class="form-control">
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
                      <!-- <textarea
                        type="text"
                        class="form-control"
                        id="content"
                        placeholder="content"
                        v-model="Notices.content"
                        style="height: 20rem"
                      ></textarea> -->
                      <div v-html="Notices.content" :editorToolbar="customToolbar" />
                    </div>
                    <!-- TODO 이미지 미리보기 합치고 테스트해야함 -->
                    <div class="form-group col-md-6">
                      <img :src="file_name" />
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
        <div class="d-flex" style="margin-top: 0.5rem">
          <div class="m-auto">
            <button @click="onSubmitForm" class="btn btn-primary btn_marg">
              수정
            </button>
            <router-link to="/admin/NoticeList" class="btn btn-secondary btn_marg">
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
  name: "noticeAdd",
  components: {
    FooterCom,
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
    getNotice(id) {
      ServCenterDataService.getNotice(id)
        // 성공하면 then으로 결과 데이터가 들어옴(response.data )
        .then((response) => {
          this.Notices = response.data;
          if (this.Notices.nopath) {
            const str = this.Notices.nopath;
            const splitIndex = str.lastIndexOf("uploads\\");
            const result = str.substring(splitIndex + 8); // +8을 추가하여 "uploads\" 이후의 문자열을 가져옵니다.
            this.file_name = result;
          }
        })
        // 실패하면 catch로 에러 데이터가 들어옴
        .catch((e) => {
          alert(e);
        });
    },

    // 버튼 실행시 실행할 함수
    onSubmitForm() {
      if (confirm("수정하시겠습니까?") == true) {
        const formData = new FormData();
        formData.append("category", this.Notices.category);
        formData.append("title", this.Notices.title);
        formData.append("content", this.Notices.content);
        formData.append("nopath", this.Notices.nopath);

        ServCenterDataService.updateNotice(this.Notices.id, formData)
          .then(() => {
            if (!alert("수정되었습니다.")) {
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
    deleteForm() {
      if (confirm("삭제하시겠습니까?") == true) {
        ServCenterDataService.deleteNotice(this.Notices.id)
          .then(() => {
            if (!alert("삭제되었습니다.")) {
              window.location = "/admin/NoticeList";
            }
          })
          .catch((e) => {
            // 실패하면 이쪽으로 결과가 들어옴
            alert(e);
          });
      }
    },
    previewImage(event) {
      const file = event.target.files[0];

      if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
          const imagePreview = document.getElementById("imagePreview");
          imagePreview.innerHTML = `<img src="${e.target.result}" alt="Image Preview">`;
        };

        reader.readAsDataURL(file);
      } else {
        // 파일이 선택되지 않았을 경우 이미지 미리보기를 초기화합니다.
        const imagePreview = document.getElementById("imagePreview");
        imagePreview.innerHTML = "";
      }
    },
  },
  mounted() {
    this.getNotice(this.$route.params.id);
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

.inputBox2 {
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: 25rem;
  height: 2.5rem;
  border-radius: 6px;
}

.content-with-image img {
  display: block;
  max-width: 100%;
  height: auto;
}

@import url('/public/css/admin/styles.css');
</style>
