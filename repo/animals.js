import fs from 'fs';
import path from 'path';

const filePath = path.join(import.meta.dirname, 'animals.json');

const readFile = () => {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error reading file:', err);
        return [];
    }
};

const saveFile = (animals) => {
    try {
        fs.writeFileSync(filePath, JSON.stringify(animals, null, 1), 'utf8');
    } catch (err) {
        console.error('Error writing file:', err);
    }
};

const getSpecificSpecies = (speciesName) => {
    return readFile().filter(a => a.species == speciesName);
};

const getAllAnimals = () => {
    return readFile();
}

const updateMood = (speciesName, name, newMood) => {
    const animals = readFile();
    console.log(`Exists ${animals.length} animals`);
    console.log(`Searching for ${speciesName} ${name}`);

    const foundAnimalIndex = animals.findIndex(a => a.species === speciesName && a.name === name);
    if (foundAnimalIndex === -1)
        return false;

    animals[foundAnimalIndex].mood = newMood;
    saveFile(animals);
    return true;
};

const addAnimal = (species, name) => {
    const animals = readFile();
    const foundAnimalIndex = animals.findIndex(a => a.species === species && a.name === name);


    if (foundAnimalIndex !== -1) {
        return false;
    }

    animals.push({
        species,
        name,
        mood: "hungry"
    });
    saveFile(animals);
    return true;
}

export default { getSpecificSpecies, getAllAnimals, addAnimal, updateMood };