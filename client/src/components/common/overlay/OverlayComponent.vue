<!-- EMERGENCY STOP시 창 비활성화 -->

<template>
  <div class="overlay">
    <div class="overlayContent">
      <!-- <confirm @click="$emit('close')">재가동하시겠습니까?</confirm> -->
      <p>재가동하시겠습니까?</p>
      <button class="modalClose" @click="$emit('close')">예</button>
      <!-- confirm으로 overlay visible 제어 -->
    </div>
  </div>
</template>

<script setup lang="ts">
import './overlayComponent.scss';
</script>
  
<script lang='ts'>
export default {
  name: 'OverlayComponent'
};
</script>
  