<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <slot name="media-left"></slot>
        </div>
        <div class="media-content">
          <slot name="media-content"></slot>
          <!--          <p class="title is-4">John Smith</p>-->
          <!--          <p class="subtitle is-6">@johnsmith</p>-->
        </div>
        <slot name="media"></slot>
      </div>

      <div class="content">
        <div>
          <slot name="content"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BackgroundLayout",
};
</script>

<style scoped></style>
