<template>
  <div class="navbar">
    <div class="navbar-container">
      <div class="navbar-brand">
        <router-link to="/">AROGS STUDIO</router-link>
      </div>
      <div :class="['links', { show: isMenuOpen }]">
        <div class="nav-links">
          <router-link to="/" active-class="active" @click="closeMenu">Home</router-link>
          <router-link to="/about" active-class="active" @click="closeMenu">About</router-link>
          <router-link to="/project" active-class="active" @click="closeMenu">Studio</router-link>
          <router-link to="/gallery" active-class="active" @click="closeMenu">Gallery</router-link>
          <router-link to="/contact" active-class="active" @click="closeMenu">Contact</router-link>
        </div>
        <div class="social-header">
          <div>
            <a
              href="http://linkedin.com/in/samson-arogunmatidi-3666a3121"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="../assets/images/icons8-linkedin-50.png"
                alt="LinkedIn"
              />
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

      <img
        class="menu-toggle"
        @click="toggleMenu"
        src="../assets/images/icons8-menu-50.png"
        alt="menu"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<style scoped>
.navbar {
  background-color: rgb(34, 34, 59);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-heading);
  height: 80px;
  padding: 0 60px;
}
.navbar-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
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
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-links {
  display: flex;
  gap: 20px;
  transition: all 0.3s ease;
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

@media screen and (max-width: 1024px) {
  .navbar {
    padding: 15px;
  }
  .navbar-container {
    align-items: start;
    gap: 20px;
  }

  .navbar-brand a {
    font-size: 20px;
  }

  .links {
    width: 84%;
    align-items: center;
    margin-left: -20%;
    text-align: center;
  }
  .nav-links {
    gap: 10px;
  }

  .nav-links a {
    font-size: 18px;
  }

  .social-header {
    margin-top: 10px;
  }

  .social-header div img {
    width: 25px;
    height: 25px;
  }

  .social-header hr {
    height: 25px;
  }
}

@media screen and (max-width: 500px) {
  .navbar{
    /* width: 105%;
    margin-left: -3%;
    margin-top: 0; */
  }
  .navbar-brand a {
    font-size: 16px;
  }

  .links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 10%;
    left: 20%;
    right: 0;
    background-color: rgba(34, 34, 59, 0.9);
    padding: 20px;
    z-index: 1;
   width: 90%;

    overflow-y: auto;
    transition: all 0.3s ease;
  }

  .links.show {
    display: flex;
  }

  .nav-links {
    flex-direction: column;
  }

  .nav-links a {
    font-size: 16px;
    margin-bottom: 10px;
  }

  .menu-toggle {
    display: block;
  }

  .navbar img {
    width: 30px;
    height: 30px;
  }
  .social-header {
    margin-top: 25px;
    display: flex;
    gap: 60px;
  }

  .social-header div img {
    width: 30px;
    height: 30px;
  }

  .social-header hr {
    display: none;
  }
}
</style>