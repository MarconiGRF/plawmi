const width = window.innerWidth;
const height = window.innerHeight;

let stage = new Konva.Stage({
    container: 'myDiv',
    width: width,
    height: height,
  });

let layer = new Konva.Layer();
stage.add(layer);

let imageObj = new Image();
imageObj.onload = function () {
    let bird1 = new Konva.Image({
        x: 100,
        y: 100,
        image: imageObj,
        width: 80,
        height: 96,
        });

    // add the shape to the layer
    layer.add(bird1);
    layer.batchDraw();
};
imageObj.src = './assets/bird1.png';



/*
function aBirdIsBorn(bird) {
    //.random pra pegar a posição
    void context.drawImage(bird.image, position.x, position.y,6,5);
    //falar com conti sobre esses atributos de passaro e posicao
    //4 e 5 sao width e heigth da imagem, valores arbitrarios por enquanto
}

function aBirdIsDead(phrase, position){
//pra tirar o passaro tem duas opções, apagar o canvas todo e redesenhar ou aprender a so tirar o passaro, em algum momento agt escolhe o melhor
//tem uma funcao pra apagar um quadrante do canvas: clearRect(x, y, width, height)
//pra usar ela tem que ter cuidado pra n ter nada colado com o que vai ser apagado (pra nao apagar junto)
}

const lilbirdie = document.getElementById("sourceBirdie");
context.drawImage(lilbirdie,10,10,30,32);

function luisaHoneyComeHere(freq, bird){
    let bFreqTop = bird.frequencyTop;
    let bFreqFloor = bird.frequencyFloor;
    let bLife = bird.life;

    if (freq <= bFreqTop && freq > bFreqFloor){
        bird.setLife(bLife - 1);
    }

    if (bird.life <= 0){
        aBirdIsDead(bird);
    }

}
*/
/*
Próximos Passos
----------------
> Contador de dano (juntar o audio de Marnon e os passaros de Coline e fazer eles interagirem no contador de bruris)
    > Valor da voz chega 
    > decrementa do limite do passaro ✅
    > Se limite do passaro "<= 0" ✅
    > chama aBirdIsDead ✅
    > matar o passaro ✅
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
