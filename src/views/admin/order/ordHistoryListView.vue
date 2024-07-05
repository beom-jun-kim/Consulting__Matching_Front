<template>
  <div class="userList">
    <NavCom />
    <div id="layoutSidenav">
      <SideNavCom />
      <ordHistoryListVue />
    </div>
  </div>
</template>

<script>
import NavCom from "@/common/admin/NavCom.vue";
import SideNavCom from "@/common/admin/SideNavCom.vue";
import ordHistoryListVue from "@/components/admin/order/ordHistoryList.vue";
// @ is an alias to /src
export default {
  name: "ordHistoryListView",
  components: {
    ordHistoryListVue,
    NavCom,
    SideNavCom
  },
};
</script>
