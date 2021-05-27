{%- if version_installed == "master" %}
## You are running master!

This is **only** intended for development!

{% endif %}

Originally created for the [old UI](https://community.home-assistant.io/t/custom-ui-weather-state-card-with-a-question/23008) converted by @arsaboo and @ciotlosm to [Lovelace](https://community.home-assistant.io/t/custom-ui-weather-state-card-with-a-question/23008/291) and now converted to Lit to make it even better.
Was merge with [lovelace weather card chart](https://github.com/sgttrs/lovelace-weather-card-chart) to get graph and translation
This version is based on multiple repo's: 
- [bobzer/weather-card](https://github.com/bobzer/weather-card)
- [bramkragten/weather-card](https://github.com/bramkragten/weather-card)

## Configuration:

And add a card with type `custom:weather-card`:

```yaml
type: custom:weather-card
entity: weather.yourweatherentity
name: Optional name
```

If you want to use your local icons add the location to the icons:

```yaml
type: custom:weather-card
entity: weather.yourweatherentity
icons: "/community_plugin/weather-card/icons/animated/"
```

You can choose wich elements of the weather card you want to show:

The 3 different rows, being:

- The current weather icon, the current temperature and title
- The details about the current weather
- The 5 day forecast

```yaml
type: custom:weather-card
entity: weather.yourweatherentity
icons: /community_plugin/weather-card/icons/animated/
current: true
details: false
forecast: true
graph: true
```

If you want to show the sunrise and sunset times, make sure the `sun` component is enabled:

```yaml
# Example configuration.yaml entry
sun:
```

### Dark Sky:

When using Dark Sky you should put the mode to `daily` if you want a daily forecast with highs and lows.

```yaml
# Example configuration.yaml entry
weather:
  - platform: darksky
    api_key: YOUR_API_KEY
    mode: daily
```
