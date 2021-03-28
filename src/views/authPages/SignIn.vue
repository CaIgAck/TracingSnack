<template>
  <div class="box form is-flex is-align-items-center is-justify-content-center">
    <div class="box p-6">
      <h1 @click="rb">RedBox - сладости</h1>
      <div class="py-3">
        <b-field label="Email">
          <b-input v-model="login"></b-input>
        </b-field>
        <b-field label="Пароль">
          <b-input v-model="password" type="password"></b-input>
        </b-field>
      </div>
      <button class="button is-primary" @click="signIn">Войти</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  computed: {
    login: {
      get() {
        return this.$store.getters.login.email;
      },
      set(newValue) {
        return this.$store.commit("setAuth", {
          blockName: "login",
          field: "email",
          value: newValue,
        });
      },
    },
    password: {
      get() {
        return this.$store.getters.login.password;
      },
      set(newValue) {
        return this.$store.commit("setAuth", {
          blockName: "login",
          field: "password",
          value: newValue,
        });
      },
    },
  },
  methods: {
    rb() {
      this.login = "bojenka229@gmail.com";
      this.password = "Sfmglkbn51651";
    },
    signIn() {
      this.$store.dispatch("login");
    },
  },
};
</script>

<style scoped>
.form {
  height: 970px;
}
</style>
