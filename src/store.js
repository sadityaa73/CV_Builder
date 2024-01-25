import { createStore } from "vuex";

export default createStore({
  state: {
    currentFormStage: "",
    firstName: "",
    lastName: "",
    profileImage: "",
    phone: "",
    email: "",
    address: "",
    secondaryEducation: "",
    higherSecondaryEducation: "",
    graduation: "",
    skill: [],
    projectDetails: [],
    templateList: [1, 2, 3],
  },
  getters: {
    getCurrentForm(state) {
      // console.log("@@triggered",state.currentFormStage);
      return state.currentFormStage;
    },
    getFormDetails(state) {
      let details = {
        firstName: state.firstName,
        lastName: state.lastName,
        profileImage: state.profileImage,
        phone: state.phone,
        email: state.email,
        address: state.address,
        secondary: state.secondaryEducation,
        higherSecondary: state.higherSecondaryEducation,
        graduation: state.graduation,
        skill: state.skill,
        projectDetails: state.projectDetails,
      };
      return details;
    },
  },
  mutations: {
    GET_CURRENT_FORM(state, payload) {
      // console.log("print mutations",payload);
      state.currentFormStage = payload;
    },
    GET_NAME(state, payload) {
      console.log("name", payload);
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.profileImage = payload.profileImage;
    },
    GET_CONTACT_DETAILS(state, payload) {
      console.log("conatct", payload);
      state.phone = payload.phone;
      state.email = payload.email;
      state.address = payload.address;
    },
    GET_QUALIFICATION(state, payload) {
      console.log("education", payload);
      state.secondaryEducation = payload.secondaryEducation;
      state.higherSecondaryEducation = payload.higherSecondaryEducation;
      state.graduation = payload.graduation;
    },
    GET_SKILL(state, payload) {
      console.log("@@@skill", payload);
      for (let i = 0; i <= payload.length - 1; i++) {
        state.skill[i] = payload[i];
      }
    },
    GET_PROJECT_DETAILS(state, payload) {
      console.log("project", payload);
      for (let i = 0; i <= payload.length - 1; i++) {
        state.projectDetails[i] = payload[i];
      }
    },
  },
  actions: {
    set_current_form({ commit }, payload) {
      // console.log("print acitons",payload);
      commit("GET_CURRENT_FORM", payload);
    },
    set_name({ commit }, payload) {
      commit("GET_NAME", payload);
    },
    set_contact_details({ commit }, payload) {
      commit("GET_CONTACT_DETAILS", payload);
    },
    set_Qualification({ commit }, payload) {
      commit("GET_QUALIFICATION", payload);
    },
    set_skill({ commit }, payload) {
      commit("GET_SKILL", payload);
    },
    set_project_details({ commit }, payload) {
      commit("GET_PROJECT_DETAILS", payload);
    },
  },
});
