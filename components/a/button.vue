<template>
  <button
    v-if="!to"
    class="button"
    :style="{ '--button-height': height, '--button-width': width }"
  >
    <span>{{ text }}</span>
  </button>

  <NuxtLink
    v-else
    :to="to"
    class="button"
    :prefetch="true"
    :style="{ '--button-height': height, '--button-width': width }"
  >
    <span>{{ text }}</span>
  </NuxtLink>
</template>

<script setup>
defineProps({
  text: String,
  to: {
    type: String,
    default: "", // Jika kosong, pakai button biasa
  },
  height: {
    type: String,
    default: "auto",
  },
  width: {
    type: String,
    default: "auto",
  },
});
</script>

<style lang="scss" scoped>
@use "@/assets/button.scss";
</style>
