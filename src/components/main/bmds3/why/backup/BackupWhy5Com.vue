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
    <div class="d-flex justify-content-start" style="height: 5rem">
      <div class="d-flex">
        <div
          style="
            font-size: 6rem;
            width: 6rem;
            color: rgba(236, 226, 238, 1);
            margin: -2.7rem 1.5rem 0 -7.5rem;
          "
        >
          01
        </div>
        <div class="d-flex flex-column">
          <div style="font-size: 1rem">Market Insight</div>
          <div style="font-size: 2rem; color: rgb(199, 121, 196)">
            5) 규제와 법규
          </div>
        </div>
      </div>
    </div>
    <div>
      <div
        style="
          width: 83rem;
          height: 2.5rem;
          border-radius: 7px;
          background: rgba(236, 226, 238, 1);
          margin-left: -1rem;
        "
      >
        <div style="font-size: 17px; margin-left: 39px; line-height: 37px">
          환경적 / 경제적 / 사회적 정책 등 내 비즈니스모델과 관련된 규제와
          법규에 대해 파악하고 현재는 어떠한 방식으로 각 규제들을 대응하고
          있는지 알아봅니다.
        </div>
      </div>
    </div>
    <div class="row d-flex justify-content-start mt-5" style="height: 40rem">
      <div
        class="col-6 justify-content-center"
        style="border: 5px solid rgb(199, 121, 196)"
      >
        <div
          class="d-flex justify-content-center"
          style="
            margin-top: -5%;
            background-color: white;
            align-items: center;
            width: auto;
            margin-left: 50px;
            margin-right: 50px;
            font-size: 2rem;
            color: rgb(199, 121, 196);
          "
        >
          제품(서비스) 관련 규제 및 법규
        </div>
        <div style="height: 34rem; overflowy: scroll">
          <div v-for="(item, index) in regulations.regulation" :key="index">
            <textarea
              class="p-3"
              style="
                border: none;
                border-bottom: 1px solid rgb(199, 121, 196);
                font-size: 15px;
                width: 20rem;
                height: 5rem;
              "
              v-model="regulations.regulation[index]"
            ></textarea>
          </div>
        </div>
        <div class="d-flex justify-content-end" style="width: 100%">
          <button class="btn btn-primary mt-3" @click="addRaw">
            Textarea 추가
          </button>
          <button class="btn btn-danger mt-3" @click="removeRaw">
            Textarea 지우기
          </button>
        </div>
      </div>
      <div
        class="col-6 justify-content-center"
        style="border: 5px solid rgb(199, 121, 196)"
      >
        <div
          class="d-flex justify-content-center"
          style="
            margin-top: -5%;
            background-color: white;
            align-items: center;
            width: auto;
            margin-left: 50px;
            margin-right: 50px;
            font-size: 2rem;
            color: rgb(199, 121, 196);
          "
        >
          규제 및 법규 대응 현황
        </div>
        <div style="height: 34rem; overflowy: scroll">
          <div v-for="(item, index) in regulations.response" :key="index">
            <textarea
              class="p-3"
              style="
                border: none;
                border-bottom: 1px solid rgb(199, 121, 196);
                font-size: 15px;
                width: 20rem;
                height: 5rem;
              "
              v-model="regulations.response[index]"
            ></textarea>
          </div>
        </div>
        <div class="d-flex justify-content-end" style="width: 100%">
          <button class="btn btn-primary mt-3" @click="addRes">
            Textarea 추가
          </button>
          <button class="btn btn-danger mt-3" @click="removeRes">
            Textarea 지우기
          </button>
        </div>
      </div>
    </div>
    <div>
      <button
        type="button"
        class="btn btn-sm btn-primary"
        style="float: right; margin-top: 6px"
        @click="saveRegul"
      >
        임시저장
      </button>
    </div>
  </div>
</template>

<script>
import BMDataService from "@/services/admin/BMDataService";

export default {
  data() {
    return {
      regulations: {
        regulation: [""],
        response: [""],
      },
    };
  },
  methods: {
    addRaw() {
      this.regulations.regulation.push("");
    },
    addRes() {
      this.regulations.response.push("");
    },

    removeRaw() {
      if (this.regulations.regulation.length > 1) {
        this.regulations.regulation.pop();
      }
    },
    removeRes() {
      if (this.regulations.response.length > 1) {
        this.regulations.response.pop();
      }
    },
    saveRegul() {
      if (confirm("저장하시겠습니다?") == true) {
        var data = {
          regulation: this.regulations.regulation,
          response: this.regulations.response,
        };
      }
      BMDataService.saveRegulations(this.$route.params.id, data)
        .then((res) => {
          if (!alert("저장되었습니다.")) {
            console.log(res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.technologyTrends {
  width: 5rem;
  height: 400px;
  background: #e7e6e6;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.titleContent {
  font-size: 17px;
  text-align: center;
  margin-top: 2rem;
  color: rgb(197, 90, 194);
}

hr {
  border: none;
  /* 기본 테두리 제거 */
  height: 2px;
  /* 선의 두께 설정 */
  background-color: #000;
  /* 원하는 색상으로 설정 (여기서는 검정색) */
}

.sizedBox {
  width: 5rem;
  height: 400px;
}

.BSO {
  width: 2rem;
  height: 2rem;
  border: 5px solid rgb(236, 226, 238);
  border-radius: 16px;
  background: white;
  z-index: 3;
}

.BO {
  width: 9rem;
  height: 9rem;
  border: 5px solid rgb(236, 226, 238);
  border-radius: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(236, 226, 238);
}

.SO {
  width: 6rem;
  height: 6rem;
  border: 5px solid rgb(236, 226, 238);
  border-radius: 56px;
  background: white;
}

.lineOne {
  width: 83rem;
  height: 2.5rem;
  margin-left: -1rem;
  z-index: 1;
}

.technologyTrends_1 {
  width: 15rem;
  height: 400px;
}
</style>
