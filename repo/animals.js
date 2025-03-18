let animals = [];

const getSpecificSpecies = (speciesName) => {
    return animals.filter(a => a.species == speciesName);
};

const getAllAnimals = () => {
    return animals;
}

const updateMood = (speciesName, name, newMood) => {
    console.log(`Exists ${animals.length} animals`);
    console.log(`Searching for ${speciesName} ${name}`);

    const foundAnimalIndex = animals.findIndex(a => a.species === speciesName && a.name === name);
    if (foundAnimalIndex === -1)
        return false;

    animals[foundAnimalIndex].mood = newMood;
    return true;
};

const addAnimal = (species, name) => {

    const foundAnimalIndex = animals.findIndex(a => a.species === species && a.name === name);


    if (foundAnimalIndex !== -1) {
        return false;
    }

    animals.push({
        species,
        name,
        mood: "hungry"
    });
    return true;
}

export default { getSpecificSpecies, getAllAnimals, addAnimal, updateMood };