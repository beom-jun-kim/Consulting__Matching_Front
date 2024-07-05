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
            3) 펀딩 전략(자금 소요 및 조달 계획)
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
          비즈니스모델 구현과 시설비, 인건비, 홍보비 등 기본적인 창업 운영을 하기 위한 소요 및 조달 계획을 수립합니다.
        </div>
      </div>
    </div>
    <div class="d-flex flex-column" style="height:43rem; margin-top:1.5rem;">
      <div class="d-flex justify-content-between">
        <div class="fundStrategy" style="width: 16rem; border-right:1px solid white;">구분</div>
        <div class="fundStrategy flex-column" style="width: 23rem; border-right:1px solid white;">
          항목
        </div>
        <div>
          <input class="fundStrategy2" v-model="fundStrategy.year[0]" type="text" style="border-right:1px solid white;">
        </div>
        <div>
          <input class="fundStrategy2" v-model="fundStrategy.year[1]" type="text" style="border-right:1px solid white;">
        </div>
        <div>
          <input class="fundStrategy2" v-model="fundStrategy.year[2]" type="text" style="border-right:1px solid white;">
        </div>
        <div>
          <input class="fundStrategy2" v-model="fundStrategy.year[3]" type="text" style="border-right:1px solid white;">
        </div>
        <div>
          <div class="fundStrategy6">X</div>
        </div>
      </div>
      <div class="d-flex justify-content-between">
        <div style="width:16rem;">
          <div class="d-flex justify-content-between">
            <div style="width:8rem;">
              <div class="fundStrategy3 borNoTop">
                자금<br />소요<br />계획</div>
            </div>
            <div class="d-flex flex-column justify-content-between">
              <div class="d-flex justify-content-between">
                <div style="width:8rem;">
                  <div class="fundStrategy4 borNoTopLeft">
                    <div>직접비</div>
                  </div>
                </div>
                <div class="d-flex justify-content-between">
                  <div>
                    <div style="height:6rem; overflow-y: scroll;">
                      <div class="d-flex flex-column justify-content-start">
                        <div class="d-flex justify-content-between" v-for="(num, i) in fundStrategy.fundPlan.directCost"
                          :key="i">
                          <input class="borNoTopLeft" v-model="num.item" type="text" style="width:23rem; height:2rem;" />
                          <input class="borNoTopLeft" v-model="num.amount1" type="text"
                            style="width:10rem; height:2rem;" />
                          <input class="borNoTopLeft" v-model="num.amount2" type="text"
                            style="width:10rem; height:2rem;" />
                          <input class="borNoTopLeft" v-model="num.amount3" type="text"
                            style="width:10rem; height:2rem;" />
                          <input class="borNoTopLeft" v-model="num.amount4" type="text"
                            style="width:10rem; height:2rem;" />
                          <div class="d-flex align-items-center justify-content-center borNoTopLeft"
                            style="width:2rem;height:2rem; cursor:pointer; font-size:15px;" @click="delDirect(i)">X</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex flex-columnjustify-content-between">
                <div style="width:8rem;">
                  <div class="fundStrategy4 borNoTopLeft">
                    <div>간접비</div>
                  </div>
                </div>
                <div class="d-flex justify-content-between">
                  <div>
                    <div style="height:6rem; overflow-y: scroll;">
                      <div class="d-flex flex-column justify-content-start">
                        <div class="d-flex justify-content-between" v-for="(num2, i) in fundStrategy.fundPlan.overhead"
                          :key="i">
                          <input class="borNoLeft" type="text" v-model="num2.item" style="width:23rem; height:2rem;" />
                          <input class="borNoLeft" type="text" v-model="num2.amount1" style="width:10rem; height:2rem;" />
                          <input class="borNoLeft" type="text" v-model="num2.amount2" style="width:10rem; height:2rem;" />
                          <input class="borNoLeft" type="text" v-model="num2.amount3" style="width:10rem; height:2rem;" />
                          <input class="borNoLeft" type="text" v-model="num2.amount4" style="width:10rem; height:2rem;" />
                          <div class="d-flex align-items-center justify-content-center borNoLeft"
                            style="width:2rem;height:2rem; cursor:pointer; font-size:15px;" @click="delOver(i)">X</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
      <div class="d-flex justify-content-between" style="border-bottom: 1px solid #a3a2a2;">
        <div style="width:8rem;">
          <div class="fundStrategy3 borNoTop">
            자금<br />조달<br />계획
          </div>
        </div>
        <div>
          <div style="height:12rem; overflow-y: scroll;">
            <div class="d-flex flex-column justify-content-start">
              <div class="d-flex justify-content-between" v-for="(num3, i) in fundStrategy.financPlan" :key="i">
                <div class="fundStrategy5 borNoTopLeft" style="width:8rem; height:2rem;">{{ i + 1 }}</div>
                <input class="borNoLeft" type="text" v-model="num3.item" style="width:23rem; height:2rem;" />
                <input class="borNoLeft" type="text" v-model="num3.amount1" style="width:10rem; height:2rem;" />
                <input class="borNoLeft" type="text" v-model="num3.amount2" style="width:10rem; height:2rem;" />
                <input class="borNoLeft" type="text" v-model="num3.amount3" style="width:10rem; height:2rem;" />
                <input class="borNoLeft" type="text" v-model="num3.amount4" style="width:10rem; height:2rem;" />
                <div class="d-flex align-items-center justify-content-center borNoLeft"
                  style="width:2rem;height:2rem; cursor:pointer; font-size:15px;" @click="delFinanc(i)">X</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style="height:43rem; margin-top:1.5rem;">
        <div class="d-flex justify-content-center align-items-center"
          style="height:100%; background:#E7E6E6; border-radius:25px;">
          <div style="width:79rem; height:14rem;">
            <div style="font-size:20px; margin-bottom:5px;">
              구체적 자금 조달 전략
            </div>
            <textarea style="width:100%; height:80%;" v-model="fundStrategy.specFundStrategy"></textarea>
          </div>
        </div>

      </div>
    </div>
    <div>
      <button class="btn btn-sm btn-primary" style="float:right;margin-top:6px;" @click="savePlan">임시저장</button>
      <button class="btn btn-sm btn-primary" style="float:right;margin-top:6px;" @click="addFinancPlan">조달추가</button>
      <button class="btn btn-sm btn-primary" style="float:right;margin-top:6px;" @click="addDirect">직접비추가</button>
      <button class="btn btn-sm btn-primary" style="float:right;margin-top:6px;" @click="addOver">간접비추가</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fundStrategy: { // 펀딩전략
        year: ['', '', '', ''], // 연도
        fundPlan: { // 자금소요계획
          directCost: [ // 직접비
            {
              item: "", // 항목
              amount1: "", // 액수1
              amount2: "", // 액수2
              amount3: "", // 액수3
              amount4: "", // 액수4
            }
          ],
          overhead: [ // 간접비
            {
              item: "", // 항목
              amount1: "", // 액수1
              amount2: "", // 액수2
              amount3: "", // 액수3
              amount4: "", // 액수4
            }
          ],
        },
        financPlan: [ // 자금조달계획
          {
            item: "", // 항목
            amount1: "", // 액수1
            amount2: "", // 액수2
            amount3: "", // 액수3
            amount4: "", // 액수4
          },
        ],
        specFundStrategy: "", // 구체적 자금 조달 전략
      },

    };
  },
  methods: {
    addFinancPlan() {
      this.fundStrategy.financPlan.push({
        item: "", // 항목
        amount1: "", // 액수1
        amount2: "", // 액수2
        amount3: "", // 액수3
        amount4: "", // 액수4
      })
    },
    addDirect() {
      this.fundStrategy.fundPlan.directCost.push({
        item: "", // 항목
        amount1: "", // 액수1
        amount2: "", // 액수2
        amount3: "", // 액수3
        amount4: "", // 액수4
      })
    },
    addOver() {
      this.fundStrategy.fundPlan.overhead.push({
        item: "", // 항목
        amount1: "", // 액수1
        amount2: "", // 액수2
        amount3: "", // 액수3
        amount4: "", // 액수4
      })
    },
    delFinanc(i) {
      this.fundStrategy.financPlan.splice(i, 1);
    },
    delDirect(i) {
      this.fundStrategy.fundPlan.directCost.splice(i, 1);
    },
    delOver(i) {
      this.fundStrategy.fundPlan.overhead.splice(i, 1);
    },
    savePlan() {
      console.log(this.fundStrategy);
    },
  },
};
</script>

<style scoped>
.fundStrategy {
  background: #1968C1;
  color: white;
  font-size: 20px;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fundStrategy2 {
  background: #1968C1;
  color: white;
  font-size: 20px;
  width: 10rem;
  height: 2rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fundStrategy3 {
  width: 8rem;
  height: 12rem;
  font-size: 20px;
  background: #DAE3F3;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fundStrategy4 {
  width: 8rem;
  height: 6rem;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fundStrategy5 {
  width: 8rem;
  height: 2rem;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fundStrategy6 {
  background: #1968C1;
  color: white;
  font-size: 20px;
  width: 2rem;
  height: 2rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.borNoTop {
  border-bottom: 1px solid #a3a2a2;
  border-left: 1px solid #a3a2a2;
  border-top: 0px solid #a3a2a2;
  border-right: 1px solid #a3a2a2;
}

.borNoTopLeft {
  border-bottom: 1px solid #a3a2a2;
  border-right: 1px solid #a3a2a2;
  border-top: 0px solid #a3a2a2;
  border-left: 0px solid #a3a2a2;
}

.borNoLeft {
  border-bottom: 1px solid #a3a2a2;
  border-right: 1px solid #a3a2a2;
  border-top: 1px solid #a3a2a2;
  border-left: 0px solid #a3a2a2;
}
</style>
