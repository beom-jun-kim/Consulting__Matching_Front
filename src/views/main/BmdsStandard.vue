<template>
  <div class="coming-soon-page">
    <Nav />
    <div class="text-center">
      <h1 class="display-1 my-5">오픈 준비중입니다</h1>
      <p class="lead mb-5">
        우리의 새로운 서비스가 곧 여러분께 찾아옵니다. 조금만 기다려주세요!
      </p>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.coming-soon-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.coming-soon-page h1 {
  font-size: 3rem;
  font-weight: bold;
}

.coming-soon-page p {
  font-size: 1.5rem;
}
</style>
