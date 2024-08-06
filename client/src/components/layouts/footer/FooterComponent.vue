<!-- 추후 logged in user 정보 스크립트 추가, copyright 추가 -->

<template>
  <footer class="footer">
    <span class="footerText">logged in user: MCSOperator</span>
    <span class="copyright footerText">copyright</span>
    <span class="footerText">version: 1.0.0</span>
  </footer>
</template>

<script setup lang="ts">
import './FooterComponent.scss';
</script>
  
<script lang="ts">
export default {
  name: 'FooterComponent',
};
</script>
