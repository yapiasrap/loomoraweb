<script setup>
const products = [
  {
    name: "Sentuhan Beludru",
    series: "Koleksi Premium",
    image:
      "https://firebasestorage.googleapis.com/v0/b/loomora-cdb63.firebasestorage.app/o/images%2Fproject%2F3.jpeg?alt=media&token=8fd4a626-9cf6-4eac-9119-e6bdc9f75dca",
  },
  {
    name: "Pasir Sahara",
    series: "Seri Alam",
    image:
      "https://firebasestorage.googleapis.com/v0/b/loomora-cdb63.firebasestorage.app/o/images%2Fproject%2F4.jpeg?alt=media&token=568d0b1f-5f2d-40cb-a4be-e4101f10bc83",
  },
  {
    name: "Cahaya Keemasan",
    series: "Lini Eksklusif",
    image:
      "https://firebasestorage.googleapis.com/v0/b/loomora-cdb63.firebasestorage.app/o/images%2Fproject%2F5.jpeg?alt=media&token=99093ffe-47a1-40e1-bd50-b715c223914d",
  },
  {
    name: "Putih Nordik",
    series: "Nuansa Skandinavia",
    image:
      "https://firebasestorage.googleapis.com/v0/b/loomora-cdb63.firebasestorage.app/o/images%2Fproject%2F1.jpeg?alt=media&token=9feab4ff-a7bf-44e1-a8dd-3071cd879a71",
  },
  {
    name: "Kabut Perkotaan",
    series: "Seri Modern",
    image:
      "https://firebasestorage.googleapis.com/v0/b/loomora-cdb63.firebasestorage.app/o/images%2Fproject%2F2.jpeg?alt=media&token=75eab2cf-d47e-4156-8117-ef0190bbe6de",
  },
  {
    name: "Hutan Zamrud",
    series: "Seri Alam",
    image:
      "https://firebasestorage.googleapis.com/v0/b/loomora-cdb63.firebasestorage.app/o/images%2Fproject%2F6.jpeg?alt=media&token=f0aa2e24-dc1f-4a05-98d9-3227f4d84c5f",
  },
];
</script>

<template>
  <a-container class="mt-5">
    <p class="heading text-center mb-5">
      Realisasikan Inspirasi Anda <br />
      Bersama Kami
    </p>

    <a-row>
      <a-col
        v-for="(product, index) in products"
        :key="index"
        class="col-6 col-sm-6 col-md-4 p-1"
      >
        <div class="image-wrapper">
          <img :src="product.image" :alt="product.name" />

          <div class="hover-overlay">
            <a-button id="produk" text="Detail" />
          </div>
        </div>

        <p class="product-name">{{ product.name }}</p>
        <p class="product-series mb-5">{{ product.series }}</p>
      </a-col>
    </a-row>
  </a-container>
</template>

<style lang="scss" scoped>
// Typography
.heading {
  font-weight: 800;
  font-size: 2.5rem; // set mendekati text-h4
  line-height: 1.2;
}

// Product card
.image-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 100%; // makin besar, makin tinggi bentuknya
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .hover-overlay {
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0);
    opacity: 0;
    transition: background-color 0.3s ease, opacity 0.3s ease;

    .btn-detail {
      background-color: #d4af37;
      color: #fff;
      font-size: 1rem;
      font-weight: 500;
      padding: 0.5rem 1rem;
      border: none;
      cursor: pointer;
      transform: scale(1);
      transition: transform 0.3s ease;
    }
  }

  &:hover .hover-overlay {
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 1;

    .btn-detail {
      transform: scale(1.1);
    }
  }
}

.product-name {
  font-weight: bold;
  font-size: 1.25rem; // text-h6
}

.product-series {
  font-size: 1rem;
  margin-top: -1rem;
}
</style>
