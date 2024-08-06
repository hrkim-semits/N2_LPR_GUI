import { ref, onMounted, watchEffect } from 'vue';
import './ModeToggle.scss';
export default await (async () => {
    const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
    const theme = ref('light');
    const toggleTheme = () => {
        theme.value = theme.value === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', theme.value);
    };
    onMounted(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            theme.value = savedTheme;
        }
    });
    watchEffect(() => {
        document.documentElement.setAttribute('data-theme', theme.value);
    });
    const __VLS_fnComponent = (await import('vue')).defineComponent({});
    let __VLS_functionalComponentProps;
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
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("modeToggleWrapper") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.input, __VLS_intrinsicElements.input)({ ...{ onClick: (__VLS_ctx.toggleTheme) }, id: ("modeToggleInput"), ...{ class: ("modeToggleInput") }, type: ("checkbox"), });
        // @ts-ignore
        [toggleTheme,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ ...{ class: ("modeToggleButton") }, for: ("modeToggleInput"), });
        if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
            __VLS_styleScopedClasses['modeToggleWrapper'];
            __VLS_styleScopedClasses['modeToggleInput'];
            __VLS_styleScopedClasses['modeToggleButton'];
        }
        var __VLS_slots;
        return __VLS_slots;
        const __VLS_componentsOption = {};
        const __VLS_name = 'ModeToggle';
        let __VLS_defineComponent;
        const __VLS_internalComponent = __VLS_defineComponent({
            setup() {
                return {
                    toggleTheme: toggleTheme,
                };
            },
            name: 'ModeToggle',
        });
    }
    return (await import('vue')).defineComponent({
        setup() {
            return {};
        },
        name: 'ModeToggle',
    });
})();
;
//# sourceMappingURL=ModeToggle.vue.js.map