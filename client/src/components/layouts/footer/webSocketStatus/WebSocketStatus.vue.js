import { useGlobalStore } from '@/stores/globalStore';
import { computed, defineComponent } from 'vue';
import './WebSocketStatus.scss';
export default defineComponent({
    name: 'WebSocketStatus',
    setup() {
        const globalStore = useGlobalStore();
        const isConnected = computed(() => globalStore.isConnected);
        return {
            isConnected
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("webSocketStatus") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("webSocketStatusColor") }, ...{ style: (({ backgroundColor: __VLS_ctx.isConnected ? '#00B42A' : '#F53F3F' })) }, });
    // @ts-ignore
    [isConnected,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("footerText") }, });
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['webSocketStatus'];
        __VLS_styleScopedClasses['webSocketStatusColor'];
        __VLS_styleScopedClasses['footerText'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = 'WebSocketStatus';
    let __VLS_internalComponent;
}
//# sourceMappingURL=WebSocketStatus.vue.js.map