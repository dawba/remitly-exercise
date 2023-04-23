export function setInputEventListeners(rate: number) {
  if (!rate) {
    return;
  }

  const foreignCurrencyInput: HTMLInputElement = document.getElementById(
    "foreignCurrencyInput"
  )! as HTMLInputElement;
  const plnInput: HTMLInputElement = document.getElementById(
    "plnInput"
  )! as HTMLInputElement;

  foreignCurrencyInput.addEventListener("change", () =>
    calculateCorrespondingInputValue("foreign")
  );
  plnInput.addEventListener("change", () =>
    calculateCorrespondingInputValue("pln")
  );

  const calculateCorrespondingInputValue = (type: "pln" | "foreign") => {
    if (type === "pln") {
      const value = parseFloat(plnInput.value ?? 0).toFixed(2);

      foreignCurrencyInput.value = (
        parseFloat(plnInput.value ?? 0) / rate
      ).toFixed(2);
      plnInput.value = value;
    } else {
      const value = parseFloat(foreignCurrencyInput.value ?? 0).toFixed(2);

      plnInput.value = (
        parseFloat(foreignCurrencyInput.value ?? 0) * rate
      ).toFixed(2);
      foreignCurrencyInput.value = value;
    }
  };
}
