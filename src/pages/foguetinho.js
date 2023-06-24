import { useState } from "react";
import subirFoguete from "../../components/Foguetinho/subirFoguete";
import classes from "./foguetinho.module.css";
import { Button } from "@mui/material";

export default function Foguetinho({ money, setMoney }) {
  const [multi, setMulti] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [form, setForm] = useState(0);
  const [bet, setBet] = useState(0);
  const [prizeMoney, setPrizeMoney] = useState(0);

  const voando = (
    <div className={classes.gif}>
      <img src="https://i.gifer.com/D4e.gif" />
    </div>
  );

  const crashou = (
    <div className={classes.gif}>
      <img src="https://media.tenor.com/3SBqhErIPE8AAAAd/rocket-crash-explosion.gif" />
    </div>
  );

  async function handleChange(evt) {
    var bet = evt.target.value;
    setForm(parseFloat(bet));
  }

  async function startBet() {
    if (money >= form && form > 0) {
      setIsOn(true);
      await setBet(parseFloat(form));
      setMoney(money - form);
      await subirFoguete(setMulti, setIsOn);
    } else {
      alert("Não é possível realizar essa aposta.");
    }
  }

  function stopBet() {
    setIsOn(false);
    var multiplicador = multi;
    setPrizeMoney(bet * parseFloat(multiplicador));
    setMoney(money + bet * parseFloat(multiplicador));
  }

  return (
    <div className={classes.home}>
        <img className={classes.gif} alt="foguetinho" src="https://cdn.dribbble.com/users/6845708/screenshots/17574146/media/33ac10886e28f84074a03e9a6f8aeda0.gif"/>
      <div
        className={isOn ? classes.multiplicador : classes.multiplicadorParado}
      >
        {multi}x
      </div>

      <h1>FOGUETINHO DO PIX</h1>

      <div>
        <input
          className={classes.input}
          id="bet"
          type="number"
          value={form}
          min={0}
          onChange={handleChange}
        />
      </div>

      <div>
        {isOn ? (
          <Button
            className={classes.stop}
            onClick={stopBet}
            variant="outlined"
            color="success"
            style={{ margin: "20px" }}
            >
            TIRAR
          </Button>
        ) : (
          <Button
            className={classes.start}
            disabled={isOn}
            onClick={startBet}
            variant="outlined"
            color="error"
            style={{ margin: "20px" }}
          >
            COMEÇAR
          </Button>
        )}
      </div>
    </div>
  );
}
