<template>
  <div class="modal-overlay" v-if="isVisible" @click.self="close">
    <div class="modal-content">
      <p>{{ modalMessage }}</p>
      <a-button class="modalConfirmButton" @click="close">확인</a-button>
    </div>
  </div>
</template>

<script lang="ts">
import './ModalComponent.scss';

export default {
  name: 'ModalComponent',
  props: {
    isVisible: {
      type: Boolean,
      required: true
    },
    modalMessage: {
      type: String,
      required: true
    }
  },
  watch: {
    isVisible(newVal) {
      if (newVal) {
        document.addEventListener('keydown', this.handleKeydown);
      } else {
        document.removeEventListener('keydown', this.handleKeydown);
      }
    },
  },
  methods: {
    close() {
      this.$emit('close');
    },
    handleKeydown(event : KeyboardEvent) {
      if (event.key === 'Enter') {
        this.close();
      }
    }
  },
  beforeUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
  }
};
</script>

<style scoped>

</style>
