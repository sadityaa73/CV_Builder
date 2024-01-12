<template>
  <div id="form-div">
    <div class="heading-div">
      <h3 class="heading"></h3>
    </div>
    <div class="dp-div">
      <div class="uploaded-image">
        <img src="../../assets/profileImage.png" alt="image" class="output" />
      </div>
      <input
        type="file"
        accept="image/*"
        class="upload-dp"
        placeholder="Upload Image"
        @change="getImage($event)"
      />
    </div>
    <div class="input-container">
      <div class="input-div">
        <input
          type="text"
          v-model="firstName"
          name="fistname"
          placeholder="First Name"
          class="input"
        />
      </div>
      <div class="input-div">
        <input
          type="text"
          v-model="lastName"
          placeholder="Last Name"
          class="input"
        />
      </div>
    </div>
    <div class="button-div">
      <button id="btn-next" @click="next()">Next</button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["isNameForm", "isContactForm"],
  components: {},
  data() {
    return {
      firstName: "",
      lastName: "",
      imageSrc: "",
    };
  },
  mounted() {
  },
  methods: {
    next() {
      let input_value = document.querySelectorAll(".input");
      console.log(input_value);
       let count =0;
      for (let i = 0; i <= input_value.length - 1; i++) {
        if (input_value[i].value === "") {
          input_value[i].style.border = "2px solid red";
          count++;
        } else {
          input_value[i].style.border = "2px solid green";
          count--;
        }
      }
      if(count>-(input_value.length))
       {return;}
      this.$emit("getDetails", this.getDetails());
    },
    getImage(event) {
      console.log(event);
      let image = document.querySelector(".output");
      image.style.width = "181px";
      image.style.height = "138px";
      image.src = `${URL.createObjectURL(event.target.files[0])}`;
      this.imageSrc = URL.createObjectURL(event.target.files[0]);
    },
    getDetails() {
      let nameForm = false;
      let contactForm = true;
      let name = {
        firstName: this.firstName ? this.firstName : "null",
        lastName: this.lastName ? this.lastName : "null",
        ProfileImage: this.imageSrc ? this.imageSrc : "null",
        nameFormStatus: nameForm,
        contactFormStatus: contactForm ? contactForm : null,
      };
      return name;
    },
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
  animation: rightToLeft 1s;
}
@keyframes rightToLeft {
  0% {
    transform: translateX(649px);
  }
  100% {
    transform: translateX(0px);
  }
}
.heading {
  font-size: 20px;
  font-family: "Playpen sans";
}
.dp-div {
  border: 2px dashed;
  height: 172px;
  width: 222px;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.uploaded-image {
  width: 100%;
  height: 149px;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.output {
  width: 118px;
  height: 116px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.upload-dp {
  width: 169px;
}
.upload-btn {
  margin: 2px;
  height: 32px;
  border: none;
  border-radius: 7px;
  background: #c6c4c4;
  font-size: 15px;
  font-family: Playpen Sans;
  color: black;
  transition: all 0.2s;
}
.upload-btn:active {
  box-shadow: 1px 10px 22px 4px grey;
}
.input-container {
  /*border: 1px solid;*/
  height: 132px;
  width: 281px;
  margin-top: 7px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.input-div {
  border-radius: 7px;
  height: 47px;
  margin: 3px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.error-indicator {
  border: 2px solid red;
}
.input {
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
}

.input:hover {
  box-shadow: 1px 10px 22px 4px grey;
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
