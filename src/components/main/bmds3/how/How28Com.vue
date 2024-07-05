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
          <div style="font-size: 1rem">Core Activity</div>
          <div style="font-size: 2rem; color: #1968C1;">
            6) 세부 추진 일정
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
          핵심 활동의 분기별 세부 추진 일정을 수립합니다.
        </div>
      </div>
    </div>

    <div class="d-flex flex-column mt-3" style="height:44rem; border:1px solid black;">
      <div class="d-flex justify-content-between align-items-center">
        <div class="categoryTitle" style="background: linear-gradient(to right, #236FC4, #4F92D1);">핵심 활동 단계</div>
        <div class="categoryTitle"
          style="background: linear-gradient(to right, #5093D2, #5BA8D3); border-width:0 1px 0 1px;border-style:solid;border-color:white;">
          세부 활동</div>
        <div class="categoryTitle" style="background: linear-gradient(to right, #5BA8D3, #5ABBD1);">추진 일정</div>
      </div>
      <div class="d-flex justify-content-between">
        <div style="width:81rem;">
          <div style="height:39rem; overflow-y: scroll;">
            <div v-for="(cal, i) in calender" :key="i" class="d-flex justify-content-between">
              <div
                style="width: 27rem; height:4rem; border-bottom:1px solid #a3a2a2; border-right:1px solid #a3a2a2; border-top:1px solid #a3a2a2;">
                <textarea style="width:27rem; height:100%; font-size:20px;" v-model="cal.fit_category"></textarea>
              </div>
              <div
                style="width: 27rem; height:4rem; border-bottom:1px solid #a3a2a2; border-right:1px solid #a3a2a2; border-top:1px solid #a3a2a2;">
                <textarea style="width:27rem; height:100%;font-size:20px;"></textarea>
              </div>
              <div class="d-flex justify-content-between" style="width:27rem; border: 1px solid #a3a2a2;">
                <div>
                  <input type="date" style="font-size:20px;" v-on:input="checkYear" />~<input type="date"
                    style="font-size:20px;" v-on:input="checkYear" />
                </div>
                <div class="d-flex align-items-center justify-content-center"
                  style="width:2rem;height:2rem; border:1px solid black; cursor:pointer;" @click="delMem(i)">X</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <button class="btn btn-sm btn-primary" style="float:right;margin-top:6px;" @click="saveInno4">임시저장</button>
      <button class="btn btn-sm btn-primary" style="float:right;margin-top:6px;" @click="addMem">팀원추가</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      calender: [ // 세부 추진 일정
        {
          fit_category: "", // 핵심 활동 단계
          detail: "", // 세부 활동
          start_month: "", // 시작월
          end_month: "" // 끝월
        },
      ],
    };
  },
  methods: {
    addMem() {
      this.calender.push({
        fit_category: "", // 핵심 활동 단계
        detail: "", // 세부 활동
        start_month: "", // 시작월
        end_month: "" // 끝월
      });
    },
    delMem(i) {
      this.calender.splice(i, 1);
    },
    checkYear(event) {
      const inputDate = event.target.value;
      const year = new Date(inputDate).getFullYear();

      if (year < 1000 || year > 9999) {
        alert('올바른 4자리 연도를 입력하세요.');
        event.target.value = '';
      }
    },
    saveInno4() {
      console.log(this.calender);
    }
  },
};
</script>

<style scoped>
.categoryTitle {
  width: 27rem;
  height: 5rem;
  border: none;
  color: #fff;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>