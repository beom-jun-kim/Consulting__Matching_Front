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
          10
        </div>
        <div class="d-flex flex-column">
          <div style="font-size: 1rem">Customer Experience Management</div>
          <div style="font-size: 2rem; color: #1968C1;">
            1) 인지적 채널 - 고객 구매 여정 맵
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
          고객이 제품(서비스)과 직,간접적으로 접촉하면서 생길 수 있는 고객 경험 과정을 설계해보면서 각 과정의 채널을 설계하고 발생할 수 있는 문제점과 개선사항을<br />도출해 냅니다.
        </div>
      </div>
    </div>

    <div class="d-flex flex-column mt-3" style="height:44rem;">
      <div class="d-flex justify-content-between align-items-center">
        <!-- 카테고리 -->
        <div class="CEM" style="background: linear-gradient(to right, #236FC4, #5ABBD1);">
          <div class="d-flex justify-content-between w-100">
            <div class="d-flex justify-content-center align-items-center"
              style="width:7rem; height:2rem; color:white; font-size:20px; border-right:2px solid white;">단계</div>
            <div class="d-flex justify-content-center align-items-center"
              style="width:14rem; height:2rem; color:white; font-size:20px;">인지(Awareness)
            </div>
            <div class="d-flex justify-content-center align-items-center" style="width:1rem; height:2rem;">
              <img src="../../../../assets/rightArrow.png" alt="왼쪽화살표" style="width:30px; height:30px;">
            </div>
            <div class="d-flex justify-content-center align-items-center"
              style="width:14rem; height:2rem; color:white; font-size:20px;">호감(Appeal)
            </div>
            <div class="d-flex justify-content-center align-items-center" style="width:1rem; height:2rem;">
              <img src="../../../../assets/rightArrow.png" alt="왼쪽화살표" style="width:30px; height:30px;">
            </div>
            <div class="d-flex justify-content-center align-items-center"
              style="width:14rem; height:2rem; color:white; font-size:20px;">질문(Ask)
            </div>
            <div class="d-flex justify-content-center align-items-center" style="width:1rem; height:2rem;">
              <img src="../../../../assets/rightArrow.png" alt="왼쪽화살표" style="width:30px; height:30px;">
            </div>
            <div class="d-flex justify-content-center align-items-center"
              style="width:14rem; height:2rem; color:white; font-size:20px;">행동(Act)
            </div>
            <div class="d-flex justify-content-center align-items-center" style="width:1rem; height:2rem;">
              <img src="../../../../assets/rightArrow.png" alt="왼쪽화살표" style="width:30px; height:30px;">
            </div>
            <div class="d-flex justify-content-center align-items-center"
              style="width:14rem; height:2rem; color:white; font-size:20px;">옹호(Advocate)
            </div>
          </div>
        </div>
      </div>
      <!-- 내용 -->
      <div class="d-flex flex-column justify-content-between">
        <div style="width:81rem; height:0.5rem; background:white;"></div>
        <div class="d-flex justify-content-between" style="width:81rem; height:38.5rem;">
          <!-- 단계 -->
          <div class="d-flex flex-column justify-content-between">
            <div class="d-flex justify-content-center align-items-center"
              style="width:7rem; height:7rem; color:white; font-size:20px; background:#9EA2A8;">주요활동</div>
            <div class="d-flex justify-content-center align-items-center"
              style="width:7rem; height:4rem; color:white; font-size:20px; background:#9EA2A8;">채널</div>
            <div class="d-flex justify-content-center align-items-center"
              style="width:7rem; height:7rem; color:white; font-size:20px; background:#9EA2A8;">고객 경험</div>
            <div class="d-flex justify-content-center align-items-center"
              style="width:7rem; height:4rem; color:white; font-size:20px; background:#9EA2A8;">고객 반응</div>
            <div class="d-flex flex-column justify-content-center align-items-center"
              style="width:7rem; height:10rem; color:white; font-size:20px; background:#9EA2A8; line-height:25px;">
              문제점<span>&</span>개선사항
            </div>
            <div class="d-flex justify-content-center align-items-center"
              style="width:7rem; height:4rem; color:white; font-size:20px; background:#9EA2A8;">지표</div>
          </div>
          <div style="width:0.5rem; height:38.5rem; background:white;"></div>
          <!-- 작성란 -->
          <div class="d-flex flex-column justify-content-between">
            <div>
              <div class="d-flex justify-content-center" style="">
                <div class="line"></div>
              </div>
              <div class="d-flex justify-content-between align-items-center" style="width:73.5rem; height:7rem;">
                <div class="d-flex align-items-center" style="width:14.3rem; height:7rem;">
                  <div class="d-flex flex-column align-items-center" style="width:4.8rem; height:7rem;">
                    <input type="radio" id="aw1" name="Awareness" value="SNS"
                      v-model="experienceManagement.awareness[0].activity" />
                    <label class="aw1" for="aw1"></label>
                    <div>
                      <img src="../../../../assets/인지적1.png" alt="test" style="width:30px; height:30px;">
                    </div>
                    <div class="dotBack">
                      <div class="dot" style="background: #2F5597;"></div>
                    </div>
                    <div class="d-flex justify-content-center align-items-center"
                      style="font-size:15px;width:48px; text-align:center; line-height:20px;">SNS 활동</div>
                  </div>
                  <div class="d-flex flex-column align-items-center" style="width:4.8rem; height:7rem;">
                    <input type="radio" id="aw2" name="Awareness" value="온라인광고"
                      v-model="experienceManagement.awareness[0].activity" />
                    <label class="aw2" for="aw2"></label>
                    <div>
                      <img src="../../../../assets/인지적2.png" alt="test" style="width:30px; height:30px;">
                    </div>
                    <div class="dotBack">
                      <div class="dot" style="background: #2F5597;"></div>
                    </div>
                    <div class="d-flex justify-content-center align-items-center"
                      style="font-size:13px;width:52px; text-align:center;">온라인
                      광고시청
                    </div>
                  </div>
                  <div class="d-flex flex-column align-items-center" style="width:4.8rem; height:7rem;">
                    <input type="radio" id="aw3" name="Awareness" value="지인청취"
                      v-model="experienceManagement.awareness[0].activity" />
                    <label class="aw3" for="aw3"></label>
                    <div>
                      <img src="../../../../assets/인지적3.png" alt="test" style="width:30px; height:30px;">
                    </div>
                    <div class="dotBack">
                      <div class="dot" style="background: #2F5597;"></div>
                    </div>
                    <div class="d-flex justify-content-center align-items-center" style="font-size:13px;">지인으로부<br />터정보청취
                    </div>
                  </div>
                </div>
                <div class="d-flex align-items-center" style="width:14.3rem; height:7rem;">
                  <div class="d-flex flex-column align-items-center" style="width:4.8rem; height:7rem;">
                    <input type="radio" id="ap1" name="Appeal" value="웹방문"
                      v-model="experienceManagement.appeal[0].activity" />
                    <label class="ap1" for="ap1"></label>
                    <div>
                      <img src="../../../../assets/인지적4.png" alt="test" style="width:30px; height:30px;">
                    </div>
                    <div class="dotBack">
                      <div class="dot" style="background: #1968C1;"></div>
                    </div>
                    <div class="d-flex justify-content-center align-items-center"
                      style="font-size:15px;width:60px; text-align:center; line-height:20px;">웹사이트 방문</div>
                  </div>
                  <div class="d-flex flex-column align-items-center" style="width:4.8rem; height:7rem;">
                    <input type="radio" id="ap2" name="Appeal" value="앱다운"
                      v-model="experienceManagement.appeal[0].activity" />
                    <label class="ap2" for="ap2"></label>
                    <div>
                      <img src="../../../../assets/인지적5.png" alt="test" style="width:30px; height:30px;">
                    </div>
                    <div class="dotBack">
                      <div class="dot" style="background: #1968C1;"></div>
                    </div>
                    <div class="d-flex justify-content-center align-items-center"
                      style="font-size:13px;width:52px; text-align:center;">모바일앱 다운로드
                    </div>
                  </div>
                  <div class="d-flex flex-column align-items-center" style="width:4.8rem; height:7rem;">
                    <input type="radio" id="ap3" name="Appeal" value="회원가입"
                      v-model="experienceManagement.appeal[0].activity" />
                    <label class="ap3" for="ap3"></label>
                    <div>
                      <img src="../../../../assets/인지적6.png" alt="test" style="width:30px; height:30px;">
                    </div>
                    <div class="dotBack">
                      <div class="dot" style="background: #1968C1;"></div>
                    </div>
                    <div class="d-flex justify-content-center align-items-center" style="font-size:13px;">회원가입
                    </div>
                  </div>
                </div>
                <div class="d-flex align-items-center" style="width:14.3rem; height:7rem;">
                  <div class="d-flex flex-column align-items-center" style="width:4.8rem; height:7rem;">
                    <input type="radio" id="as1" name="Ask" value="타사제품" v-model="experienceManagement.ask[0].activity" />
                    <label class="as1" for="as1"></label>
                    <div>
                      <img src="../../../../assets/인지적7.png" alt="test" style="width:30px; height:30px;">
                    </div>
                    <div class="dotBack">
                      <div class="dot" style="background: #1968C1;"></div>
                    </div>
                    <div class="d-flex justify-content-center align-items-center"
                      style="font-size:15px;width:66px; text-align:center; line-height:20px;">타사 제품 검색</div>
                  </div>
                  <div class="d-flex flex-column align-items-center" style="width:4.8rem; height:7rem;">
                    <input type="radio" id="as2" name="Ask" value="성능가격비교"
                      v-model="experienceManagement.ask[0].activity" />
                    <label class="as2" for="as2"></label>
                    <div>
                      <img src="../../../../assets/인지적8.png" alt="test" style="width:30px; height:30px;">
                    </div>
                    <div class="dotBack">
                      <div class="dot" style="background: #1968C1;"></div>
                    </div>
                    <div class="d-flex justify-content-center align-items-center"
                      style="font-size:13px;width:58px; text-align:center;">성능/가격 비교
                    </div>
                  </div>
                  <div class="d-flex flex-column align-items-center" style="width:4.8rem; height:7rem;">
                    <input type="radio" id="as3" name="Ask" value="리뷰검색" v-model="experienceManagement.ask[0].activity" />
                    <label class="as3" for="as3"></label>
                    <div>
                      <img src="../../../../assets/인지적9.png" alt="test" style="width:30px; height:30px;">
                    </div>
                    <div class="dotBack">
                      <div class="dot" style="background: #1968C1;"></div>
                    </div>
                    <div class="d-flex justify-content-center align-items-center" style="font-size:13px;">리뷰검색
                    </div>
                  </div>
                </div>
                <div class="d-flex align-items-center" style="width:14.3rem; height:7rem;">
                  <div class="d-flex flex-column align-items-center" style="width:4.8rem; height:7rem;">
                    <input type="radio" id="ac1" name="Act" value="구매결정" v-model="experienceManagement.act[0].activity" />
                    <label class="ac1" for="ac1"></label>
                    <div>
                      <img src="../../../../assets/인지적10.png" alt="test" style="width:30px; height:30px;">
                    </div>
                    <div class="dotBack">
                      <div class="dot" style="background: #5B9BD5;"></div>
                    </div>
                    <div class="d-flex justify-content-center align-items-center"
                      style="font-size:15px;width:66px; text-align:center; line-height:20px;">구매결정</div>
                  </div>
                  <div class="d-flex flex-column align-items-center" style="width:4.8rem; height:7rem;">
                    <input type="radio" id="ac2" name="Act" value="온오프매장방문"
                      v-model="experienceManagement.act[0].activity" />
                    <label class="ac2" for="ac2"></label>
                    <div>
                      <img src="../../../../assets/인지적11.png" alt="test" style="width:30px; height:30px;">
                    </div>
                    <div class="dotBack">
                      <div class="dot" style="background: #5B9BD5;"></div>
                    </div>
                    <div class="d-flex justify-content-center align-items-center"
                      style="font-size:13px;width:71px; text-align:center;">온/오프라인 매장 방문
                    </div>
                  </div>
                  <div class="d-flex flex-column align-items-center" style="width:4.8rem; height:7rem;">
                    <input type="radio" id="ac3" name="Act" value="결제" v-model="experienceManagement.act[0].activity" />
                    <label class="ac3" for="ac3"></label>
                    <div>
                      <img src="../../../../assets/인지적12.png" alt="test" style="width:30px; height:30px;">
                    </div>
                    <div class="dotBack">
                      <div class="dot" style="background: #5B9BD5;"></div>
                    </div>
                    <div class="d-flex justify-content-center align-items-center" style="font-size:13px;">결제
                    </div>
                  </div>
                </div>
                <div class="d-flex align-items-center" style="width:14.3rem; height:7rem;">
                  <div class="d-flex flex-column align-items-center" style="width:4.8rem; height:7rem;">
                    <input type="radio" id="ad1" name="Advocate" value="재구매"
                      v-model="experienceManagement.advocate[0].activity" />
                    <label class="ad1" for="ad1"></label>
                    <div>
                      <img src="../../../../assets/인지적13.png" alt="test" style="width:30px; height:30px;">
                    </div>
                    <div class="dotBack">
                      <div class="dot" style="background: #5ABBD1;"></div>
                    </div>
                    <div class="d-flex justify-content-center align-items-center"
                      style="font-size:15px;width:66px; text-align:center; line-height:20px;">재구매</div>
                  </div>
                  <div class="d-flex flex-column align-items-center" style="width:4.8rem; height:7rem;">
                    <input type="radio" id="ad2" name="Advocate" value="리뷰작성"
                      v-model="experienceManagement.advocate[0].activity" />
                    <label class="ad2" for="ad2"></label>
                    <div>
                      <img src="../../../../assets/인지적14.png" alt="test" style="width:30px; height:30px;">
                    </div>
                    <div class="dotBack">
                      <div class="dot" style="background: #5ABBD1;"></div>
                    </div>
                    <div class="d-flex justify-content-center align-items-center"
                      style="font-size:13px;width:71px; text-align:center;">리뷰작성
                    </div>
                  </div>
                  <div class="d-flex flex-column align-items-center" style="width:4.8rem; height:7rem;">
                    <input type="radio" id="ad3" name="Advocate" value="멤버십가입"
                      v-model="experienceManagement.advocate[0].activity" />
                    <label class="ad3" for="ad3"></label>
                    <div>
                      <img src="../../../../assets/인지적15.png" alt="test" style="width:30px; height:30px;">
                    </div>
                    <div class="dotBack">
                      <div class="dot" style="background: #5ABBD1;"></div>
                    </div>
                    <div class="d-flex justify-content-center align-items-center" style="font-size:13px;">멤버십 가입
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <textarea class="channelIn" type="text" v-model="experienceManagement.awareness[0].channel"></textarea>
              <textarea class="channelIn" type="text" v-model="experienceManagement.appeal[0].channel"></textarea>
              <textarea class="channelIn" type="text" v-model="experienceManagement.ask[0].channel"></textarea>
              <textarea class="channelIn" type="text" v-model="experienceManagement.act[0].channel"></textarea>
              <textarea class="channelIn" type="text" v-model="experienceManagement.advocate[0].channel"></textarea>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <textarea class="expIn" type="text" v-model="experienceManagement.awareness[0].experience"></textarea>
              <textarea class="expIn" type="text" v-model="experienceManagement.appeal[0].experience"></textarea>
              <textarea class="expIn" type="text" v-model="experienceManagement.ask[0].experience"></textarea>
              <textarea class="expIn" type="text" v-model="experienceManagement.act[0].experience"></textarea>
              <textarea class="expIn" type="text" v-model="experienceManagement.advocate[0].experience"></textarea>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <textarea class="resIn" type="text" v-model="experienceManagement.awareness[0].customerResponse"></textarea>
              <textarea class="resIn" type="text" v-model="experienceManagement.appeal[0].customerResponse"></textarea>
              <textarea class="resIn" type="text" v-model="experienceManagement.ask[0].customerResponse"></textarea>
              <textarea class="resIn" type="text" v-model="experienceManagement.act[0].customerResponse"></textarea>
              <textarea class="resIn" type="text" v-model="experienceManagement.advocate[0].customerResponse"></textarea>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <textarea class="impIn" type="text" v-model="experienceManagement.awareness[0].improvements"></textarea>
              <textarea class="impIn" type="text" v-model="experienceManagement.appeal[0].improvements"></textarea>
              <textarea class="impIn" type="text" v-model="experienceManagement.ask[0].improvements"></textarea>
              <textarea class="impIn" type="text" v-model="experienceManagement.act[0].improvements"></textarea>
              <textarea class="impIn" type="text" v-model="experienceManagement.advocate[0].improvements"></textarea>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <textarea class="indIn" type="text" v-model="experienceManagement.awareness[0].indicators"></textarea>
              <textarea class="indIn" type="text" v-model="experienceManagement.appeal[0].indicators"></textarea>
              <textarea class="indIn" type="text" v-model="experienceManagement.ask[0].indicators"></textarea>
              <textarea class="indIn" type="text" v-model="experienceManagement.act[0].indicators"></textarea>
              <textarea class="indIn" type="text" v-model="experienceManagement.advocate[0].indicators"></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <button class="btn btn-sm btn-primary" style="float:right;margin-top:6px;" @click="saveExper">임시저장</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      experienceManagement: {
        awareness: [
          {
            activity: "SNS", // 주요활동
            channel: "", // 채널
            experience: "", // 고객 경험
            customerResponse: "", // 고객 반응
            improvements: "", // 문제점 & 개선사항
            indicators: "", // 지표
          }
        ],
        appeal: [
          {
            activity: "웹방문", // 주요활동
            channel: "", // 채널
            experience: "", // 고객 경험
            customerResponse: "", // 고객 반응
            improvements: "", // 문제점 & 개선사항
            indicators: "", // 지표
          }
        ],
        ask: [
          {
            activity: "타사제품", // 주요활동
            channel: "", // 채널
            experience: "", // 고객 경험
            customerResponse: "", // 고객 반응
            improvements: "", // 문제점 & 개선사항
            indicators: "", // 지표
          }
        ],
        act: [
          {
            activity: "구매결정", // 주요활동
            channel: "", // 채널
            experience: "", // 고객 경험
            customerResponse: "", // 고객 반응
            improvements: "", // 문제점 & 개선사항
            indicators: "", // 지표
          }
        ],
        advocate: [
          {
            activity: "재구매", // 주요활동
            channel: "", // 채널
            experience: "", // 고객 경험
            customerResponse: "", // 고객 반응
            improvements: "", // 문제점 & 개선사항
            indicators: "", // 지표
          }
        ],
      },
    };
  },
  methods: {
    saveExper() {
      console.log(this.experienceManagement);
    }
  },
};
</script>

<style scoped>
.CEM {
  width: 81rem;
  height: 3.5rem;
  border: none;
  color: #fff;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.channelIn {
  width: 14.3rem;
  height: 4rem;
  background: #F2F2F2;
  outline: none;
  resize: none;
  border: none;
  font-size: 15px;
}

.resIn {
  width: 14.3rem;
  height: 4rem;
  background: #F2F2F2;
  outline: none;
  resize: none;
  border: none;
  font-size: 15px;
}

.indIn {
  width: 14.3rem;
  height: 4rem;
  background: #F2F2F2;
  outline: none;
  resize: none;
  border: none;
  font-size: 15px;
}

.expIn {
  width: 14.3rem;
  height: 7rem;
  background: #F2F2F2;
  outline: none;
  resize: none;
  border: none;
  font-size: 15px;
}

.impIn {
  width: 14.3rem;
  height: 10rem;
  background: #F2F2F2;
  outline: none;
  resize: none;
  border: none;
  font-size: 15px;
}

.line {
  width: 69rem;
  height: 0.3rem;
  background: linear-gradient(to right, #236FC4, #5ABBD1);
  margin-top: 53px;
  position: absolute;
  z-index: 1;
}

.dot {
  width: 15px;
  height: 15px;
  border-radius: 10px;
  z-index: 3;
}

.dotBack {
  background: white;
  width: 17px;
  height: 17px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  justify-content: center;
  box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.3);
  z-index: 2;
}

input[type="radio"] {
  display: none;
}

label {}

input[type="radio"]+label {
  position: relative;
  cursor: pointer;
}

input[type="radio"]+.aw1:before {
  content: "";
  position: absolute;
  left: -25px;
  top: -50%;
  transform: translateY(5%);
  width: 3rem;
  height: 3rem;
  border: 0px solid #000;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 25px;
}

input[type="radio"]:checked+.aw1:before {
  content: "";
  display: inline-block;
  width: 3rem;
  height: 3rem;
  border: 2px solid #1968C1;
  border-radius: 50%;
  left: -25px;
  top: -50%;
  transform: translateY(5%);
}

input[type="radio"]+.aw2:before {
  content: "";
  position: absolute;
  left: -25px;
  top: -50%;
  transform: translateY(5%);
  width: 3rem;
  height: 3rem;
  border: 0px solid #000;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 25px;
}

input[type="radio"]:checked+.aw2:before {
  content: "";
  display: inline-block;
  width: 3rem;
  height: 3rem;
  border: 2px solid #1968C1;
  border-radius: 50%;
  left: -25px;
  top: -50%;
  transform: translateY(5%);
}

input[type="radio"]+.aw3:before {
  content: "";
  position: absolute;
  left: -25px;
  top: -50%;
  transform: translateY(5%);
  width: 3rem;
  height: 3rem;
  border: 0px solid #000;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 25px;
}

input[type="radio"]:checked+.aw3:before {
  content: "";
  display: inline-block;
  width: 3rem;
  height: 3rem;
  border: 2px solid #1968C1;
  border-radius: 50%;
  left: -25px;
  top: -50%;
  transform: translateY(5%);
}

input[type="radio"]+.ap1:before {
  content: "";
  position: absolute;
  left: -25px;
  top: -50%;
  transform: translateY(5%);
  width: 3rem;
  height: 3rem;
  border: 0px solid #000;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 25px;
}

input[type="radio"]:checked+.ap1:before {
  content: "";
  display: inline-block;
  width: 3rem;
  height: 3rem;
  border: 2px solid #1968C1;
  border-radius: 50%;
  left: -25px;
  top: -50%;
  transform: translateY(5%);
}

input[type="radio"]+.ap2:before {
  content: "";
  position: absolute;
  left: -25px;
  top: -50%;
  transform: translateY(5%);
  width: 3rem;
  height: 3rem;
  border: 0px solid #000;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 25px;
}

input[type="radio"]:checked+.ap2:before {
  content: "";
  display: inline-block;
  width: 3rem;
  height: 3rem;
  border: 2px solid #1968C1;
  border-radius: 50%;
  left: -25px;
  top: -50%;
  transform: translateY(5%);
}

input[type="radio"]+.ap3:before {
  content: "";
  position: absolute;
  left: -25px;
  top: -50%;
  transform: translateY(5%);
  width: 3rem;
  height: 3rem;
  border: 0px solid #000;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 25px;
}

input[type="radio"]:checked+.ap3:before {
  content: "";
  display: inline-block;
  width: 3rem;
  height: 3rem;
  border: 2px solid #1968C1;
  border-radius: 50%;
  left: -25px;
  top: -50%;
  transform: translateY(5%);
}

input[type="radio"]+.as1:before {
  content: "";
  position: absolute;
  left: -25px;
  top: -50%;
  transform: translateY(5%);
  width: 3rem;
  height: 3rem;
  border: 0px solid #000;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 25px;
}

input[type="radio"]:checked+.as1:before {
  content: "";
  display: inline-block;
  width: 3rem;
  height: 3rem;
  border: 2px solid #1968C1;
  border-radius: 50%;
  left: -25px;
  top: -50%;
  transform: translateY(5%);
}

input[type="radio"]+.as2:before {
  content: "";
  position: absolute;
  left: -25px;
  top: -50%;
  transform: translateY(5%);
  width: 3rem;
  height: 3rem;
  border: 0px solid #000;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 25px;
}

input[type="radio"]:checked+.as2:before {
  content: "";
  display: inline-block;
  width: 3rem;
  height: 3rem;
  border: 2px solid #1968C1;
  border-radius: 50%;
  left: -25px;
  top: -50%;
  transform: translateY(5%);
}

input[type="radio"]+.as3:before {
  content: "";
  position: absolute;
  left: -25px;
  top: -50%;
  transform: translateY(5%);
  width: 3rem;
  height: 3rem;
  border: 0px solid #000;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 25px;
}

input[type="radio"]:checked+.as3:before {
  content: "";
  display: inline-block;
  width: 3rem;
  height: 3rem;
  border: 2px solid #1968C1;
  border-radius: 50%;
  left: -25px;
  top: -50%;
  transform: translateY(5%);
}

input[type="radio"]+.ac1:before {
  content: "";
  position: absolute;
  left: -25px;
  top: -50%;
  transform: translateY(5%);
  width: 3rem;
  height: 3rem;
  border: 0px solid #000;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 25px;
}

input[type="radio"]:checked+.ac1:before {
  content: "";
  display: inline-block;
  width: 3rem;
  height: 3rem;
  border: 2px solid #1968C1;
  border-radius: 50%;
  left: -25px;
  top: -50%;
  transform: translateY(5%);
}

input[type="radio"]+.ac2:before {
  content: "";
  position: absolute;
  left: -25px;
  top: -50%;
  transform: translateY(5%);
  width: 3rem;
  height: 3rem;
  border: 0px solid #000;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 25px;
}

input[type="radio"]:checked+.ac2:before {
  content: "";
  display: inline-block;
  width: 3rem;
  height: 3rem;
  border: 2px solid #1968C1;
  border-radius: 50%;
  left: -25px;
  top: -50%;
  transform: translateY(5%);
}

input[type="radio"]+.ac3:before {
  content: "";
  position: absolute;
  left: -25px;
  top: -50%;
  transform: translateY(5%);
  width: 3rem;
  height: 3rem;
  border: 0px solid #000;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 25px;
}

input[type="radio"]:checked+.ac3:before {
  content: "";
  display: inline-block;
  width: 3rem;
  height: 3rem;
  border: 2px solid #1968C1;
  border-radius: 50%;
  left: -25px;
  top: -50%;
  transform: translateY(5%);
}

input[type="radio"]+.ad1:before {
  content: "";
  position: absolute;
  left: -25px;
  top: -50%;
  transform: translateY(5%);
  width: 3rem;
  height: 3rem;
  border: 0px solid #000;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 25px;
}

input[type="radio"]:checked+.ad1:before {
  content: "";
  display: inline-block;
  width: 3rem;
  height: 3rem;
  border: 2px solid #1968C1;
  border-radius: 50%;
  left: -25px;
  top: -50%;
  transform: translateY(5%);
}

input[type="radio"]+.ad2:before {
  content: "";
  position: absolute;
  left: -25px;
  top: -50%;
  transform: translateY(5%);
  width: 3rem;
  height: 3rem;
  border: 0px solid #000;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 25px;
}

input[type="radio"]:checked+.ad2:before {
  content: "";
  display: inline-block;
  width: 3rem;
  height: 3rem;
  border: 2px solid #1968C1;
  border-radius: 50%;
  left: -25px;
  top: -50%;
  transform: translateY(5%);
}

input[type="radio"]+.ad3:before {
  content: "";
  position: absolute;
  left: -25px;
  top: -50%;
  transform: translateY(5%);
  width: 3rem;
  height: 3rem;
  border: 0px solid #000;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 25px;
}

input[type="radio"]:checked+.ad3:before {
  content: "";
  display: inline-block;
  width: 3rem;
  height: 3rem;
  border: 2px solid #1968C1;
  border-radius: 50%;
  left: -25px;
  top: -50%;
  transform: translateY(5%);
}
</style>