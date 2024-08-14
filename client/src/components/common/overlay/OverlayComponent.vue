<!-- EMERGENCY STOP시 창 비활성화 -->

<template>
  <div class="overlay">
    <div class="overlayContent">
      <p>재가동하시겠습니까?</p>
      <button class="modalClose" @click="$emit('close')">예</button>
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
  