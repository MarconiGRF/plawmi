export default class Bird {
    constructor(asset) {
        this._life = 100;
        this._asset = asset;
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

}