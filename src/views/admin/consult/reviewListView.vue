<template>
  <div class="consultList">
    <NavCom />
    <div id="layoutSidenav">
      <SideNavCom />
      <reviewList />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavCom from "@/common/admin/NavCom.vue";
import SideNavCom from "@/common/admin/SideNavCom.vue";
import reviewList from "@/components/admin/consult/reviewList.vue";
export default {
  name: "reviewListView",
  components: {
    reviewList,
    NavCom,
    SideNavCom
  },
};
</script>
