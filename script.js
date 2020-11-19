const width = window.innerWidth;
const height = window.innerHeight;

var arrBirdsPos = [
    [100, 240], //Left Woods
    [300, 240],
    [100, 515],
    [300, 515],
    [500, 515],
    [1200, 90], //Right Woods
    [1000, 90],
    [800, 90],
    [1200, 385],
    [1000, 385]
];
var arrOcupPos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

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
imageWood1.src = './assets/wood1.png';
let wood1 = new Konva.Image({
    x: -300,
    y: 320,
    image: imageWood1,
    width: 775,
    height: 41,
});
woodLayer.add(wood1);

let imageWood2 = new Image();
imageWood2.src = './assets/wood2.png';
let wood2 = new Konva.Image({
    x: 0,
    y: 595,
    image: imageWood2,
    width: 623,
    height: 41,
});
woodLayer.add(wood2);

let imageWood3 = new Image();
imageWood3.src = './assets/wood3.png';
let wood3 = new Konva.Image({
    x: width - 420,
    y: 465,
    image: imageWood3,
    width: 420,
    height: 41,
});
woodLayer.add(wood3);

let imageWood4 = new Image();
imageWood4.src = './assets/wood4.png';
let wood4 = new Konva.Image({
    x: width - 680,
    y: 170,
    image: imageWood4,
    width: 680,
    height: 41,
});
woodLayer.add(wood4);

let imageBirdY = new Image();
imageBirdY.src = './assets/yellowbird.png';
let bird1 = new Konva.Image({
    x: 100,
    y: 240,
    image: imageBirdY,
    width: 80,
    height: 96,
});
birdLayer.add(bird1);

let imageBirdPM = new Image();
imageBirdPM.src = './assets/purplebirdM.png';
let bird2 = new Konva.Image({
    x: 1200,
    y: 385,
    image: imageBirdPM,
    width: 80,
    height: 96,
});
birdLayer.add(bird2);

let imageBirdO = new Image();
imageBirdO.src = './assets/orangebird.png';
let bird3 = new Konva.Image({
    x: 500,
    y: 515,
    image: imageBirdO,
    width: 80,
    height: 96,
});
birdLayer.add(bird3);

let imageBirdP = new Image();
imageBirdP.src = './assets/purplebird.png';
let bird4 = new Konva.Image({
    x: 1000,
    y: 90,
    image: imageBirdP,
    width: 80,
    height: 96,
});
birdLayer.add(bird4);

function start() {
    woodLayer.batchDraw();
    birdLayer.batchDraw();
}
function show(bird) {
    bird.show();
    birdLayer.batchDraw();
}
function hide(bird) {
    bird.hide();
    birdLayer.batchDraw();
}