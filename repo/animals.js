let animals = [];

const getSpecificSpecies = (speciesName) => {
    return animals.filter(a => a.species == speciesName);
};

const getAllAnimals = () => {
    return animals;
}

const addAnimal = (species, name) => {
    animals.push({
        species,
        name,
        mood: "hungry"
    });
}

export default { getSpecificSpecies, getAllAnimals, addAnimal };