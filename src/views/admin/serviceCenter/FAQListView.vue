<template>
  <div class="userList">
    <NavCom />
    <div id="layoutSidenav">
      <SideNavCom />
      <FAQList />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavCom from "@/common/admin/NavCom.vue";
import SideNavCom from "@/common/admin/SideNavCom.vue";
import FAQList from "@/components/admin/serviceCenter/FAQList.vue";
export default {
  name: "FAQListView",
  components: {
    FAQList,
    NavCom,
    SideNavCom
  },
};
</script>
