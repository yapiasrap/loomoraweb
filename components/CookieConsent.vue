<template>
  <transition name="fade">
    <div v-if="show" class="cookie-consent">
      <div class="cookie-container">
        <p class="cookie-text">
          Situs kami menggunakan cookie untuk meningkatkan pengalaman pengguna.
          <NuxtLink class="privacy-link" to="/privacy-policy"
            >Pelajari lebih lanjut</NuxtLink
          >.
        </p>
        <div class="cookie-actions">
          <a-button
            id="accept cookies"
            text="Terima"
            @click="acceptCookies"
            class="btn accept"
          />
          <button class="btn reject" @click="rejectCookies">Tolak</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from "vue";

const show = ref(false);

onMounted(() => {
  const consent = localStorage.getItem("cookieAccepted");
  if (consent === null) {
    // Delay singkat untuk menampilkan transisi yang halus
    setTimeout(() => {
      show.value = true;
    }, 500);
  }
});

function acceptCookies() {
  localStorage.setItem("cookieAccepted", "true");
  show.value = false;
  // Eksekusi loadGTM apabila fungsi tersebut tersedia
  if (typeof window.loadGTM === "function") window.loadGTM();
}

function rejectCookies() {
  localStorage.setItem("cookieAccepted", "false");
  show.value = false;
}
</script>

<style scoped lang="scss">
/* Transisi fade untuk tampilan yang halus */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.cookie-consent {
  position: fixed;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 700px;
  background: #fff;
  border-top: 4px solid #037bae;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 20px 30px;
  font-family: "Roboto", sans-serif;
}

.cookie-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 15px;
}

.cookie-text {
  flex: 1;
  font-size: 1rem;
  color: #333;
  margin: 0;

  .privacy-link {
    color: #037bae;
    text-decoration: underline;
    transition: color 0.3s;

    &:hover {
      color: #026a92;
    }
  }
}

.cookie-actions {
  display: flex;
  gap: 10px;

  .btn {
    min-width: 80px;
    /* Mengurangi padding untuk menurunkan tinggi tombol */
    padding: 4px 12px;
    font-size: 0.85rem;
    font-weight: 600;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:active {
      transform: scale(0.98);
    }
  }

  .accept {
    background-color: #037bae;
    color: #fff;

    &:hover {
      background-color: #026a92;
    }
  }

  .reject {
    background-color: transparent;
    color: #037bae;
    border: 2px solid #037bae;

    &:hover {
      background-color: #f0f8fb;
    }
  }
}

@media (max-width: 600px) {
  .cookie-container {
    flex-direction: column;
    align-items: flex-start;
  }

  .cookie-actions {
    width: 100%;
    justify-content: flex-end;

    .btn {
      width: 100%;
      text-align: center;
    }
  }
}
</style>
