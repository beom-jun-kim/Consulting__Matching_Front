<template>
    <div>
        <div>
            <Nav />
            <div class="sp_wrap">
                <div class="sp_container">
                    <h6>멘토링 관리</h6>
                    <div class="menteeUserDetail">
                        <div style="text-align: right; padding-right: 23px;">
                            <button @click="openApplyModal">신청하기</button>
                        </div>
                        <div class="mt-2">
                            <table class="table" style="vertical-align: middle;">
                                <thead class="thead-dark">
                                    <tr>
                                        <th scope="col">순서</th>
                                        <th scope="col">제목</th>
                                        <th scope="col">희망분야</th>
                                        <th scope="col">진행일시</th>
                                        <th scope="col">진행방법</th>
                                        <th scope="col">진행</th>
                                        <th scope="col">일지</th>
                                        <th scope="col">수정</th>
                                        <th scope="col">확인</th>
                                    </tr>
                                </thead>
                                <tbody v-if="applicationList.length !== 0">
                                    <tr v-for="(application, i) in applicationList" :key="i">
                                        <td>{{ application.rowNo }}</td>
                                        <td>{{ application.title }}</td>
                                        <td>{{ application.tagName }}</td>
                                        <td>{{ application.mentoringAtFormat ? application.mentoringAtFormat.slice(0,
                                16)
                                : application.mentoringAtFormat }}</td>
                                        <td v-if="application.place == 1">대면</td>
                                        <td v-else-if="application.place == 0">비대면</td>
                                        <td v-else>상관없음</td>
                                        <td v-if="application.matchState === 'request'">신청</td>
                                        <td v-else-if="application.matchState === 'accept'">매칭</td>
                                        <td v-else-if="application.matchState === 'complete'">완료</td>
                                        <td v-else>멘토링 진행중</td>
                                        <td>
                                            <router-link :to="`/main/mentor/journalList/${application.id}/${application.title}`">{{application.journalCnt }}건</router-link>
                                        </td>
                                        <td>
                                            <button :disabled="application.matchState === 'complete'"
                                                @click="modiApp(application.id)">수정하기</button>
                                        </td>
                                        <td v-if="application.matchState === 'accept'">
                                            <router-link to="/main/mentor/menteeMatch"
                                                class="match_Btn">매칭확인</router-link>
                                        </td>
                                        <td v-else-if="application.matchState === 'complete'">
                                            <button @click="openReviewModal(application.id)">후기작성</button>
                                        </td>
                                        <td v-else>-</td>
                                    </tr>
                                </tbody>
                                <tbody v-else>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>제출한 신청서가 없습니다</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        <div v-if="applicationModal"
            style="width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); position: fixed; top: 0; left: 0; z-index: 999; display: flex; justify-content: center; align-items: center;">
            <MentorApplicationEdit @closeApplyModal="closeAppModal" v-bind:paramAppId="appId" />
        </div>
        <div v-if="reviewModal"
            style="width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); position: fixed; top: 0; left: 0; z-index: 999; display: flex; justify-content: center; align-items: center;">
            <ConsultReview @closeReviewModal="closeReviewModal" v-bind:paramAppId="appId" />
        </div>
    </div>
</template>

<script>
import Nav from "@/common/main/Nav.vue";
import MentorApplicationEdit from "@/components/main/MentorApplicationEdit.vue";
import ConsultReview from "@/components/main/ConsultReview.vue";
import Footer from "@/common/main/Footer.vue";
import jwtDecode from "jwt-decode";
import MatchDateService from "@/services/main/UserMatch"

export default {
    name: "MenteeManagement",
    components: {
        Nav,
        Footer,
        MentorApplicationEdit,
        ConsultReview
    },
    data() {
        return {
            applicationModal: false,
            reviewModal: false,
            applicationList: [],
        };
    },
    methods: {
        openApplyModal() {
            this.appId = 0;
            this.applicationModal = true;
        },
        async closeAppModal() {
            this.applicationModal = false;
            let data = {
                userId: this.getUserId()
            };
            await this.loadApplicationList(data);
        },
        getUserId() {
            const tokenData = localStorage.getItem("user");
            const parsedToken = JSON.parse(tokenData);
            const accessToken = parsedToken.accessToken;
            const decodedToken = jwtDecode(accessToken);
            const userId = decodedToken.id;
            return userId;
        },
        async loadApplicationList(data) {
            try {
                const response = await MatchDateService.getAppList(data);
                this.applicationList = response.data;
                console.log("멘토링 신청 리스트 조회 성공", this.applicationList);
            } catch (e) {
                console.log("멘토링 신청 리스트 조회 실패", e.response.data.message);
            }
        },
        modiApp(appId) {
            this.appId = appId;
            this.applicationModal = true;
        },
        openReviewModal(appId) {
            this.appId = appId;
            this.reviewModal = true;
        },
        async closeReviewModal() {
            this.reviewModal = false;
            let data = {
                userId: this.getUserId()
            };
            await this.loadApplicationList(data);
        },
    },
    async mounted() {
        let data = {
            userId: this.getUserId()
        };

        await this.loadApplicationList(data);
    }
}
</script>
