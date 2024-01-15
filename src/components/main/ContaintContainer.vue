<template>
  <div id="container-div">
    <process-status ref="ProcessStatus" v-if="processTab"/>
    <forms-container @formStatusChanged="statusChanged" />
  </div>
</template>
<script>
import ProcessStatus from "../ProcessStatus/ProcressStatus.vue";
import FormsContainer from "../Forms/FormsContainer.vue";
import { mapState } from "vuex";
export default {
  components: { ProcessStatus, FormsContainer },
  data() {
    return {
      processTab:true
    };
  },
  mounted() {
    this.$refs.ProcessStatus.currentForm();
  },
  computed: {
    ...mapState(["currentFormStage"]),
  },
  methods: {
    statusChanged(event) {
      console.log("emit  funciton triggred",event);
      if(event!="cv")
      {
        this.processTab=true;
        this.$refs.ProcessStatus.currentForm();
      }
      else{
        this.processTab=false;
      }
    },
  },
};
</script>
<style scoped>
#container-div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 85vh;
  overflow: hidden;
}
</style>
