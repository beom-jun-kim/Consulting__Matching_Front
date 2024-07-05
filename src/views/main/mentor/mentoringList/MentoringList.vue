<template>
    <div>
        <Nav />
        <div class="sp_wrap">
            <div class="sp_container">
            <h6>멘토링 리스트</h6>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">번호</th>
                        <th scope="col">멘티 이메일</th>
                        <th scope="col">멘티명</th>
                        <th scope="col">멘토링 제목</th>
                        <th scope="col">BM</th>
                        <th scope="col">멘토 이메일</th>
                        <th scope="col">멘토명</th>
                        <th scope="col">멘토링 분야</th>
                        <th scope="col">멘토링 일지</th>
                        <th scope="col">진행상태</th>

                    </tr>
                </thead>
                <tbody v-if="mentoringList.length > 0">
                    <tr v-for="(mentoring, index) in mentoringList" :key="index">
                        <td>{{ mentoring.rowNo }}</td>
                        <td>{{ mentoring.menteeMail }}</td>
                        <td>{{ mentoring.menteeName }}</td>
                        <td>{{ mentoring.appTitle }}</td>
                        <td>{{ mentoring.bmTitle }}</td>
                        <td>{{ mentoring.mentoMail }}</td>
                        <td>{{ mentoring.mentorName }}</td>
                        <td>{{ mentoring.tagNames }}</td>
                        <td>
                            {{ mentoring.consultingCnt }}건
                        </td>

                        <td>{{ mentoring.status }}</td>
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
                        <td></td>

                    </tr>
                </tbody>
            </table>
            <div class="d-flex justify-content-center w-100 my-4 mx-auto">
                <nav aria-label="Page navigation w-25">
                    <ul class="pagination">
                        <li class="page-item" v-for="page in mentorListPages" :key="page"
                            :class="{ active: mentorListCurrentPage === page }">
                            <a class="page-link" href="#" @click.prevent="loadMentorListPage(page)">{{ page }}</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        </div>
        <Footer />
    </div>
</template>

<script>

import Nav from "@/common/main/Nav.vue";
import Footer from "@/common/main/Footer.vue";
import jwtDecode from "jwt-decode";
import UserMatch from "@/services/main/UserMatch";

export default {
    name: "MenteeList",
    components: {
        Nav,
        Footer,
    },
    data() {
        return {
            mentorListRows: 1,
            mentorListCurrentPage: 1,
            mentorListPerPage: 10,

            mentoringList: [],
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
        loadMenteeListPage(page) {
            this.menteeListCurrentPage = page;
            this.loadMenteeList(this.getUserId());
        },
        openMentoringBmListWindow(appId, buildId, tagName, bmTitle) {
            let width = screen.width;
            let height = screen.height;
            let left = 200;
            let top = 0;
            let attr = "width=" + width + ", height=" + height + ", top=" + top + ", left=" + left;

            window.open("/main/mentor/menteeBmListPop/0/" + this.getUserId() + "/" + appId + "/" + buildId + "/" + tagName + "/" + bmTitle, "", attr);
        },
        async loadMentoringList(userId) {
            try{
                let data = {
                    userId : userId
                };
                const response = await UserMatch.consultingListForSupervisor(data);
                console.log("컨설팅 내역 조회 성공", response.data);
                this.mentoringList = response.data;
            } catch(e) {
                console.log("컨설팅 내역 조회 실패", e.response.data.message);
            }
        }
    },
    computed: {
        mentorListPages() {
            return Math.ceil(this.mentorListRows / this.mentorListPerPage);
        }
    },
    async mounted() {
        this.loadMentoringList(this.getUserId());
    }
};
</script>

<style>
.menteeListWrap {
    max-width: 1440px;
    margin: 50px auto;
}

.menteeListWrap button {
    background: none;
    border: 1px solid #ededed;
}

.menteeListWrap table {
    text-align: center;
    vertical-align: middle;
}

.menteeListWrap table thead tr th {
    background: #ededed;
}

.menteeListWrap table thead {
    border-bottom: 2px solid;
}

.menteeBmList {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
}
</style>