<template>
    <div class="menteeBmListWrap">
        <div class="menteeBmListBigTitle">
            <h1>{{this.$route.params.userName}} 님의 BMDS List</h1>
        </div>
        <ul class="menteeBmListBox">
            <li class="menteeBmListSub" v-for="(bm, index) in bmList" :key="index">
                <div class="menteeBmListSubBox" @click="goToMyBmDetail(bm.id)">
                    <div class="menteeBmListSubBoxTitle">
                        <span>{{ bm.title }}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import BuildupService from "@/services/main/BuildupService";

export default {
    name: "MenteeBmListPop",
    data() {
        return {
            bmList: [
                {
                    title: "title01"
                },
                {
                    title: "title02"
                },
                {
                    title: "title03"
                },
                {
                    title: "title04"
                },
                {
                    title: "title05"
                },
                {
                    title: "title06"
                },
                {
                    title: "title07"
                },
            ],
        }
    },
    methods: {
        async loadBmList() {
            
            try {
                const response = await BuildupService.getBuildUpBmds(this.$route.params.userId);
                console.log("멘티리스트 조회 성공", response.data.data);

                this.bmList = response.data.data


            } catch(e) {
                console.log("멘티리스트 조회 실패", e.response.data.message);
            }
        },
        async goToMyBmDetail(id) {
            this.$router.push(`/main/bmds/buildup/listDetail/${id}`);
        }
    }, 
    async mounted() {
        await this.loadBmList();
    }
};
</script>

<style>
.menteeBmListWrap {
    max-width: 1240px;
    margin: 50px auto;
}

.menteeBmListBigTitle {
    padding-left: 30px;
}

.menteeBmListWrap .menteeBmListBox {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
}

.menteeBmListWrap .menteeBmListSub {
    width: 33.3333%;
    padding: 30px;
}

.menteeBmListWrap .menteeBmListSubBox {
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    cursor: pointer;
    background: rgb(138, 205, 138);
}

.menteeBmListWrap .menteeBmListSubBox:hover {    
    background: rgba(138, 205, 138, 0.385);
}
</style>