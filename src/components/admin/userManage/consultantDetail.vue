<template>
  <div id="layoutSidenav_content" class="preR">
    <main>
      <div class="container-fluid px-auto">
        <h1 class="mt-4">컨설턴트회원정보</h1>
        <ol class="breadcrumb mb-4">
          <li class="breadcrumb-item active"></li>
        </ol>
        <div class="row">
          <div class="col-xl-12">
            <div class="card2 mb-4">
              <div class="card-header d-flex">
                <div class="flex-grow-1">회원정보수정</div>
              </div>
              <div class="card-body py-3 px-2">
                <div class="d-md-flex flex-wrap">
                  <div class="col-6 d-md-flex flex-wrap">
                    <div class="d-flex flex-wrap mb-3">
                      <div class="form-group me-md-5 mb-3">
                        <label for="role">권한 :</label>
                        <select v-model="userBoard.role" class="form-control py-2 px-3">
                          <option v-for="(role, index) in  getUserToken().role === 'admin' ? roles : roles2"
                            :key="index" :value="role">
                            {{ role }}
                          </option>
                        </select>
                      </div>
                      <div class="form-group me-md-5 mb-3">
                        <label>성별 : </label>
                        <div class="d-flex form-control py-2 px-3">
                          <div class="form-check me-md-3">
                            <input class="form-check-input" type="radio" name="gender" id="gender" value="M"
                              v-model="userBoard.gender" checked />
                            <label class="form-check-label" for="gender">
                              남
                            </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="gender" id="gender" value="W"
                              v-model="userBoard.gender" />
                            <label class="form-check-label" for="gender">
                              여
                            </label>
                          </div>
                        </div>
                      </div>
                      <div class="form-group mb-3">
                        <label for="instDate">가입일시 :
                          <div class="form-control py-2 px-3">
                            {{ insertAt }}
                          </div>
                        </label>
                      </div>
                    </div>
                    <div class="d-flex flex-wrap">

                      <div class="form-group me-md-5 mb-3">
                        <label for="code">소속그룹코드 :</label>
                        <input type="text" class="form-control" id="code" v-model="userBoard.affiliationGroup"
                          name="code" />
                      </div>
                      <div class="form-group mb-3">
                        <label for="confirm">이메일컨펌 :</label>
                        <input type="text" class="form-control" id="confirm" v-model="userBoard.isEmailConfirmed"
                          name="confirm" />
                      </div>
                    </div>
                    <div class="d-flex flex-wrap">

                      <div class="form-group me-md-5 mb-3">
                        <label for="name">이름 :</label>
                        <input type="text" class="form-control" id="name" v-model="userBoard.name" name="name" />
                      </div>
                      <div class="form-group mb-3">
                        <label for="email">이메일 :</label>
                        <div class="form-control" id="email" name="email">{{ userBoard.email }}</div>
                      </div>
                    </div>
                    <!-- <div class="d-flex justify-content-between align-items-center">
                      <div class="form-group">
                        <label for="grade_id">등급 :
                          <input type="text" class="form-control" id="grade_id" v-model="userBoard.gradeId"
                            name="grade_id" />
                        </label>
                      </div>

                      <div class="form-group">
                        <label for="grade_point">등급포인트 :
                          <input type="text" class="form-control" id="grade_point" v-model="userBoard.gradePoint"
                            name="grade_point" />
                        </label>
                      </div>
                    </div> -->

                    <div class="d-flex flex-wrap">
                      <div class="form-group me-md-5 mb-3">
                        <label for="password">비밀번호 :
                          <input class="form-control" id="password" v-model="changPass" name="password" />
                          ※ 비밀번호를 변경할 시 입력해주세요!
                        </label>
                      </div>
                      <div class="form-group me-md-5 mb-3">
                        <label for="company">기업명 :
                          <input class="form-control" id="company" v-model="userBoard.company" name="company" />
                        </label>
                      </div>
                    </div>
                    <div class="d-flex flex-wrap">
                      <div class="form-group me-md-5 mb-3">
                        <label for="phoneNum">전화번호 :
                          <input class="form-control py-2 px-3" id="phoneNum" v-model="userBoard.phoneNum"
                            name="phoneNum" />
                        </label>
                      </div>
                      <div class="form-group mb-3">
                        <label for="address">주소 :
                          <input class="form-control" id="address" v-model="userBoard.address" name="address" />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-6 d-md-flex flex-wrap">
                    <div class="form-check mt-4">
                      <input class="form-check-input" type="radio" name="secession" id="secession" value="Y"
                        v-model="userBoard.secession" />
                      <label class="form-check-label" for="secession">탈퇴처리하기</label>
                    </div>
                    <div class="form-group w-100">
                      <label for="secCont">탈퇴사유 :</label>
                      <textarea class="form-control" id="secCont" v-if="userBoard.secession === 'Y'"
                        v-model="userBoard.secCont" name="secCont"></textarea>
                      <div v-else>
                        탈퇴 사유를 입력하려면 체크하세요.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex mt-3">
          <div class="mx-auto">
            <button @click="updateUser" class="btn btn-primary me-3">
              수정
            </button>
            <router-link to="/admin/consultantList" class="btn btn-secondary me-3">
              취소
            </router-link>
            <button v-if="getUserToken().role == 'admin'" @click="deleteUser" class="btn btn-danger">
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
import UserDataService from "@/services/admin/UserDataService";
import FooterCom from "@/common/admin/FooterCom.vue";
import jwtDecode from "jwt-decode";
import moment from "moment";
export default {
  name: "userDetail",
  components: {
    FooterCom,
  },
  data() {
    return {
      //userBoard: null,
      userBoard: {},
      submitted: false,
      insertAt: "",
      changPass: "",
      roles: ["admin", "tester", "s-supervisor", "g-supervisor", "s-consultant", "g-consultant", "buildup", "premium", "basic", "common"],
      roles2: ["g-supervisor", "g-consultant", "buildup", "premium", "basic", "common"],
    };
  },
  methods: {
    getUserToken() {
      const tokenData = localStorage.getItem("user");
      const parsedToken = JSON.parse(tokenData);
      const accessToken = parsedToken.accessToken;
      const decodedToken = jwtDecode(accessToken);
      return decodedToken;
    },
    async getUserListBySupervisor(id, userId) {
      try {
        const response = this.getUserToken().role == 'admin'
          ? await UserDataService.getUserDetailByAdmin(id, userId)
          : await UserDataService.getUserDetailBySuperVisor(id, userId);
        this.userBoard = response.data;
        this.insertAt = moment(this.userBoard.createdAt).format("YYYY-MM-DD");
      }
      catch (e) {
        alert(e.response.data.message);
      }
    },
    // 버튼 실행시 실행할 함수
    async updateUser() {
      if (confirm("수정하시겠습니까?")) {
        try {
          var data = {
            name: this.userBoard.name,
            email: this.userBoard.email,
            phoneNum: this.userBoard.phoneNum,
            company: this.userBoard.company,
            password: this.changPass ? this.changPass : '',
            gender: this.userBoard.gender,
            affiliationGroup: this.userBoard.affiliationGroup,

            role: this.userBoard.role,
            status: this.userBoard.status ? this.userBoard.status : '',
            gradeId: this.userBoard.gradeId,
            gradePoint: this.userBoard.gradePoint,
            address: this.userBoard.address ? this.userBoard.address : '',
            isEmailConfirmed: this.userBoard.isEmailConfirmed
          };

          await UserDataService.updateById(this.userBoard.id, data);
          if (!alert("수정되었습니다.")) {
            this.getUserListBySupervisor(this.getUserToken().id, this.userBoard.id);
          }
        }
        catch (e) {
          alert(e.response.data.message);
        }
      }
    },
    async deleteUser() {
      if (confirm("삭제하시겠습니까?") == true) {
        try {
          await UserDataService.deleteUser(this.userBoard.id);
          if (!alert("삭제되었습니다.")) {
            this.$router.push("/admin/userList");
          }
        }
        catch (e) {
          alert(e.response.data.message);
        }
      }
    },
    fileDown() {
      UserDataService.downloadResume(this.$route.params.id)
        .then((response) => {
          // 파일 다운로드 처리
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", `${this.userBoard.name}_이력서.pdf`); // 다운로드할 파일 이름 및 확장자 설정
          document.body.appendChild(link);
          link.click();
          link.remove();
        })
        .catch((error) => {
          // 오류 처리
          console.error("파일 다운로드 실패:", error);
        });
    },
  },

  async mounted() {
    await this.getUserListBySupervisor(this.getUserToken().id, this.$route.params.id);
  },
};
</script>

<style scoped>
.btn_marg {
  margin: 0 1rem;
}

@import url('/public/css/admin/styles.css');
</style>
