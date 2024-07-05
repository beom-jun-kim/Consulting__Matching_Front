<template>
  <div class="footer">
    <footer class="container-fluid">
      <div class="row justify-content-between p-4">
        <div class="col-12 col-md-6 col-lg-8 mb-3 mb-md-0">
          <div class="mb-3 ft_Lline">
            <img src="data:image/png;base64,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">
            <div>
              <b class="fs-5">(주)메라클</b>
            <a href="/main/termsCom" class="ms-3 text-decoration-none">개인정보처리방침</a>
            <a href="/main/termsCom" class="ms-3 text-decoration-none">이용약관</a>
            </div>
          </div>
          <div class="small">
            대표이사 : 이동규 | 전화 : 051-911-3330~7 | 이메일 : office1@meraklus.com<br />
            사업자 등록번호 : 617-86-09934 | 통신판매업 신고번호 : 2018-부산해운대-0428<br />
            주소 : 부산광역시 해운대구 센텀중앙로 97(재송동), 센텀스카이비즈 A동
            2407호
          </div>
          <div class="small mb-0">
            Since 2019 © 2023 MERAKL Co.,Ltd.All Rights Reserved<span @click="goBackDoor">.</span>
          </div>
        </div>
        <!-- <div class="col-12 col-md-6 col-lg-4 d-flex align-items-end">
          <a href="/"><img src="../../../public/img/main/bmds-logo-gray.png" class="img-fluid" alt="Company Logo" /></a>
        </div> -->
      </div>
    </footer>
  </div>
</template>

<script>
/*eslint-disable*/
export default {
  name: "Footer",
  methods: {
    goBackDoor() {
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style scoped>

</style>
