import { computed, onMounted, watch, onUnmounted } from 'vue';
import { useGlobalStore } from '@/stores/globalStore';
import TheHeader from '@/layouts/TheHeader.vue';
import TheSideBar from '@/layouts/TheSideBar.vue';
import TheView from '@/layouts/TheView.vue';
import TheFooter from '@/layouts/TheFooter.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const globalStore = useGlobalStore();
const isStop = computed(() => globalStore.isStop);
const isConnected = computed(() => globalStore.isConnected);
const updateEmergencyUI = () => {
    if (isStop.value) {
        document.body.classList.add('emergency');
    }
    else {
        document.body.classList.remove('emergency');
    }
};
onMounted(() => {
    // 마운트 됐을 시점에 stop일 수도...? -> 웹 소켓으로 초기 상태값 받아오기?
    // 웹 소켓으로 초기(기존) 상태값 받아서 출력 (monitor, setting, log, stop)?
    // footer update
    globalStore.createWebSocket(globalStore.webSocketTestUrl);
    // globalStore.createWebSocket(globalStore.webSocketTestUrl2);
    updateEmergencyUI();
});
watch(() => isStop.value, () => {
    updateEmergencyUI();
});
onUnmounted(() => {
    // 스토어 초기화
    // globalStore.responses = [];
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
    // @ts-ignore
    [TheHeader, TheHeader,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(TheHeader, new TheHeader({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    ({}({}));
    const __VLS_4 = __VLS_pickFunctionalComponentCtx(TheHeader, __VLS_1);
    // @ts-ignore
    [TheSideBar, TheSideBar,];
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(TheSideBar, new TheSideBar({ isStop: ((__VLS_ctx.isStop)), }));
    const __VLS_6 = __VLS_5({ isStop: ((__VLS_ctx.isStop)), }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    ({}({ isStop: ((__VLS_ctx.isStop)), }));
    // @ts-ignore
    [isStop,];
    const __VLS_9 = __VLS_pickFunctionalComponentCtx(TheSideBar, __VLS_6);
    // @ts-ignore
    [TheView, TheView,];
    // @ts-ignore
    const __VLS_10 = __VLS_asFunctionalComponent(TheView, new TheView({ isStop: ((__VLS_ctx.isStop)), }));
    const __VLS_11 = __VLS_10({ isStop: ((__VLS_ctx.isStop)), }, ...__VLS_functionalComponentArgsRest(__VLS_10));
    ({}({ isStop: ((__VLS_ctx.isStop)), }));
    // @ts-ignore
    [isStop,];
    const __VLS_14 = __VLS_pickFunctionalComponentCtx(TheView, __VLS_11);
    // @ts-ignore
    [TheFooter, TheFooter,];
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(TheFooter, new TheFooter({}));
    const __VLS_16 = __VLS_15({}, ...__VLS_functionalComponentArgsRest(__VLS_15));
    ({}({}));
    const __VLS_19 = __VLS_pickFunctionalComponentCtx(TheFooter, __VLS_16);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                TheHeader: TheHeader,
                TheSideBar: TheSideBar,
                TheView: TheView,
                TheFooter: TheFooter,
                isStop: isStop,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;

//# sourceMappingURL=App.vue.js.map