import { createStore } from "vuex";

export default createStore({
  state: {
    templateId:"",
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
    templateList: [{img:"https://lh3.googleusercontent.com/pw/ABLVV87Jr6WJulHICllS3dLoqIlE1Yo5kYcuRSsBRCcZQ8oprpTUNM8VUBwnBa-iX0jUwB49BjNWOoE7Bog19ggw5VCsoxWk28UW7g0ovQYwyGrm8P8dRWWdKLR85EuRKMblFzx1YtJUSpwZV-i_jBad3tR-zJGjvh7oq1vCDAjznmEEhBtdxbb00BiMY2vZQxfBN4608oXqTPFERhzMUq0qTkCHnuyot8e_9sYaP8bON4_r9dGgqARviJsPwzspdvCuvE8p3MlX8KW6KmrZNWSX6CTqB2d6hEtLIorP5fpR15fd5dpz4C4iOkKjSN9ReEuMoeXq0Dn6BKwO81MBCul5SG9-FkP_U4BkG68f-iUt6ue8eYGwkFgwrhN7LiUsXViEGcBiJmJfT2sy1xL3eH1tqH75qW0JgVU6QRoXGjeipXiI4IspxTBALiNT-3zaHQTlTLyYnkpXBOfdYKeIMknLDcHfmG9tSHXVsWPEehMlsD0YW4YAqLJjQ4X_dgRzPfo3PlWaz3RCJNAplnIpqAOk-cWLQk6IcfPIdfxEKVi-3jKqjiIlNOuaYD9k4oXRv_gO3e4U93K3xtOSWMRkMFW5-x4rg5g_h4kMtTxa7JfF4nLD8s2VMlZ4KunbR_HKrcEPvShBXljYiMiRSCcVNVd6yzc90AdS7Xe4YkTMz4FwDBk70YdGS2BMseEWvLnejFV3g0xrCFHXXlThr4YXVW0Swzl9zKSdJVFYXq4QBiDBBmdBHV5B-NMgKiNu3EvqtV9EasGco6d1sB-0jUvDIiZXZiKJLgWCiXHkGvq078ENE31lbJDNldN9XaczrIzhGIVQbgtDwDH2fyCdNbxxN9xDRWvNX6bLCMOifX3vJ8nqf9PCSihFhLiOO3L8Pzyn8jL1IJdLRe0OKe-kVSNg2pbghjzgjHC3HlpDs8VBr2I0kCGklGsTtvwfwibBaFHNcTfmX96SZIqlii9tCZEUqhtiJOtP3m0oO65Rek1WriV0WA=w804-h756-s-no-gm?authuser=0"}],
  },
  getters: {
    getCurrentForm(state) {
      // console.log("@@triggered",state.currentFormStage);
      return state.currentFormStage;
    },
    getFormDetails(state) {
      let details = {
        templateId:state.templateId,
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
    GET_TEMPLATE_ID(state,payload)
    {
        state.templateId = payload;
    },
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
    set_template_id({commit},payload)
    {
        commit("GET_TEMPLATE_ID",payload);
    },
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
