<template>
  <!-- <div v-if="isLoading" class="loading-indicator">Loading...</div> -->

  <Navbar />
  <router-view />
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
// import { ref, onMounted } from "vue";
import Navbar from "./components/Navbar.vue";

// const isLoading = ref(false);

const router = useRouter();

// function checkAllImagesLoaded() {
//   const images = document.querySelectorAll("img");
//   let loadedCount = 0;
//   images.forEach((image) => {
//     if (image.complete) loadedCount++;
//   });
//   if (loadedCount === images.length) isLoading.value = false;
// }

// onMounted(() => {
//   isLoading.value = true;

//   router.afterEach(() => {
//     checkAllImagesLoaded();
//   });
// });
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.loading-indicator {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: white;
}

</style>
