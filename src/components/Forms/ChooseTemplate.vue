<template>
  <div id="main-container">
    <div class="heading">
      <h4 class="headingText">Choose Your Template.</h4>
    </div>
    <div class="template-container">
      <div
        class="template-list"
        v-for="(list, index) in templateList"
        :key="index"
        @click="chooseTemplate(templateList[index])">
        <img src="../../assets/imageIcon.png" alt="templateImage" class="templateDesign">
      </div>
    </div>
    <div class="button-container">
      <button class="next-btn" :disabled="isTemplateSelected" @click="next()">Next</button>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  components: {},
  data() {
    return {
      templateId: "",
      isSelected:true
    };
  },
  computed: {
    ...mapState(["templateList"]),
    isTemplateSelected()
    {
        return this.templateId?false:true;
    }
  },
  mounted(){
    this.getimagePath();
  },
  methods: {
    chooseTemplate(index) {
      console.log(index);
      this.templateId = index;
    },
    getimagePath(){
        let image = document.querySelectorAll(".templateDesign");
        for(let i=0;i<=image.length-1;i++)
        {
            image[i].src =`${this.templateList[i].img}`;
            image[i].classList.add("templateDesignAfter");
        }
    },
    next() {
     if(this.templateId!="")
     {     
      this.$emit("status", {
        choosetemplate: "false",
        processStatus: "true",
        formContainer: "true",
      });
      this.$store.dispatch("set_template_id",this.templateId);
     }
    },
  },
};
</script>
<style scoped>
#main-container {
  border: 1px solid;
  margin-top: 23px;
  min-width: 980px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: whitesmoke;
  animation: rightToLeft 1s ease;
}
.heading {
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 12px 0px 0px 0px;
  width: 96%;
}
.headingText {
  font-size: 19px;
  font-family: "playpen sans";
}
.template-container {
  border: 1px solid;
  border-radius: 7px;
  min-height: 51vh;
  min-width: 941px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 2px;
}
.template-list {
  border: 1px solid black;
  width: 189px;
  height: 217px;
  margin: 17px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.template-list:hover {
  border: none;
  box-shadow: 1px 10px 22px 4px grey;
  transition: all 0.4s;
}
.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 12px 0px 0px 0px;
  width: 96%;
  height: 10vh;
}
.next-btn {
  width: 136px;
  height: 46px;
  border-radius: 7px;
  font-size: 15px;
  font-family: "playpen sans";
  border: 1px solid black;
}
.next-btn:active{
    border: none;
    box-shadow: 1px 10px 22px 4px grey;
    transition: all 0.4s;
}
.templateDesign{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 96px;
    height: 100px;
}
.templateDesignAfter{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}
</style>
