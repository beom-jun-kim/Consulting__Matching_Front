<template>
    <div>
        <Nav />
        <div class="mentorWrap">
            <div class="mentorWrapBox">
                <div class="container-fluid px-4 mt-5">
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">멘토</th>
                                <th scope="col">이메일</th>
                                <th scope="col">회사</th>
                                <th scope="col">전문분야</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    {{ name }}
                                </td>
                                <td>
                                    {{ email }}
                                </td>
                                <td>
                                    {{ company }}
                                </td>
                                <td>
                                    <div v-if="tags.length > 1">
                                        <div class="selectBox">
                                            <ul>
                                                <li @click="tagNameShow">{{ tags[0].tagName }}</li>
                                                <li v-if="hiddenEleState">
                                                    <span :value="tag.tagName" v-for="(tag, i) in tags" :key="i">{{
                                        tag.tagName }}</span>
                                                </li>
                                            </ul>
                                            <span class="tagNameArrow" @click="tagNameShow">▼</span>
                                        </div>
                                    </div>
                                    <div v-else-if="tags.length === 1">
                                        {{ tags[0].tagName }}
                                    </div>
                                    <div v-else>
                                        {{ null }}
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="container-fluid px-4 mt-5">
                    <h6>▶ 멘토링 후기</h6>
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">번호</th>
                                <th scope="col">멘티</th>
                                <th scope="col">평점</th>
                                <th scope="col">날짜</th>
                            </tr>
                        </thead>
                        <tbody v-if="rows !== 0">
                            <tr v-for="(review, index) in reviews" :key="index">
                                <td>
                                    {{ index + 1 }}
                                </td>
                                <td>
                                    {{ maskName(review.reviewUserName) }}
                                </td>
                                <td>
                                    {{ (review.score1 + review.score2 + review.score3 + review.score4 + review.score5) /
                                        5
                                    }} / 10
                                </td>
                                <td>
                                    {{ formatCreatedAtMatch(review.createdAt) }}
                                </td>
                            </tr>
                        </tbody>
                        <tbody v-else>
                            <tr>
                                <td></td>
                                <td></td>
                                <td>조회된 후기가 없습니다</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="d-flex justify-content-center w-100 my-4 mx-auto">
                        <nav aria-label="Page navigation w-25">
                            <ul class="pagination">
                                <li class="page-item" v-for="page in pages" :key="page"
                                    :class="{ active: currentPage === page }">
                                    <a class="page-link" href="#" @click.prevent="loadPage(page)">{{
                                        page
                                    }}</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div class="requestBtn">
                    <select name="tagList" id="tagList" v-model="selectedCategory">
                        <option :value="null" style="display: none;">분야를 선택하여 주세요</option>
                        <option :value="tag.tagName" v-for="(tag, i) in tags" :key="i">{{ tag.tagName }}</option>
                    </select>

                    <select name="bmdsList" id="bmdsList" v-model="selectedBuildId">
                        <option :value="null" style="display: none;">BMDS를 선택하여 주세요</option>
                        <option :value="bmds.id" v-for="(bmds, index) in bmdsList" :key="index">{{ bmds.title }}
                        </option>
                    </select>
                    <!-- <div v-if="matchedInfo.matchedState === 'request'">
                        <button @click="matchRequest()" :disabled=true>신청</button>
                    </div>
                    <button v-else @click="matchRequest()">신청</button> -->
                    <button @click="matchRequest()">신청</button>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Nav from "@/common/main/Nav.vue";
import Footer from "@/common/main/Footer.vue";
import MatchDateService from "@/services/main/UserMatch";
import jwtDecode from "jwt-decode";
import BuildupService from "@/services/main/BuildupService";

export default {
    name: "GeneralJournalView",
    components: {
        Nav,
        Footer,
    },
    data() {
        return {
            name: "",
            email: "",
            company: "",
            tags: [],
            reviews: [],
            mentors: [],

            perPage: 10,
            rows: 1,
            currentPage: 1,

            selectedBuildId: null,
            selectedCategory: null,
            btnState: true,
            matchUserId: 1,
            hiddenEleState: false,

            matchedInfo: {},
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
        maskName(name) {
            const maskedName = name[0] + '*'.repeat(name.length - 1);
            return maskedName;
        },
        async loadConsultant(id) {
            try {
                const response = await MatchDateService.getConsultant(id);
                this.name = response.data.name;
                this.email = response.data.email;
                this.company = response.data.company;
                this.tags = response.data.tags;
                console.log("컨설턴트 조회 성공", response.data);
            } catch (e) {
                console.log("컨설턴트 조회 실패", e);
            }
        },
        async loadReview(currentUserId, consultantId) {
            try {
                const response = await MatchDateService.getReview(currentUserId, consultantId, this.currentPage, this.perPage);
                this.reviews = response.data;
                this.rows = this.reviews.length;
                console.log("리뷰 조회 성공", this.reviews);
            } catch (e) {
                console.log("리뷰 조회 실패", e.response.data);
            }
        },
        async loadUserBmds(id) {
            try {
                const response = await BuildupService.getBuildUpBmds(id);
                this.bmdsList = response.data.data;
                console.log("bmdsList 조회 성공", this.bmdsList);
            } catch (e) {
                console.log("bmdsList 조회 실패", e.response.data.message);
            }
        },
        async loadPage(page) {
            this.currentPage = page;
            await this.loadReview(this.getUserId());
        },
        async matchRequest() {
            let data = {
                generalUserId: this.getUserId(),
                consultantUserId: parseInt(this.$route.params.id),
                buildId: this.selectedBuildId,
                category: this.selectedCategory,
            }
            console.log("data", data);
            try {
                const response = await MatchDateService.requestMatch(data);
                alert("신청되었습니다");
                this.matchedInfo = response.data;
                this.$router.push("/main/mentor");
                console.log("dfasdfasdfsadf", this.matchedInfo);
            } catch (e) {
                console.log("매칭 요청 실패", e.response.data);
            }
        },
        tagNameShow() {
            this.hiddenEleState = !this.hiddenEleState;
        },
        formatCreatedAtMatch(createdAt) {
            const options = {
                year: "numeric",
                month: "numeric",
                day: "numeric",
                // hour: "numeric",
                // minute: "numeric",
            };
            const formattedDate = new Intl.DateTimeFormat("ko-KR", options).format(new Date(createdAt));
            return formattedDate;
        },
    },
    computed: {
        pages() {
            return Math.ceil(this.rows / this.perPage);
        }
    },
    async mounted() {
        await this.loadConsultant(this.$route.params.id);
        await this.loadUserBmds(this.getUserId());
        await this.loadReview(this.getUserId(), this.$route.params.id);
        await this.loadMatchUserInfo(this.getUserId());
    }
}
</script>

<style>
.mentorWrap {
    max-width: 1140px;
    margin: 0 auto;
}

.mentorWrap>.mentorWrapBox {
    height: 100vh;
}

.requestBtn {
    display: flex;
    align-items: center;
    justify-content: center;
}

.mentorWrap button {
    border: 1px solid #dee2e6;
    background: none;
    height: 30px;
}

select[id="tagList"],
select[id="bmdsList"] {
    padding: 0 10px;
    height: 30px;
    outline: none;
    cursor: pointer;
    border: 1px solid #dbdbdb;
    margin-right: 3px;
}

.selectBox {
    display: flex;
    justify-content: center;
    align-items: center;
}

.selectBox ul {
    margin: 0;
    position: relative;
    user-select: none;
}

.selectBox li {
    list-style: none;
}

.selectBox li:first-child {
    cursor: pointer;
}

.selectBox li span:first-child {
    display: none;
}

.selectBox li span {
    position: relative;
    width: 100%;
    padding: 10px;
    display: block;
    border-bottom: 1px solid;
    text-align: center;
}

.selectBox li:nth-child(2) {
    border: 1px solid;
    position: absolute;
    top: 31px;
    background: #fff;
    border-bottom: none;
}

.selectBox .tagNameArrow {
    cursor: pointer;
    user-select: none;
    padding-left: 5px;
}
</style>