import firebase from "firebase/app";
import router from "@/router";
import { cloneDeep } from "lodash";
const state = {
  login: {
    email: null,
    password: null,
  },
  stateAuth: {
    status: "",
    token: localStorage.getItem("token") || "",
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
        localStorage.setItem("token", user.refreshToken);
        console.log(user);
        router.push("/profile/" + user.uid);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("[Vuex]Auth errors:" + errorCode, errorMessage);
        const token = localStorage.getItem("token");
        if (token) {
          localStorage.removeItem("token");
        }
      });
  },
};
const mutations = {
  authSuccess(state) {
    state.stateAuth.status = "success";
  },
  authError(state) {
    state.stateAuth.status = "error";
  },
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
