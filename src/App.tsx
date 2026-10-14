import { useState } from "react";
import { InputGroup, InputGroupInput } from "./components/ui/input-group";
import { ButtonGroup } from "./components/ui/button-group";
import { Button } from "./components/ui/button";
import { Label } from "./components/ui/label";
import { Forward } from "lucide-react";

function App() {
  const [token, setToken] = useState("");

  return (
    <>
      <h1 className="pt-8">LabLógico</h1>
      <p>Digite uma fórmula de Lógica Proposicional abaixo.</p>
      <Label className="mt-8">Fórmula</Label>

      <ButtonGroup>
        <ButtonGroup>
          <Button onClick={() => console.log(token)}>
            <Forward />
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <InputGroup>
            <InputGroupInput
              id="formula"
              type="text"
              placeholder="(p -> q) & !q | !p"
              onChange={(event) => setToken(event.target.value)}
            />
          </InputGroup>
        </ButtonGroup>
      </ButtonGroup>
    </>
  );
}

export default App;
