<template>
    <div>
        <Nav />
        <MyBm />
        <Footer />
    </div>
</template>

<script>
import Nav from "@/common/main/Nav.vue";
import MyBm from "@/components/main/bmds2/MyBm.vue";
import Footer from "@/common/main/Footer.vue"
export default {
    components: {
        Nav,
        MyBm,
        Footer
    }

}
</script>

<style></style>