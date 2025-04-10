<script setup lang="ts">
import { ref, reactive } from "vue";
import { onSnapshot, doc } from "firebase/firestore";
import MarkdownIt from "markdown-it";
import { useFirestore } from "vuefire";
import { collection, addDoc } from "firebase/firestore";

const tambahdatabase = async (col: string, document: Object) => {
  const db = useFirestore();
  const colRef = collection(db, col);
  const docRef = await addDoc(colRef, document);
  return docRef.id;
};
// import { cekaichat } from "~/composables/utils";

const message = ref("");
const data = reactive({
  chat: [] as Array<{ text: string; user: string }>,
});

const sendMessage = async () => {
  if (!message.value) return;
  // cekaichat();
  data.chat.push({ text: message.value, user: "user" });

  const b = await tambahdatabase("generate", { prompt: message.value });
  message.value = "";

  const db = useFirestore();
  const documentRef = doc(db, "generate", b);
  const md = new MarkdownIt();
  onSnapshot(documentRef, (docSnap) => {
    if (docSnap.exists()) {
      const c = docSnap.data();
      const response = c["response"];
      if (typeof response !== "undefined") {
        const parsedText = md.render(response);
        data.chat.push({ text: parsedText, user: "bot" });
      }
    }
  });
};
</script>

<template>
  <a-container>
    <a-row>
      <a-col>
        <a-cards width="100%" :elevation="4">
          <div class="corner-triangle" />

          <a-cards-text class="text-center">
            <a-row>
              <a-col class="col-4">
                <img
                  src="https://imagedelivery.net/_tN3dTar-XzU6X9_PBgTbA/f4f5ef3b-9d78-41c8-ee85-027eb3d9cf00/logomedium"
                  class="gambar mr-2"
                  style="margin-top: 25px"
                  alt="chat ai TAP"
                />
              </a-col>
              <a-col
                class="col-8 margins"
                style="text-align: left; margin-top: 10px"
              >
                <p class="judul">Apa yang bisa saya bantu?</p>
                <p class="text-caption bahasa">
                  Si CS PINTAR | Intelligent Customer Service | Intelligenter
                  Kundenservice <br />
                  지능형 고객 서비스 | 智能客服 <br />
                  Этот CS УМНЫЙ
                </p>
              </a-col>
            </a-row>

            <div v-for="(msg, index) in data.chat" :key="index">
              <div
                class="message-card"
                :class="msg.user === 'user' ? 'user-message' : 'bot-message'"
              >
                <div class="message-card-title">
                  <span
                    class="chip"
                    :class="msg.user === 'bot' ? 'chip-red' : 'chip-white'"
                  >
                    {{ msg.user === "user" ? "User" : "Customer Services" }}
                  </span>
                </div>
                <div class="message-card-text" v-html="msg.text" />
              </div>
            </div>

            <div class="divider-new" />
          </a-cards-text>

          <a-cards-action class="justify-center">
            <div class="messageBox">
              <div class="fileUploadWrapper">
                <label for="file">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 337 337"
                  >
                    <circle
                      stroke-width="20"
                      stroke="#6c6c6c"
                      fill="none"
                      r="158.5"
                      cy="168.5"
                      cx="168.5"
                    ></circle>
                    <path
                      stroke-linecap="round"
                      stroke-width="25"
                      stroke="#6c6c6c"
                      d="M167.759 79V259"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-width="25"
                      stroke="#6c6c6c"
                      d="M79 167.138H259"
                    ></path>
                  </svg>
                  <span class="tooltip">Add an image</span>
                </label>
                <input type="file" id="file" name="file" />
              </div>
              <input
                id="messageInput"
                v-model="message"
                @keyup.enter="sendMessage"
                type="text"
                placeholder="Tanyakan apa saja seputar racking..."
              />
              <button
                id="hit_aichat"
                class="custom-btn font-weight-bold"
                aria-label="Ai Chat"
                @click="sendMessage"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 664 663"
                >
                  <path
                    fill="none"
                    d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"
                  ></path>
                  <path
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="33.67"
                    stroke="#6c6c6c"
                    d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"
                  ></path>
                </svg>
              </button>
            </div>
          </a-cards-action>
        </a-cards>
      </a-col>
    </a-row>
  </a-container>
</template>

<style scoped lang="scss">
.gambar {
  width: 7.5em;
}

@media (max-width: 400px) {
  .gambar {
    width: 60px;
  }
}
.message-card {
  max-width: 100%;
  padding: 10px;
  border-radius: 10px;
  margin: 5px 0;
  display: flex;
  flex-direction: column;
}

/* AI Chat (Kiri) */
.bot-message {
  align-self: flex-start;
  text-align: start;
  background-color: #f1f1f1;
  color: black;
  border-radius: 20px 20px 20px 0;
}

.user-message {
  background-color: #232331;
  color: rgb(247, 247, 247);
  border-radius: 20px 20px 0 20px;
  text-align: right;
}

.chip {
  font-size: 12px;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 6px;
}

.chip-red {
  background-color: rgb(243, 22, 14);
  color: white;
}

.chip-white {
  background-color: rgb(255, 255, 255);
  color: rgb(247, 10, 10);
}

@media (max-width: 576px) {
  .message-card {
    max-width: 100%;
  }
}

.corner-triangle {
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border-left: 120px solid transparent;
  border-top: 50px solid #ff3a3a;
}

@media (min-width: 400px) {
  .custom-text {
    font-size: 18px;
  }
}

@media (min-width: 960px) {
  .custom-text {
    font-size: 30px;
  }
}

.judul {
  margin-top: 10px;
  font-size: 30px;
  font-weight: 500;
}

@media (max-width: 576px) {
  .judul {
    font-size: 25px;
    line-height: 1.9rem;
    font-weight: 500;
  }
}

.bahasa {
  margin-top: -20px;
  font-size: 15px;
}

@media (max-width: 576px) {
  .bahasa {
    font-size: 12px;
    margin-top: -10px;
  }
}

.divider-new {
  height: 2px;
  background-color: #e0e0e0;
  margin: 1rem 0;
}

/* From Uiverse.io by vinodjangid07 */
.messageBox {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 0 15px;
  border-radius: 10px;
  border: 1px solid rgb(200, 200, 200);
}
.messageBox:focus-within {
  border: 1px solid rgb(150, 150, 150);
}
.fileUploadWrapper {
  width: fit-content;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

#file {
  display: none;
}
.fileUploadWrapper label {
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.fileUploadWrapper label svg {
  height: 18px;
}
.fileUploadWrapper label svg path {
  transition: all 0.3s;
}
.fileUploadWrapper label svg circle {
  transition: all 0.3s;
}
.fileUploadWrapper label:hover svg path {
  stroke: black;
}
.fileUploadWrapper label:hover svg circle {
  stroke: black;
  fill: #e0e0e0;
}
.fileUploadWrapper label:hover .tooltip {
  display: block;
  opacity: 1;
}
.tooltip {
  position: absolute;
  top: -40px;
  display: none;
  opacity: 0;
  color: black;
  font-size: 10px;
  text-wrap: nowrap;
  background-color: #ffffff;
  padding: 6px 10px;
  border: 1px solid #d0d0d0;
  border-radius: 5px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s;
}
#messageInput {
  width: 100%;
  height: 100%;
  background-color: transparent;
  outline: none;
  border: none;
  padding-left: 10px;
  color: black;
}
#messageInput:focus ~ #hit_aichat svg path,
#messageInput:valid ~ #hit_aichat svg path {
  fill: #e0e0e0;
  stroke: black;
}

#hit_aichat {
  width: fit-content;
  height: 100%;
  background-color: transparent;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 35px;
  cursor: pointer;
  transition: all 0.3s;
}
#hit_aichat svg {
  height: 18px;
  transition: all 0.3s;
}
#hit_aichat svg path {
  transition: all 0.3s;
}
#hit_aichat:hover svg path {
  fill: #e0e0e0;
  stroke: black;
}
</style>
