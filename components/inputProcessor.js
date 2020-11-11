export default class InputProcessor {
    constructor() {
        this.readMicrophone();
    }

    _frequencyValue = 0;
    _audioContext = new (window.AudioContext || window.webkitAudioContext)();
    _analyzer = this._audioContext.createAnalyser();

    /**
     * Reads the microphone input and returns a data blob.
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
        
        setInterval(() => { this.getFrequencyForMoment(); }, 150);
    }

    /**
     * Gets the frequency for the current moment and logs its values.
     */
    getFrequencyForMoment() {
        let frequencyArray = new Uint8Array(100);
        this._analyzer.getByteTimeDomainData(frequencyArray);
        console.log(frequencyArray);
    }

    /**
     * Handles data from the recorder.
     * @param {*} data The data to be handled.
     */
    handleRecorderData(data) {
        const blob = data.data;
        console.log(blob);
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
