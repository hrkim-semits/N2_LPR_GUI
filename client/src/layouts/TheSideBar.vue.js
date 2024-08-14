import { defineComponent } from 'vue';
import SideBar from '../components/layouts/sideBar/SideBar.vue';
export default defineComponent({
    name: 'TheSideBar',
    props: {
        isStop: {
            type: Boolean,
            required: true
        },
    },
    components: {
        SideBar
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
    // @ts-ignore
    const __VLS_0 = {}
        .SideBar;
    ({}.SideBar);
    __VLS_components.SideBar;
    // @ts-ignore
    [SideBar,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ isStop: ((__VLS_ctx.$props.isStop)), }));
    const __VLS_2 = __VLS_1({ isStop: ((__VLS_ctx.$props.isStop)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ isStop: ((__VLS_ctx.$props.isStop)), }));
    // @ts-ignore
    [$props,];
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {
        SideBar
    };
    const __VLS_name = 'TheSideBar';
    let __VLS_internalComponent;
}
//# sourceMappingURL=TheSideBar.vue.js.map