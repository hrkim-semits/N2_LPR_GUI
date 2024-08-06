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
    if (__VLS_ctx.isVisible) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (__VLS_ctx.close) }, ...{ class: ("modal-overlay") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("modal-content") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.modalMessage);
        // @ts-ignore
        [isVisible, close, modalMessage,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.close) }, });
        // @ts-ignore
        [close,];
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['modal-overlay'];
        __VLS_styleScopedClasses['modal-content'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = 'ModalComponent';
    let __VLS_internalComponent;
}
//# sourceMappingURL=ModalComponent.vue.js.map