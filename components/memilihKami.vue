<template>
  <a-row class="section-highlight mb-6 p-6">
    <a-container>
      <a-row class="items-center">
        <!-- Kiri: Penjelasan -->
        <a-col class="col-12 col-md-6 col-sm-12">
          <h3 class="judul">
            Di Loomora, kami percaya bahwa sebuah karpet bukan sekadar pelengkap
            interior — melainkan karya seni yang menghadirkan karakter,
            kehangatan, dan kemewahan dalam setiap ruang.
          </h3>
            <a-row>
              <a-col class="col-6">
                <img class="gambar" src="https://imagedelivery.net/_tN3dTar-XzU6X9_PBgTbA/21c2cd2f-16c2-43c5-8b1a-6f4b4d6a5700/desktop" alt="">
              </a-col>
              <a-col class="col-6">
                <img class="gambar" src="https://imagedelivery.net/_tN3dTar-XzU6X9_PBgTbA/2926867b-d990-44f1-f400-ae87ccd63600/desktop" alt="">
              </a-col>
            </a-row>
        </a-col>

        <!-- Kanan: FAQ atau visual -->
        <a-col class="col-12 col-md-6 col-sm-12">
          <h3>
            Dengan komitmen pada kualitas dan detail, Loomora menghadirkan
            karpet premium dan custom yang dirancang secara eksklusif untuk Anda
            yang menghargai estetika serta kenyamanan.
          </h3>
          <p class="text-muted">
            Kami memahami bahwa setiap ruang memiliki cerita dan kebutuhan yang
            berbeda. Karena itu, Loomora menyediakan layanan karpet custom yang
            memungkinkan Anda menyesuaikan desain, ukuran, warna, hingga motif
            sesuai dengan visi dan gaya interior Anda. Sejak awal berdiri,
            Loomora telah menjadi pilihan utama bagi para pecinta desain
            interior yang menginginkan perpaduan antara keindahan dan fungsi.
            <br /><br />
            Setiap karpet kami dibuat dari material pilihan, melalui proses
            produksi yang teliti dan inovatif, untuk menghasilkan produk yang
            tak hanya memanjakan mata tetapi juga memberikan kenyamanan maksimal
            di setiap langkah Anda. Kami hadir untuk mewujudkan karpet impian
            Anda, memperindah ruangan dengan sentuhan elegan, penuh kemewahan,
            dan bernilai tinggi.
          </p>
        </a-col>
      </a-row>
    </a-container>
  </a-row>
</template>

<style scoped lang="scss">
.gambar {
  width: 95%;
  height: 150px;
  object-fit: cover;
}
.section-highlight {
  background: linear-gradient(135deg, #f1c40f, #d4af37, #dfb856);
  color: white;
}

.text-muted {
  color: white;
  font-size: 1rem;
  line-height: 1.3;
}

.judul {
  font-size: 1.7rem;
  font-weight: 700;
  color: white;
}

@media (max-width: 768px) {
  .judul {
    font-size: 1.75rem;
  }
}
</style>
