<script setup lang="ts">
import { computed } from "vue";
import { useWindowSize } from "@vueuse/core";

const { width } = useWindowSize();
const isSmAndUp = computed(() => width.value >= 600);

const titleStyle = computed(() => ({
  fontSize: isSmAndUp.value ? "50px" : "35px",
}));

interface TopM {
  judul: string;
}

defineProps<{ operandata: TopM }>();
</script>

<template>
  <div class="image-container">
    <img
      src="https://firebasestorage.googleapis.com/v0/b/suvarna-web.appspot.com/o/images%2Fwebsite%2Fbackground%2F2.jpg?alt=media&token=ea421f9b-58dc-4362-8d94-1eca84d6e873"
      alt="Banner Top Rak Gudang TAP"
      height="350px"
      class="image"
    />
    <div class="overlay" />
    <div class="text-wrapper mt-5">
      <a-row>
        <div>
          <h1 class="title-text" :style="titleStyle">
            {{ operandata.judul }}
          </h1>
        </div>
      </a-row>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.image-container {
  position: relative;
  width: 100%;
  height: 350px;
  overflow: hidden;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Overlay menutup seluruh area gambar */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to top right,
    rgba(21, 20, 20, 0.6),
    rgba(21, 21, 20, 0.7)
  );
}


.text-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center; // Tetap vertical center
  justify-content: flex-start; // Ubah dari center ke flex-start
  padding: 0 20px; // Tambah padding kiri
}

.title-text {
  margin: 0;
  color: white;
  text-align: left; // Pastikan rata kiri
}

@media (max-width: 600px) {
  .title-text {
    text-align: center;
  }
}
</style>
