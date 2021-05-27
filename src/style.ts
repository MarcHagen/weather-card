import { css } from 'lit-element';

export const style = css`
  ha-card {
    cursor: pointer;
    margin: auto;
    padding: 1.3em 1em;
    position: relative;
  }

  .spacer {
    padding-top: 1em;
  }

  .clear {
    clear: both;
  }

  .title {
    position: absolute;
    left: 2.8em;
    top: 0.6em;
    font-weight: 300;
    font-size: 3em;
    color: var(--primary-text-color);
  }

  .temp {
    font-weight: 300;
    font-size: 4em;
    color: var(--primary-text-color);
    position: absolute;
    right: 1em;
    top: 0.6em;
  }

  .tempc {
    font-weight: 300;
    font-size: 1.5em;
    vertical-align: super;
    color: var(--primary-text-color);
    position: absolute;
    right: 1em;
    margin-top: -14px;
    margin-right: 7px;
  }

  .current {
    padding-top: 1.2em;
    /*margin-bottom: 3.5em;*/
    height: 5.5em;
  }

  .variations {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    font-weight: 300;
    color: var(--primary-text-color);
    list-style: none;
    padding: 0 1em;
    margin: 0;
  }

  .variations ha-icon {
    height: 22px;
    margin-right: 5px;
    color: var(--paper-item-icon-color);
  }

  .variations li {
    flex-basis: auto;
    width: 50%;
  }

  .variations li:nth-child(2n) {
    text-align: right;
  }

  .variations li:nth-child(2n) ha-icon {
    margin-right: 0;
    margin-left: 8px;
  }

  .unit {
    font-size: 0.8em;
  }

  .forecast {
    width: 100%;
    margin: 0 auto;
    display: flex;
  }

  .day {
    flex: 1;
    display: block;
    text-align: center;
    color: var(--primary-text-color);
    border-right: 0.1em solid #d9d9d9;
    line-height: 2;
    box-sizing: border-box;
  }

  .dayname {
    text-transform: uppercase;
  }

  .forecast .day:first-child {
    margin-left: 0;
  }

  .forecast .day:nth-last-child(1) {
    border-right: none;
    margin-right: 0;
  }

  .highTemp {
    font-weight: bold;
  }

  .lowTemp {
    color: var(--secondary-text-color);
  }

  .precipitation {
    color: var(--primary-text-color);
    font-weight: 300;
  }

  .icon.bigger {
    width: 10em;
    height: 10em;
    margin-top: -3.7em;
    margin-left: 0;
    position: absolute;
    left: 0;
  }

  .icon {
    width: 50px;
    height: 50px;
    margin-right: 0;
    margin-bottom: -12px;
    margin-top: -20px;
    display: inline-block;
    vertical-align: middle;
    background-size: contain;
    background-position: center center !important;
    background-repeat: no-repeat;
    text-indent: -9999px;
  }

  .weather {
    font-weight: 300;
    font-size: 1.5em;
    color: var(--primary-text-color);
    text-align: left;
    position: absolute;
    top: -0.5em;
    left: 6em;
    word-wrap: break-word;
    width: 30%;
  }

  .conditions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px -12px 0px 5px;
  }

  .conditions .icon {
    margin-top: -10px;
  }
`;
