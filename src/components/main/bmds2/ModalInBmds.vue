<template>
    <div class="black-bg">
        <div class="white-bg">
            <button @click="$emit('close', false)" class="close-button">X</button>
            <!-- 사이드바 -->
            <div class="sidebar">
                <div class="modalSideBarTitle">
                    11 Blocks<br />Business Model<br />Design
                </div>
                <div class="modalSideBarBtnList">
                    <div class="modalSideBarBtnList2">
                        <div v-for="(bm, i) in bmds" :key="i">
                            <label :for="'btn' + i" class="modalSideBarBtn" :class="{ active: activeBtnIndex === i }"
                                @click="handleButtonClick(i)" :checked="activeBtnIndex === i || i === 0">
                                <input type="radio" name="videoCategories" :id="'btn' + i"
                                    :checked="activeBtnIndex === i" />
                                {{ bm }}
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div style="margin: 0 3rem">
                <!-- Dynamic component rendering based on activeBtnIndex -->
                <component :is="selectedComponent" />
            </div>
        </div>
    </div>
</template>
  
<script>
const whyComponents = {};
const whatComponents = {};
const howComponents = {};

for (let i = 1; i <= 11; i++) {
    whyComponents[`Why${i}Com`] = () => import(`@/components/main/bmds3/why/Why${i}Com.vue`);
}

for (let i = 1; i <= 3; i++) {
    whatComponents[`What${i}Com`] = () => import(`@/components/main/bmds3/what/What${i}Com.vue`);
}

for (let i = 1; i <= 32; i++) {
    howComponents[`How${i}Com`] = () => import(`@/components/main/bmds3/how/How${i}Com.vue`);
}
export default {
    data() {
        return {
            activeBtnIndex: 0,
            bmds: [
                '마켓 인사이트', '고객/문제 정의', '기존 대안 분석',
                '해결안', '가치 선정', '핵심 자원',
                '핵심 파트너', '핵심 활동', '수익모델',
                '고객 경험 설계', '피드백'
            ]
        }
    },
    components: {
        ...whyComponents,
        ...whatComponents,
        ...howComponents,
    },
    computed: {
        selectedComponent() {
            // Generate the component name based on activeBtnIndex
            return `Why${this.activeBtnIndex + 1}Com`;
        }
    },
    methods: {
        handleButtonClick(index) {
            this.activeBtnIndex = index;
        }
    }
}
</script>
  
<style>
@import url('../../../../public/css/main/styles.css');
</style>
  