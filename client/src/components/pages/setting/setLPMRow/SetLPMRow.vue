<template>
  <li class="settingRow">
    <div class="msgArea">{{ message }}</div>
    <!-- FRONT -->
    <div class="setArea">
      <!-- <span class="subTitle">FRONT</span> -->
      <div class="rangeArea">
        <div class="rangeSliderWrapper">
          <input type="range" :min="LPMRangeMin" :max="LPMRangeMax" v-model="lpmFront" list="markers" :disabled="isStop">
          <datalist id="markers">
            <option
              v-for="value in markerValues"
              :key="value"
              :value="value">
            </option>
          </datalist>
        </div>
        <div class="displayRange">
          <span id="minLPM">{{ String(LPMRangeMin) }}</span>
          <span id="maxLPM">{{ String(LPMRangeMax) }}</span>
        </div>
      </div>
      <div class="numberArea">
        <!-- EMERGENCY STOP 실행 시 input disabled -->
        <input class="TargetFlow Front" type="text" :min="LPMRangeMin" :max="LPMRangeMax" v-model="lpmFront" @input="checkValue" :disabled="isStop">
        <span class="settingUnit">LPM</span>
      </div>
    </div>
    <span class="sepearateText">|</span>
    <!-- <span class="sepearateText">/</span> -->
    
    <!-- REAR -->
    <div class="setArea">
      <!-- <span class="subTitle">REAR</span> -->
      <div class="rangeArea">
        <div class="rangeSliderWrapper">
          <input type="range" :min="LPMRangeMin" :max="LPMRangeMax" v-model="lpmRear" list="markers" :disabled="isStop">
          <datalist id="markers">
            <option
              v-for="value in markerValues"
              :key="value"
              :value="value">
            </option>
          </datalist>
        </div>
        <div class="displayRange">
          <span id="minLPM">{{ String(LPMRangeMin) }}</span>
          <span id="maxLPM">{{ String(LPMRangeMax) }}</span>
        </div>
      </div>
      <div class="numberArea">
        <input class="TargetFlow Rear" type="text" :min="LPMRangeMin" :max="LPMRangeMax" v-model="lpmRear" @input="checkValue" :disabled="isStop">
        <span class="settingUnit">LPM</span>
      </div>
    </div>
    <a-button class="eachApplyButton" :disabled="isStop" @click="sendFlowMessage">
      <!-- <icon-send /> -->
      Apply
    </a-button>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, h } from 'vue';
import { IconExclamationCircleFill } from '@arco-design/web-vue/es/icon';

import { useGlobalStore } from '@/stores/globalStore';

export default defineComponent({
  name: 'PostPurgeRow',
  props: {
    message: {
      type: String,
      required: true
    },
    isStop: {
      type: Boolean,
      required: true
    },
    LPMRange: {
      type: Object,
      requird: true
    },
    showModal: {
      type: Function as PropType<(message: string) => void>,
      required: true
    }
  },
  methods: {
    checkValue(event: Event) {      
      console.log('[onInput] lpmFront: ', this.lpmFront);
      console.log('[onInput] lpmRear: ', this.lpmRear);

      const inputDOM = event.target as HTMLInputElement;

      console.log('selectionStart:', inputDOM.selectionStart);

      // 숫자와 소수점만 입력 가능
      // eslint-disable-next-line no-useless-escape
      this.lpmFront = this.lpmFront.replace(/[^\.0-9]/g,'');
      // eslint-disable-next-line no-useless-escape
      this.lpmRear = this.lpmRear.replace(/[^\.0-9]/g,'');

      // console.log('정규식? ', /^[\d]*\.?[\d]{0,1}$/.test(this.lpmValue));

      // 소수점 뒤 한자리까지만 허용
      if (!(/^\d*\.?\d{0,1}$/.test(this.lpmFront))) {
        let cursorPosition = inputDOM.selectionStart;

        if (cursorPosition) {
          const newValue = this.lpmFront.slice(0, cursorPosition - 1) + this.lpmFront.slice(cursorPosition);
          this.lpmFront = newValue;
          console.log('lpmFront!!!! : ' , this.lpmFront);
        }

        this.$message.error({
          content: '소수점 뒤 한 자리까지만 입력 가능합니다.',
          closable: true,
          duration: 2000
        });
      }
      
      if (!(/^\d*\.?\d{0,1}$/.test(this.lpmRear))) {
        let cursorPosition = inputDOM.selectionStart;

        if (cursorPosition) {
          const newValue = this.lpmRear.slice(0, cursorPosition - 1) + this.lpmRear.slice(cursorPosition);
          this.lpmRear = newValue;
          console.log('lpmRear!!!! : ' , this.lpmRear);
        }

        this.$message.error({
          content: '소수점 뒤 한 자리까지만 입력 가능합니다.',
          closable: true,
          duration: 2000
        });
      }

      // 범위 확인
      if (this.lpmFront < this.LPMRangeMin || this.lpmFront > this.LPMRangeMax || this.lpmRear < this.LPMRangeMin || this.lpmRear > this.LPMRangeMax) {
        
        this.$message.error({
          content: `${String(this.LPMRangeMin)}~${String(this.LPMRangeMax)}까지만 입력 가능합니다.`,
          closable: true,
          duration: 2000
        });

        if(this.lpmFront < this.LPMRangeMin) {
          this.lpmFront = String(this.LPMRangeMin);
        } else {
          this.lpmFront = String(this.LPMRangeMax);
        }

        if(this.lpmRear < this.LPMRangeMin) {
          this.lpmRear = String(this.LPMRangeMin);
        } else {
          this.lpmRear = String(this.LPMRangeMax);
        }
      } 

      console.log('result(Front)', this.lpmFront);
      console.log('result(Rear)', this.lpmRear);

    },

    sendFlowMessage() {
      const globalStore = useGlobalStore();

      console.log('lpmFront: ', this.lpmFront);
      console.log('lpmRear: ', this.lpmRear);

      interface SingalGUIMsgPurgeReq {
        MessageID: 'SingalGUIMsgPurgeReq',
        MessageData: {
          TargetCommand: String,
          TargetFlow: Object,
          BaseTime: String
        }
      }

      const singalGUIMsgPurgeReq: SingalGUIMsgPurgeReq = {
        MessageID: 'SingalGUIMsgPurgeReq',
        MessageData: {
          TargetCommand: this.message,
          // TargetFlow: String(this.lpmValue),
          TargetFlow: {
            Front: String(this.lpmFront),
            Rear: String(this.lpmRear)
          },
          BaseTime: globalStore.getDateTime()
        }
      };

      console.log(singalGUIMsgPurgeReq);
      // globalStore.sendMessage(JSON.stringify(singalGUIMsgPurgeReq));
    }
  },
  setup(props) {
    const renderIcon = () => h(IconExclamationCircleFill);

    let LPMRangeMin = null;
    let LPMRangeMax = null;
    let LPMRangeDefault = null;
    let markerStep = null;
    let markerValues = [];

    let lpmFront = ref<string>('0');
    let lpmRear = ref<string>('0');
    const postPurgeMs = ref<string>('0');

    if (props.LPMRange) {
      LPMRangeMin = props.LPMRange.min;
      LPMRangeMax = props.LPMRange.max;
      lpmFront.value = props.LPMRange.default;
      lpmRear.value = props.LPMRange.default;
      markerStep = props.LPMRange.markerStep;

      for(let i = LPMRangeMin; i <= LPMRangeMax; i += markerStep) {
        markerValues.push(i);
      }
    }

    return {
      lpmFront,
      lpmRear,
      postPurgeMs,
      LPMRangeMin,
      LPMRangeMax,
      LPMRangeDefault,
      markerValues,
      renderIcon
    };
  }
});
</script>