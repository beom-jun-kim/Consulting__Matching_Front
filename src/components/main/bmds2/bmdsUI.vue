<script>
const whyComponents = {};
const whatComponents = {};
const howComponents = {};

for (let i = 1; i <= 11; i++) {
    whyComponents[`Why${i}Com`] = () => import(`@/components/main/bmds3/why/Why${i}Com.vue`);
}

for (let i = 1; i <= 3; i++) {
    whatComponents[`What${i}Com`] = () => import(`@/components/main/bmds3/what/What${i}Com.vue`);
}

for (let i = 1; i <= 32; i++) {
    howComponents[`How${i}Com`] = () => import(`@/components/main/bmds3/how/How${i}Com.vue`);
}

export default {
    name: "bmdsUI",
    components: {
        ...whyComponents,
        ...whatComponents,
        ...howComponents,
    },
};
</script>
