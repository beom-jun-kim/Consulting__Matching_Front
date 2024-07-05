<template>
    <div>
        <Nav />
        <template>
            <div class="mentorWrap">
                <div class="container-fluid px-4 mt-5" v-if="getUser().role === 'g-consultant'">
                    <h6>멘토링 현황</h6>
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">번호</th>
                                
                                sdasdfasdfjasdjflkasdl;kfasdfj;alskdf
                                <th scope="col">BMDS</th>
                            </tr>
                        </thead>
                        <tbody v-if="matchesRows !== 0">
                            <tr v-for="(match, index) in matches" :key="index">
                                <td>
                                    <router-link :to="`/main/mentor/state/${match.id}/${match.build.id}`">
                                        {{ index + 1 }}
                                    </router-link>
                                </td>
                                <td>
                                    <router-link :to="`/main/mentor/state/${match.id}/${match.build.id}`">
                                        {{ match.generalUser.name }}
                                    </router-link>
                                </td>
                                <td>
                                    <router-link :to="`/main/mentor/state/${match.id}/${match.build.id}`">
                                        {{ formatCreatedAtJournal(match.createdAt) }}
                                    </router-link>
                                </td>
                                <td>
                                    <router-link :to="`/main/mentor/state/${match.id}/${match.build.id}`">
                                        {{ match.matchedDate ? formatCreatedAtJournal(match.matchedDate) : null }}
                                    </router-link>
                                </td>
                                <td>
                                    <router-link :to="`/main/mentor/state/${match.id}/${match.build.id}`">
                                        {{ match.endDate ? formatCreatedAtJournal(match.endDate) : null }}
                                    </router-link>
                                </td>
                                <td class="consultantBtn">
                                    <div v-if="match.matchedState === 'request'">
                                        <button :disabled=false
                                            @click="matchOk(match.id, match.generalUserId, match.consultantUserId, match.buildId)">수락
                                        </button>
                                        <button :disabled=false
                                            @click="matchReject(match.id, match.generalUserId, match.consultantUserId, match.buildId)">거절
                                        </button>
                                    </div>
                                    <div v-else>
                                        <button :disabled=true>수락</button>
                                        <button :disabled=true>거절</button>
                                    </div>
                                </td>
                                <td>
                                    <router-link :to="`/main/mentor/state/${match.id}/${match.build.id}`">
                                        <div v-if="match.matchedState === 'request'">
                                            진행대기
                                        </div>
                                        <div v-else-if="match.matchedState === 'accept'">
                                            진행중
                                        </div>
                                        <div v-else-if="match.matchedState === 'consultingComplete'">
                                            완료
                                        </div>
                                        <div v-else-if="match.matchedState === 'reject'">
                                            거절
                                        </div>
                                    </router-link>
                                </td>
                                <td>
                                    <router-link :to="`/main/mentor/state/${match.id}/${match.build.id}`">
                                        {{ match.category }}
                                    </router-link>
                                </td>
                                <td>
                                    <router-link :to="`/main/mentor/state/${match.id}/${match.build.id}`">
                                        <button class="bmdsMoveBtn">이동하기</button>
                                    </router-link>
                                </td>
                            </tr>
                        </tbody>
                        <tbody v-else>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>멘트링을 신청한 유저가 없습니다</td>
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
                                <li class="page-item" v-for="page in matchesPages" :key="page"
                                    :class="{ active: matchesCurrentPage === page }">
                                    <a class="page-link" href="#" @click.prevent="loadMatchsPage(page)">{{
                    page
                }}</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div class="container-fluid px-4 mt-5" v-if="getUser().role === 'g-consultant'">
                    <h6>▶ 일지조회 및 수정</h6>
                    <select v-model="sortOption" @change="sortJournals" id="sortOption">
                        <option value="date">날짜순</option>
                        <option value="name">고객명순</option>
                    </select>
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">번호</th>
                                <th scope="col">멘티</th>
                                <th scope="col">수행날짜</th>
                                <th scope="col">작성날짜</th>
                                <th scope="col">차수</th>
                            </tr>
                        </thead>
                        <tbody v-if="journalRows !== 0">
                            <tr v-for="(journal, index) in journals" :key="index">
                                <td>
                                    <router-link :to="`/main/mentor/journal/${journal.id}`">
                                        {{ index + 1 }}
                                    </router-link>
                                </td>
                                <td>
                                    <router-link :to="`/main/mentor/journal/${journal.id}`">
                                        {{ journal.menteeName }}
                                    </router-link>
                                </td>
                                <td>
                                    <router-link :to="`/main/mentor/journal/${journal.id}`">
                                        {{ formatCreatedAtJournal(journal.performanceDate) }}
                                    </router-link>
                                </td>
                                <td>
                                    <router-link :to="`/main/mentor/journal/${journal.id}`">
                                        {{ formatCreatedAtJournal(journal.createdAt) }}
                                    </router-link>
                                </td>
                                <td>
                                    <router-link :to="`/main/mentor/journal/${journal.id}`">
                                        {{ journal.degree }}
                                    </router-link>
                                </td>
                            </tr>
                        </tbody>
                        <tbody v-else>
                            <tr>
                                <td></td>
                                <td></td>
                                <td>일지 리스트가 없습니다</td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="d-flex justify-content-center w-100 my-4 mx-auto">
                        <nav aria-label="Page navigation w-25">
                            <ul class="pagination">
                                <li class="page-item" v-for="page in journalPages" :key="page"
                                    :class="{ active: journalCurrentPage === page }">
                                    <a class="page-link" href="#" @click.prevent="loadJournalPage(page)">{{ page }}</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div class="container-fluid px-4 mt-5" v-if="getUser().role !== 'g-consultant'">
                    <ul class="consultFilter">
                        <li v-for="(consultantField, index) in consultantFields" :key="index">
                            <input type="checkbox" :name="consultantField.field" :id="consultantField.field"
                                v-model="selectedField" :value="consultantField.label" @change="filterConsultants">
                            <label class="filLab" :for="consultantField.field">{{ consultantField.label }}</label>
                        </li>
                    </ul>
                    <h6>▶ 컨설턴트 조회</h6>
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">번호</th>
                                <th scope="col">멘토</th>
                                <th scope="col">이메일</th>
                                <th scope="col">회사</th>
                                <th scope="col">분야</th>
                            </tr>
                        </thead>
                        <tbody v-if="consultantRows !== 0">
                            <tr v-for="(consultant, index) in filterConsulArr" :key="index" style="cursor:pointer;"
                                @click="consultantInfo(consultant.id)">
                                <td>{{ index + 1 }}</td>
                                <td>{{ consultant.name }}</td>
                                <td>{{ consultant.email }}</td>
                                <td>{{ consultant.company }}</td>
                                <td>
                                    <div class="tagName">
                                        <p v-for="(tag, i) in consultant.tags" :key="i" class="border p-2 rounded">
                                            # {{ tag.tagName ? tag.tagName : null }}
                                        </p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                        <tbody v-else>
                            <tr>
                                <td></td>
                                <td></td>
                                <td>조회된 멘토가 없습니다</td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="d-flex justify-content-center w-100 my-4 mx-auto">
                        <nav aria-label="Page navigation w-25">
                            <ul class="pagination">
                                <li class="page-item" v-for="page in consultantPages" :key="page"
                                    :class="{ active: consultantCurrentPage === page }">
                                    <a class="page-link" href="#" @click.prevent="loadConsultantPage(page)">{{
                    page
                }}</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div class="container-fluid px-4 mt-5" v-if="getUser().role !== 'g-consultant'">
                    <h6>▶ 멘토링 진행과정</h6>
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">번호</th>
                                <th scope="col">멘토</th>
                                <th scope="col">신청일자</th>
                                <th scope="col">분야</th>
                                <th scope="col">BMDS</th>
                                <th scope="col">상태</th>
                                <th scope="col">신청</th>
                            </tr>
                        </thead>
                        <tbody v-if="mentoringRows !== 0">
                            <tr v-for="(mentor, index) in mentors" :key="index">
                                <td>
                                    {{ index + 1 }}
                                </td>
                                <td>
                                    {{ mentor.consultantUser.name }}
                                </td>
                                <td>
                                    {{ formatCreatedAtJournal(mentor.createdAt) }}
                                </td>
                                <td>
                                    {{ mentor.category }}
                                </td>
                                <td>
                                    {{ mentor.build.title }}
                                </td>
                                <td>
                                    <div v-if="mentor.matchedState === 'request'">
                                        수락대기중
                                    </div>
                                    <div v-else-if="mentor.matchedState === 'accept'">
                                        진행중
                                    </div>
                                    <div v-else-if="mentor.matchedState === 'reject'">
                                        거절
                                    </div>
                                    <div v-else-if="mentor.matchedState === 'consultingComplete'">
                                        완료
                                    </div>
                                    <div v-else-if="mentor.matchedState === 'reviewWrite'">
                                        완료
                                    </div>
                                </td>
                                <td>
                                    <div v-if="mentor.matchedState === 'request'">
                                        <button class="cancel"
                                            @click="cancelRequest(mentor.id, mentor.generalUserId, mentor.consultantUserId, mentor.buildId)">신청취소
                                        </button>
                                    </div>
                                    <div v-else-if="mentor.matchedState === 'accept'">
                                        <button :disabled=true class="cancel">신청취소</button>
                                    </div>
                                    <div v-else-if="mentor.matchedState === 'reject'">
                                        <button :disabled=true class="cancel">신청취소</button>
                                    </div>
                                    <div v-else-if="mentor.matchedState === 'consultingComplete'">
                                        <router-link :to="`/main/mentor/consultantReview/${mentor.id}`">
                                            <button class="cancel">후기작성</button>
                                        </router-link>
                                    </div>
                                    <div v-else-if="mentor.matchedState === 'reviewWrite'">
                                        <button disabled class="cancel">후기완료</button>
                                    </div>
                                </td>

                            </tr>
                        </tbody>
                        <tbody v-else>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>신청된 멘토링이 없습니다</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="d-flex justify-content-center w-100 my-4 mx-auto">
                        <nav aria-label="Page navigation w-25">
                            <ul class="pagination">
                                <li class="page-item" v-for="page in mentoringPages" :key="page"
                                    :class="{ active: mentoringCurrentPage === page }">
                                    <a class="page-link" href="#" @click.prevent="loadMentoringPage(page)">{{
                    page
                }}</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div class="container-fluid px-4 mt-5" v-if="getUser().role !== 'g-consultant'">
                    <h6>▶ 나의 멘토링 일지</h6>
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">번호</th>
                                <th scope="col">멘토</th>
                                <th scope="col">사업아이템</th>
                                <th scope="col">수행일자</th>
                                <th scope="col">차수</th>
                            </tr>
                        </thead>
                        <tbody v-if="generalJournalRows !== 0">
                            <tr v-for="(generalJournal, index) in generalJournals" :key="index">
                                <td>
                                    <router-link :to="`/main/mentor/generalJournal/${generalJournal.id}`">
                                        {{ index + 1 }}
                                    </router-link>
                                </td>
                                <td>
                                    <router-link :to="`/main/mentor/generalJournal/${generalJournal.id}`">
                                        {{ generalJournal.mentorName }}
                                    </router-link>
                                </td>
                                <td>
                                    <router-link :to="`/main/mentor/generalJournal/${generalJournal.id}`">
                                        {{ generalJournal.menteeItem }}
                                    </router-link>
                                </td>
                                <td>
                                    <router-link :to="`/main/mentor/generalJournal/${generalJournal.id}`">
                                        {{ formatCreatedAtJournal(generalJournal.performanceDate) }}
                                    </router-link>
                                </td>
                                <td>
                                    <router-link :to="`/main/mentor/generalJournal/${generalJournal.id}`">
                                        {{ generalJournal.degree }}
                                    </router-link>
                                </td>
                            </tr>
                        </tbody>
                        <tbody v-else>
                            <tr>
                                <td></td>
                                <td></td>
                                <td>멘토링된 일지가 없습니다</td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="d-flex justify-content-center w-100 my-4 mx-auto">
                        <nav aria-label="Page navigation w-25">
                            <ul class="pagination">
                                <li class="page-item" v-for="page in generalJournalPages" :key="page"
                                    :class="{ active: generalJournalCurrentPage === page }">
                                    <a class="page-link" href="#" @click.prevent="loadGeneralJournalPage(page)">{{
                                        page
                                        }}</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </template>
        <Footer />
    </div>
</template>

<script>
import Nav from "@/common/main/Nav.vue";
import Footer from "@/common/main/Footer.vue";
import MatchDateService from "@/services/main/UserMatch";
import jwtDecode from "jwt-decode";

/* eslint-disable */
export default {
    name: "MentorView",
    components: {
        Nav,
        Footer,
    },
    data() {
        return {
            matches: [],
            journals: [],
            bmdsList: [],
            consultants: [],
            generalJournals: [],
            mentors: [],

            matchesPerPage: 10,
            matchesRows: 1,
            matchesCurrentPage: 1,

            journalPerPage: 10,
            journalRows: 1,
            journalCurrentPage: 1,

            consultantPerPage: 10,
            consultantRows: 1,
            consultantCurrentPage: 1,

            generalJournalPerPage: 10,
            generalJournalRows: 1,
            generalJournalCurrentPage: 1,

            mentoringPerPage: 10,
            mentoringRows: 1,
            mentoringCurrentPage: 1,

            consultantFields: [
                {
                    label: "경영일반(사업화전략)",
                    field: "management",
                },
                {
                    label: "BM수립 및 고도화",
                    field: "establish",
                },
                {
                    label: "투자유치(IR전략)",
                    field: "invest",
                },
                {
                    label: "R&D지원",
                    field: "support",
                },
                {
                    label: "영업/마케팅",
                    field: "sales",
                },
                {
                    label: "특허/법률",
                    field: "patents",
                },
                {
                    label: "재무/회계",
                    field: "finance",
                },
                {
                    label: "정부지원연계",
                    field: "government",
                },
                {
                    label: "기타",
                    field: "etc",
                },
            ],
            selectedField: [],
            state: "",

            // btnState: false,
            tags: [],
            sortOption: "date",
            filterConsulArr: []
        };
    },
    methods: {

        getUser() {
            const tokenData = localStorage.getItem("user");
            const parsedToken = JSON.parse(tokenData);
            const accessToken = parsedToken.accessToken;
            const decodedToken = jwtDecode(accessToken);
            return decodedToken;
        },
        consultantInfo(consultantId) {
            this.$router.push(`/main/mentor/consultantInfo/${consultantId}`);
        },
        filterConsultants() {
            if (this.selectedField.length === 0) {
                this.loadConsultantPage(this.consultantCurrentPage);
            } else if (!this.selectedField.some(selected => this.consultants.some(consultant => consultant.tags.some(tag => selected === tag.tagName)))) {
                alert("일치하는 전문분야가 없습니다");
                this.loadConsultantPage(this.consultantCurrentPage);
            } else {
                const filteredConsultants = this.consultants.filter(consultant => {
                    return consultant.tags.some(tag => this.selectedField.includes(tag.tagName));
                });
                this.filterConsulArr = filteredConsultants;
                // this.consultantCurrentPage = 1;
            }
        },
        async loadMatches(id) {
            try {
                const response = await MatchDateService.getConsultantMatch(id, this.matchesCurrentPage, this.matchesPerPage);
                this.matches = response.data;
                this.matchesRows = this.matches.length;
                console.log("멘토링 현황 조회 성공", this.matches);
            } catch (e) {
                console.log("멘토링 현황 조회 실패", e);
            }
        },
        async loadJournal(id) {
            try {
                const response = await MatchDateService.getConsultingJournal(id, this.journalCurrentPage, this.journalPerPage);
                this.journals = response.data.data;
                this.journalRows = response.data.count;
                await this.sortJournals();
                console.log("일지 조회 성공", this.journals);
            } catch (e) {
                console.log("일지 조회 실패", e);
            }
        },
        async loadConsultant(userId) {
            try {
                let data = {
                    userId: userId,
                    page: this.consultantCurrentPage,
                    pageSize: this.consultantPerPage,
                    tags: this.tags.length > 0 ? this.tags : '' // tags는 배열
                }
                const response = await MatchDateService.getConsultantByTag(data);
                this.consultants = response.data;
                this.filterConsulArr = this.consultants;
                this.consultantRows = this.consultants.length;
                console.log("컨설턴트 조회 성공", this.consultants);
            } catch (e) {
                console.log("컨설턴트 조회 실패", e);
            }
        },
        async loadGeneralJournal(id) {
            try {
                const response = await MatchDateService.getMentoringJournal(id, this.generalJournalCurrentPage, this.generalJournalPerPage);
                this.generalJournals = response.data.data;
                this.generalJournalRows = response.data.count;
                await this.generalSortJournals();
                console.log("멘토링 일지 조회 성공", this.generalJournals);
            } catch (e) {
                console.log("멘토링 일지 조회 실패", e);
            }
        },
        async loadMatchUserInfo(id) {
            try {
                const response = await MatchDateService.getMatch(id, this.mentoringCurrentPage, this.mentoringPerPage);
                this.mentors = response.data.data;
                this.mentoringRows = response.data.count;
                // this.mentors.map((user) => {
                //     user.formattedState = user.matchedState == 'accept' ? '진행중' : (user.matchedState == "request" ? "수락대기중" : (user.matchedState == "reject" ? "거절" : '완료'))
                //     return user;
                // })
                console.log("매칭 유저 정보 조회 성공 ", this.mentors);
            } catch (e) {
                console.log("매칭 유저 정보 조회 실패", e.response.data.message);
            }
        },
        formatCreatedAtMatch(createdAt) {
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
        formatCreatedAtJournal(createdAt) {
            const options = {
                year: "numeric",
                month: "numeric",
                day: "numeric",
            };
            const formattedDate = new Intl.DateTimeFormat("ko-KR", options).format(new Date(createdAt));
            return formattedDate;
        },
        sortJournals() {
            if (this.sortOption === "name") {
                this.journals.sort((a, b) => a.menteeName.localeCompare(b.menteeName));
            } else if (this.sortOption === "date") {
                this.journals.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            }
        },
        generalSortJournals() {
            this.generalJournals.sort((a, b) => new Date(b.performanceDate) - new Date(a.performanceDate));
        },
        async matchOk(id, generalUserId, consultantUserId, buildId) {
            let data = {
                id,
                generalUserId,
                consultantUserId,
                buildId,
            }
            try {
                const response = await MatchDateService.acceptMatch(data);
                alert("수락되었습니다");
                await this.loadMatches(this.getUser().id);
                console.log(response.data);
            } catch (e) {
                console.log(e);
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
                alert("거절되었습니다");
                await this.loadMatches(this.getUser().id);
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
                console.log(response.data);
            } catch (e) {
                console.log(e);
            }
        },
        async cancelRequest(id, generalUserId, consultantUserId, buildId) {
            if (confirm('컨설팅 신청을 취소하시겠습니까?')) {
                try {
                    let data = {
                        id,
                        generalUserId,
                        consultantUserId,
                        buildId,
                    }
                    await MatchDateService.cancelMatch(data);
                    alert("신청 취소되었습니다");
                    await this.loadMatchUserInfo(this.getUser().id);
                } catch (e) {
                    console.log("신청 취소 실패", e.response.data.message);
                }
            }
        },
        async loadJournalPage(page) {
            this.journalCurrentPage = page;
            await this.loadJournal(this.getUser().id);
        },
        async loadMatchsPage(page) {
            this.matchesCurrentPage = page;
            await this.loadMatches(this.getUser().id);
        },
        async loadConsultantPage(page) {
            this.consultantCurrentPage = page;
            await this.loadConsultant(this.getUser().id);
        },
        async loadGeneralJournalPage(page) {
            this.generalJournalCurrentPage = page;
            await this.loadGeneralJournal(this.getUser().id);
        },
        async loadMentoringPage(page) {
            this.mentoringCurrentPage = page;
            await this.loadMatchUserInfo(this.getUser().id);
        },
    },
    computed: {
        matchesPages() {
            return Math.ceil(this.matchesRows / this.matchesPerPage);
        },
        journalPages() {
            return Math.ceil(this.journalRows / this.journalPerPage);
        },
        consultantPages() {
            return Math.ceil(this.consultantRows / this.consultantPerPage);
        },
        generalJournalPages() {
            return Math.ceil(this.generalJournalRows / this.generalJournalPerPage);
        },
        mentoringPages() {
            return Math.ceil(this.mentoringRows / this.mentoringPerPage);
        },
    },
    // watch: {
    //     journalCurrentPage(newPage, oldPage) {
    //         this.sortJournals();
    //     },
    // },
    async mounted() {
        await this.loadMatches(this.getUser().id);
        await this.loadJournal(this.getUser().id);
        await this.loadConsultant(this.getUser().id);
        await this.loadGeneralJournal(this.getUser().id);
        await this.loadMatchUserInfo(this.getUser().id);
        await this.sortJournals();
    },
}


</script>

<style>
tbody {
    vertical-align: middle !important;
}

th,
tr {
    text-align: center;
}

.consultantBtn button,
.cancel,
.bmdsMoveBtn,
.completeBtn {
    border: 1px solid #dee2e6;
    background: none;
    margin-right: 2px;
}

.mentorWrap {
    max-width: 1140px;
    margin: 0 auto;
}

.mentorWrap a {
    display: block;
    color: inherit;
    text-decoration: none;
}

.mentorWrap a:hover {
    color: inherit;
}

select[id="sortOption"] {
    margin: 10px 0;
    border: 1px solid #dbdbdb;
    outline: none;
}

.tagName {
    display: flex;
    justify-content: center;
}

.tagName p {
    margin: 0 5px 0 0;
    font-size: 14px;
}

.consultFilter {
    list-style: none;
}

.filLab {
    user-select: none;
}

.consultFilter {
    display: flex;
    flex-wrap: wrap;
    margin-top: 15px;
}

.consultFilter li {
    width: 25%;
    padding-bottom: 10px;
}

.consultFilter li label {
    cursor: pointer;
    padding-left: 5px;
}
</style>