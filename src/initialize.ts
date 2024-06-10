import { version } from '../package.json';

// This puts your card into the UI card picker dialog
/* eslint-disable @typescript-eslint/no-explicit-any */
(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'weather-card',
  name: 'Animated weather card',
  description: 'Lovelace animated weather card',
});

/* eslint no-console: 0 */
console.info(
  `%c  WEATHER-CARD  \n%c Version: ${version} `,
  'color: orange; font-weight: bold; background: black',
  'color: white; font-weight: bold; background: dimgray',
);
