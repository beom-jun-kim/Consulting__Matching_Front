<template>
  <div class="black-bg">
    <div class="white-bg">
      <button @click="$emit('close', false)" class="close-button">X</button>
      <!-- 사이드바 -->
      <div class="sidebar">
        <div class="modalSideBarTitle">
          The 7 Stages of Initial BM Build-up for Startup's
        </div>
        <div class="modalSideBarBtnList">
          <div class="modalSideBarBtnList2">
            <div v-for="(bm, i) in bmds" :key="i">
              <label :for="'btn' + i" class="modalSideBarBtn" :class="{ active: activeBtnIndex === i }"
                @click="handleButtonClick(i)" :checked="activeBtnIndex === i || i === 0">
                <input type="radio" name="videoCategories" :id="'btn' + i" :checked="activeBtnIndex === i" />
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
const basicComponents = {};

for (let i = 1; i <= 22; i++) {
  basicComponents[`basic${i}Com`] = () =>
    import(`@/components/main/bmdsBasic/modal/basic${i}Com.vue`);
}

export default {
  data() {
    return {
      activeBtnIndex: 0,
      bmds: [
        "기회탐색",
        "기회탐색 input",
        "기회탐색3",
        "기회탐색4",
        "아이디에이션1",
        "아이디에이션2",
        "페르소나 설계",
        "POV 정의",
        "아이템핵심가ㄷ",
        "step3",
        "step3-1",
      ],
    };
  },
  components: {
    ...basicComponents,
  },
  computed: {
    selectedComponent() {
      // Generate the component name based on activeBtnIndex
      return `basic${this.activeBtnIndex + 1}Com`;
    },
  },
  methods: {
    handleButtonClick(index) {
      this.activeBtnIndex = index;
    },
  },
};
</script>

<style>
@import url("../../../../../public/css/main/styles.css");
</style>
