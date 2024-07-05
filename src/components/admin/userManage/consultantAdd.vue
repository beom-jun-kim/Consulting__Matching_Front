<template>
  <div id="layoutSidenav_content" class="preR">
    <main>
      <div class="container-fluid px-4">
        <h1 class="mt-4">컨설턴트회원관리</h1>
        <ol class="breadcrumb mb-4">
          <li class="breadcrumb-item active"></li>
        </ol>
        <div class="row">
          <div class="col-xl-12">
            <div class="card2 mb-4">
              <div class="card-header">회원추가</div>
              <div class="card-body">
                <div style="margin-left: 10rem">
                  <div class="form-group">
                    <label for="constName">이름 :
                      <input type="text" class="form-control" id="constName" required v-model="constBoard.constName"
                        name="constName" />
                    </label>
                  </div>

                  <div class="form-group">
                    <label for="constEmail">아이디 :
                      <input class="form-control" id="constEmail" required v-model="constBoard.constEmail"
                        name="constEmail" />
                    </label>
                  </div>

                  <div class="form-group">
                    <label for="password">비밀번호 :
                      <input class="form-control" id="password" required v-model="constBoard.password"
                        name="password" />
                    </label>
                  </div>

                  <div class="form-group">
                    <label>성별 : </label>
                    <div class="d-flex" style="width: 12rem">
                      <div class="form-check" style="margin: auto">
                        <input class="form-check-input" type="radio" name="gender" id="gender" value="남"
                          v-model="constBoard.gender" checked />
                        <label class="form-check-label" for="gender">
                          남
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="gender" id="gender" value="여"
                          v-model="constBoard.gender" />
                        <label class="form-check-label" for="gender">
                          여
                        </label>
                      </div>
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="phone">전화번호 :
                      <input class="form-control" id="phone" required v-model="constBoard.phone" name="phone" />
                    </label>
                  </div>
                  <div class="form-group">
                    <label for="formFile" class="form-label">이력서 :</label>
                    <div class="d-flex">
                      <button class="btn btn-secondary" @click="upFile">
                        파일
                      </button>
                      <input class="form-control" type="file" id="formFile" @change="handleFileChange"
                        style="width: 20rem; visibility: hidden" />
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
        <div class="d-flex" style="margin-top: 1rem">
          <div style="margin: auto">
            <button @click="onSubmitForm" class="btn btn-primary btn_marg">
              저장
            </button>
            <router-link to="/admin/consultantList" class="btn btn-secondary btn_marg">취소</router-link>
          </div>
        </div>
      </div>
    </main>
    <FooterCom />
  </div>
</template>

<script>
import UserDataService from "@/services/admin/UserDataService";
import FooterCom from "@/common/admin/FooterCom.vue";
export default {
  name: "userAdd",
  components: {
    FooterCom,
  },
  data() {
    return {
      constBoard: {
        id: "",
        constName: "",
        constEmail: "",
        password: "",
        gender: "남",
        phone: "",
      },
      file_name: "",
    };
  },
  methods: {
    // 버튼 실행시 실행할 함수
    onSubmitForm() {
      if (confirm("저장하시겠습니까?") == true) {
        var data = {
          name: this.constBoard.constName,
          email: this.constBoard.constEmail,
          password: this.constBoard.password,
          gender: this.constBoard.gender,
          phone: this.constBoard.phone,
          level: "consult",
          file: this.file_name,
        };
        UserDataService.createConsultant(data)
          .then((res) => {
            this.constBoard.id = res.data.id;
            if (!alert("저장되었습니다.")) {
              window.location = "/admin/consultantList";
            }
          })
          .catch((e) => {
            // 실패하면 이쪽으로 결과가 들어옴
            alert(e);
          });
      }
    },
    handleFileChange(e) {
      console.log(e.target.files[0].name);
      this.file_name = e.target.files[0].name;
    },
    upFile() {
      document.getElementById("formFile").click();
    },
  },
};
</script>

<style scoped>
.btn_marg {
  margin: 0 1rem;
}

.inputBox2 {
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: 25rem;
  height: 2.5rem;
  border-radius: 6px;
}

@import url('/public/css/admin/styles.css');
</style>
