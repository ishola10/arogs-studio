<template>
  <div>
    <div class="contact-container">
      <div
        class="contact-banner"
        :style="{ backgroundImage: 'url(' + currentBackground + ')' }"
      >
        <div>
          <h1>Contact Us</h1>
          <p>
            Ready to start a project? Have a vision you would like to discuss?
            Get in touch with us.
          </p>
        </div>
      </div>

      <div class="contact-form">
        <h1>Get in Touch</h1>
        <form
          class="form"
          action="https://formspree.io/f/myyrlqyp"
          method="POST"
        >
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your name" />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
            />
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message"
            ></textarea>
          </div>

          <label for="">
            <input type="checkbox" name="" id="" />

            I verify that the above information is correct and consent to my
            data being sent and stored on the website's external server
          </label>
          <button type="submit">Send</button>
        </form>
      </div>

      <div class="appreciation">
        <h2>Thank you for visiting our website</h2>
        <p>
          We appreciate your interest in our services. We will get back to you
          as soon as possible.
        </p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from "./Footer.vue";
import { ref, onMounted } from "vue";

import image1 from "../assets/images/image-004.jpg";
import image2 from "../assets/images/image-005.jpg";
import image3 from "../assets/images/image-003.jpg";
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

<style scoped>
.contact-container {
  width: 100%;
}

.contact-banner {
  background-size: cover;
  background-position: center;
  color: var(--color-background);
  text-align: left;
  height: 100vh;
  transition: background-image 0.5s ease-in-out;
}

.contact-banner div {
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.contact-banner h1 {
  font-size: 7rem;
  color: var(--color-text);
}

.contact-banner p {
  font-size: 2rem;
  color: var(--color-heading);
}

.contact-banner h1,
p {
  margin-left: 60px;
}

.contact-form {
  max-width: 600px;
  margin: 20px auto;
  padding: 2rem;
  text-align: left;
  border-top: 5px solid black;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.contact-form h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.contact-form form {
  display: grid;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group textarea {
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-group textarea {
  resize: vertical;
  min-height: 150px;
}

button[type="submit"] {
  padding: 0.5rem 1rem;
  background-color: var(--color-heading);
  color: var(--color-background);
  border: none;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
}

button[type="submit"]:hover {
  background-color: var(--color-text);
}

.appreciation {
  text-align: center;
  padding: 8rem;
  background-image: url(../assets/images/trianglish-background.jpg);
  background-size: cover;
  height: 70vh;
}

.appreciation h2 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.appreciation p {
  font-size: 1.5rem;
  color: #333;
  margin: 0;
}
@media (max-width: 768px) {
  .contact-banner h1{
    font-size: 3rem; 
  }
  .contact-banner p{
    font-size: 1rem; 
  }
  
}
</style>
