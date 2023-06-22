import classes from './index.module.css'
import Cookies from 'js-cookie';

export default function HomePage({money, setMoney}) {
  const handleChange = (evt) => {
    setMoney(evt.target.value)
    Cookies.set('money', evt.target.value)
  }
  return (
    <div className={classes.home}>
      <img
        src="https://pngimg.com/uploads/roulette/roulette_PNG47.png"
        alt="Imagem da roleta"
        width={'500em'}
        className={classes.image}
      />
      <h1 className={classes.text}>Bem-vindo(a) ao Cassino!</h1>
      <label htmlFor='dinheiro'>Dinheiro:</label>
      <input id='dinheiro' type='number' value={money} onChange={handleChange} min={0}></input>
    </div>
  );
}
