 # Lovelace animated weather card

Originally created for the [old UI](https://community.home-assistant.io/t/custom-ui-weather-state-card-with-a-question/23008) converted by @arsaboo and @ciotlosm to [Lovelace](https://community.home-assistant.io/t/custom-ui-weather-state-card-with-a-question/23008/291) and now converted to Lit to make it even better.
Was merge with [lovelace weather card chart](https://github.com/sgttrs/lovelace-weather-card-chart) to get graph and translation
This version is based on multiple repo's: 
- [bobzer/weather-card](https://github.com/bobzer/weather-card)
- [bramkragten/weather-card](https://github.com/bramkragten/weather-card)

This card uses the awesome [animated SVG weather icons by amCharts](https://www.amcharts.com/free-animated-svg-weather-icons/).  

But there is a newer version of the icons. These cannot be downloaded from but site, but from here: [amcharts/weather](https://github.com/amcharts/weather/tree/master/assets/img)  
Download the weather and weather-animated. These versions are included in this package.

<p align="center" style="vertical-align: top">
    <img src="https://github.com/marchagen/weather-card/raw/master/assets/table.gif" alt="card with table layout gif" width="400"/>
    <img src="https://github.com/marchagen/weather-card/raw/master/assets/chart.gif" alt="card with chart layout gif" width="400"/>
</p>

Thanks for all picking this card up.

# Installation:

You have three options, HACS hosted or self-hosted (manual). The first option needs the internet and will update itself.

## HACS

The easiest way it's to [HACS](https://hacs.xyz/)
Add the repo address in settings:
https://github.com/MarcHagen/weather-card

## Hosted:

Add the following to resources in your lovelace config:

```yaml
- url: https://cdn.jsdelivr.net/gh/MarcHagen/weather-card/dist/weather-card.min.js
  type: module
```

## Manual:

1. Download the [weather-card.js](https://raw.githubusercontent.com/MarcHagen/weather-card/master/dist/weather-card.js) to `/config/www/weather-card/`. (or another folder in `/config/www/`)
2. Save the [amCharts icons](https://www.amcharts.com/free-animated-svg-weather-icons/) (The contents of the folder "animated") under `/config/www/weather-card/icons/` (or another folder in `/config/www/`)

Add the following to resources in your lovelace config:

```yaml
resources:
  - url: /local/weather-card/weather-card.js
    type: module
```

# Configuration:

And add a card with type `custom:weather-card`:

```yaml
type: custom:weather-card
entity_weather: weather.yourweatherentity
entity_sun: sun.sun
name: Optional name
```

If you want to use your local icons, add the location to the icons:

```yaml
type: custom:weather-card
entity_weather: weather.yourweatherentity
entity_sun: sun.sun
icons: /local/weather-card/icons/animated/
```

You can choose which elements of the weather card you want to show:

The three different rows are:

- The current weather icon, the current temperature and title
- The details about the current weather
- The 5-day forecast

```yaml
type: custom:weather-card
entity_weather: weather.yourweatherentity
entity_sun: sun.sun
current: true
details: false
forecast: true
forecastMaxColumn: 5
```

### Full config

```yaml
type: custom:weather-card
entity_weather: weather.yourweatherentity
entity_sun: sun.sun
current: true
details: false
forecast: true
forecastMaxColumn: 5
graph: false
hidePrecipitation: false
icons: /hacsfiles/weather-card/icons/animated/
card_config_version: 2
```

### Editor
For convenience’s sake, there is an editor, so you can visualy click.

<img src="https://github.com/marchagen/weather-card/raw/master/assets/editor.png" alt="Weather card visual editor" width="700" />

If you want to show the sunrise and sunset times, make sure the `sun` component is enabled:

```yaml
# Example configuration.yaml entry
sun:
```

## Dark Sky:

When using Dark Sky, you should put the mode to `daily` if you want a daily forecast with highs and lows.

```yaml
# Example configuration.yaml entry
weather:
  - platform: darksky
    api_key: YOUR_API_KEY
    mode: daily
```
