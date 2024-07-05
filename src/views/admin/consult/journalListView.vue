<template>
  <div class="consultList">
    <NavCom />
    <div id="layoutSidenav">
      <SideNavCom />
      <journalList />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavCom from "@/common/admin/NavCom.vue";
import SideNavCom from "@/common/admin/SideNavCom.vue";
import journalList from "@/components/admin/consult/journalList.vue";
export default {
  name: "journalListListView",
  components: {
    journalList,
    NavCom,
    SideNavCom
  },
};
</script>
