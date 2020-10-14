<template>
  <section class="bg-gray-800 xl:w-72">
    <div class="flex justify-between px-4 py-3 xl:hidden">
      <div class="relative max-w-xs w-full">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            class="h-6 w-6 fill-current text-gray-600"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41l.01-.01zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
            />
          </svg>
        </div>
        <input
          class="block w-full bg-gray-900 focus:outline-none focus:bg-white focus:text-gray-900 text-white rounded-lg pl-10 pr-4 py-2"
          placeholder="Search by keywords"
        />
      </div>
      <button
        type="button"
        class="ml-4 inline-flex items-center hover:bg-gray-600 focus:outline-none focus:shadow-outline rounded-lg shadow pl-3 pr-4"
        @click="toggleIsOpen"
        :class="{ 'bg-gray-600': isOpen, 'bg-gray-700': !isOpen }"
      >
        <svg
          class="h-6 w-6 fill-current text-gray-500"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm3 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1zm4 5a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4z"
          />
        </svg>
        <span class="ml-1 text-white font-medium">Filters</span>
      </button>
    </div>
    <form
      :class="{ hidden: !isOpen, block: isOpen }"
      class="xl:h-full xl:flex xl:flex-col xl:justify-between"
    >
      <div class="lg:flex xl:block xl:overflow-y-auto">
        <div class="search-filter-block">
          <div class="flex flex-wrap -mx-2">
            <select-component
              label="Bedrooms"
              :options="bedOptions"
              :class="'w-1/2 sm:w-1/4 lg:w-1/2'"
            />
            <select-component
              label="Bathrooms"
              :options="bathOptions"
              :class="'w-1/2 sm:w-1/4 lg:w-1/2'"
            />
            <select-component
              label="Price Range"
              :options="priceOptions"
              :class="'mt-4 w-full sm:mt-0 sm:w-1/2 lg:w-full lg:mt-4'"
            />
          </div>
        </div>
        <div class="search-filter-block">
          <span class="block form-group-title">Property Type</span>
          <div class="sm:flex sm:-mx-2 lg:block lg:mx-0">
            <radio-component
              v-for="propertyOption in propertyOptions"
              :key="propertyOption"
              :label="propertyOption.label"
              :value="propertyOption.value"
            />
          </div>
        </div>
        <div class="search-filter-block">
          <span class="block form-group-title">Amenities</span>
          <div class="sm:flex sm:-mx-2 sm:flex-wrap">
            <checkbox-component
              v-for="amenityOption in amenityOptions"
              :key="amenityOption"
              :value="amenityOption"
            />
          </div>
        </div>
      </div>
      <div class="bg-gray-900 px-4 py-4 sm:text-right">
        <button
          class="block w-full sm:w-auto sm:inline-block bg-indigo-500 hover:bg-indigo-400 font-semibold text-white px-4 py-2 rounded-lg xl:block xl:w-full"
        >
          Update results
        </button>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import { ref } from 'vue';
import SelectComponent from './shared/form/SelectComponent.vue';
import RadioComponent from './shared/form/RadioComponent.vue';
import CheckboxComponent from './shared/form/CheckboxComponent.vue';
import { SelectOption } from '../composables/useFilters';

export default {
  props: {
    bedOptions: Array as () => SelectOption[],
    bathOptions: Array as () => SelectOption[],
    priceOptions: Array as () => SelectOption[],
    propertyOptions: Array as () => SelectOption[],
    amenityOptions: Array as () => string[],
  },
  components: { SelectComponent, RadioComponent, CheckboxComponent },
  setup(props) {
    const isOpen = ref(false);
    const toggleIsOpen = () => {
      isOpen.value = !isOpen.value;
    };

    return { isOpen, toggleIsOpen };
  },
};
</script>

<style scoped>
.search-filter-block {
  @apply px-4 py-4 border-t border-gray-900 lg:w-1/3 lg:border-l xl:w-full;
}
</style>