// Evaluacion de corto circuito

const auth = true;

if (40) {
  console.log("Truthy");
} else {
  console.log("falsy");
}

/**  valores Truthy
 * if (true)
if ({})
if ([])
if (42)
if ("foo")
if (new Date())
if (-42)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)

 * 
 */

/**
 * valores flasy
 *0 , 
 "" (string vacío),
  false , 
  NaN , 
  undefined 
   null .
 */

//evaluacion corticircuito

auth && console.log("Usuario Autenticado");
