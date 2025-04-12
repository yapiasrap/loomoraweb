<script setup>
const banner = { judul: "Karpet Custom Ballroom" };

const karpetData = {
  judul: "Kualitas Terbaik untuk Setiap Acara",
  images:
    "https://firebasestorage.googleapis.com/v0/b/loomora-cdb63.firebasestorage.app/o/images%2Fproject%2F18.jpeg?alt=media&token=c41b5049-df8d-4938-9025-8ccbc6504c41",
  deskripsi:
    "Karpet Custom Ballroom merupakan karpet khusus dengan ukuran besar yang menjadi elemen penting untuk digunakan di ruangan ballroom atau aula besar. Dibuat dengan desain khusus dan bahan berkualitas tinggi, karpet ini menjadi cocok untuk di custom sesuai kebutuhan dan tema acara Anda.",
  keunggulan: "Karpet ini biasa digunakan di berbagai acara, seperti:",
  list_1: "Pernikahan",
  list_2: "Gala dan pesta",
  list_3: "Konferensi",
  list_4: "Event khusus lainnya",
  info: [
    {
      title: "Bahan Premium",
      desc: "Terbuat dari material pilihan untuk kenyamanan dan ketahanan.",
    },
    {
      title: "Desain Custom",
      desc: "Bisa disesuaikan dengan tema acara Anda.",
    },
    {
      title: "Ukuran Fleksibel",
      desc: "Tersedia dalam berbagai ukuran sesuai kebutuhan.",
    },
  ],
};
</script>

<template>
  <Top :operandata="banner" />
  <karpet :operandata="karpetData" />
</template>
