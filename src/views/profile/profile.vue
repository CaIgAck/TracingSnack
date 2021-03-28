<template>
  <default>
    <template #NameEntity> Профиль </template>
    <template #content>
      <UserProfile />
    </template>
  </default>
</template>

<script>
import UserProfile from "@/components/User/UserProfile";
import Default from "@/components/layouts/default";
export default {
  name: "profile",
  components: { Default, UserProfile },
};
</script>

<style scoped></style>
