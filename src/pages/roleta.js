import { useState, useEffect } from "react";
import RoletaForm from "../../components/Roleta/roletaForm";
import classes from "./roleta.module.css";
import pause from "../../components/extras/pause";
import { Button } from "@mui/material";
import Cookies from "js-cookie";

export default function Roleta({ money, setMoney }) {
  const [choiceNumber, setChoiceNumber] = useState(0);
  const [choiceColor, setChoiceColor] = useState("VERDE");

  const [dealedNumber, setDealedNumber] = useState(0);
  const [dealedColor, setDealedColor] = useState("VERDE");

  const [betValue, setbetValue] = useState(0);
  const [premio, setPremio] = useState(0);

  const [isLoading, setLoading] = useState(false);
  const [alreadyPlayed, setalreadyPlayed] = useState(false);
  const [wonLastGame, setWonLastGame] = useState(false);

  useEffect(() => {
    deal();
  }, []);

  async function deal() {
    let num = Math.floor(Math.random() * 50 + 1);
    let cor;

    if (num === 0) cor = "VERDE";
    else if (num % 2 === 0) cor = "PRETO";
    else cor = "VERMELHO";

    setDealedNumber(num);
    setDealedColor(cor);
  }

  async function bet() {
    setLoading(true);
    setalreadyPlayed(false);
    await setMoney(money - betValue);
    await pause(2500);
    await deal();
    setLoading(false);
    setalreadyPlayed(true);
  }

  useEffect(() => {
    compareColor();
  }, [dealedColor, dealedNumber]);
  
  async function compareColor() {
    const lowerCaseChoiceColor = choiceColor.toLowerCase();
    const lowerCaseDealedColor = dealedColor.toLowerCase();
  
    if (lowerCaseChoiceColor === lowerCaseDealedColor) {
      setWonLastGame(true);
      let win = betValue * 2;
      setPremio(win);
      let total = parseInt(money) + parseInt(win);
      setMoney(total);
    } else {
      setWonLastGame(false);
      setPremio(betValue);
    }
  }
  
  async function compareNumber() {
  
    if (choiceNumber === dealedNumber) {
      setWonLastGame(true);
      let win = betValue * 50;
      setPremio(win);
      let total = parseInt(money) + parseInt(win);
      setMoney(total);
    } else {
      setWonLastGame(false);
      setPremio(betValue);
    }
  }
  
  async function betx2() {
    await bet();
  }

  async function betx50() {
    await bet();
  }

  return (
    <div className={classes.home}>
      <img src="https://media4.giphy.com/media/26uflBhaGt5lQsaCA/giphy.gif" />
      <h1>ROLETA</h1>
      <h2>
        {isLoading
          ? "Loading..."
          : `NÚMERO SORTEADO: ${dealedNumber}\nCOR SORTEADA: ${dealedColor}`}
      </h2>
      <h2>
        {alreadyPlayed
          ? `${
              wonLastGame
                ? `VOCÊ GANHOU R$ ${premio},00`
                : `Você PERDEU R$ ${premio},00`
            }`
          : ""}
      </h2>
      <RoletaForm
        numero={choiceNumber}
        setNumero={setChoiceNumber}
        cor={choiceColor}
        setCor={setChoiceColor}
        aposta={betValue}
        setAposta={setbetValue}
      />
      <div style={{ margin: "0px" }}>
        <Button
          onClick={betx2}
          variant="outlined"
          color="warning"
          style={{ margin: "20px" }}
        >
          Aposta por Cor (x2)
        </Button>
        <Button
          onClick={betx50}
          variant="outlined"
          color="success"
          style={{ margin: "20px" }}
        >
          Cor Verde ou Número (x50)
        </Button>
      </div>
    </div>
  );
}
