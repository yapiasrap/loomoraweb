<template>
  <div
    class="cards"
    :class="{ cardst: to }"
    :style="{
      '--cards-width': width,
      '--cards-shadow': elevationLevels[elevation] || elevationLevels[1],
      '--cards-height': height,
    }"
    @click="navigate"
  >
    <slot></slot>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { defineProps } from "vue";

const router = useRouter();

const props = defineProps({
  to: String, // Path tujuan navigasi
  width: String,
  height: String,
  elevation: {
    type: Number,
    default: 4,
  },
});

const navigate = () => {
  if (props.to) {
    router.push(props.to); // Navigasi ke halaman yang diinginkan
  }
};

const elevationLevels = {
  0: "none",
  1: "0 1px 3px rgba(0, 0, 0, 0.1)",
  2: "0 3px 6px rgba(0, 0, 0, 0.15)",
  3: "0 5px 10px rgba(0, 0, 0, 0.2)",
  4: "0 8px 16px rgba(0, 0, 0, 0.25)",
  5: "0 12px 24px rgba(0, 0, 0, 0.3)",
};
</script>

<style lang="scss" scoped>
@use "@/assets/cards.scss";

.cardst {
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.2s ease-in-out;
  color: inherit; /* Agar warna teks tidak berubah */

  &:hover {
    transform: scale(1.02);
  }
}
</style>
