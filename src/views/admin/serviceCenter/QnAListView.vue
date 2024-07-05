<template>
  <div class="userList">
    <NavCom />
    <div id="layoutSidenav">
      <SideNavCom />
      <QnAList />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavCom from "@/common/admin/NavCom.vue";
import SideNavCom from "@/common/admin/SideNavCom.vue";
import QnAList from "@/components/admin/serviceCenter/QnAList.vue";
export default {
  name: "QnAListView",
  components: {
    QnAList,
    NavCom,
    SideNavCom
  },
};
</script>
