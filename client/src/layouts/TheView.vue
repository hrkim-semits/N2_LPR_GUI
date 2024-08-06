<template>
  <main class="viewArea">
    <RouterView :isStop="isStop"></RouterView>
  </main>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import './TheView.scss';

const props = defineProps({
  isStop: {
    type: Boolean,
    required: true
  }
});
</script>
