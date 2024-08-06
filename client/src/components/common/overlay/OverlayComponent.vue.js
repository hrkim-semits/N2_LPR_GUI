import './overlayComponent.scss';
export default await (async () => {
    const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
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
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("overlay") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("overlayContent") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.$emit('close');
                    // @ts-ignore
                    [$emit,];
                } }, ...{ class: ("modalClose") }, });
        if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
            __VLS_styleScopedClasses['overlay'];
            __VLS_styleScopedClasses['overlayContent'];
            __VLS_styleScopedClasses['modalClose'];
        }
        var __VLS_slots;
        return __VLS_slots;
        const __VLS_componentsOption = {};
        const __VLS_name = 'OverlayComponent';
        let __VLS_defineComponent;
        const __VLS_internalComponent = __VLS_defineComponent({
            setup() {
                return {};
            },
            name: 'OverlayComponent'
        });
    }
    return (await import('vue')).defineComponent({
        setup() {
            return {};
        },
        name: 'OverlayComponent'
    });
})();
;
//# sourceMappingURL=OverlayComponent.vue.js.map