<template>
    <div>
        <Nav />
        <MyBmDetail />
        <Footer />

    </div>
</template>


<script>
/*eslint-disable*/
import Nav from "@/common/main/Nav.vue";
import MyBmDetail from "@/components/main/bmds2/MyBmDetail.vue";
import Footer from "@/common/main/Footer.vue"

export default {
    components: {
        Nav,
        MyBmDetail,
        Footer,
    },
}
</script>
