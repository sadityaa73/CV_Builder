<template>
  <div id="form-container">
    <name-form v-if="isNameForm" @getDetails="nameDeatils" @formName="firstCall"/>
    <contact-form v-if="isContactForm" @getContactDetails="contactDetails" />
    <qualification-form
      v-if="isQualificationForm"
      @getEducationalDetails="educationDetails"
    />
    <skill-form v-if="isSkillForm" @getSkillDetails="skillDetails" />
    <project-details v-if="isProjectForm" @getProjectDetails="projectDetails" />
    <pdf-view-component v-if="isPdf"/>
  </div>
</template>
<script>
import NameForm from "../Forms/NameForm.vue";
import ContactForm from "../Forms/ContactForm.vue";
import QualificationForm from "./QualificationForm.vue";
import SkillForm from "../Forms/SkillForm.vue";
import ProjectDetails from "../Forms/ProjectDetails.vue";
import PdfViewComponent from '../PDFView/PdfViewComponent.vue';
export default {
  components: {
    NameForm,
    ContactForm,
    QualificationForm,
    SkillForm,
    ProjectDetails,
    PdfViewComponent,
  },
  data() {
    return {
      isNameForm: true,
      isContactForm: false,
      isQualificationForm: false,
      isSkillForm: false,
      isProjectForm: false,
      isPdf:false,
    };
  },
  mounted(){
    this.$emit('formStatusChanged',"name");
  },
  methods: {
    firstCall(event)
    { console.log("@@@triggred",event);
      this.getFormStatus(event);
    },
    nameDeatils(event) {
      console.log("print name details emits in parent component", event);
      this.isNameForm = event.nameFormStatus;
      this.isContactForm = event.contactFormStatus;
      let nameFromDetails={
        firstName:event.firstName,
        lastName:event.lastName,
        profileImage:event.ProfileImage
      }
      this.$store.dispatch('set_name',nameFromDetails);
      this.getFormStatus("contact");
      this.$emit('formStatusChanged',"contact");
    },
    contactDetails(event) {
      console.log("print contact details emits in parent component", event);
      this.isContactForm = event.contactFormStatus;
      this.isQualificationForm = event.qualificationFormStatus;
      let contact_details={
        phone:event.phone,
        email:event.email,
        address:event.address
      }
      this.$store.dispatch('set_contact_details',contact_details);
      this.getFormStatus("qualification");
      this.$emit('formStatusChanged',"qualification");
    },
    educationDetails(event) {
      console.log(
        "printing eductaional details emits in parent component",
        event
      );
      this.isQualificationForm = event.qualificationFormStatus;
      this.isSkillForm = event.skillFormStatus;
      let education_details={
        secondaryEducation:event.secondary,
        higherSecondaryEducation:event.higherSecondary,
        graduation:event.graduation
      }
      this.$store.dispatch('set_Qualification',education_details);
      this.getFormStatus("skill");
      this.$emit('formStatusChanged',"skill");
    },
    skillDetails(event) {
      console.log("printing skill details emits in parent component", event);
      this.isSkillForm = event.skillFormStatus;
      this.isProjectForm = event.projectFormStatus;
      let skillList=[];
      skillList.push(...event.skillList);
      this.$store.dispatch('set_skill',skillList);
      this.getFormStatus("project");
      this.$emit('formStatusChanged',"project");
    },
    projectDetails(event) {
      console.log("printing project details emits in parent component", event);
      this.isProjectForm=event.projectFormStatus;
      this.isPdf = event.pdfViewStatus;
      let projectList=[];
      projectList.push(...event.details);
      this.$store.dispatch('set_project_details',projectList);
      this.$emit('formStatusChanged',"cv");
    },
    getFormStatus(formName) {
      this.$store.dispatch("set_current_form", formName);
    },
  },
};
</script>
<style scoped></style>
