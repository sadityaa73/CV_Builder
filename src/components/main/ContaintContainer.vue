<template>
  <div id="container-div">
    <forms-container/>
  </div>
</template>
<script>
import FormsContainer from '../Forms/FormsContainer.vue';
export default {
  components: {FormsContainer},
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
#container-div{
    display: flex;
    justify-content: center;
    align-items:center ;
    min-height: 85vh;
    overflow: hidden;
}
</style>