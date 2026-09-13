import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";

function App() {
  return (
    <>
      <h1 className="pt-8">LabLógico</h1>
      <p>Digite uma fórmula de Lógica Proposicional abaixo.</p>
      <Label className="mt-8">Fórmula</Label>
      <Input
        id="formula"
        type="text"
        placeholder="(p -> q) & !q | !p"
        className="mt-2"
      />
    </>
  );
}

export default App;
