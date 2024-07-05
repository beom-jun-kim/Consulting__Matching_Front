<template>
    <div>
        <div>
            <div class="menteeUserDetail">
                <div>
                    <div>
                        <!--
                        <div class="closeModal"><span @click="closeModal">x</span></div>
                        -->
                        <div class="nonModal">
                            <div class="nonModalContent">
                                <Journal class="journal" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import MatchDateService from "@/services/main/UserMatch";
import Journal from "@/components/main/Journal.vue";
// import preView from "@/components/main/bmdsBuildup/modal/preView.vue";
import jwtDecode from "jwt-decode";

export default {
    name: "JournalPop",
    components: {
        Journal
    },
    data() {
        return {
            bmdsList: [],
            buildId: 0,
            bmdsInfo: [],
            matchId: 1,
            userId: 0,
            appId: 0,
            tagName: ""
        };
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
        formatCreatedAtJournal(createdAt) {
            const options = {
                year: "numeric",
                month: "numeric",
                day: "numeric",
            };
            const formattedDate = new Intl.DateTimeFormat("ko-KR", options).format(new Date(createdAt));
            return formattedDate;
        },
        autoResize(textarea) {
            textarea.style.height = 'auto'; // 높이를 초기화하여 새로운 높이를 계산하기 위해
            textarea.style.height = textarea.scrollHeight + 'px'; // 새로운 높이를 적용
        }
    },
    async mounted() {
        console.log(this.$route.params.appId, this.$route.params.id, this.$route.params.buildId);
        const textareas = document.querySelectorAll('textarea');
        textareas.forEach(textarea => {
            textarea.addEventListener('input', () => {
                this.autoResize(textarea);
            });
        });
    }
};
</script>

<style>
td {
    text-align: center;
}

.preView .topMenu,
.preView .footer {
    display: none;
}

.pdf-container>div {
    border: none !important;
}

.menteeUserDetail {
    max-width: 1296px;
    margin: 0 auto;
    font-family: "Pretendard_Rgula" !important;
}

.showJournal {
    border: 1px solid #dbdbdb;
    background: none;
    padding: 5px 12px;
    margin: auto;
}

.nonModalWrap {
    position: relative;
}

.nonModal::-webkit-scrollbar {
    width: 8px;
}

.nonModal::-webkit-scrollbar-thumb {
    background: #dddddd;
    border-radius: 10px;
}

.nonModal::-webkit-scrollbar-track {
    background: #f8f6fb;
}

.journal .userInfo {
    display: block;
}

.journal .mentorInfo:first-child {
    margin-bottom: 25px;
}

.journal .activityLine {
    display: block;
}

.journal .activityLine label {
    width: 56px;
}

.journal .activityLine input {
    width: 216px;
}

.journal .activityLine div {
    margin-bottom: 8px;
}

.journal .teach p {
    margin-right: 12px;
}

.journal .activityLine input[type="radio"] {
    width: auto;
}

.journal .imageUploadWrap {
    display: block;
}

.journal .imageUpload div,
.journal .imageUpload {
    width: auto;
}

.journal .imageUploadWrap label {
    margin-bottom: 20px;
}

.preView .transformBtn {
    display: none !important;
}

.showJournalBtn {
    background-color: #13a7d7;
    padding: 12px 20px;
    border-radius: 25px;
    font-size: 18px;
    font-weight: bold;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin: 3rem auto;
    width: 270px;
}


.showJournalBtn .showJournal {
    color: #fff;
    border: none;
}

.closeModal {
    background: #6857a4;
    width: 100%;
    text-align: right;
    font-size: 25px;
    padding: 4px 15px;
    color: #eee;
    border-radius: 10px 10px 0 0;
}

.closeModal span {
    cursor: pointer;
}

tr th {
    border-top: 2px solid #777;
    text-align: center;
    padding: 10px 0px;
    border-bottom: 1px solid #dfdfdf;
    background: #f5f5f5 !important;
    font-size: 14px;
    color: #555;
}
</style>