<template>
  <label class="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
    <input class="form-checkbox bg-gray-900 focus:bg-gray-700" type="checkbox" :name="value" />
    <span class="ml-2 text-white">{{ value }}</span>
  </label>
</template>

<script lang="ts">
export default {
  props: {
    value: String,
  },
  setup(props) {},
};
</script>

<style></style>