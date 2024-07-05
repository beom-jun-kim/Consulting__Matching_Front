<template>
  <div>
    <Nav />
    <UserJoin />
    <Footer />
  </div>
</template>

<script>
import Nav from "@/common/main/Nav.vue";
import Footer from '@/common/main/Footer.vue'
import UserJoin from '@/components/main/join/UserJoin.vue';
export default {
  components: { Nav, UserJoin, Footer },

};
</script>
