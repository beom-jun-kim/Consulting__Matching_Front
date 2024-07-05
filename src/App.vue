<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  // html에서 변수처럼 호출 : 뒤에 () 붙이면 안됨 예) currentUser
  // 속도는 computed 빠름
  computed: {
    currentUser() {
      // 공유저장소의 전역변수(공유변수 : user)
      // 자동으로 로그인이 되었으면 loggedIn = true, user객체 있음
      // 아니면 loggedIn = false, user객체 = null
      return this.$store.state.auth.user;
      // return true; // 테스트용
    },
  },
  // html에서 함수처럼 호출 : 뒤에 () 붙음 예) logout(), logout
  methods: {
    logOut() {
      // dispatch 호출하는 메소드 : actions에 있는 메소드를 호출함
      this.$store.dispatch("auth/logoutMain");
      // 로그아웃 후 이동할 페이지 지정
      //this.$router.push("/login");
      this.$router.push("/");
    },
    checkToken() {
      const token = localStorage.getItem("user");
      if (!token) {
        // 토큰이 없으므로 로그인 페이지로 리디렉션합니다.
        window.location.href = "/";
      }
      else {
        return token;
      }
    },
  }
}
</script>