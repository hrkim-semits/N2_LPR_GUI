<!-- 추후 logged in user 정보 스크립트 추가, copyright 추가 -->

<template>
  <footer class="footer">
    <!-- 수정 전 -->
    <!-- <span class="footerText">logged in user: MCSOperator</span> -->
    <!-- <span class="copyright footerText">copyright</span> -->
    <!-- <span class="footerText">version: 1.0.0</span> -->
  
    <!-- 수정 후 -->
    <!-- webSocket status -->
    <div class="footerLeft">
      <WebSocketStatus></WebSocketStatus>
    </div>
    <div class="footerCenter">
      <div class="copyright footerText">copyright</div>
    </div>
    <div class="footerRight">
      <div class="loggedInUser">
        <span>
          <IconUser class="footerIcon" />
        </span>
        <!-- user 정보 -->
        <span class="footerText">
          MCSOperator
        </span>
      </div>
      <div class="versionInfo">
        <span>
          <IconBranch class="footerIcon" />
        </span>
        <!-- globalStore에 버전 정보 추가 -->
        <span class="footerText">
          <!-- 1.0.0 -->
          {{ currentVersion }}
        </span>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { computed } from 'vue';
import './FooterComponent.scss';
import { useGlobalStore } from '@/stores/globalStore';
import WebSocketStatus from './webSocketStatus/WebSocketStatus.vue';

export default {
  name: 'FooterComponent',
  components: {
    WebSocketStatus
  },
  setup() {
    const currentVersion = '1.0.0';

    const globalStore = useGlobalStore();

    let isConnected = computed(() => globalStore.isConnected);

    console.log(isConnected);

    return {
      isConnected,
      currentVersion
    };
  }
};
</script>
