<template>
  <div>
    <div class="px-4 d-flex justify-content-start mt-5">
      <div class="form-group" style="margin-right: 3rem; width:20rem;">
        <!-- <div class="form-control">등급 : {{ userInfo.role.toUpperCase() }}</div> -->
        <div class="form-control">이름 : {{ userInfo.name }}</div>
        <div class="form-control">이메일 : {{ userInfo.email }}</div>
        <div class="form-control">전화번호 : {{ userInfo.phoneNum }}</div>
        <!-- <div v-if="getUser().role == 'g-consultant' || getUser().role == 's-consultant'"
          class="d-flex justify-content-between">
          <input type="text" class="form-control" style="width:80%; height:2.5rem;" placeholder="소속그룹코드등록"
            v-model="codeName" />
          <button type="button" class="btn btn-primary d-flex justify-content-center align-items-center"
            style="width:17%; height:2.5rem; font-size:15px;" @click="insertCodeName">등록</button>
        </div> -->
      </div>

      <div v-if="getUser().role == 'g-consultant' || getUser().role == 's-consultant'"
        class="form-control px-1 d-flex flex-column justify-content-between align-items-center" style="width: 35rem;">
        <div class="w-100 d-flex justify-content-start align-items-center fs-4">전문분야</div>
        <div class="d-flex flex-wrap mt-3">
          <div class="d-flex flex-wrap">
            <div class="mx-2">
              <div class="form-check">
                <input type="checkbox" id="generalManagement" :value="{ tagName: '경영일반(사업화전략)' }"
                  v-model="selectedFields" class="form-check-input" />
                <label for="generalManagement" class="form-check-label">경영일반(사업화전략)</label>
              </div>
            </div>
            <div class="mx-2">
              <div class="form-check">
                <input type="checkbox" id="BMEstablish" :value="{ tagName: 'BM수립 및 고도화' }" v-model="selectedFields"
                  class="form-check-input" />
                <label for="BMEstablish" class="form-check-label">BM수립 및 고도화</label>
              </div>
            </div>
            <div class="mx-2">
              <div class="form-check">
                <input type="checkbox" id="attractingInvestment" :value="{ tagName: '투자유치(IR전략)' }"
                  v-model="selectedFields" class="form-check-input" />
                <label for="attractingInvestment" class="form-check-label">투자유치(IR전략)</label>
              </div>
            </div>
            <div class="mx-2">
              <div class="form-check">
                <input type="checkbox" id="R&DSupport" :value="{ tagName: 'R&D 지원' }" v-model="selectedFields"
                  class="form-check-input" />
                <label for="R&DSupport" class="form-check-label">R&D지원</label>
              </div>
            </div>
            <div class="mx-2">
              <div class="form-check">
                <input type="checkbox" id="salesMarketing" :value="{ tagName: '영업/마케팅' }" v-model="selectedFields"
                  class="form-check-input" />
                <label for="salesMarketing" class="form-check-label">영업/마케팅</label>
              </div>
            </div>
            <div class="mx-2">
              <div class="form-check">
                <input type="checkbox" id="patentsLegal" :value="{ tagName: '특허/법률' }" v-model="selectedFields"
                  class="form-check-input" />
                <label for="patentsLegal" class="form-check-label">특허/법률</label>
              </div>
            </div>
            <div class="mx-2">
              <div class="form-check">
                <input type="checkbox" id="financeAccounting" :value="{ tagName: '재무/회계' }" v-model="selectedFields"
                  class="form-check-input" />
                <label for="financeAccounting" class="form-check-label">재무/회계</label>
              </div>
            </div>
            <div class="mx-2">
              <div class="form-check">
                <input type="checkbox" id="governmentSupportLinkage" :value="{ tagName: '정부지원연계' }"
                  v-model="selectedFields" class="form-check-input" />
                <label for="governmentSupportLinkage" class="form-check-label">정부지원연계</label>
              </div>
            </div>
            <div class="mx-2">
              <div class="form-check">
                <input type="checkbox" id="etc" :value="{ tagName: '기타' }" class="form-check-input"
                  v-model="selectedFields" />
                <label for="etc" class="form-check-label">기타</label>
                <input type="text" v-model="tagDetail" v-if="hasEtcTag" />
              </div>
            </div>
          </div>
        </div>
        <div class="w-100 d-flex justify-content-end align-items-center">
          <button v-if="selectedFields === null" type="button"
            class="btn btn-primary btn-sm d-flex justify-content-center align-items-center" style="font-size:17px;"
            @click="selectTag">
            등록
          </button>
          <button v-else type="button" class="btn btn-primary btn-sm d-flex justify-content-center align-items-center"
            style="font-size:17px;" @click="updateTag()">
            수정 </button>
        </div>
      </div>
      <!-- <div v-else class="form-control px-1 d-flex flex-column justify-content-center align-items-center"
        style="width: 35rem;">
        <div class="w-100 d-flex justify-content-start align-items-center fs-4">소속그룹코드등록</div>
        <div class="d-flex mt-3">
          <input type="text" class="form-control" placeholder="소속그룹코드등록" v-model="codeName" />
          <button type="button" class="btn btn-primary d-flex justify-content-center align-items-center"
            style="width:5rem;font-size:15px;" @click="insertCodeName">등록</button>
        </div>
      </div> -->
      <!-- <div class="form-control" style="width: 35rem; padding: 2rem">
          <div v-if="userInfo.resumeConfirm == 0">
            <div class="mt-3 h-100">
              <h5>
                컨설턴트가 되어 컨설팅을 하고 싶나요?<br />이력서를
                첨부해주세요!
              </h5>
              <div class="d-flex justify-content-between">
                <input
                  type="file"
                  class="form-control w-75"
                  @change="onFileChange"
                />
                <button
                  class="btn btn-sm btn-primary"
                  style="float: right"
                  @click.prevent="upResume"
                >
                  컨설턴트 전환
                </button>
              </div>
            </div>
          </div>
          <div class="text-center" v-else-if="userInfo.resumeConfirm == 1">
            <div class="mt-3 h-100">
              <h3>이력서를 검토 중 입니다.</h3>
              <h5>
                빠른 시일 내에 이메일로 <br />결과를 송부드리겠습니다.<br />감사합니다!
              </h5>
            </div>
          </div>
          <div class="text-center" v-else-if="userInfo.resumeConfirm == 2">
            <div class="mt-3 h-100">
              <h4>컨설턴트가 되신것을 축하드립니다!</h4>
              <h3><strong style="font-weight: 600">컨설턴트</strong>님</h3>
              <h4>환영합니다!</h4>
            </div>
          </div>
        </div> -->
    </div>
    <hr />
    <div class="container-fluid px-4 mb-5">
      <form class="form-inline ms-auto me-0 my-3 d-flex justify-content-between">
        <div>
          <h4>나의 문의글</h4>
        </div>
        <div class="d-flex">
          <!-- 카테고리 선택 드롭다운 -->
          <div class="input-group mx-3">
            <select v-model="selectedCategory" class="form-control">
              <option value="">카테고리를 선택하세요</option>
              <option v-for="QnA in cateList" :key="QnA.id" :value="QnA.value">
                {{ QnA.value }}
              </option>
            </select>
          </div>
          <div class="input-group">
            <!-- 회원관리 검색 바 -->
            <input type="text" class="form-control" placeholder="제목을 검색하세요" v-model="search" />
          </div>
        </div>
      </form>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">번호</th>
            <th scope="col">카테고리</th>
            <th scope="col">질문</th>
            <th scope="col">답변여부</th>
            <th scope="col">작성자</th>
            <th scope="col">작성일</th>
          </tr>
        </thead>
        <!-- 조회 데이터 생성 부분 -->
        <tbody>
          <tr v-for="(QnA, index) in paginatedItems" :key="index" @click.prevent="detail(QnA.id)"
            style="cursor: pointer">
            <td style="width: 50px; align-items: center">{{ QnA.id }}</td>
            <td style="width: 180px; align-items: center">
              {{ QnA.category }}
            </td>
            <td style="width: 400px; text-align: center !important">
              <div v-html="QnA.question" />
            </td>
            <td style="width: 70px">
              <div v-if="QnA.answer">
                <i class="fa-solid fa-check-to-slot"></i>
              </div>
            </td>
            <td style="width: 80px">{{ QnA.writer }}</td>
            <td style="width: 100px">{{ QnA.formattedCreatedAt }}</td>
          </tr>
        </tbody>
      </table>
      <!--    Todo : page 바 태그 추가 -->
      <div class="d-flex justify-content-center" style="margin: 1rem auto 0; width: 100%">
        <!--위 가로 아래-->
        <!--      Todo : page bar 추가-->
        <nav aria-label="Page navigation" style="width: 5rem">
          <ul class="pagination">
            <!-- v-for 디렉티브를 사용해 pages 만큼 페이지 번호를 렌더링 -->
            <li class="page-item" v-for="page in pages" :key="page" :class="{ active: currentPage === page }">
              <a class="page-link" href="#" @click.prevent="currentPage = page">{{ page }}</a>
            </li>
          </ul>
        </nav>
      </div>
      <!--    Todo : page 바 끝-->
    </div>
  </div>
</template>

<script>
import UserDataService from "@/services/main/UserDataService";
import ServCenterDataService from "@/services/main/ServCenterDataService";
import moment from "moment";
import jwtDecode from "jwt-decode";
import CouponDataService from "@/services/main/CouponDataService";
import ConsultDataService from '@/services/main/ConsultDataService';
export default {
  name: "InfoUpdate",
  props: ["state"],
  // 뷰의 변수들을 초기화하는 곳 : data()
  data() {
    return {
      bmdsCoupon: "", // 쿠폰번호
      codeName: '',
      genders: [
        {
          value: "M",
          text: "남",
        },
        {
          value: "W",
          text: "여",
        },
      ],
      userInfo: {},
      password: "", // 바꿀 비밀번호
      message: "",
      selected: "",
      QnAs: [],
      selectedCategory: "", // 선택된 카테고리
      search: "",
      QnAIds: [], // 체크값 담아두기
      allSelected: "", // 전체체크값(ture, false)
      currentPage: 1, // 현재 페이지
      perPage: 10, // 페이지당 표시되는 아이템 수
      rows: 20, // 전체 행 수
      file: "", // 이력서 담을곳
      betaVersion: false, // 베타버전이라서 쿠폰을 사용할수없음 => false: 쿠폰사용가능, true: 쿠폰 사용불가능
      cateList: [
        {
          text: "1",
          value: "비즈니스모델 작성",
        },
        {
          text: "2",
          value: "사업계획서 전환",
        },
        {
          text: "3",
          value: "탈퇴",
        },
        {
          text: "4",
          value: "환불",
        },
        {
          text: "5",
          value: "결제",
        },
        {
          text: "6",
          value: "아이디 찾기",
        },
        {
          text: "7",
          value: "사업계획서 양식",
        },
        {
          text: "8",
          value: "컨설팅",
        },
        {
          text: "9",
          value: "기타",
        },
      ],
      selectedFields: [], // 선택된 항목을 저장할 배열
      tagDetail: '',
      opt: []
    };
  },
  computed: {
    // 전체 페이지 수 계산
    pages() {
      return Math.ceil(this.pagedQnaList.length / this.perPage);
    },
    paginatedItems() {
      // 현재 페이지에 해당하는 아이템만 반환
      const startIndex = (this.currentPage - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      return this.pagedQnaList.slice(startIndex, endIndex);
    },
    pagedQnaList() {
      return this.QnAs.filter((QnA) => {
        return (
          QnA.question.toLowerCase().includes(this.search.toLowerCase()) &&
          (this.selectedCategory === "" ||
            QnA.category === this.selectedCategory)
        );
      });
    },
    hasEtcTag() {
      return this.selectedFields.some(item => item.tagName === '기타');
    },
  },
  methods: {
    async getTag() {
      try {
        const res = await ConsultDataService.getTag(this.getUser().id);
        res.data.forEach(tag => {
          if (!this.selectedFields.some(selectedTag => selectedTag.tagName === tag.tagName)) {
            this.selectedFields.push({ 'tagName': tag.tagName });
          }
        });
        const opt2 = [
          "경영일반(사업화전략)",
          "BM수립 및 고도화",
          "투자유치(IR전략)",
          "R&D 지원",
          "영업/마케팅",
          "특허/법률",
          "재무/회계",
          "정부지원연계",
        ];

        // opt를 기준으로 opt2에 없는 값 가져오는것 (기타 전문분야)
        const difference = res.data.filter((value) => !opt2.includes(value.tagName));
        if (difference.length > 0) {
          this.selectedFields.push({ tagName: '기타' });
          // {tagName:'기타 전문분야'}를 제거 
          const i = this.selectedFields.findIndex(item => item.tagName === difference[0].tagName);
          if (i !== -1) {
            this.selectedFields.splice(i, 1);
          }
          this.tagDetail = difference[0].tagName;
        }
      }
      catch (e) {
        console.log(e.response.data.message);
      }
    },
    async selectTag() {
      if (confirm('전문분야를 등록하시겠습니까?')) {
        if (this.selectedFields.some(item => item.tagName === '기타')) {
          const index = this.selectedFields.indexOf('기타');
          this.selectedFields.splice(index, 1);
          const dataToSend = {
            tagName: '기타',
            tagDetail: this.tagDetail,
          };
          this.selectedFields.push(dataToSend);
        }
        else {
          this.tagDetail = '';
        }
        try {
          await ConsultDataService.selectTag(this.getUser().id, this.selectedFields);
          alert('등록되었습니다.');
        }
        catch (e) {
          console.log(e.response.data.message);
        }
        console.log('this.selectedFields', this.selectedFields);
      }

    },
    async updateTag() {
      if (confirm('전문분야를 수정하시겠습니까?')) {
        try {
          if (this.selectedFields.includes('기타')) {
            const index = this.selectedFields.indexOf('기타');
            this.selectedFields.splice(index, 1);
            const dataToSend = {
              tagName: '기타',
              tagDetail: this.tagDetail,
            };
            this.selectedFields.push(dataToSend);
          }
          await ConsultDataService.selectTag(this.getUser().id, this.selectedFields);
          alert('등록되었습니다.');
        }
        catch (e) {
          console.log(e.response.data.message);
        }
      }

    },
    async insertCodeName() {
      if (confirm('그룹코드를 저장하시겠습니까?')) {
        try {
          let data = {
            codeName: this.codeName
          }
          await UserDataService.updateGroupCode(this.getUser().id, data);
          alert('그룹코드가 저장되었습니다!');
        }
        catch (e) {
          alert(e.response.data.message);
        }
      }

    },
    couponRegistration() {
      var data = {
        bmdsCoupon: this.bmdsCoupon,
      };
      if (confirm("쿠폰을 등록하시겠습니까?") == true) {
        CouponDataService.postCoupon(this.getUser().id, data)
          .then(() => {
            alert("등록되었습니다!");
            this.getUsr();
            this.retrieveQnAs(this.getUser().id);
          })
          .catch((e) => {
            console.log("e", e);
          });
      }
    },
    couponUse() {
      var data = {
        currentDate: new Date(),
        months: 1,
      };
      if (confirm("쿠폰을 사용하시겠습니까?") == true) {
        CouponDataService.postCoupon(this.getUser().id, data)
          .then(() => {
            alert("등록되었습니다!");
            this.getUsr();
            this.retrieveQnAs(this.getUser().id);
          })
          .catch((e) => {
            console.log("e", e);
          });
      }
    },
    onFileChange(event) {
      // 선택한 파일
      this.file = event.target.files[0];
    },
    upResume() {
      // FormData 객체 생성
      const formData = new FormData();
      formData.append("file", this.file); // 이력서 파일 추가
      // FormData를 서버로 전송하는 로직
      UserDataService.uploadResume(this.getUser().id, formData)
        .then(() => {
          if (
            !alert(
              "이력서 업로드가 완료되었습니다. \n빠른 시일 내에 이메일로 결과를 송부드리겠습니다.\n감사합니다!"
            )
          ) {
            window.location.reload();
          }
        })
        .catch((e) => {
          console.error(e);
        });
    },
    detail(id) {
      //sc폴더로 상태값과 id값을 전달
      this.$emit("data", { state: "mypageQnaDetail", id: id });
    },
    getUser() {
      const tokenData = localStorage.getItem("user");
      const parsedToken = JSON.parse(tokenData);
      const accessToken = parsedToken.accessToken;
      const decodedToken = jwtDecode(accessToken);
      return decodedToken;
    },
    async getUsr() {
      try {
        const res = await UserDataService.getUsr(this.getUser().id);
        this.userInfo = res.data;
        this.betaVersion = res.data.useCoupon;
        if (this.userInfo.resume) {
          this.uploadSuccess = true;
        }
      }
      catch (e) {
        console.log(e.response.data.message);
      }
    },
    async retrieveQnAs(id) {
      try {
        const response = await ServCenterDataService.getUsrJoin(id);
        this.QnAs = response.data;
        this.QnAs.forEach((QnA) => {
          QnA.formattedCreatedAt = moment(QnA.created_at).format(
            "YYYY-MM-DD"
          );
        })
      }
      catch (e) {
        console.log(e.response.data.message);
      }

    },
  },
  async mounted() {
    await this.getUsr();
    await this.retrieveQnAs(this.getUser().id);
    await this.getTag();
  },
};
</script>

<style scoped>
table .thead-dark tr th {
  border-top: 2px solid #777;
  text-align: center;
  padding: 10px 0px;
  border-bottom: 1px solid #dfdfdf;
  background: #f5f5f5;
  font-size: 14px;
  color: #555;
}
</style>
