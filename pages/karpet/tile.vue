<script setup>
import { ref } from "vue";

// Data banner
const banner = { judul: "Karpet Tile" };

// Array produk dengan spesifikasi
const products = ref([
  {
    id: 1,
    name: "Gravity",
    image:
      "https://firebasestorage.googleapis.com/v0/b/loomora-cdb63.firebasestorage.app/o/images%2Fproject%2F4.jpeg?alt=media&token=568d0b1f-5f2d-40cb-a4be-e4101f10bc83",
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
      "https://firebasestorage.googleapis.com/v0/b/loomora-cdb63.firebasestorage.app/o/images%2Fproject%2F7.jpeg?alt=media&token=4d6947be-b187-4882-b3d9-adeed2973443",
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
      "https://firebasestorage.googleapis.com/v0/b/loomora-cdb63.firebasestorage.app/o/images%2Fproject%2F10.jpeg?alt=media&token=92af62cd-0b12-4062-a3b0-92fd0755173d",
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
      "https://firebasestorage.googleapis.com/v0/b/loomora-cdb63.firebasestorage.app/o/images%2Fproject%2F15.jpeg?alt=media&token=8d358795-f9a9-479b-913d-bbf36930517a",
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
      "https://firebasestorage.googleapis.com/v0/b/loomora-cdb63.firebasestorage.app/o/images%2Fproject%2F18.jpeg?alt=media&token=c41b5049-df8d-4938-9025-8ccbc6504c41",
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
      "https://firebasestorage.googleapis.com/v0/b/loomora-cdb63.firebasestorage.app/o/images%2Fproject%2F2.jpeg?alt=media&token=75eab2cf-d47e-4156-8117-ef0190bbe6de",
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
      "https://firebasestorage.googleapis.com/v0/b/loomora-cdb63.firebasestorage.app/o/images%2Fproject%2F8.jpeg?alt=media&token=5df0c3b0-2e79-4349-a01e-c909aaeb2db7",
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
      "https://firebasestorage.googleapis.com/v0/b/loomora-cdb63.firebasestorage.app/o/images%2Fproject%2F12.jpeg?alt=media&token=8fb2d24d-c37f-418a-b50c-06f7b2b632b8",
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
      "https://firebasestorage.googleapis.com/v0/b/loomora-cdb63.firebasestorage.app/o/images%2Fproject%2F22.jpeg?alt=media&token=4f016d06-84dd-4983-8878-e77b39de26cb",
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
</script>

<template>
  <!-- Komponen Top (misalnya header navigasi) -->
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
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
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
  padding: 1rem;
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
