var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

function aBirdIsBorn(bird) {
    //.random pra pegar a posição
    void context.drawImage(bird.image, position.x, position.y, 4, 5);
    //falar com conti sobre esses atributos de passaro e posicao
    //4 e 5 sao width e heigth da imagem, valores arbitrarios por enquanto
}

function aBirdIsDead(phrase, position){
//pra tirar o passaro tem duas opções, apagar o canvas todo e redesenhar ou aprender a so tirar o passaro, em algum momento agt escolhe o melhor
//tem uma funcao pra apagar um quadrante do canvas: clearRect(x, y, width, height)
//pra usar ela tem que ter cuidado pra n ter nada colado com o que vai ser apagado (pra nao apagar junto)
}

const lilbirdie = document.getElementById("sourceBirdie");
void context.drawImage(lilbirdie,10,10,47,47);

/*
Próximos Passos
----------------
> Contador de dano (juntar o audio de Marnon e os passaros de Coline e fazer eles interagirem no contador de bruris)
    > Valor da voz chega 
    > decrementa do limite do passaro 
    > Se limite do passaro "<= 0" 
    > chama aBirdIsDead 
    > matar o passaro 
    > chamar a frase 
    > dar timeout na frase 
    > chama aBirdIsBorn
> Randomizador de posição pros passaros
> Randomizador para pegar frases diferentes
--------------------------------------------
Observacoes
-----------
> Se reunir com MarNon para alinhar o que exatamente vem deles
> Se reunir com CoLine para alinhar as mudancas no objeto de passaro e de frase
*/
