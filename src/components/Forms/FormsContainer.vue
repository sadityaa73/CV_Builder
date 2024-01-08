<template>
  <div id="form-container">
    <name-form />
    <contact-form/>
    <skill-form/>
  </div>
</template>
<script>
import NameForm from "../Forms/NameForm.vue";
import ContactForm from "../Forms/ContactForm.vue";
import SkillForm from "../Forms/SkillForm.vue"
export default {
  components: { NameForm,ContactForm,SkillForm },
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
