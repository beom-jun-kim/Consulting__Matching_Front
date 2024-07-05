<template>
  <div class="sp_wrap">
    <div class="sp_container">
      <h6>BMDS 소개</h6>
      <div class="bmdsIntroductWrap">
    <div class="bmds-intro">
      <img src="../../assets/bmds_introduce.jpg">
    </div>
    <div class="introduceScrollBtn">
      <button @click="introduceScrollTopBtn"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"
          fill="#614A96" class="bi bi-arrow-up-square" viewBox="0 0 16 16">
          <path fill-rule="evenodd"
            d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
        </svg>
      </button>
      <button @click="introduceScrollButtonBtn"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"
          fill="#614A96" class="bi bi-arrow-up-square" viewBox="0 0 16 16">
          <path fill-rule="evenodd"
            d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
        </svg>
      </button>
    </div>
  </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BMLearning",
  methods: {
    introduceScrollTopBtn() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
    introduceScrollButtonBtn() {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }
};
</script>

<style>
.introduceScrollBtn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
}

.introduceScrollBtn button {
  background: none !important;
  border-radius: 10px;
  padding: 0;
  margin: 10px 0;
  border: none;
}

.introduceScrollBtn button:last-child {
  transform: rotate(180deg);
  margin-left: 0;
}

.bmds-intro {
  max-width: 1280px;
  margin: 0 auto;
}

.bmds-intro img {
  width: 100%;
}

#bm_service {
  margin: auto;
  padding: 11px 70px;
  font-size: 26px;
  color: #fff;
  background: #644d9d;
  border-radius: 15px;
  border: 1px solid #644d9d;
  transition: all 0.3s;
  cursor: pointer;
}


/* body,
html {
  height: 100%;
} */

/* .feature {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 3rem;
  font-size: 1.5rem;
}

.bg-featured-blog {
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 15rem;
}

.bmds-banner {
  width: 100%;
  min-height: 24rem;
  background-image: url(/public/img/bmds/top_banner02.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
} */

/* .bmds-area {
  width: 100%;
  min-height: 50rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
} */

/* .bmdswrap {
  width: 64rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.bmdswrap video {
  margin: 1rem;
  width: 40rem;
  box-shadow: 0.5rem 0.5rem 2px 1px rgba(130, 130, 136, 0.704);
} */

/* .bmds-intro p {
  font-size: 1rem;
  font-weight: 600;
  line-height: 2rem;
}

.bmds-intro p>span {
  font-size: 0.8rem;
}

.bmds-intro p {
  font-size: 1rem;
  font-weight: 600;
  line-height: 2rem;
  margin-bottom: 1rem;
}

.bmds-intro ul li {
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
}

.chapter-1 {
  background-color: #d8effd;
  margin: 1rem 0;
}

.chapter-1 h1 {
  font-size: 3rem;
  padding: 1rem 0 0 1rem;
  font-weight: 700;
}

.chapter-1 h2 {
  font-size: 2rem;
  padding: 1rem;
  font-weight: 700;
}

.img_title {
  padding-top: 1rem;
  text-align: center;
}

.img_title img {
  margin: 0;
  width: 100%;
}

.chapter-2 {
  background-color: #f6f1f8;
  margin: 1rem 0;
}

.chapter-2 h1 {
  font-size: 3rem;
  padding: 1rem 0 0 1rem;
  font-weight: 700;
}

.chapter-2 h2 {
  font-size: 2rem;
  padding: 1rem;
  font-weight: 700;
}

.chapter-3 {
  background-color: #fdf1d1;
  margin: 1rem 0;
}

.chapter-3 h1 {
  font-size: 3rem;
  padding: 1rem 0 0 1rem;
  font-weight: 700;
}

.chapter-3 h2 {
  font-size: 2rem;
  padding: 1rem;
  font-weight: 700;
}

.bm_location {
  margin: 2rem 0;
  text-align: center;
} */

/* @media screen and (max-width: 414px) {
  .bmdswrap {
    width: 32rem;
  }

  .bmdswrap video {
    width: 30rem;
  }
} */
</style>

<!-- <div class="chapter-1">
                        <h1>Chapter 1</h1>
                        <h2>Business Model Learning</h2>
                    </div>
                    <div>
                        <p>사업 계획서를 탄탄하게 작성하려면비즈니스모델에 대한 이해는 필수!</p>
                        <p>BMDS는 명쾌한 설명과 예시로 11가지 비즈니스모델 각 항목들의 의미를 쉽고 정확하게 이해할 수 있도록 도와드립니다.</p>
                    </div>
                    <div class="img_title">
                        <p>「 MERAKL이 보완한 11가지 비즈니스모델 흐름도 」</p>
                        <img src="/public/img/bmds/service_1.png">
                    </div>
                    <div class="chapter-2">
                        <h1>Chapter 2</h1>
                        <h2>My Business Model Design</h2>
                    </div>
                    <div>
                        <p>나만의 스토리텔링을 구상하다!</p>
                        <p>웹 기반의 BM 설계 프로그램을 통해 비즈니스모델 캔버스를 작성한 뒤, 각 요소들 상호 간의 정합성을 확보하고 스토리텔링 기반의 사업을 구상합니다.</p>
                        <img src="/public/img/bmds/service_2.png">
                    </div>
                    <div>
                        <p>메라클에서 다년간의 컨설팅 노하우를 통해 개발한 비즈니스 모델 캔버스(9Block)와 린 캔버스를 융합하여 사업계획서와의 연계성을 높인 비즈니스 모델 디자인(11Block)을
                            활용</p>
                        <img src="/public/img/bmds/service_3.png">
                    </div>
                    <div>
                        <p>각 항목별 명쾌한 설명과 예시로 누구나 쉽게 자신의 사업 아이템에 적합한 비즈니스 모델 캔버스를 작성하고성공적인 스토리텔링을 구성합니다.</p>
                        <img src="/public/img/bmds/service_4.png">
                    </div>
                    <div>
                        <p>작성된 비즈니스 모델을 전문가가 직접 평가해드립니다.</p>
                        <p>비즈니스 모델 기획 전문가 및 실무자로부터 사업 타당성에 대한 평가를 지원받을 수 있습니다. 약점, 개선점 등을 보완하고 지속 가능한 사업이 될 수 있도록 BMDS가 확실하게
                            도와드리겠습니다.</p>
                    </div>
                    <div class="img_title">
                        <p>「 웹 기반 BM 설계 프로그램 서비스 」</p>
                        <img src="/public/img/bmds/service_5.png">
                    </div>
                    <div class="chapter-3">
                        <h1>Chapter 3</h1>
                        <h2>My Business Plan Completion</h2>
                    </div>
                    <div>
                        <p>쉽고 간편하게 완성하는 사업계획서!</p>
                        <p>완성된 비즈니스모델 결과를 사업계획서 포맷에 맞게 전환해드립니다. 사업의 투자 가치를 높일 수 있도록 BMDS와 함께 프로젝트를 완성해보세요.</p>
                        <img src="/public/img/bmds/service_6.png">
                    </div>
                    <div class="img_title">
                        <p>[사업계획서 변환 결과물]</p>
                    </div>
                    <div>
                        <p>다양한 정부지원사업계획서 양식에 맞게 초안 수준의 사업계획서를 도출해드립니다.</p>
                        <p>나의 첫 사업 파트너, BMDS</p>
                        <p>“ 한 줄 쓰기도 어려웠던 사업 계획서,</p>
                        <p>이젠 BMDS와 함께 명확하고 간편하게 사업 계획서를 작성하세요”</p>
                    </div> -->
<!-- <div class="bm_location">
                        
                    </div> -->
