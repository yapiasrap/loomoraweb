<script setup>
import { computed } from "vue";
import { useWindowSize } from "@vueuse/core";
import { mdiInstagram, mdiFacebook, mdiEmailOutline } from "@mdi/js";

const { width } = useWindowSize();
const isMdAndUp = computed(() => width.value >= 960);
</script>

<template>
  <footer class="footer">
    <a-container>
      <!-- Baris kedua: Get in Touch dan informasi kontak -->
      <a-row class="contact-row">
        <a-col class="col-12 col-md-4">
          <p class="contact-title">GET IN TOUCH</p>
          <p class="contact-address">
            Jl. Kebagusan Raya, Mawar No. 54 Pasar Minggu - Jakarta Selatan Kode
            Pos 12520
          </p>
          <div class="contact-email">
            <svg class="icon" width="20" height="20" viewBox="0 0 24 24">
              <path :d="mdiEmailOutline" />
            </svg>
            <span>marketing@lomoora.co.id</span>
          </div>

          <div class="social-links">
            <a
              class="social-btn facebook"
              href="https://www.facebook.com/customkarpet"
              target="_blank"
              title="Kunjungi Facebook kami"
            >
              <svg class="icon" width="25" height="25" viewBox="0 0 24 24">
                <path :d="mdiFacebook" />
              </svg>
            </a>
            <a
              class="social-btn instagram"
              href="https://www.instagram.com/customkarpet"
              target="_blank"
              title="Kunjungi Instagram kami"
            >
              <svg class="icon" width="25" height="25" viewBox="0 0 24 24">
                <path :d="mdiInstagram" />
              </svg>
            </a>
          </div>
        </a-col>

        <a-col class="col-12 col-md-8">
          <a-row :style="{ marginLeft: isMdAndUp ? '8%' : '0' }">
            <a-col class="col-12 col-sm-3">
              <p class="title">EXPLORE</p>
              <div class="divider"></div>
              <ul class="footer-links">
                <li>
                  <a href="/"> Beranda </a>
                </li>

                <li>
                  <a href="/produk"> Produk </a>
                </li>

                <li>
                  <a href="/projek"> Projek </a>
                </li>

                <li>
                  <a href="/kontak"> Kontak </a>
                </li>
              </ul>
            </a-col>

            <a-col class="col-12 col-sm-4">
              <p class="title">KARPET PREMIUM</p>
              <div class="divider"></div>
              <ul class="footer-links">
                <li>
                  <a href="/produk/karpet/roll-masjid"> Karpet Roll Masjid </a>
                </li>

                <li>
                  <a href="/produk/karpet/custom-ballroom">
                    Karpet Custom Ballroom
                  </a>
                </li>

                <li>
                  <a href="/produk/karpet/custom-masjid">
                    Karpet Custom Masjid
                  </a>
                </li>

                <li>
                  <a href="/produk/karpet/custom-kantor">
                    Karpet Custom Kantor
                  </a>
                </li>

                <li>
                  <a href="/produk/karpet/tile"> Karpet Tile </a>
                </li>
              </ul>
            </a-col>

            <a-col class="col-12 col-sm-4 text-center">
              <img
                src="https://imagedelivery.net/_tN3dTar-XzU6X9_PBgTbA/9b8c7f67-1493-44e1-3fff-23bd51661b00/mobile"
                alt="logo Loomora"
                height="150"
                class="mx-auto d-block"
              />
              <p class="logo-text text-center">
                Ahlinya Karpet <br />
                <span class="logo-highlight">Custom</span> Eksklusif
              </p>
            </a-col>
          </a-row>
        </a-col>
      </a-row>

      <hr class="section-divider" />

      <!-- Baris ketiga: Copyright & kebijakan -->
      <a-row class="bottom-row">
        <a-col class="col-12 col-md-7">
          <span class="small-text">
            Copyright © 2025 Loomora, All rights reserved. Crafted with passion.
          </span>
        </a-col>

        <a-col class="col-12 col-md-5 text-right">
          <a href="/terms" class="footer-bottom-link">Terms of Use</a>
          <a href="/privacy-policy" class="footer-bottom-link"
            >Privacy Policy</a
          >
          <a href="/cookie-policy" class="footer-bottom-link">Cookie Policy</a>
        </a-col>
      </a-row>
    </a-container>
  </footer>
</template>

<style scoped lang="scss">
/* Style Footer */
.footer {
  background-color: #000;
  color: #fff;
  padding: 3%;
  font-family: "Helvetica Neue", sans-serif;
}

.title {
  font-weight: bold;
  font-size: 1.3rem;
  margin: 0;
  margin-top: 2rem;
}

.divider {
  width: 50px;
  height: 3px;
  background-color: #d4af37;
  margin-bottom: 0.75rem;
  opacity: 1;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0.5rem 0 0 0;
}

.footer-links li {
  margin-bottom: 8px;
  transition: color 0.3s ease;
}

.footer-links li a {
  color: inherit;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links li a:hover {
  color: #d4af37;
}

.section-divider {
  border: none;
  border-top: 1px solid #444;
  margin: 2.5rem 0;
}

.contact-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 0 1rem;
}

.contact-address {
  margin-bottom: 1rem;
  line-height: 1.5;
}

.contact-email {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.contact-email .icon {
  fill: #fff;
  margin-right: 0.5rem;
}

.social-links {
  display: flex;
  gap: 0.5rem;
}

.social-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 4px;
  text-decoration: none;
}

.social-btn.facebook {
  background-color: #3b5998;
}

.social-btn.instagram {
  background-color: #e4405f;
}

.social-btn .icon {
  fill: #fff;
}

.logo-text {
  font-size: 2rem;
  margin-top: -0.1rem;
  line-height: 1.2;
}

.logo-highlight {
  color: #d4af37;
}

.bottom-row {
  align-items: center;
  font-size: 0.875rem;
}

.footer-bottom-link {
  color: #fff;
  text-decoration: none;
  margin: 0 1rem;
  transition: color 0.3s ease;
}

.footer-bottom-link:hover {
  color: #d4af37;
}

.small-text {
  font-size: 0.875rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

