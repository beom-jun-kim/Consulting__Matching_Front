<template>
  <div class="BMSampleList">
    <NavCom />
    <div id="layoutSidenav">
      <SideNavCom />
      <BMSampleList />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavCom from "@/common/admin/NavCom.vue";
import SideNavCom from "@/common/admin/SideNavCom.vue";
import BMSampleList from "@/components/admin/BM/BMSampleList.vue";
export default {
  name: "BMSampleListVue",
  components: {
    BMSampleList,
    NavCom,
    SideNavCom
  },
};
</script>
