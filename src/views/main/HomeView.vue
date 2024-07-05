<template>
  <div class="">
    <main class="flex-shrink-0">
      <Nav />
      <Section />
      <Footer />
    </main>
  </div>
</template>

<script>
/*eslint-disable*/
import Nav from "@/common/main/Nav.vue";
import Section from "@/components/main/Section.vue";
import Footer from "@/common/main/Footer.vue";
export default {
  name: "HomeView",
  components: {
    Nav,
    Section,
    Footer,
  },
};
</script>
