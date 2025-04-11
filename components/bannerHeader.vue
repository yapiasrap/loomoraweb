<script setup>
import { useHead } from "#imports";
import { ref, watchEffect, nextTick, computed } from "vue";
import { useWindowSize } from "@vueuse/core";

const { width } = useWindowSize();
const isMdAndUp = computed(() => width.value >= 600);

// Preload image
const preloadHref = ref("");
watchEffect(async () => {
  await nextTick();
  preloadHref.value =
    "https://images.perkasaracking.co.id/images/2926867b-d990-44f1-f400-ae87ccd63600/desktop";
});

// Tambahkan preload ke head
useHead(() => ({
  link: [
    {
      rel: "preload",
      as: "image",
      href: preloadHref.value,
      type: "image/webp",
    },
  ],
}));
</script>

<template>
  <section class="hero-section">
    <!-- Background Image -->
    <img
      class="hero-background"
      src="https://images.perkasaracking.co.id/images/2926867b-d990-44f1-f400-ae87ccd63600/desktop"
      alt="Custom Carpet Background"
    />

    <!-- Overlay untuk memperjelas teks -->
    <div class="hero-overlay"></div>

    <!-- Konten teks -->
    <div class="hero-content">
      <p
        :class="isMdAndUp ? 'hero-company' : 'hero-company-mobile text-center'"
      >
      Hadirkan Karpet Premium Impian Anda
      </p>

      <h1
        :class="
          isMdAndUp ? 'hero-headline' : 'hero-headline-mobile text-center'
        "
      >
        SENTUHAN KEMEWAHAN DI SETIAP LANGKAH
      </h1>

      <p
        :class="
          isMdAndUp ? 'hero-description' : 'hero-description-mobile text-center'
        "
      >
        Lebih dari sekadar pelengkap interior, setiap karpet kami adalah karya
        eksklusif yang memadukan keindahan desain, kualitas terbaik, dan
        sentuhan kemewahan untuk menyempurnakan ruang Anda.
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero-section {
  position: relative;
  width: 100%;
  min-height: 80vh;
  overflow: hidden;
  display: flex;
  align-items: center; /* Center secara vertikal */
  justify-content: flex-start; /* Menyelaraskan ke kiri */
  padding: 0 2rem;
}

/* Background Image */
.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

/* Overlay */
.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(
    0,
    0,
    0,
    0.4
  ); /* Overlay hitam dengan transparansi 50% */
  z-index: 1;
}

/* Konten Teks */
.hero-content {
  position: relative;
  color: #fff;
  max-width: 800px;
  z-index: 2;
  text-align: left; /* Teks memanjang ke kanan */
}

.hero-company {
  font-size: 20px;
  text-transform: uppercase;
}

.hero-company-mobile {
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
}

.hero-headline {
  font-size: 4rem;
  font-weight: 700;
  margin-top: -1.5rem;
  line-height: 1.2;
}

.hero-headline-mobile {
  font-size: 2rem;
  font-weight: 700;
  margin-top: -0.5rem;
  line-height: 1.2;
}

.hero-description {
  font-size: 1rem;
  line-height: 1.5;
  margin-top: -3rem;
}

.hero-description-mobile {
  font-size: 0.7rem;
  line-height: 1.5;
  margin-top: -1.3rem;
}

/* Responsif Mobile */
@media (max-width: 600px) {
  .hero-section {
    align-items: flex-start;
    padding: 0 1rem;
  }

  .hero-content {
    margin-top: 25vh; /* Sesuaikan jarak sesuai kebutuhan */
    max-width: 100%;
  }

  .hero-headline {
    font-size: 1.5rem;
  }

  .hero-description {
    font-size: 0.9rem;
  }
}
</style>
