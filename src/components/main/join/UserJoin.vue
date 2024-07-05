<template>
  <div class="sp_wrap joinWrapBox">
    <!-- <img class="bg2" src="../../../../public/img/main/bg2.gif" />
    <img class="bg4" src="../../../../public/img/main/bg4.gif" /> -->
    <div>
      <div class="joinPage">

        <div class="wrap joinPage">
          <div class="joinWrap">
            <div class="ttl">
              <div class="img">
                <img src="../../../../public/img/main/login_img.png" />
              </div>
              <div class="txt">
                <span class="bmds preEB">BMDS</span>와 함께 시작하시겠어요?<br />
                <span class="cmt preEB">당신의 창업과 함께하는 Best Solution Partner가 되겠습니다.</span>
              </div>
            </div>
            <form class="preR" @submit.prevent="onSubmit">

              <div class="d-flex">
                <div class="form-group input-box">
                  <span class="joinRequired">*</span>
                  <label for="name" class="joinLabel">이름</label>
                  <input type="text" class="form-control" id="name" v-model="form.name" required />
                </div>
                <!-- <div class="form-group" style="width: 30%">
                  <label for="gender">성별</label>
                  <select class="form-select" name="gender" id="gender" v-model="form.gender" required>
                    <option value="M">남</option>
                    <option value="W">여</option>
                  </select>
                  <h6 style="margin-top: 5px; color: red;">* 필수</h6>
                </div> -->
              </div>

              <div class="form-group mt-4">
                <span class="joinRequired">*</span>
                <label for="email" class="joinLabel">이메일 (아이디)</label>
                <input type="email" class="form-control" id="email" v-model="form.email" required />
              </div>

              <div class="form-group mt-4">
                <span class="joinRequired">*</span>
                <label for="phoneNum" class="joinLabel">연락처 (숫자만 입력)</label>
                <input type="text" class="form-control" id="phoneNum" v-model="form.phoneNum" required />
              </div>

              <div class="d-flex">
                <div class="form-group mt-4 input-box">
                  <span class="joinRequired">*</span>
                  <label for="password" class="joinLabel">비밀번호</label>
                  <input type="password" class="form-control" id="password" v-model="form.password" required />
                  <p class="joinDesc" >비밀번호는 4~12자리 숫자, 영문, 특수문자로 구성될 수 있도록 입력하셔야 합니다.</p>
                </div>
                <div class="form-group mt-4" style="width: 50%;">
                  <span class="joinRequired">*</span>
                  <label for="confirmPassword" class="joinLabel">비밀번호 확인</label>
                  <input type="password" class="form-control" id="confirmPassword" v-model="form.confirmPassword"
                    required />
                  <p class="joinDesc">비밀번호를 한번 더 입력</p>
                </div>
              </div>
              <div class="flex-box">
                <div class="form-group my-4 input-box">
                  <label for="company" class="joinLabel">소속(기업,학교 등)</label>
                  <input type="text" class="form-control" id="company" v-model="form.company" />
                </div>
                <div class="form-group mt-4" style="width: 50%;">
                  <label for="affiliationGroup" class="joinLabel">그룹 코드</label>
                  <input type="text" class="form-control" id="affiliationGroup" v-model="form.affiliationGroup" />
                </div>
                <!-- <div class="form-group mt-4 mentorSel" style="width: 50%;">
                  <p>멘토여부</p>

                  <input type="radio" id="mentor" name="mentor" v-model="form.mentor" value="mentor" />
                  <label for="mentor">멘토</label>

                  <input type="radio" id="mentee" name="mentor" v-model="form.mentor" value="mentee" />
                  <label for="mentee">멘티</label>
                </div> -->
              </div>

              <b-modal class="preR" id="modal1" title="약관">
                <TermsCom />
                <hr />
                <PrivacyPolicy />
              </b-modal>
              <div class="form-group form-check">
                <input type="checkbox" class="form-check-input joinAgree" id="agreement" v-model="form.agreement" required />
                <label class="form-check-label joinLabel" for="agreement">약관에 동의합니다.</label>
              </div>
              <div class="d-flex" style="float: right">
                <button type="button" v-b-modal.modal1 class="joinBtn" style="border: 1px solid #dee2e6;">
                  약관확인
                </button>
                <button type="submit" class="joinBtn" style="border: 1px solid #dee2e6;">
                  가입하기
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserDataService from "@/services/main/UserDataService";
// import router from "@/router";
import PrivacyPolicy from "@/components/main/PrivacyPolicy.vue"
import TermsCom from "@/components/main/TermsCom.vue"
export default {
  name: "userJoin",
  components: {
    PrivacyPolicy,
    TermsCom
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        phoneNum: "",
        password: "",
        confirmPassword: "",
        company: "",
        agreement: false,
        affiliationGroup: "",
        mentor: "",
        
      },
    };
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault();
      if (this.form.password !== this.form.confirmPassword) {
        alert("비밀번호가 일치하지 않습니다.");
        return;
      }

      try {
        const data = {
          name: this.form.name,
          email: this.form.email,
          phoneNum: this.form.phoneNum,
          password: this.form.password,
          confirmPassword: this.form.confirmPassword,
          company: this.form.company,
          agreement: this.form.agreement,
          affiliationGroup: this.form.affiliationGroup,
          mentor: this.form.mentor,
        }
        console.log("xxxxxxxxxxxdataxxxxxxxxxx", data);
        const response = await UserDataService.createUser(data)
        console.log("회원가입 성공", response.data);
        alert("회원가입이 완료되었습니다");
        this.$router.push("/main/MemberLogin");
      } catch (e) {
        const errorMessage = e.response.data.message;
        if (errorMessage.includes('already taken')){
          alert("이미 가입되어 있는 이메일입니다 다른 이메일을 사용하여주세요");
        } else {
          console.log("회원가입 실패",e.response.data.message);
        }
      }
    },
  },
};
</script>

<style></style>
