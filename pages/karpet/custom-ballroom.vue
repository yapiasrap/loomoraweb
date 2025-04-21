<script setup>
const banner = { judul: "Karpet Custom Ballroom" };

const karpetData = {
  judul: "Kualitas Terbaik untuk Setiap Acara",
  images:
    "https://imagedelivery.net/_tN3dTar-XzU6X9_PBgTbA/08dc9ff1-811a-4ee2-fd70-3ebea4ceea00/herotablet",
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

useSeoMeta({
  title: "Karpet Custom Ballroom",
  ogTitle: "Karpet Custom Ballroom",
  description:
    "Tingkatkan suasana ballroom Anda dengan karpet custom dari Loomora. Pilih desain, bahan, dan ukuran yang sesuai untuk acara elegan Anda.",
  ogDescription:
    "Karpet custom untuk ballroom dari Loomora memberikan kesan elegan dan mewah. Pilih dari berbagai desain dan bahan berkualitas tinggi.",
  ogImage:
    "https://imagedelivery.net/_tN3dTar-XzU6X9_PBgTbA/78468be4-c4fa-4aef-ed59-b9036cf57a00/ogimage",
  twitterCard: "summary_large_image",
  robots: "index, follow",
});
</script>

<template>
  <Top :operandata="banner" />
  <karpet :operandata="karpetData" />
</template>
