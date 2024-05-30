<template>
  <div class="navbar">
    <div class="navbar-container">
      <div class="navbar-brand">
        <router-link to="/">AROGS STUDIO</router-link>
      </div>
      <div :class="['links', { show: isMenuOpen }]">
        <router-link to="/" active-class="active">Home</router-link>
        <router-link to="/about" active-class="active">About</router-link>
        <router-link to="/project" active-class="active">Studio</router-link>
        <router-link to="/gallery" active-class="active">Gallery</router-link>
        <router-link to="/contact" active-class="active">Contact</router-link>
      </div>

      <img
        class="menu-toggle"
        @click="toggleMenu"
        src="../assets/images/icons8-menu-50.png"
        alt="menu"
      />

      <div class="social-header">
        <div>
          <a
            href="http://linkedin.com/in/samson-arogunmatidi-3666a3121"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="../assets/images/icons8-linkedin-50.png" alt="LinkedIn" />
          </a>
        </div>
        <hr />
        <div>
          <a href="mailto:samsonarogs@gmail.com">
            <img src="../assets/images/icons8-gmail-50.png" alt="Gmail" />
          </a>
        </div>
        <hr />
        <div>
          <a href="tel:+2348166310462">
            <img src="../assets/images/icons8-phone-50.png" alt="Phone" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
.navbar-container {
  background-color: rgb(34, 34, 59);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-heading);
  padding: 20px 60px;
}

.navbar-container div {
  display: flex;
  align-items: center;
}

.navbar-container div a {
  color: var(--color-heading);
  margin-right: 10px;
  text-decoration: none;
  font-size: 24px;
}

.navbar .links a {
  color: var(--color-heading);
  margin-right: 10px;
  text-decoration: none;
  font-size: 24px;
}

.navbar .links a.active {
  color: var(--color-text);
}

.links {
  display: flex;
  gap: 20px;
  transition: all 0.3s ease;
}

.links.show {
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: rgb(34, 34, 59);
  padding: 20px;
  z-index: 1;
}

.links.show a {
  margin-bottom: 10px;
}

.menu-toggle {
  display: none;
}

.social-header {
  display: flex;
}

.social-header div a {
  color: var(--color-heading);
  margin-right: 10px;
  text-decoration: none;
  font-size: 24px;
}

.social-header div img {
  width: 30px;
  height: 30px;
}

.social-header hr {
  height: 30px;
  margin: 0 10px;
  border: 1px solid var(--color-heading);
}

/* Media Query for Mobile Devices */
@media screen and (max-width: 768px) {
  .navbar-container {
    /* flex-direction: column; */
    padding: 20px;
    gap: 20px;
  }

  .navbar-container div a {
    font-size: 16px;
  }

  .navbar-container div {
    width: 100%;
    justify-content: space-between;
  }

  .links {
    display: none;
  }

  .navbar .links a {
    font-size: 16px;
  }

  .links a {
    font-size: 16px;
  }

  .menu-toggle {
    display: block;
  }

  .menu-toggle img {
    width: 30px;
    height: 30px;
  }

  .social-header div img {
  width: 20px;
  height: 20px;
}

  .social-header hr {
    display: none;
  }
}
</style>
