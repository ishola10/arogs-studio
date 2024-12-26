<template>
  <div class="home-container">
    <Spinner v-if="isLoading" />

    <div class="home-header">
      <div class="home-header-content">
        <h1 data-aos="fade-up" data-aos-delay="1300">ARC AROGS STUDIO</h1>
        <p data-aos="fade-up" data-aos-delay="1300">
          Architectural Visualization Studio
        </p>
      </div>
    </div>

    <div class="whats-app-floatin-icon">
      <a href="https:wa.me/2348166310462" target="_blank">
        Let's chat &#128075;
      </a>
    </div>

    <div class="home-content">
      <p>Welcome to AROGS Studio</p>
      <h2>INNOVATIVE ARCHITECTURE</h2>

      <div class="grid-item-card">
        <div class="grid-item">
          <img class="gfg" src="../assets/images/writing.jpg" alt="image-001" />
          <h1>1</h1>
          <h2>PRE DESIGN PLANNING</h2>
          <p>Consultation, Master Planning and Research</p>
        </div>
        <div class="grid-item">
          <img
            class="gfg"
            src="../assets/images/architectural-images/pexels-thirdman-5582867.jpg"
            alt="image-002"
          />
          <h1>2</h1>
          <h2>ARCHITECTURAL DESIGN</h2>
          <p>Design, Technical Drawing and 3D Visualization</p>
        </div>
        <div class="grid-item">
          <img
            class="gfg"
            src="../assets/images/architectural-images/pexels-anna-shvets-5324967.jpg"
            alt="image-003"
          />
          <h1>3</h1>
          <h2>PROJECT CONSULTING</h2>
          <p>Contract negotiations and Project administration</p>
        </div>
      </div>

      <div class="about">
        <div class="about-container">
          <div data-aos="fade-up" data-aos-delay="100">
            <img src="../assets/images/samson.jpg" alt="owner" />
            <span>
              <h1>Samson Arogunmatidi</h1>

              <p><em>Managing Architect</em></p>
              <p>
                Arogunmatidi Samson, Managing Architect, leads Arogs Studio as
                both owner and chief architect. With a foundation in freelancing
                since youth, he now spearheads collaborative efforts with
                skilled architects to produce cutting-edge, contemporary
                projects. Samson's distinct architectural vision and fervor for
                technological advancement propel the studio's groundbreaking
                endeavors.

                <br />
                <br />

                <strong>Experience:</strong> <br />
                10 years in architectural design
                <br />
                <br />

                <a
                  href="http:linkedin.com/in/samson-arogunmatidi-3666a3121"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Connect &#128075;</a
                >
              </p>
            </span>
          </div>
          <div data-aos="fade-up" data-aos-delay="100">
            <p>
              <strong>Our philosophy</strong><br />
              <br />
              In architectural design, a delicate fusion of functional,
              aesthetic, psychosocial, and techno-economic elements is crucial.
              Innovative architects tackle these challenges within the depths of
              their minds, igniting a creative explosion that births unique
              architectural solutions. At Arogs Studio, we champion innovation
              and creative thinking, striving to cultivate designs that are not
              just visually captivating but also ingeniously inventive.
            </p>
            <video controls @loadeddata="checkAllAssetsLoaded">
              <source src="../assets/videos/vid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-delay="300" class="projects">
        <h5 class="e">We are Passionate Architects</h5>
        <h6>Featured Work</h6>
        <div class="projects">
          <div data-aos="fade-up" data-aos-delay="300" class="project">
            <img src="../assets/images/Surulere/IMG_0100.png" alt="image-001" />
            <div class="project-content">
              <h1>Proposed Residential Design</h1>
              <ul>
                <li>
                  <strong>Location:</strong> <br />
                  Surulere, Lagos, Nigeria
                </li>
                <li>
                  <strong>Status:</strong> <br />
                  Completed in 2022
                </li>

                <li>
                  <strong>Description:</strong> <br />
                  This residential complex features 4 units of 2-bedroom flats
                  and 3 studio apartments in Surulere. It includes designated
                  parking areas, fully serviced apartments, treated water
                  facilities for enhanced health, and robust security measures.
                  The design blends luxury, simplicity, and aesthetics
                  seamlessly.
                </li>
              </ul>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="300" class="project">
            <img
              id="vc"
              src="../assets/images/ajiro_aguri/ALAHAJI KANIMODO - 14 FLATS 3D.pdf - Adobe Acrobat Reader (64-bit) 4_29_2024 7_20_32 PM.png"
              alt="image-001"
            />
            <div class="project-content">
              <h1>Proposed Residential Design</h1>
              <ul>
                <li>
                  <strong>Location:</strong> <br />
                  Eti-Osa L.G.A. Area, Lagos State, Nigeria
                </li>
                <li>
                  <strong>Status:</strong> <br />
                  Completed in 2023
                </li>

                <li>
                  <strong>Description:</strong> <br />
                  This residential complex consists of 14 units of 2-bedroom
                  flats arranged in 2 blocks of 7 flats each. Located in a
                  prestigious estate at the heart of Agungi Ajiran, it boasts
                  beautiful landscaping, ample parking spaces, full servicing,
                  and robust security measures. The design seamlessly blends
                  luxury with simplicity.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="more-button">
          <p>Like to see more</p>
          <router-link to="/project" active-class="active"
            >Projects</router-link
          >
        </div>
      </div>
    </div>

    <div class="home-contact">
      <div data-aos="fade-up" data-aos-delay="300">
        <h1>Contact Us</h1>
        <p>
          Ready to start a project? Have a vision you would like to discuss? Get
          in touch with us.
        </p>

        <a href="/contact">REACH OUT NOW</a>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import Footer from "./Footer.vue";
import Spinner from "@/components/Spinner.vue";

const isLoading = ref(true);

const checkAllAssetsLoaded = () => {
  isLoading.value = false;
};

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
});
</script>

<style scoped>
@keyframes zoomInOut {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.home-container {
  width: 100%;
  margin: 0;
  padding: 0;
}

.home-header {
  background-image: url("../assets/images/image-003.jpg");
  background-size: cover;
  background-position: center;
  color: var(--color-background);
  text-align: center;
  height: 100vh;
}

.home-header-content {
  background-color: var(--color-background);
  opacity: 0.8;
  padding: 15.6% 0;
}

.home-header-content h1 {
  font-size: 7rem;
  color: var(--color-text);
}

.home-header-content p {
  font-size: 2rem;
  color: var(--color-heading);
}

.whats-app-floatin-icon {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
}

.whats-app-floatin-icon a {
  background-color: var(--color-background);
  color: var(--color-text);
  border-radius: 10px;
  padding: 15px;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  animation: bounce 2s infinite alternate;
  transition: all 0.3s;
}

.whats-app-floatin-icon a:hover {
  background-color: var(--color-text);
  color: var(--color-background);
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-10px);
  }
}

.home-content {
  text-align: justify;
  margin-top: 5%;
  line-height: 1.5;
  padding: 0 20px;
}

.home-content p {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--color-heading);
  text-align: center;
  font-family: sans-serif;
}

.home-content h2 {
  font-size: 3rem;
  font-weight: bold;
  color: var(--color-background);
  text-align: center;
}

.grid-item-card {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
  margin-top: 5%;
}

.grid-item {
  background-color: var(--color-background);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.grid-item img {
  width: 100%;
  border-radius: 10px;
}

/* .gfg {
  height: 32vh;
} */

.grid-item h1 {
  font-size: 3rem;
  color: var(--color-background);
  background-color: var(--color-text);
  text-align: center;
  border-radius: 100%;
  width: 80px;
  height: 80px;
  margin: 0 auto;
  margin-top: -40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.grid-item h2 {
  font-size: 1.5rem;
  color: var(--color-heading);
  margin: 0;
  padding: 0;
}

.grid-item p {
  font-size: 1rem;
  color: var(--color-text);
}

.about {
  margin-top: 5%;
  padding: 30px 0;
  border-top: 1px solid var(--color-heading);
  border-bottom: 1px solid var(--color-heading);
}

.about-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 20px;
}

.about div {
  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: center;
}

.about img,
video {
  width: 30%;
  height: auto;
  border-radius: 10px;
}

.about img {
  border-radius: 50%;
}

.about p {
  font-size: 1rem;
  text-align: left;
  color: var(--color-heading);
  line-height: 1.5;
}

.about p strong {
  font-weight: bold;
  font-size: 1.5rem;
  color: var(--color-background);
}

.about p strong em {
  font-size: 1.2rem;
  color: var(--color-text);
  -webkit-text-stroke: 1px var(--color-background);
}

.about p a {
  background-color: var(--color-background);
  color: var(--color-text);
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  margin-top: 5%;
}

.projects {
  margin-top: 8%;
  padding: 20px;
  background-image: linear-gradient(rgb(253, 248, 248), rgb(249, 249, 220));
}

.projects h5 {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--color-background);
  margin-bottom: 0%;
}

.projects h6 {
  font-size: 4rem;
  font-weight: bold;
  color: var(--color-text);
  margin-top: -7%;
}

.projects {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 80px;
  margin-top: -1%;
}

.project {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  height: auto;
  background-color: rgb(154, 140, 152);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

/* #vc {
  height: 97.5%;
} */
.project img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
}

.project-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.project-content h1 {
  font-size: 2rem;
  color: var(--color-background);
  margin-bottom: 10px;
}

.project-content ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.project-content ul li {
  font-size: 1rem;
  color: var(--color-text);
}

.project-content ul li strong {
  font-weight: bolder;
  font-size: 1.5rem;
}
.gfg {
  height: 50vh;
}

.more-button {
  text-align: center;
  margin-top: 1%;
  padding: 20px;
}

.more-button p {
  font-size: 2rem;
  font-weight: bold;
  color: var(--color-heading);
  margin-bottom: 20px;
}

.more-button a {
  background-color: var(--color-background);
  color: var(--color-text);
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
}

.more-button a:hover {
  background-color: var(--color-text);
  color: var(--color-background);
}

.home-contact {
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  background-image: url(../assets/images/trianglish-background.jpg);
  background-size: cover;
  height: 70vh;
}

.home-contact div {
  padding-top: 12%;
}

.home-contact h1 {
  font-size: 3rem;
  font-weight: bold;
  color: var(--color-background);
}

.home-contact p {
  font-size: 1.5rem;
  color: var(--color-text);
  margin-bottom: 3%;
}

.home-contact a {
  background-color: var(--color-background);
  color: var(--color-text);
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
}

.home-contact a:hover {
  background-color: var(--color-text);
  color: var(--color-background);
}
@media (max-width: 500px) {
  body {
    width: 100%;
    padding: 0;
    margin: 0;
  }
  .home-container {
    width: 100%;
    padding: 0;
    margin: 0;
    /* padding-top: 19%; */
  }
  .home-header {
    height: 70vh;
  }
  .home-header-content {
    height: 55.5vh;
    background-color: none;
  }
  .home-header-content h1 {
    font-size: 3rem;
    padding-top: 15%;
  }

  .home-header-content p {
    font-size: 1.5rem;
  }
  .home-content p {
    font-size: 1rem;
  }
  .home-content h2 {
    font-size: 1.5rem;
  }
  .grid-item-card {
    padding: 0;
  }
  .grid-item img {
    height: 25vh;
  }
  .grid-item h2 {
    font-size: 1.2rem;
  }
  .grid-item p {
    font-size: 0.8rem;
  }
  .about div {
    flex-direction: column;
  }
  .about div p {
    text-align: center;
    font-size: 0.8rem;
  }
  .about div strong {
    font-size: 1rem;
    font-weight: bolder;
  }
  .about div strong em {
    font-size: 0.8rem;
  }
  .about div img {
    width: 100%;
    height: 42vh;
  }
  .about div video {
    display: none;
  }
  .projects {
    padding: 0;
    background-image: none;
  }
  .projects h5 {
    font-size: 1rem;
    margin-bottom: 0%;
  }
  .projects h6 {
    font-size: 2rem;
    font-weight: bolder;
    font-family: sans-serif;
    color: var(--color-text);
    margin-top: -25%;
    margin-bottom: -5%;
  }

  .project {
    margin-top: -15%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  .project-content h1 {
    font-size: 1.1rem;
    font-weight: bolder;
  }

  .project-content ul li {
    font-size: 0.8rem;
  }

  .more-button p {
    font-size: 1.5rem;
    margin-top: -5%;
  }
  .more-button a {
    font-size: 1rem;
    padding: 10px 40px;
  }
  .home-contact {
    height: 50vh;
  }
  .home-contact h1 {
    font-size: 2rem;
  }
  .home-contact p {
    margin-bottom: 10%;
    font-size: 1rem;
  }
}
</style>
