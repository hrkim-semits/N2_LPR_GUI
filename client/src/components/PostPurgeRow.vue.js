import { defineComponent, ref } from 'vue';
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
            type: Function,
            required: true
        }
    },
    methods: {
        checkValue(event) {
            // console.log(this.lpmValue);
            const inputDOM = event.target;
            console.log('selectionStart:', inputDOM.selectionStart);
            // 숫자와 소수점만 입력 가능
            // eslint-disable-next-line no-useless-escape
            this.lpmValue = this.lpmValue.replace(/[^\.0-9]/g, '');
            console.log('정규식? ', /^[\d]*\.?[\d]{0,1}$/.test(this.lpmValue));
            // 소수점 뒤 한자리까지만 허용
            if (!(/^\d*\.?\d{0,1}$/.test(this.lpmValue))) {
                let cursorPosition = inputDOM.selectionStart;
                if (cursorPosition) {
                    const newValue = this.lpmValue.slice(0, cursorPosition - 1) + this.lpmValue.slice(cursorPosition);
                    this.lpmValue = newValue;
                    console.log('lpmValue!!!! : ', this.lpmValue);
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
                if (this.lpmValue < this.LPMRangeMin) {
                    this.lpmValue = String(this.LPMRangeMin);
                }
                else {
                    this.lpmValue = String(this.LPMRangeMax);
                }
            }
            console.log('result', this.lpmValue);
        },
        sendPostPurgeMessage() {
            const globalStore = useGlobalStore();
            const singalGUIMsgPurgeReq = {
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
        let lpmValue = ref('0');
        const postPurgeMs = ref('0');
        const inputRef = ref(null);
        const inputValue = ref('');
        if (props.LPMRange) {
            LPMRangeMin = props.LPMRange.min;
            LPMRangeMax = props.LPMRange.max;
            lpmValue.value = props.LPMRange.default;
            markerStep = props.LPMRange.markerStep;
            for (let i = LPMRangeMin; i <= LPMRangeMax; i += markerStep) {
                markerValues.push(i);
            }
        }
        const inputInt = (event) => {
            const target = event.target;
            const value = target.value;
            if (!/^\d*$/.test(value)) {
                inputValue.value = value.replace(/[^\d]/g, '');
                target.value = inputValue.value;
                setCursorToEnd();
            }
            else {
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
;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("settingRow") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("msgArea") }, });
    (__VLS_ctx.message);
    // @ts-ignore
    [message,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("setPurgeArea") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("purgeRangeArea") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("purgeRangeSliderWrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({ type: ("range"), min: ((__VLS_ctx.LPMRangeMin)), max: ((__VLS_ctx.LPMRangeMax)), list: ("markers"), disabled: ((__VLS_ctx.isStop)), });
    (__VLS_ctx.lpmValue);
    // @ts-ignore
    [LPMRangeMin, LPMRangeMax, isStop, lpmValue,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.datalist, __VLS_intrinsicElements.datalist)({ id: ("markers"), });
    for (const [value] of __VLS_getVForSourceType((__VLS_ctx.markerValues))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ key: ((value)), value: ((value)), });
        // @ts-ignore
        [markerValues,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("displayRange") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ id: ("minLPM"), });
    (String(__VLS_ctx.LPMRangeMin));
    // @ts-ignore
    [LPMRangeMin,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ id: ("maxLPM"), });
    (String(__VLS_ctx.LPMRangeMax));
    // @ts-ignore
    [LPMRangeMax,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("purgeNumberArea") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flowInputNum") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({ ...{ onInput: (__VLS_ctx.checkValue) }, ...{ class: ("TargetFlow") }, type: ("text"), min: ((__VLS_ctx.LPMRangeMin)), max: ((__VLS_ctx.LPMRangeMax)), value: ((__VLS_ctx.lpmValue)), disabled: ((__VLS_ctx.isStop)), });
    // @ts-ignore
    [LPMRangeMin, LPMRangeMax, isStop, lpmValue, checkValue,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("settingUnit") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("durationInputNum") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({ ...{ onInput: (__VLS_ctx.inputInt) }, ref: ("inputRef"), ...{ class: ("PurgeDurationOfMillis") }, type: ("text"), min: ("0"), value: ((__VLS_ctx.postPurgeMs)), disabled: ((__VLS_ctx.isStop)), });
    // @ts-ignore
    (__VLS_ctx.inputRef);
    // @ts-ignore
    [isStop, inputInt, postPurgeMs, inputRef,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("settingUnit") }, });
    // @ts-ignore
    const __VLS_0 = {}
        .AButton;
    ({}.AButton);
    ({}.AButton);
    __VLS_components.AButton;
    __VLS_components.aButton;
    __VLS_components.AButton;
    __VLS_components.aButton;
    // @ts-ignore
    [AButton, AButton,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClick': {} }, ...{ class: ("eachApplyButton") }, disabled: ((__VLS_ctx.isStop)), }));
    const __VLS_2 = __VLS_1({ ...{ 'onClick': {} }, ...{ class: ("eachApplyButton") }, disabled: ((__VLS_ctx.isStop)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ 'onClick': {} }, ...{ class: ("eachApplyButton") }, disabled: ((__VLS_ctx.isStop)), }));
    let __VLS_6;
    const __VLS_7 = {
        onClick: (__VLS_ctx.sendPostPurgeMessage)
    };
    // @ts-ignore
    [isStop, sendPostPurgeMessage,];
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    let __VLS_3;
    let __VLS_4;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['settingRow'];
        __VLS_styleScopedClasses['msgArea'];
        __VLS_styleScopedClasses['setPurgeArea'];
        __VLS_styleScopedClasses['purgeRangeArea'];
        __VLS_styleScopedClasses['purgeRangeSliderWrapper'];
        __VLS_styleScopedClasses['displayRange'];
        __VLS_styleScopedClasses['purgeNumberArea'];
        __VLS_styleScopedClasses['flowInputNum'];
        __VLS_styleScopedClasses['TargetFlow'];
        __VLS_styleScopedClasses['settingUnit'];
        __VLS_styleScopedClasses['durationInputNum'];
        __VLS_styleScopedClasses['PurgeDurationOfMillis'];
        __VLS_styleScopedClasses['settingUnit'];
        __VLS_styleScopedClasses['eachApplyButton'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = 'PostPurgeRow';
    let __VLS_internalComponent;
}
//# sourceMappingURL=PostPurgeRow.vue.js.map