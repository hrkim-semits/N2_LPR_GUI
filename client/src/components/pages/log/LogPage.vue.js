import { defineComponent, ref } from 'vue';
import './LogPage.scss';
import { IconDownload } from '@arco-design/web-vue/es/icon';
export default defineComponent({
    components: { IconDownload },
    props: {
        isStop: {
            type: Boolean,
            required: true
        }
    },
    setup() {
        const logBox = ref(null);
        const downloadLog = () => {
            if (logBox.value) {
                const text = logBox.value.innerText;
                const blob = new Blob([text], { type: 'text/plain' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'log.txt';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            }
        };
        return {
            logBox,
            downloadLog
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("logContents") }, ...{ class: (({ 'emergency': __VLS_ctx.isStop })) }, });
    __VLS_styleScopedClasses = ({ 'emergency': isStop });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("logBox") }, ref: ("logBox"), });
    // @ts-ignore
    (__VLS_ctx.logBox);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    // @ts-ignore
    [isStop, logBox,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("downloadLog") }, });
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
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClick': {} }, ...{ class: ("logDownloadButton") }, type: ("primary"), }));
    const __VLS_2 = __VLS_1({ ...{ 'onClick': {} }, ...{ class: ("logDownloadButton") }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ 'onClick': {} }, ...{ class: ("logDownloadButton") }, type: ("primary"), }));
    let __VLS_6;
    const __VLS_7 = {
        onClick: (__VLS_ctx.downloadLog)
    };
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        (__VLS_5.slots).icon;
        // @ts-ignore
        const __VLS_8 = {}
            .IconDownload;
        ({}.IconDownload);
        __VLS_components.IconDownload;
        __VLS_components.iconDownload;
        // @ts-ignore
        [IconDownload,];
        // @ts-ignore
        const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({}));
        const __VLS_10 = __VLS_9({}, ...__VLS_functionalComponentArgsRest(__VLS_9));
        ({}({}));
        // @ts-ignore
        [downloadLog,];
        const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        (__VLS_5.slots).default;
    }
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    let __VLS_3;
    let __VLS_4;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['logContents'];
        __VLS_styleScopedClasses['logBox'];
        __VLS_styleScopedClasses['downloadLog'];
        __VLS_styleScopedClasses['logDownloadButton'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = { IconDownload };
    const __VLS_name = undefined;
    let __VLS_internalComponent;
}
//# sourceMappingURL=LogPage.vue.js.map