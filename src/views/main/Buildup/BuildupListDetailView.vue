<template>
    <div>
        <Nav />
        <BuildupDetail />
        <Footer />
    </div>
</template>


<script>
/*eslint-disable*/
import Nav from "@/common/main/Nav.vue";
import BuildupDetail from "@/components/main/bmdsBuildup/BmdsBuildupDetailCom.vue";
import Footer from "@/common/main/Footer.vue"

export default {
    components: {
        Nav,
        BuildupDetail,
        Footer,
    },
}
</script>
