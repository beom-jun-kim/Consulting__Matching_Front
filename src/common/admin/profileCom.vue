<template>
  <div id="layoutSidenav_content" class="preR">
    <main>
      <div class="container-fluid px-4">
        <h1 class="mt-4">관리자정보</h1>
        <ol class="breadcrumb mb-4">
          <li class="breadcrumb-item active"></li>
        </ol>
        <div class="row">
          <div class="col-xl-12">
            <div class="card2 mb-4">
              <div class="card-header" style="display: flex">
                <div>관리자정보보기</div>
              </div>
              <div class="card-body">
                <div style="margin-left: 10rem">
                  <div style="display: flex">
                    <div class="form-group">
                      <label for="name">이름 :
                        <input type="text" class="form-control" id="name" v-model="manager.name" name="name" />
                      </label>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="email">이메일 :
                      <input class="form-control" id="email" v-model="manager.email" name="email" />
                    </label>
                  </div>
                  <div class="form-group">
                    <label for="password">비밀번호 :
                      <div style="display: flex">
                        <div>
                          <input class="form-control" id="password" v-model="manager.password" name="password" />
                        </div>
                        <div style="margin-top: 0.35rem">
                          ※ 비밀번호를 변경할 시 입력해주세요!
                        </div>
                      </div>
                    </label>
                  </div>
                  <div class="form-group">
                    <label>성별 : </label>
                    <div style="display: flex; width: 12rem">
                      <div class="form-check" style="margin: auto">
                        <input class="form-check-input" type="radio" name="gender" id="gender" value="M"
                          v-model="manager.gender" checked />
                        <label class="form-check-label" for="gender">
                          남
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="gender" id="gender" value="W"
                          v-model="manager.gender" />
                        <label class="form-check-label" for="gender">
                          여
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="phone">전화번호 :
                      <input class="form-control" id="phone" v-model="manager.phoneNum" name="phone" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="display: flex; margin-top: 1rem">
          <div style="margin: auto">
            <button @click="onSubmitForm" class="btn btn-primary btn_marg">
              수정
            </button>
          </div>
        </div>
      </div>
    </main>
    <FooterCom />
  </div>
</template>

<script>
import UserDataService from "@/services/admin/UserDataService";
import FooterCom from "./FooterCom.vue";
import jwtDecode from "jwt-decode";
/* eslint-disable */
export default {
  name: "profile",
  components: { FooterCom },
  data() {
    return {
      //manager: null,
      manager: {},
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
    async getManager(id) {
      try {
        const response = await UserDataService.getUserById(id);
        this.manager = response.data;
      }
      catch (e) {
        alert(e.response.data.message);
      }
    },
    // 버튼 실행시 실행할 함수
    onSubmitForm() {
      if (confirm("수정하시겠습니까?") == true) {
        var data = {
          name: this.manager.name,
          email: this.manager.email,
          password: this.manager.password,
          gender: this.manager.gender,
          phoneNum: this.manager.phoneNum,
        };
        UserDataService.updateConst(this.manager.id, data)
          .then(() => {
            if (!alert("수정되었습니다.")) {
              window.location = "/admin/profile";
            }
          })
          .catch((e) => {
            // 실패하면 이쪽으로 결과가 들어옴
            console.log(e);
          });
        alert("수정되었습니다.");
      }
    },
  },
  // 화면이 뜨면 실행되는 이벤트
  // http://localhost:8080/:id
  // $route : router/index.js , params.id
  mounted() {
    this.getManager(this.getUserId());
  },
};
</script>

<style scoped>
.btn_marg {
  margin: 0 1rem;
}

.inputBox {
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: 12.7rem;
  height: 2.5rem;
  border-radius: 6px;
}

.inputBox2 {
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: 25rem;
  height: 2.5rem;
  border-radius: 6px;
}

@import url('/public/css/admin/styles.css');
</style>
