const repetitions = prompt(
    "Ingrese la cantidad de veces que deesea quie se repita el juego"
  );
  const repetitionsQty = Number.parseInt(repetitions);
  
  console.log(`El usuario quiere que el juego se repita ${repetitionsQty} veces`);
  
  for (let count = 1; count <= repetitionsQty; count = count + 1) {
    //pedir una respuesta
    const userMove = prompt(
      "Ingrese su jugada, debe ser: Piedra, Papel o Tijera"
    );
  
    const randomMoveIndex = Math.floor(Math.random() * (4 - 1)) + 1;
    // 1 o 2 o 3;
    let machineMove = "";
  
    if (randomMoveIndex === 1) {
      machineMove = "Piedra";
    } else if (randomMoveIndex === 2) {
      machineMove = "Papel";
    } else if (randomMoveIndex === 3) {
      machineMove = "Tijera";
    } else {
      console.error(`La opcion randomMoveIndex no es valida: ${randomMoveIndex}`);
    }
    let winner = ""; // Machine - User - Both - Unknown

    if (machineMove === "Piedra") {
      if (userMove === "Papel") {
        winner = "User";
      } else if (userMove === "Tijera") {
        winner = "Machine";
      } else {
        winner = "Both";
      }
    } else if (machineMove === "Papel") {
      if (userMove === "Tijera") {
        winner = "User";
      } else if (userMove === "Piedra") {
        winner = "Machine";
      } else {
        winner = "Both";
      }
    } else if (machineMove === "Tijera") {
      if (userMove === "Piedra") {
        winner = "User";
      } else if (userMove === "Papel") {
        winner = "Machine";
      } else {
        winner = "Both";
      }
    } else {
      winner = "Unknown";
    }
  
    // mostrar el resultado en consola
    console.log({ userMove, machineMove });
    console.log(`El ganador es: ${winner}`);
    
    //mostrar mensaje al usuario con el resultado
    if (winner === "User")  {
        alert ("Felicidades eres el ganador")
    } else if (winner === "Machine")    {
        alert ("Te ha ganado la maquina sigue intentando")
    } else if (winner === "Both")   {
        alert ("Empataste")
    } else {
        alert ("el ganador es desconocido")
    }
  } 