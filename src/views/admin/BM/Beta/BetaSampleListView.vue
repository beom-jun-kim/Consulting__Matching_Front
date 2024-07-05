<template>
  <div class="BMSampleList">
    <NavCom />
    <div id="layoutSidenav">
      <SideNavCom />
      <BetaBmdsSample />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavCom from "@/common/admin/NavCom.vue";
import SideNavCom from "@/common/admin/SideNavCom.vue";
import BetaBmdsSample from "@/components/admin/BM/bmds-beta/BetaSampleList.vue";

export default {
  name: "betaBmdsSampleList",
  components: {
    BetaBmdsSample,
    NavCom,
    SideNavCom,
  },
};
</script>
