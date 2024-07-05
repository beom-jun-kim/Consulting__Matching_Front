<template>
    <div>
        <div>
            <h1>유저조회 상세페이지</h1>
        </div>
        <select name="bmds-list" id="bmds-list">
            <option :value="i" v-for="(bm, i) in userBms" :key="i">{{ bm.title }}</option>
        </select>
    </div>
</template>
  
<script>
// import MatchDateService from "@/services/main/UserMatch";
import BMDSService from "@/services/main/BMDSService";
import jwtDecode from "jwt-decode";

export default {
    name: "UserCheckDetail",
    data() {
        return {
            userBms: [],
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
        // async getConsultantMatchBmds(id) {
        //     try {
        //         const response = await MatchDateService.getConsultantMatchBmds(id);
        //         this.userBms = response.data;
        //         console.log("성공",response.data);
        //     } catch (e) {
        //         console.log("실패",e.response.data.message);
        //     }
        // },
        async getBetaPpt3(id) {
            try {
                const response = await BMDSService.getBetaPpt3(id);
                this.userBms = response.data;
                console.log("성공",response.data);
            } catch (e) {
                console.log("실패",e.response.data.message);
            }
        }
    },
    mounted() {
        this.getBetaPpt3(this.getUserId());
    },
};
</script>
  
<style></style>
  