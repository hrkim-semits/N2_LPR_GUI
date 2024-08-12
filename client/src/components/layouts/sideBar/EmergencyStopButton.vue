<template>
  <button 
    :class="{ active: $props.isStop }"
    class="emergencyBtn" 
    @click="$props.handleClick">
    {{ $props.isStop ? 'RESTART' : 'EMERGENCY STOP' }}
  </button>
</template>
  
<script lang='ts'>
import { defineComponent, PropType } from 'vue';

export default defineComponent ({
  name: 'EmergencyStopButton',
  props: {
    isStop: {
      type: Boolean,
      required: true
    },
    handleClick: {
      type: Function as PropType<(event: MouseEvent) => void>,
      required: true
    }
  }
});
</script>
  
<style>
  
</style>