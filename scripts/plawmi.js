// ------------------------------------------------------------- //
// --------------------- START OF CLASSES ---------------------- //
// ------------------------------------------------------------- //

/**
 * This class represents a bird.
 * It has its asset and life points.
 */
class Bird {
    constructor(asset) {
        this._life = 20;
        this._asset = asset;
        this._position = 0;
    }

    setLife(life) {
        this._life = life;
    }
    getLife() {
        return this._life;
    }
    setAsset(asset) {
        this._asset = asset;
    }
    getAsset() {
        return this._asset;
    }
    setPosition(pos) {
        this._position = pos;
    }
    getPosition() {
        return this._position;
    }
}

/**
 * This class represents the input processor for the project.
 * It reads the microphone
 */
class InputProcessor {
    constructor() {
        this.readMicrophone();
    }

    _frequencyValue = 0;
    _audioContext = new (window.AudioContext || window.webkitAudioContext)();
    _analyzer = this._audioContext.createAnalyser();
    _source = null;
    _max = 130;

    /**
     * Reads the microphone input and analyses the frequency from it.
     */
    async readMicrophone() {
        let constraints = {
            audio: true,
            video: false
        };

        try {
            navigator.mediaDevices.getUserMedia(constraints).then(mediaStream => {
                this.analyzeFrequency(mediaStream);
            });

        } catch (error) {
            console.log("lute!!", error);
            throw new Error(error.message);
        }
    }

    /**
     * Analyzes de current timeslice of audio to find its frequency.
     * @param {*} stream The stream of audio do get timeslice of.
     */
    analyzeFrequency(stream) {
        let source = this._audioContext.createMediaStreamSource(stream);
        source.connect(this._analyzer);
        this._source = source;
        this.startToAnalyze();
    }

    /**
     * Calculates and sets the normalized frequency value.
     * @param {*} data The data produced from the Meyda library containing the raw value of spectral centroid.
     */
    calculateNormalizedFrequency(data) {
        let calculatedValue = Math.floor((data.spectralCentroid / this._max) * 100);
        if (calculatedValue >= 100) {
            this.setFrequencyValue(100);
        } else {
            this.setFrequencyValue(calculatedValue);
        }
    }

    /**
     * Uses Meyda library to extract features from the microphone input.
     * "spectralCentroid" -> refers to the frequency"
     * "rms" -> refers to the "loudness" or the "energy"
     * More info at: {@link https://meyda.js.org/audio-features|Meyda}
     */
    startToAnalyze() {
        if (typeof Meyda === "undefined") {
            console.log("Meyda could not be found! Have you included it?");
          }
          else {
            const analyzer = Meyda.createMeydaAnalyzer({
              "audioContext": this._audioContext,
              "source": this._source,
              "bufferSize": 512,
              "featureExtractors": ["spectralCentroid"],
              "callback": feature => { this.calculateNormalizedFrequency(feature) }
            });
            analyzer.start();
          } 
    }

    /**
     * Gets and returns the current frequency value.
     */
    getFrequencyValue() {
        return this._frequencyValue;
    }

    /**
     * Sets the current frequency value.
     */
    setFrequencyValue(value) {
        this._frequencyValue = value;
    }
}

// ------------------------------------------------------------- //
// --------------------- END OF CLASSES ------------------------ //
// ------------------------------------------------------------- //



// ------------------------------------------------------ //
// ----------------- FUNCTIONS (1) - KONVA -------------- //
// ------------------------------------------------------ //

/**
 * Creates the Konva stage.
 * Such stage will hold all layers and necessary components to be shown.
 * @param width The width of the stage
 * @param height The height of the stage
 */
function createKonvaStage(width, height) {
    stage = new Konva.Stage({
        container: 'konva',
        x: (window.innerWidth/2) - 575,
        width: width,
        height: height
    });
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
 * Creates and returns a new bird instance with the given asset.
 * @param asset The asset for the bird.
 */
function createBird(asset) {
    return new Bird(asset)
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
 * Sets the position of the given position variable.
 * Such variable is actually a new Konva.Group
 * @param reference The object with the reference to be set.
 * @param xCoordinate The X coordinate of the position.
 * @param yCoordinate The Y coordinate of the position.
 */
function setPositions(reference, xCoordinate, yCoordinate) {
    position0 = new Konva.Group({
        x: 50,
        y: 240
    });
    position1 = new Konva.Group({
        x: 375,
        y: 240
    });
    position2 = new Konva.Group({
        x: 80,
        y: 445
    });
    position3 = new Konva.Group({
        x: 480,
        y: 373
    });
    position4 = new Konva.Group({
        x: 630,
        y: 373
    });
    position5 = new Konva.Group({
        x: 50,
        y: 60
    });
    position6 = new Konva.Group({
        x: 800,
        y: 127
    });
    position7 = new Konva.Group({
        x: 270,
        y: 240
    });
    position8 = new Konva.Group({
        x: 980,
        y: 127
    });
    position9 = new Konva.Group({
        x: 240,
        y: 445
    });
    position10 = new Konva.Group({
        x: 745,
        y: 373
    });
    position11 = new Konva.Group({
        x: 860,
        y: 373
    });
    position12 = new Konva.Group({
        x: 1000,
        y: 373
    });
    position13 = new Konva.Group({
        x: 160,
        y: 240
    });
}

/**IMPORTS
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

// ---------------------------------------------------- //
// ----------- END OF FUNCIONS (1) - KONVA ---------- //
// ---------------------------------------------------- //


// ------------------------------------------------------ //
// ---------------- FUNCIONS (2) - ACTIONS -------------- //
// ------------------------------------------------------ //

// ------ dealing with frequency ------
function observeFrequency() {
    console.log("          ------ " + inputProcessor.getFrequencyValue());
    luisaHoneyComeHere(inputProcessor.getFrequencyValue());
}

function luisaHoneyComeHere(freq) {
    console.log("--- estamos em luisa honey")

    if (7 <= freq && freq <= 16) {
        console.log("--- atacou o 0")
        if(cage[0].getLife() >= 1){
            cage[0].setLife(cage[0].getLife() - 10);
            checkingAndKilling();
        }   
    } else if (19 <= freq && freq <= 28) {
        console.log("--- atacou o 1")
        if(cage[1].getLife() >= 1){
            cage[1].setLife(cage[1].getLife() - 10);
            checkingAndKilling();
        }   
    } else if (31 <= freq && freq <= 40) {
        console.log("--- atacou o 2")
        if(cage[2].getLife() >= 1){
            cage[2].setLife(cage[2].getLife() - 10);
            checkingAndKilling();
        }   
    } else if (43 <= freq && freq <= 52) {
        console.log("--- atacou o 3")
        if(cage[3].getLife() >= 1){
            cage[3].setLife(cage[3].getLife() - 10);
            checkingAndKilling();
        }   
    } else if (55 <= freq && freq <= 64) {
        console.log("--- atacou o 4")
        if(cage[4].getLife() >= 1){
            cage[4].setLife(cage[4].getLife() - 10);
            checkingAndKilling();
        }   
    } else if (67 <= freq && freq <= 76) {
        console.log("--- atacou o 5")
        if(cage[5].getLife() >= 1){
            cage[5].setLife(cage[5].getLife() - 10);
            checkingAndKilling();
        }   
    } else if (79 <= freq && freq <= 88) {
        console.log("--- atacou o 6")
        if(cage[6].getLife() >= 1){
            cage[6].setLife(cage[6].getLife() - 10);
            checkingAndKilling();
        }   
    }
}

// ------ dealing with birds ------
/**
 * Shows a bird.
 * @param bird The bird to be shown.
 */
function show(bird) {
    bird.getAsset().show();
    birdLayer.batchDraw();
}

/**
 * Hides a bird.
 * @param bird The bird to be hidden.
 */
function hide(bird) {
    bird.getAsset().hide();
    birdLayer.batchDraw();
}

function checkingAndKilling() {
    console.log("checkingAndKilling...")
    for (i = 0; i < 7; i++) {
        if (cage[i].getLife() <= 0) {
            cage[i].getAsset().hide();
            isPositionOccupied[cage[i].getPosition()] = false;

            var newPos = putInPosition(cage[i]);
            cage[i].setLife(20);
            isPositionOccupied[newPos] = true;
            console.log("passaro " + i + " renasceu na posição : " + newPos);

            console.log(isPositionOccupied)
        }
    }
}

function putInPosition(bird) { //beta do randomizador
    console.log("estamos em putInPosition")
    
    let foundPosition = false;
    let randomPos;
    while (!foundPosition) {
        randomPos = Math.floor(Math.random() * ((positions.length) -1));
        if (!isPositionOccupied[randomPos]) {
            foundPosition = true;
        }
    }

    randomKonvaPosition = eval('position' + randomPos)
    addImageToGroup(randomKonvaPosition, bird.getAsset())
    show(bird);
    return randomPos;
}

// ------ starts plawmi ------
/**
 * Draws the wood and bird layers/
 * create a frequency stalker 0-0
 */
function start() {
    woodLayer.batchDraw();
    birdLayer.batchDraw();
    setInterval(observeFrequency, 1000);

    console.log("has started, yay");
}


// ------------------------------------------------------------- //
// ----------------- START OF GLOBAL VARIABLES ----------------- //
// ------------------------------------------------------------- //
/**
 * Input variable
 */
var inputProcessor = new InputProcessor();
/**
 * The height of the current view.
 * @type {number}
 */
const width = 1400;
/**
 * The width of the current view.
 * @type {number}
 */
const height = 650;

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
let position10 = null;
let position11 = null;
let position12 = null;
let position13 = null;

/**
 * An array to indicate if a position is occupied or not.
 * True indicates that the position is occupied.
 * False indicates that the position is not occupied.
 * @type {boolean[]}
 */
let isPositionOccupied = [true, true, true, true, true, true, true, false, false, false, false, false, false, false];

/**
 * The actual array of positions.
 * Ariana grande approves this array.
 * @type {Konva.Group[]}
 */
let positions = [position0, position1, position2, position3, position4, position5, position6, position7, position8, position9, position10, position11, position12, position13];

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

let cage = new Array(7);

// ----------------------------------------------------------- //
// ----------------- END OF GLOBAL VARIABLES ----------------- //
// ----------------------------------------------------------- //


// ------------------------------------------------------------- //
// ----------------- START OF SYNCHRONOUS CODE ----------------- //
// ------------------------------------------------------------- //

// ------ presets ------
createKonvaStage(width, height);

addLayerToConva(woodLayer);
addLayerToConva(birdLayer);
addImageToLayer(woodLayer, imageBuilder('canvasbg.png', 0, 0, 1150, 650));

setPositions();

cage[0] = createBird(imageBuilder('./birds/blueBird.png', 0, 0, 81, 91));
cage[1] = createBird(imageBuilder('./birds/darkGreenBird.png', 0, 0, 81, 91));
cage[2] = createBird(imageBuilder('./birds/grayBird.png', 0, 0, 81, 91));
cage[3] = createBird(imageBuilder('./birds/greenBird.png', 0, 0, 81, 91));
cage[4] = createBird(imageBuilder('./birds/orangeBird.png', 0, 0, 81, 91));
cage[5] = createBird(imageBuilder('./birds/pinkBird.png', 0, 0, 81, 91));
cage[6] = createBird(imageBuilder('./birds/purpleBird.png', 0, 0, 81, 91));

addImageToGroup(position0, cage[0].getAsset());
addImageToGroup(position1, cage[1].getAsset());
addImageToGroup(position2, cage[2].getAsset());
addImageToGroup(position3, cage[3].getAsset());
addImageToGroup(position4, cage[4].getAsset());
addImageToGroup(position5, cage[5].getAsset());
addImageToGroup(position6, cage[6].getAsset());

for (let i = 0; i <= 6; i++) {
    cage[i].setPosition(i);
}

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
addGroupToLayer(birdLayer, position10);
addGroupToLayer(birdLayer, position11);
addGroupToLayer(birdLayer, position12);
addGroupToLayer(birdLayer, position13);

// ------ action ------
document.addEventListener('DOMContentLoaded', function(){ 
    start();
}, 1000);
