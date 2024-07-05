<template>
  <!-- 부트스트랩 화면배치 : col 12등분 -->
  <div class="col-md-12">
    <div class="sp_wrap">
      <img class="bg2" src="../../../public/img/main/bg2.gif" alt="background" />
      <img class="bg4" src="../../../public/img/main/bg4.gif" alt="background" />
      <div class="sp_container">
        <div class="joinPage">
          <div id="password_login" style="display: none">
            <h3>
              임시 비밀번호로 로그인하셨습니다.<br />비밀번호 변경 페이지로
              이동합니다.
            </h3>
            <button class="check" type="button">확인</button>
          </div>
          <div class="wrap">
            <div class="joinWrap">
              <div class="ttl">
                <!-- <div class="img">
                  <img src="../../../public/img/main/login_img.png" alt="login" />
                </div> -->
                <div class="txt preEB">
                  <span class="bmds">BMDS</span>회원이라면 로그인 해주세요!<br />
                  <span class="cmt preEB">당신의 창업과 함께하는 Best Solution Partner가
                    되겠습니다.</span>
                </div>
              </div>
              <div class="joinBox preR">
                <div class="">
                  <div class="panel panel-default">
                    <div class="panel-body">
                      <div class="">
                        <input v-model="user.email" type="text" class="form-control input-lg" id="email" name="email"
                          placeholder="이메일" v-validate="'required'" @keyup.enter="handleLogin" />
                      </div>
                      <div class="">
                        <input v-model="user.password" type="password" class="form-control input-lg" id="password"
                          name="password" placeholder="비밀번호" v-validate="'required'" @keyup.enter="handleLogin" />
                      </div>
                      <div class="">
                        <button class="btn btn-primary btn-lg w100per" type="button" :disabled="loading" @click="handleLogin">
                          <span v-show="loading" class="spinner-border spinner-border-sm"></span>로그인
                        </button>
                        <div class="form-group">
                          <div v-if="message" class="alert alert-danger" role="alert">
                            <i class="fa-solid fa-circle-exclamation"></i>
                            {{ message }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  아직도 BMDS 회원이 아니신가요?
                  <router-link to="/main/join">회원가입하기</router-link><br /><br />
                  아이디 패스워드를 잃어버리셨나요?
                  <router-link to="/main/findEmailPass">아이디/패스워드 찾기</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import User from "@/models/main/user";
import jwtDecode from "jwt-decode";
export default {
  name: "MemberLogin",
  // 뷰의 변수들을 초기화하는 곳 : data()
  data() {
    return {
      user: new User("", ""),
      loading: false,
      message: "",
    };
  },
  computed: {
    // 값 : false, true
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  // 화면이 뜨자마자 실행되는 이벤트
  // created(Vue 객체가 최초로 만들어 질때 실행됨)
  // mounted(화면 모두 뜰때 실행됨)
  created() {
    // 로그인이 되었으면 loggedIn = true
    // 로그인이 안되었으면 loggedIn = false
    // 로그인이 되었으면 사용자를 프로필 페이지로 안내
    if (this.loggedIn) {

      // profile 페이지로 강제 이동함
      // if (userRole === 'admin') {
      //   this.$router.push("/admin/profile");
      // }
    }
  },
  methods: {
    //  로그인 메소드 정의
    handleLogin() {
      this.loading = true;
      //  Vee-Validation npm 설치 : 뷰에서 유효성 체크 모듈
      //  validateAll => v-validate 체크해서 모두 true, false 인지 확인
      //  값이 isValid = true ( false )
      this.$validator.validateAll().then((isValid) => {
        //  유효성 체크가 걸린 입력박스가 하나라도 에러가 나면 : false
        //  isValid = false 이면 로그인 함수 종료
        if (!isValid) {
          this.loading = false;
          return;
        }

        //  로그인 절차 진행
        //  springboot 서버와 통신
        if (this.user.email && this.user.password) {
          //  springboot로 username, password 전송해서 로그인 진행
          //  공유저장소의 비동기 메소드 호출 ( login )
          this.$store.dispatch("auth/loginMain", this.user)
            //  결과가 성공하면 then(첫번째매개변수)
            //  실패하면 then(두번째매개변수)
              .then((res) => {
                // const accessToken = res.accessToken;
                // const decodedToken = jwtDecode(accessToken);
                // const userRole = decodedToken.role;

                // // 로그인 성공시 자동 페이지 전환 : /profile 페이지
                // if (userRole === 'admin' || userRole === 'supervisor') {
                //   this.$router.push("/admin/userList");
                // }
                // else {
                //   this.$router.push("/");
                // }
                this.$router.push("/");
              },
              // 실패
              (error) => {
                this.loading = false;
                this.message =
                  "입력하신 정보를 다시 한번 확인해주시기 바랍니다!";
              }
            );
        }
      });
    },
  },
};
</script>

