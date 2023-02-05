//Una variable que contenga tu altura en centímetros (entero)
var altura = 170
//Una variable que contenga tu altura en metros (número de coma flotante)
var alturaf = 1.70
//Una variable que contenga tu peso en kilogramos (número de coma flotante)
var peso = 6.9 
//Una variable que contenga tu altura en metros redondeada hacia arriba
var alturaAr = alturaf.toFixed()
//Una variable que contenga tu peso en kilogramos redondeado hacia abajo
var pesoAb = Math.floor(peso)
//una variable que contenga si "el máximo valor que se puede obtener en Javascript 
//+ 1" es igual al máximo valor que se puede obtener en Javascript
 const max = Number.MAX_VALUE === Number.MAX_VALUE +1 
 console.log(max)
 // pense que me daria false, hice el console.log y me da true