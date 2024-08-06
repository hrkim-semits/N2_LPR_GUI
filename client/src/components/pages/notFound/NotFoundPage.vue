<template>
  <section class="  ">
    <p>올바르지 않은 경로입니다.</p>
    <RouterLink to="/" class="goHomeButton">돌아가기</RouterLink>
  </section>
</template>
  
<script lang="ts">
import { computed } from 'vue';
import { useGlobalStore } from '@/stores/globalStore';
import './NotFoundPage.scss';

export default {
  name: 'NotFoundPage',
  setup() {
    const globalStore = useGlobalStore();

    const isStop = computed(() => globalStore.isStop);
    console.log('NOTFOUNDPAGE');

    return {
      isStop
    };
  }
};
</script>

<style>
  
</style>