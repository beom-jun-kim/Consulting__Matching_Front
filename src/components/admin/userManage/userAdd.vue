<template>
  <div id="layoutSidenav_content" class="preR">
    <main>
      <div class="container-fluid px-4">
        <h1 class="mt-4">일반회원생성</h1>
        <ol class="breadcrumb mb-4">
          <li class="breadcrumb-item active"></li>
        </ol>
        <div class="row">
          <div class="col-xl-12">
            <div class="card2 mb-4">
              <div class="card-header">회원추가</div>
              <div class="card-body d-md-flex flex-column justify-content-start p-4">
                <div class="d-md-flex mb-md-0 mb-3">
                  <div class="form-group me-md-5">
                    <label>성별 :</label>
                    <div class="d-flex justify-content-between form-control">
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="gender" id="genderM" value="M"
                          v-model="userBoard.gender" checked />
                        <label class="form-check-label" for="genderM">남</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="gender" id="genderW" value="W"
                          v-model="userBoard.gender" />
                        <label class="form-check-label" for="genderW">여</label>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="userName">이름 :</label>
                    <input type="text" class="form-control" id="userName" required v-model="userBoard.userName"
                      name="userName" />
                  </div>
                </div>

                <div class="d-md-flex">
                  <div class="form-group me-md-5">
                    <label for="userEmail">아이디 :</label>
                    <input class="form-control" id="userEmail" required v-model="userBoard.userEmail"
                      name="userEmail" />
                  </div>

                  <div class="form-group">
                    <label for="password">비밀번호 :</label>
                    <input class="form-control" id="password" required v-model="userBoard.password" name="password" />
                  </div>
                </div>
                <div class="d-md-flex">
                  <div class="form-group me-md-5">
                    <label for="phone">전화번호 :</label>
                    <input class="form-control" id="phone" required v-model="userBoard.phone" name="phone" />
                  </div>
                  <div class="form-group me-md-5">
                    <label for="company">기업명 :</label>
                    <input type="text" class="form-control" id="company" required v-model="userBoard.company"
                      name="company" />
                  </div>

                </div>
                <div class="d-md-flex col-md-6">
                  <div class="form-group col-md-8">
                    <label for="address">주소 :</label>
                    <input class="form-control" id="address" required v-model="userBoard.address" name="address" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div class="d-flex mt-3">
          <div class="m-auto">
            <button @click="userInsert" class="btn btn-primary me-md-5">
              저장
            </button>
            <router-link to="/admin/userList" class="btn btn-secondary">취소</router-link>
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
      userBoard: {
        id: "",
        userName: "",
        userEmail: "",
        password: "",
        gender: "남",
        phone: "",
        company: '',
        address: '',
      },
    };
  },
  methods: {
    // 버튼 실행시 실행할 함수
    async userInsert() {
      if (confirm("저장하시겠습니까?") == true) {
        try {
          var data = {
            name: this.userBoard.userName,
            email: this.userBoard.userEmail,
            password: this.userBoard.password,
            gender: this.userBoard.gender,
            phoneNum: this.userBoard.phone,
            company: this.userBoard.company,
            address: this.userBoard.address,
          };
          console.log('data', data);
          const res = await UserDataService.userInsert(data);
          if (!alert("저장되었습니다.")) {
            this.$router.push(`/admin/userDetail/${res.data.id}`);
          }
        }
        catch (e) {
          alert(e);
        }
      }
    },
  },
};
</script>

<style scoped>
.btn_marg {
  margin: 0 1rem;
}

@import url('/public/css/admin/styles.css');
</style>
