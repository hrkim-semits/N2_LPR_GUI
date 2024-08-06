import { defineProps } from 'vue';
import './TheView.scss';
const { defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    isStop: {
        type: Boolean,
        required: true
    }
});
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        isStop: {
            type: Boolean,
            required: true
        }
    },
});
let __VLS_functionalComponentProps;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({ ...{ class: ("viewArea") }, });
    // @ts-ignore
    const __VLS_0 = {}
        .RouterView;
    ({}.RouterView);
    ({}.RouterView);
    __VLS_components.RouterView;
    __VLS_components.RouterView;
    // @ts-ignore
    [RouterView, RouterView,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ isStop: ((__VLS_ctx.isStop)), }));
    const __VLS_2 = __VLS_1({ isStop: ((__VLS_ctx.isStop)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ isStop: ((__VLS_ctx.isStop)), }));
    // @ts-ignore
    [isStop,];
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['viewArea'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {};
        },
        props: {
            isStop: {
                type: Boolean,
                required: true
            }
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        isStop: {
            type: Boolean,
            required: true
        }
    },
});
;
//# sourceMappingURL=TheView.vue.js.map