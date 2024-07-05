<template>
  <div id="layoutSidenav_content" class="preR">
    <main>
      <div class="container-fluid px-4">
        <h1 class="mt-4">슈퍼바이저추가</h1>
        <ol class="breadcrumb mb-4">
          <li class="breadcrumb-item active"></li>
        </ol>
        <div class="row">
          <div class="col-xl-12">
            <div class="card2 mb-4">
              <div class="card-header">슈퍼바이저</div>
              <div class="card-body d-md-flex flex-column justify-content-start p-4">

                <div style="clear: both; line-height: 50px; vertical-align: middle; font-size: 30px; margin-top: 20px;">
                  <div style="float: left; width: 210px; text-align: right">슈퍼바이저 코드 :</div>
                  <div style="float: left; padding-left: 20px;">
                    <input class="form-control" style="height: 48px;" id="sCode" required v-model="supervisor.sCode" name="sCode" />
                  </div>
                </div>

                <div style="clear: both; line-height: 50px; vertical-align: middle; font-size: 30px; margin-top: 20px;">
                  <div style="float: left; width: 210px; text-align: right">회사명 :</div>
                  <div style="float: left; padding-left: 20px;">
                    <input class="form-control" style="height: 48px;" id="company" required v-model="supervisor.company" name="company" />
                  </div>
                </div>

                <div style="clear: both; line-height: 50px; vertical-align: middle; font-size: 30px; margin-top: 20px;">
                  <div style="float: left; width: 210px; text-align: right">사업자 등록번호 :</div>
                  <div style="float: left; padding-left: 20px;">
                    <input class="form-control" style="height: 48px;" id="businessNum" required v-model="supervisor.businessNum" name="businessNum" />
                  </div>
                </div>

                <div style="clear: both; line-height: 50px; vertical-align: middle; font-size: 30px; margin-top: 20px;">
                  <div style="float: left; width: 210px; text-align: right">대표자명 :</div>
                  <div style="float: left; padding-left: 20px;">
                    <input class="form-control" style="height: 48px;" id="representativeName" required v-model="supervisor.representativeName" name="representativeName" />
                  </div>
                </div>

                <div style="clear: both; line-height: 50px; vertical-align: middle; font-size: 30px; margin-top: 20px;">
                  <div style="float: left; width: 210px; text-align: right">전화번호 :</div>
                  <div style="float: left; padding-left: 20px;">
                    <input class="form-control" style="height: 48px;" id="companyTel" required v-model="supervisor.companyTel" name="companyTel" />
                  </div>
                </div>

                <div style="clear: both; line-height: 50px; vertical-align: middle; font-size: 30px; margin-top: 20px;">
                  <div style="float: left; width: 210px; text-align: right">팩스번호 :</div>
                  <div style="float: left; padding-left: 20px;">
                    <input class="form-control" style="height: 48px;" id="faxTel" required v-model="supervisor.faxTel" name="faxTel" />
                  </div>
                </div>

                <div style="clear: both; line-height: 50px; vertical-align: middle; font-size: 30px; margin-top: 20px;">
                  <div style="float: left; width: 210px; text-align: right">메일 :</div>
                  <div style="float: left; padding-left: 20px;">
                    <input class="form-control" style="height: 48px;" id="companyEmail" required v-model="supervisor.companyEmail" name="companyEmail" />
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
        <div class="d-flex mt-3">
          <div class="m-auto">
            <button @click="insertSupervisor()" class="btn btn-primary me-md-5">저장</button>
            <router-link to="/admin/supervisorList" class="btn btn-secondary">취소</router-link>
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
      supervisor: {
        sCode: "",
        company: "",
        businessNum: "",
        representativeName: "",
        companyTel: "",
        faxTel: "",
        companyEmail: ''
      },
    };
  },
  methods: {
    // 버튼 실행시 실행할 함수
    async insertSupervisor() {
      if (confirm("저장하시겠습니까?") == true) {
        try {
          var data = {
            sCode: this.supervisor.sCode,
            company: this.supervisor.company,
            businessNum: this.supervisor.businessNum,
            representativeName: this.supervisor.representativeName,
            companyTel: this.supervisor.companyTel,
            faxTel: this.supervisor.faxTel,
            companyEmail: this.supervisor.companyEmail
          };
          console.log('data', data);
          await UserDataService.insertSupervisor(data);
          if (!alert("저장되었습니다.")) {
            // this.$router.push(`/admin/supervisorList`);
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
