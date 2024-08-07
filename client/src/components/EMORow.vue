<template>
  <li class="settingRow">
    <div class="msgArea">{{ message }}</div>
    <div class="setEMOArea">
      <div class="setStatus">
        <select class="TargetStatus" :disabled="isStop">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div class="setStatus">
        <select class="TargetStatus" :disabled="isStop">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
    </div>
    <a-button class="eachApplyButton" :disabled="isStop" @click="sendEMOSettingMessage">
      <!-- <icon-send /> -->
      Apply
    </a-button>
  </li>
</template>




<script lang="ts">
import { defineComponent } from 'vue';
import { useGlobalStore } from '@/stores/globalStore';

export default defineComponent({
  name: 'EMORow',
  props: {
    message: {
      type: String,
      required: true
    },
    isStop: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    sendEMOSettingMessage() {
      // console.log( document.getElementsByTagName('select') );
      // console.log( document.getElementsByTagName('select')[1].value );

      interface SingalGUIMsgPurgeReq {
        MessageID: 'SingalGUIMsgPurgeReq',
        MessageData: {
          TargetCommand: 'EMO',
          TargetStatus: string[],
          BaseTime: string
        }
      }

      const singalGUIMsgPurgeReq: SingalGUIMsgPurgeReq = {
        MessageID: 'SingalGUIMsgPurgeReq',
        MessageData: {
          TargetCommand: 'EMO',
          TargetStatus: [],
          BaseTime: ''
        }
      };

      const globalStore = useGlobalStore();
      singalGUIMsgPurgeReq.MessageData.BaseTime = globalStore.getDateTime();

      document.querySelectorAll('select').forEach((select: { value: string; }) => {
        singalGUIMsgPurgeReq.MessageData.TargetStatus.push(select.value);
      });

      console.log(singalGUIMsgPurgeReq);
      
      // globalStore.sendMessage(JSON.stringify(singalGUIMsgPurgeReq));
    }
  }
});
</script>
