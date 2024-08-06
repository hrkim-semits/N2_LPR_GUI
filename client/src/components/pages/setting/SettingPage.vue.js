import { defineComponent } from 'vue';
import { IconSelectAll } from '@arco-design/web-vue/es/icon';
import './SettingPage.scss';
import { useGlobalStore } from '@/stores/globalStore';
import returnWholeSettingInfos from './returnWholeSettingInfos';
import SetLPMRow from '@/components/SetLPMRow.vue';
import PostPurgeRow from '@/components/PostPurgeRow.vue';
import EMORow from '@/components/EMORow.vue';
export default defineComponent({
    name: 'SettingPage',
    components: {
        SetLPMRow,
        PostPurgeRow,
        EMORow,
    },
    data() {
        return {
            isModalVisible: false,
            modalMessage: ''
        };
    },
    props: {
        isStop: {
            type: Boolean,
            required: true
        },
    },
    methods: {
        showModal(message) {
            this.modalMessage = message;
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        },
    },
    setup(props) {
        const globalStore = useGlobalStore();
        const messages = [
            'INF:PODON;', 'ARS WARNING Vacuum is lost during motion', 'Msg 3', 'Msg 4', 'Msg 5', 'Msg 6', 'Msg 7', 'Msg 8', 'Msg 9', 'Msg 10'
        ];
        const LPMRange = {
            min: 0,
            max: 200,
            default: 100,
            markerStep: 20
        };
        const handleClick = () => {
            console.log('handleClick');
            console.log(returnWholeSettingInfos());
            globalStore.sendMessage(JSON.stringify(returnWholeSettingInfos()));
        };
        return {
            messages,
            handleClick,
            LPMRange
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("settingContents") }, ...{ class: (({ 'emergency': __VLS_ctx.isStop })) }, });
    __VLS_styleScopedClasses = ({ 'emergency': isStop });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("settingWrapper") }, });
    for (const [msg, index] of __VLS_getVForSourceType((__VLS_ctx.messages))) {
        // @ts-ignore
        const __VLS_0 = {}
            .SetLPMRow;
        ({}.SetLPMRow);
        ({}.SetLPMRow);
        __VLS_components.SetLPMRow;
        __VLS_components.SetLPMRow;
        // @ts-ignore
        [SetLPMRow, SetLPMRow,];
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ key: ((index)), message: ((msg)), isStop: ((__VLS_ctx.isStop)), LPMRange: ((__VLS_ctx.LPMRange)), showModal: ((__VLS_ctx.showModal)), }));
        const __VLS_2 = __VLS_1({ key: ((index)), message: ((msg)), isStop: ((__VLS_ctx.isStop)), LPMRange: ((__VLS_ctx.LPMRange)), showModal: ((__VLS_ctx.showModal)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ key: ((index)), message: ((msg)), isStop: ((__VLS_ctx.isStop)), LPMRange: ((__VLS_ctx.LPMRange)), showModal: ((__VLS_ctx.showModal)), }));
        // @ts-ignore
        [isStop, isStop, messages, LPMRange, showModal,];
        const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
    // @ts-ignore
    const __VLS_6 = {}
        .PostPurgeRow;
    ({}.PostPurgeRow);
    __VLS_components.PostPurgeRow;
    // @ts-ignore
    [PostPurgeRow,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ message: (('Post purge')), isStop: ((__VLS_ctx.isStop)), LPMRange: ((__VLS_ctx.LPMRange)), showModal: ((__VLS_ctx.showModal)), }));
    const __VLS_8 = __VLS_7({ message: (('Post purge')), isStop: ((__VLS_ctx.isStop)), LPMRange: ((__VLS_ctx.LPMRange)), showModal: ((__VLS_ctx.showModal)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ message: (('Post purge')), isStop: ((__VLS_ctx.isStop)), LPMRange: ((__VLS_ctx.LPMRange)), showModal: ((__VLS_ctx.showModal)), }));
    // @ts-ignore
    [isStop, LPMRange, showModal,];
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    // @ts-ignore
    const __VLS_12 = {}
        .EMORow;
    ({}.EMORow);
    __VLS_components.EMORow;
    // @ts-ignore
    [EMORow,];
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ message: (('EMO')), isStop: ((__VLS_ctx.isStop)), }));
    const __VLS_14 = __VLS_13({ message: (('EMO')), isStop: ((__VLS_ctx.isStop)), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({ message: (('EMO')), isStop: ((__VLS_ctx.isStop)), }));
    // @ts-ignore
    [isStop,];
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    // @ts-ignore
    const __VLS_18 = {}
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
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ ...{ 'onClick': {} }, ...{ class: ("applyAllButton") }, type: ("primary"), disabled: ((__VLS_ctx.isStop)), }));
    const __VLS_20 = __VLS_19({ ...{ 'onClick': {} }, ...{ class: ("applyAllButton") }, type: ("primary"), disabled: ((__VLS_ctx.isStop)), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    ({}({ ...{ 'onClick': {} }, ...{ class: ("applyAllButton") }, type: ("primary"), disabled: ((__VLS_ctx.isStop)), }));
    let __VLS_24;
    const __VLS_25 = {
        onClick: (__VLS_ctx.handleClick)
    };
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        (__VLS_23.slots).icon;
        // @ts-ignore
        const __VLS_26 = {}
            .IconSelectAll;
        ({}.IconSelectAll);
        __VLS_components.IconSelectAll;
        __VLS_components.iconSelectAll;
        // @ts-ignore
        [IconSelectAll,];
        // @ts-ignore
        const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({}));
        const __VLS_28 = __VLS_27({}, ...__VLS_functionalComponentArgsRest(__VLS_27));
        ({}({}));
        // @ts-ignore
        [isStop, handleClick,];
        const __VLS_31 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        (__VLS_23.slots).default;
    }
    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
    let __VLS_21;
    let __VLS_22;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['settingContents'];
        __VLS_styleScopedClasses['settingWrapper'];
        __VLS_styleScopedClasses['applyAllButton'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {
        SetLPMRow,
        PostPurgeRow,
        EMORow,
    };
    const __VLS_name = 'SettingPage';
    let __VLS_internalComponent;
}
//# sourceMappingURL=SettingPage.vue.js.map