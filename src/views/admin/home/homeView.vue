<template>
  <div class="home">
    <NavCom />
    <div id="layoutSidenav">
      <SideNavCom />
      <homeCom />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavCom from "@/common/admin/NavCom.vue";
import SideNavCom from "@/common/admin/SideNavCom.vue";
import homeCom from "@/components/admin/home/homeCom.vue";
export default {
  name: "homeView",
  components: {
    homeCom,
    NavCom,
    SideNavCom
  },
};
</script>
