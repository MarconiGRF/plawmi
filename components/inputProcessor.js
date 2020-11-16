export default class InputProcessor {
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
