<template>
  <div>
    <Nav />
    <FindEmailPass />
    <Footer />
  </div>
</template>

<script>
import Nav from "@/common/main/Nav.vue";
import FindEmailPass from "@/components/main/FindEmailPass.vue"
import Footer from '@/common/main/Footer.vue'
export default {
  name: "FindEmailPassView",
  components: { Nav, FindEmailPass, Footer },
};
</script>

<style></style>
