import * as fs from 'fs';


interface IChortle {
    name: string; 
    mewsing: string; 
    written_at: Date; 
}

interface IChortles {
    [key: number]: IChortle
    nextid: number; 
}

let chortles: IChortles = { nextid: 0 };

if(fs.existsSync('chortles.json')) {
    chortles = JSON.parse(fs.readFileSync('chortles.json').toString());
}

let getChortles = () => {
    return Object.assign({}, chortles); //create a copy and return it
}

let getChortle = (id: number) => {
    return Object.assign({}, chortles[id]); //create a copy and return it
}

let createChortle = (chortle: IChortle) => {
    chortles[chortles.nextid++] = chortle;
    writeChortles();
};

let updateChortle = (id: number, chortle: IChortle) => {
    chortles[id] = chortle;
    writeChortles();
}

let deleteChortle = (id: number) => {
    delete chortles[id];
    writeChortles();
}

let writeChortles = () => {
    fs.writeFileSync('chortles.json', JSON.stringify(chortles));
};

export default {
    CreateChortle: createChortle,
    DeleteChortle: deleteChortle,
    GetChortles: getChortles,
    GetChortle: getChortle,
    UpdateChortle: updateChortle
}