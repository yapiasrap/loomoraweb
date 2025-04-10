<template>
  <div class="nuxt-container">
    <!-- Menu Drop Down -->
    <transition name="slide-x">
      <div class="menu-container" v-if="menuActive">
        <div class="card">
          <!-- Card Header -->
          <div class="card-header">
            <div class="header-row">
              <div class="header-col icon-col">
                <div class="avatar whatsapp-avatar">
                  <!-- Icon WhatsApp -->
                  <svg class="whatsapp-icon" viewBox="0 0 24 24">
                    <path :d="mdiWhatsapp"></path>
                  </svg>
                </div>
              </div>
              <div class="header-col text-col">
                <p class="header-title">Hubungi Marketing Kami</p>
                <p class="header-subtitle">Dapatkan Layanan Terbaik</p>
              </div>
            </div>
          </div>

          <!-- Card Body: Pilih Area -->
          <div class="card-body" v-if="!isAreaSelected">
            <ul class="area-list">
              <li @click="selectArea('darat')" class="area-item">
                <div class="area-row">
                  <div class="area-icon">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/suvarna-web.appspot.com/o/icon%2Ftruck.png?alt=media&token=394e3b10-c4a1-4793-bf4c-a8894490acb4"
                      alt="Truck Icon"
                      class="icon-img"
                    />
                  </div>
                  <div class="area-info">
                    <a
                      href="#"
                      @click.prevent="selectArea('darat')"
                      class="area-link"
                    >
                      CS Pengiriman Via Darat
                    </a>
                    <p class="status">
                      <span class="zoom-text">🟢</span> Online
                    </p>
                  </div>
                </div>
              </li>
              <hr class="divider" />
              <li @click="selectArea('udara')" class="area-item">
                <div class="area-row">
                  <div class="area-icon">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/suvarna-web.appspot.com/o/icon%2Fairplane.png?alt=media&token=d48cfaa8-8a1f-4efa-8877-a4165c9f7db9"
                      alt="Airplane Icon"
                      class="icon-img"
                    />
                  </div>
                  <div class="area-info">
                    <a
                      href="#"
                      @click.prevent="selectArea('udara')"
                      class="area-link"
                    >
                      CS Pengiriman Via Udara
                    </a>
                    <p class="status">
                      <span class="zoom-text">🟢</span> Online
                    </p>
                  </div>
                </div>
              </li>
              <hr class="divider" />
              <li @click="selectArea('laut')" class="area-item">
                <div class="area-row">
                  <div class="area-icon">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/suvarna-web.appspot.com/o/icon%2Ffreight.png?alt=media&token=488c35fb-445b-489a-92d3-e5f543d3a071"
                      alt="Freight Icon"
                      class="icon-img"
                    />
                  </div>
                  <div class="area-info">
                    <a
                      href="#"
                      @click.prevent="selectArea('laut')"
                      class="area-link"
                    >
                      CS Pengiriman Via Laut
                    </a>
                    <p class="status">
                      <span class="zoom-text">🟢</span> Online
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <!-- Card Body: Form Input Nama Customer -->
          <div class="card-body" v-if="isAreaSelected">
            <form @submit.prevent="savebypengiriman" class="lead-form">
              <input
                type="text"
                v-model="data.new_leads.nama_customer"
                placeholder="Nama Customer"
                required
                class="text-field"
              />
              <a-button
                id="submit whastapp"
                type="submit"
                text="Mulai Percakapan"
                :disabled="data.new_leads.nama_customer === ''"
                class="submit-btn"
              />
            </form>
          </div>
        </div>
      </div>
    </transition>

    <!-- Tombol Floating untuk membuka/tutup menu -->
    <button class="float2 pulse-button2 text-caption" @click="toggleMenu">
      Need Help? <span class="font-weight-bold ml-1">Chat with us</span>
    </button>

    <a class="float pulse-button" @click.prevent="toggleMenu">
      <svg class="whatsapp-icon" viewBox="0 0 24 24">
        <path :d="mdiWhatsapp"></path>
      </svg>
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import moment from "moment";
import { mdiWhatsapp } from "@mdi/js";
import { useleadsStore } from "~/stores/leadsStore";
import { useUserStore } from "~/stores/userStore";

const leadsstore = useleadsStore();
const user = useUserStore();

// State menu & area
const menuActive = ref(false);
const isAreaSelected = ref(false);
const selectedArea = ref<string>("");

// Toggle menu: buka/tutup, reset pilihan area jika ditutup
const toggleMenu = () => {
  if (menuActive.value) {
    resetMenu();
  }
  menuActive.value = !menuActive.value;
};

const resetMenu = () => {
  isAreaSelected.value = false;
  selectedArea.value = "";
};

// Pilih area pengiriman
const selectArea = (area: string) => {
  selectedArea.value = area;
  isAreaSelected.value = true;
};

const data = reactive({
  new_leads: {
    created_at: 0,
    nama_customer: "",
    type_pengiriman: "",
    channel: "Website",
    status: "New",
  },
});

// Fungsi penyimpanan leads berdasarkan jenis pengiriman
const savebypengiriman = () => {
  if (selectedArea.value === "laut") {
    saveleadslaut();
  } else if (selectedArea.value === "udara") {
    saveleadsudara();
  } else {
    saveleadsdarat();
  }
};

function saveleadslaut() {
  data.new_leads.created_at = moment().unix();
  data.new_leads.type_pengiriman = "Laut";
  leadsstore.tambahleadswa(data.new_leads);
  const nama = data.new_leads.nama_customer;
  window.open(
    `https://api.whatsapp.com/send?phone=6281121902309&text=Hallo saya ${nama}, mau tanya seputar Pengiriman Via Laut, boleh dibantu informasinya?`
  );
  data.new_leads.nama_customer = "";
}

function saveleadsdarat() {
  data.new_leads.created_at = moment().unix();
  data.new_leads.type_pengiriman = "Darat";
  leadsstore.tambahleadswa(data.new_leads);
  const nama = data.new_leads.nama_customer;
  window.open(
    `https://api.whatsapp.com/send?phone=6281121902309&text=Hallo saya ${nama}, mau tanya seputar Pengiriman Via Darat, boleh dibantu informasinya?`
  );
  data.new_leads.nama_customer = "";
}

function saveleadsudara() {
  data.new_leads.created_at = moment().unix();
  data.new_leads.type_pengiriman = "Udara";
  leadsstore.tambahleadswa(data.new_leads);
  const nama = data.new_leads.nama_customer;
  window.open(
    `https://api.whatsapp.com/send?phone=6281121902309&text=Hallo saya ${nama}, mau tanya seputar Pengiriman Via Udara, boleh dibantu informasinya?`
  );
  data.new_leads.nama_customer = "";
}
</script>

<style scoped lang="scss">
/* Container Utama */
.nuxt-container {
  position: relative;
}

/* Tombol Floating Chat */
.float {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 20px;
  right: 20px;
  background-color: #25d366;
  color: #fff;
  border-radius: 50%;
  text-align: center;
  font-size: 30px;
  z-index: 110;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.float2 {
  position: fixed;
  bottom: 33px;
  right: 90px;
  z-index: 110;
  background: #fff;
  border: 1px solid #ddd;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 13px;
  cursor: pointer;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
}

/* Animasi Pulse pada tombol */
.pulse-button,
.pulse-button2 {
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

/* Menu Container */
.menu-container {
  position: fixed;
  bottom: 85px;
  right: 20px;
  width: 320px;
  z-index: 200;
}

/* Card Utama */
.card {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  transition: transform 0.3s ease;
}

/* Card Header dengan Background Gradien */
.card-header {
  padding: 15px;
  background: linear-gradient(135deg, #037bae, #026a92);
}

.header-row {
  display: flex;
  align-items: center;
}
.icon-col {
  flex: 0 0 60px;
}
.text-col {
  flex: 1;
  padding-left: 10px;
}
.header-title {
  margin: 0;
  color: #fff;
  font-weight: 700;
  font-size: 15px;
}
.header-subtitle {
  margin: 0;
  color: #e0e0e0;
  font-size: 13px;
}

/* Avatar WhatsApp */
.avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}
.whatsapp-avatar {
  background-color: #25d366;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.whatsapp-icon {
  width: 36px;
  height: 36px;
  fill: #fff;
}

/* Card Body */
.card-body {
  padding: 10px;
}

/* Area List & Item */
.area-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.area-item {
  cursor: pointer;
  padding: 8px 0;
  transition: background 0.3s;
  border-radius: 4px;
}
.area-item:hover {
  background: #f7f7f7;
}
.area-row {
  display: flex;
  align-items: center;
}
.area-icon {
  flex: 0 0 50px;
}
.icon-img {
  width: 50px;
  height: 50px;
}
.area-info {
  flex: 1;
  padding-left: 12px;
}
.area-link {
  font-weight: 700;
  color: #037bae;
  text-decoration: none;
  font-size: 14px;
}
.area-link:hover {
  text-decoration: underline;
}
.status {
  font-size: 12px;
  color: #28a745;
  margin-top: 4px;
}

/* Divider */
.divider {
  border: none;
  border-top: 1px solid #eee;
  margin: 10px 0;
}

/* Lead Form */
.lead-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.text-field {
  width: 100%;
  padding: 10px;
  margin-bottom: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}
.submit-btn {
  width: 100%;
  background-color: #037bae;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
}
.submit-btn:hover {
  background-color: #026a92;
}
.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Transition Slide untuk Menu */
.slide-x-enter-active,
.slide-x-leave-active {
  transition: transform 0.3s ease;
}
.slide-x-enter-from,
.slide-x-leave-to {
  transform: translateX(100%);
}

/* Animasi Zoom untuk Status */
.zoom-text {
  display: inline-block;
  font-size: 10px;
  animation: zoomInOut 2s infinite;
}
@keyframes zoomInOut {
  0%,
  100% {
    transform: scale(0.7);
  }
  50% {
    transform: scale(1);
  }
}

/* Utility Kelas */
.text-caption {
  font-size: 13px;
}
.font-weight-bold {
  font-weight: 700;
}
.ml-1 {
  margin-left: 0.25rem;
}
</style>
