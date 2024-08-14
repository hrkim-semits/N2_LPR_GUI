import './ModalComponent.scss';
export default (await import('vue')).defineComponent({
    name: 'ModalComponent',
    props: {
        isVisible: {
            type: Boolean,
            required: true
        },
        modalMessage: {
            type: String,
            required: true
        }
    },
    watch: {
        isVisible(newVal) {
            if (newVal) {
                document.addEventListener('keydown', this.handleKeydown);
            }
            else {
                document.removeEventListener('keydown', this.handleKeydown);
            }
        },
    },
    methods: {
        close() {
            this.$emit('close');
        },
        handleKeydown(event) {
            if (event.key === 'Enter') {
                this.close();
            }
        }
    },
    beforeUnmount() {
        document.removeEventListener('keydown', this.handleKeydown);
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
    if (__VLS_ctx.$props.isVisible) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (__VLS_ctx.close) }, ...{ class: ("modal-overlay") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("modal-content") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.modalMessage);
        // @ts-ignore
        [$props, close, modalMessage,];
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
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClick': {} }, ...{ class: ("modalConfirmButton") }, }));
        const __VLS_2 = __VLS_1({ ...{ 'onClick': {} }, ...{ class: ("modalConfirmButton") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{ 'onClick': {} }, ...{ class: ("modalConfirmButton") }, }));
        let __VLS_6;
        const __VLS_7 = {
            onClick: (__VLS_ctx.close)
        };
        // @ts-ignore
        [close,];
        (__VLS_5.slots).default;
        const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
        let __VLS_3;
        let __VLS_4;
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['modal-overlay'];
        __VLS_styleScopedClasses['modal-content'];
        __VLS_styleScopedClasses['modalConfirmButton'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = 'ModalComponent';
    let __VLS_internalComponent;
}
//# sourceMappingURL=ConfirmComponent.vue.js.map