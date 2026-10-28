export const isSyntaxCorrect = (formula: string) => {
  if (RegExp("[A-z][A-z]+").test(formula)) {
    console.error(
      "Duas variáveis em sequência não representam um fórmula bem formada.",
    );
    return false;
  }

  return true;
};
