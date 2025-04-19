<template>
  <div class="nuxt-container">
    <!-- Tombol Floating WhatsApp Langsung -->
    <a
      class="float pulse-button"
      @click.prevent="openWhatsapp"
      title="Chat with us"
    >
      <svg class="whatsapp-icon" viewBox="0 0 24 24">
        <path :d="mdiWhatsapp" />
      </svg>
    </a>
  </div>
</template>

<script setup lang="ts">
import { mdiWhatsapp } from "@mdi/js";

// Fungsi untuk langsung membuka chat WhatsApp
function openWhatsapp() {
  window.open(
    `https://api.whatsapp.com/send?phone=6281121902309&text=Hallo, saya mau bertanya lebih lanjut.`
  );
}
</script>

<style scoped lang="scss">
/* Container Utama */
.nuxt-container {
  position: relative;
}

/* Tombol Floating WhatsApp */
.float {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 20px;
  right: 20px;
  background-color: #25d366;
  color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  z-index: 110;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* Animasi Pulse */
.pulse-button {
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0% {
    transform: scale(0.98);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(0.98);
  }
}

.whatsapp-icon {
  width: 36px;
  height: 36px;
  fill: #fff;
}
</style>
