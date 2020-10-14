<template>
  <label class="block px-2">
    <span class="form-group-title">{{ label }}</span>
    <select class="mt-1 form-select block w-full text-white shadow focus:bg-gray-600">
      <option v-for="(option, i) in options" :key="i" :value="option.value">
        {{ option.label ?? option.value }}
      </option>
    </select>
  </label>
</template>

<script lang="ts">
import { SelectOption } from '../../../composables/useFilters';

export default {
  props: {
    label: String,
    options: Array as () => SelectOption[],
  },
  setup(props) {},
};
</script>

<style></style>