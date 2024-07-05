<template>
    <div class="mp_wrap">
        <div class="mp_top">
            <div class="titleBox">
                <h4>멘토링 신청서</h4>
                <input type="hidden" v-model="appId">
                <input type="hidden" v-model="userId">
            </div>
            <button @click="$emit('closeApplyModal')"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <form class="resultsReport mp_contents" id="formMentorApplication">
            
            <div class="mp_container">
                <div class="mp_table">
                    <div>
                        <label>제목</label>
                    </div>
                    <div>
                        <input disabled type="text" id="txtTitle" v-model="mentoringTitle">
                    </div>
                </div>

                <div class="mp_table">
                    <div>
                        <label>분야선택</label>
                    </div>
                    <div>
                        <div>
                            <div>
                                <input disabled type="checkbox" id="chkSelf" 
                                    value="경영일반(사업화전략)" v-model="mentoringCate">
                            </div>
                            <div style="float: left;text-align: left;">경영일반(사업화전략)</div>
                            <div style="float: left;">
                                <input disabled type="checkbox" id="chkSelf" 
                                    value="BM수립 및 고도화" v-model="mentoringCate">
                            </div>
                            <div style="float: left;">BM수립 및 고도화</div>
                        </div>
                        <div>
                            <div>
                                <input disabled type="checkbox" id="chkSelf" 
                                    value="투자유치(IR전략)" v-model="mentoringCate">
                            </div>
                            <div>투자유치(IR전략)</div>
                            <div>
                                <input disabled type="checkbox" id="chkSelf" value="R&D지원" v-model="mentoringCate">
                            </div>
                            <div>R&D지원</div>
                        </div>
                        <div>
                            <div>
                                <input disabled type="checkbox" id="chkSelf" value="영업/마케팅" v-model="mentoringCate">
                            </div>
                            <div>영업/마케팅</div>
                            <div>
                                <input disabled type="checkbox" id="chkSelf" value="특허/법률" v-model="mentoringCate">
                            </div>
                            <div>특허/법률</div>
                        </div>
                        <div>
                            <div>
                                <input disabled type="checkbox" id="chkSelf" value="재무/회계" v-model="mentoringCate">
                            </div>
                            <div>재무/회계</div>
                            <div>
                                <input disabled type="checkbox" id="chkSelf" value="정부지원연계" v-model="mentoringCate">
                            </div>
                            <div>정부지원연계</div>
                        </div>
                        <div>
                            <div>
                                <input disabled type="checkbox" id="chkSelf" v-model="chkCateEtc">
                            </div>
                            <div>기타</div>
                            <div>
                                <input disabled type="text" id="cateEtc" value="" v-model="cateEtc" style="margin-left:6px">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mp_table">
                    <div>
                        <label>진행일시</label>
                    </div>
                    <div>
                        {{ formattedMentorApp(mentoringDate) }}
                    </div>
                </div>

                <div class="mp_table">
                    <div>
                        <label>진행방법</label>
                    </div>
                    <div>
                        <div>
                            <input disabled type="radio" name="mentoringWay" value=1 v-model="mentoringWay">
                        </div>
                        <div>대면</div>
                        <div>
                            <input disabled type="radio" name="mentoringWay" value=0 v-model="mentoringWay">
                        </div>
                        <div>비대면</div>
                        <div>
                            <input disabled type="radio" name="mentoringWay" value=2 v-model="mentoringWay">
                        </div>
                        <div>상관없음</div>
                    </div>
                </div>

                <div class="mp_table">
                    <div>
                        <label>BMDS</label>
                    </div>
                    <div>
                        {{ bmTitle}}
                    </div>
                </div>
                <div class="container submit">
            <button type="button" @click="doMentorApply">닫기</button>
        </div>
            
            </div>
        </form>

        

    </div>
</template>

<script>
import jwtDecode from "jwt-decode";
import BuildupService from "@/services/main/BuildupService";
import MatchDateService from "@/services/main/UserMatch"

export default {
    name: "MentoringApplication",
    props: ['paramAppId'],
    data() {
        return {
            chkSelf: false,
            mentorMail: "",
            mentoringTitle: "",
            mentoringWay: 2,
            bmTitle: "",
            chkCateEtc: false,
            cateEtc: "",
            mentoringCate: [],
            mentoringDate: new Date(),
            bmdsList: [],
            appId: this.paramAppId,
            userId: 0
        }
    },
    methods: {
        doMentorApply() {
            this.$emit('closeApplyModal');
        },
        getUserId() {
            const tokenData = localStorage.getItem("user");
            const parsedToken = JSON.parse(tokenData);
            const accessToken = parsedToken.accessToken;
            const decodedToken = jwtDecode(accessToken);
            const userId = decodedToken.id;
            return userId;
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
        formattedMentorApp(date) {
            const format = new Date(date);
            format.setHours(format.getHours() + 18);
            const formatDate = format.toISOString().slice(0, 16).replace("T", " ");
            return formatDate;
        },
        async loadApplication(appId) {
            try {
                let data = {
                    appId: appId
                };

                const response = await MatchDateService.application(data);
                var application = response.data;
                console.log("신청서 조회 성공", application);

                this.appId = application[0].id;
                this.chkSelf = application[0].isSelf;
                this.userId = application[0].userId;
                this.mentorMail = application[0].mentoEmail;

                this.mentoringTitle = application[0].title;

                var tagNameArray = application[0].tagName.split(", ");
                this.mentoringCate = tagNameArray;

                this.mentoringDate = new Date(application[0].mentoringAt).toISOString().slice(0, 16);
                this.mentoringWay = application[0].place;

                this.bmTitle = application[0].bmTitle;


            } catch (e) {
                console.log("신청서 조회 실패", e.response.data.message);
            }
        },
    },
    async mounted() {
        this.userId = this.getUserId();
        await this.loadUserBmds(this.getUserId());
        await this.loadApplication(this.paramAppId);
    }
};
</script>

<style scoped>

</style>