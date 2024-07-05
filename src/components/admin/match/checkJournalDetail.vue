<template>
    <div class="mp_wrap">
    <div id="layoutSidenav_content">
        <main>
            <div class="container-fluid px-4">
                <h1 class="mt-4">컨설팅일지</h1>
                <ol class="breadcrumb mb-4">
                    <li class="breadcrumb-item active"></li>
                </ol>
                <div class="card2 mb-4">
                    <div class="card-header">
                        <div class="d-flex justify-content-end align-items-center">
                            <button type="button" class="btn btn-primary btn-sm me-5"
                                @click="exportToPDF('pdfarea')">PDF다운로드</button>
                            <button type="button" class="btn btn-primary btn-sm" @click="goToList">
                                돌아가기
                            </button>
                        </div>
                    </div>
                    <div class="card-body d-flex flex-column align-items-center">
                        <div class="d-flex" style="width: 100%">
                            <form class="resultsReport mx-auto" id="pdfarea">
                                <div class="titleBox">
                                    <h4 class="preR">멘토링 결과 보고서</h4>
                                </div>
                                <div class="userInfo">
                                    <div class="mentorInfo">
                                        <div class="title">
                                            <h6>멘토 (Mentor)</h6>
                                        </div>
                                        <div class="d-flex">
                                            <div class="d-flex my-auto">
                                                <label for="mentorName" class="me-3">이</label>
                                                <label for="mentorName" class="ms-3">름</label>
                                            </div>
                                            <input type="text" id="mentorName" name="mentorName" class="text-center"
                                                v-model="journalList.mentorName" disabled />
                                        </div>
                                        <div>
                                            <label for="field">상담분야</label>
                                            <input type="text" id="field" name="field" class="text-center"
                                                v-model="journalList.mentorArea" disabled />
                                        </div>
                                        <div>
                                            <label for="belong">소속기관</label>
                                            <input type="text" id="belong" name="belong" class="text-center"
                                                v-model="journalList.mentorGroup" disabled />
                                        </div>
                                        <div class="d-flex">
                                            <div class="d-flex my-auto">
                                                <label for="level" class="me-3">직</label>
                                                <label for="level" class="ms-3">위</label>
                                            </div>
                                            <input type="text" id="level" name="level" class="text-center"
                                                v-model="journalList.mentorRank" disabled />
                                        </div>
                                    </div>
                                    <div class="mentorInfo">
                                        <div class="title">
                                            <h6>멘티 (Mentee)</h6>
                                        </div>
                                        <div class="d-flex">
                                            <div class="d-flex my-auto">
                                                <label for="menteeName" class="me-3">이</label>
                                                <label for="menteeName" class="ms-3">름</label>
                                            </div>
                                            <input type="text" id="menteeName" name="menteeName" class="text-center"
                                                v-model="journalList.menteeName" disabled />
                                        </div>
                                        <div class="founded">
                                            <p>창업여부</p>
                                            <div class="radioStyle">
                                                <div>
                                                    <input type="radio" id="spare" name="founded"
                                                        v-model="journalList.menteeIsStartUp" value="spare" disabled />
                                                    <label for="spare">예비창업자</label>
                                                </div>
                                                <div>
                                                    <input type="radio" id="already" name="founded"
                                                        v-model="journalList.menteeIsStartUp" value="already"
                                                        disabled />
                                                    <label for="already">기창업자</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-flex">
                                            <div class="d-flex my-auto">
                                                <label for="company">기</label>
                                                <label for="company" class="mx-2">업</label>
                                                <label for="company">명</label>
                                            </div>
                                            <input type="text" id="company" name="company" class="text-center"
                                                v-model="journalList.menteeCompany" disabled />
                                        </div>
                                        <div>
                                            <label for="item">아이템명</label>
                                            <input type="text" id="item" name="item" class="text-center"
                                                v-model="journalList.menteeItem" disabled />
                                        </div>
                                    </div>
                                </div>
                                <div class="activity">
                                    <div class="title">
                                        <h6>멘토링 활동 수행 방법</h6>
                                    </div>
                                    <div class="activityLine2">
                                        <div class="me-5">
                                            <label for="count">차수</label>
                                            <input type="text" id="count" name="count" v-model="journalList.degree"
                                                class="text-center" style="width:14rem;" disabled />
                                        </div>
                                        <div class="ms-2">
                                            <label for="day">수행날짜</label>
                                            <input type="text" id="day" name="day" v-model="journalList.formatDate"
                                                class="text-center" style="width:15rem;" disabled />
                                        </div>
                                        <div class="teach">
                                            <p class="ms-5">지도방법</p>
                                            <input type="radio" id="contact" name="teach"
                                                v-model="journalList.teachingMethod" value="contact" disabled />
                                            <label for="contact">대면</label>

                                            <input type="radio" id="uncontact" name="teach"
                                                v-model="journalList.teachingMethod" value="uncontact" disabled />
                                            <label for="uncontact">비대면</label>
                                        </div>
                                    </div>
                                    <div class="activityLine">
                                        <div class="me-5">
                                            <label for="place">장소</label>
                                            <input type="text" id="place" name="place" v-model="journalList.place"
                                                class="text-center" style="width:14rem;" disabled />
                                        </div>
                                        <div class="d-flex ms-2">
                                            <div class="d-flex my-auto">
                                                <label for="etc" class="me-3">기</label>
                                                <label for="etc" class="ms-3">타</label>
                                            </div>
                                            <input type="text" id="etc" name="etc" v-model="journalList.etc"
                                                class="text-center" style="width:32rem;" disabled />
                                        </div>
                                    </div>
                                </div>
                                <div class="request pe-3">
                                    <div class="title pe-3">
                                        <h6>멘티 요구사항(주제)</h6>
                                    </div>
                                    <div class="w-100 pe-3">
                                        <textarea class="form-control" v-model="journalList.subject"
                                            disabled></textarea>
                                    </div>
                                </div>

                                <div class="mentorResults">
                                    <div class="title pe-3">
                                        <h6>멘토링 수행결과</h6>
                                    </div>

                                    <div class="opinion pe-3">
                                        <div class="subTitle">
                                            <p>주요 내용 요약</p>
                                        </div>
                                        <textarea class="w-100 form-control" v-model="journalList.summary"
                                            disabled></textarea>
                                    </div>

                                    <div class="opinion pe-3">
                                        <div class="subTitle">
                                            <p>멘토링 성과</p>
                                        </div>
                                        <textarea class="w-100 form-control" v-model="journalList.result"
                                            disabled></textarea>
                                    </div>

                                    <div class="opinion pe-3">
                                        <div class="subTitle">
                                            <p>기대효과 및 추가 멘토링 사항</p>
                                        </div>
                                        <textarea class="w-100 form-control" v-model="journalList.benefit"
                                            disabled></textarea>
                                    </div>

                                    <div class="opinion">
                                        <div class="subTitle">
                                            <p>수행사진</p>
                                        </div>
                                        <div class="imageUploadWrap">
                                            <label for="image01">
                                                <div class="imageUpload">
                                                    <div>
                                                        <span>+</span>
                                                        <span>사진파일 업로드</span>
                                                        <img v-if="journalList.img1" :src="journalList.img1" alt="미리보기">
                                                    </div>
                                                </div>
                                            </label>
                                            <label for="image02">
                                                <div class="imageUpload">
                                                    <div>
                                                        <span>+</span>
                                                        <span>사진파일 업로드<img v-if="journalList.img2"
                                                                :src="journalList.img2" alt="미리보기"></span>
                                                    </div>
                                                </div>
                                            </label>

                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <FooterCom />
    </div>
    </div>
</template>

<script>
import ConsultDataService from '@/services/admin/ConsultDataService';
import jwtDecode from "jwt-decode";
import moment from "moment";
import FooterCom from '@/common/admin/FooterCom.vue';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
export default {
    name: "checkJournalDetail",
    components: {
        FooterCom
    },
    data() {
        return {
            userInfo: [],
            bmdsList: [],
            journalList: {},
        };
    },
    methods: {
        goToList() {
            this.$router.push(`/admin/checkJournalList/${this.$route.params.matchedId}/${this.$route.params.userId}/${this.$route.params.consultantUserId}`);
        },

        async exportToPDF(divId) {
            const divToCapture = document.getElementById(divId);

            if (!divToCapture) {
                console.error(`Element with id '${divId}' not found.`);
                return;
            }
            const canvas = await html2canvas(divToCapture);
            const imageData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            pdf.addImage(imageData, 'PNG', 0, 0, 210, 297); // Adjust position and size as needed
            pdf.save('downloadedPDF.pdf');
        },
        getUserId() {
            const tokenData = localStorage.getItem("user");
            const parsedToken = JSON.parse(tokenData);
            const accessToken = parsedToken.accessToken;
            const decodedToken = jwtDecode(accessToken);
            const userId = decodedToken.id;
            return userId;
        },
        async getConsultingJournalDetail() {
            try {
                const response = await ConsultDataService.getConsultingJournalDetail(this.$route.params.id)
                this.journalList = response.data;
                this.journalList.formatDate = moment(this.journalList.performanceDate).format('YYYY-MM-DD hh:mm:ss');
            } catch (e) {
                console.log("일지 조회 실패", e);
            }
        },
    },
    async mounted() {
        await this.getConsultingJournalDetail();
    }
};
</script>

<style scoped>
@import "../../../../public/css/admin/styles.css";

.resultsReport {
    background: #f8f6fb;
    padding: 40px 50px;
    font-size: 16px;
}

.resultsReport h4 {
    font-weight: normal;
}

.resultsReport h6 {
    font-weight: bold;
    font-size: 20px;
}

.resultsReport h6,
.resultsReport h4 {
    margin: 0;
    padding: 10px 0;
}

.resultsReport input,
.resultsReport select {
    border: 1px solid #dbdbdb;
    height: 30px;
    outline: none;
}

.resultsReport input,
.resultsReport select,
.input[type="radio"] {
    margin-left: 8px;
}

.userInfo input[type="text"] {
    width: 75%;
}

.resultsReport .title {
    margin-bottom: 15px;
    color: #6857a4;
}

.resultsReport p {
    margin: 0;
}

.radioStyle {
    display: flex;
    justify-content: space-around;
    width: 80%;
}

.radioStyle>div {
    display: flex;
    align-items: center;
}

.radioStyle label[for="spare"],
.radioStyle label[for="already"],
.radioStyle label[for="contact"],
.radioStyle label[for="uncontact"],
.teach>label {
    margin-left: 5px;
}

.titleBox {
    width: 100%;
    border: 2px solid #6857a4;
    text-align: center;
    padding: 5px;
    border-radius: 3px;
}

.mentorInfo>div,
.activity>div {
    margin-bottom: 7px;
}

.userInfo {
    display: flex;
}

.activity,
.request,
.mentorResults,
.userInfo {
    padding: 40px 20px 0 20px;
}

.mentorInfo {
    width: 100%;
}

.activityLine {
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
}

.activityLine2 {
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
}

.activityLine input[id="day"] {
    padding: 0 10px;
}

.teach,
.founded {
    display: flex;
    align-items: center;
}

.teach p,
.username {
    margin-right: 10px;
}

.spacing {
    margin-right: 28px;
}

.spacing02 {
    margin-right: 7px;
}

.menteeUserDetail textarea {
    width: 100%;
    height: 80px;
    border: 1px solid #dbdbdb;
    resize: none;
    outline: none;
}

.mentorResults .subTitle {
    margin-bottom: 7px;
    font-weight: 600;
}

.mentorResults .opinion {
    margin-bottom: 15px;
}

input[type="file"] {
    display: none;
}

.imageUploadWrap {
    display: flex;
    justify-content: space-between;
}

.imageUploadWrap label {
    width: 100%;
}

.imageUpload {
    width: 95%;
    height: 200px;
    border: 2px dashed #dbdbdb;
}

.imageUpload div {
    width: 300px;
    height: 100%;
    color: #dbdbdb;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    position: relative;
}

.imageUpload div span:first-child {
    font-size: 50px;
}

.imageUpload div img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}

.submit {
    display: flex;
    justify-content: center;
    margin-top: 50px;
}

.submit button {
    border: 1px solid #dbdbdb;
    background: none;
    padding: 5px 12px;
}

tr th {
    border-top: 2px solid #777;
    text-align: center;
    padding: 10px 0px;
    border-bottom: 1px solid #dfdfdf;
    background: #f5f5f5 !important;
    font-size: 14px;
    color: #555;
}

.mainTitle {
    text-align: center;
    padding: 30px 0;
}

select[id="bmdsList"] {
    border: 1px solid #dbdbdb;
    padding: 0 10px;
    height: 30px;
    outline: none;
    margin-bottom: 20px;
}

input[type="text"]:disabled,
input[type="date"]:disabled,
input[type="radio"]:disabled,
textarea:disabled {
    background-color: white;
}
</style>