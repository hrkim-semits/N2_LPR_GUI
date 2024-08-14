<template>
  <section class="sideBar" :class="{'emergency': isStop}">
    <nav class="sideBarNav">
      <ul class="sideBarNavList">
        <li>
          <RouterLink to="/"><icon-dashboard class="menuIcon" /><span>Monitor</span></RouterLink>
        </li>
        <li>
          <RouterLink to="/setting"><icon-settings class="menuIcon" /><span>Setting</span></RouterLink>
        </li>
        <li>
          <RouterLink to="/log"><icon-file class="menuIcon" /><span>Log</span></RouterLink>
        </li>
      </ul>
    </nav>
    
    <!-- <button 
      :class="{ active: isStop }"
      class="emergencyBtn" 
      @click="handleClick">
      {{ isStop ? 'RESTART' : 'EMERGENCY STOP' }}
    </button> -->
    <EmergencyStopButton :isStop="$props.isStop"></EmergencyStopButton>
  
  </section>
</template>

<script lang='ts'>
import { computed, defineComponent, PropType } from 'vue';
import { useGlobalStore } from '@/stores/globalStore';
import './SideBar.scss';
import EmergencyStopButton from './emergencyStopButton/EmergencyStopButton.vue';

export default defineComponent({
  name: 'SideBar',
  props: {
    isStop: {
      type: Boolean as PropType<boolean>,
      required: true
    }
  },
  components: {
    EmergencyStopButton
  }
});
</script>