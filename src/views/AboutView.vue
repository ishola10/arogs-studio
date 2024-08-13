<template>
  <div class="ab-all">
    <div
      class="about-banner"
      :style="{ backgroundImage: 'url(' + currentBackground + ')' }"
    >
      <div>
        <h1 data-aos="fade-up" data-aos-delay="1300">About Us</h1>
        <p data-aos="fade-up" data-aos-delay="1300">
          Learn more about our collaborative workspace, our services and brand
          philosophy.
        </p>
      </div>
    </div>

    <div class="about-content">
      <div class="about-text">
        <div class="fr">
          <div>
            <h1>Who We Are</h1>
            <p>
              AROGS Studio is a collaborative architectural design firm
              dedicated to pushing the boundaries of innovation and creativity.
              Founded by visionary architect Arogunmatidi Samson, our studio
              brings together a team of talented individuals passionate about
              creating cutting-edge architectural solutions.
            </p>
          </div>
          <div>
            <img
              src="../assets/images/business-people-looking-plans-office.jpg"
              alt="business-people"
            />
          </div>
        </div>

        <div class="fr">
         
          <div>
           <img
             src="../assets/images/Arogs-studio.png"
             alt="business-people"
           />
         </div>
          <div>
            <h1>Our Philosophy</h1>

            <p>
              In architectural design, a delicate fusion of functional,
              aesthetic, psychosocial, and techno-economic elements is crucial.
              Innovative architects tackle these challenges within the depths of
              their minds, igniting a creative explosion that births unique
              architectural solutions. At Arogs Studio, we champion innovation
              and creative thinking, striving to cultivate designs that are not
              just visually captivating but also ingeniously inventive.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="services">
      <h1>Our Services</h1>
      <div class="services-container">
        <div class="service">
          <h1>Pre-Design Consultation</h1>
          <p>
            We provide detailed consultations to define the project's purpose
            and requirements. This includes master planning and site research to
            lay a strong foundation.
          </p>
        </div>
        <div class="service">
          <h1>Design Development</h1>
          <p>
            From initial sketches to comprehensive plans, we evolve the client's
            vision into tangible designs. Our process includes cost estimations
            to ensure feasibility.
          </p>
        </div>
        <div class="service">
          <h1>3D Visualisation</h1>
          <p>
            Transforming plans and elevations into lifelike 3D renders, we offer
            a vivid depiction of the final aesthetic, form, and materials,
            bringing the project to life.
          </p>
        </div>
        <div class="service">
          <h1>Construction Documents</h1>
          <p>
            Our team develops comprehensive construction drawings and technical
            specifications, essential for contractors and other design
            collaborators to execute the project seamlessly.
          </p>
        </div>
        <div class="service">
          <h1>Construction of the Design</h1>
          <p>
            We offer expertise in overseeing the construction process, ensuring
            that the design is executed with precision and attention to detail,
            resulting in a successful realization of the project.
          </p>
        </div>
        <div class="service">
          <h1>Skilled Construction Personnel</h1>
          <p>
            In addition to design and oversight, we provide access to a pool of
            skilled workers for construction projects. Whether the client seeks
            specialized labor or a complete team, we can assemble the necessary
            personnel to bring their project to fruition.
          </p>
        </div>
        <div class="service">
          <h1>Contract Negotiations</h1>
          <p>
            We act as agents and advisors, guiding clients through the bidding
            process and negotiations to secure the best value for their
            investment.
          </p>
        </div>
        <div class="service">
          <h1>Contract Administration</h1>
          <p>
            Throughout the construction phase, we serve as trusted advisors,
            ensuring that the project adheres to the agreed-upon plans and
            specifications.
          </p>
        </div>
        <div class="service">
          <h1>Animation</h1>
          <p>
            Additionally, we specialize in animation, bringing dynamic visuals
            to your project, further enhancing its presentation and
            understanding.
          </p>
        </div>
      </div>

      <p>
        And many more ..., Let us help build your project and bring it to life.
      </p>
    </div>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import Footer from "./Footer.vue";

import image1 from "../assets/images/image-003.jpg";
import image2 from "../assets/images/image-004.jpg";
import image3 from "../assets/images/image-005.jpg";
import image4 from "../assets/images/image-007.jpg";

const backgrounds = [image1, image2, image3, image4];
const currentBackground = ref<string>(image1);

onMounted(() => {
  setInterval(changeBackground, 3000);
});

function changeBackground() {
  const currentIndex = backgrounds.indexOf(currentBackground.value);
  const nextIndex = (currentIndex + 1) % backgrounds.length;
  currentBackground.value = backgrounds[nextIndex];
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.ab-all{
  width: 100%;
  overflow: hidden;
}
.about-banner {
  text-align: left;
  height: 100vh;
  background-size: cover;
  background-position: center;
  color: var(--color-background);
  transition: background-image 0.5s ease-in-out;
}

.about-banner div {
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.about-banner h1 {
  font-size: 7rem;
  color: var(--color-text);
}

.about-banner p {
  font-size: 2rem;
  color: var(--color-heading);
}

.about-banner h1,
p {
  margin: 0 60px;
}

.about-content {
  padding: 20px 60px;
}

.about-text .fr {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 40px 0;
}

.about-text img {
  width: 100%;
  /* height: 60vh; */
  height: auto;
  border-radius: 10px;
}

.about-text div {
  flex: 1;
}

.about-text h1 {
  font-size: 2.5rem;
  margin: 0;
  padding-bottom: 2%;
}

.about-text p {
  font-size: 1.5rem;
  color: #333;
  margin: 0;
  padding: 0;
}

.services {
  padding: 20px 60px;
}

.services-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 3%;
}

.service {
  background-color: var(--color-text);
  padding: 20px;
  border-radius: 10px;
  text-align: left;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.service:hover {
  transform: scale(1.05);
}

.service h1 {
  font-size: 1.5rem;
  color: var(--color-background);
  margin-bottom: 2%;
}

.service p {
  font-size: 1rem !important;
  color: var(--color-heading);
  text-align: left;
  margin: 0%;
}

.services p {
  font-size: 1.5rem;
  color: var(--color-background);
  text-align: left;
  margin: 0%;
  padding-top: 3%;
}

@media screen and (max-width: 768px) {
  .ab-all {
    width: 100%;
    padding: 0;
    margin: 0;
  }
  .about-banner {
    height: 50vh;
  }
  .about-banner h1,
  .about-banner p {
    margin: 0 20px; 
  }

  .about-banner h1 {
    font-size: 3rem; 
  }

  .about-banner p {
    font-size: 1.2rem; 
  }

  .about-content {
    padding: 20px; 
  }

  .about-text .fr {
    flex-direction: column; 
    /* gap: 0; */
    padding: 20px 0; 
  }



  .about-text img {
    width: 100%;
    height: auto; 
    border-radius: 0;
  }

  .about-text h1,
  .about-text p {
    margin: 0 20px; 
  }

  .about-text h1 {
    font-size: 2rem; 
  }

  .about-text p {
    font-size: 1rem; 
  } 
  .services {
    padding: 20px; 
  }

  .services-container {
    grid-template-columns: repeat(1, 1fr); 
  }
}
</style>
