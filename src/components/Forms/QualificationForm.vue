<template>
  <div id="form-div">
    <div class="heading-div">
      <h3 class="heading">Add Your Qualifications.</h3>
    </div>
    <div class="education-detail-container">
      <div class="education-details-div">
        <span><img src="../../assets/education.png" alt="education" /></span>
        <input
          type="text"
          placeholder="Secondary Education"
          v-model="secondary"
          class="education-details"
        />
      </div>
      <div class="education-details-div">
        <span><img src="../../assets/education.png" alt="education" /></span>
        <input
          type="text"
          placeholder="Higher Secondary Education"
          v-model="higherSecondary"
          class="education-details"
        />
      </div>
      <div class="education-details-div">
        <span><img src="../../assets/education.png" alt="education" /></span>
        <input
          type="text"
          placeholder="Graduation"
          v-model="graduation"
          class="education-details"
        />
      </div>
      <button class="add-btn" @click="next">Next</button>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      secondary: "",
      higherSecondary: "",
      graduation: "",
    };
  },
  methods: {
    next() {
      let educationField = document.querySelectorAll(".education-details");
      for (let i = 0; i <= educationField.length - 1; i++) {
        if (educationField[i].value === "") {
          educationField[i].style.border = "2px solid red";
        } else {
          educationField[i].style.border = "2px solid green";
        }
      }
      this.$emit('getEducationalDetails',this.getEducationalDetails());
    },
    getEducationalDetails()
    {
      let educationDetails = {
        secondary: this.secondary,
        higherSecondary: this.higherSecondary,
        graduation: this.graduation,
        qualificationFormStatus:false,
        skillFormStatus:true
      };
      return educationDetails;
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
  animation:rightToLeft 2s;
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
  font-family: "Playpen sans";
}
.education-detail-container {
  height: 246px;
  width: 281px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}
.education-details-div {
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
.education-details {
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
.education-details:hover {
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
  margin: 0px;
  transition: All 0.4s;
}
.add-btn:active {
  box-shadow: 1px 10px 22px 4px grey;
}
</style>
