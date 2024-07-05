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
          02
        </div>
        <div class="d-flex flex-column">
          <div style="font-size: 1rem">Key Partbers</div>
          <div style="font-size: 2rem; color: rgb(199, 121, 196)">
            1) 가치사슬
          </div>
        </div>
      </div>
    </div>
    <div>
      <div style="
      width: 81rem;
          height: 3.5rem;
          border-radius: 7px;
          background: rgba(236, 226, 238, 1);
        ">
        <div style="font-size: 17px; margin-left: 28px; line-height: 26px">
          가치 사슬 구조를 통해 제품(서비스)의 가치 창출에 직·간접적으로 영향을
          미치는 일련의 프로세스에 대해 파악하고 우리 기업은 내·외부 상호작용이
          잘 이루어지는지<br />판단합니다.
        </div>
      </div>
    </div>
    <div class="image-container" style="width: 81rem; height: 20rem; margin: 1rem 0 0 -1rem"></div>
    <div class="lineOne">
      <hr />
    </div>
    <div class="d-flex flex-column justify-content-between align-items-center"
      style="width: 81rem; height: 15rem; margin-left: -1rem">
      <div class="valueChain2">
        <div class="valueChain2_1">
          <div class="vertical-dots">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
        </div>
        <div class="valueChain2_1">
          <div class="vertical-dots">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
        </div>
        <div class="valueChain2_1">
          <div class="vertical-dots">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
        </div>
        <div class="valueChain2_1">
          <div class="vertical-dots">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
        </div>
        <div class="valueChain2_1">
          <div class="vertical-dots">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
        </div>
        <div class="valueChain2_1">
          <div class="vertical-dots">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
        </div>
      </div>
      <div class="valueChain">
        <div class="valueChain_1">
          <div>
            <i class="icon">🔍</i>
          </div>
          <div class="valueChain_2">
            <input type="radio" id="chain1" name="chains" value="공급자" v-model="why_value_chain" /><label
              for="chain1">공급자</label>
          </div>
        </div>
        <div class="valueChain_1">
          <div>
            <i class="icon">🔍</i>
          </div>
          <div class="valueChain_2">
            <input type="radio" id="chain2" name="chains" value="제조업체" v-model="why_value_chain" /><label
              for="chain2">제조업체</label>
          </div>
        </div>
        <div class="valueChain_1">
          <div>
            <i class="icon">🔍</i>
          </div>
          <div class="valueChain_2">
            <input type="radio" id="chain3" name="chains" value="유통업체" v-model="why_value_chain" /><label
              for="chain3">유통업체</label>
          </div>
        </div>
        <div class="valueChain_1">
          <div>
            <i class="icon">🔍</i>
          </div>
          <div class="valueChain_2">
            <input type="radio" id="chain4" name="chains" value="배송업체" v-model="why_value_chain" /><label
              for="chain4">배송업체</label>
          </div>
        </div>
        <div class="valueChain_1">
          <div>
            <i class="icon">🔍</i>
          </div>
          <div class="valueChain_2">
            <input type="radio" id="chain5" name="chains" value="소매업체" v-model="why_value_chain" /><label
              for="chain5">소매업체</label>
          </div>
        </div>
        <div class="valueChain_1">
          <div>
            <i class="icon">🔍</i>
          </div>
          <div class="valueChain_2">
            <input type="radio" id="chain6" name="chains" value="소비자" v-model="why_value_chain" /><label
              for="chain6">소비자</label>
          </div>
        </div>
      </div>
    </div>
    <b-button class="btn btn-sm" style="float: right" @click="saveValueChain">임시저장</b-button>
  </div>
</template>

<script>
import BMDSService from "@/services/main/BMDSService";

export default {
  data() {
    return {
      why_value_chain: "",
    };
  },
  methods: {
    findValueChain(id) {
      BMDSService.getValueChain(id)
        .then((res) => {
          this.why_value_chain = res.data.why_value_chain;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    saveValueChain() {
      if (confirm("저장하시겠습니까?") == true) {
        var data = {
          why_value_chain: this.why_value_chain,
        };
        BMDSService.createWhy1com(this.$route.params.id, data)
          .then((res) => {
            if (!alert("저장되었습니다.")) {
              console.log(res);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
  mounted() {
    this.findValueChain(this.$route.params.id);
  },
};
</script>

<style scoped>
.image-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background-image: url("../../../../assets/bmds3/가치사슬.png");
  background-size: cover;
  background-position: center;
}

hr {
  border: none;
  /* 기본 테두리 제거 */
  height: 2px;
  /* 선의 두께 설정 */
  background-color: #000;
  /* 원하는 색상으로 설정 (여기서는 검정색) */
}

.lineOne {
  width: 81rem;
  height: 1rem;
  margin-left: -1rem;
}

.valueChain {
  height: 8rem;
  width: 64rem;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
}

.valueChain_1 {
  width: 7rem;
  height: 7rem;
  background: #eaeaea;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.valueChain_2 {
  display: flex;
  font-size: 20px;
}

.valueChain2 {
  height: 6rem;
  width: 73rem;
  display: flex;
  justify-content: space-evenly;
}

.valueChain2_1 {
  width: 7rem;
  height: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.vertical-dots {
  display: flex;
  flex-direction: column;
}

.dot {
  height: 6px;
  width: 6px;
  background-color: rgba(199, 121, 196, 0.1);
  border-radius: 50%;
  margin: 4px 0;
}

.dot:nth-child(1) {
  background-color: rgba(199, 121, 196, 0.1);
}

.dot:nth-child(2) {
  background-color: rgba(199, 121, 196, 0.3);
}

.dot:nth-child(3) {
  background-color: rgba(199, 121, 196, 0.5);
}

.dot:nth-child(4) {
  background-color: rgba(199, 121, 196, 0.7);
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
