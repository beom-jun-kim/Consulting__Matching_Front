<template>
  <div>
    <Nav />
    <div class="sp_wrap">
      <div class="sp_container">
        <h6>지원사업 알아보기</h6>
        <div class="sp_contents container rounded-3 preB">
      <div class="">
        <div class="d-flex flex-col justify-content-between">
          <div class="col-12">
            <div>
              <div class="d-flex flex-wrap ">
                <span class="fullSqure d-flex align-items-center d-flex align-items-center"><i class="fa-solid fa-check"></i></span>
                <span class="fs-2 fw-bold"> 창업하신지는 얼마나 되셨나요?</span>
              </div>
              <div class="d-flex flex-wrap  align-items-center">
                <label for="no" class="button-checkbox5 mx-2 my-2 upTime1" data-time="예창">
                  <input type="radio" value="9" name="found" id="no" class="checkbox-icon2 btn-check"
                    v-model="career_int" />
                  <span class="btn btn-primary shadow-sm rounded-3">예비창업자</span>
                </label>
                <label for="1year" class="button-checkbox3 mx-2 my-2 upTime1" data-time="1년 미만">
                  <input type="radio" value="1" name="found" id="1year" class="checkbox-icon2 btn-check"
                    v-model="career_int" />
                  <span class="btn btn-primary shadow-sm rounded-3">1년 미만</span>
                </label>
                <label for="3year" class="button-checkbox3 mx-2 my-2 upTime1" data-time="3년 미만">
                  <input type="radio" value="3" name="found" id="3year" class="checkbox-icon2 btn-check"
                    v-model="career_int" />
                  <span class="btn btn-primary shadow-sm rounded-3">3년 미만</span>
                </label>
                <label for="5year" class="button-checkbox3 mx-2 my-2 upTime1" data-time="5년 미만">
                  <input type="radio" value="5" name="found" id="5year" class="checkbox-icon2 btn-check"
                    v-model="career_int" />
                  <span class="btn btn-primary shadow-sm rounded-3">5년 미만</span>
                </label>
                <label for="7year" class="button-checkbox3 mx-2 my-2 upTime1" data-time="7년 미만">
                  <input type="radio" value="7" name="found" id="7year" class="checkbox-icon2 btn-check"
                    v-model="career_int" />
                  <span class="btn btn-primary shadow-sm rounded-3">7년 미만</span>
                </label>
              </div>
            </div> 
          </div>
        </div>
        <div class="d-flex ">
          <div class="col-12">
            <div class="d-flex flex-wrap ">
              <span class="fullSqure d-flex align-items-center"><i class="fa-solid fa-check"></i></span><span class="fs-2 fw-bold">아래 항목중 해당사항이
                있으신가요?</span>
            </div>
            <div class="jcs d-flex flex-wrap  align-items-center">
              <label for="all-b" class="button-checkbox7 mx-2 my-2 upTime2" id="all-bc">
                <input type="checkbox" value="전체" name="upTime-b" id="all-b" class="checkbox-icon1 btn-check"
                  @change="handleCheckboxChange2" checked />
                <span class="btn btn-primary shadow-sm rounded-3">해당없음</span>
              </label>
              <label for="b-2" class="button-checkbox2 mx-2 my-2 upTime2">
                <input type="checkbox" value="청년창업" name="upTime-b" id="b-2" class="checkbox-icon1 btn-check"
                  @change="handleCheckboxChange2" />
                <span class="btn btn-primary shadow-sm rounded-3" data-bs-toggle="popover" data-bs-trigger="hover focus"
                  data-bs-content="만 40세 이하">청년사업자</span>
              </label>
              <label for="b-3" class="button-checkbox2 mx-2 my-2 upTime2">
                <input type="checkbox" value="재창업자" name="upTime-b" id="b-3" class="checkbox-icon1 btn-check"
                  @change="handleCheckboxChange2" />
                <span class="btn btn-primary shadow-sm rounded-3">재창업자</span>
              </label>
              <label for="b-4" class="button-checkbox2 mx-2 my-2 upTime2">
                <input type="checkbox" value="여성창업" name="upTime-b" id="b-4" class="checkbox-icon1 btn-check"
                  @change="handleCheckboxChange2" />
                <span class="btn btn-primary shadow-sm rounded-3">여성창업</span>
              </label>
              <label for="b-5" class="button-checkbox2 mx-2 my-2 upTime2">
                <input type="checkbox" value="1" name="upTime-b" id="b-5" class="checkbox-icon1 btn-check"
                  @change="handleCheckboxChange2" />
                <span class="btn btn-primary shadow-sm rounded-3">사회적기업</span>
              </label>
              <label for="b-6" class="button-checkbox2 mx-2 my-2 upTime2">
                <input type="checkbox" value="중장년" name="upTime-b" id="b-6" class="checkbox-icon1 btn-check"
                  @change="handleCheckboxChange2" />
                <span class="btn btn-primary shadow-sm rounded-3">중,장년사업자</span>
              </label>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="d-flex flex-wrap ">
            <div class="d-flex flex-wrap ">
              <span class="fullSqure d-flex align-items-center"><i class="fa-solid fa-check"></i></span><span class="fs-2 fw-bold">어떤 창업인가요?</span>
            </div>
          </div>
          <div class="">
            <div class="d-flex flex-wrap  wid">
              <label for="BusiAreas99" class="button-checkbox10 mx-2 my-2 BusiAreasBig item" data-bs-toggle="popover"
                data-bs-trigger="hover focus"
                data-bs-content="일반창업(소상공인사업)은 비교적 작은 규모의 사업 또는 기업을 시작하는 것을 의미합니다. 이러한 사업은 주로 개인 또는 소규모 팀이 소유하고 운영하며, 상대적으로 적은 자본과 리소스로 시작됩니다. (음식, 음료, 소매업, 미용실 등)">
                <div class="description">
                  일반창업(소상공인사업)은 비교적 작은 규모의 사업 또는 기업을
                  시작하는 것을 의미합니다. 이러한 사업은 주로 개인 또는 소규모
                  팀이 소유하고 운영하며, 상대적으로 적은 자본과 리소스로
                  시작됩니다. (음식, 음료, 소매업, 미용실 등)
                </div>
                <input type="radio" value="일반창업" name="BusiAreasBig" id="BusiAreas99" class="checkbox-icon4 btn-check"
                  v-model="detailarea_category" @change="handleBusinessTypeChange" />

                <span class="btn btn-primary shadow-sm rounded-3">일반창업</span><br />
              </label>
              <label for="BusiAreas88" class="button-checkbox10 mx-2 my-2 BusiAreasBig clicked item2"
                data-bs-toggle="popover" data-bs-trigger="hover focus"
                data-bs-content="기술창업은 기술 혹은 혁신적인 아이디어를 기반으로 사업을 시작하거나 운영하는 것을 의미합니다.">
                <div class="description2">
                  기술창업은 기술 혹은 혁신적인 아이디어를 기반으로 사업을
                  시작하거나 운영하는 것을 의미합니다.
                </div>
                <input type="radio" value="기술창업" id="BusiAreas88" name="BusiAreasBig" class="checkbox-icon4 btn-check"
                  v-model="detailarea_category" @change="handleBusinessTypeChange" checked />
                <span class="btn btn-primary shadow-sm rounded-3">기술창업</span>
              </label>
            </div>
          </div>
        </div>
        <div class="col-12 subItems" v-if="detailarea_category === '기술창업'">
          <div class="">
            <div class="d-flex flex-wrap ">
              <span class="fullSqure d-flex align-items-center"><i class="fa-solid fa-check"></i></span><span class="fs-2 fw-bold">기술 분야</span>
            </div>
            <div>
              (기술분야를 선택하시면 구체적이고 정확하게 조회가 가능합니다.)
            </div>
          </div>
          <div class="">
            <!-- <div class="d-flex flex-wrap  wid">
              <label
                v-for="area in busiAreas"
                :key="area.id"
                :for="area.id"
                class="button-checkbox10 mx-2 my-2 BusiAreas btn-check"
                :class="{ clicked: detailarea.includes(area.value) }"
              >
                <input
                  type="checkbox"
                  :value="area.value"
                  name="BusiAreas"
                  :id="area.id"
                  class="checkbox-icon4"
                  @change="handleCheckboxChange"
                  :checked="detailarea.includes(area.value)"
                />
                <span class="btn btn-primary shadow-sm rounded-3">{{
                  area.label
                }}</span>
              </label>
            </div> -->
            <div class="d-flex flex-wrap  wid">
              <label v-for="area in busiAreas" :key="area.id" :for="area.id"
                class="button-checkbox10 mx-2 my-2 BusiAreas">
                <input type="checkbox" :value="area.value" name="BusiAreas" :id="area.id"
                  class="checkbox-icon4 btn-check" @change="handleCheckboxChange"
                  :checked="checkAreaValue(area.value)" />
                <span class="btn btn-primary shadow-sm rounded-3">
                  {{ area.label }}
                </span>
              </label>
            </div>
          </div>
        </div>
        <div class="col-12 mb-4">
          <div class="d-flex flex-wrap ">
            <div class="d-flex flex-wrap ">
              <span class="fullSqure d-flex align-items-center"><i class="fa-solid fa-check"></i></span><span class="fs-2 fw-bold">어느 지역이신가요?</span>
            </div>
          </div>
          <div class="">
            <div class="d-flex flex-wrap  wid">
              <label for="all-r" class="button-checkbox6 mx-2 my-2 upTime3 clicked">
                <input type="radio" value="지역무관" name="upTime" id="all-r" class="checkbox-icon3 btn-check"
                  v-model="local1" />
                <span class="btn btn-primary shadow-sm rounded-3">지역무관</span>
              </label>
              <label style="text-align: center" for="seoul" class="button-checkbox4 mx-2 my-2 upTime3">
                <input type="radio" value="서울" name="upTime" id="seoul" class="checkbox-icon3 btn-check"
                  v-model="local1" />
                <span class="btn btn-primary shadow-sm rounded-3">서울</span>
              </label>
              <label style="text-align: center" for="kk" class="button-checkbox4 mx-2 my-2 upTime3">
                <input type="radio" value="경기" name="upTime" id="kk" class="checkbox-icon3 btn-check"
                  v-model="local1" />
                <span class="btn btn-primary shadow-sm rounded-3">경기</span>
              </label>
              <label for="ic" class="button-checkbox4 mx-2 my-2 upTime3">
                <input type="radio" value="인천" name="upTime" id="ic" class="checkbox-icon3 btn-check"
                  v-model="local1" />
                <span class="btn btn-primary shadow-sm rounded-3">인천</span>
              </label>
              <label for="bs" class="button-checkbox4 mx-2 my-2 upTime3">
                <input type="radio" value="부산" name="upTime" id="bs" class="checkbox-icon3 btn-check"
                  v-model="local1" />
                <span class="btn btn-primary shadow-sm rounded-3">부산</span> </label><label for="dj"
                class="button-checkbox4 mx-2 my-2 upTime3">
                <input type="radio" value="대전" name="upTime" id="dj" class="checkbox-icon3 btn-check"
                  v-model="local1" />
                <span class="btn btn-primary shadow-sm rounded-3">대전</span>
              </label>
              <label for="dg" class="button-checkbox4 mx-2 my-2 upTime3">
                <input type="radio" value="대구" name="upTime" id="dg" class="checkbox-icon3 btn-check"
                  v-model="local1" />
                <span class="btn btn-primary shadow-sm rounded-3">대구</span>
              </label>
              <label for="us" class="button-checkbox4 mx-2 my-2 upTime3">
                <input type="radio" value="울산" name="upTime" id="us" class="checkbox-icon3 btn-check"
                  v-model="local1" />
                <span class="btn btn-primary shadow-sm rounded-3">울산</span>
              </label>
              <label for="kj" class="button-checkbox4 mx-2 my-2 upTime3">
                <input type="radio" value="광주" name="upTime" id="kj" class="checkbox-icon3 btn-check"
                  v-model="local1" />
                <span class="btn btn-primary shadow-sm rounded-3">광주</span>
              </label>
              <label for="sj" class="button-checkbox4 mx-2 my-2 upTime3">
                <input type="radio" value="세종" name="upTime" id="sj" class="checkbox-icon3 btn-check"
                  v-model="local1" />
                <span class="btn btn-primary shadow-sm rounded-3">세종</span>
              </label>
              <label for="jj" class="button-checkbox4 mx-2 my-2 upTime3">
                <input type="radio" value="제주" name="upTime" id="jj" class="checkbox-icon3 btn-check"
                  v-model="local1" />
                <span class="btn btn-primary shadow-sm rounded-3">제주</span>
              </label>
              <label for="kn" class="button-checkbox4 mx-2 my-2 upTime3">
                <input type="radio" value="경남" name="upTime" id="kn" class="checkbox-icon3 btn-check"
                  v-model="local1" />
                <span class="btn btn-primary shadow-sm rounded-3">경남</span>
              </label>
              <label for="kb" class="button-checkbox4 mx-2 my-2 upTime3">
                <input type="radio" value="경북" name="upTime" id="kb" class="checkbox-icon3 btn-check"
                  v-model="local1" />
                <span class="btn btn-primary shadow-sm rounded-3">경북</span>
              </label>
              <label for="cn" class="button-checkbox4 mx-2 my-2 upTime3">
                <input type="radio" value="충남" name="upTime" id="cn" class="checkbox-icon3 btn-check"
                  v-model="local1" />
                <span class="btn btn-primary shadow-sm rounded-3">충남</span>
              </label>
              <label for="cb" class="button-checkbox4 mx-2 my-2 upTime3">
                <input type="radio" value="충북" name="upTime" id="cb" class="checkbox-icon3 btn-check"
                  v-model="local1" />
                <span class="btn btn-primary shadow-sm rounded-3">충북</span>
              </label>
              <label for="jn" class="button-checkbox4 mx-2 my-2 upTime3">
                <input type="radio" value="전남" name="upTime" id="jn" class="checkbox-icon3 btn-check"
                  v-model="local1" />
                <span class="btn btn-primary shadow-sm rounded-3">전남</span>
              </label>
              <label for="jb" class="button-checkbox4 mx-2 my-2 upTime3">
                <input type="radio" value="전북" name="upTime" id="jb" class="checkbox-icon3 btn-check"
                  v-model="local1" />
                <span class="btn btn-primary shadow-sm rounded-3">전북</span>
              </label>
              <label for="kw" class="button-checkbox4 mx-2 my-2 upTime3">
                <input type="radio" value="강원" name="upTime" id="kw" class="checkbox-icon3 btn-check"
                  v-model="local1" />
                <span class="btn btn-primary shadow-sm rounded-3">강원</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex flex-wrap fl_btn">
      <div class="btn btn-secondary btn-lg preEB" id="submitSearch" @click="getRoadmap()">
        지원금액 조회하기
      </div>
    </div>
    </div>
    
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { Popover } from "bootstrap";
import Nav from "@/common/main/Nav.vue";
import Footer from "@/common/main/Footer.vue";
/*eslint-disable*/
export default {
  name: "RoadMap",
  components: { Nav, Footer },
  data() {
    return {
      whereClause: "",
      career_int: "1",
      information: ["전체"],
      detailarea_category: "기술창업",
      detailarea: ["무관"],
      local1: "지역무관",
      busiAreas: [
        { id: "BusiAreas1", value: "무관", label: "무관" },
        { id: "BusiAreas2", value: "ICT", label: "ICT" },
        { id: "BusiAreas3", value: "데이터", label: "데이터" },
        { id: "BusiAreas4", value: "예술", label: "예술" },
        { id: "BusiAreas5", value: "스포츠", label: "스포츠" },
        { id: "BusiAreas6", value: "콘텐츠", label: "콘텐츠" },
        { id: "BusiAreas8", value: "농산업", label: "농산업" },
        { id: "BusiAreas9", value: "보건의료", label: "보건의료" },
        { id: "BusiAreas10", value: "Eco", label: "Eco" },
        { id: "BusiAreas11", value: "물산업", label: "물산업" },
        { id: "BusiAreas12", value: "공간정보", label: "공간정보" },
        { id: "BusiAreas13", value: "해양", label: "해양" },
        { id: "BusiAreas14", value: "로컬", label: "로컬" },
        { id: "BusiAreas15", value: "디지털", label: "디지털" },
        { id: "BusiAreas16", value: "공공기술", label: "공공기술" },
        { id: "BusiAreas17", value: "장애인", label: "장애인" },
        { id: "BusiAreas18", value: "헬스케어", label: "헬스케어" },
        { id: "BusiAreas19", value: "ESG", label: "ESG" },
        { id: "BusiAreas21", value: "바이오", label: "바이오" },
        { id: "BusiAreas22", value: "에너지", label: "에너지" },
        { id: "BusiAreas23", value: "로봇", label: "로봇" },
        { id: "BusiAreas24", value: "방위산업", label: "방위산업" },
        { id: "BusiAreas25", value: "반도체", label: "반도체" },
      ],
    };
  },
  methods: {
    test() {
      console.log(`
        기간 ${this.career_int},
        해당사항 ${this.information},
        어떤창업 ${this.detailarea_category},
        기술분야 ${this.detailarea},
        지역 ${this.local1}`);
      console.log(typeof this.career_int);
    },

    handleCheckboxChange(event) {
      const value = event.target.value;
      const checked = event.target.checked;

      if (value === "무관") {
        if (checked) {
          this.detailarea = ["무관"];
          this.resetOtherCheckboxes2("무관");
        } else {
          this.detailarea = [];
        }
      } else {
        if (checked) {
          this.uncheckCheckbox2("무관");
          const index = this.detailarea.indexOf("무관");
          if (index > -1) {
            this.detailarea.splice(index, 1);
          }
          if (!this.detailarea.includes(value)) {
            this.detailarea.push(value);
          }
        } else {
          const valueIndex = this.detailarea.indexOf(value);
          if (valueIndex > -1) {
            this.detailarea.splice(valueIndex, 1);
          }
        }
      }
      console.log(this.detailarea);
    },
    resetOtherCheckboxes2(excludeValue) {
      const checkboxes = document.querySelectorAll('input[name="BusiAreas"]');
      checkboxes.forEach((checkbox) => {
        if (checkbox.value !== excludeValue) {
          checkbox.checked = false;
        }
      });
    },
    uncheckCheckbox2(value) {
      const checkbox = document.querySelector(
        `input[name="BusiAreas"][value="${value}"]`
      );
      if (checkbox) {
        checkbox.checked = false;
      }
    },

    handleCheckboxChange2(event) {
      const value = event.target.value;
      const checked = event.target.checked;

      if (value === "전체") {
        if (checked) {
          this.information = ["전체"];
          this.resetOtherCheckboxes("전체");
        }
      } else {
        if (checked) {
          this.uncheckCheckbox("전체");
          const index = this.information.indexOf("전체");
          if (index > -1) {
            this.information.splice(index, 1);
          }
          this.information.push(value);
        } else {
          const valueIndex = this.information.indexOf(value);
          if (valueIndex > -1) {
            this.information.splice(valueIndex, 1);
          }
        }
      }
    },
    resetOtherCheckboxes(excludeValue) {
      const checkboxes = document.querySelectorAll('input[name="upTime-b"]');
      checkboxes.forEach((checkbox) => {
        if (checkbox.value !== excludeValue) {
          checkbox.checked = false;
        }
      });
    },
    uncheckCheckbox(value) {
      const checkbox = document.querySelector(
        `input[name="upTime-b"][value="${value}"]`
      );
      if (checkbox) {
        checkbox.checked = false;
      }
    },

    handleBusinessTypeChange() {
      if (this.detailarea_category === "일반창업") {
        this.detailarea = [];
      } else {
        this.detailarea = ["무관"];
      }
    },

    checkAreaValue(value) {
      return this.detailarea.includes(value);
    },

    async getRoadmap() {

      // 2번 문항
      this.whereClause = "";
      let conditionsMapping = {
        재창업자:
          "(isfemale = 'x' and isBoy = 'x' and restartup = 'x' and isSocialed = 0 or restartup='o' or middleAge = 'x')",
        청년창업:
          "(isfemale = 'x' and restartup ='x' and isBoy = 'x' and isSocialed = 0 or isBoy = 'o' or middleAge = 'x')",
        여성창업:
          "(isBoy = 'x' and restartup ='x' and isfemale = 'x' and isSocialed = 0 or isfemale = 'o' or middleAge = 'x')",
        중장년:
          "(isBoy = 'x' and restartup ='x' and isfemale = 'x' and isSocialed = 0 or isfemale = 'x' or middleAge = 'o')",
        1: "(isfemale = 'x' and isBoy = 'x' and restartup ='x' and isSocialed = 1 or isSocialed = 0 or middleAge = 'x')", // 사회적기업
        전체: "(isfemale = 'x' and isBoy = 'x' and restartup ='x' and isSocialed = 0 and middleAge='x')",
      };

      // 1번 문항
      switch (this.career_int) {
        case "1":
        case "3":
        case "5":
        case "7":
          this.whereClause =
            ` careerFrom < ${this.career_int} AND career_int >= ${this.career_int} AND `;
          break;
        case "9":
          this.whereClause = "pre = 'o' AND ";
          break;
        default:
          break;
      }

      // 4번 문항
      let whereConditions = this.information
        .map((item) => conditionsMapping[item])
        .filter(Boolean);
      if (whereConditions.length > 0) {
        this.whereClause += "(" + whereConditions.join(" OR ") + ")";
      }

      // 3번 문항
      if (this.detailarea_category === "일반창업") {
        this.whereClause +=
          " AND detailarea_category in ('일반창업','기술,일반')";
      } else {
        this.whereClause +=
          " AND detailarea_category in ('기술창업','기술,일반') ";
        let a = this.detailarea.map((item) => `detailarea LIKE '%${item}%'`);
        if (a.length > 0) {
          // this.whereClause += " AND (" + a.join(" OR ") + " OR detailarea = '무관')";
          this.whereClause += " AND (" + a.join(" OR ") + ")";
        }
      }

      // 5번 문항
      if (this.local1 === "지역무관") {
        this.whereClause += " AND local1 = '무관'";
      } else {
        // this.whereClause += ` AND local1 IN ('${this.local1}', '무관')`;
        this.whereClause += ` AND local1 IN ('${this.local1}')`;
      }

      this.$router.push({
        name: "RoadMapList",
        params: { whereClause: this.whereClause },
      });
    },
  },

  mounted() {
    var popoverTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="popover"]')
    );
    popoverTriggerList.forEach(function (popoverTriggerEl) {
      new Popover(popoverTriggerEl);
    });
  },
};
</script>

<style scoped>
.popover-header {
  font-family: "Pretendard_Medium";
}

.popover-body {
  font-family: "Pretendard_Medium";
}

.container {
  background-color: #fff;
}

.fullSqure {
  color: #7f5cde;
}

.description,
.description2 {
  display: none;
}

.label:hover .description,
.label:hover .description2 {
  display: block;
}

.btn-primary {
  color: black !important;
  border: none !important;
  background-color: white !important;
}

.btn-primary:hover {
  color: #fff !important;
  background-color: #998bc5 !important;
  border-color: #998bc5 !important;
}

.btn-check:checked+.btn-primary,
.btn-check:active+.btn-primary,
.btn-primary.active,
.btn-primary.dropdown-toggle.show {
  color: #fff !important;
  background-color: #998bc5 !important;
  border-color: #998bc5 !important;
}

.btn-primary:focus {
  box-shadow: 0 0 0 0.25rem rgba(153, 139, 197, 0.5) !important;
}

.btn-secondary {
  color: white !important;
  border: none !important;
  background: linear-gradient(45deg, #755fce, #5a86c3) !important;
  transition: background-color 0.3s, box-shadow 0.3s, transform 0.3s;
}

.btn-secondary:hover {
  background: linear-gradient(45deg, #755fce, #535bce) !important;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transform: translateY(-2px);
}

@import url('/public/css/main/styles.css');
</style>
