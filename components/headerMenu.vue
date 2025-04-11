<script setup>
import { reactive, ref, onMounted, onUnmounted } from "vue";

// Variabel untuk efek scroll
const isScrolled = ref(false);

// State menu dengan dropdown untuk "PRODUK"
const state = reactive({
  drawer: false,
  listmenu: [
    { title: "BERANDA", to: "/" },
    {
      title: "PRODUK",
      to: "#",
      children: [
        { title: "Karpet Roll Masjid", to: "/produk/karpet-roll-masjid" },
        {
          title: "Karpet Custom Ballroom",
          to: "/produk/karpet-custom-ballroom",
        },
        { title: "Karpet Custom Masjid", to: "/produk/karpet-custom-masjid" },
        { title: "Karpet Custom Kantor", to: "/produk/karpet-custom-kantor" },
        { title: "Karpet Tile", to: "/produk/karpet-tile" },
      ],
    },
    { title: "PROJEK", to: "/kontak" },
    { title: "KONTAK", to: "/kontak" },
  ],
});

// Fungsi untuk mengubah header saat scroll
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>

<template>
  <!-- MOBILE NAVIGATION DRAWER -->
  <div
    v-show="state.drawer"
    class="navigation-drawer"
    role="navigation"
    aria-label="Mobile Navigation"
  >
    <img src="/logo/4.png" alt="Logo" height="50" />
    <hr class="divider" />
    <ul class="menu">
      <li
        v-for="(item, index) in state.listmenu"
        :key="index"
        @click="state.drawer = false"
      >
        <NuxtLink :to="item.to" class="menu-item">
          {{ item.title }}
        </NuxtLink>
        <!-- Dropdown untuk mobile (opsional) -->
        <ul v-if="item.children" class="dropdown-mobile">
          <li v-for="(child, cIndex) in item.children" :key="cIndex">
            <NuxtLink :to="child.to" class="menu-item">{{
              child.title
            }}</NuxtLink>
          </li>
        </ul>
      </li>
    </ul>
    <button
      class="close-btn"
      @click="state.drawer = false"
      aria-label="Tutup Navigation"
    >
      TUTUP
    </button>
  </div>

  <!-- HEADER UTAMA -->
  <header
    class="app-bar"
    :class="{ 'scrolled-app-bar': isScrolled }"
    role="navigation"
    aria-label="Main Navigation"
  >
    <!-- VERSI MOBILE -->
    <div class="mobile-header mobile-only">
      <div class="mobile-container">
        <img src="/logo/2.png" alt="Logo" height="50" />
        <button
          @click.stop="state.drawer = !state.drawer"
          class="menu-toggle"
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>
      </div>
    </div>

    <!-- VERSI DESKTOP -->
    <div class="desktop-header desktop-only">
      <div class="desktop-container">
        <!-- Logo -->
        <div class="nav-left">
          <img
            :src="isScrolled ? '/logo/2.png' : '/logo/4.png'"
            alt="Logo"
            :height="isScrolled ? '60' : '60'"
          />
        </div>

        <!-- Menu Tengah -->
        <nav class="nav-center">
          <ul class="nav-menu">
            <li
              v-for="(item, index) in state.listmenu"
              :key="index"
              class="nav-item-wrapper"
            >
              <NuxtLink
                :to="item.to"
                class="nav-item"
                :class="{ scrolled: isScrolled }"
                role="menuitem"
              >
                {{ item.title }}
              </NuxtLink>
              <!-- Dropdown untuk produk -->
              <ul v-if="item.children" class="dropdown">
                <li v-for="(child, cIndex) in item.children" :key="cIndex">
                  <NuxtLink :to="child.to" class="dropdown-item">
                    {{ child.title }}
                  </NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

        <!-- Tombol Kontak di Kanan -->
        <div class="nav-right">
          <NuxtLink
            to="/kontak"
            class="contact-btn"
            :class="{ 'btn-scrolled': isScrolled }"
          >
            KONTAK KAMI
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>

  <!-- Bar bawah sebagai aksen (opsional) -->
  <div
    class="app-bar-line"
    :class="{ 'scrolled-app-bar-line': isScrolled }"
  ></div>
</template>

<style scoped lang="scss">
/* ====== Warna Utama ====== */
$bg-dark: #121212;
$accent: #d4af37;
$text-light: #ffffff;
$text-dark: #121212;

/* ====== Global Header ====== */
.app-bar {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.5s ease-in-out;
  background-color: transparent;
  color: $text-light;
  z-index: 900;

  &.scrolled-app-bar {
    background-color: $text-light;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    color: $text-dark;
  }
}

/* ====== Mobile Navigation Drawer ====== */
.navigation-drawer {
  position: fixed;
  top: 0;
  left: 0;
  width: 60%;
  max-width: 300px;
  height: 100vh;
  background: $bg-dark;
  z-index: 1000;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
  padding: 1rem;

  .divider {
    border: none;
    height: 1px;
    background-color: $accent;
    margin: 12px 0;
  }

  .menu {
    list-style: none;
    padding: 0;
    margin: 0;

    .menu-item {
      display: block;
      padding: 10px 0;
      color: $text-light;
      text-decoration: none;
      font-size: 16px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      transition: color 0.3s;

      &:hover {
        color: $accent;
      }
    }
  }

  .dropdown-mobile {
    margin: 0;
    padding-left: 1rem;
    list-style: none;

    .menu-item {
      padding: 8px 0;
      font-size: 14px;
    }
  }

  .close-btn {
    margin-top: 1rem;
    padding: 8px 12px;
    background-color: $accent;
    border: none;
    color: $bg-dark;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s;

    &:hover {
      background-color: lighten;
    }
  }
}

/* ====== Mobile Header ====== */
.mobile-only {
  display: none;
}

.mobile-header {
  .mobile-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
  }

  .menu-toggle {
    background: none;
    border: none;
    font-size: 2rem;
    color: inherit;
    cursor: pointer;
  }
}

/* ====== Desktop Header ====== */
.desktop-only {
  display: block;
}

.desktop-header {
  .desktop-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 95%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
}

/* Responsive: tampilkan mobile jika layar kurang dari 768px */
@media (max-width: 768px) {
  .mobile-only {
    display: block;
  }
  .desktop-only {
    display: none;
  }
}

/* ====== Bagian dalam Desktop Header ====== */
.nav-left {
  display: flex;
  align-items: center;
}

.nav-center {
  .nav-menu {
    list-style: none;
    display: flex;
    gap: 2rem;
    margin: 0;
    padding: 0;
  }

  .nav-item-wrapper {
    position: relative;
  }

  .nav-item {
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    transition: color 0.3s ease;
    color: $text-light;

    &:hover {
      color: $accent;
    }

    &.scrolled {
      color: $text-dark;
    }
  }

  /* Styling dropdown untuk desktop */
  .dropdown {
    display: none;
    position: absolute;
    top: 120%; /* jarak dropdown dari menu induk */
    left: 0;
    background-color: $text-light;
    color: $text-dark;
    list-style: none;
    padding: 0.5rem 0;
    min-width: 220px;
    border: 1px solid $accent;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    z-index: 999;
  }

  .dropdown-item {
    padding: 0.5rem 1rem;
    text-decoration: none;
    font-size: 14px;
    color: inherit;
    display: block;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-color: $accent;
      color: $bg-dark;
    }
  }

  /* Tampilkan dropdown saat hover pada parent */
  .nav-item-wrapper:hover .dropdown {
    display: block;
  }
}

.nav-right {
  display: flex;
  align-items: center;

  .contact-btn {
    padding: 8px 16px;
    text-decoration: none;
    font-weight: bold;
    border: 2px solid $accent;
    border-radius: 4px;
    color: $accent;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-color: $accent;
      color: $bg-dark;
    }

    &.btn-scrolled {
      border-color: $text-dark;
      color: $text-dark;
    }
  }
}

/* ====== Bar Bawah (Aksen) ====== */
.app-bar-line {
  position: fixed;
  top: 100px;
  width: 100%;
  height: 10px;
  transition: background-color 0.5s, box-shadow 0.5s;
  background-color: transparent;

  &.scrolled-app-bar-line {
    background-color: $accent;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
}
</style>
