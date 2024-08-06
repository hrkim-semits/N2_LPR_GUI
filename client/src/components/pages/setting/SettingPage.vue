<template>
<section class="settingContents" :class="{'emergency': isStop}"> <!-- or section -->
  <ul class="settingWrapper">
    <SetLPMRow v-for="( msg, index ) in messages" :key="index" :message="msg" :isStop="isStop" :LPMRange="LPMRange" :showModal="showModal"></SetLPMRow>
    <PostPurgeRow :message="'Post purge'" :isStop="isStop" :LPMRange="LPMRange" :showModal="showModal"/>
    <EMORow :message="'EMO'" :isStop="isStop"/>
  </ul>
  <a-button class="applyAllButton" type="primary" :disabled="isStop" @click="handleClick">
    <template #icon>
      <icon-select-all />
    </template>
    <template #default>Apply all</template>
  </a-button>
</section>
</template>



<script lang="ts">
import { defineComponent } from 'vue';
import { IconSelectAll } from '@arco-design/web-vue/es/icon';
import './SettingPage.scss';
import { useGlobalStore } from '@/stores/globalStore';

import returnWholeSettingInfos from './returnWholeSettingInfos';

import SetLPMRow from '@/components/SetLPMRow.vue';
import PostPurgeRow from '@/components/PostPurgeRow.vue';
import EMORow from '@/components/EMORow.vue';

export default defineComponent({
  name: 'SettingPage',
  components: {
    SetLPMRow,
    PostPurgeRow,
    EMORow,
  },
  data() {
    return {
      isModalVisible: false,
      modalMessage: ''
    };
  },
  props: {
    isStop: {
      type: Boolean,
      required: true
    },
  },
  methods: {
    showModal(message: string) {
      this.modalMessage = message;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
  setup(props) {
    const globalStore = useGlobalStore();

    const messages = [
      'INF:PODON;', 'ARS WARNING Vacuum is lost during motion', 'Msg 3', 'Msg 4', 'Msg 5', 'Msg 6', 'Msg 7', 'Msg 8', 'Msg 9', 'Msg 10'
    ];
    
    const LPMRange = {
        min: 0,
        max: 200,
        default: 100,
        markerStep: 20
      };

    const handleClick = () => {
      console.log('handleClick');
      console.log(returnWholeSettingInfos());

      globalStore.sendMessage(JSON.stringify(returnWholeSettingInfos()));
    };

    return {
      messages,
      handleClick,
      LPMRange
    };
  }
});
</script>
