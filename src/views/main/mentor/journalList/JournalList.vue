
<template>
    <div>
    <div class="sp_wrap">

        <Nav />
        <div class="sp_container">
            <h6> {{this.$route.params.title}} 멘토링 일지내역</h6>
            <div class="journalListWrap">
            <div class="journalBar">
                <div class="journalListTitle">
                    
                </div>
                <ul>
                    <li class="journalDateBox" v-for="(journal, index) in journalList" :key="index">
                        <router-link :to="`/main/mentor/journal/${journal.id}`">
                            <div class="journalContent">
                                <div class="journalDate">
                                    차수: <span>{{ journal.degree }}</span>
                                </div>
                                <div class="journalDate">
                                    생성일시: <span>{{ journal.createAtFormat }}</span>
                                </div>
                                <div class="journalSubject">
                                    주제: <span>{{ journal.subject.length > 5 ? `${journal.subject.slice(0,5)}...` : journal.subject }}</span>
                                </div>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    </div>
    <Footer />
</div>
</template>

<script>
import MatchDateService from "@/services/main/UserMatch";
import Nav from "@/common/main/Nav.vue";
import Footer from "@/common/main/Footer.vue";
// import jwtDecode from "jwt-decode";

export default {
    name: "JournalList",
    components: {
        Nav,
        Footer,
    },
    data() {
        return {
            journalList: [
                {
                    id: 1,
                    degree: 1,
                    createAtFormat: "2024.05.19",
                    subject: "멘티 요구사항(주제01)",
                },
                {
                    id: 2,
                    degree: 2,
                    createAtFormat: "2024.05.20",
                    subject: "멘티 요구사항(주제02)",
                },
                {
                    id: 3,
                    degree: 3,
                    createAtFormat: "2024.05.21",
                    subject: "멘티 요구사항(주제03)",
                },
                {
                    id: 4,
                    degree: 4,
                    createAtFormat: "2024.05.22",
                    subject: "멘티 요구사항(주제04)",
                },
                {
                    id: 5,
                    degree: 5,
                    createAtFormat: "2024.05.23",
                    subject: "멘티 요구사항(주제05)",
                },
                {
                    id: 6,
                    degree: 6,
                    createAtFormat: "2024.05.24",
                    subject: "멘티 요구사항(주제06)",
                },
                {
                    id: 7,
                    degree: 7,
                    createAtFormat: "2024.05.25",
                    subject: "멘티 요구사항(주제07)",
                },
                {
                    id: 8,
                    degree: 8,
                    createAtFormat: "2024.05.26",
                    subject: "멘티 요구사항(주제08)",
                },
                {
                    id: 9,
                    degree: 9,
                    createAtFormat: "2024.05.27",
                    subject: "멘티 요구사항(주제09)",
                },
                {
                    id: 10,
                    degree: 10,
                    createAtFormat: "2024.05.28",
                    subject: "멘티 요구사항(주제10)",
                },
            ]
        }
    },
    methods: {
        async loadJournalList(appId) {
            try{
                let data = {
                    appId : +appId
                };

                const response = await MatchDateService.loadJournalList(data);
                console.log("일지 리스트 조회 성공", response.data);

                this.journalList = response.data;

            } catch(e) {
                console.log("일지 리스트 조회 실패", e.response.data.message);
            }
        }
    },
    async mounted() {
        
        await this.loadJournalList(this.$route.params.appId);

    }
};
</script>

<style>
.journalListTitle {
    padding-left: 10px;
}

.journalListWrap {
    max-width: 1440px;
    margin: 50px auto;
}

.journalBar ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
}

.journalDateBox {
    width: 33.3333%;
    padding: 10px;
    cursor: pointer;
}

.journalDateBox a {
    color: inherit;
    text-decoration: none;
}

.journalDateBox:hover .journalContent {
    background: #f0e7fc6d;
    color: #000000;
}

.journalContent {
    background: #f0e7fc;
    height: 150px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>