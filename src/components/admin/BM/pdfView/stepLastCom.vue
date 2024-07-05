<template>
  <div>
    <div class="image-container"></div>
  </div>
</template>

<script>
export default {
  name: "stepLastCom",
  mounted() {
    console.log("stepLastCom mounted");
  },
};
</script>
<style scoped>
.image-container {
  width: 81rem;
  height: 44.5rem;
  position: relative;
  overflow: hidden;
  background-image: url("../../../../assets/buildup/last.png");
  z-index: 1;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
