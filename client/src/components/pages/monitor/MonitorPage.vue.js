import { computed, watchEffect } from 'vue';
import './MonitorPage.scss';
import { useGlobalStore } from '@/stores/globalStore';
import ZoneData from './MonitorPage_zoneData.vue';
export default await (async () => {
    const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
    const globalStore = useGlobalStore();
    const isStop = computed(() => globalStore.isStop);
    let responsedZoneData = computed(() => globalStore.responsedZoneData);
    let portWidth = { width: `${(100 / responsedZoneData.value.length) - 2}%` };
    watchEffect(() => {
        portWidth = { width: `${(100 / responsedZoneData.value.length) - 2}%` };
    });
    const __VLS_fnComponent = (await import('vue')).defineComponent({});
    let __VLS_functionalComponentProps;
    function __VLS_template() {
        let __VLS_ctx;
        /* Components */
        let __VLS_otherComponents;
        let __VLS_own;
        let __VLS_localComponents;
        let __VLS_components;
        let __VLS_styleScopedClasses;
        let __VLS_resolvedLocalAndGlobalComponents;
        __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("mainContents") }, ...{ class: (({ 'emergency': __VLS_ctx.isStop })) }, });
        __VLS_styleScopedClasses = ({ 'emergency': isStop });
        for (const [zoneData, index] of __VLS_getVForSourceType((__VLS_ctx.responsedZoneData))) {
            // @ts-ignore
            [ZoneData, ZoneData,];
            // @ts-ignore
            const __VLS_0 = __VLS_asFunctionalComponent(ZoneData, new ZoneData({ portWidth: ((__VLS_ctx.portWidth)), zoneData: ((zoneData)), key: ((index)), }));
            const __VLS_1 = __VLS_0({ portWidth: ((__VLS_ctx.portWidth)), zoneData: ((zoneData)), key: ((index)), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
            ({}({ portWidth: ((__VLS_ctx.portWidth)), zoneData: ((zoneData)), key: ((index)), }));
            // @ts-ignore
            [isStop, responsedZoneData, portWidth,];
            const __VLS_4 = __VLS_pickFunctionalComponentCtx(ZoneData, __VLS_1);
        }
        if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
            __VLS_styleScopedClasses['mainContents'];
        }
        var __VLS_slots;
        return __VLS_slots;
        const __VLS_componentsOption = {};
        let __VLS_name;
        let __VLS_defineComponent;
        const __VLS_internalComponent = __VLS_defineComponent({
            setup() {
                return {
                    ZoneData: ZoneData,
                    isStop: isStop,
                    responsedZoneData: responsedZoneData,
                    portWidth: portWidth,
                };
            },
        });
    }
    return (await import('vue')).defineComponent({
        setup() {
            return {};
        },
    });
})();
//# sourceMappingURL=MonitorPage.vue.js.map