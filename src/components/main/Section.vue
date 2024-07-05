<template>
  <div>
    <div class="main">
      <!--<section style="margin-top: -88px;">
        <div class="mainBannerWrap">
          <div class="mainBanner">
            <div class="mainBannerDesc">
              <div class="bannerMainTitleDesc">
                <h1>
                  좋은 아이템을 가지고 계세요??
                </h1>
                <h1>
                  이제 저희와 함께 다양한 <span class="dotText">지</span><span class="dotText">원</span><span
                    class="dotText">사</span><span class="dotText">업</span>이나
                </h1>
                <h1>
                  <span class="dotText">투</span><span class="dotText">자</span><span class="dotText">유</span><span
                    class="dotText">치</span>에 도전해 보세요!!
                </h1>
              </div>
              <p>
                창업 및 사업화 전문가들이 만들고 1300+ (예비)창업자 및 기업들이 사용하고 있는 직관적이고<br />
                UI/UX가 강화된 <span class="pointText">비즈니스 모델 설계 프로그램</span>을 통해 여러분의 <span class="pointText">사업계획
                  설계</span>를 도와드립니다.<br />
                이제부터 쉽고 편리하게 사업아이템을 구체화하고 비즈니스 성공 가능성을 높여 보세요!!!<br />
                저희가 제공하는 플랫폼으로 여러분의 아이템 사업계획(사업모델)을 설계하시고<br />
                <span class="pointText">정부지원 금액 알아보기</span>를 통해 <span class="pointText">지원사업에 도전해 보세요!!</span><br />
              </p>
            </div>
            <div class="mainBtn">
              <router-link to="/main/roadmap">
                <button class="freeBtn">
                  내가 받을 수 있는 <b>정부지원 금액</b> 알아보기
                </button>
              </router-link>
              <router-link to="/main/ticketList">
                <button class="governmentBtn">
                  나의 비즈니스 모델 작성 <b>무료체험</b>하기
                </button>
              </router-link> 
            </div>

            <div class="carouselwrap">
              <slick id="carousel" ref="slick" :options="slickOptions">
                <img v-for="(slide, index) in slides" :key="index" :alt="slide.desc" :src="slide.imgUrl">
              </slick>
            </div>
          </div>

        </div>
      </section>-->

      <!--
      <section id="support">
        <div class="bmdsSupport">
          <img src="/img/main_sub_long_img.png" alt="서브이미지">
        </div>
      </section>
      -->
      <div style="width: 100%; height: auto; position: relative">
        <img
          src="@/assets/main_bg.jpg"
          style="
            height: 100%;
            display: block;
            width: 100%;
            max-height: 620px;
            object-fit: cover;
          "
        />

        <div class="main_txt">
          <h2>IDEA INTO REALITY</h2>
          <p>생각을 현실로 만드는</p>
          <p>아이디어 사업화 프로그램</p>
          <img src="@/assets/yourIdea.png" alt="" class="ab_txt" />
        </div>
        <div class="experience_box">
          <a href="/main/bmds/buildup/list"
            ><img src="@/assets/experience_box.png" alt=""
          /></a>
        </div>
      </div>

      <!-- popup -->
      <div class="modalWrapBox" v-if="isModalVisible">
        <div v-if="isTooltipVisible" class="tooltip"></div>
        <div class="modalDialog">
          <div style="display: flex">
            <div class="modalImgBox">
              <div class="modalGoverImgBox">
                <img
                  src="../../../src/assets/BMDS스페셜 이벤트 배너_1.png"
                  alt=""
                />
              </div>
              <!-- <div class="record">
                <div @mouseover="showTooltip" @mouseout="hideTooltip"></div>
              </div> -->
              <div class="modalGoverBtn">
                <button @click="goToBMLearning">BMDS<br />알아보기</button>
                <button @click="goToJoin">BMDS<br />무료체험하기</button>
                <button @click="goToYoutube">무료강좌<br />보러가기</button>
              </div>
            </div>
            <div class="modalImgBox">
              <img src="../../../src/assets/자산 14.png" alt="" />
              <div class="record2" @click="goToRoadMap">
                <div class="numGoverSup">총 {{ formatNumber(counter) }}원</div>
              </div>
            </div>
          </div>
          <div class="modalHideBtn">
            <button
              type="button"
              class="hideModalForTodayBtn"
              @click="hideModalForToday"
            >
              오늘 하루 안보기
            </button>
            <button
              type="button"
              class="hideModalBtn"
              data-bs-dismiss="modal"
              @click="hideModal"
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>
    <video
      autoplay
      loop="loop"
      muted="muted"
      src="/media/bmds.c61d3e39.mp4"
      type="video/mp4"
      style="
        width: 100%;
        object-fit: cover;
        display: block;
        margin: 165px auto 0px;
        max-width: 1400px;
        border: 1px solid #eaeaea;
      "
    ></video>
    <section id="support">
      <div class="bmdsSupport">
        <img
          src="/img/main_sub_long_img.png"
          alt="서브이미지"
          style="max-width: 1920px; margin: 0px auto; display: block"
        />
      </div>
    </section>
    <section id="logo">
      <div class="md_wrap">
        <div class="md_list">
          <ul>
            <li v-for="(rollImg, index) in rollLogoImg" :key="index">
              <div class="rollLogoImgBox">
                <img v-bind:src="rollImg.imgUrl" :alt="rollImg.desc" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Slick from "vue-slick";

/*eslint-disable*/
export default {
  name: "Section",
  components: {
    Slick,
  },
  data() {
    return {
      isModalVisible: false,
      modalInstance: null,
      isTooltipVisible: false,
      counter: 0,
      max: 352554231,
      rollLogoImg: [
        {
          imgUrl: "/img/main_logo_slide02.png",
          desc: "로고이미지02",
        },
        {
          imgUrl: "/img/main_logo_slide03.png",
          desc: "로고이미지03",
        },
        {
          imgUrl: "/img/main_logo_slide04.png",
          desc: "로고이미지04",
        },
        {
          imgUrl: "/img/main_logo_slide05.png",
          desc: "로고이미지05",
        },
        {
          imgUrl: "/img/main_logo_slide06.png",
          desc: "로고이미지06",
        },
        {
          imgUrl: "/img/main_logo_slide07.png",
          desc: "로고이미지07",
        },
        {
          imgUrl: "/img/main_logo_slide08.png",
          desc: "로고이미지08",
        },
        {
          imgUrl: "/img/main_logo_slide09.png",
          desc: "로고이미지09",
        },
        {
          imgUrl: "/img/main_logo_slide11.png",
          desc: "로고이미지11",
        },
        {
          imgUrl: "/img/main_logo_slide12.png",
          desc: "로고이미지12",
        },
        {
          imgUrl: "/img/main_logo_slide13.png",
          desc: "로고이미지13",
        },
        {
          imgUrl: "/img/main_logo_slide14.png",
          desc: "로고이미지14",
        },
        {
          imgUrl: "/img/main_logo_slide15.png",
          desc: "로고이미지15",
        },
        {
          imgUrl: "/img/main_logo_slide16.png",
          desc: "로고이미지16",
        },
        {
          imgUrl: "/img/main_logo_slide17.png",
          desc: "로고이미지17",
        },
        {
          imgUrl: "/img/main_logo_slide18.png",
          desc: "로고이미지18",
        },
        {
          imgUrl: "/img/main_logo_slide19.png",
          desc: "로고이미지19",
        },
        {
          imgUrl: "/img/main_logo_slide20.png",
          desc: "로고이미지20",
        },
        {
          imgUrl: "/img/main_logo_slide21.png",
          desc: "로고이미지21",
        },
        {
          imgUrl: "/img/main_logo_slide22.png",
          desc: "로고이미지22",
        },
        {
          imgUrl: "/img/main_logo_slide23.png",
          desc: "로고이미지23",
        },
        {
          imgUrl: "/img/main_logo_slide24.png",
          desc: "로고이미지24",
        },
        {
          imgUrl: "/img/main_logo_slide25.png",
          desc: "로고이미지25",
        },
      ],
      slides: [
        {
          imgUrl: "/img/mainBanner_review_01.png",
          desc: "리뷰이미지01",
        },
        {
          imgUrl: "/img/mainBanner_review_02.png",
          desc: "리뷰이미지02",
        },
        {
          imgUrl: "/img/mainBanner_review_03.png",
          desc: "리뷰이미지03",
        },
        {
          imgUrl: "/img/mainBanner_review_04.png",
          desc: "리뷰이미지04",
        },
        {
          imgUrl: "/img/mainBanner_review_01.png",
          desc: "리뷰이미지01",
        },
        {
          imgUrl: "/img/mainBanner_review_02.png",
          desc: "리뷰이미지02",
        },
      ],
      slickOptions: {
        slidesToShow: 3,
        dots: true,
        infinite: false,
        // autoplay: true,
        autoplaySpeed: 2000,
      },
    };
  },
  methods: {
    goToRoadMap() {
      this.hideModal();
      this.$router.push("/main/roadmap");
    },
    formatNumber(num) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    showTooltip() {
      this.isTooltipVisible = true;
    },
    hideTooltip() {
      this.isTooltipVisible = false;
    },
    hideModal() {
      if (this.modalInstance) {
        this.modalInstance.hide();
      }
      this.isModalVisible = false;
    },
    hideModalForToday() {
      console.log("hideModalForToday method called");
      const currentDate = new Date().toDateString();
      localStorage.setItem("hideModalForToday", currentDate);
      this.hideModal(); // hideModal 메서드를 호출하여 모달을 닫음
    },
    checkModalVisibility() {
      const hideModal = localStorage.getItem("hideModalForToday");
      const currentDate = new Date().toDateString();

      if (hideModal !== currentDate) {
        this.isModalVisible = true;
      }
    },
    update() {
      const animatedValue = this.max;
      const range = animatedValue - 0;
      const startTime = new Date().getTime();

      const animate = () => {
        const currentTime = new Date().getTime();
        const elapsed = currentTime - startTime;
        const progress = elapsed / 3000;

        if (progress < 1) {
          this.counter = Math.round(0 + range * progress);
          requestAnimationFrame(animate);
        } else {
          this.counter = animatedValue;
        }
      };

      requestAnimationFrame(animate);
    },
    goToYoutube() {
      this.hideModal();
      window.open(
        "https://www.youtube.com/channel/UCikG_q6xJ3td1_3DdhSnD8Q",
        "_blank"
      );
    },
    goToJoin() {
      this.hideModal();
      this.$router.push("/main/ticketList");
    },
    goToBMLearning() {
      this.hideModal();
      this.$router.push("/main/BMLearning");
    },
    rollBan() {
      let roller = document.querySelector(".md_list");
      roller.id = "roller1";

      let clone = roller.cloneNode(true);
      clone.id = "roller2";
      document.querySelector(".md_wrap").appendChild(clone);

      document.querySelector("#roller1").style.left = "0px";
      document.querySelector("#roller2").style.left =
        document.querySelector(".md_list > ul").offsetWidth + "px";
    },
  },
  mounted() {
    this.checkModalVisibility();
    this.$nextTick(() => {
      if (this.isModalVisible) {
        const modalElement = document.getElementById("exampleModal");
        if (modalElement) {
          this.modalInstance = new bootstrap.Modal(modalElement);
          this.modalInstance.show();
        } else {
          console.error("Modal element not found");
        }
      }
    });
    this.update();
    this.rollBan();
  },
};
</script>

<style>
html {
  overflow-x: hidden;
  font-family: "Pretendard_Rgula" !important;
}

.modalWrapBox {
  background-color: rgba(0, 0, 0, 0.316);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9999;
  min-width: 1200px;
}

.modalDialog {
  display: inline-block;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Pretendard_Rgula" !important;
  width: 90%;
}

.modalImgBox {
  width: 50%;
  background: #fff;
  padding: 1vw;
  border-radius: 10px 10px 0 0;
  position: relative;
}

.modalImgBox:first-child {
  border-right: 1px solid #ced4da;
}

.modalImgBox img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.modalHideBtn {
  background: #fff;
  border-radius: 0 0 10px 10px;
  text-align: right;
  padding: 20px;
  border-top: 1px solid #ced4da;
}

.modalHideBtn button {
  border: none;
  color: #fff;
  border-radius: 10px;
  padding: 10px 15px;
}

.hideModalForTodayBtn {
  margin-right: 8px;
  background: #316cf4;
}

.hideModalBtn {
  background: #6e757c;
}

.modalGoverBtn {
  border-top: 0.5257623554153523vw solid #fff;
}

.modalGoverBtn button {
  border: 1px solid #fff;
  width: 33.3333%;
  padding: 0.7886435331230284vw 0;
  color: #fff;
}

.modalGoverBtn button:first-child {
  border-left: none;
  background: #6145be;
}

.modalGoverBtn button:nth-child(2) {
  background: #46358c;
}

.modalGoverBtn button:last-child {
  border-right: none;
  background: #342b6a;
}

/* .record {
  width: 100%;
  height: 2.5rem;
  float: right;
  display: flex;
  justify-content: end;
  align-items: center;
} */

.numGoverSup {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 23%;
  font-size: 1.5rem;
  font-weight: bold;
}

.record2 {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: #ffffff00;
  cursor: pointer;
}

.mainBanner {
  height: 41.737118822292324vw;
  background: url("/public/img/mainBanner_background_img.png") no-repeat
    center/cover;
  background-size: 100%;
}

.mainBannerWrap {
  position: relative;
}

#carousel {
  max-width: 51.57623554153522vw;
  position: relative;
  padding: 4.206098843322819vw 1.3144058885383807vw;
  overflow: hidden;
}

.carouselwrap {
  position: relative;
  top: 4.206098843322819vw;
  left: 56.833859095688744vw;
}

#carousel .slick-list {
  border-radius: 12px;
}

#carousel .slick-slide {
  float: left;
  height: 100%;
  min-height: 1px;
  transition: 300ms;
}

#carousel .slick-track {
  position: relative;
}

#carousel .slick-current {
  transform: scale(1.2);
}

#carousel [aria-hidden="true"] {
  visibility: hidden;
}

#carousel .slick-slide.slick-active + .slick-active {
  transform: translateX(-5.257623554153523vw);
  position: relative;
  z-index: -1;
  opacity: 0.8;
}

#carousel .slick-slide.slick-active + .slick-active + .slick-active {
  transform: translateX(-13.144058885383805vw) scale(0.8);
  position: relative;
  z-index: -2;
  opacity: 0.4;
}

#carousel .slick-arrow {
  position: absolute;
  z-index: 8888;
  bottom: 13px;
  background: none;
  border: none;
  color: #fff;
}

#carousel .slick-prev {
  left: 150px;
  font-size: 0;
}

#carousel .slick-prev:after {
  content: "← PREV";
  font-size: 16px;
}

#carousel .slick-next:before {
  content: "/";
  position: relative;
  left: -15px;
  font-size: 16px;
}

#carousel .slick-next:after {
  content: "NEXT →";
  font-size: 16px;
}

#carousel .slick-next {
  left: 240px;
  font-size: 0;
}

#carousel .slick-dots {
  position: absolute;
  left: -22px;
  bottom: 3px;
  display: flex;
  align-items: center;
  list-style: none;
  width: 150px;
}

#carousel .slick-dots li {
  font-size: 0;
  margin-right: 10px;
}

#carousel .slick-dots li button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: #f0eff5;
}

#carousel .slick-dots li.slick-active {
  border-radius: 50%;
}

#carousel .slick-dots li.slick-active button {
  background: #aa9bfd;
  width: 12px;
  height: 12px;
}

@import "../../../public/css/main/main.css";

.popupImg {
  width: 43rem;
  height: 40rem;
  position: relative;
  background-image: url("../../../src/assets/BMDS스페셜 이벤트 배너_1.png");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.popupImg2 {
  width: 42rem;
  height: 45rem;
  position: relative;
  background-image: url("../../../src/assets/자산 14.png");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

@media (min-width: 992px) {
  .modal-lg,
  .modal-xl {
    --bs-modal-width: 75%;
  }
}

section img {
  width: 100%;
}

.mainBanner {
  position: relative;
}

.mainBannerDesc {
  position: absolute;
  top: 5.309148264984227vw;
  left: 12.250262881177708vw;
}

.bannerMainTitleDesc {
  margin-bottom: 2.6288117770767614vw;
}

.mainBannerDesc h1 {
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 2.365930599369085vw;
}

.mainBannerDesc p {
  font-size: 0.9463722397476341vw;
}

.dotText {
  color: #615cf1;
  position: relative;
}

.pointText {
  color: #615cf1;
  font-weight: 600;
}

.dotText:after {
  content: "";
  position: absolute;
  top: -4px;
  left: 50%;
  transform: translateX(-50%);
  width: 0.26803364879074657vw;
  height: 0.26803364879074657vw;
  background: #615cf1;
  border-radius: 50%;
}

.mainBtn {
  position: absolute;
  bottom: 7.257623554153523vw;
  left: 12.092534174553101vw;
  display: flex;
  flex-direction: column;
}

.mainBtn button {
  margin-bottom: 10px;
  height: 3.5751840168243953vw;
  border-radius: 10px;
  width: 25.236593059936908vw;
  font-size: 1.1566771819137749vw;
  position: relative;

  text-indent: -1.5772870662460567vw;
}

.mainBtn .freeBtn {
  background: #fff;
  color: #615cf1;
  border: 2px solid #615cf1;
}

.mainBtn .freeBtn b {
  color: #ff3c3b;
  font-size: 1.3144058885383807vw;
}

.mainBtn .governmentBtn b {
  color: #f9ee56;
  font-size: 1.3144058885383807vw;
}

.mainBtn .freeBtn:after {
  background: url("/public/img/main_banner_btn_arrow_purple.png") no-repeat
    center/cover;
}

.mainBtn .governmentBtn:after {
  background: url("/public/img/main_banner_btn_arrow_white.png") no-repeat
    center/cover;
}

.mainBtn .freeBtn:after,
.mainBtn .governmentBtn:after {
  content: "";
  position: absolute;
  top: 50%;
  right: 1.3144058885383807vw;
  transform: translateY(-50%);
  width: 1.3669821240799158vw;
  height: 0.9463722397476341vw;
}

.mainBtn .governmentBtn {
  background: #615cf1;
  color: #fff;
  border: 2px solid #615cf1;
}

section#logo .logoBox img {
  width: auto;
}

.md_wrap {
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 15px 0 5px;
}

.md_wrap ul {
  display: flex;
}

.md_wrap ul li {
  padding: 0 50px;
  display: flex;
  align-items: center;
  background: #fff;
  list-style: none;
}

.md_wrap #roller1 {
  animation: rollingleft1 40s linear infinite;
}

.md_wrap #roller2 {
  animation: rollingleft1 40s linear infinite;
}

@keyframes rollingleft1 {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-100%);
  }
}

@keyframes rollingleft2 {
  0% {
    transform: translateX(100%);
  }

  50% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-100%);
  }
}
.main {
  position: relative;
}
section#logo {
}

section#logo .rollLogoImgBox {
  width: 70px;
}

section#logo img {
  width: 100%;
}

section#support {
  margin: 20px 0 100px;
}
</style>
