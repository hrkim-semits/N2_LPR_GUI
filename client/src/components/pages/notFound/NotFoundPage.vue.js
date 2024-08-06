import { computed } from 'vue';
import { useGlobalStore } from '@/stores/globalStore';
import './NotFoundPage.scss';
export default (await import('vue')).defineComponent({
    name: 'NotFoundPage',
    setup() {
        const globalStore = useGlobalStore();
        const isStop = computed(() => globalStore.isStop);
        console.log('NOTFOUNDPAGE');
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("  ") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    // @ts-ignore
    const __VLS_0 = {}
        .RouterLink;
    ({}.RouterLink);
    ({}.RouterLink);
    __VLS_components.RouterLink;
    __VLS_components.RouterLink;
    // @ts-ignore
    [RouterLink, RouterLink,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: ("/"), ...{ class: ("goHomeButton") }, }));
    const __VLS_2 = __VLS_1({ to: ("/"), ...{ class: ("goHomeButton") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ to: ("/"), ...{ class: ("goHomeButton") }, }));
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['goHomeButton'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = 'NotFoundPage';
    let __VLS_internalComponent;
}
//# sourceMappingURL=NotFoundPage.vue.js.map