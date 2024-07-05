<template>
  <div class="consultList">
    <NavCom />
    <div id="layoutSidenav">
      <SideNavCom />
      <consultList />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavCom from "@/common/admin/NavCom.vue";
import SideNavCom from "@/common/admin/SideNavCom.vue";
import consultList from "@/components/admin/consult/consultList.vue";
export default {
  name: "consultListView",
  components: {
    consultList,
    NavCom,
    SideNavCom
  },
};
</script>
