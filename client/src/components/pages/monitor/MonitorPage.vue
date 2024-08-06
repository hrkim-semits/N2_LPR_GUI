<template>
  <section class="mainContents" :class="{'emergency': isStop}">
    <ZoneData 
      :portWidth="portWidth"
      v-for="(zoneData, index) in responsedZoneData" 
      :zoneData="zoneData" 
      :key="index"
    ></ZoneData>
  </section>
</template>
  
<script lang='ts' setup>
import { computed, watchEffect } from 'vue';
import './MonitorPage.scss';
import { useGlobalStore } from '@/stores/globalStore';
import ZoneData from './MonitorPage_zoneData.vue';

const globalStore = useGlobalStore();

const isStop = computed(()=> globalStore.isStop);

let responsedZoneData = computed(() => globalStore.responsedZoneData);

let portWidth = { width: `${(100 / responsedZoneData.value.length) - 2}%` };

watchEffect(() => {
  portWidth = { width: `${(100 / responsedZoneData.value.length) - 2}%` };
});
</script>

<script lang="ts">
</script>