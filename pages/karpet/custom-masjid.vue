<script setup>
const banner = { judul: "Karpet Custom Masjid" };
</script>

<template>
  <Top :operandata="banner" />

  <karpet
    :operandata="{
      judul: 'Meningkatkan Kenyamanan dalam Suasana Ibadah',
      images:
        'https://firebasestorage.googleapis.com/v0/b/loomora-cdb63.firebasestorage.app/o/images%2Fproject%2F18.jpeg?alt=media&token=c41b5049-df8d-4938-9025-8ccbc6504c41',
      deskripsi:
        'Karpet Custom Masjid adalah karpet khusus yang dirancang untuk masjid dengan ukuran besar dan kenyamanan maksimal. Karpet ini terbuat dari bahan berkualitas tinggi dan dapat disesuaikan dengan kebutuhan serta tema masjid Anda.',
      keunggulan: 'Karpet ini biasa digunakan di berbagai masjid untuk:',
      list_1: 'Salat berjamaah',
      list_2: 'Pengajian',
      list_3: 'Acara keagamaan',
      list_4: 'Kegiatan lainnya',
      info: [
        {
          title: 'Bahan Premium',
          desc: 'Dibuat dari material pilihan yang nyaman dan tahan lama.',
        },
        {
          title: 'Desain Custom',
          desc: 'Dapat disesuaikan dengan kebutuhan dan tema masjid Anda.',
        },
        {
          title: 'Ukuran Fleksibel',
          desc: 'Tersedia dalam berbagai ukuran sesuai dengan luas ruang masjid.',
        },
      ],
    }"
  />
</template>
