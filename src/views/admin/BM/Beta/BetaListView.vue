<template>
  <div class="BMList">
    <NavCom />
    <div id="layoutSidenav">
      <SideNavCom />
      <BetaList />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavCom from "@/common/admin/NavCom.vue";
import SideNavCom from "@/common/admin/SideNavCom.vue";
import BetaList from "@/components/admin/BM/bmds-beta/BetaList.vue";
export default {
  name: "betaBmdsList",
  components: {
    BetaList,
    NavCom,
    SideNavCom,
  },
};
</script>
