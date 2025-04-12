<script setup>
const banner = { judul: "Karpet Custom Kantor" };

const karpetData = {
  judul: "Sentuhan Profesional untuk Ruang Kerja Anda",
  images:
    "https://firebasestorage.googleapis.com/v0/b/loomora-cdb63.firebasestorage.app/o/images%2Fproject%2F18.jpeg?alt=media&token=c41b5049-df8d-4938-9025-8ccbc6504c41",
  deskripsi:
    "Karpet Custom Kantor adalah solusi sempurna untuk memberikan kenyamanan dan estetika pada ruang kantor Anda. Dengan bahan berkualitas tinggi, karpet ini dapat disesuaikan dengan desain interior kantor serta menciptakan suasana yang profesional dan nyaman.",
  keunggulan: "Karpet ini cocok digunakan di berbagai area kantor seperti:",
  list_1: "Ruang Meeting",
  list_2: "Lobi Kantor",
  list_3: "Ruang Kerja Pribadi",
  list_4: "Area Bersama",
  info: [
    {
      title: "Bahan Premium",
      desc: "Karpet ini terbuat dari material pilihan yang tahan lama dan nyaman digunakan.",
    },
    {
      title: "Desain Custom",
      desc: "Tersedia berbagai ketebalan karpet mulai dari 10mm, 12mm, 14mm, 16mm hingga 18mm",
    },
    {
      title: "Ukuran Fleksibel",
      desc: "Tersedia dalam berbagai ukuran yang dapat disesuaikan dengan kebutuhan ruang kantor.",
    },
  ],
};
</script>

<template>
  <Top :operandata="banner" />
  <karpet :operandata="karpetData" />
</template>
