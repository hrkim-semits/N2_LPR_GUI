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
            markerStep: 50
        };
        const handleClick = () => {
            console.log('handleClick');
            console.log(returnWholeSettingInfos());
            globalStore.sendMessage(JSON.stringify(returnWholeSettingInfos()));
        };
        // input[type="text"]를 input[type="number"]처럼 위, 아래 방향키로 제어할 수 있도록 함
        document.addEventListener('DOMContentLoaded', () => {
            const textInputs = document.querySelectorAll('.TargetFlow');
            const postPurgeInput = document.querySelector('.PurgeDurationOfMillis');
            const handleArrowKeyInput = (event) => {
                const target = event.target;
                console.log(target.className);
                const currentValue = Number(target.value) || 0;
                const arrowUpEvent = (step) => {
                    target.value = (currentValue + step).toString();
                    event.preventDefault();
                };
                const arrowDownEvent = (step) => {
                    target.value = (currentValue - step).toString();
                    event.preventDefault();
                };
                if (target.className === 'TargetFlow' && event.key === 'ArrowUp' && currentValue >= LPMRange.min && currentValue < LPMRange.max) {
                    arrowUpEvent(1);
                }
                else if (target.className === 'TargetFlow' && event.key === 'ArrowDown' && currentValue > LPMRange.min && currentValue <= LPMRange.max) {
                    arrowDownEvent(1);
                }
                else if (target.className === 'PurgeDurationOfMillis' && event.key === 'ArrowUp') {
                    arrowUpEvent(1000);
                }
                else if (target.className === 'PurgeDurationOfMillis' && event.key === 'ArrowDown' && currentValue > 0) {
                    arrowDownEvent(1000);
                }
                ;
                const inputEvent = new Event('input', { bubbles: true });
                target.dispatchEvent(inputEvent);
            };
            textInputs.forEach(input => {
                input.addEventListener('keydown', handleArrowKeyInput);
            });
            postPurgeInput?.addEventListener('keydown', handleArrowKeyInput);
        });
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({ ...{ class: ("settingHeader") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("subTitle") }, });
    // @ts-ignore
    [isStop,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("subTitle") }, });
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
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClick': {} }, ...{ class: ("applyAllButton") }, type: ("primary"), disabled: ((__VLS_ctx.isStop)), }));
    const __VLS_2 = __VLS_1({ ...{ 'onClick': {} }, ...{ class: ("applyAllButton") }, type: ("primary"), disabled: ((__VLS_ctx.isStop)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ 'onClick': {} }, ...{ class: ("applyAllButton") }, type: ("primary"), disabled: ((__VLS_ctx.isStop)), }));
    let __VLS_6;
    const __VLS_7 = {
        onClick: (__VLS_ctx.handleClick)
    };
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        (__VLS_5.slots).icon;
        // @ts-ignore
        const __VLS_8 = {}
            .IconSelectAll;
        ({}.IconSelectAll);
        __VLS_components.IconSelectAll;
        __VLS_components.iconSelectAll;
        // @ts-ignore
        [IconSelectAll,];
        // @ts-ignore
        const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({}));
        const __VLS_10 = __VLS_9({}, ...__VLS_functionalComponentArgsRest(__VLS_9));
        ({}({}));
        // @ts-ignore
        [isStop, handleClick,];
        const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        (__VLS_5.slots).default;
    }
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    let __VLS_3;
    let __VLS_4;
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("settingWrapper") }, });
    for (const [msg, index] of __VLS_getVForSourceType((__VLS_ctx.messages))) {
        // @ts-ignore
        const __VLS_14 = {}
            .SetLPMRow;
        ({}.SetLPMRow);
        ({}.SetLPMRow);
        __VLS_components.SetLPMRow;
        __VLS_components.SetLPMRow;
        // @ts-ignore
        [SetLPMRow, SetLPMRow,];
        // @ts-ignore
        const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({ key: ((index)), message: ((msg)), isStop: ((__VLS_ctx.isStop)), LPMRange: ((__VLS_ctx.LPMRange)), showModal: ((__VLS_ctx.showModal)), }));
        const __VLS_16 = __VLS_15({ key: ((index)), message: ((msg)), isStop: ((__VLS_ctx.isStop)), LPMRange: ((__VLS_ctx.LPMRange)), showModal: ((__VLS_ctx.showModal)), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
        ({}({ key: ((index)), message: ((msg)), isStop: ((__VLS_ctx.isStop)), LPMRange: ((__VLS_ctx.LPMRange)), showModal: ((__VLS_ctx.showModal)), }));
        // @ts-ignore
        [isStop, messages, LPMRange, showModal,];
        const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_14, __VLS_16);
    }
    // @ts-ignore
    const __VLS_20 = {}
        .PostPurgeRow;
    ({}.PostPurgeRow);
    __VLS_components.PostPurgeRow;
    // @ts-ignore
    [PostPurgeRow,];
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ message: (('Post purge')), isStop: ((__VLS_ctx.isStop)), LPMRange: ((__VLS_ctx.LPMRange)), showModal: ((__VLS_ctx.showModal)), }));
    const __VLS_22 = __VLS_21({ message: (('Post purge')), isStop: ((__VLS_ctx.isStop)), LPMRange: ((__VLS_ctx.LPMRange)), showModal: ((__VLS_ctx.showModal)), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    ({}({ message: (('Post purge')), isStop: ((__VLS_ctx.isStop)), LPMRange: ((__VLS_ctx.LPMRange)), showModal: ((__VLS_ctx.showModal)), }));
    // @ts-ignore
    [isStop, LPMRange, showModal,];
    const __VLS_25 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
    // @ts-ignore
    const __VLS_26 = {}
        .EMORow;
    ({}.EMORow);
    __VLS_components.EMORow;
    // @ts-ignore
    [EMORow,];
    // @ts-ignore
    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ message: (('EMO')), isStop: ((__VLS_ctx.isStop)), }));
    const __VLS_28 = __VLS_27({ message: (('EMO')), isStop: ((__VLS_ctx.isStop)), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
    ({}({ message: (('EMO')), isStop: ((__VLS_ctx.isStop)), }));
    // @ts-ignore
    [isStop,];
    const __VLS_31 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['settingContents'];
        __VLS_styleScopedClasses['settingHeader'];
        __VLS_styleScopedClasses['subTitle'];
        __VLS_styleScopedClasses['subTitle'];
        __VLS_styleScopedClasses['applyAllButton'];
        __VLS_styleScopedClasses['settingWrapper'];
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