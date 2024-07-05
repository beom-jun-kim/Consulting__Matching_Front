<template>
  <div class="userAdd">
    <NavCom />
    <div id="layoutSidenav">
      <SideNavCom />
      <FAQDetail />
    </div>
  </div>
</template>

<script>
import NavCom from "@/common/admin/NavCom.vue";
import SideNavCom from "@/common/admin/SideNavCom.vue";
import FAQDetail from "@/components/admin/serviceCenter/FAQDetail.vue";
// @ is an alias to /src
export default {
  name: "FAQDetailView",
  components: {
    FAQDetail,
    NavCom,
    SideNavCom
  },
};
</script>
