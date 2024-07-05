<template>
    <div>
        <Nav />
        <div class="reviewWrap">
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
                                    <input class="form-check-input" type="radio" :name="'sel1'" :id="'sel1'"
                                        :value="value" v-model="score01" />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    2.컨설턴트가 정확한 정보를 제시하였는가?
                                </th>
                                <td v-for="value in [10, 8, 6, 4, 2]" :key="value">
                                    <input class="form-check-input" type="radio" :name="'sel2'" :id="'sel2'"
                                        :value="value" v-model="score02" />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    3.컨설턴트의 태도는 전문적이었는가?
                                </th>
                                <td v-for="value in [10, 8, 6, 4, 2]" :key="value">
                                    <input class="form-check-input" type="radio" :name="'sel3'" :id="'sel3'"
                                        :value="value" v-model="score03" />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    4.컨설팅 결과에 만족하였는가?
                                </th>
                                <td v-for="value in [10, 8, 6, 4, 2]" :key="value">
                                    <input class="form-check-input" type="radio" :name="'sel4'" :id="'sel4'"
                                        :value="value" v-model="score04" />
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">5.컨설팅을 다시 요청할 의사가 있는가?</th>
                                <td v-for="value in [10, 8, 6, 4, 2]" :key="value">
                                    <input class="form-check-input" type="radio" :name="'sel5'" :id="'sel5'"
                                        :value="value" v-model="score05" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <textarea name="reviewTextBox" id="reviewTextBox" v-model="reviewTextBox"
                        placeholder="후기를 입력하여주세요..."></textarea>
                    <div class="submit">
                        <button @click="saveReviewForm">제출</button>
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
import MatchDateService from "@/services/main/UserMatch";
import jwtDecode from "jwt-decode";

export default {
    name: "ConsultantReview",
    components: {
        Nav,
        Footer,
    },
    data() {
        return {
            // matches: [],
            score01: 10,
            score02: 10,
            score03: 10,
            score04: 10,
            score05: 10,
            reviewTextBox: "",
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
        async saveReviewForm() {
            if (confirm("후기를 제출하시겠습니까?")) {
                try {
                    let data = {
                        // appId:,
                        // userId:this.getUserId(),
                        // mentoId:,
                        score1: this.score01,
                        score2: this.score02,
                        score3: this.score03,
                        score4: this.score04,
                        score5: this.score05,
                        reviewText: this.reviewTextBox,
                    }
                    const response = await MatchDateService.createReview(this.$route.params.id, this.getUserId(), data);
                    console.log("성공", response.data);
                    this.$router.push('/main/mentor');
                }
                catch (e) {
                    console.log('실패', e.response.data);
                }
            }
        },
    },
    async mounted() {
        // await this.submitReviewForm(this.$route.params.id);
    }
}
</script>

<style>
.reviewWrap {
    margin: 3rem auto;
    max-width: 1140px;
    height: 100vh;
    font-family: "Pretendard_Rgula" !important;
}

.reviewWrap table th,
.reviewWrap table td {
    padding: 15px;
}

.reviewWarp input {
    cursor: pointer;
}

.submit {
    text-align: center;
}

.submit button {
    border: 1px solid #dee2e6;
    background: none;
    margin-top: 10px;
    padding: 5px 10px;
}

#reviewTextBox {
    width: 100%;
    height: 100px;
    margin: 20px 0;
    padding: 10px;
    resize: none;
    border: 1px solid #dee2e6;
}
</style>