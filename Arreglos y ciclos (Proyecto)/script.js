let frutas = ["Manzana", "Pera", "Platano", "Durazno", "Pera", "Manzana", "Platano", "Kiwi", "Manzana"];
let cantidad = {};
let cantidad2 = {};


console.log("for");

for(i=0;i<frutas.length; i++){
    let fruta = frutas[i];
    if(cantidad[fruta]){
        cantidad[fruta]++
    }else{
        cantidad[fruta] = 1
    }
}
console.log(cantidad);

console.log("While");
let a = 0;
while(a < frutas.length){
    let fruta = frutas[a];
    if(cantidad2[fruta]){
        cantidad2[fruta]++;
    }else{
        cantidad2[fruta] = 1;
    }
    a++;
}

console.log(cantidad2);

