import { defineComponent, ref } from 'vue';
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
        checkValue: {
            type: Function,
            required: true
        }
    },
    setup(props) {
        let LPMRageMin = null;
        let LPMRageMax = null;
        let LPMRageDefault = null;
        let markerStep = null;
        let markerValues = [];
        let lpmValue = ref(0); // lpm 설정 기본값을 50으로 설정
        const postPurgeMs = ref('0');
        if (props.LPMRange) {
            LPMRageMin = props.LPMRange.min;
            LPMRageMax = props.LPMRange.max;
            lpmValue.value = props.LPMRange.default;
            markerStep = props.LPMRange.markerStep;
            for (let i = LPMRageMin; i <= LPMRageMax; i += markerStep) {
                markerValues.push(i);
            }
        }
        // const inputInt = (event: Event) => {
        //   const target = event.target as HTMLInputElement;
        //   const value = target.value;
        //   if (!/^\d*$/.test(value)) {
        //     postPurgeMs.value = value.replace(/[^\d]/g, '');
        //   } else {
        //     postPurgeMs.value = value;
        //   }
        // };
        // const checkValue = (event: Event) => {
        //   const input = event.target as HTMLInputElement;
        //   let value = parseInt(input.value, 10); // 기본 10진수로 설정
        //   const regexp = /^\d*.?\d{0,1}$/; // 소수점 이하 한 자리까지 허용하는 정규표현식
        //   const deleteLast = () => {
        //     input.value = input.value.slice(0, -1);
        //     // value = parseInt( input.value );
        //     value = Number(input.value);
        //   };
        //   if (value < LPMRageMin || value > LPMRageMax) {
        //     alert( '0~100까지만 입력 가능합니다.' );
        //     // 범위를 벗어날 경우 입력되지 않도록 함
        //     deleteLast();
        //   } 
        //   if ( !regexp.test(input.value) ) {
        //     alert( '소수점 한 자리까지만 입력 가능합니다.' );
        //     // 범위를 벗어날 경우 입력되지 않도록 함
        //     deleteLast();
        //   }
        // };
        return {
            lpmValue,
            postPurgeMs,
            // checkValue,
            // inputInt,
            LPMRageMin,
            LPMRageMax,
            LPMRageDefault,
            markerValues
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("setArea") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("rangeArea") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("rangeSliderWrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({ type: ("range"), min: ((__VLS_ctx.LPMRageMin)), max: ((__VLS_ctx.LPMRageMax)), list: ("markers"), disabled: ((__VLS_ctx.isStop)), });
    (__VLS_ctx.lpmValue);
    // @ts-ignore
    [LPMRageMin, LPMRageMax, isStop, lpmValue,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.datalist, __VLS_intrinsicElements.datalist)({ id: ("markers"), });
    for (const [value] of __VLS_getVForSourceType((__VLS_ctx.markerValues))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ key: ((value)), value: ((value)), });
        // @ts-ignore
        [markerValues,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("displayRange") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ id: ("minLPM"), });
    (String(__VLS_ctx.LPMRageMin));
    // @ts-ignore
    [LPMRageMin,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ id: ("maxLPM"), });
    (String(__VLS_ctx.LPMRageMax));
    // @ts-ignore
    [LPMRageMax,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("numberArea") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({ ...{ onInput: (__VLS_ctx.checkValue) }, ...{ class: ("LPMValue") }, type: ("text"), min: ((__VLS_ctx.LPMRageMin)), max: ((__VLS_ctx.LPMRageMax)), value: ((__VLS_ctx.lpmValue)), disabled: ((__VLS_ctx.isStop)), });
    // @ts-ignore
    [LPMRageMin, LPMRageMax, isStop, lpmValue, checkValue,];
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
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("IndividualSendButton") }, }));
    const __VLS_2 = __VLS_1({ ...{ class: ("IndividualSendButton") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ class: ("IndividualSendButton") }, }));
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['settingRow'];
        __VLS_styleScopedClasses['msgArea'];
        __VLS_styleScopedClasses['setArea'];
        __VLS_styleScopedClasses['rangeArea'];
        __VLS_styleScopedClasses['rangeSliderWrapper'];
        __VLS_styleScopedClasses['displayRange'];
        __VLS_styleScopedClasses['numberArea'];
        __VLS_styleScopedClasses['LPMValue'];
        __VLS_styleScopedClasses['settingUnit'];
        __VLS_styleScopedClasses['IndividualSendButton'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = 'PostPurgeRow';
    let __VLS_internalComponent;
}
//# sourceMappingURL=SetLPMRow.vue.js.map