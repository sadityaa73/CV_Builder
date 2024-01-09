<template>
  <div id="form-div">
    <div class="heading-div">
      <h3 class="heading">Add Your Works/Project Details.</h3>
    </div>
    <div class="project-detail-container">
      <div class="project-details-div">
        <span><img src="../../assets/works.png" alt="work" /></span>
        <input
          type="text"
          placeholder="Name Of Your Project/Works."
          v-model="projectName"
          class="project-details"
        />
      </div>
    </div>
    <div class="skill-bucket-div">
      <div class="skill-bucket">
        <textarea
          name="decription"
          id="description"
          placeholder="Explain Your Project/Work... "
          v-model="description"
          cols="30"
          rows="10"
        ></textarea>
      </div>
    </div>
    <button class="add-btn" @click="add()">
      <span><img src="../../assets/add_icon.png" alt="Add" /></span>Add
    </button>
    <div class="skill-bucket-div">
      <div class="project-bucket" v-for="(project,index) in projectDetails" :key="index">
          <p class="project-list">{{project.projectHeading}}</p>
          <span @click="close(index)"
            ><img
              src="../../assets/cross_icon.png"
              alt="cross"
              style="height: 14px; width: 15px"
          /></span>
      </div>
    </div>
    <div class="button-div">
      <button id="btn-next" @click="next()">Next</button>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      projectName:"",
      description:"",
      projectDetails:[]
    };
  },
  methods: {
    add(){
      let projectName = document.querySelector(".project-details");
      let description = document.querySelector("#description");
      if(projectName.value==="")
      {
        projectName.style.border="2px solid red";
      }
      else{
        projectName.style.border="2px solid green";
      }
      if(description.value==="")
      {
        description.style.border="2px solid red";
      }
      else{
        description.style.border="2px solid green";
      }
      if(projectName.value===""||description.value==="")
      {
        return;
      }else
      {
        let workDetails={
          projectHeading:this.projectName,
          aboutProject:this.description
        }
        this.projectDetails.push(workDetails);
        this.projectName="";
        this.description="";
        console.log("printing projectDetails",this.projectDetails);
      }
    }
  },
};
</script>
<style scoped>
#form-div {
  border: 1px solid;
  min-height: 50vh;
  min-width: 500px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: whitesmoke;
}
.heading {
  font-size: 20px;
  font-family: "Playpen sans";
}
.project-detail-container {
  height: 64px;
  width: 281px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}
.project-details-div {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
span {
  display: flex;
  justify-content: center;
  align-items: center;
}
.project-details {
  border-radius: 7px;
  width: 100%;
  height: 100%;
  margin: 3px 2px 2px 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 16px;
  font-family: "Playpen Sans";
  color: black;
  transition: all 0.4s;
}
.project-details:hover {
  box-shadow: 1px 10px 22px 4px grey;
}
.add-btn {
  border: none;
  border-radius: 7px;
  background: #c6c4c4;
  width: 96px;
  height: 38px;
  font-size: 15px;
  font-family: Playpen Sans;
  color: black;
  transition: all 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 18px;
  transition: All 0.4s;
}
.add-btn:active {
  box-shadow: 1px 10px 22px 4px grey;
}
.skill-bucket-div {
  border: 1px solid;
  width: 403px;
  min-height: 147px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}
.skill-bucket {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  margin: 7px;
  box-shadow: 0px 4px 10px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-family: playpen sans;
}
#description {
  width: 100%;
  border-radius: 7px;
}
.project-bucket-div{
  border: 1px solid;
  width: 403px;
  min-height: 147px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}
.project-bucket{
  width: 79px;
  height: 31px;
  border-radius: 10px;
  margin: 7px;
  box-shadow: 0px 4px 10px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-family: playpen sans;
}
.button-div {
  margin: 7px;
  /* border: 1px solid; */
  width: 96px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#btn-next {
  border: none;
  border-radius: 7px;
  background: #c6c4c4;
  width: 100%;
  height: 100%;
  font-size: 15px;
  font-family: Playpen Sans;
  color: black;
  transition: all 0.2s;
}
#btn-next:active {
  box-shadow: 1px 10px 22px 4px grey;
}
</style>
