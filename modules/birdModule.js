import Bird from "./../classes/Bird"

export function createBird(asset){
    return new Bird(asset);
}
module.exports.createBird = createBird;