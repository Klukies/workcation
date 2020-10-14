<template>
  <site-header />
  <div class="xl:flex xl:flex-1 xl:overflow-y-hidden">
    <search-filters
      :bed-options="bedOptions"
      :bath-options="bathOptions"
      :price-options="priceOptions"
      :property-options="propertyOptions"
      :amenity-options="amenityOptions"
    />
    <location-sections :locations="locations" />
  </div>
</template>

<script lang="ts">
import { computed, ref } from 'vue';
import { PropertyLocation, propertyLocations } from './mocks/locations';
import SiteHeader from './components/header/SiteHeader.vue';
import SearchFilters from './components/SearchFilters.vue';
import LocationSections from './components/locations/LocationSections.vue';
import useFilters from './composables/useFilters';

export default {
  components: { SiteHeader, SearchFilters, LocationSections },
  name: 'App',
  setup() {
    const locations = ref(propertyLocations);

    const { bedOptions, bathOptions, priceOptions, propertyOptions, amenityOptions } = useFilters(
      locations,
    );

    return { locations, bedOptions, bathOptions, priceOptions, propertyOptions, amenityOptions };
  },
};
</script>
