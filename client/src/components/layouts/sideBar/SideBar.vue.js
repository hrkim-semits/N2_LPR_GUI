import { defineComponent } from 'vue';
import './SideBar.scss';
import EmergencyStopButton from './emergencyStopButton/EmergencyStopButton.vue';
export default defineComponent({
    name: 'SideBar',
    props: {
        isStop: {
            type: Boolean,
            required: true
        }
    },
    components: {
        EmergencyStopButton
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("sideBar") }, ...{ class: (({ 'emergency': __VLS_ctx.isStop })) }, });
    __VLS_styleScopedClasses = ({ 'emergency': isStop });
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({ ...{ class: ("sideBarNav") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("sideBarNavList") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
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
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: ("/"), }));
    const __VLS_2 = __VLS_1({ to: ("/"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ to: ("/"), }));
    // @ts-ignore
    const __VLS_6 = {}
        .IconDashboard;
    ({}.IconDashboard);
    __VLS_components.IconDashboard;
    __VLS_components.iconDashboard;
    // @ts-ignore
    [IconDashboard,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ class: ("menuIcon") }, }));
    const __VLS_8 = __VLS_7({ ...{ class: ("menuIcon") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ ...{ class: ("menuIcon") }, }));
    // @ts-ignore
    [isStop,];
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    // @ts-ignore
    const __VLS_12 = {}
        .RouterLink;
    ({}.RouterLink);
    ({}.RouterLink);
    __VLS_components.RouterLink;
    __VLS_components.RouterLink;
    // @ts-ignore
    [RouterLink, RouterLink,];
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ to: ("/setting"), }));
    const __VLS_14 = __VLS_13({ to: ("/setting"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({ to: ("/setting"), }));
    // @ts-ignore
    const __VLS_18 = {}
        .IconSettings;
    ({}.IconSettings);
    __VLS_components.IconSettings;
    __VLS_components.iconSettings;
    // @ts-ignore
    [IconSettings,];
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ ...{ class: ("menuIcon") }, }));
    const __VLS_20 = __VLS_19({ ...{ class: ("menuIcon") }, }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    ({}({ ...{ class: ("menuIcon") }, }));
    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_17.slots).default;
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    // @ts-ignore
    const __VLS_24 = {}
        .RouterLink;
    ({}.RouterLink);
    ({}.RouterLink);
    __VLS_components.RouterLink;
    __VLS_components.RouterLink;
    // @ts-ignore
    [RouterLink, RouterLink,];
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ to: ("/log"), }));
    const __VLS_26 = __VLS_25({ to: ("/log"), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    ({}({ to: ("/log"), }));
    // @ts-ignore
    const __VLS_30 = {}
        .IconFile;
    ({}.IconFile);
    __VLS_components.IconFile;
    __VLS_components.iconFile;
    // @ts-ignore
    [IconFile,];
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{ class: ("menuIcon") }, }));
    const __VLS_32 = __VLS_31({ ...{ class: ("menuIcon") }, }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    ({}({ ...{ class: ("menuIcon") }, }));
    const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_29.slots).default;
    const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
    // @ts-ignore
    const __VLS_36 = {}
        .EmergencyStopButton;
    ({}.EmergencyStopButton);
    ({}.EmergencyStopButton);
    __VLS_components.EmergencyStopButton;
    __VLS_components.EmergencyStopButton;
    // @ts-ignore
    [EmergencyStopButton, EmergencyStopButton,];
    // @ts-ignore
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ isStop: ((__VLS_ctx.$props.isStop)), }));
    const __VLS_38 = __VLS_37({ isStop: ((__VLS_ctx.$props.isStop)), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
    ({}({ isStop: ((__VLS_ctx.$props.isStop)), }));
    // @ts-ignore
    [$props,];
    const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['sideBar'];
        __VLS_styleScopedClasses['sideBarNav'];
        __VLS_styleScopedClasses['sideBarNavList'];
        __VLS_styleScopedClasses['menuIcon'];
        __VLS_styleScopedClasses['menuIcon'];
        __VLS_styleScopedClasses['menuIcon'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {
        EmergencyStopButton
    };
    const __VLS_name = 'SideBar';
    let __VLS_internalComponent;
}
//# sourceMappingURL=SideBar.vue.js.map