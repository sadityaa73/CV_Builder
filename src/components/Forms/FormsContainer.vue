<template>
  <div id="form-container">
    <name-form v-if="isNameForm" @getDetails="nameDeatils" />
    <contact-form v-if="isContactForm" @getContactDetails="contactDetails" />
    <qualification-form
      v-if="isQualificationForm"
      @getEducationalDetails="educationDetails"
    />
    <skill-form v-if="isSkillForm" @getSkillDetails="skillDetails"/>
    <project-details v-if="isProjectForm" @getProjectDetails="projectDetails" />
  </div>
</template>
<script>
import NameForm from "../Forms/NameForm.vue";
import ContactForm from "../Forms/ContactForm.vue";
import QualificationForm from "./QualificationForm.vue";
import SkillForm from "../Forms/SkillForm.vue";
import ProjectDetails from "../Forms/ProjectDetails.vue";
export default {
  components: {
    NameForm,
    ContactForm,
    QualificationForm,
    SkillForm,
    ProjectDetails,
  },
  data() {
    return {
      isNameForm: true,
      isContactForm: false,
      isQualificationForm: false,
      isSkillForm: false,
      isProjectForm: false,
    };
  },
  methods: {
    nameDeatils(event) {
      console.log("print name details emits in parent component", event);
      this.isNameForm = event.nameFormStatus;
      this.isContactForm = event.contactFormStatus;
    },
    contactDetails(event) {
      console.log("print contact details emits in parent component", event);
      this.isContactForm = event.contactFormStatus;
      this.isQualificationForm = event.qualificationFormStatus;
    },
    educationDetails(event) {
      console.log("printing eductaional details emits in parent component", event);
      this.isQualificationForm = event.qualificationFormStatus;
      this.isSkillForm = event.skillFormStatus;
    },
    skillDetails(event)
    {
      console.log("printing skill details emits in parent component",event);
      this.isSkillForm=event.skillFormStatus;
      this.isProjectForm=event.projectFormStatus;
    },
    projectDetails(event){
      console.log("printing project details emits in parent component",event);
    }
  },
};
</script>
<style scoped>

</style>
