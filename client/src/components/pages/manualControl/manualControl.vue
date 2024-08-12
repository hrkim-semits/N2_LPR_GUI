<template>
  <section class="mainContents" :class="{'emergency': $props.isStop}">
  </section>
</template>
  
<script lang='ts'>
import { useGlobalStore } from '@/stores/globalStore';
import { computed } from 'vue';

export default {
  name: 'manualControlPage',
  props: {
    isStop: {
      type: Boolean,
      required: true
    }
  },
  setup() {
    const globalStore = useGlobalStore();

    return {
    };
  }
};
</script>
  
<style>
  
</style>