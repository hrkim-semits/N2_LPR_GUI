<template>
  <MonitorContents :isStop="isStop"></MonitorContents>
</template>

<script setup lang="ts">
import MonitorContents from '../components/pages/monitor/MonitorPage.vue';

const props = defineProps({
  isStop: {
    type: Boolean,
    required: true
  }
});
</script>

<style lang="scss" scoped>

</style>