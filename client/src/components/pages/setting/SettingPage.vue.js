import { defineComponent } from 'vue';
import { IconSelectAll } from '@arco-design/web-vue/es/icon';
import './SettingPage.scss';
import SetLPMRow from '@/components/SetLPMRow.vue';
import PostPurgeRow from '@/components/PostPurgeRow.vue';
import EMORow from '@/components/EMORow.vue';
import ModalComponent from '@/components/common/modalComponent/ModalComponent.vue';
export default defineComponent({
    name: 'SettingPage',
    components: {
        SetLPMRow,
        PostPurgeRow,
        EMORow,
        ModalComponent
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
        checkValue(event) {
            const input = event.target;
            let value = parseFloat(input.value);
            const regexp = /^\d*.?\d{0,1}$/; // 소수점 이하 한 자리까지 허용하는 정규표현식
            const deleteLast = () => {
                input.value = input.value.slice(0, -1);
                value = parseFloat(input.value);
            };
            if (value < this.LPMRange.min || value > this.LPMRange.max) {
                this.showModal(`${String(this.LPMRange.min)}~${String(this.LPMRange.max)}까지만 입력 가능합니다.`);
                if (value < this.LPMRange.min) {
                    input.value = String(this.LPMRange.min);
                }
                else {
                    input.value = String(this.LPMRange.max);
                }
            }
            if (!regexp.test(input.value)) {
                this.showModal('소수점 뒤 한 자리까지만 입력 가능합니다.');
                // 범위를 벗어날 경우 입력되지 않도록 함
                deleteLast();
            }
            input.value = input.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
        }
    },
    setup(props) {
        // const globalStore = useGlobalStore();
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
            // if (socket && socket.readyState === WebSocket.OPEN) {
            // globalStore.sendMessage(JSON.stringify(sendSettingMessage()));
            // } else {
            // console.error('WebSocket is not open.');
            // }
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
    // @ts-ignore
    const __VLS_0 = {}
        .ModalComponent;
    ({}.ModalComponent);
    ({}.ModalComponent);
    __VLS_components.ModalComponent;
    __VLS_components.ModalComponent;
    // @ts-ignore
    [ModalComponent, ModalComponent,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClose': {} }, modalMessage: ((__VLS_ctx.modalMessage)), isVisible: ((__VLS_ctx.isModalVisible)), }));
    const __VLS_2 = __VLS_1({ ...{ 'onClose': {} }, modalMessage: ((__VLS_ctx.modalMessage)), isVisible: ((__VLS_ctx.isModalVisible)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ 'onClose': {} }, modalMessage: ((__VLS_ctx.modalMessage)), isVisible: ((__VLS_ctx.isModalVisible)), }));
    let __VLS_6;
    const __VLS_7 = {
        onClose: (__VLS_ctx.closeModal)
    };
    // @ts-ignore
    [isStop, modalMessage, isModalVisible, closeModal,];
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    let __VLS_3;
    let __VLS_4;
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("settingWrapper") }, });
    for (const [msg, index] of __VLS_getVForSourceType((__VLS_ctx.messages))) {
        // @ts-ignore
        const __VLS_8 = {}
            .SetLPMRow;
        ({}.SetLPMRow);
        ({}.SetLPMRow);
        __VLS_components.SetLPMRow;
        __VLS_components.SetLPMRow;
        // @ts-ignore
        [SetLPMRow, SetLPMRow,];
        // @ts-ignore
        const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ key: ((index)), message: ((msg)), isStop: ((__VLS_ctx.isStop)), LPMRange: ((__VLS_ctx.LPMRange)), checkValue: ((__VLS_ctx.checkValue)), }));
        const __VLS_10 = __VLS_9({ key: ((index)), message: ((msg)), isStop: ((__VLS_ctx.isStop)), LPMRange: ((__VLS_ctx.LPMRange)), checkValue: ((__VLS_ctx.checkValue)), }, ...__VLS_functionalComponentArgsRest(__VLS_9));
        ({}({ key: ((index)), message: ((msg)), isStop: ((__VLS_ctx.isStop)), LPMRange: ((__VLS_ctx.LPMRange)), checkValue: ((__VLS_ctx.checkValue)), }));
        // @ts-ignore
        [isStop, messages, LPMRange, checkValue,];
        const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10);
    }
    // @ts-ignore
    const __VLS_14 = {}
        .PostPurgeRow;
    ({}.PostPurgeRow);
    __VLS_components.PostPurgeRow;
    // @ts-ignore
    [PostPurgeRow,];
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({ message: (('Post purge')), isStop: ((__VLS_ctx.isStop)), LPMRange: ((__VLS_ctx.LPMRange)), checkValue: ((__VLS_ctx.checkValue)), }));
    const __VLS_16 = __VLS_15({ message: (('Post purge')), isStop: ((__VLS_ctx.isStop)), LPMRange: ((__VLS_ctx.LPMRange)), checkValue: ((__VLS_ctx.checkValue)), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    ({}({ message: (('Post purge')), isStop: ((__VLS_ctx.isStop)), LPMRange: ((__VLS_ctx.LPMRange)), checkValue: ((__VLS_ctx.checkValue)), }));
    // @ts-ignore
    [isStop, LPMRange, checkValue,];
    const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_14, __VLS_16);
    // @ts-ignore
    const __VLS_20 = {}
        .EMORow;
    ({}.EMORow);
    __VLS_components.EMORow;
    // @ts-ignore
    [EMORow,];
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ message: (('EMO')), isStop: ((__VLS_ctx.isStop)), }));
    const __VLS_22 = __VLS_21({ message: (('EMO')), isStop: ((__VLS_ctx.isStop)), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    ({}({ message: (('EMO')), isStop: ((__VLS_ctx.isStop)), }));
    // @ts-ignore
    [isStop,];
    const __VLS_25 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
    // @ts-ignore
    const __VLS_26 = {}
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
    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ ...{ 'onClick': {} }, ...{ class: ("applyButton") }, type: ("primary"), disabled: ((__VLS_ctx.isStop)), }));
    const __VLS_28 = __VLS_27({ ...{ 'onClick': {} }, ...{ class: ("applyButton") }, type: ("primary"), disabled: ((__VLS_ctx.isStop)), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
    ({}({ ...{ 'onClick': {} }, ...{ class: ("applyButton") }, type: ("primary"), disabled: ((__VLS_ctx.isStop)), }));
    let __VLS_32;
    const __VLS_33 = {
        onClick: (__VLS_ctx.handleClick)
    };
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        (__VLS_31.slots).icon;
        // @ts-ignore
        const __VLS_34 = {}
            .IconSelectAll;
        ({}.IconSelectAll);
        __VLS_components.IconSelectAll;
        __VLS_components.iconSelectAll;
        // @ts-ignore
        [IconSelectAll,];
        // @ts-ignore
        const __VLS_35 = __VLS_asFunctionalComponent(__VLS_34, new __VLS_34({}));
        const __VLS_36 = __VLS_35({}, ...__VLS_functionalComponentArgsRest(__VLS_35));
        ({}({}));
        // @ts-ignore
        [isStop, handleClick,];
        const __VLS_39 = __VLS_pickFunctionalComponentCtx(__VLS_34, __VLS_36);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        (__VLS_31.slots).default;
    }
    const __VLS_31 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28);
    let __VLS_29;
    let __VLS_30;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['settingContents'];
        __VLS_styleScopedClasses['settingWrapper'];
        __VLS_styleScopedClasses['applyButton'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {
        SetLPMRow,
        PostPurgeRow,
        EMORow,
        ModalComponent
    };
    const __VLS_name = 'SettingPage';
    let __VLS_internalComponent;
}
//# sourceMappingURL=SettingPage.vue.js.map