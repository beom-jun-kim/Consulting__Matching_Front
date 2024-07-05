<template>
  <div>
    <!-- 여기에 이메일 인증 상태를 표시하는 UI를 추가할 수 있습니다. -->
  </div>
</template>

<script>
import UserDataService from '@/services/main/UserDataService';
// import axios from "axios";

export default {
  created() {
    const email = this.$route.query.email;
    const code = this.$route.query.code;

    // 이메일 인증 API를 호출합니다.
    // axios
    //   .get(`/api/auth/confirm?email=${email}&code=${code}`)
    UserDataService.confirmEmail(email, code)
      .then((response) => {
        console.log(response.data);

        // 성공적으로 이메일이 인증되었으면 로그인 페이지로 리다이렉션합니다.
        if (response.data === 1) {
          this.$router.push("/main/MemberLogin");
        } else {
          this.$router.push("/main/failedJoin");
        }
      })
      .catch((error) => {
        console.log(error);
        // 에러 처리
        console.error(error.response);
        // 에러 메시지를 표시하거나 사용자를 다른 페이지로 리다이렉션할 수 있습니다.
      });
  },
};
</script>
