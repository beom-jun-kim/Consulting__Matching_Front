<template>
    <div class="matchingList">
        <NavCom />
        <div id="layoutSidenav">
            <SideNavCom />
            <matchingList />
        </div>
    </div>
</template>
  
<script>
// @ is an alias to /src
import NavCom from "@/common/admin/NavCom.vue";
import SideNavCom from "@/common/admin/SideNavCom.vue";
import matchingList from "@/components/admin/match/matchingList.vue"
export default {
    name: "matchingListView",
    components: {
        matchingList,
        NavCom,
        SideNavCom
    },
};
</script>
  