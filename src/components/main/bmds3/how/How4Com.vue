<template>
  <div class="container">
    <div class="d-flex justify-content-end">
      <div style="color: gray; font-size: 1rem; margin: 1rem 1rem 0 0">
        Business Model Design Solution
      </div>
      <div>
        <img src="@/assets/bmds3/흑백 로고.png" />
      </div>
    </div>
    <div class="d-flex justify-content-start" style="height: 5rem; margin-left:1rem;">
      <div class="d-flex">
        <div style="
            font-size: 6rem;
            width: 6rem;
            color: #DAE3F3;
            margin: -2.7rem 1.5rem 0 -7.5rem;
          ">
          07
        </div>
        <div class="d-flex flex-column">
          <div style="font-size: 1rem">Key Partners</div>
          <div style="font-size: 2rem; color: #1968C1;">
            1) 공급 사슬 관리
          </div>
        </div>
      </div>
    </div>
    <div>
      <div style="
          width: 81rem;
          height: 3.5rem;
          border-radius: 7px;
          background: #DAE3F3;
        ">
        <div style="font-size: 17px; margin-left: 39px; line-height: 26px">
          공급 사슬 구조를 통해 제품(서비스)의 가치 창출을 직,간접적으로 영향을 미치는 일련의 프로세스에 대해 파악하고 우리 기업은 내,외부 상호작용이<br />잘 이루어지는지 판단합니다.
        </div>
      </div>
    </div>
    <div class="" style="height:45rem; margin-top:1rem;">
      <div class="d-flex flex-column justify-content-between align-items-center" style="height:25rem;">
        <div>
          <div style="font-size:15px; text-align:center; margin-top:1rem;">정보/자금 흐름</div>
          <div class="d-flex justify-content-between align-items-center"
            style="width:48rem; height:7rem;margin-top:-1rem;">
            <div class="borNoBot">
              <div class="downArrow">▼</div>
            </div>
            <div class="borNoBot">
              <div class="downArrow">▼</div>
            </div>
            <div class="borNoBot">
              <div class="downArrow">▼</div>
            </div>
            <div class="borNoBot">
              <div class="downArrow">▼</div>
            </div>
            <div class="borNoBot">
              <div class="downArrow">▼</div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-between" style="width: 91%;">
          <div class="d-flex justify-content-center align-items-center"
            style="text-align:center; font-size:15px;width:5rem;height:5rem;margin: 1rem -1rem 0 -1rem;">
            <div>공급<br />(Supply)</div>
          </div>
          <div class="d-flex">
            <div class="dfmr">
              <div class="d-flex justify-content-end align-items-center"
                style="background:#5B9BD5; width:7rem; height:7rem;">
                <div style="color:white;font-size:17px;">
                  <input type="radio" id="supplyer" name="supChains" value="공급자" v-model="supChainManage.productFlow" />
                  <label for="supplyer" style="color:white;">공급자</label>
                </div>
              </div>
              <div class="triangle"></div>
              <div class="triWhite"></div>
            </div>
            <div class="dfmr">
              <div class="d-flex justify-content-end align-items-center"
                style="background:#5B9BD5; width:8rem; height:7rem;">
                <div style="color:white;font-size:17px;">
                  <input type="radio" id="Manufacturer" name="supChains" value="제조업체"
                    v-model="supChainManage.productFlow" />
                  <label for="Manufacturer" style="color:white;">제조업체</label>
                </div>
              </div>
              <div class="triangle"></div>
              <div class="triWhite"></div>
            </div>
            <div class="dfmr">
              <div class="d-flex justify-content-end align-items-center"
                style="background:#5B9BD5; width:8rem; height:7rem;">
                <div style="color:white;font-size:17px;">
                  <input type="radio" id="distributor" name="supChains" value="유통업체"
                    v-model="supChainManage.productFlow" />
                  <label for="distributor" style="color:white;">유통업체</label>
                </div>
              </div>
              <div class="triangle"></div>
              <div class="triWhite"></div>
            </div>
            <div class="dfmr">
              <div class="d-flex justify-content-end align-items-center"
                style="background:#5B9BD5; width:8rem; height:7rem;">
                <div style="color:white;font-size:17px;">
                  <input type="radio" id="delivery " name="supChains" value="배송업체" v-model="supChainManage.productFlow" />
                  <label for="delivery " style="color:white;">배송업체</label>
                </div>
              </div>
              <div class="triangle"></div>
              <div class="triWhite"></div>
            </div>
            <div class="dfmr">
              <div class="d-flex justify-content-end align-items-center"
                style="background:#5B9BD5; width:8rem; height:7rem;">
                <div style="color:white;font-size:17px;">
                  <input type="radio" id="retailer" name="supChains" value="소매업체" v-model="supChainManage.productFlow" />
                  <label for="retailer" style="color:white;">소매업체</label>
                </div>
              </div>
              <div class="triangle"></div>
              <div class="triWhite"></div>
            </div>
            <div class="dfmr">
              <div class="d-flex justify-content-end align-items-center"
                style="background:#1968C1; width:8rem; height:7rem;">
                <div style="color:white;font-size:17px;">
                  <input type="radio" id="consumer" name="supChains" value="소비자" v-model="supChainManage.productFlow" />
                  <label for="consumer" style="color:white;">소비자</label>
                </div>
              </div>
              <div class="triangleB"></div>
              <div class="triWhite"></div>
            </div>
          </div>
          <div class="d-flex justify-content-center align-items-center"
            style="text-align:center; font-size:15px;width:5rem;height:5rem;margin: 1rem 0 0 1rem;">
            <div>수요<br />(Demand)</div>
          </div>
        </div>
        <div>
          <div class="d-flex justify-content-between align-items-center"
            style="width:48rem; height:7rem;margin-top:-1rem;">
            <div class="borNoTop">
              <div class="upArrow">▲</div>
            </div>
            <div class="borNoTop">
              <div class="upArrow">▲</div>
            </div>
            <div class="borNoTop">
              <div class="upArrow">▲</div>
            </div>
            <div class="borNoTop">
              <div class="upArrow">▲</div>
            </div>
            <div class="borNoTop">
              <div class="upArrow">▲</div>
            </div>
          </div>
          <div style="font-size:15px; text-align:center; margin-top:-1rem;">제품(서비스) 흐름</div>
        </div>
      </div>

      <div style="height:20rem;">

        <div class="d-flex justify-content-between">
          <div style="font-size:20px; margin:1rem -1rem 0 0; color:#7F7F7F;">◀</div>
          <div class="d-flex justify-content-center" style="border-top: 1px solid #7F7F7F; width:100%; margin-top:2rem;">
            <div style="font-size:15px; background:white;margin-top:-1rem; width:20rem;height:2rem; text-align:center;">
              공급 사슬 관리 (Supply Chain Management)
            </div>
          </div>
          <div style="font-size:20px; margin: 1rem 0 0 -1rem; color:#7F7F7F;">▶</div>
        </div>

        <div class="d-flex align-items-center mt-3" style="justify-content:space-around;width:80rem;">
          <div class="d-flex flex-column justify-content-center align-items-center">
            <div class="miniArrow"></div>
            <div style="width:15px; height:20px; background:#DAE3F3;"></div>
          </div>
          <div class="d-flex flex-column justify-content-center align-items-center">
            <div class="miniArrow"></div>
            <div style="width:15px; height:20px; background:#DAE3F3;"></div>
          </div>
          <div class="d-flex flex-column justify-content-center align-items-center">
            <div class="miniArrow"></div>
            <div style="width:15px; height:20px; background:#DAE3F3;"></div>
          </div>
          <div class="d-flex flex-column justify-content-center align-items-center">
            <div class="miniArrow"></div>
            <div style="width:15px; height:20px; background:#DAE3F3;"></div>
          </div>
          <div class="d-flex flex-column justify-content-center align-items-center">
            <div class="miniArrow"></div>
            <div style="width:15px; height:20px; background:#DAE3F3;"></div>
          </div>
          <div class="d-flex flex-column justify-content-center align-items-center">
            <div class="miniArrow"></div>
            <div style="width:15px; height:20px; background:#DAE3F3;"></div>
          </div>
          <div class="d-flex flex-column justify-content-center align-items-center">
            <div class="miniArrow"></div>
            <div style="width:15px; height:20px; background:#DAE3F3;"></div>
          </div>
        </div>

        <div class="d-flex justify-content-center align-items-center" style="margin-right:1.5rem;">
          <div class="dfmr2">
            <div class="d-flex justify-content-center align-items-center"
              style="background:#DAE3F3; width:10.8rem; height:5rem;">
              <div style="font-size:17px; margin: -25px 0 0 20px;">
                <input type="radio" id="planDevelop" name="supChainManages" value="기획/개발"
                  v-model="supChainManage.supChain" />
                <label for="planDevelop">기획/개발</label>
              </div>
            </div>
            <div class="minTri"></div>
            <div class="minTriWhite"></div>
          </div>
          <div class="dfmr2">
            <div class="d-flex justify-content-center align-items-center"
              style="background:#DAE3F3; width:10.8rem; height:5rem;">
              <div style="font-size:17px; margin: -25px 0 0 20px;">
                <input type="radio" id="purchProcure" name="supChainManages" value="구매/조달"
                  v-model="supChainManage.supChain" />
                <label for="purchProcure">구매/조달</label>
              </div>
            </div>
            <div class="minTri"></div>
            <div class="minTriWhite"></div>
          </div>
          <div class="dfmr2">
            <div class="d-flex justify-content-center align-items-center"
              style="background:#DAE3F3; width:10.8rem; height:5rem;">
              <div style="font-size:17px; margin: -25px 0 0 20px;">
                <input type="radio" id="prodManufact" name="supChainManages" value="생산/제조"
                  v-model="supChainManage.supChain" />
                <label for="prodManufact">생산/제조</label>
              </div>
            </div>
            <div class="minTri"></div>
            <div class="minTriWhite"></div>
          </div>
          <div class="dfmr2">
            <div class="d-flex justify-content-center align-items-center"
              style="background:#DAE3F3; width:10.8rem; height:5rem;">
              <div style="font-size:17px; margin: -25px 0 0 20px;">
                <input type="radio" id="distInvenManage" name="supChainManages" value="유통/재고관리"
                  v-model="supChainManage.supChain" />
                <label for="distInvenManage">유통/재고관리</label>
              </div>
            </div>
            <div class="minTri"></div>
            <div class="minTriWhite"></div>
          </div>
          <div class="dfmr2">
            <div class="d-flex justify-content-center align-items-center"
              style="background:#DAE3F3; width:10.8rem; height:5rem;">
              <div style="font-size:17px; margin: -25px 0 0 20px;">
                <input type="radio" id="marketing" name="supChainManages" value="마케팅" v-model="supChainManage.supChain" />
                <label for="marketing">마케팅</label>
              </div>
            </div>
            <div class="minTri"></div>
            <div class="minTriWhite"></div>
          </div>
          <div class="dfmr2">
            <div class="d-flex justify-content-center align-items-center"
              style="background:#DAE3F3; width:10.8rem; height:5rem;">
              <div style="font-size:17px; margin: -25px 0 0 20px;">
                <input type="radio" id="Sales2" name="supChainManages" value="판매/영업" v-model="supChainManage.supChain" />
                <label for="Sales2">판매/영업</label>
              </div>
            </div>
            <div class="minTri"></div>
            <div class="minTriWhite"></div>
          </div>
          <div class="dfmr2">
            <div class="d-flex justify-content-center align-items-center"
              style="background:#DAE3F3; width:10.8rem; height:5rem;">
              <div style="font-size:17px; margin: -25px 0 0 20px;">
                <input type="radio" id="custService" name="supChainManages" value="고객서비스"
                  v-model="supChainManage.supChain" />
                <label for="custService">고객서비스</label>
              </div>
            </div>
            <div class="minTri"></div>
            <div class="minTriWhite"></div>
          </div>
        </div>


        <div>
          <div class="d-flex align-items-center mt-4" style="justify-content:space-around;width:80rem;">
            <div class="d-flex flex-column justify-content-center align-items-center">
              <div class="miniArrow2"></div>
              <div style="width:15px; height:20px; background:#A6A6A6;"></div>
            </div>
            <div class="d-flex flex-column justify-content-center align-items-center">
              <div class="miniArrow2"></div>
              <div style="width:15px; height:20px; background:#A6A6A6;"></div>
            </div>
          </div>
          <div class="split-container">
            <div class="half gray2">
              지원(총무/회계, 인사, 법률 등)
            </div>
            <div class="half gray">
              인프라
            </div>
            <div class="circle">
              <div class="circle2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <button type="button" class="btn btn-sm btn-primary" style="float:right;margin-top:6px;"
        @click="supChainSave">임시저장</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      supChainManage: { // 공급사슬관리
        productFlow: "공급자", // 제품흐름
        supChain: "기획/개발" // 공급사슬
      },
    };
  },
  methods: {
    supChainSave() {
      console.log(this.supChainManage);
    }
  },
};
</script>

<style scoped>
.dfmr {
  margin-right: -102px;
  display: flex;
}

.dfmr2 {
  margin-right: -57px;
  display: flex;
}

.triangle {
  width: 0;
  height: 0;
  border-top: 5rem solid transparent;
  border-bottom: 5rem solid transparent;
  border-left: 4rem solid #5B9BD5;
  position: relative;
  top: -23px;
  left: 0;
  z-index: 2;
}

.triangleB {
  width: 0;
  height: 0;
  border-top: 5rem solid transparent;
  border-bottom: 5rem solid transparent;
  border-left: 4rem solid #1968C1;
  position: relative;
  top: -23px;
  left: 0;
  z-index: 2;
}

.triWhite {
  width: 0;
  height: 0;
  border-top: 5rem solid transparent;
  border-bottom: 5rem solid transparent;
  border-left: 4rem solid white;
  position: relative;
  top: -23px;
  left: -53px;
  z-index: 1;
}

.minTri {
  width: 0;
  height: 0;
  border-top: 2.5rem solid transparent;
  border-bottom: 2.5rem solid transparent;
  border-left: 2rem solid #DAE3F3;
  position: relative;
  top: 0;
  left: 0;
  z-index: 2;
}

.minTriWhite {
  width: 0;
  height: 0;
  border-top: 2.5rem solid transparent;
  border-bottom: 2.5rem solid transparent;
  border-left: 2rem solid white;
  position: relative;
  top: 0;
  left: -25px;
  z-index: 1;
}

.borNoBot {
  border-top: 1px solid #7F7F7F;
  border-left: 1px solid #7F7F7F;
  border-right: 1px solid #7F7F7F;
  border-bottom: px solid #7F7F7F;
  width: 9rem;
  height: 4rem;
}

.borNoTop {
  border-top: 0px solid #7F7F7F;
  border-left: 1px solid #7F7F7F;
  border-right: 1px solid #7F7F7F;
  border-bottom: 1px solid #7F7F7F;
  width: 9rem;
  height: 4rem;
}

.downArrow {
  position: relative;
  top: 75%;
  left: -5.6%;
  font-size: 15px;
  color: #7F7F7F;
}

.upArrow {
  position: relative;
  top: -12%;
  left: 95%;
  color: #7F7F7F;
  font-size: 15px;
}

.miniArrow {
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 15px solid #DAE3F3;
  /* 화살표의 색상은 여기서 조절하세요 */
}

.miniArrow2 {
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 15px solid #A6A6A6;
  /* 화살표의 색상은 여기서 조절하세요 */
}

.split-container {
  position: relative;
  width: 100%;
  height: 2rem;
  margin-bottom: 2rem;
}

.half {
  position: absolute;
  width: 50%;
  height: 100%;
  font-size: 20px;
  color: white;
}

.gray2 {
  width: 40rem;
  height: 4rem;
  border-radius: 15px 0 0 15px;
  background: #A6A6A6;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  display: flex;
  justify-content: center;
  align-items: center;
}

.gray {
  width: 40rem;
  height: 4rem;
  border-radius: 0 15px 15px 0;
  background: #A6A6A6;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle {
  position: absolute;
  width: 5rem;
  height: 5rem;
  background-color: #A6A6A6;
  border-radius: 50%;
  left: 50%;
  top: 96%;
  transform: translate(-50%, -50%);
}

.circle2 {
  position: absolute;
  width: 4.5rem;
  height: 4.5rem;
  background-color: white;
  color: white;
  font-size: 20px;
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 라디오 버튼 숨기기 */
input[type="radio"] {
  display: none;
}

/* 체크박스 스타일 설정 */
input[type="radio"]+label {
  position: relative;
  cursor: pointer;
}

/* 체크박스 모양 설정 */
input[type="radio"]+label:before {
  content: "";
  position: absolute;
  left: 34%;
  top: 45px;
  transform: translateY(-50%);
  width: 1.5rem;
  /* 체크박스 크기 조절 */
  height: 1.5rem;
  /* 체크박스 크기 조절 */
  border: 2px solid #000;
  background-color: #fff;
  border-radius: 4px;
}

/* 라디오 버튼이 선택됐을 때 체크박스 스타일 변경 */
input[type="radio"]:checked+label:before {
  content: "\2713";
  /* 체크 마크 모양 (유니코드) */
  text-align: center;
  font-size: 35px;
  /* 체크 마크 크기 조절 */
  font-weight: bold;
  line-height: 0;
  color: rgb(199, 121, 196);
}
</style>
