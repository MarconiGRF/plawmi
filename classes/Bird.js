class Bird {
    constructor(name,position,asset) {
        this.name = name;
        this.life = 100;
        this.position = position;
        this.asset = asset;
    }

    setLife(life){
        this.life = life;
    }
    getLife(){
        return this.life;
    }
    setPos(position){
        this.position = position;
    }
    getPos(){
        return this.position;
    }
    setAsset(asset){
        this.asset = asset;
    }

}

