<script setup>
const banner = {
  judul: "Karpet Custom Kantor",
};

const karpetData = {
  judul: "Sentuhan Profesional untuk Ruang Kerja Anda",
  images:
    "https://imagedelivery.net/_tN3dTar-XzU6X9_PBgTbA/841a560e-bd9b-4b50-9dd3-9594d3ed2100/herotablet",
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

useSeoMeta({
  title: "Karpet Custom Kantor",
  ogTitle: "Karpet Custom Kantor",
  description:
    "Temukan karpet custom untuk kantor dengan desain elegan dan fungsional. Loomora menyediakan berbagai pilihan bahan, motif, dan ukuran untuk menciptakan suasana kantor yang nyaman dan profesional.",
  ogDescription:
    "Karpet custom kantor dari Loomora hadir dengan desain elegan dan pilihan bahan berkualitas tinggi. Sesuaikan motif dan ukuran untuk menciptakan ruang kerja yang nyaman dan mendukung produktivitas.",
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
