<template>
  <div class="zoneData" :style="portWidth">
    <div class="notLoadedFOUP">
      <p>Not Loaded FOUP</p>
    </div>
    <div class="zoneDataHeader">
      <span class="zoneIDTitle">Zone ID</span>
      <span class="zoneID">{{ eachData.zoneID }}</span>
      <!-- <span class="zoneID">11110010</span> -->
    </div>
    <ul class="zoneDataBody">
      <li class="zoneDataContent">
        <span class="dataTitle">Flow</span>
        <div class="dataArea">
          <div class="dataValue">{{ eachData.flow.front }}
            <span class="subTitle">FRONT</span>
            <span class="dataUnit">LPM</span>
          </div>
          <!-- <span class="dataValue">83</span> -->
          <div class="dataValue">{{ eachData.flow.rear }}
            <span class="subTitle">REAR</span>
            <span class="dataUnit">LPM</span>
          </div>
          <!-- <span class="dataValue">86</span> -->
        </div>
      </li>
      <li class="zoneDataContent">
        <span class="dataTitle">Pressure</span>
        <div class="dataValue">{{ eachData.pressure }}
          <span class="dataUnit">kPa</span>
          <!-- <span class="dataValue">8</span> -->
        </div>
      </li>
      <li class="zoneDataContent">
        <span class="dataTitle">Humidity</span>
        <div class="dataValue">{{ eachData.humidity }}
          <span class="dataUnit">&#37;</span>
        </div>
        <!-- <span class="dataValue">12</span> -->
      </li>
      <li class="zoneDataContent">
        <span class="dataTitle">Temperature</span>
        <div class="dataValue">{{ eachData.temperature }}
          <span class="dataUnit">&#8451;</span>
        </div>
        <!-- <span class="dataValu">0</span> -->
      </li>
    </ul>
    <div class="zoneDataFooter">
      <span class="baseTimeTitle">Base time</span>
      <span class="baseTimeValue">{{ eachData.baseTime }}</span>
      <!-- <span class="baseTimeValue">2024.07.26</span> -->
    </div>
  </div>
</template>
  
<script lang='ts'>
  import { useGlobalStore } from '@/stores/globalStore';
  import { computed, defineComponent, reactive, watchEffect } from 'vue';
  import './MonitorPage_zoneData.scss';

  export default defineComponent({
    name: 'ZoneData',
    props: {
      zoneData: {
        type: Object,
        required: true
      }
    },
    setup(props) {  
      const globalStore = useGlobalStore();
      let responsedZoneData = computed(() => globalStore.responsedZoneData);
      let portWidth = { width: `${responsedZoneData.value.length? (100 / responsedZoneData.value.length) - 2 : 0}%` };

      const filteringFloat = ( str: string ) => {
        const isInteger = ( number: number ) => {
          return number % 1 === 0;
        };
        return !isInteger(Number(str)) ? String(Number(str).toFixed(1)).replace(/\.0$/, '') : str;
      };

      // console.log('zoneData: ', props.zoneData);
      let MessageData = props.zoneData;
      console.log('MessageData: ', MessageData);

      // 할당
      const eachData = reactive({
        zoneID: props.zoneData.ZoneID,
        flow: {
          front: filteringFloat(props.zoneData.Flow1),
          rear: filteringFloat(props.zoneData.Flow2),
        },
        pressure: filteringFloat(props.zoneData.Pressure),
        humidity: filteringFloat(props.zoneData.Humidity),
        temperature: filteringFloat(props.zoneData.Temperature),
        baseTime: props.zoneData.baseTime
      });

      watchEffect(() => {
        eachData.zoneID = props.zoneData.ZoneID;
        eachData.flow.front = filteringFloat(props.zoneData.Flow1);
        eachData.flow.rear = filteringFloat(props.zoneData.Flow2);
        eachData.pressure = filteringFloat(props.zoneData.Pressure);
        eachData.humidity = filteringFloat(props.zoneData.Humidity);
        eachData.temperature = filteringFloat(props.zoneData.Temperature);
        eachData.baseTime = props.zoneData.baseTime;
      });
  
      return {
        eachData,
        portWidth
      };
    }
  });

</script>
  
<style>
  
</style>