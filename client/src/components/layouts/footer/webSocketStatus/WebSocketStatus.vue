<template>
  <div class="webSocketStatus">
    <span class="webSocketStatusColor" :style="{backgroundColor: isConnected ? '#00B42A' : '#F53F3F'}"></span>
    <span class="footerText">WebSocket Status</span>
  </div>
</template>
  
<script lang='ts'>
import { useGlobalStore } from '@/stores/globalStore';
import { computed, defineComponent } from 'vue';
import './WebSocketStatus.scss';

export default defineComponent({
  name: 'WebSocketStatus',
  setup() {
    const globalStore = useGlobalStore();
    const isConnected = computed(() => globalStore.isConnected);

    return {
      isConnected
    };
  }
});
</script>
  
<style>
  
</style>