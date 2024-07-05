<template>
    <div>
        <Nav />
        <div class="my-5">
            <div class="">
                <div id="modal2">
                    <div class="d-flex justify-content-center align-items-center mt-4">
                        <h1 class="Reko">내가 참여할 수 있는 정부지원사업 전체 리스트</h1>
                    </div>
                    <div class="container">
                        <div class="d-flex flex-wrap justify-content-end">
                            <router-link to="/main/roadMap" class="btn btn-secondary btn-lg px-4 me-md-2 preEB"
                                id="submitSearch">
                                뒤로가기
                            </router-link>
                        </div>
                        <hr />
                    </div>
                    <div class="mt-3">
                        <div class="row col-md-10 mx-auto">
                            <div v-if="Object.keys(groupedData1).length > 0">
                                <div v-for="(group, area) in groupedData1" :key="area" class="col-md-12 mb-3">
                                    <div class="sum2 d-flex justify-content-between mx-auto my-5 px-5">
                                        <div class="cardSum1 Reko">{{ area }}: {{ formatNumber(animatedValues[area]) }}원
                                        </div>
                                        <div class="cardSum1 Reko">{{ groupCounts[area] }}개</div>
                                    </div>
                                    <div class="d-flex flex-wrap rm_cont">
                                        <div v-for="(a, i) in group" :key="i" class="col-md-6 mb-3">
                                            <div class="card cardList2 mx-auto" :style="{'border': a.category == '지자체' ? '3px solid #B47AB4' : '3px solid #5FA3A8'}">
                                                <img :src="a.pathUrl" alt="사업공고" class="card-img-top img-fluid p-5" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-else style="text-align: center; margin-top: 10px;">
                                <h4>해당하는 지원사업이 조회되지 않았습니다</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex flex-wrap justify-content-center my-5">
                <router-link to="/main/roadMap" class="btn btn-secondary btn-lg px-4 me-md-2 preEB" id="submitSearch">
                    뒤로가기
                </router-link>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import RoadmapService from '@/services/main/RoadmapService';
import Nav from "@/common/main/Nav.vue";
import Footer from "@/common/main/Footer.vue";
export default {
    components: {
        Nav, Footer
    },
    data() {
        return {
            whereClause: '',
            okView1: [],
            okView2: [],
            sum1: 0,
            sum2: 0,
            sum3: 0,
            sum4: 0,
            animatedValues: {
                '글로벌': 0,
                '멘토링·컨설팅·교육': 0,
                '사업화': 0,
                '시설·공간·보육': 0,
                '융자': 0,
                '행사·네트워크': 0,
            },
            groupedData1: {},
            groupSums: {},
            groupCounts: {},
        };
    },
    methods: {
        formatNumber(num) {
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        },
        async fetchData(props) {
            console.log('props', props);
            let req = `(SELECT * FROM roadMap 
                  WHERE (isShow = 1 AND year = 2024) 
                  AND ${props} ORDER  BY CASE 
                  WHEN areas = '사업화' THEN 1
                  WHEN areas = '글로벌' THEN 2
                  WHEN areas = 'R&D' THEN 3
                  WHEN areas = '시설·공간·보육' THEN 4
                  WHEN areas = '멘토링·컨설팅·교육' THEN 5
                  WHEN areas = '행사·네트워크' THEN 6
                  WHEN areas = '인력' THEN 7
                  ELSE 99
                  END)
              `;

            let dto;
            if (!this.$route.params.userId) {
                dto = {
                    viewQuery: req,
                };
            } else {
                dto = {
                    viewQuery: req,
                    userId: this.$route.params.userId,
                };
            }
            try {
                const res = await RoadmapService.getRoadmap(dto);
                this.groupedData1 = this.groupBy(res.data, 'areas');
                for (const groupName in this.groupedData1) {
                    if (Object.prototype.hasOwnProperty.call(this.groupedData1, groupName)) {
                        const group = this.groupedData1[groupName];
                        await this.calculateTotalSupplyAmount(group);
                    }
                }
            } catch (err) {
                console.log(err);
            }
        },
        groupBy(array, key) {
            return array.reduce((result, item) => {
                const keyValue = item[key];
                (result[keyValue] = result[keyValue] || []).push(item);
                return result;
            }, {});
        },
        async calculateTotalSupplyAmount() {
            this.groupSums = {};

            for (const groupName in this.groupedData1) {
                if (Object.prototype.hasOwnProperty.call(this.groupedData1, groupName)) {
                    const group = Array.isArray(this.groupedData1[groupName]) ? this.groupedData1[groupName] : [this.groupedData1[groupName]];

                    // 그룹의 데이터 갯수 계산
                    const groupCount = group.length;
                    this.groupCounts[groupName] = groupCount;

                    const groupTotal = group.reduce((groupTotal, item) => groupTotal + Number(item.supply_amount), 0);
                    this.groupSums[groupName] = Math.round(groupTotal / 10000) * 10000;
                }
            }
            for (const key in this.groupSums) {
                const animatedValue = this.groupSums[key];
                const range = animatedValue - 0;
                const startTime = new Date().getTime();

                const update = () => {
                    const currentTime = new Date().getTime();
                    const elapsed = currentTime - startTime;
                    const progress = elapsed / 2000;

                    if (progress < 1) {
                        this.animatedValues[key] = Math.round(0 + range * progress);
                        requestAnimationFrame(update);
                    } else {
                        this.animatedValues[key] = animatedValue;
                    }
                };

                update();
            }

        },
    },
    mounted() {
        const whereClause = this.$route.params.whereClause;
        this.fetchData(whereClause);
    },
};
</script>


<style scoped>
.cardList {
    transition: 0.3s;
    background: #f6f5fa;
    width: 38rem;
    height: 540px;
    margin: 1.5% 0;
    border-radius: 15px;
    padding: 2% 1% 0;
    overflow: hidden;
    display: flex;
    justify-content: center;
    box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.2);
}

.cardList2 {
    width: 45rem;
    height: 66rem;
    margin: 1.5% 0;
    border-radius: 15px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.2);
}

.card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.titleH {
    width: 100%;
    height: 3.5rem;
    background: #f6f5fa;
    border: 2px solid #7f5cde;
    border-radius: 10px;
    font-size: 24px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: -2px;
}

.cardCon {
    padding: 0 20px;
    overflow-y: scroll;
    height: 22rem;
}

.card-content p {
    margin: 16px 0;
    color: #555;
}

.infos {
    font-size: 17px;
}

.sum1 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 3rem;
    height: 3.5rem;
    background: #695ca6;
    border-radius: 30px;
    color: white;
}

.sum2 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    margin-top: 3rem;
    height: 3.5rem;
    background: #695ca6;
    border-radius: 30px;
    color: white;
}

.cardSum1 {
    font-size: 25px;
    font-family: Reko !important;
    margin-top: 10px;
}

.btn-secondary {
    color: white !important;
    border: none !important;
    background: linear-gradient(45deg, #755fce, #5a86c3) !important;
    transition: background-color 0.3s, box-shadow 0.3s, transform 0.3s;
}

@import url('/public/css/main/styles.css');
</style>
