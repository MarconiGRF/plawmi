const width = window.innerWidth;
const height = window.innerHeight;

var arrBirdsPos = [
    [100,240], //Left Woods
    [300,240],
    [100,515],
    [300,515],
    [500,515], 
    [1200,90], //Right Woods
    [1000,90],
    [800, 90],
    [1200,385],
    [1000,385]
];
var arrOcupPos = [0,0,0,0,0,0,0,0,0,0];

let stage = new Konva.Stage({
    container: 'myDiv',
    width: width,
    height: height,
});

let woodLayer = new Konva.Layer();
let birdLayer = new Konva.Layer();

stage.add(woodLayer);
stage.add(birdLayer);

let imageWood1 = new Image();
imageWood1.onload = function () {
    let wood1 = new Konva.Image({
        x: -300,
        y: 320,
        image: imageWood1,
        width: 775,
        height: 41,
    });
    // add the shape to the layer
    woodLayer.add(wood1);
};
imageWood1.src = './assets/wood1.png';

let imageWood2 = new Image();
imageWood2.onload = function () {
    let wood2 = new Konva.Image({
        x: 0,
        y: 595,
        image: imageWood2,
        width: 623,
        height: 41,
    });
    // add the shape to the layer
    woodLayer.add(wood2);
};
imageWood2.src = './assets/wood2.png';

let imageWood3 = new Image();
imageWood3.onload = function () {
    let wood3 = new Konva.Image({
        x: width-420,
        y: 465,
        image: imageWood3,
        width: 420,
        height: 41,
    });
    // add the shape to the layer
    woodLayer.add(wood3);
};
imageWood3.src = './assets/wood3.png';

let imageWood4 = new Image();
imageWood4.onload = function () {
    let wood4 = new Konva.Image({
        x: width-680,
        y: 170,
        image: imageWood4,
        width: 680,
        height: 41,
    });
    // add the shape to the layer
    woodLayer.add(wood4);
    woodLayer.batchDraw();
};
imageWood4.src = './assets/wood4.png';

let imageBirdY = new Image();
imageBirdY.onload = function () {
    let bird1 = new Konva.Image({
        x: 100,
        y: 240,
        image: imageBirdY,
        width: 80,
        height: 96,
        visible: true,
    });
    // add the shape to the layer
    birdLayer.add(bird1);
};
imageBirdY.src = './assets/yellowbird.png';

let imageBirdPM = new Image();
imageBirdPM.onload = function () {
    let bird2 = new Konva.Image({
        x: 1200,
        y: 385,
        image: imageBirdPM,
        width: 80,
        height: 96,
        visible: true,
    });
    // add the shape to the layer
    birdLayer.add(bird2);
};
imageBirdPM.src = './assets/purplebirdM.png';

let imageBirdO = new Image();
imageBirdO.onload = function () {
    let bird3 = new Konva.Image({
        x: 500,
        y: 515,
        image: imageBirdO,
        width: 80,
        height: 96,
        visible: true,
    });
    // add the shape to the layer
    birdLayer.add(bird3);
};
imageBirdO.src = './assets/orangebird.png';

let imageBirdP = new Image();

let bird4 = new Konva.Image({
    x: 1000,
    y: 90,
    image: imageBirdP,
    width: 80,
    height: 96,
    visible: true,
});

birdLayer.add(bird4);
birdLayer.batchDraw();


//imageBirdP.onload = function () {
    
    // add the shape to the layer

//};
imageBirdP.src = './assets/purplebird.png';


var y = true;
let p = true;
let o = true;
let pm = true;

function yellowSH(){
    if (y) {
        bird4.hide();
        birdLayer.batchDraw();
    }
    else {
        bird4.show();
        birdLayer.batchDraw();
    }
    y = !y;
}
function purpleSH(){

}
function orangeSH(){

}
function purpleMSH(){

}
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
