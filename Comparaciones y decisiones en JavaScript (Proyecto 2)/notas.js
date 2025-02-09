let nota = Math.floor(Math.random() * (100 - 0) + 0);
// let nota = 59;
console.log(`Tu nota es de ${nota}`);
if (nota > 0 && nota <= 100) {
  if (nota >= 90) {
    console.log("Excelente");
  } else if (nota >= 75 && nota <= 89) {
    console.log("Bien");
  } else if (nota >= 60 && nota <= 74) {
    console.log("Suficiente");
  } else if (nota < 60) {
    console.log("Reprobaste :c");
  }
}else{
    console.log('La nota tiene que ser mayor a 0 y menor a 101')
}
