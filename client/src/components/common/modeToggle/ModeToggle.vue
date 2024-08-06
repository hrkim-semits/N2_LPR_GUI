<template>
  <div class="modeToggleWrapper">
    <!-- <button @click="toggleTheme">
      {{ theme === 'light' ? 'Dark' : 'Light' }} Mode
    </button> -->
    <!-- <IconSun class="sunIcon"/> -->
    <input id="modeToggleInput" class="modeToggleInput" type="checkbox" @click="toggleTheme">
    <label class="modeToggleButton" for="modeToggleInput"></label>
    <!-- <IconMoon class="moonIcon"/> -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watchEffect } from 'vue';
import './ModeToggle.scss';

const theme = ref('light');

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light';
  localStorage.setItem('theme', theme.value);
  if (theme.value === 'light') {
    document.body.removeAttribute('arco-theme');
  } else {
    document.body.setAttribute('arco-theme', 'dark');
  }
};

onMounted(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    theme.value = savedTheme;
  }
});

watchEffect(() => {
  document.documentElement.setAttribute('data-theme', theme.value);
});

</script>

<script lang="ts">
export default {
  name: 'ModeToggle',
};
</script>

<style scoped>

</style>