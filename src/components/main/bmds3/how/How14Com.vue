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
          09
        </div>
        <div class="d-flex flex-column">
          <div style="font-size: 1rem">Key Activities</div>
          <div style="font-size: 2rem; color: #1968C1;">
            2) Problem - Solution Fit
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
          프리토타이핑(Pretotyping)을 통해 소비자가 내 아이디어에 관심이 있는지 파악합니다. 프리토타입 검증을 통해 수집하고 싶은 데이터를 선정하고<br />고객경험 시나리오를 설계합니다.
        </div>
      </div>
    </div>

    <div class="d-flex flex-column justify-content-between mt-3" style="height:43rem;">
      <div style="width:81rem; height:100%;">
        <div style="width:20rem; height:2rem; font-size:20px; margin:0 0 1rem 1rem;">② 프리토타입 설계 및 검증</div>
        <div class="d-flex" style="width:100%; height:40rem;">
          <div style=" width:20.25rem; height:100%; border:1px solid #C2C2C2;">
            <div class="d-flex justify-content-center align-items-center"
              style="width:25px; height:25px; background:#1968C1;color:white; font-size:15px;">
              <div>1</div>
            </div>
            <div class="d-flex justify-content-center align-items-center">
              <div style="width:3rem; height:3rem; background:#F2F2F2;"></div>
            </div>
            <div class="d-flex justify-content-center align-items-center">
              <h3 class="mt-3">아이디어 컨셉 정의</h3>
            </div>
            <div class="d-flex justify-content-center align-items-center">
              <div class="my-1" style="font-size: 17px;text-align:center;">아이디어가 나오게 된 계기를 떠올리며,<br /><span
                  style="color:#1968C1; font-weight:600;">아이디어의
                  개념</span>을 구상합니다.</div>
            </div>
            <div class="d-flex justify-content-center align-items-center">
              <hr style="width:17rem;" />
            </div>
            <div class="d-flex justify-content-center align-items-center">
              <div>
                <textarea style="width:18rem; height:7rem; background:#F2F2F2; font-size:15px; text-align:center;"
                  ref="text1" v-model="data.ideaBackground"></textarea>
              </div>
            </div>
            <div class="d-flex justify-content-center align-items-center">
              <div class="downArrow"></div>
            </div>
            <div class="d-flex justify-content-center align-items-center">
              <div>
                <textarea style="width:18rem; height:7rem; background:#F2F2F2; font-size:15px; text-align:center;"
                  ref="text2" v-model="data.ideaConcept"></textarea>
              </div>
            </div>
            <div class="d-flex justify-content-center align-items-center">
              <div class="downArrow"></div>
            </div>
            <div class="d-flex justify-content-center align-items-center">
              <div>
                <textarea style="width:18rem; height:7rem; font-size:15px; text-align:center; border:1px solid #C2C2C2;"
                  ref="text3" v-model="data.ideaImg"></textarea>
              </div>
            </div>
          </div>


          <div class="borNoLeftRight" style="width:20.25rem; height:100%;">
            <div class="d-flex justify-content-center align-items-center"
              style="width:25px; height:25px; background:#1968C1;color:white; font-size:15px;">
              <div>2</div>
            </div>
            <div class="d-flex justify-content-center align-items-center">
              <div style="width:3rem; height:3rem; background:#F2F2F2;"></div>
            </div>
            <div class="d-flex justify-content-center align-items-center">
              <h3 class="mt-3">시장호응 가설 수립</h3>
            </div>
            <div class="d-flex justify-content-center align-items-center">
              <div class="my-1" style="font-size: 17px;text-align:center;">시장이 해당 아이디어에 어떻게 반응할지<br /><span
                  style="color:#1968C1; font-weight:600;">XYZ 가설</span>로 표현합니다.</div>
            </div>
            <div class="d-flex justify-content-center align-items-center">
              <hr style="width:17rem;" />
            </div>
            <div class="d-flex justify-content-center align-items-center">
              <div>
                <textarea style="width:18rem; height:7rem; background:#F2F2F2; font-size:15px; text-align:center;"
                  ref="text4" v-model="data.marketResponse"></textarea>
              </div>
            </div>
            <div class="d-flex justify-content-center align-items-center">
              <div class="downArrow"></div>
            </div>
            <div class="d-flex justify-content-center align-items-center">
              <div>
                <textarea style="width:18rem; height:5rem; font-size:15px; text-align:center; border:1px solid #C2C2C2;"
                  ref="text5" v-model="data.xyzScenario[0].xyz"></textarea>
              </div>
            </div>
            <div class="d-flex justify-content-center align-items-center">
              <div>
                <textarea style="width:18rem; height:5rem; font-size:15px; text-align:center; border:1px solid #C2C2C2;"
                  ref="text6" v-model="data.xyzScenario[1].xyz"></textarea>
              </div>
            </div>
            <div class="d-flex justify-content-center align-items-center">
              <div>
                <textarea style="width:18rem; height:5rem; font-size:15px; text-align:center; border:1px solid #C2C2C2;"
                  ref="text7" v-model="data.xyzScenario[2].xyz"></textarea>
              </div>
            </div>
          </div>


          <div class="borNoRight" style="width:20.25rem; height:100%;">
            <div class="d-flex justify-content-center align-items-center"
              style="width:25px; height:25px; background:#1968C1;color:white; font-size:15px;">
              <div>3</div>
            </div>
            <div class="d-flex justify-content-center align-items-center">
              <div style="width:3rem; height:3rem; background:#F2F2F2;"></div>
            </div>
            <div class="d-flex justify-content-center align-items-center">
              <h3 class="mt-3">테스트 시나리오 설계</h3>
            </div>
            <div class="d-flex justify-content-center align-items-center">
              <div class="my-1" style="font-size: 17px;text-align:center;">아이디어에 대한<span
                  style="color:#1968C1; font-weight:600;">시장의 반응을 단기간</span>에<br />확인할 수 있는 시나리오를 설계합니다.</div>
            </div>
            <div class="d-flex justify-content-center align-items-center">
              <hr style="width:17rem;" />
            </div>
            <div class="d-flex justify-content-center align-items-center">
              <div>
                <textarea style="width:18rem; height:7rem; background:#F2F2F2; font-size:15px; text-align:center;"
                  ref="text8" v-model="data.testPeriod"></textarea>
              </div>
            </div>
            <div class="d-flex justify-content-center align-items-center">
              <div class="downArrow"></div>
            </div>
            <div class="d-flex justify-content-center align-items-center">
              <div>
                <textarea style="width:18rem; height:5rem; font-size:15px; text-align:center; border:1px solid #C2C2C2;"
                  ref="text9" v-model="data.xyzScenario[0].scenario"></textarea>
              </div>
            </div>
            <div class="d-flex justify-content-center align-items-center">
              <div>
                <textarea style="width:18rem; height:5rem; font-size:15px; text-align:center; border:1px solid #C2C2C2;"
                  ref="text10" v-model="data.xyzScenario[1].scenario"></textarea>
              </div>
            </div>
            <div class="d-flex justify-content-center align-items-center">
              <div>
                <textarea style="width:18rem; height:5rem; font-size:15px; text-align:center; border:1px solid #C2C2C2;"
                  ref="text11" v-model="data.xyzScenario[2].scenario"></textarea>
              </div>
            </div>
          </div>







          <div style="width:20.25rem; height:100%; border:1px solid #C2C2C2;">
            <div class="d-flex justify-content-center align-items-center"
              style="width:25px; height:25px; background:#1968C1;color:white; font-size:15px;">
              <div>4</div>
            </div>
            <div class="d-flex justify-content-center align-items-center">
              <div style="width:3rem; height:3rem; background:#F2F2F2;"></div>
            </div>
            <div class="d-flex justify-content-center align-items-center">
              <h3 class="mt-3">고객반응 분석</h3>
            </div>
            <div class="d-flex justify-content-center align-items-center">
              <div class="my-1" style="font-size: 17px;text-align:center;">테스트로 수집된 데이터를 XYZ 가설과 비교하고, 사업의<span
                  style="color:#1968C1; font-weight:600;"> 성공 가능성을 평가</span>합니다.</div>
            </div>
            <div class="d-flex justify-content-center align-items-center">
              <hr style="width:17rem;" />
            </div>
            <div class="d-flex justify-content-center align-items-center">
              <div class="image-container" style="width:18rem; height:10rem;">
                <input type="radio" id="success1" name="successes" value="보통" v-model="data.success" />
                <label class="label2" for="success1"></label>

                <input type="radio" id="success2" name="successes" value="매우낮음" v-model="data.success" />
                <label class="label3" for="success2"></label>

                <input type="radio" id="success3" name="successes" value="낮음" v-model="data.success" />
                <label class="label4" for="success3"></label>

                <input type="radio" id="success4" name="successes" value="높음" v-model="data.success" />
                <label class="label5" for="success4"></label>

                <input type="radio" id="success5" name="successes" value="매우높음" v-model="data.success" />
                <label class="label6" for="success5"></label>
              </div>
            </div>
            <div class="d-flex justify-content-center align-items-center">
              <div class="downArrow"></div>
            </div>
            <div class="d-flex justify-content-center align-items-center">
              <div class="d-flex flex-column" style="width:18rem; height:14rem;">
                <div class="d-flex justify-content-between">
                  <div class="d-flex align-items-center justify-content-center"
                    style="font-size:15px; border:1px solid #C2C2C2; width:8.5rem; height:3rem;"><input type="radio"
                      id="idea1" name="ideas" value="추진" v-model="data.ideaSelect" />
                    <label class="d-flex align-items-center justify-content-center" for="idea1">아이디어 추진</label>
                  </div>
                  <div class="d-flex align-items-center justify-content-center"
                    style="font-size:15px; border:1px solid #C2C2C2; width:8.5rem; height:3rem;"><input type="radio"
                      id="idea2" name="ideas" value="폐기" v-model="data.ideaSelect" />
                    <label class="d-flex align-items-center justify-content-center" for="idea2">아이디어 폐기</label>
                  </div>
                </div>
                <div class="mt-3" style="font-size:15px; border:1px solid #C2C2C2; width:18rem; height:10rem;">
                  <input type="radio" id="idea3" name="ideas" value="수정" v-model="data.ideaSelect" />
                  <label for="idea3" style="margin-top:1rem;">&nbsp;&nbsp;아이디어 수정</label>
                  <textarea type="text" style="width:100%; height:6.5rem; margin-top:1rem;" ref="text12"
                    v-model="data.ideaCorrection"></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div>
      <button type=" button" class="btn btn-sm btn-primary" style="float:right;margin-top:6px;"
        @click="saveProto">임시저장</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: { // 한번에 보낼곳
        ideaBackground: "", // 아이디어 배경
        ideaConcept: "", // 아이디어 컨셉
        ideaImg: "", // 아이디어 스케치 이미지
        marketResponse: "", // 시장호응 가설 수립
        testPeriod: "", // 테스트 기간
        testData: "", // 수집 데이터
        xyzScenario: [ // xyz 가설
          {
            xyz: "", // xyz 가설
            scenario: "" // 테스트 시나리오
          },
          {
            xyz: "", // xyz 가설
            scenario: "" // 테스트 시나리오
          },
          {
            xyz: "", // xyz 가설
            scenario: "" // 테스트 시나리오
          }
        ],
        success: "보통", // 성공 가능성
        ideaSelect: "수정", // 아이디어 선택
        ideaCorrection: "", // 아이디어 수정이면 수정할 내용
      },
    };
  },
  methods: {
    saveProto() {
      console.log(this.data);
    }
  },
  mounted() {
    this.$refs.text1.placeholder = "ex. 날이 갈수록 미세먼지가 심각해지고 있으니, 대기질을 실시간으로\n모니터링하여 미세먼지를 필터링해주는\n마스크를 개발하면 어떨까?";
    this.$refs.text2.placeholder = "대기질을 실시간으로 모니터링하여\n미세먼지를 필터링해주는 스마트 마스크";
    this.$refs.text3.placeholder = "아이디어 스케치";
    this.$refs.text4.placeholder = "ex. 미세먼지가 심각한 도시에 거주하는 사람들은 대기질을 모니터링하여\n공기정화를 가능하게 해주는\n마스크에 관심을 가질 것이다.";
    this.$refs.text5.placeholder = "XYZ 가설로의 전환\n적어도 X퍼센트의 Y는 Z할 것이다.";
    this.$refs.text6.placeholder = "XYZ 가설로의 전환\n적어도 X퍼센트의 Y는 Z할 것이다.";
    this.$refs.text7.placeholder = "XYZ 가설로의 전환\n적어도 X퍼센트의 Y는 Z할 것이다.";
    this.$refs.text8.placeholder = "테스트 기간, 수집데이터";
    this.$refs.text9.placeholder = "시나리오 설계";
    this.$refs.text10.placeholder = "시나리오 설계";
    this.$refs.text11.placeholder = "시나리오 설계";
    this.$refs.text12.placeholder = "아이디어를 테스트하는 과정에서 얻은 데이터를 기반으로 초기의 아이디어를 어떻게 수정해야 할지 기술하세요.";
  }
};
</script>

<style scoped>
.image-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-image: url('../../../../assets/bmds3/고객반응분석.png');
}

input[type="radio"] {
  display: none;
}

label {
  width: 9rem;
  line-height: 15px;
  margin-left: 1.5rem;
}

input[type="radio"]+label {
  position: relative;
  cursor: pointer;
}

input[type="radio"]+label:before {
  content: "";
  position: absolute;
  left: -20px;
  top: 50%;
  transform: translateY(-50%);
  width: 1.5rem;
  height: 1.5rem;
  border: 2px solid #000;
  background-color: #fff;
  border-radius: 25px;
}

input[type="radio"]:checked+label:before {
  content: "\2713";
  text-align: center;
  font-size: 35px;
  font-weight: bold;
  line-height: 0;
  color: #1968C1;
}

/* ===================================================== */
/* 2 */
input[type="radio"]+.label2:before {
  content: "";
  position: absolute;
  left: 96px;
  top: 50%;
  transform: translateY(-2%);
  width: 3rem;
  height: 3rem;
  border: 0px solid #000;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 25px;
}

input[type="radio"]:checked+.label2:before {
  content: "";
  display: inline-block;
  width: 3rem;
  height: 3rem;
  border: 2px solid #1968C1;
  border-radius: 50%;
  margin-right: 10px;
}

/* 3 */
input[type="radio"]+.label3:before {
  content: "";
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(33%);
  width: 3rem;
  height: 3rem;
  border: 0px solid #000;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 25px;
}

input[type="radio"]:checked+.label3:before {
  content: "";
  display: inline-block;
  width: 3rem;
  height: 3rem;
  border: 2px solid #1968C1;
  border-radius: 50%;
  margin-right: 10px;
}

/* 4 */
input[type="radio"]+.label4:before {
  content: "";
  position: absolute;
  left: 40px;
  top: 50%;
  transform: translateY(-169%);
  width: 3rem;
  height: 3rem;
  border: 0px solid #000;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 25px;
}

input[type="radio"]:checked+.label4:before {
  content: "";
  display: inline-block;
  width: 3rem;
  height: 3rem;
  border: 2px solid #1968C1;
  border-radius: 50%;
  margin-right: 10px;
}

/* 5 */
input[type="radio"]+.label5:before {
  content: "";
  position: absolute;
  left: 151px;
  top: 50%;
  transform: translateY(-269%);
  width: 3rem;
  height: 3rem;
  border: 0px solid #000;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 25px;
}

input[type="radio"]:checked+.label5:before {
  content: "";
  display: inline-block;
  width: 3rem;
  height: 3rem;
  border: 2px solid #1968C1;
  border-radius: 50%;
  margin-right: 10px;
}

/* 6 */
input[type="radio"]+.label6:before {
  content: "";
  position: absolute;
  left: 175px;
  top: 50%;
  transform: translateY(-267%);
  width: 3rem;
  height: 3rem;
  border: 0px solid #000;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 25px;
}

input[type="radio"]:checked+.label6:before {
  content: "";
  display: inline-block;
  width: 3rem;
  height: 3rem;
  border: 2px solid #1968C1;
  border-radius: 50%;
  margin-right: 10px;
}

/* ===================================================== */
input[type='text'],
textarea {
  border: none;
}

.borNoLeftRight {
  border-top: 1px solid #C2C2C2;
  border-bottom: 1px solid #C2C2C2;
  border-left: 0px solid #C2C2C2;
  border-right: 0px solid #C2C2C2;
}

.borNoRight {
  border-top: 1px solid #C2C2C2;
  border-bottom: 1px solid #C2C2C2;
  border-left: 1px solid #C2C2C2;
  border-right: 0px solid #C2C2C2;
}

.downArrow {
  width: 0;
  height: 19px;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid #BFBFBF;
}
</style>
