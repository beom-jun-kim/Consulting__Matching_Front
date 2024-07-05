<template>
    <div>
        <div
            style="position: absolute; background: white; width: 800px; top: 30px; left: 50%; overflow: auto; transform: translate(-50%, 0);">
            <div style="width: 100%; height: 50px; background: #8F85B0; text-align: right;">
                <button
                    style="width: 50px; border: 0; font-size: 30px; line-height: 48px; vertical-align: middle; color: white; font-weight: 900; background: rgb(71 49 133);"
                    @click="$emit('closeReviewModal')">X</button>
            </div>
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
                                    <th scope="row" style="text-align: left;">
                                        1.컨설팅 일정 및 시간은 적절하였나요?
                                    </th>
                                    <td v-for="value in [10, 8, 6, 4, 2]" :key="value" style="text-align: center;">
                                        <input class="form-check-input" type="radio" :name="'sel1'" :id="'sel1'"
                                            :value="value" v-model="score01" :disabled="getUser().role =='supervisor'"/>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" style="text-align: left;">
                                        2.컨설턴트가 정확한 정보를 제시하였나요?
                                    </th>
                                    <td v-for="value in [10, 8, 6, 4, 2]" :key="value" style="text-align: center;">
                                        <input class="form-check-input" type="radio" :name="'sel2'" :id="'sel2'"
                                            :value="value" v-model="score02" :disabled="getUser().role =='supervisor'"/>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" style="text-align: left;">
                                        3.컨설턴트의 멘토링 내용은 전문적이었나요?
                                    </th>
                                    <td v-for="value in [10, 8, 6, 4, 2]" :key="value" style="text-align: center;">
                                        <input class="form-check-input" type="radio" :name="'sel3'" :id="'sel3'"
                                            :value="value" v-model="score03" :disabled="getUser().role =='supervisor'"/>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" style="text-align: left;">
                                        4.컨설팅 결과에 만족하였나요?
                                    </th>
                                    <td v-for="value in [10, 8, 6, 4, 2]" :key="value" style="text-align: center;">
                                        <input class="form-check-input" type="radio" :name="'sel4'" :id="'sel4'"
                                            :value="value" v-model="score04" :disabled="getUser().role =='supervisor'"/>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" style="text-align: left;">5.컨설팅을 다시 요청할 의사가 있나요?</th>
                                    <td v-for="value in [10, 8, 6, 4, 2]" :key="value" style="text-align: center;">
                                        <input class="form-check-input" type="radio" :name="'sel5'" :id="'sel5'"
                                            :value="value" v-model="score05" :disabled="getUser().role =='supervisor'"/>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <textarea name="reviewTextBox" id="reviewTextBox" v-model="reviewTextBox" :disabled="getUser().role =='supervisor'"
                            placeholder="후기를 입력하여주세요..."></textarea>
                        <div class="submit" v-if="getUser().role !=='supervisor'">
                            <button v-if="reviewId === 0" @click="saveReviewForm">평가완료</button>
                            <button v-if="reviewId > 0" @click="updateReview">수정하기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import MatchDateService from "@/services/main/UserMatch";
import jwtDecode from "jwt-decode";

export default {
    name: "ConsultantReview",
    props: ['paramAppId'],
    components: {

    },
    data() {
        return {
            score01: 10,
            score02: 10,
            score03: 10,
            score04: 10,
            score05: 10,
            reviewTextBox: "",
            reviewId:0,
        }
    },
    methods: {
        getUser() {
            const tokenData = localStorage.getItem("user");
            const parsedToken = JSON.parse(tokenData);
            const accessToken = parsedToken.accessToken;
            const decodedToken = jwtDecode(accessToken);
            // const userId = decodedToken.id;
            return decodedToken;
        },
        async saveReviewForm() {
            try {
                if (confirm("후기를 제출하시겠습니까?")) {
                    let data = {
                        appId: this.paramAppId,
                        score1: this.score01,
                        score2: this.score02,
                        score3: this.score03,
                        score4: this.score04,
                        score5: this.score05,
                        reviewText: this.reviewTextBox
                    }
                    const response = await MatchDateService.createReview(data);
                    console.log("후기 등록 성공", response.data);
                    this.$emit('closeReviewModal');
                }
            }
            catch (e) {
                console.log('후기 등록 실패', e.response.data);
            }
        },
        async loadReviewInfo() {
            try {
                let data = {
                    appId: this.paramAppId,
                }
                const response = await MatchDateService.reviewInfo(data);
                this.score01 = response.data.score1;
                this.score02 = response.data.score2;
                this.score03 = response.data.score3;
                this.score04 = response.data.score4;
                this.score05 = response.data.score5;
                this.reviewTextBox = response.data.reviewText;
                this.reviewId = response.data.id;
                console.log("리뷰 내용 조회 성공", response.data);
            } catch (e) {
                console.log("리뷰 내용 조회 실패", e)
            }
        },
        async updateReview() {
            try {
                if (confirm("수정하시겠습니까?")) {
                    let data = {
                        score1: this.score01,
                        score2: this.score02,
                        score3: this.score03,
                        score4: this.score04,
                        score5: this.score05,
                        reviewText: this.reviewTextBox,
                        appId: this.paramAppId,
                    }
                    console.log("dddddddd", data);
                    await MatchDateService.updateReview(data);
                }
                this.$emit("closeReviewModal");
            } catch (e) {
                console.log(e);
            }
        }
    },
    async mounted() {
        await this.loadReviewInfo();
    }
}
</script>

<style>
.reviewWrap {
    margin: 3rem auto;
    max-width: 1140px;
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