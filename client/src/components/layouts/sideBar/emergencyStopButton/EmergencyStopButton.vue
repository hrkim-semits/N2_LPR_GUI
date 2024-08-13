<template>
  <button 
    :class="{ active: $props.isStop }"
    class="emergencyBtn" 
    @click="toggleStop">
    {{ $props.isStop ? 'RESTART' : 'EMERGENCY STOP' }}
  </button>
</template>
  
<script lang='ts'>
import { defineComponent, PropType } from 'vue';
import './EmergencyStopButton.scss';
import { useGlobalStore } from '@/stores/globalStore';

export default defineComponent ({
  name: 'EmergencyStopButton',
  props: {
    isStop: {
      type: Boolean,
      required: true
    }
  },
  setup() {
    const globalStore = useGlobalStore();
    const toggleStop = globalStore.toggleStop;

    return {
      toggleStop
    };
  }
});
</script>
  
<style>
  
</style>