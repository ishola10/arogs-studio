<template>
  <Spinner v-if="!isImagesLoaded" />

  <div v-else class="gallery-container">
    <div
      class="gallery-banner"
      :style="{ backgroundImage: 'url(' + currentBackground + ')' }"
    >
      <div>
        <h1 data-aos="fade-up" data-aos-delay="1300">GALLERY</h1>
        <p data-aos="fade-up" data-aos-delay="1300">
          A selection of our favourite designs created with love and passion by
          Arogs Studio.
        </p>
      </div>
    </div>

    <div class="gallery-images">
      <h3>OUR WORK</h3>
      <h1>PROJECT GALLERY</h1>

      <div class="images">
        <img src="../assets/images/image-003.jpg" alt="img 1" />
        <img src="../assets/images/image-004.jpg" alt="img 2" />
        <img src="../assets/images/image-005.jpg" alt="img 3" />
        <img src="../assets/images/image-007.jpg" alt="img 5" />
        <img src="../assets/images/image-008.jpg" alt="img 6" />
        <img src="../assets/images/image-009.jpg" alt="img 7" />
        <img src="../assets/images/image-010.jpg" alt="img 8" />
        <img src="../assets/images/_..2.png" alt="img 9" />
        <img src="../assets/images/_.3.png" alt="img 10" />
        <img src="../assets/images/1st floor.png" alt="img 11" />
        <img src="../assets/images/t.1.png" alt="img 12" />
        <img src="../assets/images/T.2.png" alt="img 13" />
        <img src="../assets/images/t.3.png" alt="img 14" />
        <img src="../assets/images/V.1.png" alt="img 15" />
        <img src="../assets/images/v.4.png" alt="img 16" />
        <img src="../assets/images/v2.png" alt="img 17" />
        <img src="../assets/images/IMG_0693.png" alt="img 18" />
        <img src="../assets/images/IMG_2338.png" alt="img 19" />
        <img src="../assets/images/IMG_2339.png" alt="img 20" />
        <img src="../assets/images/IMG_2340.png" alt="img 21" />
        <img src="../assets/images/1. Approach view.jpg" alt="" />
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import Footer from "./Footer.vue";
import Spinner from "@/components/Spinner.vue";

import image1 from "../assets/images/image-003.jpg";
import image2 from "../assets/images/image-004.jpg";
import image3 from "../assets/images/image-005.jpg";
import image4 from "../assets/images/image-007.jpg";

const backgrounds = [image1, image2, image3, image4];
const currentBackground = ref<string>(image1);

const isImagesLoaded = ref(false);

// Function to change the background image
function changeBackground() {
  const currentIndex = backgrounds.indexOf(currentBackground.value);
  const nextIndex = (currentIndex + 1) % backgrounds.length;
  currentBackground.value = backgrounds[nextIndex];
}

function checkAllImagesLoaded() {
  const images = Array.from(
    document.querySelectorAll(".images img")
  ) as HTMLImageElement[];
  const loadPromises = images.map(
    (img) =>
      new Promise<void>((resolve) => {
        if (img.complete) {
          resolve();
        } else {
          (img as HTMLImageElement).onload = (img as HTMLImageElement).onerror =
            () => resolve();
        }
      })
  );

  Promise.all(loadPromises).then(() => {
    isImagesLoaded.value = true;
  });
}

onMounted(() => {
  setInterval(changeBackground, 3000);
  checkAllImagesLoaded();
});
</script>

<style scoped>
.gallery-container {
  width: 100%;
}

.gallery-banner {
  background-size: cover;
  background-position: center;
  color: var(--color-background);
  text-align: left;
  height: 100vh;
  transition: background-image 0.5s ease-in-out;
}

.gallery-banner div {
  padding: 20px 60px;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.gallery-banner h1 {
  font-size: 7rem;
  color: var(--color-text);
}

.gallery-banner p {
  font-size: 2rem;
  color: var(--color-heading);
}

/* Gallery images */
.gallery-images {
  padding: 20px 60px;
  text-align: justify;
  margin-top: 5%;
  line-height: 1.5;
}

.gallery-images h3 {
  font-size: 2.5rem;
}

.gallery-images h1 {
  font-size: 4rem;
}

.images {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.images img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.images img:hover {
  transform: scale(1.03);
}

@media screen and (max-width: 500px) {
  .gallery-banner {
    height: 50vh;
  }
  .gallery-banner div {
    padding: 20px 20px;
  }
  .gallery-banner h1 {
    font-size: 2.5rem;
  }

  .gallery-banner p {
    font-size: 1.2rem;
    margin-left: 0;
  }
  .gallery-images {
    padding: 20px 20px;
  }
  .gallery-images h3 {
    font-size: 1.5rem;
    text-align: center;
    padding: 0;
    color: #6c6c6c;
  }
  .gallery-images h1 {
    font-size: 1.7rem;
    font-weight: bolder;
    text-align: center;
  }
}
</style>
