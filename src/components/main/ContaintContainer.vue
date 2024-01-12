<template>
  <div id="container-div">
    <process-status/>
    <forms-container/>
  </div>
</template>
<script>
import ProcessStatus from "../ProcessStatus/ProcressStatus.vue";
import FormsContainer from '../Forms/FormsContainer.vue';
export default {
  components: {ProcessStatus,FormsContainer},
  data() {
    return {};
  },
  methods: {
   
  },
};
</script>
<style scoped>
#container-div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center ;
    min-height: 85vh;
    overflow: hidden;
}
</style>