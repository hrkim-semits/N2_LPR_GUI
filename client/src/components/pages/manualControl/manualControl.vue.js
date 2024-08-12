import { useGlobalStore } from '@/stores/globalStore';
import { computed } from 'vue';
export default (await import('vue')).defineComponent({
    name: 'manualControlPage',
    setup() {
        const globalStore = useGlobalStore();
        const isStop = computed(() => globalStore.isStop);
        return {
            isStop
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("mainContents") }, ...{ class: (({ 'emergency': __VLS_ctx.isStop })) }, });
    __VLS_styleScopedClasses = ({ 'emergency': isStop });
    // @ts-ignore
    [isStop,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['mainContents'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = 'manualControlPage';
    let __VLS_internalComponent;
}
//# sourceMappingURL=manualControl.vue.js.map