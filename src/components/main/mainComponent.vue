<template>
  <div id="main_div">
    <header-component/>
    <containt-container/>
    <footer-component/>
  </div>
</template>
<script>
import HeaderComponent from '../main/HeaderComponent.vue';
import ContaintContainer from '../main/ContaintContainer.vue';
import FooterComponent from '../main/FooterComponent.vue';
export default {
  components: {HeaderComponent,ContaintContainer,FooterComponent},
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
#main_div {
  border: 1px solid black;
  width: 100%;
}
</style>
