<template>
  <div v-if="isLoading" class="loading-indicator">Loading...</div>

  <div
    v-else
    class="about-banner"
    :style="{ backgroundImage: 'url(' + currentBackground + ')' }"
  >
    <div>
      <h1 data-aos="fade-up" data-aos-delay="1300">Projects</h1>
      <p data-aos="fade-up" data-aos-delay="1300">
        A collective of forward-thinking architects motivated by their passion
        for designing cutting-edge, visually appealing, environmentally
        sustainable, and cost-effective structures.
      </p>
    </div>
  </div>

  <div class="project-container">
    <h1>Projects</h1>
    <p class="pl">check out our latest projects</p>
    <div v-for="(project, index) in projects" :key="index" class="project">
      <img
        class="project-image"
        :src="project.images[0]"
        alt="project-image"
        @click="showProjectImages(index)"
      />
      <div class="project-content">
        <h1>{{ project.title }}</h1>
        <p>
          <strong>Location</strong> <br />
          {{ project.location }}
        </p>
        <p>
          <strong>Status</strong> <br />
          {{ project.stat }}
        </p>
        <p>
          <strong>Description</strong> <br />
          {{ project.description }}
        </p>
      </div>
    </div>
  </div>

  <div v-if="selectedProject !== null" class="project-images-modal">
    <button class="close-btn" @click="closeProjectImages">
      <img src="../assets/images/icons8-x-50.png" alt="close" />
    </button>
    <div class="image-slider">
      <div class="image-wrapper">
        <template
          v-if="
            projects[selectedProject].images[currentImageIndex].endsWith('.svg')
          "
        >
          <object
            :data="projects[selectedProject].images[currentImageIndex]"
            type="image/svg+xml"
          ></object>
        </template>
        <template v-else>
          <img
            :src="projects[selectedProject].images[currentImageIndex]"
            alt="project-image"
          />
        </template>
      </div>
      <button class="nav-btn prev-btn" @click="navigate('prev')">
        <img src="../assets/images/icons8-left-arrow-50.png" alt="right" />
      </button>
      <button class="nav-btn next-btn" @click="navigate('next')">
        <img src="../assets/images/icons8-right-arrow-50.png" alt="right" />
      </button>
    </div>
  </div>

  <Footer />
</template>

<script setup lang="ts">
import Footer from "./Footer.vue";
import { ref, onMounted, onBeforeUnmount } from "vue";
import project1Image1 from "../assets/images/ajiro_aguri/ALAHAJI KANIMODO - 14 FLATS 3D.pdf - Adobe Acrobat Reader (64-bit) 4_29_2024 7_20_32 PM.png";
import project1Image2 from "../assets/images/ajiro_aguri/PHOTO-2024-04-09-11-41-35 2.jpg";
import project1Image3 from "../assets/images/ajiro_aguri/PHOTO-2024-04-09-11-41-35.jpg";
import project1Image4 from "../assets/images/ajiro_aguri/PHOTO-2024-04-09-11-41-36 2.jpg";
import project1Image5 from "../assets/images/ajiro_aguri/PHOTO-2024-04-09-11-41-36 3.jpg";
import project1Image6 from "../assets/images/ajiro_aguri/PHOTO-2024-04-09-11-41-36 4.jpg";
import image1 from "../assets/images/image-003.jpg";
import image2 from "../assets/images/image-004.jpg";
import image3 from "../assets/images/image-005.jpg";
import image4 from "../assets/images/image-007.jpg";
import Surulere1 from "../assets/images/Surulere/IMG_0100.png";
import Surulere2 from "../assets/images/Surulere/IMG_0105.png";
import Surulere3 from "../assets/images/Surulere/IMG_0235.png";
import Surulere4 from "../assets/images/Surulere/IMG_0236.png";
import Surulere5 from "../assets/images/Surulere/IMG_0246.png";
import Sub1 from "../assets/images/Collaborations as subcontractors/IMG_0157.png";
import Sub2 from "../assets/images/Collaborations as subcontractors/IMG_3413.jpg";
import Edo1 from "../assets/images/edo_state/1. Approach view.jpg";
import Edo2 from "../assets/images/edo_state/2. back view.jpg";
import Oyo1 from "../assets/images/oyo/oyo1.png";
import Oyo2 from "../assets/images/oyo/oyo2.png";
import Oyo3 from "../assets/images/oyo/oyo3.png";

const projects = [
  {
    title: "Proposed Residential Design",
    images: [Surulere1, Surulere2, Surulere3, Surulere4, Surulere5],
    location: "Surulere, Lagos, Nigeria",
    stat: "Completed in 2022",
    description:
      "This residential complex features 4 units of 2-bedroom flats and 3 studio apartments in Surulere. It includes designated parking areas, fully serviced apartments, treated water facilities for enhanced health, and robust security measures. The design blends luxury, simplicity, and aesthetics seamlessly.",
  },
  {
    title: "Proposed Residential Design",
    images: [
      project1Image1,
      project1Image2,
      project1Image3,
      project1Image4,
      project1Image5,
      project1Image6,
    ],
    location: "Eti-Osa L.G.A. Area, Lagos State, Nigeria",
    stat: "Completed in 2023",
    description:
      "This residential complex consists of 14 units of 2-bedroom flats arranged in 2 blocks of 7 flats each. Located in a prestigious estate at the heart of Agungi Ajiran, it boasts beautiful landscaping, ample parking spaces, full servicing, and robust security measures. The design seamlessly blends luxury with simplicity.",
  },
  {
    title: "Proposed Residential Design",
    images: [Sub1, Sub2],
    location: "Eti-Osa L.G.A. Area, Lagos State, Nigeria",
    stat: "Completed in 2023",
    description:
      "This spacious and aesthetically appealing 4-bedroom duplex features a thoughtfully designed layout that maximizes both functionality and style. With generous living spaces, including a large living room, dining area, and modern kitchen. The master bedroom comes with an ensuite bathroom and walk-in closet, while the remaining bedrooms are also ensuite, they also provide comfortable accommodation for family members or guests. High ceilings, large windows, and carefully selected finishes enhance the sense of openness and elegance throughout the home, creating a welcoming atmosphere for residents and visitors alike.",
  },
  {
    title: "Residential Design",
    images: [Edo1, Edo2],
    location: "ESAN NORTH-EASTLOCAL GOVERNMENT AREA, EDO STATE, NIGERIA",
    stat: "Ongoing",
    description:
      "This modern 3-bedroom bungalow epitomizes contemporary living with its sleek design and efficient use of space. The open-concept layout seamlessly integrates the living, dining, and kitchen areas, creating a fluid and versatile living space. The bedrooms are strategically placed for privacy, with the master bedroom boasting an ensuite bathroom and ample closet space. High ceilings and large windows flood the interior with natural light, enhancing the sense of openness and connectivity with the outdoors.",
  },
  {
    title: "Residential development ",
    images: [Oyo1, Oyo2, Oyo3],
    location: "AKOBO OJURIN AREA, IBADAN, OYO STATE, NIGERIA",
    stat: "Completed in 2023",
    description:
      "This contemporary 5-bedroom duplex redefines luxury living with its sophisticated design and premium amenities. From the moment you step inside, you're greeted by a grand foyer that sets the tone for the rest of the home. The expansive living spaces flow seamlessly, including a spacious living room, formal dining area, and gourmet kitchen equipped with state-of-the-art appliances and sleek finishes. Upstairs, the master suite exudes opulence with its expansive layout, lavish ensuite bathroom, and walk-in closet. The remaining bedrooms offer ample space and comfort, each thoughtfully designed to provide a private retreat for family members or guests. A dedicated home office or study adds versatility to the layout, perfect for those who work from home or desire a quiet space for reflection.",
  },
];

// onMounted(() => {
//   const storedProjects = JSON.parse(localStorage.getItem("projects") || "[]");
//   // Update the reactive projects array
//   projects.value = storedProjects;
// });

const selectedProject = ref<number | null>(null);
const currentImageIndex = ref(0);
const isLoading = ref(true);

const showProjectImages = (index: number) => {
  console.log("Clicked on project:", index);
  selectedProject.value = index;
};

const closeProjectImages = () => {
  selectedProject.value = null;
};

const navigate = (direction: "prev" | "next") => {
  const project = projects[selectedProject.value as number];
  const totalImages = project.images.length;

  if (direction === "prev") {
    currentImageIndex.value =
      (currentImageIndex.value - 1 + totalImages) % totalImages;
  } else if (direction === "next") {
    currentImageIndex.value = (currentImageIndex.value + 1) % totalImages;
  }
};

const handleSwipe = (e: TouchEvent) => {
  const touch = e.changedTouches[0];
  if (e.type === "touchstart") {
    touchStartX.value = touch.clientX;
  } else if (e.type === "touchend") {
    const deltaX = touch.clientX - touchStartX.value;
    if (deltaX > 50) {
      navigate("prev");
    } else if (deltaX < -50) {
      navigate("next");
    }
  }
};

const touchStartX = ref(0);

const backgrounds = [image1, image2, image3, image4];
const currentBackground = ref<string>(image1);

const checkAllImagesLoaded = () => {
  const images = document.querySelectorAll(".project-image img");
  let loadedCount = 0;
  images.forEach((image) => {
    if ((image as HTMLImageElement).complete) loadedCount++;
  });
  if (loadedCount === images.length) isLoading.value = false;
};

const changeBackground = () => {
  const currentIndex = backgrounds.indexOf(currentBackground.value);
  const nextIndex = (currentIndex + 1) % backgrounds.length;
  currentBackground.value = backgrounds[nextIndex];
};

const lazyLoadImages = () => {
  const images = document.querySelectorAll(".project-image img[data-src]");
  images.forEach((img) => {
    observer.observe(img);
  });
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target as HTMLImageElement;
      img.src = img.dataset.src || "";
      observer.unobserve(img);
    }
  });
});

onMounted(() => {
  setInterval(changeBackground, 3000);
  checkAllImagesLoaded();
  lazyLoadImages();

  document.addEventListener("touchstart", handleSwipe);
  document.addEventListener("touchend", handleSwipe);
});

onBeforeUnmount(() => {
  document.removeEventListener("touchstart", handleSwipe);
  document.removeEventListener("touchend", handleSwipe);
});
</script>

<style scoped>
.project-banner {
  /* background-image: url("../assets/images/image-003.jpg"); */
  background-size: cover;
  background-position: center;
  color: var(--color-background);
  text-align: left;
  height: 100vh;
  transition: background-image 0.5s ease-in-out;
}

.project-banner div {
  /* padding: 20px 60px; */
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.project-banner h1 {
  font-size: 7rem;
  color: var(--color-text);
  margin-bottom: 10px;
}

.project-banner p {
  font-size: 2rem;
  color: var(--color-heading);
  padding: 0;
  margin: 0;
}

.project-container {
  display: grid;
  gap: 40px;
  margin: 5% 0;
  justify-content: center;
}

.project-container h1 {
  text-align: left;
  font-size: 2.5rem;
  margin: 0;
}

.pl {
  text-align: left;
  font-size: 1.5rem;
  color: #333;
  margin: 0;
  padding: 0;
  margin-top: -35px;
  margin-bottom: 20px;
}

.project {
  background-color: #f2e9e4;
  display: flex;
  max-width: 1100px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.project img.project-image {
  width: 50%;
  height: auto;
  border-radius: 10px 0 0 10px;
  border-right: 1px solid var(--color-background);
  cursor: pointer;
}

.project-content {
  margin-top: 20px;
  text-align: left;
}

.project-content h1 {
  font-size: 1.5rem;
  width: 80%;
  text-align: left;
  margin-left: -9%;
  margin-bottom: 5%;
  padding: 10px 60px;
  background-color: var(--color-heading);
  color: var(--color-background);
  transform: skewX(-20deg);
}

.project-content p {
  margin-bottom: 15px;
  color: #333;
}

.project-images-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: transparent;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.close-btn img {
  width: 24px;
  height: 24px;
}

.image-slider {
  position: relative;
  max-width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-wrapper {
  width: 100%;
  max-width: 500px; /* limit max width for desktop view */
  aspect-ratio: 1 / 1; /* make it a perfect square */
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* fills the square without distortion */
}

.modal-image {
  max-width: 100%;
  max-height: 100%;
  padding: 40px 0;
  margin: 0 auto;
  display: block;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  object-fit: contain;
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: var(--color-background);
  border: none;
  border-radius: 50%;
  padding: 10px 15px;
  font-size: 24px;
  color: var(--color-heading);
  cursor: pointer;
}

.nav-btn img {
  width: 30px;
  height: 30px;
}

.prev-btn {
  left: 20px;
}

.next-btn {
  right: 20px;
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

@media screen and (max-width: 768px) {
  .project {
    flex-direction: column;
  }

  .project img.project-image {
    width: 100%;
    height: 200px;
    border-radius: 10px 10px 0 0;
    border-right: none;
  }

  .project-container {
    padding: 15px;
  }

  .project-content h1 {
    margin-left: 2.5%;
    width: 50%;
    font-size: 1.1rem;
  }
  .project-content p {
    margin-left: 2.5%;
    font-size: 0.9rem;
  }
  .image-slider {
    max-width: 100%;
    height: 50vh;
    justify-content: center;
  }

  .image-wrapper {
    width: 92%;
    height: 100vw;
    margin-top: 10%;
  }

  .nav-btn {
    padding: 5px 10px;
    font-size: 20px;
  }

  .nav-btn img{
    width: 20px;
    height: 20px;
  }

  .close-btn {
    top: 10px;
    right: 10px;
  }
}
</style>
