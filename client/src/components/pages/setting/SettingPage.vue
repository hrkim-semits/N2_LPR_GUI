<template>
  <section class="settingContents" :class="{'emergency': isStop}"> <!-- or section -->
    <header class="settingHeader">
      <span class="subTitle">FRONT</span>
      <span class="subTitle">REAR</span>
      <a-button class="applyAllButton" type="primary" :disabled="isStop" @click="handleClick">
        <template #icon>
          <icon-select-all />
        </template>
        <template #default>Apply all</template>
      </a-button>
    </header>
    <ul class="settingWrapper">
      <SetLPMRow v-for="( msg, index ) in messages" :key="index" :message="msg" :isStop="isStop" :LPMRange="LPMRange" :showModal="showModal"></SetLPMRow>
      <PostPurgeRow :message="'Post purge'" :isStop="isStop" :LPMRange="LPMRange" :showModal="showModal"/>
      <EMORow :message="'EMO'" :isStop="isStop"/>
    </ul>
  </section>
  </template>
  
  
  
  <script lang="ts">
  import { defineComponent, onMounted } from 'vue';
  import { IconSelectAll } from '@arco-design/web-vue/es/icon';
  import './SettingPage.scss';
  import { useGlobalStore } from '@/stores/globalStore';
  
  import returnWholeSettingInfos from './returnWholeSettingInfos';
  
  import SetLPMRow from './setLPMRow/SetLPMRow.vue';
  import PostPurgeRow from './postPurgeRow/PostPurgeRow.vue';
  import EMORow from './EMORow/EMORow.vue';
  
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
          markerStep: 50
        };
  
      const handleClick = () => {
        console.log('handleClick');
        // console.log(returnWholeSettingInfos());
  
        returnWholeSettingInfos();
        // globalStore.sendMessage(JSON.stringify(returnWholeSettingInfos()));
      };
  
      // input[type="text"]를 input[type="number"]처럼 위, 아래 방향키로 제어할 수 있도록 함
      document.addEventListener('DOMContentLoaded', () => {
        const textInputs = document.querySelectorAll<HTMLInputElement>('.TargetFlow');
        const postPurgeInput = document.querySelector<HTMLInputElement>('.PurgeDurationOfMillis');
  
        const handleArrowKeyInput = (event: KeyboardEvent) => {
          const target = event.target as HTMLInputElement;
          console.log(target.className);
          const currentValue = Number(target.value) || 0;
  
          const arrowUpEvent = (step :number) => {
            target.value = (currentValue + step).toString();
            event.preventDefault();
          };
  
          const arrowDownEvent = (step :number) => {
            target.value = (currentValue - step).toString();
            event.preventDefault();
          };
  
          if (target.className === 'TargetFlow' && event.key === 'ArrowUp' && currentValue >= LPMRange.min && currentValue < LPMRange.max) {
            arrowUpEvent(1);
          } else if (target.className === 'TargetFlow' && event.key === 'ArrowDown' && currentValue > LPMRange.min && currentValue <= LPMRange.max) {
            arrowDownEvent(1);
          } else if (target.className === 'PurgeDurationOfMillis' && event.key === 'ArrowUp') {
            arrowUpEvent(1000);
          } else if (target.className === 'PurgeDurationOfMillis' && event.key === 'ArrowDown' && currentValue > 0) {
            arrowDownEvent(1000);
          }
          ;
  
          const inputEvent = new Event('input', { bubbles: true });
          target.dispatchEvent(inputEvent);
        };
  
        textInputs.forEach(input => {
          input.addEventListener('keydown', handleArrowKeyInput);
        });
  
        postPurgeInput?.addEventListener('keydown', handleArrowKeyInput);
      });
  
      return {
        messages,
        handleClick,
        LPMRange
      };
    }
  });
  </script>