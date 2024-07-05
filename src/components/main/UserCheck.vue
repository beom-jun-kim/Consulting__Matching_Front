<template>
    <div class="container-fluid px-4 mt-5">

        <!-- 멘토링 신청 -->
        <h6>▶ 멘토링 신청</h6>
        <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">번호</th>
                    <th scope="col">고객명</th>
                    <th scope="col">이메일</th>
                    <th scope="col">전화번호</th>
                    <th scope="col">신청일시</th>
                    <th scope="col">매칭</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(match, index) in matches" :key="index">
                    <td>
                        {{ index + 1 }}
                    </td>
                    <td>
                        {{ match.generalUser.name }}
                    </td>
                    <td>
                        {{ match.generalUser.email }}
                    </td>
                    <td>
                        {{ match.generalUser.phoneNum }}
                    </td>
                    <td>
                        {{ formatCreatedAt(match.generalUser.createdAt) }}
                    </td>
                    <td>
                        <button
                            @click="matchOk(match.id, match.generalUserId, match.consultantUserId, match.buildId)">수락</button>
                        <button
                            @click="matchReject(match.id, match.generalUserId, match.consultantUserId, match.buildId)">거절</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="d-flex justify-content-center w-100 my-4 mx-auto">
            <nav aria-label="Page navigation w-25">
                <ul class="pagination">
                    <li class="page-item" v-for="page in matchesPages" :key="page"
                        :class="{ active: matchesCurrentPage === page }">
                        <a class="page-link" href="#" @click.prevent="matchesCurrentPage = page">{{
                            page
                        }}</a>
                    </li>
                </ul>
            </nav>
        </div>

        <!-- 멘토링 진행중 -->
        <h6>▶ 멘토링 진행중</h6>
        <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">번호</th>
                    <th scope="col">고객명</th>
                    <th scope="col">이메일</th>
                    <th scope="col">전화번호</th>
                    <th scope="col">매칭일시</th>
                    <!-- <th scope="col">완료</th> -->
                </tr>
            </thead>
            <tbody>
                <tr v-for="(match, index) in matching" :key="index">
                    <td @click="goToUserCheckDetail(match)">
                        {{ index + 1 }}
                    </td>
                    <td @click="goToUserCheckDetail(match)">
                        {{ match.generalUser.name }}
                    </td>
                    <td @click="goToUserCheckDetail(match)">
                        {{ match.generalUser.email }}
                    </td>
                    <td @click="goToUserCheckDetail(match)">
                        {{ match.generalUser.phoneNum }}
                    </td>
                    <td @click="goToUserCheckDetail(match)">
                        {{ formatCreatedAt(match.matchedDate) }}
                    </td>
                    <!-- <td>
                        <button @click="completeMatch(match.id, match.generalUserId, match.consultantUserId, match.buildId)">완료</button>
                    </td> -->
                </tr>
            </tbody>
        </table>
        <div class="d-flex justify-content-center w-100 my-4 mx-auto">
            <nav aria-label="Page navigation w-25">
                <ul class="pagination">
                    <li class="page-item" v-for="page in matchingPages" :key="page"
                        :class="{ active: matchingCurrentPage === page }">
                        <a class="page-link" href="#" @click.prevent="matchingCurrentPage = page">{{
                            page
                        }}</a>
                    </li>
                </ul>
            </nav>
        </div>

        <!-- 멘토링 완료 -->
        <h6>▶ 멘토링 완료</h6>
        <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">번호</th>
                    <th scope="col">고객명</th>
                    <th scope="col">이메일</th>
                    <th scope="col">전화번호</th>
                    <th scope="col">완료일시</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(match, index) in matched" :key="index">
                    <td @click="goToUserCheckDetail(match)">
                        {{ index + 1 }}
                    </td>
                    <td @click="goToUserCheckDetail(match)">
                        {{ match.generalUser.name }}
                    </td>
                    <td @click="goToUserCheckDetail(match)">
                        {{ match.generalUser.email }}
                    </td>
                    <td @click="goToUserCheckDetail(match)">
                        {{ match.generalUser.phoneNum }}
                    </td>
                    <td @click="goToUserCheckDetail(match)">
                        {{ formatCreatedAt(match.endDate) }}
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="d-flex justify-content-center w-100 my-4 mx-auto">
            <nav aria-label="Page navigation w-25">
                <ul class="pagination">
                    <li class="page-item" v-for="page in matchedPages" :key="page"
                        :class="{ active: matchedCurrentPage === page }">
                        <a class="page-link" href="#" @click.prevent="matchedCurrentPage = page">{{
                            page
                        }}</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>
  
<script>
import MatchDateService from "@/services/main/UserMatch";
import jwtDecode from "jwt-decode";

/* eslint-disable */
export default {
    name: "UserCheck",
    data() {
        return {
            matches: [], // 신청 유저 조회
            matching: [], // 멘토링 진행중 조회
            matched: [], // 멘토링 완료 조회

            // 신청 유저 페이지
            matchesPerPage: 1,
            matchesRows: 1,
            matchesCurrentPage: 1,

            // 멘토링 진행중 페이지
            matchingRows: 1,
            matchingPerPage: 1,
            matchingCurrentPage: 1,

            // 멘토링 진행중 페이지
            matchedRows: 1,
            matchedPerPage: 1,
            matchedCurrentPage: 1,
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

        // 신청 유저 조회
        async loadMatches(id) {
            try {
                const response = await MatchDateService.getConsultantMatch(id, this.matchesPerPage, this.matchesRows);
                this.matches = response.data.filter(match => match.matchedState === 'request');
                this.matchesRows = this.matches.length;
            } catch (e) {
                console.log("신청유저 조회 실패", e);
            }
        },

        // 멘토링 진행중 조회
        async loadMatching(id) {
            try {
                const response = await MatchDateService.getConsultantMatch(id, this.matchingPerPage, this.matchingCurrentPage);
                this.matching = response.data.filter(match => match.matchedState === 'accept');
                this.matchingRows = this.matching.length;
            } catch (e) {
                console.log("멘토링 진행중 조회 실패", e);
            }
        },

        // 멘토링 완료
        async loadMatched(id) {
            try {
                const response = await MatchDateService.getConsultantMatch(id, this.matchedPerPage, this.matchedRows);
                this.matched = response.data.filter(match => match.matchedState === 'complete');
                this.matchedRows = this.matched.length;
            } catch (e) {
                console.log("멘토링 완료 조회 실패", e);

            }
        },

        formatCreatedAt(createdAt) {
            const options = {
                year: "numeric",
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
            };
            const formattedDate = new Intl.DateTimeFormat("ko-KR", options).format(new Date(createdAt));
            return formattedDate;
        },
        goToUserCheckDetail(match) {
            this.$emit("update:state", "userCheckDetail");
            this.$emit("data", { state: "userCheckDetail", id: match.generalUser.id });
        },
        async matchOk(id, generalUserId, consultantUserId, buildId) {
            let data = {
                id,
                generalUserId,
                consultantUserId,
                buildId: buildId,
            }
            try {
                const response = await MatchDateService.acceptMatch(data);
                alert("수락되었습니다");
                await this.loadMatches(this.getUserId());
                await this.loadMatching(this.getUserId());
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        },
        async matchReject(id, generalUserId, consultantUserId, buildId) {
            let data = {
                id,
                generalUserId,
                consultantUserId,
                buildId,
            }
            try {
                const response = await MatchDateService.rejectMatch(data);
                console.log(response.data);
            } catch (e) {
                console.log(e);
            }
        },
        async completeMatch(id, generalUserId, consultantUserId, buildId) {
            let data = {
                id,
                generalUserId,
                consultantUserId,
                buildId,
            }
            try {
                const response = await MatchDateService.completeMatch(data);
                // await this.loadMatched(this.getUserId());
                console.logu(response.data);
            } catch (e) {
                console.log(e);
            }
        },
    },
    computed: {
        matchesPages() {
            return Math.ceil(this.matchesRows / this.matchesPerPage)
        },
        matchingPages() {
            return Math.ceil(this.matchingRows / this.matchingPerPage)
        },
        matchedPages() {
            return Math.ceil(this.matchedRows / this.matchedPerPage)
        },
    },
    async mounted() {
        await this.loadMatches(this.getUserId());
        await this.loadMatching(this.getUserId());
        await this.loadMatched(this.getUserId());
    },
};
</script>
  
<style>
th,
tr {
    text-align: center;
}

.but {
    margin: 0 1rem;
}

.signBtn {
    background: #0d6efd;
    width: 25px;
    height: 25px;
}

.selectAll {
    background: #0d6efd;
    width: 4rem;
    color: #fff;
    border-radius: 10%;
}

/* 기본 체크박스 없애기*/
.checkbox-container input[type="checkbox"] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
}
</style>