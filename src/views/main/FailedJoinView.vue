<template>
  <div class="container">
    <div class="alert alert-danger mt-5 text-center">
      <h4>인증에 실패하셨습니다.</h4>
      <p>가입을 다시 시도해보시고 해결이 안되신다면 문의바랍니다.</p>
      <button @click="goHome" class="btn btn-primary">홈</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.alert {
  width: 100%;
  max-width: 500px;
}
</style>
