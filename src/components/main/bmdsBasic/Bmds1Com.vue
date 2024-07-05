<template>
  <div class="container mb-5">
    <h1 class="mb-4">Bmds1 작성</h1>
    <form>
      <div class="form-group mb-4">
        <label for="title">제목</label>
        <input type="text" class="form-control" id="title" v-model="title" />
      </div>

      <!-- 카드단위 -->
      <div class="card2 mb-4">
        <div class="card-header">마켓 인사이트</div>
        <div class="card-body">
          <h5 class="card-title">마켓 인사이트에 대한 설명</h5>
          <p class="card-text">
            여기에 마켓 인사이트에 대한 상세한 설명을 적어주세요.
          </p>
          <div class="form-group">
            <input type="text" class="form-control" id="marketInsight" v-model="marketInsight" />
          </div>
        </div>
      </div>
      <!-- 카드단위-end -->
      <!-- 카드단위 -->
      <div class="card2 mb-4">
        <div class="card-header">고객 선정 및 분석</div>
        <div class="card-body">
          <h5 class="card-title">마켓 인사이트에 대한 설명</h5>
          <p class="card-text">
            여기에 마켓 인사이트에 대한 상세한 설명을 적어주세요.
          </p>
          <div class="form-group">
            <input type="text" class="form-control" id="customerSelection" v-model="customerSelection" />
          </div>
        </div>
      </div>
      <!-- 카드단위-end -->
      <!-- 카드단위 -->
      <div class="card2 mb-4">
        <div class="card-header">기존 대안 분석</div>
        <div class="card-body">
          <h5 class="card-title">마켓 인사이트에 대한 설명</h5>
          <p class="card-text">
            여기에 마켓 인사이트에 대한 상세한 설명을 적어주세요.
          </p>
          <div class="form-group">
            <input type="text" class="form-control" id="existingAlternatives" v-model="existingAlternatives" />
          </div>
        </div>
      </div>
      <!-- 카드단위-end -->
      <!-- 카드단위 -->
      <div class="card2 mb-4">
        <div class="card-header">해결안</div>
        <div class="card-body">
          <h5 class="card-title">마켓 인사이트에 대한 설명</h5>
          <p class="card-text">
            여기에 마켓 인사이트에 대한 상세한 설명을 적어주세요.
          </p>
          <div class="form-group">
            <input type="text" class="form-control" id="solution" v-model="solution" />
          </div>
        </div>
      </div>
      <!-- 카드단위-end -->
      <!-- 카드단위 -->
      <div class="card2 mb-4">
        <div class="card-header">가치 선정</div>
        <div class="card-body">
          <h5 class="card-title">마켓 인사이트에 대한 설명</h5>
          <p class="card-text">
            여기에 마켓 인사이트에 대한 상세한 설명을 적어주세요.
          </p>
          <div class="form-group">
            <input type="text" class="form-control" id="valueSelection" v-model="valueSelection" />
          </div>
        </div>
      </div>
      <!-- 카드단위-end -->
      <!-- 카드단위 -->
      <div class="card2 mb-4">
        <div class="card-header">핵심 자원</div>
        <div class="card-body">
          <h5 class="card-title">마켓 인사이트에 대한 설명</h5>
          <p class="card-text">
            여기에 마켓 인사이트에 대한 상세한 설명을 적어주세요.
          </p>
          <div class="form-group">
            <input type="text" class="form-control" id="keyResources" v-model="keyResources" />
          </div>
        </div>
      </div>
      <!-- 카드단위-end -->
      <!-- 카드단위 -->
      <div class="card2 mb-4">
        <div class="card-header">핵심 파트너</div>
        <div class="card-body">
          <h5 class="card-title">마켓 인사이트에 대한 설명</h5>
          <p class="card-text">
            여기에 마켓 인사이트에 대한 상세한 설명을 적어주세요.
          </p>
          <div class="form-group">
            <input type="text" class="form-control" id="keyPartners" v-model="keyPartners" />
          </div>
        </div>
      </div>
      <!-- 카드단위-end -->
      <!-- 카드단위 -->
      <div class="card2 mb-4">
        <div class="card-header">수익 모델</div>
        <div class="card-body">
          <h5 class="card-title">마켓 인사이트에 대한 설명</h5>
          <p class="card-text">
            여기에 마켓 인사이트에 대한 상세한 설명을 적어주세요.
          </p>
          <div class="form-group">
            <input type="text" class="form-control" id="revenueModel" v-model="revenueModel" />
          </div>
        </div>
      </div>
      <!-- 카드단위-end -->
      <!-- 카드단위 -->
      <div class="card2 mb-4">
        <div class="card-header">핵심 활동</div>
        <div class="card-body">
          <h5 class="card-title">마켓 인사이트에 대한 설명</h5>
          <p class="card-text">
            여기에 마켓 인사이트에 대한 상세한 설명을 적어주세요.
          </p>
          <div class="form-group">
            <input type="text" class="form-control" id="keyActivities" v-model="keyActivities" />
          </div>
        </div>
      </div>
      <!-- 카드단위-end -->
      <!-- 카드단위 -->
      <div class="card2 mb-4">
        <div class="card-header">고객 경험 설계</div>
        <div class="card-body">
          <h5 class="card-title">마켓 인사이트에 대한 설명</h5>
          <p class="card-text">
            여기에 마켓 인사이트에 대한 상세한 설명을 적어주세요.
          </p>
          <div class="form-group">
            <input type="text" class="form-control" id="customerExperienceDesign" v-model="customerExperienceDesign" />
          </div>
        </div>
      </div>
      <!-- 카드단위-end -->
      <!-- 카드단위 -->
      <div class="card2 mb-4">
        <div class="card-header">피드백</div>
        <div class="card-body">
          <h5 class="card-title">마켓 인사이트에 대한 설명</h5>
          <p class="card-text">
            여기에 마켓 인사이트에 대한 상세한 설명을 적어주세요.
          </p>
          <div class="form-group">
            <input type="text" class="form-control" id="feedback" v-model="feedback" />
          </div>
        </div>
      </div>
      <!-- 카드단위-end -->
      <div class="bm_location">
        <button class="btn btn-primary" @click="onSubmitForm">제출</button>
        <button class="btn btn-primary mx-5" ref="memberLogin" @click.prevent="() => back()">돌아가기</button>
      </div>
    </form>
  </div>
</template>

<script>
import BMDataService from "@/services/main/BMDataService";
import jwtDecode from "jwt-decode";
import UserDataService from "@/services/main/UserDataService";
/* eslint-disable */
export default {
  data() {
    return {
      userEmail: "",
      userId: "",
      title: "",
      marketInsight: "",
      customerSelection: "",
      existingAlternatives: "",
      solution: "",
      valueSelection: "",
      keyResources: "",
      keyPartners: "",
      revenueModel: "",
      keyActivities: "",
      customerExperienceDesign: "",
      feedback: "",
    };
  },
  methods: {
    back() {
      this.$emit('data', { state: 'BMLearning' })
    },
    // 유저 아이디 받기
    getUserId() {
      const tokenData = localStorage.getItem("user");
      const parsedToken = JSON.parse(tokenData);
      const accessToken = parsedToken.accessToken;
      const decodedToken = jwtDecode(accessToken);
      const userId = decodedToken.id;
      this.userId = userId;
      return userId;
    },
    // id에 해당하는 회원email을 조회하는 서비스를 요청
    getUser(id) {
      // axios 통신이용 서비스 호출
      UserDataService.getUsr(id)
        // 성공하면 then으로 결과 데이터가 들어옴(res.data )
        .then((res) => {
          this.userEmail = res.data.email;
        })
        // 실패하면 catch로 에러 데이터가 들어옴
        .catch((e) => {
          alert(e);
        });
    },
    onSubmitForm() {
      console.log("userId : ", this.userId);
      console.log("userEmail : ", this.userEmail);
      if (confirm("저장하시겠습니까?") == true) {
        const data = {
          userEmail: this.userEmail,
          userId: this.userId,
          title: this.title,
          marketInsight: this.marketInsight,
          customerSelection: this.customerSelection,
          existingAlternatives: this.existingAlternatives,
          solution: this.solution,
          valueSelection: this.valueSelection,
          keyResources: this.keyResources,
          keyPartners: this.keyPartners,
          revenueModel: this.revenueModel,
          keyActivities: this.keyActivities,
          customerExperienceDesign: this.customerExperienceDesign,
          feedback: this.feedback,
        };
        console.log("====================data:", data);
        BMDataService.createBM(data)
          .then(() => {
            if (!alert("저장되었습니다.")) {
              window.location = "/main/mypage";
            }
          })
          .catch((e) => {
            alert(e);
          });
      }
    },
  },
  mounted() {
    this.getUser(this.getUserId());
  },
};
</script>

<style>
.card2 {
  --bs-card-spacer-y: 1rem;
  --bs-card-spacer-x: 1rem;
  --bs-card-title-spacer-y: 0.5rem;
  --bs-card-border-width: 1px;
  --bs-card-border-color: var(--bs-border-color-translucent);
  --bs-card-border-radius: 0.375rem;
  --bs-card-box-shadow: ;
  --bs-card-inner-border-radius: calc(0.375rem - 1px);
  --bs-card-cap-padding-y: 0.5rem;
  --bs-card-cap-padding-x: 1rem;
  --bs-card-cap-bg: rgba(0, 0, 0, 0.03);
  --bs-card-cap-color: ;
  --bs-card-height: ;
  --bs-card-color: ;
  --bs-card-bg: #fff;
  --bs-card-img-overlay-padding: 1rem;
  --bs-card-group-margin: 0.75rem;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  height: var(--bs-card-height);
  word-wrap: break-word;
  background-color: var(--bs-card-bg);
  background-clip: border-box;
  border: var(--bs-card-border-width) solid var(--bs-card-border-color);
  border-radius: var(--bs-card-border-radius);
}
</style>
