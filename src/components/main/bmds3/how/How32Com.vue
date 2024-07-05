<template>
  <div class="con">
    <div class="dfJccAic" style="width:100rem; height:60rem;">
      <div class="dfJccAic" style="width:95rem; height:55rem; background:#E7E6E6;">
        <div class="dfJccAic" style="width:90rem; height:700px;background:white; margin-top:6rem;">
          <div class="image-container" style="width:90rem; height:55rem;margin-top:-75px;">
            <div class="dfJceAic">
              <div class="dfJcbAic" style="width:45.7rem; height:2rem; margin-top:4rem;">
                <input class="teamItem" type="text" style="width:14.4rem;" placeholder="팀명">
                <input class="teamItem" type="text" style="width:30rem;" placeholder="아이템">
              </div>
            </div>
            <div class="flex-column dfJcsAic" style="width:90rem; height:700px; margin-top:31px; ">
              <div class="dfJcbAie" style="width:100%; height:233px; margin-bottom:1px;">
                <div class="dfJccAic" style="width:22.5rem;  height:160px; font-size:20px;">
                  {{ final11Block.activity }}
                </div>
                <div class="dfJccAic" style="width:22.5rem;  height:160px; font-size:20px; ">
                  {{ final11Block.feedback }}
                </div>
                <div class="dfJccAic" style="width:22.5rem;  height:160px; font-size:20px; ">
                  {{ final11Block.solution }}
                </div>
                <div class="dfJccAic" style="width:22.5rem;  height:160px; font-size:20px; ">
                  {{ final11Block.alternatives }}
                </div>
              </div>
              <div class="dfJcbAie" style="width:100%; height:233px;">
                <div class="dfJccAic" style="width:22.5rem;  height:160px; font-size:20px; ">
                  {{ final11Block.revenus }}
                </div>
                <div class="dfJccAic" style="width:15rem;  height:140px; font-size:17px; ">
                  {{ final11Block.valueDesign.porServ }}
                </div>
                <div class="dfJccAic" style="width:15rem;  height:140px; font-size:17px; ">
                  {{ final11Block.valueDesign.custWant }}
                </div>
                <div class="dfJccAic" style="width:15rem;  height:140px; font-size:17px; ">
                  {{ final11Block.valueDesign.custNeeds }}
                </div>
                <div class="dfJccAic" style="width:22.5rem;  height:140px; font-size:20px; ">
                  {{ final11Block.problemDefinition }}
                </div>
              </div>
              <div class="dfJcbAie" style="width:100%; height:233px;margin-bottom:1px;">
                <div class="dfJccAic" style="width:22.5rem;  height:160px; font-size:20px; ">
                  {{ final11Block.partners }}
                </div>
                <div class="dfJccAic" style="width:22.5rem;  height:160px; font-size:20px; ">
                  {{ final11Block.resources }}
                </div>
                <div class="dfJccAic" style="width:22.5rem;  height:160px; font-size:20px; ">
                  {{ final11Block.experience }}
                </div>
                <div class="dfJccAic" style="width:22.5rem; height:160px; font-size:20px; ">
                  {{ final11Block.marketInsight }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BMDSService from '@/services/main/BMDSService';

export default {
  data() {
    return {
      final11Block: {
        marketInsight: "1", // 마켓인사이트
        problemDefinition: "2", // 고객 선정 및 문제 정의
        alternatives: "3", // 기존 대안(경쟁사) 분석
        solution: "4", // 해결안
        feedback: "5", // 피드백
        activity: "6", // 핵심활동
        revenus: "7", // 수익모델
        partners: "8", // 핵심파트너
        resources: "9", // 핵심자원
        experience: "10", // 고객경험 설계
        valueDesign: { // 가치설계
          porServ: "11", // 제품 또는 서비스
          custWant: "12", // 고객 해소 또는 고객 혜택
          custNeeds: "13" // 고객 고충 또는 불충족 니즈
        }
      },
    }
  },
  methods: {
    getBMDS() {
      // axios로 spring에 모든 회원 조회 요청
      BMDSService.getUsrAll()
        // 성공하면 then으로 서버 데이터(response.data)가 들어옴
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log("Error occurred while fetching data: ", error);
        });
    },
  }
  // mounted() {
  //   this.getBMDS();
  // },
};
</script>

<style scoped>
.teamItem {
  height: 2rem;
  border-radius: 15px;
  text-align: center;
  font-size: 20px;
  outline: none;
  border: none;
}

.dfJccAic {
  display: flex;
  justify-content: center;
  align-items: center;
}

.dfJceAic {
  display: flex;
  justify-content: end;
  align-items: center;
}

.dfJcbAic {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dfJcsAic {
  display: flex;
  justify-content: start;
  align-items: center;
}

.dfJcbAie {
  display: flex;
  justify-content: space-between;
  align-items: end;
}

.con {
  display: flex;
  justify-content: space-between;
  align-items: center;
  --bs-gutter-x: 1.5rem;
  padding-right: calc(var(--bs-gutter-x)*0.5);
  padding-left: calc(var(--bs-gutter-x)*0.5);
  margin-right: auto;
  margin-left: auto;
}

.image-container {
  background-image: url("@/assets/bmds3/11블럭.png");
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>
