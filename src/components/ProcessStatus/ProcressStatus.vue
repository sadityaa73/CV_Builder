<template>
  <div id="process-div">
    <div class="component-status" id="name">Name</div>
    <div class="component-status" id="contact">Contact</div>
    <div class="component-status" id="qualification">Qualification</div>
    <div class="component-status" id="skill">Skill</div>
    <div class="component-status" id="project">Project</div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default{
    components:{},
    data()
    {
        return{
        }
    },
    computed:{
      ...mapState(['currentFormStage']),
    },
    mounted(){
    },
    methods:{
      currentForm()
      {
        let formTab = document.querySelectorAll(".component-status");
        for(let i=0;i<=formTab.length-1;i++)
        {
            if(formTab[i].id === this.currentFormStage)
            {
              formTab[i].style.backgroundColor="green";
              formTab[i].style.color="white";
              formTab[i].style.boxShadow="0px 13px 18px 3px grey"

            }
            else{
              formTab[i].style.backgroundColor="#3299f7";
              formTab[i].style.color="white";
              formTab[i].style.boxShadow="none";
            }
        }
      }
    }
}
</script>
<style scoped>
#process-div{
    min-height: 8vh;
    min-width: 644px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 54px;
}
.component-status{
    border: 1px solid;
    width: 94px;
    height: 43px;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-family: "Playpen Sans";
    background: #f5f5f5;
    transition: 0.5s ease-out;
}
</style>