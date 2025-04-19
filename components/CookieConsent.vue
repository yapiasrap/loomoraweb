<template>
  <transition name="fade">
    <div v-if="show" class="cookie-wrapper">
      <div class="cookie-box">
        <div class="cookie-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#d4af37" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2a10 10 0 0 1 9.95 9.1 1 1 0 0 1-1.35.92 3.5 3.5 0 0 0-4.52 4.52 1 1 0 0 1-.92 1.35A10 10 0 1 1 12 2z"/>
          </svg>
        </div>
        <div class="cookie-content">
          <p>
            Kami menggunakan cookie untuk memberikan pengalaman terbaik. 
            <NuxtLink to="/privacy-policy" class="cookie-link">Pelajari lebih lanjut</NuxtLink>
          </p>
          <div class="cookie-actions">
            <button class="btn accept" @click="acceptCookies">Terima</button>
            <button class="btn reject" @click="rejectCookies">Tolak</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const show = ref(false)

onMounted(() => {
  const consent = localStorage.getItem('cookieAccepted')
  if (consent === null) {
    show.value = true
  }
})

function acceptCookies() {
  localStorage.setItem('cookieAccepted', 'true')
  show.value = false
  if (typeof window.loadGTM === 'function') window.loadGTM()
}

function rejectCookies() {
  localStorage.setItem('cookieAccepted', 'false')
  show.value = false
}
</script>

<style scoped lang="scss">
.cookie-wrapper {
  position: fixed;
  bottom: 24px;
  left: 24px;
  right: 24px;
  z-index: 9999;
  display: flex;
  justify-content: center;
  padding: 0 1rem;

  @media (max-width: 640px) {
    left: 12px;
    right: 12px;
    bottom: 16px;
  }
}

.cookie-box {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.9);
  border-radius: 18px;
  border: 1px solid #d4af37;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  max-width: 680px;
  width: 100%;
  padding: 20px 24px;
  font-family: 'Inter', sans-serif;
  color: #2c2c2c;

  .cookie-icon {
    flex-shrink: 0;
    margin-top: 4px;
  }

  .cookie-content {
    flex: 1;

    p {
      font-size: 0.95rem;
      line-height: 1.6;
      margin-bottom: 16px;
    }

    .cookie-link {
      color: #d4af37;
      font-weight: 500;
      text-decoration: underline;
      transition: color 0.3s;

      &:hover {
        color: #b8932d;
      }
    }

    .cookie-actions {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;

      .btn {
        font-size: 0.875rem;
        font-weight: 600;
        border-radius: 8px;
        padding: 8px 18px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        border: none;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
      }

      .accept {
        background: linear-gradient(135deg, #d4af37, #c59c2b);
        color: white;

        &:hover {
          background: linear-gradient(135deg, #c59c2b, #d4af37);
        }
      }

      .reject {
        background-color: #f4f4f4;
        color: #333;

        &:hover {
          background-color: #e5e5e5;
        }
      }
    }
  }
}

/* Fade-in animation */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
