<template>
  <label class="mt-3 sm:w-1/4 sm:px-2 flex items-center lg:w-full lg:px-0">
    <input
      class="form-radio bg-gray-900 focus:bg-gray-700"
      type="radio"
      name="propertyType"
      :value="value"
    />
    <span class="ml-2 text-white">{{ label ?? value }}</span>
  </label>
</template>

<script lang="ts">
export default {
  props: {
    value: String,
    label: String,
  },
  setup(props) {},
};
</script>

<style></style>