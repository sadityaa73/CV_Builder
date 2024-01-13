<template>
  <div id="form-div">
    <div class="heading-div"><h3 class="heading">Add Your Skills.</h3></div>
    <div class="skill-detail-container">
      <div class="skill-details-div">
        <span><img src="../../assets/skill.png" alt="skill" /></span>
        <input
          type="text"
          placeholder="Add Your Skill."
          v-model="skill"
          class="skill-details"
        @keyup.enter="add"/>
      </div>
      <button class="add-btn" @click="add">
        <span><img src="../../assets/add_icon.png" alt="Add" /></span>Add
      </button>
    </div>
    <div class="skill-bucket-div">
        <div class="skill-bucket" v-for="(skillList,index) in skillList" :key=index>
         <p class="skill-list">{{skillList}}</p><span @click="close(index)"><img src="../../assets/cross_icon.png" alt="cross" style="height: 14px;
            width: 15px;"/></span>
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
      skill: "",
      skillList:[]
    };
  },
  methods: {
    add(){
        let addSkill = document.querySelector(".skill-details");
        if(addSkill.value==="")
        {
            addSkill.style.border="2px solid red";
            addSkill.classList.remove('skill-details');
            addSkill.classList.add('input-shaking');
            setTimeout( function(){
              addSkill.classList.remove('input-shaking');
              addSkill.classList.add('skill-details');
            },1000);
        }
        else{
            addSkill.style.border="2px solid green";
            this.skillList.push(this.skill);
            this.skill="";
        }
    },
    close(index)
    {
       for(let i=0;i<=this.skillList.length-1;i++)
       {
          if ( i === index)
          {
            let k = i;
             while(k<this.skillList.length)
             {
                this.skillList[k] = this.skillList[k+1];
                k++;
             }
          }
       }
       if(this.skillList.length >0)
       {this.skillList.length--;}
    },
    next(){
      if(this.skillList.length <=0)
     {
      alert("Please Add Atleast One Skill"); 
      return}
     this.$emit('getSkillDetails',this.getSkillDetails());
    },
    getSkillDetails()
    {
      let skillDetails={
        skillList : this.skillList,
        skillFormStatus:false,
        projectFormStatus:true
      }
      return skillDetails;
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
  animation:rightToLeft 1s;
}
@keyframes rightToLeft{
  0%{ transform: translateX(649px);
  }
  100%{
    transform: translateX(0px)
  }   
}
.heading {
  font-size: 20px;
  font-family: 'Playpen sans';
}
.skill-detail-container {
  height: 116px;
  width: 281px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}
.skill-details-div {
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
.skill-details {
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
.input-shaking {
  border-radius: 7px;
  width: 100%;
  height: 83%;
  margin: 3px 2px 2px 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 16px;
  font-family: "Playpen Sans";
  color: black;
  transition: all 0.4s;
  animation: shake 0.3s ease-in-out;
}

@keyframes shake {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(5px);
  }
  75% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0);
  }
}
.skill-details:hover {
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
.skill-bucket-div{
    border: 1px solid;
    width: 403px;
    min-height: 147px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
}
.skill-bucket{
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
  #btn-next:active{
    box-shadow: 1px 10px 22px 4px grey;
  }
</style>
