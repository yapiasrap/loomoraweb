<script setup>
import { ref } from "vue";

// Data banner
const banner = { judul: "Karpet Tile Elegan & Fungsional" };

// Array produk dengan spesifikasi
const products = ref([
  {
    id: 1,
    name: "Gravity",
    image:
      "https://imagedelivery.net/_tN3dTar-XzU6X9_PBgTbA/bfde99e0-d554-4509-416c-6881e792d600/kotak300",
    specs: [
      "Bahan: Camifin PP",
      "Construction: Graphic Loop Pile",
      'Machine Gauge: 1/10"',
      "Size Tile: 50 x 50 cm",
      "Pile Height: 4-5 mm",
      "Total Height: 7-8 mm",
      "Pile Weight: 600 gms/m²",
      "Total Weight: 4600 gms/m²",
      "Primary Backing: Non Woven Lutrador",
      "Secondary Backing: PVC + Fibre Glass",
      "Tile per Box: 24 pcs per Box (6m²)",
      "Installation: Surface Tackifier",
      "Antistatic properties: Permanently",
      "Note: Actual product specifications may vary",
    ],
  },
  {
    id: 2,
    name: "Strand",
    image:
      "https://imagedelivery.net/_tN3dTar-XzU6X9_PBgTbA/7bf4f0bb-5815-4611-d3e5-e0112e7ef300/kotak300",
    specs: [
      "Bahan: Fiber Acrylic",
      "Construction: Loop Pile",
      'Machine Gauge: 1/12"',
      "Size Tile: 60 x 60 cm",
      "Pile Height: 5-6 mm",
      "Total Height: 8-9 mm",
      "Pile Weight: 650 gms/m²",
      "Total Weight: 4700 gms/m²",
      "Primary Backing: Non Woven Polyester",
      "Secondary Backing: Rubber Adhesive",
      "Tile per Box: 20 pcs per Box (6m²)",
      "Installation: Adhesive Binder",
      "Antistatic properties: Yes",
      "Note: Custom colors available",
    ],
  },
  // Produk-produk lain disertakan sesuai contoh sebelumnya...
  {
    id: 3,
    name: "Splash",
    image:
      "https://imagedelivery.net/_tN3dTar-XzU6X9_PBgTbA/0e75b034-fbef-4420-6591-4fa41008a900/kotak300",
    specs: [
      "Bahan: Nylon Blend",
      "Construction: Cut Pile",
      'Machine Gauge: 1/8"',
      "Size Tile: 45 x 45 cm",
      "Pile Height: 3-4 mm",
      "Total Height: 6-7 mm",
      "Pile Weight: 550 gms/m²",
      "Total Weight: 4500 gms/m²",
      "Primary Backing: Woven Polyester",
      "Secondary Backing: PVC Overlay",
      "Tile per Box: 30 pcs per Box (5m²)",
      "Installation: Double-Sided Tape",
      "Antistatic properties: Yes, Low",
      "Note: Suitable for high-traffic areas",
    ],
  },
  {
    id: 4,
    name: "Onyx",
    image:
      "https://imagedelivery.net/_tN3dTar-XzU6X9_PBgTbA/5f5c1903-37d7-46d4-777f-f2a9bdc58b00/kotak300",
    specs: [
      "Bahan: Polypropylene",
      "Construction: Tufted",
      'Machine Gauge: 1/10"',
      "Size Tile: 55 x 55 cm",
      "Pile Height: 4-5 mm",
      "Total Height: 7-8 mm",
      "Pile Weight: 620 gms/m²",
      "Total Weight: 4650 gms/m²",
      "Primary Backing: Non Woven Lutrador",
      "Secondary Backing: PVC + Fibre Glass",
      "Tile per Box: 22 pcs per Box (6m²)",
      "Installation: Surface Tackifier",
      "Antistatic properties: Permanently",
      "Note: Enhanced durability finish",
    ],
  },
  {
    id: 5,
    name: "Omicron",
    image:
      "https://imagedelivery.net/_tN3dTar-XzU6X9_PBgTbA/21c2cd2f-16c2-43c5-8b1a-6f4b4d6a5700/kotak300",
    specs: [
      "Bahan: Wool Blend",
      "Construction: Berber Loop",
      'Machine Gauge: 1/9"',
      "Size Tile: 50 x 50 cm",
      "Pile Height: 4-6 mm",
      "Total Height: 8-9 mm",
      "Pile Weight: 580 gms/m²",
      "Total Weight: 4550 gms/m²",
      "Primary Backing: Jute-based non-woven",
      "Secondary Backing: Latex Coated",
      "Tile per Box: 24 pcs per Box (6m²)",
      "Installation: Glue Down",
      "Antistatic properties: Yes",
      "Note: Natural fiber texture",
    ],
  },
  {
    id: 6,
    name: "Zeta",
    image:
      "https://imagedelivery.net/_tN3dTar-XzU6X9_PBgTbA/e980db61-8d4d-452f-817e-bb8ce74be700/kotak300",
    specs: [
      "Bahan: Acrylic",
      "Construction: Cut and Loop",
      'Machine Gauge: 1/11"',
      "Size Tile: 60 x 60 cm",
      "Pile Height: 5 mm",
      "Total Height: 8 mm",
      "Pile Weight: 630 gms/m²",
      "Total Weight: 4700 gms/m²",
      "Primary Backing: Synthetic non-woven",
      "Secondary Backing: PVC Reinforced",
      "Tile per Box: 18 pcs per Box (5.5m²)",
      "Installation: Pre-applied Adhesive",
      "Antistatic properties: Moderate",
      "Note: Contemporary design",
    ],
  },
  {
    id: 7,
    name: "Arena",
    image:
      "https://imagedelivery.net/_tN3dTar-XzU6X9_PBgTbA/5c4d0cf5-f34d-425e-3d86-2144a0c9af00/kotak300",
    specs: [
      "Bahan: Polypropylene",
      "Construction: Woven Texture",
      'Machine Gauge: 1/10"',
      "Size Tile: 50 x 50 cm",
      "Pile Height: 3-5 mm",
      "Total Height: 7-8 mm",
      "Pile Weight: 600 gms/m²",
      "Total Weight: 4600 gms/m²",
      "Primary Backing: Non Woven",
      "Secondary Backing: PVC Layer",
      "Tile per Box: 24 pcs per Box (6m²)",
      "Installation: Surface Adhesive",
      "Antistatic properties: Permanently",
      "Note: Versatile dan mudah dipasang",
    ],
  },
  {
    id: 8,
    name: "Graphite",
    image:
      "https://imagedelivery.net/_tN3dTar-XzU6X9_PBgTbA/78468be4-c4fa-4aef-ed59-b9036cf57a00/kotak300",
    specs: [
      "Bahan: Blend Resin",
      "Construction: Loop Pile dengan aksen Cut",
      'Machine Gauge: 1/12"',
      "Size Tile: 55 x 55 cm",
      "Pile Height: 4-5 mm",
      "Total Height: 7-8 mm",
      "Pile Weight: 610 gms/m²",
      "Total Weight: 4650 gms/m²",
      "Primary Backing: Non Woven Polyester",
      "Secondary Backing: PVC + Glass Fiber",
      "Tile per Box: 20 pcs per Box (5.5m²)",
      "Installation: Adhesive Set",
      "Antistatic properties: Yes",
      "Note: Ideal untuk interior modern",
    ],
  },
  {
    id: 9,
    name: "Clarient",
    image:
      "https://imagedelivery.net/_tN3dTar-XzU6X9_PBgTbA/841a560e-bd9b-4b50-9dd3-9594d3ed2100/kotak300",
    specs: [
      "Bahan: Specialized Carpet Fiber",
      "Construction: High-Density Loop Pile",
      'Machine Gauge: 1/10"',
      "Size Tile: 60 x 60 cm",
      "Pile Height: 5-6 mm",
      "Total Height: 8-9 mm",
      "Pile Weight: 640 gms/m²",
      "Total Weight: 4800 gms/m²",
      "Primary Backing: Anti-Slip Non Woven",
      "Secondary Backing: PVC Enhanced",
      "Tile per Box: 24 pcs per Box (6m²)",
      "Installation: Adhesive Binder",
      "Antistatic properties: Permanently",
      "Note: Performa grade profesional",
    ],
  },
]);

// State untuk menyimpan produk yang dipilih agar spesifikasinya muncul di dialog
const selectedProduct = ref(null);

function openDetail(product) {
  selectedProduct.value = product;
}

function closeDetail() {
  selectedProduct.value = null;
}

useSeoMeta({
  title: "Karpet Tile Elegan & Fungsional",
  ogTitle: "Karpet Tile Elegan & Fungsional",
  description:
    "Temukan koleksi karpet tile berkualitas tinggi dari Loomora. Cocok untuk kantor, rumah, atau area komersial. Tersedia berbagai ukuran, bahan, dan desain yang stylish serta fungsional.",
  ogDescription:
    "Temukan koleksi karpet tile berkualitas tinggi dari Loomora. Cocok untuk kantor, rumah, atau area komersial. Tersedia berbagai ukuran, bahan, dan desain yang stylish serta fungsional.",
  ogImage:
    "https://imagedelivery.net/_tN3dTar-XzU6X9_PBgTbA/bfde99e0-d554-4509-416c-6881e792d600/ogimage",
  twitterCard: "summary_large_image",
  robots: "index, follow",
});
</script>

<template>
  <Top :operandata="banner" />

  <!-- Container Utama -->
  <a-container class="my-5">
    <!-- Header Kontak/Informasi -->
    <div class="contact-header">
      <p>
        Kami menyediakan pilihan karpet tile elegan dengan spesifikasi tinggi
        yang dapat disesuaikan dengan gaya, fungsi, dan karakter ruang Anda.
        Temukan produk terbaik untuk interior rumah, kantor, ataupun area
        komersial melalui solusi inovatif kami.
      </p>

      <div class="divider">
        <span class="line"></span>
        <span class="dot"></span>
        <span class="line"></span>
      </div>
    </div>

    <!-- Grid Produk -->
    <div class="grid">
      <div class="card" v-for="product in products" :key="product.id">
        <!-- Gambar Produk -->
        <div class="card-image">
          <img :src="product.image" :alt="product.name" />
        </div>

        <!-- Konten Produk -->
        <div class="card-content">
          <h3 class="product-title">{{ product.name }}</h3>
          <a-button text="Detail" @click="openDetail(product)" />
        </div>
      </div>
    </div>
  </a-container>

  <!-- Dialog Modal untuk Detail Spesifikasi -->
  <div v-if="selectedProduct" class="modal-overlay" @click.self="closeDetail">
    <div class="modal">
      <h3>{{ selectedProduct.name }} - Spesifikasi</h3>
      <ul class="specs">
        <li v-for="(spec, index) in selectedProduct.specs" :key="index">
          {{ spec }}
        </li>
      </ul>
      <button class="close-button" @click="closeDetail">Tutup</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
/* Header Kontak */
.contact-header {
  text-align: center;
  align-content: center;
  margin: 2rem 0;
  p {
    font-size: 1.2rem;
    color: #444;
  }
}

.divider {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;

  .line {
    width: 50px;
    height: 2px;
    background: #ccc;
    margin: 0 0.5rem;
  }
  .dot {
    width: 8px;
    height: 8px;
    background: #d4af37;
    border-radius: 50%;
  }
}

/* Grid Produk */
.grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

/* Card Produk */
.card {
  border-radius: 5px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
  }
}

.card-image {
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  overflow: hidden;
}

.card-image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.card:hover .card-image img {
  transform: scale(1.05);
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: start;

  .product-title {
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #333;
  }
}

/* Modal Overlay dan Dialog */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal {
  background: #fff;
  border-radius: 5px;
  padding: 1.5rem;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);

  h3 {
    margin-top: 0;
    color: #333;
  }

  .specs {
    margin: 1rem 0;
    padding: 0;
    list-style-type: disc;
    padding-left: 1.2rem;
    li {
      font-size: 0.9rem;
      color: #555;
      margin-bottom: 0.3rem;
    }
  }
}

.close-button {
  background-color: #d4af37;
  border: none;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 3px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.close-button:hover {
  background-color: #b29568;
}

/* Responsif */
@media (max-width: 768px) {
  .header-description h1 {
    font-size: 2rem;
  }
  .header-description p {
    font-size: 1rem;
    padding: 0 1rem;
  }
}
</style>
