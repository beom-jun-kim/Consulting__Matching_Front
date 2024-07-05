<template>
    <div class="matchingList">
        <NavCom />
        <div id="layoutSidenav">
            <SideNavCom />
            <checkJournalList />
        </div>
    </div>
</template>
  
<script>
// @ is an alias to /src
import NavCom from "@/common/admin/NavCom.vue";
import SideNavCom from "@/common/admin/SideNavCom.vue";
import checkJournalList from "@/components/admin/match/checkJournalList.vue"
export default {
    name: "checkJournalListView",
    components: {
        checkJournalList,
        NavCom,
        SideNavCom
    },
};
</script>
  