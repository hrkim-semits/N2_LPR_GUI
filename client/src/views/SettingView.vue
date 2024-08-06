<template>
  <SettingContents :isStop="isStop"></SettingContents>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import SettingContents from '@/components/pages/setting/SettingPage.vue';

const props = defineProps({
  isStop: {
    type: Boolean,
    required: true
  }
});
</script>

<style lang="scss" scoped>

</style>