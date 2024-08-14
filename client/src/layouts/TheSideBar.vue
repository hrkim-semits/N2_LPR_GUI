<template>
  <SideBar :isStop="$props.isStop" />
</template>



<script lang="ts">
import { defineProps, defineEmits, defineComponent } from 'vue';
import SideBar from '../components/layouts/sideBar/SideBar.vue';

export default defineComponent({
  name: 'TheSideBar',
  props: {
    isStop: {
      type: Boolean,
      required: true
    },
  },
  components: {
    SideBar
  }
});

</script>



<!-- <script lang="ts" setup>
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
</script> -->
