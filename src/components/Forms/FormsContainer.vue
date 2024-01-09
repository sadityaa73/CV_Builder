<template>
  <div id="form-container">
    <name-form />
    <contact-form/>
    <qualification-form/>
    <skill-form/>
    <project-details/>
  </div>
</template>
<script>
import NameForm from "../Forms/NameForm.vue";
import ContactForm from "../Forms/ContactForm.vue";
import QualificationForm from "./QualificationForm.vue";
import SkillForm from "../Forms/SkillForm.vue"
import ProjectDetails from "../Forms/ProjectDetails.vue"
export default {
  components: { NameForm,ContactForm,QualificationForm,SkillForm,ProjectDetails},
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
#form-container {
  border: 1px solid;
  min-height: 50vh;
  min-width: 500px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: whitesmoke;
}
</style>
