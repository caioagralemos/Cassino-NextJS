import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

export default function RoletaForm({
  numero,
  setNumero,
  cor,
  setCor,
  aposta,
  setAposta,
  money,
}) {
  const handleNumChange = (evt) => {
    var num = evt.target.value;
    setNumero(num);
  };

  const handleColorChange = (evt) => {
    var color = evt.target.value;
    setCor(color);
  };

  const handleBetChange = (evt) => {
    var bet = evt.target.value;
    setAposta(bet);
  };

  return (
    <div>
      <form>
        <label htmlFor="num">Número</label>
        <input
          value={numero}
          onChange={handleNumChange}
          id="num"
          type="number"
          min={0}
          max={50}
        />

        <label htmlFor="aposta">Aposta</label>
        <input
          value={aposta}
          onChange={handleBetChange}
          id="aposta"
          type="number"
          min={0}
          max={money}
        />

        <label htmlFor="num">Cor</label>
        <select value={cor} onChange={handleColorChange}>
          <option value="VERDE">
            Verde
          </option>
          <option value="VERMELHO">
            Vermelho
          </option>
          <option value="PRETO">
            Preto
          </option>
        </select>
      </form>
    </div>
  );
}
