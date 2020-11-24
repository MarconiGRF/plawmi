// ------------------------------------------------------------- //
// --------------------- START OF IMPORTS ---------------------- //
// ------------------------------------------------------------- //

import { createBird } from './modules/birdModule'

// ------------------------------------------------------------- //
// --------------------- END OF IMPORTS ------------------------ //
// ------------------------------------------------------------- //

// ------------------------------------------------------------- //
// ----------------- START OF GLOBAL VARIABLES ----------------- //
// ------------------------------------------------------------- //
/**
 * The height of the current view.
 * @type {number}
 */
const width = window.innerWidth;
var inputProcessor;
/**
 * The width of the current view.
 * @type {number}
 */
const height = window.innerHeight;

/**
 * The Konva stage.
 * @type {any}
 */
let stage = null;

/**
 * The wood konva layer, intended to show the wood image.
 * @type {Konva.Layer}
 */
let woodLayer = new Konva.Layer();

/**
 * The bird layer, intended to show all birds and manipulate them.
 * @type {Konva.Layer}
 */
let birdLayer = new Konva.Layer();

/**
 * The available positions on the konva stage.
 * @type {Konva.Group}
 */
let position0 = null;
let position1 = null;
let position2 = null;
let position3 = null;
let position4 = null;
let position5 = null;
let position6 = null;
let position7 = null;
let position8 = null;
let position9 = null;

/**
 * An array to indicate if a position is occupied or not.
 * True indicates that the position is occupied.
 * False indicates that the position is not occupied.
 * @type {boolean[]}
 */
let isPositionOccupied = [false, false, false, false, false, false, false, false, false, false];

/**
 * The actual array of positions.
 * Ariana grande approves this array.
 * @type {Konva.Group[]}
 */
let positions = [position0, position1, position2, position3, position4, position5, position6, position7, position8, position9]

/**
 * The representations of the birds on screen.
 * @type {Konva.Image}
 */
let bird0 = null;
let bird1 = null;
let bird2 = null;
let bird3 = null;
let bird4 = null;
let bird5 = null;
let bird6 = null;

/**
 * Bird's array
 */
var cage = [bird0, bird1, bird2, bird3, bird4, bird5, bird6];
var birdByFrequency = new Array(100);

// ----------------------------------------------------------- //
// ----------------- END OF GLOBAL VARIABLES ----------------- //
// ----------------------------------------------------------- //


// ------------------------------------------------------------- //
// ----------------- START OF SYNCHRONOUS CODE ----------------- //
// ------------------------------------------------------------- //
createKonvaStage(width, height);

addLayerToConva(woodLayer);
addLayerToConva(birdLayer);

addImageToLayer(woodLayer, imageBuilder('wood1.png', -300, 320, 775, 41));
addImageToLayer(woodLayer, imageBuilder('wood2.png', 0, 595, 623, 41));
addImageToLayer(woodLayer, imageBuilder('wood3.png', (width - 420), 465, 420, 41));
addImageToLayer(woodLayer, imageBuilder('wood4.png', (width - 680), 170, 680, 41));

setPositions();
 
bird0 = createBird(imageBuilder('yellowbird.png', 0, 0, 80, 96));
bird1 = createBird(imageBuilder('purplebirdM.png', 0, 0, 80, 96));
bird2 = createBird(imageBuilder('orangebird.png', 0, 0, 80, 96));
bird3 = createBird(imageBuilder('purplebird.png', 0, 0, 80, 96));

addImageToGroup(position0, bird0);
addImageToGroup(position1, bird1);
addImageToGroup(position2, bird2);
addImageToGroup(position3, bird3);

addGroupToLayer(birdLayer, position0);
addGroupToLayer(birdLayer, position1);
addGroupToLayer(birdLayer, position2);
addGroupToLayer(birdLayer, position3);
addGroupToLayer(birdLayer, position4);
addGroupToLayer(birdLayer, position5);
addGroupToLayer(birdLayer, position6);
addGroupToLayer(birdLayer, position7);
addGroupToLayer(birdLayer, position8);
addGroupToLayer(birdLayer, position9);
// ----------------------------------------------------------- //
// ----------------- END OF SYNCHRONOUS CODE ----------------- //
// ----------------------------------------------------------- //


// ------------------------------------------------------ //
// ----------------- START OF FUNCTIONS ----------------- //
// ------------------------------------------------------ //
/**
 * Creates the Konva stage.
 * Such stage will hold all layers and necessary components to be shown.
 * @param width The width of the stage
 * @param height The height of the stage
 */
function createKonvaStage(width, height) {
    stage = new Konva.Stage({
        container: 'myDiv',
        width: width,
        height: height,
    });
}

function transferIP(op) {
    inputProcessor = op;
}

/**
 * Adds the given layer to the current konva stage.
 * @param layer
 */
function addLayerToConva(layer) {
    stage.add(layer);
}

/**
 * Adds the given image to the given layer.
 * @param layer The layer to receive the image.
 * @param image The image to be added to the layer.
 */
function addImageToLayer(layer, image) {
    layer.add(image);
}

/**
 * Adds the given group to the given layer.
 * @param layer The layer to receive the image.
 * @param group The group to be added to the layer.
 */
function addGroupToLayer(layer, group) {
    layer.add(group);
}

/**
 * Adds the given image to the given group.
 * @param group The group to receive the image.
 * @param image The image to be added to the group.
 */
function addImageToGroup(group, image) {
    group.add(image);
}

/**
 * Builds and returns a Konva Image based with the given parameters.
 * @param imgSource The image's filename to be loaded. Available filenames can be found at './assets/'.
 * @param xCoordinate The X coordinate that the image will be positioned.
 * @param yCoordinate The Y coordinate that the image will be positioned.
 * @param imageWidth The image's width in pixels.
 * @param imageHeight The image's height in pixels.
 * @returns {Konva.Image} The newly built konva image.
 */
function imageBuilder(imgSource, xCoordinate, yCoordinate, imageWidth, imageHeight) {
    let toBeAdded = new Image();
    toBeAdded.src = './assets/' + imgSource;

    let konvaImage = new Konva.Image({
        x: xCoordinate,
        y: yCoordinate,
        image: toBeAdded,
        width: imageWidth,
        height: imageHeight
    });
    return konvaImage;
}

/**
 * Sets the position of the given position variable.
 * Such variable is actually a new Konva.Group
 * @param reference The object with the reference to be set.
 * @param xCoordinate The X coordinate of the position.
 * @param yCoordinate The Y coordinate of the position.
 */
function setPositions(reference, xCoordinate, yCoordinate) {
    position0 = new Konva.Group({
        x: 100,
        y: 240
    });
    position1 = new Konva.Group({
        x: 300,
        y: 240
    });
    position2 = new Konva.Group({
        x: 100,
        y: 515
    });
    position3 = new Konva.Group({
        x: 300,
        y: 515
    });
    position4 = new Konva.Group({
        x: 500,
        y: 515
    });
    position5 = new Konva.Group({
        x: 1200,
        y: 90
    });
    position6 = new Konva.Group({
        x: 100,
        y: 90
    });
    position7 = new Konva.Group({
        x: 800,
        y: 90
    });
    position8 = new Konva.Group({
        x: 1200,
        y: 385
    });
    position9 = new Konva.Group({
        x: 1000,
        y: 385
    });
}

/**
 * Draws the wood and bird layers.
 */
function start() {
    woodLayer.batchDraw();
    birdLayer.batchDraw();
    while (true) {
        let frequency = inputProcessor.getFrequencyValue();
        console.log(frequency);
        luisaHoneyComeHere(frequency);
    }
}

/**
 * Shows a bird.
 * @param bird The bird to be shown.
 */
function show(bird) {
    //bird.moveTo(position4); //teste pra ver se troca de lugar (FUNCIONA!!)
    //isso acima é o comando pra trocar a imagem de grupo
    bird.show();
    birdLayer.batchDraw();
    console.log(ip);
    let aa = ip.getFrequencyValue();
    console.log(aa)
}

/**
 * Hides a bird.
 * @param bird The bird to be hidden.
 */
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
// ---------------------------------------------------- //
// ----------------- END OF FUNCTIONS ----------------- //
// ---------------------------------------------------- //


// ---------------------------------------------------- //
// ----------------- START OF SANDBOX ----------------- //
// ---------------------------------------------------- //
//let lifeYellow = 3;
//criei uma vida arbitraria so pra tentar matar o passaro e fazer ele renascer

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

// function luisaHoneyComeHere(freq) {
//     if (07 <= freq <= 16) {
//         lifeOfTheBirdies[0]--;
//         checkingAndKilling();
//     } else if (19 <= freq <= 28) {
//         lifeOfTheBirdies[1]--;
//         checkingAndKilling();
//     } else if (31 <= freq <= 40) {
//         lifeOfTheBirdies[2]--;
//         checkingAndKilling();
//     } else if (43 <= freq <= 52) {
//         lifeOfTheBirdies[3]--;
//         checkingAndKilling();
//     } else if (55 <= freq <= 64) {
//         lifeOfTheBirdies[4]--;
//         checkingAndKilling();
//     } else if (67 <= freq <= 76) {
//         lifeOfTheBirdies[5]--;
//         checkingAndKilling();
//     } else if (79 <= freq <= 88) {
//         lifeOfTheBirdies[6]--;
//         checkingAndKilling();
//     }
// }

function checkingAndKilling() {
    for (i = 0; i <= 6; i++) {
        if (lifeOfTheBirdies[i] <= 0) {
            console.log(lifeOfTheBirdies[i]);
            cage[i].hide();
            isPositionOccupied[i] = false;
        }
    }
}



function putInPosition(bird) { //beta do randomizador
    do {
        var randomPos = Math.floor(Math.random() * 10);
        console.log(randomPos)
        console.log(isPositionOccupied);
    }
    while (isPositionOccupied[randomPos] == true) { //isso funciona enquanto o array n tiver cheio, vou voltar pra ver isso
        let randomPos = Math.floor(Math.random() * 10);
    }
    addImageToGroup(positions[randomPos], bird)
    isPositionOccupied[randomPos] = true;
    hide(bird);
    show(bird);
}




// ---------------------------------------------------- //
// ------------------- END OF SANDBOX ----------------- //
// ---------------------------------------------------- //
