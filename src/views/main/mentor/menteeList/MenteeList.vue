<template>
    <div>
        <Nav/>
        <div class="sp_wrap">
            <div class="sp_container">
            <h6>멘티 리스트</h6>

                <div class="menteeListWrap">
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">번호</th>
                        <th scope="col">이메일</th>
                        <th scope="col">이름</th>
                        <th scope="col">시작일</th>
                        <th scope="col">종료일</th>
                        <th scope="col">BM</th>
                        <th scope="col">멘토링</th>
                        <th scope="col">비밀번호</th>
                        <th scope="col">사용</th>
                    </tr>
                </thead>
                <tbody v-if="menteeList.length > 0">
                    <tr v-for="(mentee , index) in menteeList" :key="index">
                        <td>{{mentee.rowNo}}</td>
                        <td>{{mentee.email}}</td>
                        <td>{{mentee.name}}</td>
                        <td>{{mentee.createAtFormat}}</td>
                        <td>{{mentee.expireAt}}</td>
                        <td>
                            <span class="menteeBmList" @click="openMenteeBmListWindow(mentee.id, mentee.name)">
                                {{mentee.bmCnt}}
                            </span>
                        </td>
                        <td>
                            <span class="menteeBmList" @click="toMenteeManageMent(mentee.id)">
                                {{mentee.mentoringCnt}}건
                            </span>
                        </td>
                        <td><button @click="initPassword(mentee.id, mentee.name)">초기화</button></td>
                        <td>
                                <button v-if="mentee.useYn == 'N'" @click="updateUseYn(mentee.id, mentee.name, 'Y')">사용</button>
                                <button v-else @click="updateUseYn(mentee.id, mentee.name, 'N')">미사용</button>
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
                        <li class="page-item" v-for="page in menteeListPages" :key="page"
                            :class="{ active: menteeListCurrentPage === page }">
                            <a class="page-link" href="#" @click.prevent="loadMenteeListPage(page)">{{page}}</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
            </div>
        </div>
        <Footer/>
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
    data(){
        return{
            menteeListRows:1,
            menteeListCurrentPage:1,
            menteeListPerPage:10,

            menteeList:[
                {
                    menteeEmail:"asdf@asdf.com",
                    name:"김창권",
                    startDay:"2024.03.15",
                    endDay:"2024.04.15",
                    BMList:"2건",
                    mentoringList:"3건",
                },
                {
                    menteeEmail:"asdf@asdf.com",
                    name:"김창권",
                    startDay:"2024.03.15",
                    endDay:"2024.04.15",
                    BMList:"2건",
                    mentoringList:"3건",
                },
                {
                    menteeEmail:"asdf@asdf.com",
                    name:"김창권",
                    startDay:"2024.03.15",
                    endDay:"2024.04.15",
                    BMList:"2건",
                    mentoringList:"3건",
                },
            ],
        }
    },
    methods:{
        getUserId() {
            const tokenData = localStorage.getItem("user");
            const parsedToken = JSON.parse(tokenData);
            const accessToken = parsedToken.accessToken;
            const decodedToken = jwtDecode(accessToken);
            const userId = decodedToken.id;
            return userId;
        },
        async loadMenteeList() {
            try{

                let data = {
                    id : this.getUserId()
                };

                const response = await UserDataService.menteeListForSupervisor(data);
                console.log("멘티리스트 조회 성공", response.data);

                this.menteeList = response.data;

            } catch(e) {
                console.log("멘티리스트 조회 실패", e.response.data.message);
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
        loadMenteeListPage(page){
           this.menteeListCurrentPage = page; 
           this.loadMenteeList(this.getUserId());
        },
        toMenteeManageMent(userId) {
            this.$router.push(`/main/mentor/MenteeManagementForSuperVisor/${userId}`);
        },
        openMenteeBmListWindow(userId, userName) {
            let width = screen.width;
            let height = screen.height;
            let left = 200;
            let top = 0;
            let attr = "width=" + width + ", height=" + height + ", top=" + top + ", left=" + left;

            window.open("/main/mentor/menteeBmListPop/" + userId + "/" + userName, "", attr);
        },
    },
    computed:{
        menteeListPages(){
            return Math.ceil(this.menteeListRows / this.menteeListPerPage);
        }
    },
    async mounted(){
        await this.loadMenteeList();
    }
};
</script>

