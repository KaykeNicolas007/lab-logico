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
    const tokens: Token[] = [];

    for (let i = 0; i < formula.length; i++) {
      if (RegExp("[a-z]").test(formula[i])) {
        tokens.push({ type: "VAR", value: formula[i], position: i });
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
