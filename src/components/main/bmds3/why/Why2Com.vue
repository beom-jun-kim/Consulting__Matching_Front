<template>
  <div class="">
    <div class="d-flex justify-content-end align-items-center">
      <div style="color: gray; font-size: 1rem; margin-right: 0.5rem">
        Business Model Design Solution
      </div>
      <div style="margin-right: 1rem">
        <img src="@/assets/bmds3/흑백 로고.png" />
      </div>
    </div>
    <div class="d-flex justify-content-start" style="height: 5rem">
      <div class="d-flex" style="margin-left: 1rem">
        <div style="
        font-size: 5.5rem;
            width: 6rem;
            color: rgba(236, 226, 238, 1);
            margin: -1.7rem 0.5rem 0px -5.5rem;
          ">
          01
        </div>
        <div class="d-flex flex-column">
          <div style="font-size: 1rem">Market Insight</div>
          <div style="font-size: 2rem; color: rgb(199, 121, 196)">
            2) 시장 수명 주기 분석(Market Life Cycle Analysis)
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="mb-4" style="
          width: 81rem;
          height: 2.5rem;
          border-radius: 7px;
          background: rgba(236, 226, 238, 1);
        ">
        <div style="font-size: 17px; margin-left: 39px; line-height: 37px">
          제품(서비스)의 고객 성향, 경쟁 정도, 전략, 특성, 가격, 유통망에 대해
          해당되는 내용에 체크하고, 해당 시장의 수명 주기가 적합한지 알아봅니다.
        </div>
      </div>
    </div>
    <div style="width: 81rem; height: 22.5rem; margin: 1rem 0 0 -1rem">
      <!-- <div class="total-value">
        Avg Value: {{ (totalValue / 6).toFixed(1) }}
      </div> -->
      <div class="image-container">
        <div class="box" :style="{ left: boxPosition + 'px' }">
          <!-- {{ boxPosition }} -->
          <textarea type="text" v-model="checkWhy"
            style="width:100%; height:100%; background:#FDF5DD; outline:none; border:none; resize:none;"
            placeholder="체크수가 많은 이유를             작성해 주세요."></textarea>
        </div>
      </div>
    </div>
    <div style="width: 83rem; margin-left: -.5rem;">
      <div class="d-flex">
        <div>
          <div class="gubun">고객</div>
          <div class="gubu"></div>
        </div>
        <div class="d-flex gubun_4">
          <div class="gubun_2 gubun_3">
            <div class="d-flex">
              <input type="radio" id="a1" name="c1" value="1" v-model="marketLifeCycleAnalysis.why_customer"
                checked /><label for="a1">혁신층</label>
            </div>
          </div>
          <div class="gubun_2 gubun_3">
            <div class="d-flex">
              <input type="radio" id="a2" name="c1" value="2" v-model="marketLifeCycleAnalysis.why_customer" /><label
                for="a2">조기수용층</label>
            </div>
          </div>
          <div class="gubun_2 gubun_3">
            <div class="d-flex">
              <input type="radio" id="a3" name="c1" value="3" v-model="marketLifeCycleAnalysis.why_customer" /><label
                for="a3">다수층</label>
            </div>
          </div>
          <div class="gubun_2">
            <div class="d-flex">
              <input type="radio" id="a4" name="c1" value="4" v-model="marketLifeCycleAnalysis.why_customer" /><label
                for="a4">지연수용층</label>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex">
        <div>
          <div class="gubun">경쟁도</div>
          <div class="gubu"></div>
        </div>
        <div class="d-flex gubun_4">
          <div class="gubun_2 gubun_3">
            <div class="d-flex">
              <input type="radio" id="b1" name="c2" value="1" v-model="marketLifeCycleAnalysis.why_competition" /><label
                for="b1">제품의 인지</label>
            </div>
          </div>
          <div class="gubun_2 gubun_3">
            <div class="d-flex">
              <input type="radio" id="b2" name="c2" value="2" v-model="marketLifeCycleAnalysis.why_competition" /><label
                for="b2">시장 확대, 경쟁 시작</label>
            </div>
          </div>
          <div class="gubun_2 gubun_3">
            <div class="d-flex">
              <input type="radio" id="b3" name="c2" value="3" v-model="marketLifeCycleAnalysis.why_competition" /><label
                for="b3">완전 경쟁</label>
            </div>
          </div>
          <div class="gubun_2">
            <div class="d-flex">
              <input type="radio" id="b4" name="c2" value="4" v-model="marketLifeCycleAnalysis.why_competition" /><label
                for="b4">치열한 경쟁</label>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex">
        <div>
          <div class="gubun">전략</div>
          <div class="gubu"></div>
        </div>
        <div class="d-flex gubun_4">
          <div class="gubun_2 gubun_3">
            <div class="d-flex">
              <input type="radio" id="c1" name="c3" value="1" v-model="marketLifeCycleAnalysis.why_strategy"
                checked /><label for="c1">적자 ▶ 제품 관리 집중</label>
            </div>
          </div>
          <div class="gubun_2 gubun_3">
            <div class="d-flex">
              <input type="radio" id="c2" name="c3" value="2" v-model="marketLifeCycleAnalysis.why_strategy" /><label
                for="c2">매출/이익 증가 ▶ 광고 시작</label>
            </div>
          </div>
          <div class="gubun_2 gubun_3">
            <div class="d-flex">
              <input type="radio" id="c3" name="c3" value="3" v-model="marketLifeCycleAnalysis.why_strategy" /><label
                for="c3">매출/이익 감소 ▶ 홍보활동강화</label>
            </div>
          </div>
          <div class="gubun_2">
            <div class="d-flex">
              <input type="radio" id="c4" name="c3" value="4" v-model="marketLifeCycleAnalysis.why_strategy" /><label
                for="c4">출구 전략</label>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex">
        <div>
          <div class="gubun">특성</div>
          <div class="gubu"></div>
        </div>
        <div class="d-flex gubun_4">
          <div class="gubun_2 gubun_3">
            <div class="d-flex">
              <input type="radio" id="d1" name="c4" value="1"
                v-model="marketLifeCycleAnalysis.why_characteristic" /><label for="d1">기본 기능 제품</label>
            </div>
          </div>
          <div class="gubun_2 gubun_3">
            <div class="d-flex">
              <input type="radio" id="d2" name="c4" value="2"
                v-model="marketLifeCycleAnalysis.why_characteristic" /><label for="d2">기능 및 서비스 추가</label>
            </div>
          </div>
          <div class="gubun_2 gubun_3">
            <div class="d-flex">
              <input type="radio" id="d3" name="c4" value="3"
                v-model="marketLifeCycleAnalysis.why_characteristic" /><label for="d3">제품/서비스 차별화</label>
            </div>
          </div>
          <div class="gubun_2">
            <div class="d-flex">
              <input type="radio" id="d4" name="c4" value="4"
                v-model="marketLifeCycleAnalysis.why_characteristic" /><label for="d4">수량 차별화(1 + 1)</label>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex">
        <div>
          <div class="gubun">가격</div>
          <div class="gubu"></div>
        </div>
        <div class="d-flex gubun_4">
          <div class="gubun_2 gubun_3">
            <div class="d-flex">
              <input type="radio" id="e1" name="c5" value="1" v-model="marketLifeCycleAnalysis.why_price" checked /><label
                for="e1">고가격</label>
            </div>
          </div>
          <div class="gubun_2 gubun_3">
            <div class="d-flex">
              <input type="radio" id="e2" name="c5" value="2" v-model="marketLifeCycleAnalysis.why_price" /><label
                for="e2">가격 조정</label>
            </div>
          </div>
          <div class="gubun_2 gubun_3">
            <div class="d-flex">
              <input type="radio" id="e3" name="c5" value="3" v-model="marketLifeCycleAnalysis.why_price" /><label
                for="e3">가격 할인</label>
            </div>
          </div>
          <div class="gubun_2">
            <div class="d-flex">
              <input type="radio" id="e4" name="c5" value="4" v-model="marketLifeCycleAnalysis.why_price" /><label
                for="e4">가격 덤핑</label>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex">
        <div>
          <div class="gubun">유통망</div>
          <div class="gubu"></div>
        </div>
        <div class="d-flex gubun_1">
          <div class="gubun_2 gubun_3">
            <div class="d-flex">
              <input type="radio" id="f1" name="c6" value="1" v-model="marketLifeCycleAnalysis.why_distribution" /><label
                for="f1">적은 유통망</label>
            </div>
          </div>
          <div class="gubun_2 gubun_3">
            <div class="d-flex">
              <input type="radio" id="f2" name="c6" value="2" v-model="marketLifeCycleAnalysis.why_distribution" /><label
                for="f2">유통망 증대</label>
            </div>
          </div>
          <div class="gubun_2 gubun_3">
            <div class="d-flex">
              <input type="radio" id="f3" name="c6" value="3" v-model="marketLifeCycleAnalysis.why_distribution" /><label
                for="f3">유통망 다수 확보</label>
            </div>
          </div>
          <div class="gubun_2">
            <div class="d-flex">
              <input type="radio" id="f4" name="c6" value="4" v-model="marketLifeCycleAnalysis.why_distribution" /><label
                for="f4">유통망 최소</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button class="btn btn-sm btn-primary" style="float: right; margin-top: 6px" @click="lifeCycleSave">
      임시저장
    </button>
  </div>
</template>

<script>
import BMDSService from "@/services/main/BMDSService";

/* eslint-disable */

export default {
  data() {
    return {
      marketLifeCycleAnalysis: {
        why_customer: 1,
        why_competition: 1,
        why_strategy: 1,
        why_characteristic: 1,
        why_price: 1,
        why_distribution: 1,
      },
      checkWhy: '',
      number: 0,
      position: 0,
    };
  },
  computed: {
    boxPosition() {
      const boxWidth = 312; // 이 값은 실제 박스의 너비에 따라 조정해야 합니다.
      const totalValue = Object.values(this.marketLifeCycleAnalysis).reduce(
        (acc, value) => acc + parseInt(value, 10),
        0
      );
      const average = totalValue / 6;
      const percentage = average * 25 - 12.5;
      let leftPosition = Math.min(
        Math.max((1188 * percentage) / 100 - boxWidth / 2, 0),
        1188 - boxWidth
      ); // 박스의 중심을 보정하기 위해 박스의 절반 너비만큼 빼주었습니다.

      return leftPosition + 98;
    },
  },
  methods: {
    getLifeCycleAnalysis(id) {
      BMDSService.getWhy2com(id)
        .then((res) => {
          this.marketLifeCycleAnalysis = res.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    lifeCycleSave() {
      if (confirm("저장하시겠습니까?") == true) {
        var data = {
          why_customer: parseInt(this.marketLifeCycleAnalysis.why_customer),
          why_competition: parseInt(
            this.marketLifeCycleAnalysis.why_competition
          ),
          why_strategy: parseInt(this.marketLifeCycleAnalysis.why_strategy),
          why_characteristic: parseInt(
            this.marketLifeCycleAnalysis.why_characteristic
          ),
          why_price: parseInt(this.marketLifeCycleAnalysis.why_price),
          why_distribution: parseInt(
            this.marketLifeCycleAnalysis.why_distribution
          ),
        };
        console.log("data", data);
        BMDSService.createWhy1com(this.$route.params.id, data)
          .then((res) => {
            if (!alert("저장되었습니다.")) {
              console.log(res);
            }
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
  },
  mounted() {
    this.getLifeCycleAnalysis(this.$route.params.id);
  },
};
</script>

<style scoped>
#businessArea {
  height: 5rem;
  /* 높이를 조절해주세요 */
  resize: none;
  /* 사용자가 크기를 조절하지 못하게 합니다 */
}

.box {
  position: absolute;
  background-color: #FDF5DD;
  /* 박스 색상 */
  transition: left 0.3s ease;
  /* 부드러운 이동 효과 */
  width: 18rem;
  height: 15rem;
  border-radius: 15px;
  opacity: 0.5;
  /* background-color: #fdf5dd; */
  text-align: center;
  line-height: 50px;
  margin: 4.5rem 0 0 0;
  padding: 1.5rem;
}

.image-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background-image: url("../../../../assets/bmds3/시장수명주기.png");
  background-size: contain;
  background-position: center;
}

.main {
  position: relative;
  /* 로고의 위치를 부모인 .container에 상대적으로 지정하기 위해 설정 */
  width: 100%;
  /* 원하는 너비에 따라 변경 가능 */
  height: 100vh;
  /* 전체 높이를 차지하도록 설정. 필요에 따라 변경 가능 */
}

.gubun {
  width: 5rem;
  height: 2.5rem;
  background: #e7e6e6;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.gubu {
  height: 5px;
}

.gubun_1 {
  margin-left: 0.5rem;
  width: 72rem;
  border-bottom: 5px solid #e7e6e6;
}

.gubun_2 {
  width: 16.3rem;
  height: 2.5rem;
  font-size: 15px;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-left: 1.5rem;
}

.gubun_3 {
  border-right: 3px solid #e7e6e6;
}

.gubun_4 {
  margin-left: 0.5rem;
  width: 72rem;
  border-bottom: 3px dotted #e7e6e6;
}

/* 숨겨진 기본 라디오 버튼 스타일링 */
input[type="radio"] {
  display: none;
  vertical-align: middle;
  /* 라디오 버튼을 수직 중앙 정렬 */
}

label {
  vertical-align: middle;
  /* 라벨을 수직 중앙 정렬 */
}

/* 가상 체크박스 디자인 */
input[type="radio"]+label {
  position: relative;
  padding-left: 30px;
  /* 체크박스 크기 조절 */
  cursor: pointer;
}

/* 가상 체크박스의 외관 (체크 표시) */
input[type="radio"]+label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 1.5px;
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
input[type="radio"]:checked+label:before {
  /* 체크 표시의 배경색 지정 */
  content: "\2713";
  /* 유니코드로 체크 마크 추가 */
  text-align: center;
  /* 텍스트를 중앙 정렬 */
  font-size: 35px;
  font-weight: 600;
  /* 체크 마크의 크기 조절 */
  line-height: 0;
  /* 체크 마크의 높이 조절 */
  color: rgb(199, 121, 196);
  /* 체크 마크의 색상 지정 */
}
</style>
