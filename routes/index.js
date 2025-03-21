import animalRepo from "../repo/animals.js";
import express from 'express';

const router = express.Router();

router.get('/ping', (req, res) => {
  res.send('pong');
});

router.get('/animals/all/mood', async (req, res) => {
  res.send(await animalRepo.getAllAnimals());
});

router.get('/animals/:species/mood', async (req, res) => {
  const matchingAnimals = await animalRepo.getSpecificSpecies(req.params.species);
  res.send(matchingAnimals);
});

router.put('/animals/:species/:name', async (req, res) => {
  const couldAddAnimal = await animalRepo.addAnimal(req.params.species, req.params.name);

  if (couldAddAnimal) {
    res.status(201).send("");
  } else {
    res.status(409).send("Already exists");
  }
});

router.put('/animals/:species/:name/mood', async (req, res) => {
  const { species, name } = req.params;
  const { mood } = req.body;

  console.log("Mood" + req.body.mood);


  const couldUpdateAnimal = await animalRepo.updateMood(species, name, mood);

  if (couldUpdateAnimal) {
    res.status(200).send(`Updated mood of ${name} the ${species} to ${mood}`);
  } else {
    res.status(404).send(`Animal ${name} the ${species} not found`);
  }
});

router.put('/pudding/:id', (req, res) => {
  myArray.push({ id: req.params.id });
});

router.post('/class/:id/startBreak', (req, res) => {
  res.send(`break started ${req.params.id}`);
});

export default router;
