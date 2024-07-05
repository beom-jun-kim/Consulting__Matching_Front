<template>
    <div id="layoutSidenav_content" class="preR">
        <main>
            <div class="container-fluid px-4">
                <h1 class="mt-4">컨설팅매칭관리</h1>
                <ol class="breadcrumb mb-4">
                    <li class="breadcrumb-item active"></li>
                </ol>
                <div class="card2 mb-4">
                    <div class="card-header">
                        총 {{ count }} 개 매칭
                        <!-- <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0"
                            style="float: right">
                            <div class="input-group">
                                <input class="form-control" type="text" placeholder="검색어를 입력해 주세요!"
                                    aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                                <button class="btn btn-primary" id="btnNavbarSearch" type="button" @click="
                                    page = 1;
                                getAllMatch();
                                ">
                                    <i class="fas fa-search"></i>
                                </button>
                            </div>
                        </form> -->
                    </div>
                    <div class="card-body d-flex flex-column align-items-center">
                        <table class="table table-striped table-bordered">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">번호</th>
                                    <th v-if="getUserToken().role == 'admin'" scope="col">소속그룹</th>
                                    <th scope="col">컨설턴트</th>
                                    <th scope="col">멘티</th>
                                    <th scope="col">신청일시</th>
                                    <th scope="col">매칭수락일시</th>
                                    <!-- <th scope="col">매칭완료일시</th> -->
                                    <th scope="col">매칭상태</th>
                                </tr>
                            </thead>
                            <!-- 조회 데이터 생성 부분 -->
                            <tbody>
                                <tr v-for="(match, index) in matches" :key="index" @click="goToDetail(match.id)">
                                    <td style="cursor: pointer">
                                        {{ index + 1 }}
                                    </td>
                                    <td v-if="getUserToken().role == 'admin'" style="cursor: pointer">{{
                                        match.consultantUser.affiliationGroup ==
                                        'c0712me' ? '메라클' : '' }}</td>
                                    <td style="cursor: pointer">{{ match.consultantUser.name }}</td>
                                    <td style="cursor: pointer">{{ match.generalUser.name }}</td>
                                    <td style="cursor: pointer">{{ match.formattedCreatedAt }}</td>
                                    <td style="cursor: pointer">{{ match.formattedMatchedDate }}</td>
                                    <!-- <td style="cursor: pointer">{{ match.formattedEndDate }}</td> -->
                                    <td style="cursor: pointer">{{ match.matchedState == 'accept' ? '매칭완료' : '매칭거절' }}</td>
                                </tr>
                            </tbody>
                        </table>

                        <div class="d-flex flex-column justify-content-center align-items-center w-100">
                            <nav aria-label="Page navigation">
                                <ul class="pagination" style="margin-bottom:0;">
                                    <li class="page-item" v-for="page in pages" :key="page"
                                        :class="{ active: currentPage === page }">
                                        <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <FooterCom />
    </div>
</template>
  
<script>
import UserDataService from "@/services/admin/UserDataService";
import FooterCom from "@/common/admin/FooterCom.vue";
import jwtDecode from "jwt-decode";
import moment from "moment";
/* eslint-disable */
export default {
    name: "consultantList",
    components: {
        FooterCom,
    },
    data() {
        return {
            matches: [],
            searchName: "",
            matchIds: [], // 체크값 담아두기
            allSelected: "", // 전체체크값(ture, false)
            currentPage: 1, // 페이지번호
            count: 0,
            pageSize: 10,
            role: '',
        };
    },
    computed: {
        // 전체 페이지 수 계산
        pages() {
            return Math.ceil(this.count / this.pageSize);
        },
    },
    methods: {
        goToDetail(matchId) {
            // matchId를 사용하여 디테일 페이지의 경로를 생성하고 이동
            this.$router.push(`/admin/matchingDetail/${matchId}`);
        },
        changePage(page) {
            this.currentPage = page;
            this.getAllMatch();
        },
        getUserToken() {
            const tokenData = localStorage.getItem("user");
            const parsedToken = JSON.parse(tokenData);
            const accessToken = parsedToken.accessToken;
            const decodedToken = jwtDecode(accessToken);
            return decodedToken;
        },
        getRequestParams(searchName, page, pageSize) {
            let params = {};
            if (searchName) {
                params["name"] = searchName;
            }
            if (page) {
                params["page"] = page - 1;
            }
            if (pageSize) {
                params["size"] = pageSize;
            }
            return params;
        },
        async getAllMatch() {
            var data = {
                id: this.getUserToken().id,
                page: this.currentPage,
                pageSize: this.pageSize
            }
            try {
                const response = this.getUserToken().role == 'admin'
                    ? await UserDataService.getAllMatchAdmin(data)
                    : await UserDataService.getAllMatchSupervisor(data);
                const matches = response.data;
                this.matches = matches; // 객체
                this.count = matches.length; // 총건수
                this.matches.forEach((match) => {
                    match.formattedCreatedAt = moment(match.createdAt).format(
                        "YYYY-MM-DD HH:mm:ss"
                    );
                    match.formattedEndDate = moment(match.endDate).format(
                        "YYYY-MM-DD HH:mm:ss"
                    );
                    match.formattedMatchedDate = moment(match.matchedDate).format(
                        "YYYY-MM-DD HH:mm:ss"
                    );
                });
            }
            catch (e) {
                console.log('e', e);
            }
        },
    },
    // 최초 화면이 로딩될때(뜰때) 실행되는 이벤트(모든 회원조회가 실행됨)
    mounted() {
        this.getAllMatch();
    },
};
</script>
  
<style scoped>
th,
td {
    text-align: center;
}

.but {
    margin: 0 1rem;
}

@import "../../../../public/css/admin/styles.css";
</style>
  