<template>
  <div class="relative">
    <button
      @click="toggleIsOpen"
      type="button"
      class="block focus:outline-none"
      @focus="buttonHasFocus = true"
      @blur="buttonHasFocus = false"
    >
      <slot name="trigger" :hasFocus="buttonHasFocus" :isOpen="isOpen"></slot>
    </button>
    <div :class="[isOpen ? 'block' : 'hidden']">
      <button
        @click="isOpen = false"
        type="button"
        class="z-30 block fixed inset-0 w-full h-full cursor-default"
      ></button>
      <div class="absolute z-40 right-0">
        <slot name="dropdown"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

export default {
  setup() {
    const isOpen = ref(false);
    const buttonHasFocus = ref(false);

    const toggleIsOpen = () => {
      isOpen.value = !isOpen.value;
    };

    const onEscape = (e: KeyboardEvent): void => {
      if (!isOpen.value || e.key !== 'Escape') {
        return;
      }

      isOpen.value = false;
    };

    onMounted(() => {
      document.addEventListener('keydown', onEscape);
    });
    onUnmounted(() => {
      document.removeEventListener('keydown', onEscape);
    });

    return { isOpen, buttonHasFocus, toggleIsOpen };
  },
};
</script>

<style></style>