//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18
let idade = 22;
if(idade >18){
    console.log('você é maior de idade')
}
//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true
let verificar = 18 <= 22;
console.log(verificar)
//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro
let mesAniversario = "Janeiro";
if((mesAniversario === "Janeiro") || (mesAniversario === "Dezembro")){
    console.log("Você faz aniversário no verão");
}else{
    console.log("'infelizmente', não foi dessa vez")
}


//*** Exercícios bônus
//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R
let primeiraLetraDoNome = "R"
if( primeiraLetraDoNome === "R" ){
    console.log("Nome começa com  R");
}

//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tiver mais de 
//6 letras OU seu nome começar com a letra E

let sobrenome = "Martins";
let primeiraLetraDoSobrenome = "M";
if((sobrenome.length >= 6) || (primeiraLetraDoSobrenome === "E")){
    console.log("Parabéns você compriu ao menos uma das condições de sobrenome");
}