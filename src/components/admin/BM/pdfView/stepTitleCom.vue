<template>
  <div>
    <div class="image-container">
      <div class="form-control transparent-input preEB">
        {{ buildTitle }}
      </div>
    </div>
  </div>
</template>

<script>
import stepTitle from "../modal/js/stepTitle.js";

export default {
  name: "stepTitleCom",
  ...stepTitle,
};
</script>
<style scoped>
.image-container {
  width: 81rem;
  height: 44.5rem;
  position: relative;
  overflow: hidden;
  background-image: url("../../../../assets/buildup/title.png");
  z-index: 1;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.transparent-input {
  background-color: transparent;
  border: none;
  outline: none;
  box-shadow: none;
  position: absolute;
  top: 22.5rem;
  width: 36rem;
  height: 2.5rem;
  left: 43rem;
  font-size: 30px;
}
</style>
