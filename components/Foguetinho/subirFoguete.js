const subirFoguete = (setMulti, setIsOn) => {
  setMulti(0);
  var numeros = [];
  numeros[0] = Math.random() * 6;
  numeros[1] = Math.random() * 3;
  numeros[2] = Math.random() * 1;
  var index = Math.floor(Math.random() * numeros.length);
  var random = numeros[index];

  console.log(numeros);

  // Definindo a variável do temporizador
  let temporizador = 0;

  // Função para atualizar o contador a cada 100 milissegundos (0,1 segundos)
  function atualizarContador() {
    temporizador += 0.1;

    // Exibe o tempo convertido em dezenas de segundos
    setMulti(temporizador.toFixed(1));

    if (temporizador >= random) {
      clearInterval(intervalId); // Para o contador quando atingir o tempo máximo
      setIsOn(false)
    }
  }

  const intervalId = setInterval(atualizarContador, 300);

  return () => {
    clearInterval(intervalId); // Limpa o intervalo quando o componente é desmontado
  };
};

export default subirFoguete;
