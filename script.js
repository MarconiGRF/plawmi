

const width = window.innerWidth;
const height = window.innerHeight;

let stage = new Konva.Stage({
    container: 'myDiv',
    width: width,
    height: height,
});

let woodLayer = new Konva.Layer();
let birdLayer = new Konva.Layer();

stage.add(woodLayer);
stage.add(birdLayer);

// --------- madeirinhas que n fazem mal a ninguém ---------

let imageWood1 = new Image();
imageWood1.src = './assets/wood1.png';
let wood1 = new Konva.Image({
    x: -300,
    y: 320,
    image: imageWood1,
    width: 775,
    height: 41,
});

let imageWood2 = new Image();
imageWood2.src = './assets/wood2.png';
let wood2 = new Konva.Image({
    x: 0,
    y: 595,
    image: imageWood2,
    width: 623,
    height: 41,
});

let imageWood3 = new Image();
imageWood3.src = './assets/wood3.png';
let wood3 = new Konva.Image({
    x: width - 420,
    y: 465,
    image: imageWood3,
    width: 420,
    height: 41,
});

let imageWood4 = new Image();
imageWood4.src = './assets/wood4.png';
let wood4 = new Konva.Image({
    x: width - 680,
    y: 170,
    image: imageWood4,
    width: 680,
    height: 41,
});
woodLayer.add(wood1);//como n vamos mexer nelas coloquei direto na layer
woodLayer.add(wood2);
woodLayer.add(wood3);
woodLayer.add(wood4);

// --------- fim das madeirinhas que n fazem mal a ninguém ---------

//as imagens por si só n mexem no konva, mas podemos trocar elas de grupo e esses
//grupos tem posições especificas, então na pratica é a forma de mexer os passaros de lugar.

var position0 = new Konva.Group({
    x: 100,
    y: 240,
});
var position1 = new Konva.Group({
    x: 300,
    y: 240,
});
var position2 = new Konva.Group({
    x: 100,
    y: 515,
});
var position3 = new Konva.Group({
    x: 300,
    y: 515,
});
var position4 = new Konva.Group({
    x: 500,
    y: 515,
});
var position5 = new Konva.Group({
    x: 1200,
    y: 90,
});
var position6 = new Konva.Group({
    x: 1000,
    y: 90,
});
var position7 = new Konva.Group({
    x: 800,
    y: 90,
});
var position8 = new Konva.Group({
    x: 1200,
    y: 385,
});
var position9 = new Konva.Group({
    x: 1000,
    y: 385,
});
var arrOcupPos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; 
var arrPosition = [position0, position1, position2, position3, position4, position5, position6,position7,position8,position9];
//falta usar esse array pra conferir se o grupo ja ta ocupado
//e escolher posicao aleatoriamente (seguindo a condicao de n estar ocupado)

let imageBirdY = new Image();
imageBirdY.src = './assets/yellowbird.png';
let bird1 = new Konva.Image({
    x: 0, //sem valor pq elas vao seguir as coordenadas do grupo
    y: 0,
    image: imageBirdY,
    width: 80,
    height: 96,
});

let imageBirdPM = new Image();
imageBirdPM.src = './assets/purplebirdM.png';
let bird2 = new Konva.Image({
    x: 0,
    y: 0,
    image: imageBirdPM,
    width: 80,
    height: 96,
});

let imageBirdO = new Image();
imageBirdO.src = './assets/orangebird.png';
let bird3 = new Konva.Image({
    x: 0,
    y: 0,
    image: imageBirdO,
    width: 80,
    height: 96,
});

let imageBirdP = new Image();
imageBirdP.src = './assets/purplebird.png';
let bird4 = new Konva.Image({
    x: 1000,
    y: 90,
    image: imageBirdP,
    width: 80,
    height: 96,
});

position0.add(bird1);
position1.add(bird2);
position2.add(bird3);
position3.add(bird4);

birdLayer.add(position0);
birdLayer.add(position1);
birdLayer.add(position2);
birdLayer.add(position3);
birdLayer.add(position4);
birdLayer.add(position5);
birdLayer.add(position6);
birdLayer.add(position7);
birdLayer.add(position8);
birdLayer.add(position9);

function start() {
    woodLayer.batchDraw();
    birdLayer.batchDraw();
}
function show(bird) { 
    //bird.moveTo(position4); //teste pra ver se troca de lugar (FUNCIONA!!)
    //isso acima é o comando pra trocar a imagem de grupo
    bird.show();      
    birdLayer.batchDraw();
}
//let lifeYellow = 3;
//criei uma vida arbitraria so pra tentar matar o passaro e fazer ele renascer

function hide(bird) {
    bird.hide();
    birdLayer.batchDraw();
    
    //isso aqui tudo abaixo foi pra tirar vida até zerar e ai matar e tentar renascer,
    /*if(lifeYellow <= 0){
        bird.hide();
        birdLayer.batchDraw();
        show(bird); //nasceu dnv uhull
    }
    else {
        lifeYellow--;
        //percebi que as funçoes que sao chamadas no html n sei pq n mudam o valor do 
        //parametro que passam, entao aqui tem que usar alguma chave pra escolher e
        //tirar a vida do passaro certo.
    }*/
}

//nao sei o que estou fazendo dessa linha pra baixo
//tava querendo fazer uma função generica pra evitar codigo igual mas n necessário

function createShape(object, layer) { //gerar tanto os galhos como os passaros
    let asset = new Image();
    asset.src = object.asset;
    let shape = new Konva.Image({
        x: object.position.x, //chamar o get sla 
        y: object.position.y,
        image: asset.image,
        width: object.width,
        height: object.height,
    });
    layer.add(shape);
}


function putInPosition (bird){ //beta do randomizador
    do{
    var randomPos = Math.floor(Math.random() * 10); 
    console.log(randomPos)
    console.log(arrOcupPos);
    }
    while (arrOcupPos[randomPos] == 1) { //isso funciona enquanto o arrey n tiver cheio, vou voltar pra ver isso
        let randomPos = Math.floor(Math.random() * 10); 
    }
        arrPosition[randomPos].add(bird);
        arrOcupPos[randomPos] = 1;
        hide(bird);
        show(bird);
}