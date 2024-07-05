<template>
    <div>
        <div>
            <Nav />
            <div class="sp_wrap">
                <div class="sp_container">
                    <h6>멘토링 진행</h6>
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">번호</th>
                                <th scope="col">멘티</th>
                                <th scope="col">희망분야</th>
                                <th scope="col">제목</th>
                                <th scope="col">일시</th>
                                <th scope="col">방법</th>
                                <th scope="col">멘토링 신청</th>
                            </tr>
                        </thead>
                        <tbody v-if="mentorMatchList.length !== 0">
                            <tr v-for="(app, index) in mentorMatchList" :key="index">
                                <td>{{ index + 1 }}</td>
                                <td>{{ app.menteeName }}</td>
                                <td v-if="app.tagNames.split(',').length > 1">
                                    <span class="matchHistListTagFirst" @click="mentorMatchTagShow($event, index)">{{
                            app.tagNames.split(",")[0] }}</span>
                                    <span class="matchHistListTagsBoxArrow"
                                        @click="mentorMatchTagShow($event, index)"><i
                                            class="fa-solid fa-angle-down"></i></span>
                                    <div class="matchHistTagsBox">
                                        <div v-if="hiddenEleState && selectedTagIndex === index">
                                            <ul>
                                                <li v-for="(tagName, index) in app.tagNames.split(',')" :key="index">
                                                    {{ tagName }}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </td>
                                <td v-else-if="app.tagNames.split(',').length == 1">
                                    {{ app.tagNames }}
                                </td>
                                <td v-else>
                                    {{ null }}
                                </td>
                                <!-- 
                                        수정 gunu 2024.03.25
                                        <td>{{ app.title.length > 5 ? `${app.title.slice(0, 5)}...` : app.title }}</td>
                                        <td>{{ formatCreatedAtMatch(app.mentoringAt) }}</td>
                                        <td>{{ app.place == 1 ? '대면' : '비대면' }}</td>
                                        -->
                                <td @click="openAppModal(app.id)">{{ app.title }}</td>
                                <td>{{ formatCreatedAtMatch(app.mentoringAt) }}</td>
                                <td v-if="app.place == 1">대면</td>
                                <td v-else-if="app.place == 0">비대면</td>
                                <td v-else>상관없음</td>
                                <td v-if="app.acceptance === 'N'">
                                    <button @click="menToMenReq(getUserId(), app.id)">신청하기</button>
                                </td>
                                <td v-else-if="app.acceptance === 'Y'">
                                    <button @click="menToMenReqCancel(getUserId(), app.id)">신청취소</button>
                                </td>
                            </tr>
                        </tbody>
                        <tbody v-else>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>멘토링을 신청한 유저가 없습니다</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="d-flex justify-content-center w-100 my-4 mx-auto">
                        <nav aria-label="Page navigation w-25">
                            <ul class="pagination">
                                <li class="page-item" v-for="page in mentorMatchPages" :key="page"
                                    :class="{ active: mentorMatchCurrentPage === page }">
                                    <a class="page-link" href="#" @click.prevent="loadMentorMatchPage(page)">{{ page
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
            <MentorApplication @closeApplyModal="closeAppModal" v-bind:paramAppId="appId" />
        </div>
    </div>
</template>

<script>
import Nav from "@/common/main/Nav.vue";
import Footer from "@/common/main/Footer.vue";
import MatchDateService from "@/services/main/UserMatch";
import MentorApplication from "@/components/main/MentorApplication.vue";
import jwtDecode from "jwt-decode";

export default {
    name: "MentorMatch",
    components: {
        Nav,
        Footer,
        MentorApplication
    },
    data() {
        return {
            mentorMatchList: [],
            mentorMatchCurrentPage: 1,
            mentorMatchRows: 1,
            mentorMatchPerPage: 10,

            hiddenEleState: true,
            selectedTagIndex: null,

            modalArea: false
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
        mentorMatchTagShow(event, index) {
            this.selectedTagIndex = index;
            this.hiddenEleState = !this.hiddenEleState;
        },
        formatCreatedAtMatch(createdAt) {
            const options = {
                year: "numeric",
                month: "numeric",
                day: "numeric",
                hour: "numeric",
            }
            const formattedDate = new Intl.DateTimeFormat("ko-KR", options).format(new Date(createdAt))
            return formattedDate;
        },
        openAppModal(appId) {
            this.appId = appId;
            this.modalArea = true;
        },
        closeAppModal() {
            this.modalArea = false;
        },
        async menToMenReq(mentoId, appId) {
            if (confirm("신청하시겠습니까?")) {
                try {
                    const data = {
                        mentoId,
                        appId,
                    }
                    await MatchDateService.putApplication(data);
                    alert("신청되었습니다");
                    await this.loadApplication(this.getUserId());
                } catch (e) {
                    console.log("신청하기 실패", e);
                }
            }
        },
        async menToMenReqCancel(mentoId, appId) {
            if (confirm("신청취소하시겠습니까?")) {
                try {
                    const data = {
                        mentoId,
                        appId,
                    }
                    await MatchDateService.putApplicationCancel(data);
                    alert("신청취소되었습니다");
                    await this.loadApplication(this.getUserId());
                } catch (e) {
                    console.log("신청취소 실패", e);
                }
            }
        },
        async loadApplication() {
            try {
                const data = {
                    mentoId: this.getUserId(),
                    pageNum: this.mentorMatchCurrentPage,
                    pageSize: this.mentorMatchPerPage,
                }
                console.log("adfasdfasdfasdfasdfasdf", data);
                const response = await MatchDateService.getApplication(data);
                this.mentorMatchList = response.data.data;
                this.mentorMatchRows = response.data.count;
                console.log("신청서 리스트 조회 성공", response.data);
            } catch (e) {
                console.log("신청서 리스트 조회 실패", e.response);
            }
        },
        async loadMentorMatchPage(page) {
            this.mentorMatchCurrentPage = page;
            await this.loadApplication(this.getUserId());
        }
    },
    computed: {
        mentorMatchPages() {
            return Math.ceil(this.mentorMatchRows / this.mentorMatchPerPage);
        }
    },
    async mounted() {
        await this.loadApplication(this.getUserId());
    }
}
</script>

<style></style>
