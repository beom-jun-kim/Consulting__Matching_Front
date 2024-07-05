<template>
    <div>
        <div>
            <Nav />
            <div class="sp_wrap">
                <div class="sp_container">
                    <h6> 멘토링 내역</h6>
                    <!-- <div id="mentorHistoryChart">
                        <div class="mentorHistoryChartBox">
                            <apexchart type="pie" width="380" :options="chartOptions" :series="series"></apexchart>
                            <h6>매칭율</h6>
                        </div>
                        <div class="mentorHistoryChartBox">
                            <apexchart type="pie" width="380" :options="chartOptions" :series="series"></apexchart>
                            <h6>분야별</h6>
                        </div>
                        <div class="mentorHistoryChartBox">
                            <apexchart type="pie" width="380" :options="chartOptions" :series="series"></apexchart>
                            <h6>평점</h6>
                        </div>
                    </div> -->
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">번호</th>
                                <th scope="col">멘티</th>
                                <th scope="col">멘티 이메일</th>
                                <th scope="col">희망분야</th>
                                <th scope="col">제목</th>
                                <th scope="col">BM</th>
                                <th scope="col">일시 / 방법</th>
                                <th scope="col">후기(평점)</th>
                                <th scope="col">일지</th>
                                <th scope="col">상태</th>
                            </tr>
                        </thead>
                        <tbody v-if="matchHistList.length !== 0">
                            <tr v-for="(match, index) in matchHistList" :key="index">
                                <td>{{ index + 1 }}</td>
                                <td>{{ match.name }}</td>
                                <td>{{ match.menteeEmail }}</td>
                                <td v-if="match.tagNames.split(',').length > 1">
                                    <span class="matchHistListTagFirst" @click="tagNameShow($event, index)">{{
                            match.tagNames.split(",")[0] }}</span>
                                    <span class="matchHistListTagsBoxArrow" @click="tagNameShow($event, index)"><i
                                            class="fa-solid fa-angle-down"></i></span>
                                    <div class="matchHistTagsBox">
                                        <div v-if="hiddenEleState && selectedTagIndex === index">
                                            <ul>
                                                <li v-for="(tagName, index) in match.tagNames.split(',')" :key="index">
                                                    {{ tagName }}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </td>
                                <td v-else-if="match.tagNames.split(',').length == 1">
                                    {{ match.tagNames }}
                                </td>
                                <td v-else>
                                    {{ null }}
                                </td>
                                <td @click="openAppModal(match.id)" class="tableModalClick">{{ match.title.length > 5 ?
                            `${match.title.slice(0, 5)}...` : match.title }}</td>
                                <td v-if="match.bmTitle" @click="bmDetail(match.buildId)" style="cursor: pointer;">
                                    {{ match.bmTitle.length > 5 ? `${match.bmTitle.slice(0, 5)}...` : match.bmTitle }}
                                </td>
                                <td v-else></td>
                                <td v-if="match.place == 1">대면</td>
                                <td v-else-if="match.place == 2">상관없음</td>
                                <td v-else>비대면</td>
                                <td @click="reviewShowBtn(match.id)" v-if="match.avgScore" style="cursor:pointer">{{
                            match.avgScore }} / 50
                                </td>
                                <td v-else>-</td>
                                <td>
                                    <router-link :to="`/main/mentor/journalList/${match.id}/${match.title}`">{{
                            match.journalCnt }}건</router-link>
                                    <button
                                        @click="openJournalWindow(match.id, match.buildId, match.tagNames, match.bmTitle)"
                                        class="showJournal">일지작성</button>
                                </td>
                                <td v-if="match.status == 'complete'">
                                    -
                                </td>
                                <td v-else>
                                    <button @click="mentoringComplete(match.id, match.title)"
                                        class="showJournal">완료하기</button>
                                </td>
                            </tr>
                        </tbody>
                        <tbody v-else>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>멘토링을 신청한 유저가 없습니다</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="d-flex justify-content-center w-100 my-4 mx-auto">
                        <nav aria-label="Page navigation w-25">
                            <ul class="pagination">
                                <li class="page-item" v-for="page in matchHistroyPage" :key="page"
                                    :class="{ active: matchHistoryCurrentPage === page }">
                                    <a class="page-link" href="#" @click.prevent="loadMatchHistoryPage(page)">{{ page
                                        }}</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        <div v-if="modalArea"
            style="width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); position: fixed; top: 0; left: 0; z-index: 999; display: flex; justify-content: center; align-items: center;">
            <MentorApplication @closeApplyModal="closeAppModal" :paramAppId="appId" />
        </div>

        <div v-if="reviewInfoModal"
            style="width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); position: fixed; top: 0; left: 0; z-index: 999; display: flex; justify-content: center; align-items: center;">
            <ConsultReview @closeReviewModal="closeAppModal" :paramAppId="appId" />
        </div>
    </div>
</template>

<script>
import Nav from "@/common/main/Nav.vue";
import Footer from "@/common/main/Footer.vue";
import MatchDateService from "@/services/main/UserMatch";
// import VueApexCharts from "vue-apexcharts";
import jwtDecode from "jwt-decode";
import MentorApplication from "@/components/main/MentorApplication.vue";
import ConsultReview from "@/components/main/ConsultReview.vue";

export default {
    name: "MentorHistory",
    components: {
        Nav,
        Footer,
        // apexchart: VueApexCharts,
        MentorApplication,
        ConsultReview,
    },
    data() {
        return {
            modalArea: false,
            reviewInfoModal: false,
            // series: [44, 55, 13, 43, 22],
            // chartOptions: {
            //     chart: {
            //         width: 380,
            //         type: 'pie',
            //     },
            //     labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
            //     responsive: [
            //         {
            //             breakpoint: 1124,
            //             options: {
            //                 chart: {
            //                     width: 350
            //                 },
            //                 legend: {
            //                     position: 'bottom'
            //                 }
            //             },
            //         },
            //         {
            //             breakpoint: 1038,
            //             options: {
            //                 chart: {
            //                     width: 320
            //                 },
            //                 legend: {
            //                     position: 'bottom'
            //                 }
            //             },
            //         },
            //         {
            //             breakpoint: 930,
            //             options: {
            //                 chart: {
            //                     width: 290
            //                 },
            //                 legend: {
            //                     position: 'bottom'
            //                 }
            //             },
            //         },
            //     ]
            // },
            matchHistoryRows: 1,
            matchHistoryCurrentPage: 1,
            matchHistoryPerPage: 10,

            matchHistList: [],
            hiddenEleState: false,

            selectedTagIndex: null,
            appId: 0,
        }
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
        openAppModal(appId) {
            this.appId = appId;
            this.modalArea = true;
        },
        closeAppModal() {
            this.modalArea = false;
            this.reviewInfoModal = false;
        },
        reviewShowBtn(appId) {
            console.log('appId', appId);
            this.appId = appId;
            this.reviewInfoModal = true;
        },
        tagNameShow(event, index) {
            this.selectedTagIndex = index;
            this.hiddenEleState = !this.hiddenEleState;
        },
        matchHistState(matchState) {
            switch (matchState) {
                case "mentoring":
                    return "진행중"
                case "accept":
                    return "수락대기중"
                case "complete":
                    return "완료"
                case "request":
                    return "요청"
                case "reject":
                    return "거절"
                default:
                    break;
            }
        },
        openJournalWindow(appId, buildId, tagNames, bmTitle) {
            let width = screen.width;
            let height = screen.height;
            let left = 200;
            let top = 0;

            let attr = "width=" + width + ", height=" + height + ", top=" + top + ", left=" + left;

            let tagNamesParam = tagNames;
            if (tagNames.includes('/')) {
                tagNamesParam = tagNames.replace('/', '%2F');
            }

            window.open("/main/mentor/journalPop/0/" + this.getUserId() + "/" + appId + "/" + buildId + "/" + tagNamesParam + "/" + bmTitle, "", attr);
        },
        bmDetail(buildId) {
            let width = screen.width;
            let height = screen.height;
            let left = 200;
            let top = 0;

            let attr = "width=" + width + ", height=" + height + ", top=" + top + ", left=" + left;

            window.open("/main/bmds/buildup/listDetail/" + buildId, "", attr);
        },
        // openJouralList(appId, title) {
        //     window.location.href = "/main/mentor/journalList/" + appId + "/" + title;

        // },
        async mentoringComplete(appId, title) {

            if (confirm(title + " 멘토링을 완료 하시겠습니까?")) {
                try {
                    const data = {
                        id: appId
                    }

                    const response = await MatchDateService.mentoringComplete(data);
                    console.log("매칭 정보조회 성공", response);

                } catch (e) {
                    console.log("매칭 정보조회 실패", e);
                }

                this.loadMatchInfo();
            }

        },
        async loadMatchInfo() {
            try {
                const data = {
                    mentoId: this.getUserId(),
                    pageNum: this.matchHistoryCurrentPage,
                    pageSize: this.matchHistoryPerPage,
                }
                const response = await MatchDateService.getMentoring(data);
                this.matchHistList = response.data.data;
                this.matchHistoryRows = response.data.count;
                console.log("매칭 정보조회 성공", this.matchHistList);
            } catch (e) {
                console.log("매칭 정보조회 실패", e);
            }
        },
        async loadMatchHistoryPage(page) {
            this.matchHistoryCurrentPage = page;
            await this.loadMatchInfo(this.getUserId());
        },
    },
    computed: {
        matchHistroyPage() {
            return Math.ceil(this.matchHistoryRows / this.matchHistoryPerPage);
        }
    },
    async mounted() {
        await this.loadMatchInfo(this.getUserId());
    }
}
</script>
