import { useState } from "react";
import subirFoguete from "../../components/Foguetinho/subirFoguete";
import classes from "./foguetinho.module.css";
import { TextField } from "@mui/material";

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
    setIsOn(true);
    await setBet(parseFloat(form));
    setMoney(money - form);
    setForm(0);
    await subirFoguete(setMulti, setIsOn);
  }

  function stopBet() {
    setIsOn(false);
    var multiplicador = multi;
    setPrizeMoney(bet * parseFloat(multiplicador));
    setMoney(money + bet * parseFloat(multiplicador));
  }

  return (
    <div>
      <div
        className={isOn ? classes.multiplicador : classes.multiplicadorParado}
      >
        {multi}x
      </div>

      <input
        className={classes.input}
        type="number"
        value={form}
        min={0}
        onChange={handleChange}
      />

      {isOn ? (
        <button className={classes.stop} onClick={stopBet}>
          Stop
        </button>
      ) : (
        <button className={classes.start} disabled={isOn} onClick={startBet}>
          Start
        </button>
      )}
    </div>
  );
}
