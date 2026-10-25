import { useState } from "react";
import { InputGroup, InputGroupInput } from "./components/ui/input-group";
import { ButtonGroup } from "./components/ui/button-group";
import { Button } from "./components/ui/button";
import { Label } from "./components/ui/label";
import { Forward } from "lucide-react";
import type { Token } from "./types/token";

function App() {
  const [formula, setFormula] = useState("");

  const tokenize = (formula: string) => {
    const treatedFormula: string = formula.replace(/\s/g, "");
    const tokens: Token[] = [];

    if (RegExp("[A-z][A-z]+").test(formula)) {
      console.error(
        "Duas variáveis em sequência não representam um fórmula bem formada.",
      );
      return;
    }

    for (let i = 0; i < treatedFormula.length; i++) {
      if (RegExp("[As-z]").test(treatedFormula[i])) {
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

  return (
    <>
      <h1 className="pt-8">LabLógico</h1>
      <p>Digite uma fórmula de Lógica Proposicional abaixo.</p>
      <Label className="mt-8">Fórmula</Label>

      <ButtonGroup>
        <ButtonGroup>
          <Button onClick={() => tokenize(formula)}>
            <Forward />
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <InputGroup>
            <InputGroupInput
              id="formula"
              type="text"
              placeholder="(p -> q) & !q | !p"
              onChange={(event) => setFormula(event.target.value)}
            />
          </InputGroup>
        </ButtonGroup>
      </ButtonGroup>
    </>
  );
}

export default App;
