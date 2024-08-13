<template>
  <div>
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-about">
          <h1>ARC AROGS STUDIO</h1>
          <p>Architectural Visualization Studio</p>
        </div>
        <div class="footer-links">
          <ul>
            <li>
              <a href="/gallery">Projects</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </div>
        <div class="footer-contact">
          <h1>Contact Us</h1>
          <p>
            Ready to start a project? Have a vision you would like to discuss?
            Get in touch with us.
          </p>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-social">
          <a href="https://www.facebook.com/profile.php?id=61558823970501&mibextid=LQQJ4d">
            <img src="../assets/images/icons8-facebook-48.png" alt="facebook" />
          </a>
          <a href="http://linkedin.com/in/samson-arogunmatidi-3666a3121">
            <img src="../assets/images/icons8-linkedin-48.png" alt="linkedin" />
          </a>
          <a href="https://www.instagram.com">
            <img src="../assets/images/icons8-instagram-48.png" alt="instagram" />
          </a>
        </div>
        <div class="footer-privacy">
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of Service</a>
        </div>

        <div class="footer-date">
          <p>
            &copy; 2024 ARC AROGS STUDIO | WEBSITE BY
            <a href="https://badmusmuhammed.netlify.app/" style="color: gray; text-decoration: underline;"
              target="_blank">Muhammed</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.footer-container {
  background-color: #1f1f1f;
  color: #fff;
  padding: 2rem 0;
}

.footer-content {
  display: flex;
  gap: 2rem;
  align-items: center;
  padding: 0 2%;
}

.footer-about {
  flex: 1;
}

.footer-links {
  flex: 1;
}

.footer-links ul {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 1rem;
}

.footer-links a {
  color: #fff;
  text-decoration: none;
}

.footer-contact {
  flex: 1;
}
.footer-contact h1{
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3%;
  margin-top: 2rem;
}

.footer-social {
  flex: 1;
}

.footer-social a {
  margin-right: 1rem;
}

.footer-privacy {
  flex: 1;
}

.footer-privacy a {
  color: #fff;
  text-decoration: none;
  margin-right: 1rem;
}

.footer-date {
  flex: 1;
  text-align: right;
}

.footer-date a {
  color: #fff;
  text-decoration: none;
}


@media (max-width: 768px) {
  .footer-content {
    padding: 0 5%;
    flex-direction: column;
  }

  .footer-contact h1 {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .footer-bottom {
    padding: 0 5%;
    flex-direction: column;
  }

  .footer-social {
    margin-bottom: 1rem;
  }
.footer-privacy {
    margin-bottom: 1rem;
  }
.footer-date {
    text-align: center;
  }
.footer-date {
    margin-bottom: 1rem;
  }
}
</style>
