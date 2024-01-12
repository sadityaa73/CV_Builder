<template>
  <div id="form-div">
    <div class="heading-div"><h3 class="heading">Contact Details.</h3></div>
    <div class="contact-detail-container">
     <div class="contact-details-div">
        <span><img src="../../assets/phone.png" alt="phone"></span><input
        type="text"
        placeholder="Phone No."
        v-model="phone"
        class="contact-details"
      />
     </div>
     <div class="contact-details-div">
      <span><img src="../../assets/email.png" alt="email"></span>
      <input
        type="text"
        placeholder="Email-Id"
        v-model="email"
        class="contact-details"
      />
    </div>
    <div class="contact-details-div">
      <span><img src="../../assets/address.png" alt="address"></span>
      <input
        type="text"
        placeholder="Address"
        v-model="address"
        class="contact-details"
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
  props:['isContactForm','isQualificationForm'],
  components: {},
  data() {
    return {
      phone: "",
      email: "",
      address: "",
    };
  },
  methods: {
    next()
    {
       let input_container = document.querySelectorAll(".contact-details");
       for(let i=0;i<=input_container.length-1;i++)
       {
        if(input_container[i].value === "")
        {
            input_container[i].style.border="2px solid red";
            input_container[i].classList.remove("contact-details");
            input_container[i].classList.add("input-shaking");
            setTimeout(function () {
              input_container[i].classList.remove("input-shaking");
              input_container[i].classList.add("contact-details");
          }, 1000);
        }
        else{
            input_container[i].style.border="2px solid green";
        }
       }
       if(this.phone==="" || this.email==="" || this.address==="")
       {return;}
       this.$emit('getContactDetails',this.getContactDetails());
    },
    getContactDetails(){
        let contactDetails={
          phone:this.phone?this.phone:"null",
          email:this.email?this.email:"null",
          address:this.address?this.address:"null",
          contactFormStatus:false,
          qualificationFormStatus:true
        }
        return contactDetails;
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
.heading-div {
 
}
.heading {
  font-size: 20px;
  font-family: Playpen sans;
}
.contact-detail-container {
  height: 195px;
  width: 281px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}
.contact-details-div{
    display:flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}
span{
    display: flex;
    justify-content: center;
    align-items: center;
}
.contact-details {
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
.contact-details:hover {
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
  #btn-next:active{
    box-shadow: 1px 10px 22px 4px grey;
  }
</style>
