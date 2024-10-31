<template>
  <Navbar />
  <router-view />
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

import Navbar from "./components/Navbar.vue";

const router = useRouter();
</script>
