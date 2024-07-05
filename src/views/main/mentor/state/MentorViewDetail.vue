<template>
    <div>
        <div>
            <Nav />
            <div class="menteeUserDetail">
                <div class="container-fluid px-4 mt-5">
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">BMDS 작성 일시</th>
                                <th scope="col">BMDS 수정 일시</th>
                                <th scope="col">멘토링 완료</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(bmds, index) in bmdsInfo" :key="index">
                                <td>
                                    {{ bmds.createdAt ? formatCreatedAtJournal(bmds.createdAt) : null }}
                                </td>
                                <td>
                                    {{ bmds.updatedAt ? formatCreatedAtJournal(bmds.updatedAt) : "없음" }}
                                </td>
                                <td>
                                    <button class="completeBtn" :disabled="bmds.matchedState === 'consultingComplete'"
                                        @click="completeConsul">멘토링 종료</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="showJournalBtn">
                    <button @click="openJournalWindow" class="showJournal">멘토링 수행 결과보고서 작성</button>
                </div>
                <div class="nonModalWrap">
                    <div class="nonModalBox" v-if="showNonModal">
                        <div class="closeModal"><span @click="closeModal">x</span></div>
                        <div class="nonModal">
                            <div class="nonModalContent">
                                <Journal :buildId="buildId" class="journal" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="preViewBox">
                <preView class="preView" />
            </div>
            <Footer />
        </div>
        <div>

        </div>
    </div>
</template>

<script>
import Nav from "@/common/main/Nav.vue";
import Footer from "@/common/main/Footer.vue";
import MatchDateService from "@/services/main/UserMatch";
import Journal from "@/components/main/Journal.vue";
import preView from "@/components/main/bmdsBuildup/modal/preView.vue";
import jwtDecode from "jwt-decode";

export default {
    name: "MentorViewDetail",
    components: {
        Nav,
        Footer,
        Journal,
        preView,
    },
    data() {
        return {
            bmdsList: [],
            buildId: 0,
            showNonModal: false,
            bmdsInfo: [],
            matchId: 1,
        };
    },
    methods: {
        getUserId() {
            const tokenData = localStorage.getItem("user");
            const parsedToken = JSON.parse(tokenData);
            const accessToken = parsedToken.accessToken;
            const decodedToken = jwtDecode(accessToken);
            const userId = decodedToken.id;
            return userId;
        },
        showJournal() {
            // 수정 Gunu 2024.03.12
            // 모달에서 윈도우 팝업으로 수정인해 사용 안함
            this.showNonModal = true;
        },
        openJournalWindow() {
            let width = screen.width;
            let height = screen.height;
            let left = 200;
            let top = 0; 

            let attr = "width=" + width + ", height=" + height + ", top=" + top + ", left=" + left;

            window.open("/main/mentor/journalPop/" + this.getUserId(), "", attr);
        },
        closeModal() {
            this.showNonModal = false;
        },
        async loadBmdsInfo(id, buildId) {
            try {
                const response = await MatchDateService.getConsultantMatchBmdsForJournalOne(String(id), String(buildId));
                this.bmdsInfo = response.data;
                console.log("bmds 정보 조회 성공", this.bmdsInfo);
            } catch (e) {
                console.log("bmds 정보 조회 실패", e.response.data.message);
            }
        },
        formatCreatedAtJournal(createdAt) {
            const options = {
                year: "numeric",
                month: "numeric",
                day: "numeric",
            };
            const formattedDate = new Intl.DateTimeFormat("ko-KR", options).format(new Date(createdAt));
            return formattedDate;
        },
        async completeConsul() {
            if (confirm("멘토링을 완전히 끝마치시겠습니까?")) {
                const data = {
                    id: parseInt(this.$route.params.matchId),
                    generalUserId: this.bmdsInfo[0].userId,
                    consultantUserId: this.getUserId(),
                    buildId: parseInt(this.$route.params.id),
                }
                try {
                    const response = await MatchDateService.completeConsulting(data);
                    console.log("완료 성공", response.data);
                    this.$router.push("/main/mentor");
                } catch (e) {
                    console.log("완료 실패", e.response.data.message);
                }
            }
        },
    },
    async mounted() {
        await this.loadBmdsInfo(this.$route.params.matchId, this.$route.params.id);
        console.log(this.$route.params.matchId, this.$route.params.id);
    }
};
</script>

<style>
td {
    text-align: center;
}

.preView .topMenu,
.preView .footer {
    display: none;
}

.pdf-container>div {
    border: none !important;
}

.menteeUserDetail {
    max-width: 1296px;
    margin: 0 auto;
    font-family: "Pretendard_Rgula" !important;
}

.showJournal {
    border: 1px solid #dbdbdb;
    background: none;
    padding: 5px 12px;
    margin: auto;
}

.nonModalWrap {
    position: relative;
}

.nonModal::-webkit-scrollbar {
    width: 8px;
}

.nonModal::-webkit-scrollbar-thumb {
    background: #dddddd;
    border-radius: 10px;
}

.nonModal::-webkit-scrollbar-track {
    background: #f8f6fb;
}

.nonModalBox {
    position: fixed;
    z-index: 999;
    right: 50px;
    bottom: 0;
}

.nonModal {
    width: 600px;
    height: 500px;
    overflow: auto;
}

.journal .userInfo {
    display: block;
}

.journal .mentorInfo:first-child {
    margin-bottom: 25px;
}

.journal .activityLine {
    display: block;
}

.journal .activityLine label {
    width: 56px;
}

.journal .activityLine input {
    width: 216px;
}

.journal .activityLine div {
    margin-bottom: 8px;
}

.journal .teach p {
    margin-right: 12px;
}

.journal .activityLine input[type="radio"] {
    width: auto;
}

.journal .imageUploadWrap {
    display: block;
}

.journal .imageUpload div,
.journal .imageUpload {
    width: auto;
}

.journal .imageUploadWrap label {
    margin-bottom: 20px;
}

.preView .transformBtn {
    display: none !important;
}

.showJournalBtn {
    background-color: #13a7d7;
    padding: 12px 20px;
    border-radius: 25px;
    font-size: 18px;
    font-weight: bold;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin: 3rem auto;
    width: 270px;
}


.showJournalBtn .showJournal {
    color: #fff;
    border: none;
}

.closeModal {
    background: #6857a4;
    width: 100%;
    text-align: right;
    font-size: 25px;
    padding: 4px 15px;
    color: #eee;
    border-radius: 10px 10px 0 0;
}

.closeModal span {
    cursor: pointer;
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
</style>