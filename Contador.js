//autor @hsolarte

node 
// Función que ejecuta el contador
function iniciarContador() {
    const intervalo = setInterval(() => {
      console.log(contador); // Muestra el valor del contador
      contador--; // Decrementa el contador
  
      if (contador < 0) {
        clearInterval(intervalo); // Detiene el intervalo cuando el contador llega a 0
        console.log('¡Cuenta regresiva terminada!');
      }
    }, 1000); // El intervalo se ejecuta cada 1 segundo (1000 ms)
  }
  
  // Llamar a la función para iniciar el contador
  iniciarContador();