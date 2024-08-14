<template>
  <TheHeader></TheHeader>
  <TheSideBar :isStop="isStop"></TheSideBar>
  <TheView :isStop="isStop"></TheView>
  <TheFooter></TheFooter>
</template>

<style lang="scss" scoped>
.modeToggleButton {
  position: absolute;
  z-index: 9999999;
  top: 0;
  right: 0;
}
</style>

<script setup lang="ts">
import { computed, onMounted, watch, onUnmounted } from 'vue';
import { useGlobalStore } from '@/stores/globalStore';
import TheHeader from '@/layouts/TheHeader.vue';
import TheSideBar from '@/layouts/TheSideBar.vue';
import TheView from '@/layouts/TheView.vue';
import TheFooter from '@/layouts/TheFooter.vue';

const globalStore = useGlobalStore();
const isStop = computed(() => globalStore.isStop);

const updateEmergencyUI = () => {
    if (isStop.value) {
      document.body.classList.add('emergency');
    } else {
      document.body.classList.remove('emergency');
    }
};

onMounted(() => {
  // 마운트 됐을 시점에 stop일 수도...? -> 웹 소켓으로 초기 상태값 받아오기?
  // 웹 소켓으로 초기(기존) 상태값 받아서 출력 (monitor, setting, log, stop)?
  globalStore.createWebSocket(globalStore.webSocketTestUrl);
  updateEmergencyUI();
});

watch(() => isStop.value, () => {
  updateEmergencyUI();
});

</script>