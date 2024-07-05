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
          06
        </div>
        <div class="d-flex flex-column">
          <div style="font-size: 1rem">Key Resource</div>
          <div style="font-size: 2rem; color: #1968C1;">
            1) 핵심 자원 현황
          </div>
        </div>
      </div>
    </div>
    <div>
      <div style="
          width: 81rem;
          height: 2.5rem;
          border-radius: 7px;
          background: #DAE3F3;
        ">
        <div style="font-size: 17px; margin-left: 39px; line-height: 37px">
          현재 보유하고 있는 자원에 대해 알아보고 고객 가치를 창출하려면 어떠한 자원들이 추가적으로 필요한지 파악합니다.
        </div>
      </div>
    </div>
    <div class="all">
      <div class="d-flex justify-content-between" style="height:10rem;">
        <div class="d-flex flex-column align-items-center justify-content-center w-50">
          <div class="d-flex flex-column align-items-center justify-content-center">
            <div style="border:1px solid #1968C1; border-radius:3rem; width:5rem; height:5rem;"></div>
            <div style="font-size:20px; color:#1968C1;">강점(확보자원)</div>
          </div>
        </div>
        <div class="d-flex flex-column align-items-center justify-content-center w-50">
          <div class="d-flex flex-column align-items-center justify-content-center">
            <div style="border:1px solid #797777; border-radius:3rem; width:5rem; height:5rem;"></div>
            <div style="font-size:20px; color:#797777;">약점(필요자원)</div>
          </div>
        </div>
      </div>
      <div style="height:32rem;">
        <div class="split-container">
          <div class="half blue"><textarea style="width:31rem; height:8rem;"
              v-model="keyResoStatus.strength.teamBuilding"></textarea>
          </div>
          <div class="half gray">
            <textarea style="width:31rem; height:8rem;" v-model="keyResoStatus.weakness.teamBuilding"></textarea>
          </div>
          <div class="circle">
            <div class="circle2">팀 빌딩</div>
          </div>
        </div>
        <div class="split-container">
          <div class="half blue"><textarea style="width:31rem; height:8rem;"
              v-model="keyResoStatus.strength.coreTechnology"></textarea>
          </div>
          <div class="half gray"><textarea style="width:31rem; height:8rem;"
              v-model="keyResoStatus.weakness.coreTechnology"></textarea>
          </div>
          <div class="circle">
            <div class="circle2 flex-column">
              <div style="margin-top:10px;">핵심보유기술</div>
              <div>및</div>
              <div>노하우</div>
            </div>
          </div>
        </div>
        <div class="split-container">
          <div class="half blue"><textarea style="width:31rem; height:8rem;"
              v-model="keyResoStatus.strength.infrastructure"></textarea>
          </div>
          <div class="half gray"><textarea style="width:31rem; height:8rem;"
              v-model="keyResoStatus.weakness.infrastructure"></textarea>
          </div>
          <div class="circle">
            <div class="circle2">인프라스트럭쳐</div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <button class="btn btn-sm btn-primary" style="float:right;margin-top:6px;" @click="saveKey">임시저장</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyResoStatus: { // 핵심자원현황
        strength: { // 강점
          teamBuilding: "", // 팀빌딩
          coreTechnology: "", // 핵심보유기술 및 노하우
          infrastructure: "", // 인프라스트럭쳐
        },
        weakness: {
          teamBuilding: "", // 팀빌딩
          coreTechnology: "", // 핵심보유기술 및 노하우
          infrastructure: "", // 인프라스트럭쳐
        }
      },
    };
  },
  methods: {
    saveKey() {
      console.log(this.keyResoStatus);
    }
  },
};
</script>

<style scoped>
.split-container {
  position: relative;
  width: 100%;
  height: 9rem;
  margin-bottom: 2rem;
}

.half {
  position: absolute;
  width: 50%;
  height: 100%;
}

.blue {
  width: 40rem;
  height: 9rem;
  border-radius: 5rem 0 0 5rem;
  background: #DAE3F3;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  display: flex;
  justify-content: center;
  align-items: center;
}

.gray {
  width: 40rem;
  height: 9rem;
  border-radius: 0 5rem 5rem 0;
  background: #E7E6E6;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle {
  position: absolute;
  width: 10rem;
  height: 10rem;
  background-color: white;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.circle2 {
  position: absolute;
  width: 150px;
  height: 150px;
  background-color: #1968C1;
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
</style>
