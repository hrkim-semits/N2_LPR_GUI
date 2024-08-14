<template>
  <section class="mainContents" :class="{'emergency': isStop}">
    <ZoneData 
      v-for="(zoneData, index) in responsedZoneData" 
      :zoneData="zoneData" 
      :key="index"
    ></ZoneData>
  </section>
</template>
  
<script lang='ts'>
import { computed, defineComponent, watchEffect } from 'vue';
import './MonitorPage.scss';
import { useGlobalStore } from '@/stores/globalStore';
import ZoneData from './zoneData/MonitorPage_zoneData.vue';

export default defineComponent({
  name: 'MonitorPage',
  props: {
    isStop: {
      type: Boolean,
      required: true
    }
  },
  components: {
    ZoneData
  },
  setup() {
    const globalStore = useGlobalStore();
    let responsedZoneData = computed(() => globalStore.responsedZoneData);

    return {
      responsedZoneData
    };
  }
});

</script>