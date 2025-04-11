<script setup>
const products = [
  {
    name: "Sentuhan Beludru",
    series: "Koleksi Premium",
    image:
      "https://images.perkasaracking.co.id/images/bfde99e0-d554-4509-416c-6881e792d600/kotak300",
  },

  {
    name: "Pasir Sahara",
    series: "Seri Alam",
    image:
      "https://images.perkasaracking.co.id/images/21c2cd2f-16c2-43c5-8b1a-6f4b4d6a5700/kotak300",
  },

  {
    name: "Cahaya Keemasan",
    series: "Lini Eksklusif",
    image:
      "https://images.perkasaracking.co.id/images/a73f434a-e444-4af4-41db-fe9fd3828f00/kotak300",
  },

  {
    name: "Putih Nordik",
    series: "Nuansa Skandinavia",
    image:
      "https://images.perkasaracking.co.id/images/ce24d606-aa84-45a7-8306-461a79106c00/kotak300",
  },

  {
    name: "Kabut Perkotaan",
    series: "Seri Modern",
    image:
      "https://images.perkasaracking.co.id/images/7bf4f0bb-5815-4611-d3e5-e0112e7ef300/kotak300",
  },

  {
    name: "Hutan Zamrud",
    series: "Seri Alam",
    image:
      "https://images.perkasaracking.co.id/images/f09b8dbb-e9e6-4fb0-40cc-e8e33029a300/kotak300",
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
