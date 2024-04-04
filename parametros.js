function nomeIdade(nome, idade){
    return `Meu nome é ${nome} e minha idade é ${idade}`;
}
 nomeIdade("jose",18);

 console.log(nomeIdade(40,"André"))
 console.log(nomeIdade("André",40))


 function soma(numero1, numero2) {
    return numero1 + numero2
 }
                       //colocando um valor definido não gera o erro dos parametros.
function multiplica(numero1 = 1, numero2 = 2) {
    return numero1 * numero2;
 }
 console.log(soma(2)) //se não colocar os dois parametros não realiza o calculo
 console.log(multiplica(7,2))
 console.log(multiplica())
 //9
console.log(multiplica(soma(4, 5)))