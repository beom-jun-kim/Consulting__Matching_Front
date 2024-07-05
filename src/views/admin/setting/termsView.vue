<template>
  <div class="consultantAdd">
    <NavCom />
    <div id="layoutSidenav">
      <SideNavCom />
      <terms />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavCom from "@/common/admin/NavCom.vue";
import SideNavCom from "@/common/admin/SideNavCom.vue";
import terms from "@/components/admin/setting/terms.vue";
export default {
  name: "consultantAddView",
  components: {
    terms,
    NavCom,
    SideNavCom
  },
};
</script>
