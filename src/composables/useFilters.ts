import { Ref } from 'vue';
import { PropertyLocation } from '../mocks/locations';

export interface SelectOption {
  value: number;
  label?: string;
}

const getOptions = (locations: PropertyLocation[], key: string): SelectOption[] => {
  return locations
    .flatMap((location) => {
      return location.properties.map((property) => {
        return property[key];
      });
    })
    .filter((amountOfBeds, index, self) => {
      return self.indexOf(amountOfBeds) === index;
    })
    .sort()
    .map((amountOfBeds) => {
      return { value: amountOfBeds };
    });
};

const roundPrice = (price: number, step: number) => {
  return Math.ceil(price / step) * step;
};

export const formatPrice = (price: number) => {
  const formatter = new Intl.NumberFormat('nl-BE', {
    style: 'currency',
    currency: 'EUR',
  });

  return formatter.format(price / 100);
};

const getPriceLabel = (price: number) => {
  return `Up to ${formatPrice(price)}/wk`;
};

const getPriceOptions = (locations: PropertyLocation[], key: string) => {
  const rawPrices = getOptions(locations, key) as SelectOption[];
  const STEP_VALUE = 25000;

  return rawPrices.map((rawPrice) => {
    const roundedPrice = roundPrice(rawPrice.value, STEP_VALUE);
    return { value: roundedPrice, label: getPriceLabel(roundedPrice) };
  });
};

const useFilters = (locations: Ref<PropertyLocation[]>) => {
  const bedOptions = getOptions(locations.value, 'beds');
  const bathOptions = getOptions(locations.value, 'baths');
  const priceOptions = getPriceOptions(locations.value, 'price');
  const amenityOptions = getOptions(locations.value, 'amenities')
    .flatMap((option) => {
      return option.value;
    })
    .filter((amenities, index, self) => {
      return self.indexOf(amenities) === index;
    });
  const propertyOptions = getOptions(locations.value, 'type');

  return { bedOptions, bathOptions, priceOptions, propertyOptions, amenityOptions };
};

export default useFilters;
