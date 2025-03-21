import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017");

const connectToDB = () => {
    client.connect();
    return client.db("zoo").collection("animals");
}

const getAllAnimals = async () => {
    const animals = connectToDB();
    const allAnimals = await animals.find({}).toArray();
    return allAnimals;
}

const getSpecificSpecies = async (species) => {
    const animals = connectToDB();
    const allAnimals = await animals.find(
        {
            species
        }
    ).toArray();
    return allAnimals;
};

const updateMood = async (speciesName, name, newMood) => {
    const animals = connectToDB();

    const result = await animals.updateOne(
        { name, species: speciesName },
        { $set: { mood: newMood } });

    if (result.modifiedCount > 0)
        return true;
    else
        return false;
};

const feedAnAnimal = async (species, name) => {
    const animals = connectToDB();
    const result = await animals.updateOne(
        { species, name, mood: "hungry" },
        { $set: { mood: "happy" } }
    )

    return result.modifiedCount > 0;
}

const feedSpecies = async (species) => {

}

const freeAnimalFromCaptivity = async (species, name) => {
    const animals = connectToDB();
    const result = await animals.deleteOne({ species, name });

    return result.deletedCount > 0;
}

const addAnimal = async (species, name) => {
    const animals = connectToDB();
    const existingAnimal = await animals.findOne({ species, name });

    if (existingAnimal) {
        return false;
    }

    await animals.insertOne({
        species: species,
        name: name,
        mood: "hungry"
    });

    return true;
}

export default { getSpecificSpecies, getAllAnimals, addAnimal, updateMood, freeAnimalFromCaptivity, feedAnAnimal };