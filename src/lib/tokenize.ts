import type { Token } from "../types/token";

export const Tokenize = (formula: string) => {
  const treatedFormula: string = formula.replace(/\s/g, "");
  const tokens: Token[] = [];

  if (RegExp("[A-z][A-z]+").test(formula)) {
    console.error(
      "Duas variáveis em sequência não representam um fórmula bem formada.",
    );
    return;
  }

  for (let i = 0; i < treatedFormula.length; i++) {
    if (RegExp("[A-z]").test(treatedFormula[i])) {
      tokens.push({ type: "VAR", value: treatedFormula[i] });
    } else {
      console.error(
        "Um símbolo não identificado pela aplicação foi encontrado. Não será possível realizar qualquer operação.",
      );
      return;
    }
    console.log(tokens[i]);
  }
};
