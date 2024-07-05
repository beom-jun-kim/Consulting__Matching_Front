<template>
    <div>
        <Nav />
        <div class="sp_wrap">
            <div class="sp_container">
                <h6>멘토링 매칭</h6>
                <div style="min-height: 700px;">
                    <div class="">
                        <table class="table" style="vertical-align: middle; text-align: center;">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">번호</th>
                                    <th scope="col">제목</th>
                                    <th scope="col">신청멘토</th>
                                    <th scope="col">신청일시</th>
                                    <th scope="col">매칭</th>
                                </tr>
                            </thead>
                            <tbody v-if="applicationList.length !== 0">
                                <template v-for="(application, appIndex) in applicationList">
                                    <template v-if="application.matchingList.length === 0" >
                                        <tr :key="appIndex">
                                            <td>{{ application.rowNo }}</td>
                                            <td>{{ application.title }}</td>
                                            <td colspan="3">해당 신청서에 수락한 멘토가 없습니다.</td>
                                        </tr>
                                    </template>
                                    <template else>
                                        <tr v-for="(match, index) in application.matchingList" :key="'match_' + appIndex + '_' + index">
                                            <td v-if="index == 0" :rowspan="application.matchingList.length">
                                                {{ application.rowNo }}
                                            </td>
                                            <td v-if="index == 0" :rowspan="application.matchingList.length">
                                                {{ application.title }}
                                            </td>
                                            <td>{{ match.mentoName }}</td>
                                            <td>{{ formattedMatchingList(match.updateAtFormat) }}</td>
                                            <td>
                                                <button @click="acceptPut(application.id, match.mentoId, match.mentoName)">수락하기</button>
                                            </td>
                                        </tr>
                                    </template>
                                </template>
                            </tbody>
                            <tbody v-else>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td>수락한 멘토가 없습니다</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
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
import MatchDateService from "@/services/main/UserMatch"

export default {
    name: "MenteeMatch",
    components: {
        Nav,
        Footer
    },
    data() {
        return {
            applicationList: []
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
        formattedMatchingList(date) {
            const format = new Date(date);
            format.setHours(format.getHours() + 18);
            const formatDate = format.toISOString().slice(0, 16).replace("T", " ");
            return formatDate;
        },
        async loadApplicationList(data) {
            try {
                const response = await MatchDateService.getMatchList(data);
                this.applicationList = response.data;
                console.log("매칭리스트 조회 성공", this.applicationList);
            } catch (e) {
                console.log("매칭리스트 조회 실패", e.response.data.message);
            }
        },
        async acceptPut(appId, mentoId, mentoName) {
            if (confirm("멘토: " + mentoName + " 멘토링을 진행하시겠습니까?")) {
                let data = {
                    userId: this.getUserId(),
                    appId,
                    mentoId,
                };

                try {
                    await MatchDateService.acceptPut(data);
                    alert("멘토: " + mentoName + " 와 매칭이 완료되었습니다.");
                    await this.loadApplicationList(data);
                    console.log("멘토링 매칭 완료", this.applicationList);

                } catch (e) {
                    console.log("멘토링 매칭 실패", e.response.data.message);
                }
            }

        }
    },
    async mounted() {
        let data = {
            userId: this.getUserId()
        };
        await this.loadApplicationList(data);
    }
};
</script>

<style></style>
