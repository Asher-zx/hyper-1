import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017";
const database = "zoo";
const collection = "animals";

const client = new MongoClient(url);

const connectToDB = async () => {
    await client.connect();
    return client.db(database).collection(collection);
}

const getSpecificSpecies = async (speciesName) => {
    const collection = await connectToDB();
    const specificSpecies = await collection.find({ species: speciesName }).toArray();
    await client.close();
    return specificSpecies;
};

const getAllAnimals = async () => {
    const collection = await connectToDB();
    const allAnimals = await collection.find({}).toArray();
    await client.close();
    return allAnimals;
}

const updateMood = async (speciesName, name, newMood) => {
    const collection = await connectToDB();

    const result = await collection.updateOne(
        { species: speciesName, name: name },
        { $set: { mood: newMood } }
    );
    await client.close();
    return result.modifiedCount > 0;
};

const addAnimal = async (species, name) => {
    const collection = await connectToDB();
    const existingAnimal = await collection.findOne({ species: species, name: name });

    if (existingAnimal) {
        await client.close();
        return false;
    }

    await collection.insertOne({
        species: species,
        name: name,
        mood: "hungry"
    });

    await client.close();
    return true;
}

export default { getSpecificSpecies, getAllAnimals, addAnimal, updateMood };