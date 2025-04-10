<template>
  <a-container>
    <div class="tracking-card">
      <div class="card-content">
        <a-row>
          <!-- Kolom Kiri: Judul -->
          <div class="left-col">
            <h1 class="title">
              Track <br />
              Your Order
            </h1>

            <div class="divider"></div>
          </div>

          <!-- Kolom Kanan: Form Tracking -->
          <div class="right-col">
            <div class="form-card">
              <div class="form-content">
                <div class="form-row">
                  <!-- Input Field dengan Ikon SVG -->
                  <div class="input-col">
                    <div class="input-container">
                      <svg class="icon-svg" viewBox="0 0 24 24">
                        <path :d="mdiAccountOutline" />
                      </svg>

                      <input
                        type="text"
                        v-model="trackid"
                        placeholder="Enter your tracking ID"
                        class="tracking-input"
                      />
                    </div>
                  </div>

                  <!-- Tombol Submit -->
                  <div class="button-col">
                    <a-button
                      text="TRACK ORDER"
                      @click="goto"
                      aria-label="Tracking Order"
                      class="ml-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- End Kolom Kanan -->
        </a-row>
      </div>
    </div>
  </a-container>
</template>

<script setup>
import _ from "lodash";
import { mdiAccountOutline } from "@mdi/js";

const route = useRouter();
const trackid = ref("");

async function goto() {
  const idtrack = _.toUpper(trackid.value);
  const getdata = await getbyid("tracking", idtrack);
  if (getdata) {
    route.push("/tracking/" + idtrack);
  } else {
    useNuxtApp().$toast.error("Data Tracking anda tidak valid: " + idtrack);
  }
}
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Barlow:wght@700&display=swap");

.tracking-card {
  width: 100%;
  background-color: #037bae;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.card-content {
  padding: 2rem;
}

/* Kolom Kiri */
.left-col {
  width: 100%;
  color: #ffffff;
  margin-bottom: 1.5rem;
  @media (min-width: 600px) {
    width: 40%;
    margin-bottom: 0;
  }
}

.title {
  font-family: "Barlow", sans-serif;
  font-weight: 700;
  font-size: 2.9rem;
  margin: 0;
  line-height: 1.2;
}

.divider {
  width: 60%;
  height: 4px;
  background-color: #ffffff;
  margin-top: 1rem;
  border-radius: 2px;
}

/* Kolom Kanan */
.right-col {
  width: 100%;
  @media (min-width: 600px) {
    width: 60%;
  }
}

.form-card {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
}

.form-content {
  width: 100%;
}

.form-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

/* Input field area */
.input-col {
  width: 100%;
  margin-bottom: 1rem;
  @media (min-width: 600px) {
    width: 65%;
    margin-bottom: 0;
  }
}

.input-container {
  display: flex;
  align-items: center;
  border: 2px solid #ddd;
  border-radius: 4px;
  padding: 0.5rem 0.75rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.input-container:focus-within {
  border-color: #037bae;
  box-shadow: 0 0 5px rgba(3, 123, 174, 0.5);
}

.icon-svg {
  width: 28px;
  height: 28px;
  fill: #888;
  margin-right: 0.75rem;
}

.tracking-input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 1rem;
  color: #333;
  font-family: "Barlow", sans-serif;
}
</style>
