<template>
  <SideBar :isStop="isStop" @emergencyStop="handleEmergencyStop" />
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import SideBar from '../components/layouts/sideBar/SideBar.vue';

const props = defineProps({
  isStop: {
    type: Boolean,
    required: true
  }
});

const emit = defineEmits(['emergencyStop']);

function handleEmergencyStop() {
  emit('emergencyStop');
}
</script>
