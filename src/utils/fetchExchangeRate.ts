import { CurrencyCode } from "../main";

export async function fetchExchangeRate(
  currencyCode: CurrencyCode
): Promise<number> {
  const table = await fetch(
    `http://api.nbp.pl/api/exchangerates/rates/a/${currencyCode}/?format=json`
  )
    .then((result) => result.json())
    .catch(() => null);

  const exchangeRateSpan = document.getElementById("exchange-rate")!;

  if (!table) {
    exchangeRateSpan.textContent = `Could not load exchange rate.`;

    const foreignCurrencyInput: HTMLInputElement = document.getElementById(
      "foreignCurrencyInput"
    )! as HTMLInputElement;
    const plnInput: HTMLInputElement = document.getElementById(
      "plnInput"
    )! as HTMLInputElement;

    foreignCurrencyInput.disabled = plnInput.disabled = true;
    return 0;
  }

  const rate: number = table.rates[0].mid;
  exchangeRateSpan.textContent = `1 ${currencyCode.toUpperCase()} = ${rate} PLN`;

  return rate;
}
