export const cardinalDirectionsIcon = [
  'mdi:arrow-down',
  'mdi:arrow-bottom-left',
  'mdi:arrow-left',
  'mdi:arrow-top-left',
  'mdi:arrow-up',
  'mdi:arrow-top-right',
  'mdi:arrow-right',
  'mdi:arrow-bottom-right',
  'mdi:arrow-down',
];

export const weatherIconsDay = {
  clear: 'day',
  'clear-night': 'night',
  cloudy: 'cloudy',
  fog: 'cloudy',
  hail: 'rainy-7',
  lightning: 'thunder',
  'lightning-rainy': 'thunder',
  partlycloudy: 'cloudy-day-3',
  pouring: 'rainy-6',
  rainy: 'rainy-5',
  snowy: 'snowy-6',
  'snowy-rainy': 'rainy-7',
  sunny: 'day',
  windy: 'cloudy',
  'windy-variant': 'cloudy-day-3',
  exceptional: '!!',
};

export const weatherIconsNight = {
  ...weatherIconsDay,
  clear: 'night',
  sunny: 'night',
  partlycloudy: 'cloudy-night-3',
  'windy-variant': 'cloudy-night-3',
};

export const stopPropagation = (ev: { stopPropagation: () => unknown }) => ev.stopPropagation();
