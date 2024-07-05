<template>
    <div class="mp_wrap">
        <div class="mp_top">
            <div class="titleBox">
                <h4>멘토링 신청서</h4>
                <input type="hidden" v-model="appId">
                <input type="hidden" v-model="userId">
            </div>
            <button
                
                @click="$emit('closeApplyModal')"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <form class="resultsReport mp_contents" id="formMentorApplication">
            
            <div class="mp_container">
                <div class="mp_table" v-if="getUser().role === 's-consultant'">
                    <div>
                        <input type="checkbox" id="chkSelf" value="1" v-model="chkSelf">
                        <label for="chkSelf">셀프멘토링</label>
                    </div>
                </div>

                <div class="mp_table">
                    <div>
                        <label>지정멘토아이디</label>
                    </div>
                    <div>
                        <input type="text" id="mentorMail" placeholder="이메일 주소를 입력하세요." v-model="mentorMail">
                    </div>
                </div>

                <div class="mp_table">
                    <div>
                        <label>제목</label>
                    </div>
                    <div>
                        <input type="text" id="txtTitle" v-model="mentoringTitle">
                    </div>
                </div>

                <div class="tagsCheckBox mp_table">
                    <div>
                        <label>분야선택</label>
                    </div>
                    <div id="cateArea">
                        <div>
                            <div>
                                <input type="checkbox" id="chkSelf" value="경영일반(사업화전략)" v-model="mentoringCate">
                            </div>
                            <div>경영일반(사업화전략)</div>
                            <div>
                                <input type="checkbox" id="chkSelf" value="BM수립 및 고도화" v-model="mentoringCate">
                            </div>
                            <div>BM수립 및 고도화</div>
                        </div>
                        <div>
                            <div>
                                <input type="checkbox" id="chkSelf" value="투자유치(IR전략)" v-model="mentoringCate">
                            </div>
                            <div>투자유치(IR전략)</div>
                            <div>
                                <input type="checkbox" id="chkSelf" value="R&D지원" v-model="mentoringCate">
                            </div>
                            <div>R&D지원</div>
                        </div>
                        <div>
                            <div>
                                <input type="checkbox" id="chkSelf" value="영업/마케팅" v-model="mentoringCate">
                            </div>
                            <div>영업/마케팅</div>
                            <div>
                                <input type="checkbox" id="chkSelf" value="특허/법률"
                                    v-model="mentoringCate">
                            </div>
                            <div>특허/법률</div>
                        </div>
                        <div>
                            <div>
                                <input type="checkbox" id="chkSelf" value="재무/회계" v-model="mentoringCate">
                            </div>
                            <div>재무/회계</div>
                            <div>
                                <input type="checkbox" id="chkSelf" value="정부지원연계" v-model="mentoringCate">
                            </div>
                            <div>정부지원연계</div>
                        </div>
                        <div>
                            <input type="checkbox" id="chkSelf" value="기타" v-model="chkCateEtc">
                            <div>기타</div>
                            <div>
                                <input type="text" id="cateEtc" value="" v-model="cateEtc" style="margin-left: 6px">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mp_table">
                    <div>
                        <label>진행일시</label>
                    </div>
                    <div>
                        <input type="datetime-local" id="dateLocal" v-model="mentoringDate" :min="minDate">
                    </div>
                </div>

                <div class="mp_table ">
                    <div>
                        <label>진행방법</label>
                    </div>
                    <div class="mp_radio_table">
                        <div>
                            <input id="mentoringWay01" type="radio" name="mentoringWay" value=1
                                v-model="mentoringWay">
                        </div>
                        <label for="mentoringWay01">대면</label>
                        <div>
                            <input id="mentoringWay02" type="radio" name="mentoringWay" value=0
                                v-model="mentoringWay">
                        </div>
                        <label for="mentoringWay02">비대면</label>
                        <div>
                            <input id="mentoringWay03" type="radio" name="mentoringWay" value=2
                                v-model="mentoringWay">
                        </div>
                        <label for="mentoringWay03">상관없음</label>
                    </div>
                </div>

                <div class="mp_table">
                    <div>
                        <label>BMDS 선택</label>
                    </div>
                    <div>
                        <select name="bmdsList" id="bmdsList" v-model="selectedBuildId">
                            <option :value="null" style="display: none;">BMDS를 선택하여 주세요</option>
                            <option :value="bmds.id" v-for="(bmds, index) in bmdsList" :key="index">{{ bmds.title }}
                            </option>
                        </select>
                    </div>
                    
                </div>
                <div class="container submit">
            <button type="button" @click="doMentorApply">신청하기</button>
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
            selectedBuildId: null,
            chkCateEtc: false,
            cateEtc: "",
            mentoringCate: [],
            mentoringDate: new Date().toISOString().slice(0, 16),
            bmdsList: [],
            appId: this.paramAppId,
            userId: this.getUser().id,
            minDate: null
        }
    },
    methods: {
        async doMentorApply() {

            const otherCategoriesSelected = this.mentoringCate.length > 0 || this.chkCateEtc;
            const oneTagName = this.mentoringCate.length > 0 && this.chkCateEtc || this.mentoringCate.length > 1;
            if (!otherCategoriesSelected) {
                alert("희망분야를 최소 하나 이상 선택해주세요.");
            } else if (!this.mentoringTitle) {
                alert("제목을 입력하여 주세요")
            } else if (oneTagName) {
                alert("희망분야는 신청서당 1개씩만 선택할 수 있습니다")
            } else if (this.chkCateEtc && this.cateEtc.trim() === "") {
                alert("기타 텍스트를 입력해주세요.");
            } else {
                if (confirm("저장하시겠습니까?")) {
                    if (this.chkCateEtc && this.cateEtc.trim() !== "") {
                        this.mentoringCate.push(this.cateEtc.trim());
                    }
                    try {
                        if (this.appId == 0) {
                            let data = {
                                userId: this.getUser().id,
                                isSelf: (this.chkSelf) ? 1 : 0,
                                mentoEmail: this.mentorMail,
                                title: this.mentoringTitle,
                                tagName: this.mentoringCate,
                                mentoringAt: this.mentoringDate,
                                place: +this.mentoringWay,
                                buildId: this.selectedBuildId
                            };
                            await MatchDateService.createMenoringAppliction(data);

                        } else {
                            let data = {
                                appId: this.appId,
                                userId: this.getUser().id,
                                isSelf: (this.chkSelf) ? 1 : 0,
                                mentoEmail: this.mentorMail,
                                title: this.mentoringTitle,
                                tagName: this.mentoringCate,
                                mentoringAt: this.mentoringDate,
                                place: +this.mentoringWay,
                                buildId: this.selectedBuildId
                            };
                            console.log(data);
                            await MatchDateService.appUpdate(data);
                        }

                        alert("저장되었습니다.");
                        this.$emit('closeApplyModal');

                    } catch (e) {
                        alert("저장에 실패하였습니다.");
                        console.log("저장실패", e);
                    }
                }
            }



            // 위 유효성 검사를 통과한 경우에만 저장 로직 실행

        },
        getUser() {
            const tokenData = localStorage.getItem("user");
            const parsedToken = JSON.parse(tokenData);
            const accessToken = parsedToken.accessToken;
            const decodedToken = jwtDecode(accessToken);
            return decodedToken;
        },

        getMinDate() {
            const today = new Date();
            this.minDate = today.toISOString().slice(0, 16);
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
        async loadApplication(appId) {
            try {
                let data = {
                    appId: appId
                };

                const response = await MatchDateService.application(data);
                var application = response.data;
                console.log("신청서 조회 성공", application);
                if (!application || application.length === 0) {
                    this.getMinDate();
                } else {
                    this.appId = application[0].id;
                    this.chkSelf = application[0].isSelf;
                    this.userId = application[0].userId;
                    this.mentorMail = application[0].mentoEmail;

                    this.mentoringTitle = application[0].title;

                    var tagNameArray = application[0].tagName.split(", ");
                    this.mentoringCate = tagNameArray;

                    const mentoringAt = new Date(application[0].mentoringAt);
                    mentoringAt.setHours(mentoringAt.getHours() - 15);
                    mentoringAt.setDate(mentoringAt.getDate() + 1);
                    this.mentoringDate = mentoringAt.toISOString().slice(0, 16);

                    this.mentoringWay = application[0].place;

                    this.selectedBuildId = application[0].buildId;
                }


            } catch (e) {
                console.log("신청서 조회 실패", e.response.data.message);
            }
        },
    },
    async mounted() {
        await this.loadUserBmds(this.getUser().id);
        await this.loadApplication(this.paramAppId);
        this.getMinDate();
    }
};
</script>

<style scoped></style>