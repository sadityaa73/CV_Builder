<template>
  <div id="container-div">
    <process-status ref="ProcessStatus"/>
    <forms-container @formStatusChanged="statusChanged"/>
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
  mounted(){
    this.$refs.ProcessStatus.currentForm();
  },
  methods: {
   statusChanged()
    {
      // this.getRefs();
      console.log("emit  funciton triggred")
      this.$refs.ProcessStatus.currentForm();
    },
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