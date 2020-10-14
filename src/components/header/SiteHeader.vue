<template>
  <header class="bg-gray-900 sm:flex sm:items-center sm:justify-between xl:bg-white">
    <div class="flex justify-between px-4 py-3 xl:w-72 xl:bg-gray-900 xl:justify-center xl:py-5">
      <logo />
      <hamburger :isOpen="isOpen" @toggle-is-open="toggleIsOpen" />
    </div>
    <navigation :isOpen="isOpen" @toggle-is-open="toggleIsOpen" />
  </header>
</template>

<script lang="ts">
import { ref } from 'vue';
import Logo from './Logo.vue';
import Hamburger from './Hamburger.vue';
import Navigation from './Navigation.vue';

export default {
  components: { Logo, Hamburger, Navigation },
  setup() {
    const isOpen = ref(false);
    const toggleIsOpen = () => {
      isOpen.value = !isOpen.value;
    };

    return { isOpen, toggleIsOpen };
  },
};
</script>