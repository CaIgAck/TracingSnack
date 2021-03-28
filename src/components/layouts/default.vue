<template>
  <div>
    <NavBarLayout class="default" />
    <div class="container">
      <div class="headerEntity">
        <h1 class="NameEntity"><slot name="NameEntity"></slot></h1>
      </div>
      <div>
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import NavBarLayout from "@/components/NavBar/NavBarLayout";
export default {
  name: "default",

  components: { NavBarLayout },
};
</script>

<style scoped>
.headerEntity {
  padding: 15px 0 15px 0;
}
.NameEntity {
  font-weight: bolder;
  font-size: 24px;
}
</style>
