
import { createStore } from "vuex";

export default createStore({
    
    state:{
        currentFormStage:""
    },
    getters:{
        getCurrentForm(state)
        {
            // console.log("@@triggered",state.currentFormStage);
            return state.currentFormStage;
        }
    },
    mutations:{
        GET_CURRENT_FORM(state,payload)
        {
            // console.log("print mutations",payload);
            state.currentFormStage = payload;
        }
    },
    actions:{
        set_current_form({commit},payload){
            // console.log("print acitons",payload);
            commit('GET_CURRENT_FORM',payload);
        }
    },

});
