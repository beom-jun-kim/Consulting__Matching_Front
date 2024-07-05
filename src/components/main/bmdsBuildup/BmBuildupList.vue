<template>
  <div class="sp_wrap">
    <div class="sp_container">
      <h6>BMDS</h6>
      <h7>
        현재 BMDS 사이트는 1920*1080 해상도에 배율100% 화면에 최적화 되어있어 <br>
        화면비율을 조정하셔서 사용하시길 권장합니다.
      </h7>
      <div class="bmCreateTotalWrap">
    <div class="tagline text-center my-4">
      
    </div>

    <div class="bmCreateBoxWrap">
      <ul class="bmCreateBox">
        <li v-for="(MyBm, index) in bmCreationNum" :key="index">
          <div v-if="MyBms[index]">
            <div>
              <div :style="{backgroundColor: MyBms[index].bmVersion === 'buildup' ? '#efefef' : '#efefef'}" @click="goToMyBmDetail(MyBms[index].id)" class="bmContentBox">
                <div class="bmdsTitle">
                  <span>{{ MyBms[index].title }}</span>
                </div>
                <!-- <div class="bmdsVersion">
                  <span>{{ MyBms[index].bmVersion }}.ver</span>
                </div> -->
                <div class="fs-5" style="color: #686868">
                  <span>{{ MyBms[index].category }}</span>
                </div>
              </div>
              <div class="updDelBtn">
                <button class="updBtn" @click="openModal(MyBms[index].id)">
                  수정
                </button>
                <!-- <button class="delBtn" @click="delBuildupBm(MyBms[index].id)">
                  삭제
                </button> -->
              </div>
            </div>
          </div>
          <div v-else>
            <div class="bmCreateEle" @click="showModal()">
              <span class="bmCreateElePlus">+</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="modalWrapper" v-if="isModalOpen === true">
      <div class="bmCreateOverlay">
        <div class="modalBox" @click.stop>
          <span v-if="isCreate === false">비즈니스 모델 수정하기</span>
          <span v-else>비즈니스 모델 추가하기</span>
          <!-- <div class="bmSeleteBox" v-if="getUser().role === 'buildup'">
            <select id="bmVerBox" v-model="bmVerBox">
              <option :value="null" style="display: none;">버전을 선택하여 주세요</option>
              <option value="buildup">buildup</option>
            </select>
          </div>
          <div v-else class="bmSeleteBox">
            <select id="bmVerBox" v-model="bmVerBox">
              <option :value="null" style="display: none;">버전을 선택하여 주세요</option>
              <option value="buildup">Buildup</option>
              <option value="premium">Premium</option>
            </select>
          </div> -->
          <div class="input-group input-group-lg">
            <input type="text" class="form-control" placeholder="사업아이템명을 작성해주세요." v-model="title" />
          </div>
          <div class="modalBoxBtn">
            <button @click="closeModal()" class="modal-exit-btn">취소</button>
            <button v-if="isCreate == false" @click="updateBuildupBM()">
              수정하기
            </button>
            <button v-if="isCreate == true" @click="addBM()">
              생성하기
            </button>
          </div>

        </div>
      </div>
    </div>
  </div>
    </div>
  </div>
</template>

<script>
import jwtDecode from "jwt-decode";
import BuildupService from "@/services/main/BuildupService";
import moment from "moment";
import BootPayDataService from '@/services/main/BootPayDataService';
export default {
  name: "MyBm",
  data() {
    return {
      userRole: '',
      twoWeeksStartAt: '',
      expireAt: '', // 결제를 하였을때 권한이 expire되는 날짜
      originalDate: '',
      newDate: '',
      moment1: '', //현재날짜
      moment2: '', // 무료체험시작한 후 2주뒤 날짜
      daysDifference: '',
      bmCreationNum: 0,
      updateId: 0,
      MyBms: [],
      isModalOpen: false,
      isCreate: false,
      isUpdate: false,
      buildup_id: 0,
      title: "",
      nextPayAt: new Date(),
      payStatus: '',
      adminUser: [
        'g-supervisor',
        's-supervisor',
        'g-consultant',
        's-consultant',
        'admin',
        'tester'
      ],
      generalUser: [
        'student',
        'buildup',
        'premium',
        'basic'
      ],
      payUser: [
        'g-supervisor',
        's-supervisor',
        'g-consultant',
        'g-consultant',
        'admin',
        'tester',
        'student',
        'buildup',
        'premium',
        'basic'
      ],
      bmVerBox: 'buildup',
    };
  },
  methods: {
    getUser() {
      const tokenData = localStorage.getItem("user");
      const parsedToken = JSON.parse(tokenData);
      const accessToken = parsedToken.accessToken;
      const decodedToken = jwtDecode(accessToken);

      this.userRole = decodedToken.role;
      this.twoWeeksStartAt = decodedToken.twoWeeksStartAt;
      this.originalDate = new Date(this.twoWeeksStartAt);
      this.newDate = new Date(this.originalDate.getTime() + (14 * 24 * 60 * 60 * 1000));
      this.moment1 = moment(new Date().getTime()); //현재날짜
      this.moment2 = moment(this.newDate.getTime()); // 무료체험시작한 후 2주뒤 날짜
      this.daysDifference = this.moment2.diff(this.moment1, 'days');

      return decodedToken;
    },
    async getPayInfo() {
      try {
        const res = await this.BootPayDataService.getPortone(this.getUser().id);
        if (this.userRole == 'tester') {
          this.bmCreationNum = 9;
        }
        else {
          this.bmCreationNum = res.data.bmCreationNum;
        }
        this.expireAt = moment(new Date(res.data.expireAt).getTime()); // 결제를 하였을때 권한이 expire되는 날짜
      }
      catch (e) {
        alert(e.response.data.message);
      }
    },
    // 선택한 비즈니스모델 모달창 열기
    openModal(i) {
      this.isModalOpen = true;
      this.updateId = i;
      BuildupService.getBuildUpBmdsById(i).then((res) => {
        this.title = res.data.title;
        this.buildup_id = res.data.id;
      });
    },
    // 비즈니스모델 생성 모달창 열기
    showModal() {
      this.isModalOpen = true;
      this.isCreate = true;
    },
    // 모달창 닫기
    closeModal() {
      this.isModalOpen = false;
      this.isCreate = false;
      this.title = "";
      // this.category = "소상공인";
    },
    // 비즈니스모델 전체 조회
    async getBuildUpBmds(id) {
      await BuildupService.getBuildUpBmds(id)
        .then((res) => {
          this.MyBms = res.data.data;
          if (this.userRole == 'tester') {
            this.bmCreationNum = 9;
          }
          else {
            this.bmCreationNum = res.data.bmCreationNum;
          }
        })
        .catch(() => { });
    },
    // 비즈니스모델 생성
    async addBM() {
      if (confirm("생성하시겠습니까?")) {
        try {
          if (
            (this.payUser.includes(this.userRole) && (this.expireAt && this.expireAt > this.moment1)) // 결제한 유저 중 사용기간이 남아있는 유저
            || (this.userRole == 'basic' && (this.moment2 && this.moment2 > this.moment1 && this.MyBms.length < 1)) // 무료체험 유저 중 사용기간이 남아있고 BM을 생성하지 않은 유저
          ) {
            if (this.userRole == 'basic') {
              const data = { title: this.title };
              await BuildupService.createBuildUpBmds(this.getUser().id, data);
              confirm("생성되었습니다.")
              this.getBuildUpBmds(this.getUser().id);
              this.closeModal();
            }
            else {
              if (this.MyBms.length < this.bmCreationNum) {
                const data = { title: this.title };
                await BuildupService.createBuildUpBmds(this.getUser().id, data);
                confirm("생성되었습니다.")
                this.getBuildUpBmds(this.getUser().id);
                this.closeModal();
              }
              else {
                alert("제한된 개수의 비즈니스 모델을 생성하셨습니다. 추가 생성이 불가능합니다.");
              }
            }
          } else if (this.userRole === 'common') {
            alert("무료 체험하기를 시작해 주시거나 결제를 해 주시기 바랍니다.");
          }
          else if (this.userRole === 'basic' && this.MyBms.length == 1) {
            alert("이미 비즈니스 모델이 존재합니다. basic등급의 유저는 비즈니스 모델을 1개까지만 생성이 가능합니다.");
          }
          else if (this.payUser.includes(this.userRole) && (this.expireAt < this.moment1 && this.expireAt)) {
            alert("결제를 하셨으나 사용기한이 지나 추가로 생성이 불가능합니다.");
          }
          else {
            const data = {
              title: this.title,
              bmVersion: this.bmVerBox,
            };
            await BuildupService.createBuildUpBmds(this.getUser().id, data);
            confirm("생성되었습니다.")
            this.getBuildUpBmds(this.getUser().id);
            this.closeModal();
          }
        } catch (error) {
          alert("오류가 발생했습니다. \n 관리자에게 문의해 주시기 바랍니다.");
        }
      }
    },

    // 비즈니스모델 삭제
    // async delBuildupBm(i) {
    //   if (confirm("삭제하시겠습니까?")) {
    //     try {
    //       await BuildupService.deleteBuildUpBmds(i);
    //       alert("삭제되었습니다.")
    //       await this.getBuildUpBmds(this.getUser().id);
    //     }
    //     catch (error) {
    //       // 예외 처리
    //       console.log("error",error.response.data);
    //       alert("오류가 발생했습니다.");
    //     }
    //   }
    // },

    // 비즈니스모델 선택값 수정
    async updateBuildupBM() {
      var data = {
        title: this.title,
      };
      if (confirm("수정하시겠습니까?")) {
        try {
          await BuildupService.updateBuildUpBmds(this.updateId, data);
          alert("수정되었습니다.")
          this.closeModal();
          await this.getBuildUpBmds(this.getUser().id);
        }
        catch (e) {
          console.log(e);
        }
      }
    },
    // 비즈니스모델 작성하러가기
    async goToMyBmDetail(id) {
      await this.getPayStatus();
      if (
        this.userRole == 'common' // 결제를 하지 않았거나
        || (this.payStatus == '구독해지' && (this.nextPayAt && this.moment1 > moment(new Date(this.nextPayAt).getTime()))) // 정기결제를 했다가 취소했는데 남은사용기간 지난사람이거나
        || (this.userRole == 'basic' && (this.moment2 && this.moment2 > this.moment1)) // 무료체험인데 남은 사용기간 지난사람이거나
        || (this.payUser.includes(this.userRole) && (this.expireAt && this.expireAt < this.moment1)) // 단일결제를 하였으나 남은사용기간 지난사람이거나
      ) {
        if (this.userRole == 'common') {
          alert('무료체험을 진행하시거나 결제를 해 주셔야 사용가능합니다.');
        }

        if (
          this.payUser.includes(this.userRole) && (this.payStatus && this.payStatus == '구독해지')
          && (this.nextPayAt && this.moment1 > moment(new Date(this.nextPayAt).getTime()))
        ) {
          alert('구독이 해제되었으며, 남은 사용기간이 지나셨습니다.\n작성된 내용이 미리보기로만 보여집니다.');
          this.$router.push(`/main/bmds/buildup/preView/${id}`);
        }

        if (
          this.userRole == 'basic'
          && (this.moment2 && this.moment2 > this.moment1)
        ) {
          const alertMessage =
            this.daysDifference < 0
              ? '2주 무료 이벤트 기간이 종료되셨습니다.'
              : `2주 무료 이벤트 기간이 ${this.daysDifference}일 남았습니다.`;

          alert(`${alertMessage}\n계속 사용하시려면 결제를 하셔야 하며, 결제를 하지 않으시면\n작성된 내용이 미리보기로만 보여집니다.`);

        }
        if (this.daysDifference > 0) {
          this.$router.push(`/main/bmds/buildup/listDetail/${id}`);
        } else {
          const alertMessage =
            this.daysDifference < 0
              ? '2주 무료 이벤트 기간이 종료되셨습니다.'
              : `2주 무료 이벤트 기간이 ${this.daysDifference}일 남았습니다.`;
          alert(`${alertMessage}\n계속 사용하시려면 결제를 하셔야 하며, 결제를 하지 않으시면\n작성된 내용이 미리보기로만 보여집니다.`);
          this.$router.push(`/main/bmds/buildup/preView/${id}`);
        }
      } else {
        this.$router.push(`/main/bmds/buildup/listDetail/${id}`);
      }
    },
    async getPayStatus() {
      try {
        let res = await BootPayDataService.getPaymentById(this.getUser().id);
        if (res.data.length !== 0) {
          this.nextPayAt = res.data[0].nextpay_at;
          this.payStatus = res.data[0].status_locale;
        }
      }
      catch (e) {
        console.log(e.response.data.message);
      }
    }
  },
  // 비즈니스모델 조회
  async mounted() {
    await this.getBuildUpBmds(this.getUser().id);
    await this.getPayInfo();
  },
};
</script>

<style scoped>
</style>
