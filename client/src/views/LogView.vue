<template>
  <LogContents :isStop="isStop"></LogContents>
</template>

<script lang="ts" setup>
import LogContents from '../components/pages/log/LogPage.vue';

const props = defineProps({
  isStop: {
    type: Boolean,
    required: true
  }
});
</script>

<style lang="scss" scoped>

</style>