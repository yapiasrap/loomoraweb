<script setup>
const banner = { judul: "Karpet Custom Masjid" };

const karpetData = {
  judul: "Meningkatkan Kenyamanan dalam Suasana Ibadah",
  images:
    "https://images.perkasaracking.co.id/images/7bf4f0bb-5815-4611-d3e5-e0112e7ef300/herotablet",
  deskripsi:
    "Karpet Custom Masjid adalah karpet khusus yang dirancang untuk masjid dengan ukuran besar dan kenyamanan maksimal. Karpet ini terbuat dari bahan berkualitas tinggi dan dapat disesuaikan dengan kebutuhan serta tema masjid Anda.",
  keunggulan: "Karpet ini biasa digunakan di berbagai masjid untuk:",
  list_1: "Salat berjamaah",
  list_2: "Pengajian",
  list_3: "Acara keagamaan",
  list_4: "Kegiatan lainnya",
  info: [
    {
      title: "Bahan Premium",
      desc: "Dibuat dari material pilihan yang nyaman dan tahan lama.",
    },
    {
      title: "Desain Custom",
      desc: "Dapat disesuaikan dengan kebutuhan dan tema masjid Anda.",
    },
    {
      title: "Ukuran Fleksibel",
      desc: "Tersedia dalam berbagai ukuran sesuai dengan luas ruang masjid.",
    },
  ],
};
</script>

<template>
  <Top :operandata="banner" />
  <karpet :operandata="karpetData" />
</template>
