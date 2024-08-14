import { computed, defineComponent } from 'vue';
import './MonitorPage.scss';
import { useGlobalStore } from '@/stores/globalStore';
import ZoneData from './zoneData/MonitorPage_zoneData.vue';
export default defineComponent({
    name: 'MonitorPage',
    props: {
        isStop: {
            type: Boolean,
            required: true
        }
    },
    components: {
        ZoneData
    },
    setup() {
        const globalStore = useGlobalStore();
        let responsedZoneData = computed(() => globalStore.responsedZoneData);
        return {
            responsedZoneData
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("mainContents") }, ...{ class: (({ 'emergency': __VLS_ctx.isStop })) }, });
    __VLS_styleScopedClasses = ({ 'emergency': isStop });
    for (const [zoneData, index] of __VLS_getVForSourceType((__VLS_ctx.responsedZoneData))) {
        // @ts-ignore
        const __VLS_0 = {}
            .ZoneData;
        ({}.ZoneData);
        ({}.ZoneData);
        __VLS_components.ZoneData;
        __VLS_components.ZoneData;
        // @ts-ignore
        [ZoneData, ZoneData,];
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ zoneData: ((zoneData)), key: ((index)), }));
        const __VLS_2 = __VLS_1({ zoneData: ((zoneData)), key: ((index)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ zoneData: ((zoneData)), key: ((index)), }));
        // @ts-ignore
        [isStop, responsedZoneData,];
        const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['mainContents'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {
        ZoneData
    };
    const __VLS_name = 'MonitorPage';
    let __VLS_internalComponent;
}
//# sourceMappingURL=MonitorPage.vue.js.map