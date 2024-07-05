<template>
  <div>
    <div class="d-flex justify-content-end align-items-center">
      <div style="color: gray; font-size: 1rem; margin-right: 0.5rem">
        Copyright 2023. MERAKL Inc. all rights reserved.
      </div>
      <div style="margin-right: 1rem">
        <img src="@/assets/bmds3/흑백 로고.png" />
      </div>
    </div>
    <div class="d-flex justify-content-start" style="height: 5rem">
      <div class="d-flex" style="margin-left: 1rem">
        <div class="d-flex justify-content-between" style="width: 37rem">
          <img
            src="@/assets/basicBulb.png"
            alt="돋보기"
            style="width: 50px; height: 50px"
          />
          <div class="preEB" style="font-size: 35px; color: #f75943">
            STEP 03 :
          </div>
          <div class="preEB" style="font-size: 35px">
            아이디어 컨셉 정의 및 개발
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="basicContentBar preSB" style="width: 35rem !important">
        3-3 : 시장 적합성(KBF) 및 적응성 설계(4P)
      </div>
    </div>

    <div class="preM" style="width: 81rem; height: 41.5rem">
      <!-- <div class="my-3">
        <label
          for="businessArea"
          class="preSB form-label"
          style="font-size: 28px"
        >
          <span class="primeColor">2.</span> 고객의 욕구를 정확하게 해결하여 더
          나은 고객 경험을 제공하기 위해 해결해야 할 문제를 구체적으로
          정의하고<br />&nbsp;&nbsp;&nbsp;&nbsp;고객관점의 경쟁적이고 차별적인
          솔루션을 제시합니다.
        </label>
      </div> -->

      <div
        class="my-3 d-flex justify-content-center align-items-center"
        style="height: 39rem; position: relative"
      >
        <div>
          <label for="businessArea" class="preSB form-label fs-4">
            <span class="primeColor">3-2.</span>제품/서비스에 대한 고객 인식
            수준 향상과 시장 적응성 제고를 위한 수요 고객과의 효과적 소통 방안을
            수립합니다.<br /><span style="font-size: 20px"
              >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(제품/서비스가
              여러가지일 경우에는 페이지를 복사하여 제품/서비스별로
              작성하세요.)</span
            ></label
          >
          <div
            class="d-flex flex-column justify-content-between align-items-center mix4p"
            style="width: 79rem; height: 36rem"
          >
            <div
              class="d-flex flex-column justify-content-between align-items-center mix4p"
              style="width: 79rem; height: 36rem"
            >
              <!-- 1행 -->
              <div class="d-flex w-100 firstCol">
                <div class="oneCol" style="width: 6%; flex-grow: 0.5">
                  <div
                    v-html="productKey"
                    class="form-control transparent-input"
                    placeholder="키워드로 답변해주세요."
                    style="
                      resize: none;
                      height: 100%;
                      overflow-y: hidden;
                      font-size: 1rem;
                    "
                  ></div>
                </div>
                <div class="twoCol" style="width: 44%; flex-grow: 4">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="colorBox ms-1"></div>
                    <div class="preM ms-1" style="width: 9rem">
                      브랜드(제품명) :
                    </div>
                    <div
                      v-html="productName"
                      type="text"
                      class="form-control transparent-input"
                      placeholder="제품명이나 브랜드명을 입력해주세요."
                    />
                  </div>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="colorBox ms-1"></div>
                    <div class="preM ms-1" style="width: 7rem">
                      제품의 핵심 기능 및 성능 :
                    </div>
                    <div
                      v-html="productFunc"
                      type="text"
                      class="form-control transparent-input"
                      placeholder="핵심적인 기능 및 성능을 입력해주세요."
                    />
                  </div>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="colorBox ms-1"></div>
                    <div class="preM ms-1" style="width: 9rem">디자인 :</div>
                    <div
                      v-html="productDesign"
                      type="text"
                      class="form-control transparent-input"
                      placeholder="디자인에 관해 간략히 설명해주세요."
                    />
                  </div>
                </div>
                <div class="threeCol" style="width: 44%; flex-grow: 4">
                  <div>
                    <div
                      class="d-flex justify-content-start align-items-center"
                    >
                      <div
                        class="colorBox ms-1"
                        style="width: 1rem !important"
                      ></div>
                      <div class="preM ms-1">가격수준</div>
                    </div>
                    <div
                      class="d-flex justify-content-start align-items-center"
                      style="height: 0rem"
                    >
                      <!-- Radio 버튼들 -->
                      <div
                        class="form-check mx-1"
                        style="padding-left: 2rem; margin-top: -1.5rem"
                      >
                        <input
                          class="form-check-input"
                          type="radio"
                          id="ultra-low"
                          value="초저가"
                          name="priceRange"
                          v-model="priceLevel"
                          @click.prevent
                        />
                        <label
                          class="preR form-check-label fs-16"
                          for="ultra-low"
                          style="color: black"
                        >
                          초저가
                        </label>
                      </div>
                      <div
                        class="form-check mx-1"
                        style="padding-left: 1.5rem; margin-top: -1.5rem"
                      >
                        <input
                          class="form-check-input"
                          type="radio"
                          id="low"
                          value="저가"
                          name="priceRange"
                          v-model="priceLevel"
                          @click.prevent
                        />
                        <label
                          class="preR form-check-label fs-16"
                          for="low"
                          style="color: black"
                        >
                          저가
                        </label>
                      </div>
                      <div
                        class="form-check mx-1"
                        style="padding-left: 1.5rem; margin-top: -1.5rem"
                      >
                        <input
                          class="form-check-input"
                          type="radio"
                          id="medium-low"
                          value="중저가"
                          name="priceRange"
                          v-model="priceLevel"
                          @click.prevent
                        />
                        <label
                          class="preR form-check-label fs-16"
                          for="medium-low"
                          style="color: black"
                        >
                          중저가
                        </label>
                      </div>
                      <div
                        class="form-check mx-1"
                        style="padding-left: 1.5rem; margin-top: -1.5rem"
                      >
                        <input
                          class="form-check-input"
                          type="radio"
                          id="used"
                          value="중고가"
                          name="priceRange"
                          v-model="priceLevel"
                          @click.prevent
                        />
                        <label
                          class="preR form-check-label fs-16"
                          for="used"
                          style="color: black"
                        >
                          중고가
                        </label>
                      </div>
                      <div
                        class="form-check mx-1"
                        style="padding-left: 1.5rem; margin-top: -1.5rem"
                      >
                        <input
                          class="form-check-input"
                          type="radio"
                          id="high"
                          value="고가"
                          name="priceRange"
                          v-model="priceLevel"
                          @click.prevent
                        />
                        <label
                          class="preR form-check-label fs-16"
                          for="high"
                          style="color: black"
                        >
                          고가
                        </label>
                      </div>
                      <div
                        class="form-check mx-1"
                        style="padding-left: 1.5rem; margin-top: -1.5rem"
                      >
                        <input
                          class="form-check-input"
                          type="radio"
                          id="premium"
                          value="프리미엄"
                          name="priceRange"
                          v-model="priceLevel"
                          @click.prevent
                        />
                        <label
                          class="preR form-check-label fs-16"
                          for="premium"
                          style="color: black"
                        >
                          프리미엄
                        </label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      class="d-flex justify-content-start align-items-center"
                      style="height: 2rem"
                    >
                      <div
                        class="colorBox ms-1"
                        style="width: 1rem !important"
                      ></div>
                      <div class="preM ms-1">가격 정책</div>
                    </div>
                    <div
                      class="d-flex justify-content-start align-items-center"
                      style="height: 2rem"
                    >
                      <!-- Radio 버튼들 -->
                      <div
                        class="form-check mx-1"
                        style="padding-left: 2rem; margin-top: -1.5rem"
                      >
                        <input
                          class="form-check-input"
                          type="radio"
                          id="seasonPrice"
                          value="시간대(계절) 별 가격변동"
                          name="priceChange"
                          v-model="priceStrategy"
                          @click.prevent
                        />
                        <label
                          class="preR form-check-label fs-14"
                          for="seasonPrice"
                          style="color: black"
                        >
                          시간대(계절) 별 가격변동
                        </label>
                      </div>
                      <div
                        class="form-check mx-1"
                        style="padding-left: 1.4rem; margin-top: -1.5rem"
                      >
                        <input
                          class="form-check-input"
                          type="radio"
                          id="itemPrice"
                          value="구매수량 별 가격변동"
                          name="priceChange"
                          v-model="priceStrategy"
                          @click.prevent
                        />
                        <label
                          class="preR form-check-label fs-14"
                          for="itemPrice"
                          style="color: black"
                        >
                          구매수량 별 가격변동
                        </label>
                      </div>
                      <div
                        class="form-check mx-1"
                        style="padding-left: 1.4rem; margin-top: -1.5rem"
                      >
                        <input
                          class="form-check-input"
                          type="radio"
                          id="channelPrice"
                          value="유통채널 별 가격변동"
                          name="priceChange"
                          v-model="priceStrategy"
                          @click.prevent
                        />
                        <label
                          class="preR form-check-label fs-14"
                          for="channelPrice"
                          style="color: black"
                        >
                          유통채널 별 가격변동
                        </label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      class="d-flex justify-content-start align-items-start mb-2"
                    >
                      <div
                        class="colorBox ms-1"
                        style="width: 1rem !important"
                      ></div>
                      <div class="preM ms-1">거래 방식</div>
                    </div>
                    <!-- 첫 번째 줄 라디오 버튼들 -->
                    <div
                      class="d-flex justify-content-start align-items-center mb-2"
                      style="height: 1rem"
                    >
                      <div
                        class="form-check mx-1"
                        style="padding-left: 2rem; margin-top: -1.5rem"
                      >
                        <input
                          class="form-check-input"
                          type="radio"
                          id="subscription"
                          value="구독형"
                          name="transactionType"
                          v-model="priceSolution"
                          @click.prevent
                        />
                        <label
                          class="preR form-check-label fs-16"
                          for="subscription"
                          >구독형</label
                        >
                      </div>
                      <div
                        class="form-check mx-1"
                        style="padding-left: 1.4rem; margin-top: -1.5rem"
                      >
                        <input
                          class="form-check-input"
                          type="radio"
                          id="exchange"
                          value="교환형"
                          name="transactionType"
                          v-model="priceSolution"
                          @click.prevent
                        />
                        <label
                          class="preR form-check-label fs-16"
                          for="exchange"
                          >교환형</label
                        >
                      </div>
                      <div
                        class="form-check mx-1"
                        style="padding-left: 1.4rem; margin-top: -1.5rem"
                      >
                        <input
                          class="form-check-input"
                          type="radio"
                          id="customerBased"
                          value="고객사용기반"
                          name="transactionType"
                          v-model="priceSolution"
                          @click.prevent
                        />
                        <label
                          class="preR form-check-label fs-16"
                          for="customerBased"
                          >고객사용기반</label
                        >
                      </div>
                    </div>
                    <!-- 두 번째 줄 라디오 버튼들 -->
                    <div
                      class="d-flex justify-content-start align-items-center"
                      style="height: 1rem"
                    >
                      <div
                        class="form-check mx-1"
                        style="padding-left: 2rem; margin-top: -1.5rem"
                      >
                        <input
                          class="form-check-input"
                          type="radio"
                          id="commission"
                          value="수수료"
                          name="transactionType"
                          v-model="priceSolution"
                          @click.prevent
                        />
                        <label
                          class="preR form-check-label fs-16"
                          for="commission"
                          >수수료</label
                        >
                      </div>
                      <div
                        class="form-check mx-1"
                        style="padding-left: 1.4rem; margin-top: -1.5rem"
                      >
                        <input
                          class="form-check-input"
                          type="radio"
                          id="freemium"
                          value="Freemium"
                          name="transactionType"
                          v-model="priceSolution"
                          @click.prevent
                        />
                        <label
                          class="preR form-check-label fs-16"
                          for="freemium"
                          >Freemium</label
                        >
                      </div>
                      <div
                        class="form-check mx-1"
                        style="padding-left: 1.4rem; margin-top: -1.5rem"
                      >
                        <input
                          class="form-check-input"
                          type="radio"
                          id="groupPurchase"
                          value="공동구매방식"
                          name="transactionType"
                          v-model="priceSolution"
                          @click.prevent
                        />
                        <label
                          class="preR form-check-label fs-16"
                          for="groupPurchase"
                          >공동구매방식</label
                        >
                      </div>
                      <div
                        class="form-check mx-1"
                        style="padding-left: 1.4rem; margin-top: -1.5rem"
                      >
                        <input
                          class="form-check-input"
                          type="radio"
                          id="timeBased"
                          value="시간제"
                          name="transactionType"
                          v-model="priceSolution"
                          @click.prevent
                        />
                        <label
                          class="preR form-check-label fs-16"
                          for="timeBased"
                          >시간제</label
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="fourCol" style="width: 6%; flex-grow: 0.5">
                  <div
                    v-html="priceKey"
                    class="form-control transparent-input"
                    placeholder="키워드로 답변해주세요."
                    style="
                      resize: none;
                      height: 100%;
                      overflow-y: hidden;
                      font-size: 1rem;
                    "
                  ></div>
                </div>
              </div>
              <!-- 2행 -->
              <div class="d-flex w-100 SecondCol">
                <div class="oneCol" style="width: 6%; flex-grow: 0.5">
                  <div
                    v-html="placeKey"
                    class="form-control transparent-input"
                    placeholder="키워드로 답변해주세요."
                    style="
                      resize: none;
                      height: 100%;
                      overflow-y: hidden;
                      font-size: 1rem;
                    "
                  ></div>
                </div>
                <div class="twoCol" style="width: 44%; flex-grow: 4">
                  <div>
                    <div
                      class="d-flex justify-content-start align-items-center mb-2"
                    >
                      <div
                        class="colorBox ms-1"
                        style="width: 1rem !important"
                      ></div>
                      <div class="preM ms-1">구매방식</div>
                    </div>
                    <!-- 첫 번째 줄 라디오 버튼들 -->
                    <div
                      class="d-flex justify-content-start align-items-center mb-2"
                      style="height: 1rem"
                    >
                      <div
                        class="form-check mx-1"
                        style="padding-left: 2rem; margin-top: -1.5rem"
                      >
                        <input
                          class="form-check-input"
                          type="radio"
                          id="b2c"
                          value="B2C"
                          name="b2Type"
                          v-model="placeSolution1"
                        />
                        <label class="preR form-check-label fs-16" for="b2c"
                          >B2C</label
                        >
                      </div>
                      <div
                        class="form-check mx-1"
                        style="padding-left: 1.4rem; margin-top: -1.5rem"
                      >
                        <input
                          class="form-check-input"
                          type="radio"
                          id="b2b"
                          value="B2B"
                          name="b2Type"
                          v-model="placeSolution1"
                          @click.prevent
                        />
                        <label class="preR form-check-label fs-16" for="b2b"
                          >B2B</label
                        >
                      </div>
                      <div
                        class="form-check mx-1"
                        style="padding-left: 1.4rem; margin-top: -1.5rem"
                      >
                        <input
                          class="form-check-input"
                          type="radio"
                          id="b2g"
                          value="B2G"
                          name="b2Type"
                          v-model="placeSolution1"
                          @click.prevent
                        />
                        <label class="preR form-check-label fs-16" for="b2g"
                          >B2G</label
                        >
                      </div>
                    </div>
                    <!-- 두 번째 줄 라디오 버튼들 -->
                    <div
                      class="d-flex justify-content-start align-items-center"
                      style="height: 1rem"
                    >
                      <div
                        class="form-check mx-1"
                        style="padding-left: 2rem; margin-top: -1.5rem"
                      >
                        <input
                          class="form-check-input"
                          type="radio"
                          id="oem"
                          value="OEM"
                          name="b2BelowType"
                          v-model="placeSolution2"
                          @click.prevent
                        />
                        <label class="preR form-check-label fs-16" for="oem"
                          >OEM</label
                        >
                      </div>
                      <div
                        class="form-check mx-1"
                        style="padding-left: 1.4rem; margin-top: -1.5rem"
                      >
                        <input
                          class="form-check-input"
                          type="radio"
                          id="odm"
                          value="ODM"
                          name="b2BelowType"
                          v-model="placeSolution2"
                          @click.prevent
                        />
                        <label class="preR form-check-label fs-16" for="odm"
                          >ODM</label
                        >
                      </div>
                      <div
                        class="form-check mx-1"
                        style="padding-left: 1.4rem; margin-top: -1.5rem"
                      >
                        <input
                          class="form-check-input"
                          type="radio"
                          id="dome"
                          value="도매"
                          name="b2BelowType"
                          v-model="placeSolution2"
                          @click.prevent
                        />
                        <label class="preR form-check-label fs-16" for="dome"
                          >도매</label
                        >
                      </div>
                      <div
                        class="form-check mx-1"
                        style="padding-left: 1.4rem; margin-top: -1.5rem"
                      >
                        <input
                          class="form-check-input"
                          type="radio"
                          id="some"
                          value="소매"
                          name="b2BelowType"
                          v-model="placeSolution2"
                          @click.prevent
                        />
                        <label class="preR form-check-label fs-16" for="some"
                          >소매</label
                        >
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      class="d-flex justify-content-start align-items-center"
                    >
                      <div
                        class="colorBox ms-1"
                        style="width: 1rem !important"
                      ></div>
                      <div class="preM ms-1">유통채널</div>
                    </div>
                    <div
                      class="d-flex justify-content-start align-items-center"
                      style="height: 0rem"
                    >
                      <!-- Radio 버튼들 -->
                      <div
                        class="form-check mx-1"
                        style="padding-left: 2rem; margin-top: -1.5rem"
                      >
                        <input
                          class="form-check-input"
                          type="radio"
                          id="dOnline"
                          value="직접 온라인"
                          name="online"
                          v-model="placeChannel"
                          @click.prevent
                        />
                        <label
                          class="preR form-check-label fs-16"
                          for="dOnline"
                          style="color: black"
                        >
                          직접 온라인
                        </label>
                      </div>
                      <div
                        class="form-check mx-1"
                        style="padding-left: 1.5rem; margin-top: -1.5rem"
                      >
                        <input
                          class="form-check-input"
                          type="radio"
                          id="uOnline"
                          value="간접 온라인"
                          name="online"
                          v-model="placeChannel"
                          @click.prevent
                        />
                        <label
                          class="preR form-check-label fs-16"
                          for="uOnline"
                          style="color: black"
                        >
                          간접 온라인
                        </label>
                      </div>
                      <div class="preEB" style="margin-top: -1.5rem">/</div>
                      <div
                        class="form-check mx-1"
                        style="padding-left: 1.5rem; margin-top: -1.5rem"
                      >
                        <input
                          class="form-check-input"
                          type="radio"
                          id="dOffline"
                          value="직접 오프라인"
                          name="offline"
                          v-model="placeChanne2"
                          @click.prevent
                        />
                        <label
                          class="preR form-check-label fs-16"
                          for="dOffline"
                          style="color: black"
                        >
                          직접 오프라인
                        </label>
                      </div>
                      <div
                        class="form-check mx-1"
                        style="padding-left: 1.5rem; margin-top: -1.5rem"
                      >
                        <input
                          class="form-check-input"
                          type="radio"
                          id="uOffline"
                          value="간접 오프라인"
                          name="offline"
                          v-model="placeChanne2"
                          @click.prevent
                        />
                        <label
                          class="preR form-check-label fs-16"
                          for="uOffline"
                          style="color: black"
                        >
                          간접 오프라인
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="threeCol"
                  style="padding-left: 1rem; width: 44%; flex-grow: 4"
                >
                  <div>
                    <div
                      class="d-flex justify-content-start align-items-center mb-2"
                    >
                      <div
                        class="colorBox ms-1"
                        style="width: 1rem !important"
                      ></div>
                      <div class="preM ms-1">판매 프로모션 정책</div>
                    </div>
                    <!-- 첫 번째 줄 체크박스들 -->
                    <div
                      class="d-flex justify-content-start align-items-center mb-2"
                      style="height: 1rem"
                    >
                      <!-- B2C -->
                      <div
                        class="form-check mx-1"
                        style="padding-left: 1rem; margin-top: -1.5rem"
                      >
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="check1"
                          value="할인 및 특가"
                          v-model="check37_1"
                          @click.prevent
                        />
                        <label class="preR form-check-label fs-16" for="check1"
                          >할인 및 특가</label
                        >
                      </div>
                      <!-- B2B -->
                      <div
                        class="form-check mx-1"
                        style="padding-left: 1.4rem; margin-top: -1.5rem"
                      >
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="check2"
                          value="무료 샘플 제공"
                          v-model="check37_2"
                          @click.prevent
                        />
                        <label class="preR form-check-label fs-16" for="check2"
                          >무료 샘플 제공</label
                        >
                      </div>
                      <!-- B2G -->
                      <div
                        class="form-check mx-1"
                        style="padding-left: 1.4rem; margin-top: -1.5rem"
                      >
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="check3"
                          value="번들 판매"
                          v-model="check37_3"
                          @click.prevent
                        />
                        <label class="preR form-check-label fs-16" for="check3"
                          >번들 판매</label
                        >
                      </div>
                    </div>
                    <!-- 두 번째 줄 체크박스들 -->
                    <div
                      class="d-flex justify-content-start align-items-center"
                      style="height: 1rem"
                    >
                      <div class="form-check mx-1" style="padding-left: 1rem">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="check4"
                          value="이벤트 및 경품 추천"
                          v-model="check37_4"
                          @click.prevent
                        />
                        <label class="preR form-check-label fs-16" for="check4"
                          >이벤트 및 경품 추천</label
                        >
                      </div>
                      <div class="form-check mx-1" style="padding-left: 0.7rem">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="check5"
                          value="로열티 프로그램"
                          v-model="check37_5"
                          @click.prevent
                        />
                        <label class="preR form-check-label fs-16" for="check5"
                          >로열티 프로그램</label
                        >
                      </div>
                      <div class="form-check mx-1" style="padding-left: 0.7rem">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="check6"
                          value="제품 번개 세일"
                          v-model="check37_6"
                          @click.prevent
                        />
                        <label class="preR form-check-label fs-16" for="check6"
                          >제품 번개 세일</label
                        >
                      </div>
                    </div>
                    <!-- 3번째 -->
                    <div
                      class="d-flex justify-content-start align-items-center"
                      style="height: 3.5rem"
                    >
                      <div class="form-check mx-1" style="padding-left: 1rem">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="check7"
                          value="소셜 리뷰 리워드 프로그램"
                          v-model="check37_7"
                          @click.prevent
                        />
                        <label class="preR form-check-label fs-16" for="check7"
                          >소셜 리뷰 리워드 프로그램</label
                        >
                      </div>
                      <div class="form-check mx-1" style="padding-left: 0.7rem">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="check8"
                          value="크라우드 펀딩"
                          v-model="check37_8"
                          @click.prevent
                        />
                        <label class="preR form-check-label fs-16" for="check8"
                          >크라우드 펀딩</label
                        >
                      </div>
                      <div class="form-check mx-1" style="padding-left: 0.7rem">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="check9"
                          value="환불 보장"
                          v-model="check37_9"
                          @click.prevent
                        />
                        <label class="preR form-check-label fs-16" for="check9"
                          >환불 보장</label
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="fourCol" style="width: 6%; flex-grow: 0.5">
                  <div
                    v-html="promotionKey"
                    class="form-control transparent-input"
                    placeholder="키워드로 답변해주세요."
                    style="
                      resize: none;
                      height: 100%;
                      overflow-y: hidden;
                      font-size: 1rem;
                    "
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import step37 from "../modal/js/step37.js";
export default {
  name: "step37Com",
  ...step37,
};
</script>

<style scoped>
.basicContentBar {
  width: 46rem;
  background-color: #f75943;
  color: white;
  border-radius: 12px;
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.placeholderColor {
  font-size: 20px;
  color: #818181;
}

.primeColor {
  color: #f75943;
}

/* 숨겨진 기본 라디오 버튼 스타일링 */
input[type="checkbox"] {
  display: none;
  vertical-align: middle;
  /* 라디오 버튼을 수직 중앙 정렬 */
}

label {
  vertical-align: middle;
  /* 라벨을 수직 중앙 정렬 */
}

/* 가상 체크박스 디자인 */
input[type="checkbox"] + label {
  position: relative;
  padding-left: 30px;
  /* 체크박스 크기 조절 */
  cursor: pointer;
}

/* 가상 체크박스의 외관 (체크 표시) */
input[type="checkbox"] + label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 4.5px;
  width: 20px;
  /* 체크 표시 크기 조절 */
  height: 20px;
  /* 체크 표시 크기 조절 */
  border: 2px solid #000;
  /* 체크 표시의 외곽선 스타일 지정 */
  background-color: #fff;
  /* 체크 표시의 배경색 지정 */
  border-radius: 4px;
  /* 체크 표시의 둥근 테두리 만들기 */
}

/* 라디오 버튼이 체크됐을 때의 가상 체크박스 스타일 */
input[type="checkbox"]:checked + label:before {
  /* 체크 표시의 배경색 지정 */
  content: "\2713";
  /* 유니코드로 체크 마크 추가 */
  text-align: center;
  /* 텍스트를 중앙 정렬 */
  font-size: 35px;
  font-weight: 600;
  /* 체크 마크의 크기 조절 */
  line-height: 6px;
  /* 체크 마크의 높이 조절 */
  color: #f75943;
  /* 체크 마크의 색상 지정 */
}

.redPropertyTop {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2rem;
  background: #f75943;
  font-size: 21px;
  color: white;
}

.lightRedProp {
  width: 100%;
  background: #fee2de;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.borderTopBottomGray {
  border-width: 3px 0;
  border-style: solid;
  border-color: #e0d1cf;
}

.transparent-input {
  background-color: transparent;
  border: none;
  outline: none;
  box-shadow: none;
}

.ThirdProperty {
  width: 100%;
  height: 11rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ThirdPropertyLeftRight {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 11.5rem;
}

.ThirdPropertyLeftRight:nth-child(1) {
  flex-grow: 2;
}

.ThirdPropertyLeftRight:nth-child(2) {
  flex-grow: 3;
}

.ThirdPropertyLeftRight:nth-child(3) {
  flex-grow: 5;
}

.ThirdPropertyTopDown {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.ThirdPropertyTop {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2rem;
  background: #f75943;
  border-radius: 30px;
  color: white;
}

.ThirdtextareaCss {
  padding: 15px;
  width: 100%;
  height: 12rem;
  background: linear-gradient(180deg, #fdc6bf, #fff);
  border: none;
  resize: none;
  outline: none;
}

.custom-divider {
  border: 0;
  /* 기본 테두리 제거 */
  height: 1px;
  /* 선의 두께 */
  background-color: black;
  /* 선의 색상 */
  margin: 0;
  /* 상하 마진 제거 */
}

.ThirdProperty2 {
  width: 100%;
  height: 11rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ThirdPropertyLeftRight2 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 11.5rem;
}

.ThirdPropertyLeftRight2:nth-child(1) {
  flex-grow: 3;
}

.ThirdPropertyLeftRight2:nth-child(2) {
  flex-grow: 3;
}

.ThirdPropertyLeftRight2:nth-child(3) {
  flex-grow: 3;
}

.ThirdPropertyTopDown2 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.ThirdPropertyTop2 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2rem;
  background: #f75943;
  border-radius: 30px;
  color: white;
}

.transparent-input textarea {
  resize: none;
  /* 크기 조절 비활성화 */
  padding: 10px;
  /* 상하 패딩으로 수직 중앙에 가깝게 */
}

.d-flex.align-items-center {
  display: flex;
  width: 100%;
  height: 4rem;
}

.d-flex.align-items-center > .label {
  flex: 3;
  /* label의 비율 */
  min-width: 0;
  /* flex 항목의 줄바꿈 방지 */
}

.d-flex.align-items-center > textarea {
  flex: 7;
  /* textarea의 비율 */
  min-width: 0;
  /* flex 항목의 줄바꿈 방지 */
}

.form-control.transparent-input.preM {
  padding: 0;
  /* 필요한 경우 패딩 조절 */
}

select.form-control,
textarea.form-control {
  height: 3rem;
  /* Same height for both */
  /* other styling properties */
}

.mix4p {
  background-image: url("@/assets/buildup/4PMix.png");
  background-size: contain;
  background-repeat: no-repeat;
}

.d-flex.w-100 {
  padding-left: 2.5rem;
  padding-right: 3.8rem;
  height: 13.7rem;
}

.firstCol {
  margin-top: 2.4rem;
}

.SecondCol {
  margin-bottom: 4.2rem;
}

.twoCol {
  margin-left: 0.7rem;
  /* margin-right: 2.5rem; */
}

.threeCol {
  margin-left: 2rem;
}

.fourCol {
  margin-left: 0.8rem;
}

.colorBox {
  width: 1.4rem;
  height: 1rem;
  background-color: #f75943;
  border: none;
}

.fs-16 {
  font-size: 16px;
}

.fs-14 {
  font-size: 14px;
}
</style>
