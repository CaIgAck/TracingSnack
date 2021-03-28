<template>
  <b-navbar shadow spaced>
    <template #brand>
      <b-navbar-item>
        <img
          height="200"
          width="100"
          src="https://lh3.googleusercontent.com/proxy/8ulJvMnsnpM9xsNsrZ0QN4Xd3AgQR9Sx9NoBmNoN_hsLjjUgz-FPh8sORB2nGDm6Vxde2yhMc3GRrTGAk2HhtUUuUrcfsObqVXqe1TARikcT01-q6FJEJOT4U2bMzaLL00XGYjQ"
          alt="RedBox"
        />
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item
        :to="navLink.route"
        v-for="(navLink, index) in menu"
        :key="index"
      >
        {{ navLink.title }}
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import NavBarHelper from "/src/helpers/NavbarHelper";
export default {
  name: "NavBarLayout",
  computed: {
    menu() {
      return NavBarHelper;
    },
  },
};
</script>

<style scoped></style>
