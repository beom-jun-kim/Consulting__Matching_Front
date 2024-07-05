<template>
  <div class="BMList">
    <NavCom />
    <div id="layoutSidenav">
      <SideNavCom />
      <BMList />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavCom from "@/common/admin/NavCom.vue";
import SideNavCom from "@/common/admin/SideNavCom.vue";
import BMList from "@/components/admin/BM/BMList.vue";
export default {
  name: "BMListVue",
  components: {
    BMList,
    NavCom,
    SideNavCom
  },
};
</script>
