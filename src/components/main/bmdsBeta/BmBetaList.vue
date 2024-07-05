<template>
  <div>
    <div class="tagline text-center my-4">
      <h2>BMDS_Build-up_Beta</h2>
    </div>
    <div class="d-flex justify-content-center mb-5" style="min-height: 50rem">
      <div class="my-5">
        <div class="container">
          <div class="my-4">
            <div class="bmPlusBtn mb-4" @click="showModal()">
              <div class="bmTitle">비즈니스 모델</div>
              <div class="bmSubtitle">추가하기</div>
              <div class="plus_icon">
                <div class="horizontal_line"></div>
                <div class="vertical_line"></div>
              </div>
            </div>
            <div v-for="(bm, i) in MyBms" :key="i" class="myBmList mb-4">
              <div class="bmds_title" @click="goToMyBmDetail(bm.id)">
                {{ bm.title }}
                <div class="fs-5" style="color: #686868">
                  {{ bm.category }}
                </div>
              </div>

              <div class="updDelBtn">
                <div
                  class="d-flex justify-content-center align-items-center"
                  style="width: 32rem"
                >
                  <div
                    class="d-flex justify-content-between align-items-center"
                    style="width: 11rem"
                  >
                    <button class="updBtn" @click="openModal(bm.id)">
                      수정
                    </button>
                    <button class="delBtn" @click="delBm(bm.id)">삭제</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-wrapper" v-if="isModalOpen === true">
      <div class="black-bg">
        <div class="white-bg2" @click.stop>
          <div class="backWhiteInput">
            <h3 class="modalTitle">
              <span v-if="isCreate === false">비즈니스 모델 수정하기</span>
              <span v-if="isCreate === true">비즈니스 모델 추가하기</span>
            </h3>
            <div class="mt-3">
              <div class="d-flex justify-content-between">
                <div class="input-group input-group-lg">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="사업아이템명을 작성해주세요."
                    v-model="title"
                  />
                </div>
              </div>

              <!-- Radio buttons and other input elements go here -->
              <!-- <div class="input-group mt-3">
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="bmds_category" id="smallBusiness" value="소상공인"
                    v-model="category" checked />
                  <label class="form-check-label" for="smallBusiness">소상공인</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="bmds_category" id="manufacturer" value="제조업"
                    v-model="category" />
                  <label class="form-check-label" for="manufacturer">제조업</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="bmds_category" id="informationCommunication"
                    value="정보통신업" v-model="category" />
                  <label class="form-check-label" for="informationCommunication">정보통신업</label>
                </div>
              </div> -->
            </div>
          </div>
          <button @click="closeModal()" class="modal-exit-btn">취소</button>
          <button
            v-if="isCreate == false"
            @click="updateBM()"
            class="modal-add-btn"
          >
            수정하기
          </button>
          <button
            v-if="isCreate == true"
            @click="addBM()"
            class="modal-add-btn"
          >
            생성하기
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jwtDecode from "jwt-decode";
import BetaBmdsService from "@/services/main/BetaService";
export default {
  name: "MyBm",
  data() {
    return {
      MyBms: {},
      isModalOpen: false,
      isCreate: false,
      isUpdate: false,
      beta_id: 0,
      title: "",
      category: "소상공인",
    };
  },
  methods: {
    // 유저 아이디 받기
    getUserId() {
      const tokenData = localStorage.getItem("user");
      const parsedToken = JSON.parse(tokenData);
      const accessToken = parsedToken.accessToken;
      const decodedToken = jwtDecode(accessToken);
      const userId = decodedToken.id;
      return userId;
    },
    // 선택한 비즈니스모델 모달창 열기
    openModal(i) {
      this.isModalOpen = true;
      BetaBmdsService.getOneBetaBmds(i).then((res) => {
        this.title = res.data.title;
        this.category = res.data.category;
        this.beta_id = res.data.id;
      });
    },
    // 비즈니스모델 생성 모달창 열기
    showModal() {
      this.isModalOpen = true;
      this.isCreate = true;
    },
    // 모달창 닫기
    closeModal() {
      this.isModalOpen = false;
      this.isCreate = false;
      this.title = "";
      this.category = "소상공인";
    },
    // 비즈니스모델 전체 조회
    getBM(id) {
      BetaBmdsService.getBetaBmdsByUserAll(id)
        .then((res) => {
          this.MyBms = res.data;
        })
        .catch(() => {});
    },
    // 비즈니스모델 생성
    addBM() {
      if (confirm("생성하시겠습니까?") == true) {
        var data = {
          id: this.beta_id,
          title: this.title,
          category: this.category,
        };

        // 현재 사용자의 비즈니스 모델 확인
        BetaBmdsService.getBetaBmdsByUserAll(this.getUserId())
          .then((res) => {
            if (res.data.length > 0) {
              // 이미 비즈니스 모델이 존재하는 경우
              alert(
                "이미 비즈니스 모델이 존재합니다. 추가 생성이 불가능합니다."
              );
            } else {
              // 비즈니스 모델이 존재하지 않는 경우, 생성
              BetaBmdsService.createBetaBmds(this.getUserId(), data)
                .then(() => {
                  if (!alert("생성되었습니다.")) {
                    window.location.reload(true);
                  }
                })
                .catch(() => {
                  // 생성 실패 처리
                });
              this.title = "";
              this.category = "";
            }
          })
          .catch(() => {
            alert("이용권이 있는지 확인해 주세요.");
          });
      }
    },

    // 비즈니스모델 삭제
    delBm(i) {
      if (confirm("삭제하시겠습니까?")) {
        BetaBmdsService.deleteBM(i).then(() => {
          if (!alert("삭제되었습니다.")) {
            window.location.reload(true);
          }
        });
      }
    },
    // 비즈니스모델 선택값 수정
    updateBM() {
      var data = {
        id: this.beta_id,
        title: this.title,
        category: this.category,
      };
      if (confirm("수정하시겠습니까?")) {
        BetaBmdsService.updateBetaBmds(this.beta_id, data)
          .then(() => {
            if (!alert("수정되었습니다.")) {
              window.location.reload(true);
            }
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
    // 비즈니스모델 작성하러가기
    goToMyBmDetail(id) {
      location.href = `/main/bmds/basic/${id}`;
    },
  },
  // 비즈니스모델 조회
  mounted() {
    this.getBM(this.getUserId());
  },
};
</script>

<style scoped>
@import url("../../../../public/css/main/styles.css");
</style>
