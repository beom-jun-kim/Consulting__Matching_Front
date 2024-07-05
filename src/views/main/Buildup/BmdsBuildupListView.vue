<template>
    <div>
        <Nav />
        <BmBuildupList />
        <Footer />
    </div>
</template>

<script>
import Nav from "@/common/main/Nav.vue";
import BmBuildupList from "@/components/main/bmdsBuildup/BmBuildupList.vue";
import Footer from "@/common/main/Footer.vue"
export default {
    components: {
        Nav,
        BmBuildupList,
        Footer
    }

}
</script>

<style></style>