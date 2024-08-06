import { defineComponent, reactive, watchEffect } from 'vue';
export default defineComponent({
    name: 'ZoneData',
    props: {
        zoneData: {
            type: Object,
            required: true
        },
        portWidth: {
            type: Object,
            required: true
        }
    },
    setup(props) {
        const filteringFloat = (str) => {
            const isInteger = (number) => {
                return number % 1 === 0;
            };
            return !isInteger(Number(str)) ? String(Number(str).toFixed(1)).replace(/\.0$/, '') : str;
        };
        // console.log('zoneData: ', props.zoneData);
        let MessageData = props.zoneData;
        console.log('MessageData: ', MessageData);
        // 할당
        const eachData = reactive({
            zoneID: props.zoneData.ZoneID,
            flow: {
                front: filteringFloat(props.zoneData.Flow1),
                rear: filteringFloat(props.zoneData.Flow2),
            },
            pressure: filteringFloat(props.zoneData.Pressure),
            humidity: filteringFloat(props.zoneData.Humidity),
            temperature: filteringFloat(props.zoneData.Temperature),
            baseTime: props.zoneData.baseTime
        });
        watchEffect(() => {
            eachData.zoneID = props.zoneData.ZoneID;
            eachData.flow.front = filteringFloat(props.zoneData.Flow1);
            eachData.flow.rear = filteringFloat(props.zoneData.Flow2);
            eachData.pressure = filteringFloat(props.zoneData.Pressure);
            eachData.humidity = filteringFloat(props.zoneData.Humidity);
            eachData.temperature = filteringFloat(props.zoneData.Temperature);
            eachData.baseTime = props.zoneData.baseTime;
        });
        return {
            eachData
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("zoneData") }, ...{ style: ((__VLS_ctx.portWidth)) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("notLoadedFOUP") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    // @ts-ignore
    [portWidth,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("zoneDataHeader") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("zoneIDTitle") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("zoneID") }, });
    (__VLS_ctx.eachData.zoneID);
    // @ts-ignore
    [eachData,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("zoneDataBody") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("zoneDataContent") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("dataTitle") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("dataArea") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("dataValue") }, });
    (__VLS_ctx.eachData.flow.front);
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("subTitle") }, });
    // @ts-ignore
    [eachData,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("dataUnit") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("dataValue") }, });
    (__VLS_ctx.eachData.flow.rear);
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("subTitle") }, });
    // @ts-ignore
    [eachData,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("dataUnit") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("zoneDataContent") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("dataTitle") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("dataValue") }, });
    (__VLS_ctx.eachData.pressure);
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("dataUnit") }, });
    // @ts-ignore
    [eachData,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("zoneDataContent") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("dataTitle") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("dataValue") }, });
    (__VLS_ctx.eachData.humidity);
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("dataUnit") }, });
    // @ts-ignore
    [eachData,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("zoneDataContent") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("dataTitle") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("dataValue") }, });
    (__VLS_ctx.eachData.temperature);
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("dataUnit") }, });
    // @ts-ignore
    [eachData,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("zoneDataFooter") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("baseTimeTitle") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("baseTimeValue") }, });
    (__VLS_ctx.eachData.baseTime);
    // @ts-ignore
    [eachData,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['zoneData'];
        __VLS_styleScopedClasses['notLoadedFOUP'];
        __VLS_styleScopedClasses['zoneDataHeader'];
        __VLS_styleScopedClasses['zoneIDTitle'];
        __VLS_styleScopedClasses['zoneID'];
        __VLS_styleScopedClasses['zoneDataBody'];
        __VLS_styleScopedClasses['zoneDataContent'];
        __VLS_styleScopedClasses['dataTitle'];
        __VLS_styleScopedClasses['dataArea'];
        __VLS_styleScopedClasses['dataValue'];
        __VLS_styleScopedClasses['subTitle'];
        __VLS_styleScopedClasses['dataUnit'];
        __VLS_styleScopedClasses['dataValue'];
        __VLS_styleScopedClasses['subTitle'];
        __VLS_styleScopedClasses['dataUnit'];
        __VLS_styleScopedClasses['zoneDataContent'];
        __VLS_styleScopedClasses['dataTitle'];
        __VLS_styleScopedClasses['dataValue'];
        __VLS_styleScopedClasses['dataUnit'];
        __VLS_styleScopedClasses['zoneDataContent'];
        __VLS_styleScopedClasses['dataTitle'];
        __VLS_styleScopedClasses['dataValue'];
        __VLS_styleScopedClasses['dataUnit'];
        __VLS_styleScopedClasses['zoneDataContent'];
        __VLS_styleScopedClasses['dataTitle'];
        __VLS_styleScopedClasses['dataValue'];
        __VLS_styleScopedClasses['dataUnit'];
        __VLS_styleScopedClasses['zoneDataFooter'];
        __VLS_styleScopedClasses['baseTimeTitle'];
        __VLS_styleScopedClasses['baseTimeValue'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = 'ZoneData';
    let __VLS_internalComponent;
}
//# sourceMappingURL=MonitorPage_zoneData.vue.js.map