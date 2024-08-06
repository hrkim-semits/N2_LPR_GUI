<!-- 추후 product name, product status 정보 출력 -->

<template>
  <header class="header" :class="{'emergency': isStop}">
    <h1 class="companyLogo">
    </h1>
    <ul class="headerContents">
      <li>
        <ModeToggle class="modeToggleButton"></ModeToggle>
      </li>
      <li>
        <span class="headerText">Product Name</span>
      </li>
      <li>
        <span class="headerText">Product Status</span>
      </li>
    </ul>
    <div 
      id="stoppedText" 
      class="emergencyStopText" 
      :style="{ display: isStop ? 'block' : 'none' }"
    >Emergency Stop Activated</div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useGlobalStore } from '@/stores/globalStore';
import './HeaderComponent.scss';
import ModeToggle from '@/components/common/modeToggle/ModeToggle.vue';

const globalStore = useGlobalStore();
const isStop = computed(() => globalStore.isStop);
</script>