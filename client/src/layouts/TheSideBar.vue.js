import { defineProps, defineEmits } from 'vue';
import SideBar from '../components/layouts/sideBar/SideBar.vue';
const { defineSlots, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    isStop: {
        type: Boolean,
        required: true
    }
});
const emit = defineEmits(['emergencyStop']);
function handleEmergencyStop() {
    emit('emergencyStop');
}
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        isStop: {
            type: Boolean,
            required: true
        }
    },
    emits: {},
});
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
    // @ts-ignore
    [SideBar,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(SideBar, new SideBar({ ...{ 'onEmergencyStop': {} }, isStop: ((__VLS_ctx.isStop)), }));
    const __VLS_1 = __VLS_0({ ...{ 'onEmergencyStop': {} }, isStop: ((__VLS_ctx.isStop)), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    ({}({ ...{ 'onEmergencyStop': {} }, isStop: ((__VLS_ctx.isStop)), }));
    let __VLS_5;
    const __VLS_6 = {
        onEmergencyStop: (__VLS_ctx.handleEmergencyStop)
    };
    // @ts-ignore
    [isStop, handleEmergencyStop,];
    const __VLS_4 = __VLS_pickFunctionalComponentCtx(SideBar, __VLS_1);
    let __VLS_2;
    let __VLS_3;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                SideBar: SideBar,
                handleEmergencyStop: handleEmergencyStop,
            };
        },
        props: {
            isStop: {
                type: Boolean,
                required: true
            }
        },
        emits: {},
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        isStop: {
            type: Boolean,
            required: true
        }
    },
    emits: {},
});
;
//# sourceMappingURL=TheSideBar.vue.js.map