export default class InputProcessor {
    constructor() {
        this.readMicrophone();
    }

    _frequencyValue = 0;

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
                const recorder = new MediaRecorder(mediaStream);
                console.log(recorder);
                
                recorder.ondataavailable = this.handleRecorderData;
                recorder.start(400);
            });

            const micSource = new Audio();
            micSource.srcObject = this.stream;
            //micSource.play();
        } catch (error) {
            console.log("lute!!", error);
            throw new Error(error.message);
        }
    }

    /**
     * Handles data from the recorder.
     * @param {*} data The data to be handled.
     */
    handleRecorderData(data) {
        console.log(data.data);
    }

    /**
     * Gets and returns the current frequency value.
     */
    getFrequencyValue() {
        return this._frequencyValue;
    }
}
