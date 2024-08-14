import { computed } from 'vue';
import './FooterComponent.scss';
import { useGlobalStore } from '@/stores/globalStore';
import WebSocketStatus from './webSocketStatus/WebSocketStatus.vue';
export default (await import('vue')).defineComponent({
    name: 'FooterComponent',
    components: {
        WebSocketStatus
    },
    setup() {
        const currentVersion = '1.0.0';
        const globalStore = useGlobalStore();
        let isConnected = computed(() => globalStore.isConnected);
        console.log(isConnected);
        return {
            isConnected,
            currentVersion
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.footer, __VLS_intrinsicElements.footer)({ ...{ class: ("footer") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("footerLeft") }, });
    // @ts-ignore
    const __VLS_0 = {}
        .WebSocketStatus;
    ({}.WebSocketStatus);
    ({}.WebSocketStatus);
    __VLS_components.WebSocketStatus;
    __VLS_components.WebSocketStatus;
    // @ts-ignore
    [WebSocketStatus, WebSocketStatus,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({}));
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("footerCenter") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("copyright footerText") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("footerRight") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("loggedInUser") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    // @ts-ignore
    const __VLS_6 = {}
        .IconUser;
    ({}.IconUser);
    __VLS_components.IconUser;
    // @ts-ignore
    [IconUser,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ class: ("footerIcon") }, }));
    const __VLS_8 = __VLS_7({ ...{ class: ("footerIcon") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ ...{ class: ("footerIcon") }, }));
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("footerText") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("versionInfo") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    // @ts-ignore
    const __VLS_12 = {}
        .IconBranch;
    ({}.IconBranch);
    __VLS_components.IconBranch;
    // @ts-ignore
    [IconBranch,];
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ class: ("footerIcon") }, }));
    const __VLS_14 = __VLS_13({ ...{ class: ("footerIcon") }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({ ...{ class: ("footerIcon") }, }));
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("footerText") }, });
    (__VLS_ctx.currentVersion);
    // @ts-ignore
    [currentVersion,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['footer'];
        __VLS_styleScopedClasses['footerLeft'];
        __VLS_styleScopedClasses['footerCenter'];
        __VLS_styleScopedClasses['copyright'];
        __VLS_styleScopedClasses['footerText'];
        __VLS_styleScopedClasses['footerRight'];
        __VLS_styleScopedClasses['loggedInUser'];
        __VLS_styleScopedClasses['footerIcon'];
        __VLS_styleScopedClasses['footerText'];
        __VLS_styleScopedClasses['versionInfo'];
        __VLS_styleScopedClasses['footerIcon'];
        __VLS_styleScopedClasses['footerText'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {
        WebSocketStatus
    };
    const __VLS_name = 'FooterComponent';
    let __VLS_internalComponent;
}
//# sourceMappingURL=FooterComponent.vue.js.map