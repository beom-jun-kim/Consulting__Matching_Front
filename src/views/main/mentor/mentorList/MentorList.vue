<template>
    <div>
        <Nav />
        <div class="sp_wrap">
            <div class="sp_container">
                <h6>멘토 리스트</h6>

            <div class="menteeListWrap">
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">번호</th>
                            <th scope="col">이메일</th>
                            <th scope="col">이름</th>
                            <th scope="col">시작일</th>
                            <th scope="col">종료일</th>
                            <th scope="col">전문분야</th>
                            <th scope="col">BM</th>
                            <th scope="col">멘토링</th>
                            <th scope="col">비밀번호</th>
                            <th scope="col">사용</th>
                        </tr>
                    </thead>
                    <tbody v-if="mentorList.length > 0">
                        <tr v-for="(mentor, index) in mentorList" :key="index">
                            <td>{{ mentor.rowNo }}</td>
                            <td>{{ mentor.email }}</td>
                            <td>{{ mentor.name }}</td>
                            <td>{{ mentor.createAtFormat }}</td>
                            <td>{{ mentor.expireAt }}</td>
                            <td>{{ mentor.tagNames }}</td>
                            <td>
                                <span class="menteeBmList" @click="openMentorBmListWindow(mentor.id, mentor.name)">
                                    {{ mentor.bmCnt }}건
                                </span>
                            </td>
                            <td>
                                <span class="menteeBmList">
                                    <router-link to="/main/mentor/mentorHistory">
                                        {{ mentor.mentoringCnt }}건
                                    </router-link>
                                </span>
                            </td>
                            <td><button @click="initPassword(mentor.id, mentor.name)">초기화</button></td>
                            <td>
                                    <button v-if="mentor.useYn == 'N'" @click="updateUseYn(mentor.id, mentor.name, 'Y')">사용</button>
                                    <button v-else @click="updateUseYn(mentor.id, mentor.name, 'N')">미사용</button>
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
        </div>
        <Footer />
    </div>
</template>

<script>
import Nav from "@/common/main/Nav.vue";
import Footer from "@/common/main/Footer.vue";
import jwtDecode from "jwt-decode";
import UserDataService from "@/services/main/UserDataService";

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

            mentorList: [
                
            ],
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
        async loadMentorList() {
            try{

                let data = {
                    id : this.getUserId()
                };
                
                const response = await UserDataService.mentoListForSupervisor(data);
                console.log("멘토리스트 조회 성공", response.data);

                this.mentorList = response.data;

            } catch(e) {
                console.log("멘토리스트 조회 실패", e.response.data.message);
            }
        },
        async initPassword(userId, userName) {
            
            if (confirm(userName + '의 비밀번호를 초기화 하시겠습니까?')) {
                try{

                    let data = {
                        id : userId
                    };

                    const response = await UserDataService.initPassword(data);
                    console.log("비밀번호 초기화 성공", response.data);

                    alert("비밀번호 변경이 완료되었습니다.");


                } catch(e) {
                    console.log("비밀번호 초기화 실패", e.response.data.message);
                }
            }
        },
        async updateUseYn(userId, userName, useYn) {
            if (confirm(userName + '의 ' + ((useYn == 'Y')?'사용중지 해제를':'사용중지를') + ' 하시겠습니까?')) {
               try{
                    let data = {
                       id : userId
                       , useYn : useYn
                   };
                    const response = await UserDataService.updateUseYn(data);
                   console.log("사용여부 변경 성공", response.data);
                    this.menteeList = this.loadMenteeList();
                } catch(e) {
                   console.log("사용여부 변경 실패", e.response.data.message);
               }
            }
        },
        loadMenteeListPage(page) { 
            this.menteeListCurrentPage = page;
            this.loadMenteeList(this.getUserId());
        },
        toMenteeManageMent(userId) {
            this.$router.push(`/main/mentor/MenteeManagementForSuperVisor/${userId}`);
        },
        openMentorBmListWindow(userId, userName) {
            let width = screen.width;
            let height = screen.height;
            let left = 200;
            let top = 0;
            let attr = "width=" + width + ", height=" + height + ", top=" + top + ", left=" + left;

            window.open("/main/mentor/menteeBmListPop/" + userId + "/" + userName, "", attr);
        },
    },
    computed: {
        mentorListPages() {
            return Math.ceil(this.mentorListRows / this.mentorListPerPage);
        }
    },
    async mounted() {
        this.loadMentorList();
    }
};
</script>
