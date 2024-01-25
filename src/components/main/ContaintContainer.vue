<template>
  <div id="container-div">
    <choose-template @status="formControl" v-if="chooseTemplate"/>
    <process-status ref="ProcessStatus" v-if="processTab"/>
    <forms-container @formStatusChanged="statusChanged" v-if="formContainer"/>
  </div>
</template>
<script>
import ChooseTemplate from "../Forms/ChooseTemplate.vue"
import ProcessStatus from "../ProcessStatus/ProcressStatus.vue";
import FormsContainer from "../Forms/FormsContainer.vue";
import { mapState } from "vuex";
export default {
  components: { ChooseTemplate,ProcessStatus, FormsContainer },
  data() {
    return {
      chooseTemplate:true,
      processTab:false,
      formContainer:false
    };
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
    formControl(event)
    {
      console.log(event);
      this.chooseTemplate = event.chooseTemplate;
      this.formContainer = event.formContainer;
      this.processTab = event.processStatus;
    }
  },
};
</script>
<style scoped>
#container-div {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  min-height: 85vh;
  overflow: hidden;
}
</style>
