import { defineComponent } from 'vue';
import { useGlobalStore } from '@/stores/globalStore';
export default defineComponent({
    name: 'EMORow',
    props: {
        message: {
            type: String,
            required: true
        },
        isStop: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        sendEMOSettingMessage() {
            // console.log( document.getElementsByTagName('select') );
            // console.log( document.getElementsByTagName('select')[1].value );
            const singalGUIMsgPurgeReq = {
                MessageID: 'SingalGUIMsgPurgeReq',
                MessageData: {
                    TargetCommand: 'EMO',
                    TargetStatus: [],
                    BaseTime: ''
                }
            };
            const globalStore = useGlobalStore();
            singalGUIMsgPurgeReq.MessageData.BaseTime = globalStore.getDateTime();
            document.querySelectorAll('select').forEach((select) => {
                singalGUIMsgPurgeReq.MessageData.TargetStatus.push(select.value);
            });
            console.log(singalGUIMsgPurgeReq);
            // globalStore.sendMessage(JSON.stringify(singalGUIMsgPurgeReq));
        }
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("settingRow") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("msgArea") }, });
    (__VLS_ctx.message);
    // @ts-ignore
    [message,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("setArea") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("setStatus") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ ...{ class: ("TargetStatus") }, disabled: ((__VLS_ctx.isStop)), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({});
    // @ts-ignore
    [isStop,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("setStatus") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ ...{ class: ("TargetStatus") }, disabled: ((__VLS_ctx.isStop)), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({});
    // @ts-ignore
    [isStop,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({});
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
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClick': {} }, ...{ class: ("eachApplyButton") }, disabled: ((__VLS_ctx.isStop)), }));
    const __VLS_2 = __VLS_1({ ...{ 'onClick': {} }, ...{ class: ("eachApplyButton") }, disabled: ((__VLS_ctx.isStop)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ 'onClick': {} }, ...{ class: ("eachApplyButton") }, disabled: ((__VLS_ctx.isStop)), }));
    let __VLS_6;
    const __VLS_7 = {
        onClick: (__VLS_ctx.sendEMOSettingMessage)
    };
    // @ts-ignore
    [isStop, sendEMOSettingMessage,];
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    let __VLS_3;
    let __VLS_4;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['settingRow'];
        __VLS_styleScopedClasses['msgArea'];
        __VLS_styleScopedClasses['setArea'];
        __VLS_styleScopedClasses['setStatus'];
        __VLS_styleScopedClasses['TargetStatus'];
        __VLS_styleScopedClasses['setStatus'];
        __VLS_styleScopedClasses['TargetStatus'];
        __VLS_styleScopedClasses['eachApplyButton'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = 'EMORow';
    let __VLS_internalComponent;
}
//# sourceMappingURL=EMORow.vue.js.map