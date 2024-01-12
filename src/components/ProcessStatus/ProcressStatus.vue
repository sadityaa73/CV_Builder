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
export default{
    props:['currentFormStatus'],
    components:{},
    data()
    {
        return{}
    },
    mounted(){
    },
    methods:{}
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
}
</style>