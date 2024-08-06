<template>
  <section class="logContents" :class="{'emergency': isStop}">
    <div class="logBox" ref="logBox">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim nibh, congue id pretium a, mattis id dolor. Integer a odio volutpat, molestie nisl sit amet, semper mi. Vivamus consequat urna ac justo porta, non auctor sem pretium. Cras vehicula, turpis vel blandit aliquam, urna sem luctus tortor, vitae egestas sapien elit nec urna. Vestibulum quis cursus augue, eget blandit diam. In tristique, nulla auctor vehicula ornare, nisi diam aliquam nibh, et eleifend turpis sapien sit amet nunc. Ut mollis mauris a tortor rutrum bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse at hendrerit ante, vel semper nulla. Nam vestibulum, justo sit amet molestie porta, odio ligula iaculis augue, at imperdiet purus risus a dolor. Phasellus viverra massa elementum velit porta interdum.
Integer arcu lectus, volutpat a consectetur eget, ultrices sed orci. Praesent id gravida odio, in accumsan metus. Fusce tempus lobortis vulputate. In ullamcorper ante lorem, sit amet dignissim lorem porttitor non. Aliquam fermentum, velit molestie euismod sollicitudin, felis ante tincidunt eros, vitae bibendum eros est sit amet turpis. Duis lacinia risus eu facilisis lacinia. Aenean in turpis sem. Phasellus convallis, est ut mattis gravida, diam urna dictum purus, et euismod lacus mi sed dui. Praesent mattis arcu ut ante eleifend fringilla.
Sed pellentesque ante non bibendum ullamcorper. Curabitur vehicula ante maximus, porttitor lacus sed, sollicitudin ex. Nullam cursus tellus quam, in interdum tortor iaculis non. Fusce eu tincidunt tortor. Nullam quis elementum turpis. Sed aliquam, tellus vel elementum faucibus, ante neque pulvinar nulla, at efficitur dolor lectus et enim. Morbi a neque et erat eleifend eleifend at fermentum eros.
Nulla facilisi. Nullam lacus augue, malesuada nec gravida laoreet, placerat eget nunc. Vestibulum sollicitudin, risus a tempor laoreet, risus risus mollis libero, ut laoreet sapien elit tempus tellus. Nullam elementum in lectus eu mollis. Sed laoreet nunc ipsum, non convallis mauris lobortis nec. Etiam consectetur mauris ut cursus ultrices. Nulla ut pharetra urna, et ultricies eros. Proin mollis tincidunt nisi, eu pulvinar eros rhoncus at. Morbi pellentesque eu odio ut dictum. Etiam lobortis tellus tortor, nec accumsan libero dictum nec. Integer dictum ipsum et lorem condimentum facilisis. Curabitur condimentum bibendum fermentum. Curabitur sed aliquam velit, non consectetur eros. Morbi elementum et justo ut vulputate. Aliquam dapibus est dui, eu auctor magna commodo eget. Ut nisi diam, fermentum sit amet eros eu, hendrerit viverra eros.
Nulla eget felis fermentum, congue ipsum eget, laoreet velit. Nam pharetra justo ac justo efficitur ultrices. Sed non sem sit amet augue condimentum lacinia a ac ipsum. Vivamus pretium et lorem at fringilla. Praesent ornare justo urna, ut blandit arcu ullamcorper eget. Vestibulum sit amet ex aliquet, elementum orci sit amet, pretium diam. Sed vestibulum nunc vel libero sagittis suscipit. Praesent pharetra, purus ac accumsan auctor, orci erat aliquet elit, nec lobortis diam augue id turpis. Morbi condimentum euismod tortor, ut auctor urna tincidunt at. Quisque sodales facilisis tortor, id pharetra turpis condimentum eget. Donec tincidunt ligula ac ligula elementum, eget faucibus risus varius. Nullam non mauris condimentum, pulvinar neque a, condimentum ex. Proin hendrerit posuere felis ut viverra. Suspendisse vel volutpat erat.
    </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim nibh, congue id pretium a, mattis id dolor. Integer a odio volutpat, molestie nisl sit amet, semper mi. Vivamus consequat urna ac justo porta, non auctor sem pretium. Cras vehicula, turpis vel blandit aliquam, urna sem luctus tortor, vitae egestas sapien elit nec urna. Vestibulum quis cursus augue, eget blandit diam. In tristique, nulla auctor vehicula ornare, nisi diam aliquam nibh, et eleifend turpis sapien sit amet nunc. Ut mollis mauris a tortor rutrum bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse at hendrerit ante, vel semper nulla. Nam vestibulum, justo sit amet molestie porta, odio ligula iaculis augue, at imperdiet purus risus a dolor. Phasellus viverra massa elementum velit porta interdum.
Integer arcu lectus, volutpat a consectetur eget, ultrices sed orci. Praesent id gravida odio, in accumsan metus. Fusce tempus lobortis vulputate. In ullamcorper ante lorem, sit amet dignissim lorem porttitor non. Aliquam fermentum, velit molestie euismod sollicitudin, felis ante tincidunt eros, vitae bibendum eros est sit amet turpis. Duis lacinia risus eu facilisis lacinia. Aenean in turpis sem. Phasellus convallis, est ut mattis gravida, diam urna dictum purus, et euismod lacus mi sed dui. Praesent mattis arcu ut ante eleifend fringilla.
Sed pellentesque ante non bibendum ullamcorper. Curabitur vehicula ante maximus, porttitor lacus sed, sollicitudin ex. Nullam cursus tellus quam, in interdum tortor iaculis non. Fusce eu tincidunt tortor. Nullam quis elementum turpis. Sed aliquam, tellus vel elementum faucibus, ante neque pulvinar nulla, at efficitur dolor lectus et enim. Morbi a neque et erat eleifend eleifend at fermentum eros.
Nulla facilisi. Nullam lacus augue, malesuada nec gravida laoreet, placerat eget nunc. Vestibulum sollicitudin, risus a tempor laoreet, risus risus mollis libero, ut laoreet sapien elit tempus tellus. Nullam elementum in lectus eu mollis. Sed laoreet nunc ipsum, non convallis mauris lobortis nec. Etiam consectetur mauris ut cursus ultrices. Nulla ut pharetra urna, et ultricies eros. Proin mollis tincidunt nisi, eu pulvinar eros rhoncus at. Morbi pellentesque eu odio ut dictum. Etiam lobortis tellus tortor, nec accumsan libero dictum nec. Integer dictum ipsum et lorem condimentum facilisis. Curabitur condimentum bibendum fermentum. Curabitur sed aliquam velit, non consectetur eros. Morbi elementum et justo ut vulputate. Aliquam dapibus est dui, eu auctor magna commodo eget. Ut nisi diam, fermentum sit amet eros eu, hendrerit viverra eros.
Nulla eget felis fermentum, congue ipsum eget, laoreet velit. Nam pharetra justo ac justo efficitur ultrices. Sed non sem sit amet augue condimentum lacinia a ac ipsum. Vivamus pretium et lorem at fringilla. Praesent ornare justo urna, ut blandit arcu ullamcorper eget. Vestibulum sit amet ex aliquet, elementum orci sit amet, pretium diam. Sed vestibulum nunc vel libero sagittis suscipit. Praesent pharetra, purus ac accumsan auctor, orci erat aliquet elit, nec lobortis diam augue id turpis. Morbi condimentum euismod tortor, ut auctor urna tincidunt at. Quisque sodales facilisis tortor, id pharetra turpis condimentum eget. Donec tincidunt ligula ac ligula elementum, eget faucibus risus varius. Nullam non mauris condimentum, pulvinar neque a, condimentum ex. Proin hendrerit posuere felis ut viverra. Suspendisse vel volutpat erat.
    </p>
    </div>
    <div class="downloadLog">
      <a-button class="logDownloadButton" type="primary" @click="downloadLog">
      <template #icon>
        <icon-download />
      </template>
      <template #default>Download</template>
    </a-button>
    </div>
  </section>
</template>
  
<script lang='ts'>
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
    const logBox = ref<HTMLElement | null>(null);

    const downloadLog = () => {
      if ( logBox.value ) {
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
</script>