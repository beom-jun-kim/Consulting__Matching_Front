<template>
  <div id="layoutSidenav_content">
    <main>
      <div class="container-fluid px-4" style="margin-top: 3rem">
        <div class="row justify-content-center">
          <div class="col-xl-12">
            <div class="card2 mb-4" style="width: 60rem">
              <div class="card-body">
                <div class="row mb-3">
                  <div class="col-md-6">
                    <h5>카테고리</h5>
                    <p class="bg-light p-2 rounded">{{ QnAs.category }}</p>
                  </div>
                  <div class="col-md-6">
                    <h5>작성자</h5>
                    <p class="bg-light p-2 rounded">{{ QnAs.writer }}</p>
                  </div>
                </div>
                <div class="row mb-4">
                  <div class="col-12">
                    <h5>질문</h5>
                    <div class="bg-light p-3 rounded">
                      <div v-html="QnAs.question" />
                    </div>
                  </div>
                </div>
                <div class="row mb-4">
                  <div class="col-12">
                    <h5>답변</h5>
                    <div class="bg-light p-3 rounded" v-if="!QnAs.answer">
                      <p>답변을 달기 전 입니다.</p>
                    </div>
                    <div class="bg-light p-3 rounded" v-else>
                      <p>{{ QnAs.answer }}</p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 d-flex justify-content-center">
                    <button v-if="this.QnAs.user.id === this.user" @click="onSubmitForm" class="btn btn-primary btn_marg">
                      저장
                    </button>
                    <button @click="handleClick()" ref="memberLogin" class="btn btn-secondary btn_marg">
                      돌아가기
                    </button>
                    <button v-if="this.QnAs.user.id === this.user" @click="deleteForm" class="btn btn-danger btn_marg">
                      삭제
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import ServCenterDataService from "@/services/main/ServCenterDataService";
import jwtDecode from "jwt-decode";
export default {
  props: ["state", "id"],
  name: "MypageQnADetail",
  data() {
    return {
      QnAs: {},
      cateList: [
        {
          text: "1",
          value: "비즈니스모델 작성",
        },
        {
          text: "2",
          value: "사업계획서 전환",
        },
        {
          text: "3",
          value: "탈퇴",
        },
        {
          text: "4",
          value: "환불",
        },
        {
          text: "5",
          value: "결제",
        },
        {
          text: "6",
          value: "아이디 찾기",
        },
        {
          text: "7",
          value: "사업계획서 양식",
        },
        {
          text: "8",
          value: "컨설팅",
        },
        {
          text: "9",
          value: "기타",
        },
      ],
      category: "전체",
      writer: "", // 작성자 이름(이메일인데 0자리에서부터 @까지만 표시)
      user: "", // 현재 로그인한 유저아이디
    };
  },
  methods: {
    handleClick() {
      //sc폴더로 상태값을 전달
      this.$emit("update:state", "mypage");
    },
    // id에 해당하는 회원email을 조회하는 서비스를 요청
    getQnA(tid) {
      // axios 통신이용 서비스 호출
      ServCenterDataService.getQnA(tid)
        // 성공하면 then으로 결과 데이터가 들어옴(res.data )
        .then((res) => {
          this.QnAs = res.data;
          const tokenData = localStorage.getItem("user");
          const parsedToken = JSON.parse(tokenData);
          const accessToken = parsedToken.accessToken;
          const decodedToken = jwtDecode(accessToken);
          const userId = decodedToken.id;
          this.user = userId;
        })
        // 실패하면 catch로 에러 데이터가 들어옴
        .catch((e) => {
          alert(e);
        });
    },
    // 버튼 실행시 실행할 함수
    onSubmitForm() {
      if (confirm("저장하시겠습니까?") == true) {
        var data = {
          category: this.QnAs.category,
          question: this.QnAs.question,
          writer: this.QnAs.writer,
          answer: this.QnAs.answer,
        };
        ServCenterDataService.updateQnA(this.id, data)
          .then(() => {
            if (!alert("저장되었습니다.")) {
              this.$emit("update:state", "mypage");
            }
          })
          .catch((e) => {
            // 실패하면 이쪽으로 결과가 들어옴
            alert(e);
          });
      }
    },
    deleteForm() {
      if (confirm("삭제하시겠습니까?") == true) {
        ServCenterDataService.deleteQnA(this.id)
          .then(() => {
            if (!alert("삭제되었습니다.")) {
              this.$emit("update:state", "qna");
            }
          })
          .catch((e) => {
            // 실패하면 이쪽으로 결과가 들어옴
            alert(e);
          });
      }
    },
  },
  mounted() {
    this.getQnA(this.id);
  },
};
</script>

<style>
.btn_marg {
  margin: 0 1rem;
}

.label {
  display: inline-block;
  width: 140px;
  text-align: right;
}

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
