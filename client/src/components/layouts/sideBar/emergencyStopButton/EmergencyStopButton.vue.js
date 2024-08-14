import { defineComponent } from 'vue';
import './EmergencyStopButton.scss';
import { useGlobalStore } from '@/stores/globalStore';
export default defineComponent({
    name: 'EmergencyStopButton',
    props: {
        isStop: {
            type: Boolean,
            required: true
        }
    },
    setup() {
        const globalStore = useGlobalStore();
        const toggleStop = globalStore.toggleStop;
        return {
            toggleStop
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.toggleStop) }, ...{ class: (({ active: __VLS_ctx.$props.isStop })) }, ...{ class: ("emergencyBtn") }, });
    __VLS_styleScopedClasses = ({ active: $props.isStop });
    (__VLS_ctx.$props.isStop ? 'RESTART' : 'EMERGENCY STOP');
    // @ts-ignore
    [toggleStop, $props, $props,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['emergencyBtn'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = 'EmergencyStopButton';
    let __VLS_internalComponent;
}
//# sourceMappingURL=EmergencyStopButton.vue.js.map