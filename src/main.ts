import "./style.css";
import { fetchExchangeRate } from "./utils/fetchExchangeRate";
import { setInputEventListeners } from "./utils/setInputEventListeners";
export type CurrencyCode = "gbp";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
    <div class="input-wrapper">
        <label for="foreignCurrencyInput">You send</label>
        <input id="foreignCurrencyInput" type="number" />
        <span class="fi fi-gb" id="foreign"></span>
        <span class="code">GBP</span>
      </div>
      <div class="input-wrapper">
        <label for="plnInput">They receive</label>
        <input id="plnInput" type="number" />
        <span class="fi fi-pl"></span>
        <span class="code">PLN</span>
      </div>
      <span id="exchange-rate">Loading exchange rate...</span>
      <span>No transfer fees</span>
`;

const selectedCurrency: CurrencyCode = "gbp";
const rate = await fetchExchangeRate(selectedCurrency);

setInputEventListeners(rate);
