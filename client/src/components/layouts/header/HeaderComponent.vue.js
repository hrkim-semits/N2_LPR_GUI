import { computed } from 'vue';
import { useGlobalStore } from '@/stores/globalStore';
import './HeaderComponent.scss';
import ModeToggle from '@/components/common/modeToggle/ModeToggle.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const globalStore = useGlobalStore();
const isStop = computed(() => globalStore.isStop);
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({ ...{ class: ("header") }, ...{ class: (({ 'emergency': __VLS_ctx.isStop })) }, });
    __VLS_styleScopedClasses = ({ 'emergency': isStop });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("companyLogo") }, });
    // @ts-ignore
    [isStop,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("headerContents") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    // @ts-ignore
    [ModeToggle, ModeToggle,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(ModeToggle, new ModeToggle({ ...{ class: ("modeToggleButton") }, }));
    const __VLS_1 = __VLS_0({ ...{ class: ("modeToggleButton") }, }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    ({}({ ...{ class: ("modeToggleButton") }, }));
    const __VLS_4 = __VLS_pickFunctionalComponentCtx(ModeToggle, __VLS_1);
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("headerText") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("headerText") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("stoppedText"), ...{ class: ("emergencyStopText") }, ...{ style: (({ display: __VLS_ctx.isStop ? 'block' : 'none' })) }, });
    // @ts-ignore
    [isStop,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['header'];
        __VLS_styleScopedClasses['companyLogo'];
        __VLS_styleScopedClasses['headerContents'];
        __VLS_styleScopedClasses['modeToggleButton'];
        __VLS_styleScopedClasses['headerText'];
        __VLS_styleScopedClasses['headerText'];
        __VLS_styleScopedClasses['emergencyStopText'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                ModeToggle: ModeToggle,
                isStop: isStop,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
//# sourceMappingURL=HeaderComponent.vue.js.map