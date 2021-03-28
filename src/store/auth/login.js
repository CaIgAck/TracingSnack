import firebase from "firebase/app";
import router from "@/router";
import { cloneDeep } from "lodash";
const state = {
  login: {
    email: null,
    password: null,
  },
};
const getters = {
  login: (state) => state.login,
};
const actions = {
  login(context) {
    const login = context.state.login;
    const cloneLogin = cloneDeep(login);
    firebase
      .auth()
      .signInWithEmailAndPassword(cloneLogin.email, cloneLogin.password)
      .then((userCredential) => {
        let user = userCredential.user;
        console.log(user);
        router.push("/profile/" + user.uid);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("[Vuex]Auth errors:" + errorCode, errorMessage);
      });
  },
};
const mutations = {
  setAuth(state, { blockName, field, value }) {
    state[blockName][field] = value;
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
