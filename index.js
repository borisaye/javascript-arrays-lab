var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
    kittens.push(name)
    return;

}

function destructivelyPrependKitten(name){
    kittens.unshift(name)
    return;

}

function destructivelyRemoveLastKitten(){
    kittens.pop()
    return;

}

function destructivelyRemoveFirstKitten(){
    kittens.shift()
    return;

}

function appendKitten(name){
    const newkittens = [...kittens, name];
    return newkittens;

}

function prependKitten(name){
    const newkittens = [name, ...kittens,];
    return newkittens;

}

function removeLastKitten(name){
    const newkittens = [...kittens];
    newkittens.pop()
    return newkittens;
}

function removeFirstKitten(name){
    const newkittens = [...kittens];
    newkittens.shift()
    return newkittens;
}