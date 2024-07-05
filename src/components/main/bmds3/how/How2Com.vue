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
            2) 필요자원 확보 방안
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
          고객 가치 창출을 위해 추가적으로 필요한 팀원, 기술, 인프라를 분기별로 어떻게 확보해 나갈것인지 고민해봅니다.
        </div>
      </div>
    </div>
    <div class="d-flex flex-column justify-content-between"
      style="border:1px solid #a3a2a2; height:39rem; margin-top:2rem;">
      <div class="d-flex justify-content-between">
        <div class="planToSecNecesRes" style="width: 5rem;">구분</div>
        <div class="planToSecNecesRes" style="width: 46rem; border-left:1px solid white; ">확보방안</div>
        <div class="" style="width: 30rem; height: 2.5rem;">
          <div class="planToSecNecesRes2" style="width: 30rem; border-left:1px solid white;">추진일정</div>
        </div>
      </div>
      <div class="d-flex justify-content-between">
        <div style="width:5rem;">
          <div class="planToSecNecesRes3">팀원</div>
          <div class="planToSecNecesRes3">기술</div>
          <div class="planToSecNecesRes4">인프라</div>
        </div>
        <div style="width:76rem;">
          <div style="height:12rem; overflow-y: scroll;">
            <div v-for="(aa, i) in planToSecNecesRes.member" :key="i" class="d-flex justify-content-between">
              <div
                style="width: 46rem; height:4rem; border-bottom:1px solid #a3a2a2; border-right:1px solid #a3a2a2; border-top:1px solid #a3a2a2;">
                <textarea style="width:46rem; height:100%;" v-model="planToSecNecesRes.member[i].ensuring"></textarea>
              </div>
              <div class="d-flex justify-content-between" style="width: 30rem; border: 1px solid #a3a2a2;">
                <div>
                  <input type="date" v-on:input="checkYear"
                    v-model="planToSecNecesRes.member[i].promotScheduleStart" />~<input type="date" v-on:input="checkYear"
                    v-model="planToSecNecesRes.member[i].promotScheduleEnd" />
                </div>
                <div class="d-flex align-items-center justify-content-center"
                  style="width:2rem;height:2rem; border:1px solid black; cursor:pointer;" @click="delMem(i)">X</div>
              </div>
            </div>
          </div>
          <div style="height:12rem; overflow-y: scroll;">
            <div v-for="(bb, i) in planToSecNecesRes.technology" :key="i" class="d-flex justify-content-between">
              <div
                style="width: 46rem; height:4rem; border-bottom:1px solid #a3a2a2; border-right:1px solid #a3a2a2; border-top:1px solid #a3a2a2;">
                <textarea style="width:46rem; height:100%;" v-model="planToSecNecesRes.technology[i].ensuring"></textarea>
              </div>
              <div class="d-flex justify-content-between" style="width: 30rem; border: 1px solid #a3a2a2;">
                <div>
                  <input type="date" v-on:input="checkYear"
                    v-model="planToSecNecesRes.technology[i].promotScheduleStart" />~<input type="date"
                    v-on:input="checkYear" v-model="planToSecNecesRes.technology[i].promotScheduleEnd" />
                </div>
                <div class="d-flex align-items-center justify-content-center"
                  style="width:2rem;height:2rem; border:1px solid black; cursor:pointer;" @click="delTech(i)">X</div>
              </div>
            </div>
          </div>
          <div style="height:12rem; overflow-y: scroll;">
            <div v-for="(cc, i) in planToSecNecesRes.infra" :key="i" class="d-flex justify-content-between">
              <div
                style="width: 46rem; height:4rem; border-bottom:1px solid #a3a2a2; border-right:1px solid #a3a2a2; border-top:1px solid #a3a2a2;">
                <textarea style="width:46rem; height:100%;" v-model="planToSecNecesRes.infra[i].ensuring"></textarea>
              </div>
              <div class="d-flex justify-content-between" style="width: 30rem; border: 1px solid #a3a2a2;">
                <div>
                  <input type="date" v-on:input="checkYear"
                    v-model="planToSecNecesRes.infra[i].promotScheduleStart" />~<input type="date" v-on:input="checkYear"
                    v-model="planToSecNecesRes.infra[i].promotScheduleEnd" />
                </div>
                <div class="d-flex align-items-center justify-content-center"
                  style="width:2rem;height:2rem; border:1px solid black; cursor:pointer;" @click="delInf(i)">X</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <button class="btn btn-sm btn-primary" style="float:right;margin-top:6px;" @click="savePlan">임시저장</button>
      <button class="btn btn-sm btn-primary" style="float:right;margin-top:6px;" @click="addMem">팀원추가</button>
      <button class="btn btn-sm btn-primary" style="float:right;margin-top:6px;" @click="addTech">기술추가</button>
      <button class="btn btn-sm btn-primary" style="float:right;margin-top:6px;" @click="addInf">인프라추가</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      planToSecNecesRes: { // 필요자원 확보 방안
        member: [ // 팀원
          {
            ensuring: "", // 확보방안
            promotScheduleStart: "", // 추진일정시작
            promotScheduleEnd: "", // 추진일정끝
          },
        ],
        technology: [ // 기술
          {
            ensuring: "", // 확보방안
            promotScheduleStart: "", // 추진일정시작
            promotScheduleEnd: "", // 추진일정끝
          },
        ],
        infra: [ // 인프라
          {
            ensuring: "", // 확보방안
            promotScheduleStart: "", // 추진일정시작
            promotScheduleEnd: "", // 추진일정끝
          },

        ]
      },
    };
  },
  methods: {
    addMem() {
      this.planToSecNecesRes.member.push({
        ensuring: "", // 확보방안
        promotScheduleStart: "", // 추진일정시작
        promotScheduleEnd: "", // 추진일정끝
      });
    },
    delMem(i) {
      this.planToSecNecesRes.member.splice(i, 1);
    },
    addTech() {
      this.planToSecNecesRes.technology.push({
        ensuring: "", // 확보방안
        promotScheduleStart: "", // 추진일정시작
        promotScheduleEnd: "", // 추진일정끝
      });
    },
    delTech(i) {
      this.planToSecNecesRes.technology.splice(i, 1);
    },
    addInf() {
      this.planToSecNecesRes.infra.push({
        ensuring: "", // 확보방안
        promotScheduleStart: "", // 추진일정시작
        promotScheduleEnd: "", // 추진일정끝
      });
    },
    delInf(i) {
      this.planToSecNecesRes.infra.splice(i, 1);
    },
    savePlan() {
      console.log(this.planToSecNecesRes);
    },
    checkYear(event) {
      const inputDate = event.target.value;
      const year = new Date(inputDate).getFullYear();

      if (year < 1000 || year > 9999) {
        alert('올바른 4자리 연도를 입력하세요.');
        event.target.value = '';
      }
    }
  },
};
</script>

<style scoped>
.planToSecNecesRes {
  background: #1968C1;
  color: white;
  font-size: 23px;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.planToSecNecesRes2 {
  background: #1968C1;
  color: white;
  font-size: 23px;
  height: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.planToSecNecesRes3 {
  width: 5rem;
  height: 12rem;
  font-size: 23px;
  border-bottom: 1px solid #a3a2a2;
  border-right: 1px solid #a3a2a2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.planToSecNecesRes4 {
  width: 5rem;
  height: 12rem;
  font-size: 23px;
  border-right: 1px solid #a3a2a2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

input[type="date"],
textarea {
  border: none;
  width: 10rem;
  font-size: 20px;
}
</style>
