<template>
    <div id="layoutSidenav_content">
        <main>
            <div class="container-fluid px-4">
                <h1 class="mt-4">매칭정보</h1>
                <ol class="breadcrumb mb-4">
                    <li class="breadcrumb-item active"></li>
                </ol>
                <div class="row">
                    <div class="col-xl-6">
                        <div class="card2 mb-4">
                            <div class="card-header fw-bold">멘티정보</div>
                            <div class="card-body p-3">
                                <div class="d-flex flex-wrap">
                                    <div class="form-group me-md-3 mb-3">
                                        <label for="name">이름 :</label>
                                        <input type="text" class="form-control" id="name" name="name"
                                            v-model="matches.match.generalUser.name" />
                                    </div>
                                    <div class="form-group me-md-3 mb-3">
                                        <label for="email">이메일 :</label>
                                        <input type="text" class="form-control" id="email" name="email"
                                            v-model="matches.match.generalUser.email" />
                                    </div>
                                </div>
                                <div class="d-flex flex-wrap">
                                    <div class="form-group me-md-3 mb-3">
                                        <label for="phoneNum">연락처 :</label>
                                        <input type="text" class="form-control" id="phoneNum" name="phoneNum"
                                            v-model="matches.match.generalUser.phoneNum" />
                                    </div>
                                    <div class="form-group me-md-3 mb-3">
                                        <label for="company">기업명 :</label>
                                        <input type="text" class="form-control" id="company" name="company"
                                            v-model="matches.match.generalUser.company" />
                                    </div>
                                </div>
                                <div class="d-flex flex-wrap">
                                    <div class="form-group me-md-3 mb-3">
                                        <label>성별 : </label>
                                        <div class="d-flex form-control py-2 px-3">
                                            <div class="form-check me-md-3">
                                                <input class="form-check-input" type="radio" name="genderGeneral"
                                                    id="genderGeneralM" value="M"
                                                    v-model="matches.match.generalUser.gender" />
                                                <label class="form-check-label" for="genderGeneralM">
                                                    남
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="genderGeneral"
                                                    id="genderGeneralW" value="W"
                                                    v-model="matches.match.generalUser.gender" />
                                                <label class="form-check-label" for="genderGeneralW">
                                                    여
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6">
                        <div class="card2 mb-4">
                            <div class="card-header fw-bold">컨설턴트정보</div>
                            <div class="card-body p-3">
                                <div class="d-flex flex-wrap">
                                    <div class="form-group me-md-3 mb-3">
                                        <label for="name">이름 :</label>
                                        <input type="text" class="form-control" id="name" name="name"
                                            v-model="matches.match.consultantUser.name" />
                                    </div>
                                    <div class="form-group me-md-3 mb-3">
                                        <label for="email">이메일 :</label>
                                        <input type="text" class="form-control" id="email" name="email"
                                            v-model="matches.match.consultantUser.email" />
                                    </div>
                                    <div class="form-group me-md-3 mb-3">
                                        <label>성별 : </label>
                                        <div class="d-flex form-control py-2 px-3">
                                            <div class="form-check me-md-3">
                                                <input class="form-check-input" type="radio" name="gender" id="gender"
                                                    value="M" v-model="matches.match.consultantUser.gender" />
                                                <label class="form-check-label" for="gender">
                                                    남
                                                </label>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input" type="radio" name="gender" id="gender"
                                                    value="W" v-model="matches.match.consultantUser.gender" />
                                                <label class="form-check-label" for="gender">
                                                    여
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex flex-wrap">
                                    <div class="form-group me-md-3 mb-3">
                                        <label for="phoneNum">연락처 :</label>
                                        <input type="text" class="form-control" id="phoneNum" name="phoneNum"
                                            v-model="matches.match.consultantUser.phoneNum" />
                                    </div>
                                    <div class="form-group me-md-3 mb-3">
                                        <label for="company">소속기관명 :</label>
                                        <input type="text" class="form-control" id="company" name="company"
                                            v-model="matches.match.consultantUser.company" />
                                    </div>
                                    <div class="form-group me-md-3 mb-3">
                                        <label>결과보고서 : </label>
                                        <div class="d-flex justify-content-between">
                                            <div class="form-control py-2 px-3 m-auto text-end">
                                                {{ matches.journalCount }}건
                                            </div>
                                        </div>
                                        <button class="btn btn-primary btn-sm mt-3" type="button"
                                            @click="goToCheckJournalList(matches.match.id, matches.match.generalUserId, matches.match.consultantUserId)">
                                            일지확인하기
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6">
                        <div class="card2 mb-4">
                            <div class="card-header d-flex justify-content-between align-items-center fw-bold">
                                컨설팅상태
                                <span class="fw-light">

                                </span>
                            </div>
                            <div class="card-body p-3">
                                <div class="d-flex flex-wrap">
                                    <div class="form-group me-md-3 mb-3">
                                        <label for="matchedState">매칭상태 :</label>
                                        <input type="text" class="form-control" id="matchedState" name="matchedState"
                                            v-model="matchedState" />
                                    </div>
                                    <div class="form-group me-md-3 mb-3">
                                        <label for="createdAt">매칭요청일시 :</label>
                                        <input type="text" class="form-control" id="createdAt" name="createdAt"
                                            v-model="matches.formattedCreatedAt" />
                                    </div>
                                </div>
                                <div class="d-flex flex-wrap">
                                    <div class="form-group me-md-3 mb-3">
                                        <label for="matchedDate">매칭수락일시 :</label>
                                        <input type="text" class="form-control" id="matchedDate" name="matchedDate"
                                            v-model="matches.formattedMatchedDate" />
                                    </div>
                                    <div class="form-group me-md-3 mb-3">
                                        <label for="endDate">컨설팅종료일시 :</label>
                                        <input type="text" class="form-control" id="endDate" name="endDate"
                                            v-model="matches.formattedEndDate" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6">
                        <div class="card2 mb-4">
                            <div class="card-header d-flex justify-content-between align-items-center fw-bold">
                                컨설팅후기
                                <span class="fw-light">
                                    <div v-if="matches.review.length === 0" :style="{ color: 'red' }">
                                        {리뷰 미작성}
                                    </div>
                                    <div v-else :style="{ color: 'blue' }">
                                        {리뷰 작성}
                                    </div>
                                </span>
                            </div>
                            <div class="card-body p-3">
                                <div class="d-flex flex-wrap">
                                    <div class="d-flex">
                                        <div style="margin: 0 auto 0">
                                            <table class="table table-bordered table-sm mb-0">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">질문</th>
                                                        <th scope="col">매우그렇다</th>
                                                        <th scope="col">그렇다</th>
                                                        <th scope="col">보통</th>
                                                        <th scope="col">그렇지않다</th>
                                                        <th scope="col">전혀그렇지않다</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">
                                                            1.컨설팅 일정 및 시간은 적절하였는가?
                                                        </th>
                                                        <td v-for="value in [10, 8, 6, 4, 2]" :key="value">
                                                            <input class="form-check-input" type="radio" :name="'sel1'"
                                                                :id="'sel1'" :value="value" v-model="review[0].score1"
                                                                disabled />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            2.컨설턴트가 정확한 정보를 제시하였는가?
                                                        </th>
                                                        <td v-for="value in [10, 8, 6, 4, 2]" :key="value">
                                                            <input class="form-check-input" type="radio" :name="'sel2'"
                                                                :id="'sel2'" :value="value" v-model="review[0].score2"
                                                                disabled />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            3.컨설턴트의 태도는 전문적이었는가?
                                                        </th>
                                                        <td v-for="value in [10, 8, 6, 4, 2]" :key="value">
                                                            <input class="form-check-input" type="radio" :name="'sel3'"
                                                                :id="'sel3'" :value="value" v-model="review[0].score3"
                                                                disabled />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            4.컨설팅 결과에 만족하였는가?
                                                        </th>
                                                        <td v-for="value in [10, 8, 6, 4, 2]" :key="value">
                                                            <input class="form-check-input" type="radio" :name="'sel4'"
                                                                :id="'sel4'" :value="value" v-model="review[0].score4"
                                                                disabled />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">5.컨설팅을 가시 요청할 의사가 있는가?</th>
                                                        <td v-for="value in [10, 8, 6, 4, 2]" :key="value">
                                                            <input class="form-check-input" type="radio" :name="'sel5'"
                                                                :id="'sel5'" :value="value" v-model="review[0].score5"
                                                                disabled />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex" style="margin-top: 0.5rem">
                    <div class="m-auto">
                        <router-link to="/admin/matchingList" class="btn btn-secondary btn_marg">
                            돌아가기
                        </router-link>
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
export default {
    name: "matchingDetail",
    components: {
        FooterCom,
    },
    data() {
        return {
            matches: [],
            journals: [],
            page: 3,
            rows: 0,
            currentPage: 1,
            review: []
        };
    },
    computed: {
        matchedState() {
            if (this.matches.match.matchedState == 'accept') {
                return '수락완료';
            }
            else if (this.matches.match.matchedState == 'reject') {
                return '수락거절';
            }
            else if (this.matches.match.matchedState == 'complete') {
                return '매칭완료';
            }
            else {
                return '매칭요청';
            }
        },
        pages() {
            return Math.ceil(this.rows / this.page);
        },
    },
    methods: {
        goToCheckJournalList(matchedId, userId, consultantUserId) {
            this.$router.push(`/admin/checkJournalList/${matchedId}/${userId}/${consultantUserId}`);
        },
        getUserToken() {
            const tokenData = localStorage.getItem("user");
            const parsedToken = JSON.parse(tokenData);
            const accessToken = parsedToken.accessToken;
            const decodedToken = jwtDecode(accessToken);
            return decodedToken;
        },
        async getMatchDetailBySupervisor() {
            var data = {
                supervisorId: this.getUserToken().id,
                matchId: this.$route.params.id
            }
            try {
                const res = await UserDataService.getMatchDetailBySupervisor(data);
                this.matches = res.data.data;
                if (this.matches.review.length == 0) {
                    this.review = [
                        { score1: 0, score2: 0, score3: 0, score4: 0, score5: 0 }
                    ];
                }
                else {
                    this.review = this.matches.review;
                }
                this.matches.formattedCreatedAt = moment(this.matches.match.createdAt).format(
                    "YYYY-MM-DD HH:mm:ss"
                );
                this.matches.formattedMatchedDate = this.matches.match.matchedDate ? moment(this.matches.match.matchedDate).format(
                    "YYYY-MM-DD HH:mm:ss"
                ) : '';
                this.matches.formattedEndDate = this.matches.match.endDate ? moment(this.matches.match.endDate).format(
                    "YYYY-MM-DD HH:mm:ss"
                ) : '';
                await this.getConsultingJournal(this.matches.match.consultantUserId);
            }
            catch (e) {
                console.log('e', e);
            }
        },
    },
    mounted() {
        this.getMatchDetailBySupervisor();
    }
};
</script>

<style>
.btn_marg {
    margin: 0 1rem;
}

.inputBox {
    border: 1px solid rgba(0, 0, 0, 0.2);
    width: 12.7rem;
    height: 2.5rem;
    border-radius: 6px;
}

.inputBox2 {
    border: 1px solid rgba(0, 0, 0, 0.2);
    width: 25rem;
    height: 2.5rem;
    border-radius: 6px;
}

.label {
    display: inline-block;
    width: 140px;
    text-align: right;
}

.choice {
    background: #0d6efd;
    width: 2rem;
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

@import "../../../../public/css/admin/styles.css";
</style>