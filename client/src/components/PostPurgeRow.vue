<template>
  <li class="settingRow">
    <div class="msgArea">{{ message }}</div>
    <div class="setPurgeArea">
      <div class="purgeRangeArea">
        <div class="purgeRangeSliderWrapper">
          <!-- EMERGENCY STOP 실행시 input disabled -->
          <input type="range" :min="LPMRangeMin" :max="LPMRangeMax" v-model="lpmValue" list="markers" :disabled="isStop">
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
      <div class="purgeNumberArea">
        <!-- EMERGENCY STOP 실행시 input disabled -->
        <div class="flowInputNum">
          <input class="TargetFlow" type="text" :min="LPMRangeMin" :max="LPMRangeMax" v-model="lpmValue" @input="checkValue" :disabled="isStop">
          <span class="settingUnit">LPM</span>
        </div>
        <div class="durationInputNum">
          <!-- 기본값 설정, 정수만 입력 가능 -->
          <input ref="inputRef" class="PurgeDurationOfMillis" type="text" min="0" v-model="postPurgeMs" @input="inputInt" :disabled="isStop">
          <span class="settingUnit">ms</span>
        </div>
      </div>
    </div>
    <a-button class="eachApplyButton" :disabled="isStop" @click="sendPostPurgeMessage">
      <!-- <icon-send /> -->
      Apply
    </a-button>
  </li>
</template>



<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
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
      // console.log(this.lpmValue);

      const inputDOM = event.target as HTMLInputElement;

      console.log('selectionStart:', inputDOM.selectionStart);

      // 숫자와 소수점만 입력 가능
      // eslint-disable-next-line no-useless-escape
      this.lpmValue = this.lpmValue.replace(/[^\.0-9]/g,'');

      console.log('정규식? ', /^[\d]*\.?[\d]{0,1}$/.test(this.lpmValue));

      // 소수점 뒤 한자리까지만 허용
      if (!(/^\d*\.?\d{0,1}$/.test(this.lpmValue))) {
        let cursorPosition = inputDOM.selectionStart;

        if (cursorPosition) {
          const newValue = this.lpmValue.slice(0, cursorPosition - 1) + this.lpmValue.slice(cursorPosition);
          this.lpmValue = newValue;
          console.log('lpmValue!!!! : ' , this.lpmValue);
        }

        this.$message.error({
          content: '소수점 뒤 한 자리까지만 입력 가능합니다.',
          closable: true,
          duration: 2000
        });
      }

      // 범위 확인
      if (this.lpmValue < this.LPMRangeMin || this.lpmValue > this.LPMRangeMax) {
        
        this.$message.error({
          content: `${String(this.LPMRangeMin)}~${String(this.LPMRangeMax)}까지만 입력 가능합니다.`,
          closable: true,
          duration: 2000
        });

        if(this.lpmValue < this.LPMRangeMin) {
          this.lpmValue = String(this.LPMRangeMin);
        } else {
          this.lpmValue = String(this.LPMRangeMax);
        }
      } 

      console.log('result', this.lpmValue);

    },
    sendPostPurgeMessage() {

      const globalStore = useGlobalStore();

      interface SingalGUIMsgPurgeReq {
        MessageID: 'SingalGUIMsgPurgeReq',
        MessageData: {
          TargetCommand: 'PostPurge',
          TargetFlow: string,
          PurgeDurationOfMillis: string,
          BaseTime: string
        }
      }

      const singalGUIMsgPurgeReq: SingalGUIMsgPurgeReq = {
        MessageID: 'SingalGUIMsgPurgeReq',
        MessageData: {
          TargetCommand: 'PostPurge',
          TargetFlow: String(this.lpmValue),
          PurgeDurationOfMillis: this.postPurgeMs,
          BaseTime: globalStore.getDateTime()
        }
      };
      
      console.log(singalGUIMsgPurgeReq);
      // globalStore.sendMessage(JSON.stringify(singalGUIMsgPurgeReq));
    }
  },
  setup(props) {
    let LPMRangeMin = null;
    let LPMRangeMax = null;
    let LPMRageDefault = null;
    let markerStep = null;
    let markerValues = [];

    let lpmValue = ref<string>('0');
    const postPurgeMs = ref<string>('0');

    const inputRef = ref<HTMLInputElement | null>(null);
    const inputValue = ref<string>('');

    if (props.LPMRange) {
      LPMRangeMin = props.LPMRange.min;
      LPMRangeMax = props.LPMRange.max;
      lpmValue.value = props.LPMRange.default;
      markerStep = props.LPMRange.markerStep;

      for(let i = LPMRangeMin; i <= LPMRangeMax; i += markerStep) {
        markerValues.push(i);
      }
    }

    const inputInt = (event: Event) => {
      const target = event.target as HTMLInputElement;
      const value = target.value;

      if (!/^\d*$/.test(value)) {
        inputValue.value = value.replace(/[^\d]/g, '');
        target.value = inputValue.value;

        setCursorToEnd();
      } else {
        inputValue.value = value;
      }
    };

    const setCursorToEnd = () => {
      if (inputRef.value) {
        const length = inputValue.value.length;
        inputRef.value.focus();
        inputRef.value.setSelectionRange(length, length);
      }
    };

    return {
      lpmValue,
      postPurgeMs,
      inputInt,
      LPMRangeMin,
      LPMRangeMax,
      LPMRageDefault,
      markerValues,
    };
  }
});
</script>
