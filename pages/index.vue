<script setup lang="ts">
useSeoMeta({
  title: "Loomora - Spesialis Custom Karpet Eksklusif & Berkualitas",
  ogTitle: "Loomora - Spesialis Custom Karpet Eksklusif & Berkualitas",
  description:
    "Loomora adalah penyedia jasa pembuatan karpet custom berkualitas tinggi untuk rumah, kantor, dan proyek interior. Desain sesuai keinginan Anda, hasil elegan dan presisi.",
  ogDescription:
    "Loomora adalah penyedia jasa pembuatan karpet custom berkualitas tinggi untuk rumah, kantor, dan proyek interior. Desain sesuai keinginan Anda, hasil elegan dan presisi.",
  ogImage: "https://www.loomora.co.id/assets/img/cover.jpg", // Ganti dengan URL gambar OG yang sesuai
  twitterCard: "summary_large_image",
  twitterTitle: "Loomora - Custom Karpet Elegan untuk Hunian & Kantor",
  twitterDescription:
    "Buat karpet sesuai gaya dan kebutuhan Anda bersama Loomora. Custom desain untuk hasil maksimal.",
  twitterImage: "https://www.loomora.co.id/assets/img/cover.jpg", // Ganti dengan URL gambar Twitter yang sesuai
  robots: "noindex, nofollow",
});
</script>

<template>
  <banner-header />
  <gallery-section />
  <LazyHydration when-visible>
    <memilih-kami />
    <banner-total />
    <features />
    <last-project />
  </LazyHydration>
</template>
