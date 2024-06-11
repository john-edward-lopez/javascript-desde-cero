//Funciones - Function Expression -expresion

/* este tipo de funcion  no puede ser llama in inicializarce primero 
 ya que al ser un funcion de expresion javascript lo ve como una variable*/

const sumar = function (numero1 = 0, numero2 = 0) {
  console.log(numero1 + numero2);
};

sumar(10, 10);
sumar(300, 1);
