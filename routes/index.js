import animalRepo from "../repo/animals.js";
import express from 'express';

const router = express.Router();

// Controller -> Repository -> Array

router.get('/ping', (req, res) => {
  res.send('pong');
});

router.get('/animals/all/mood', (req, res) => {
  res.send(animalRepo.getAllAnimals());
});

router.get('/animals/:species/mood', (req, res) => {
  const matchingAnimals = animalRepo.getAnimals(req.params.species);
  res.send(matchingAnimals);
});

router.put('/animals/:species/:name', (req, res) => {
  animalRepo.addAnimal(req.params.species, req.params.name);
  res.status(201).send("");
});

router.put('/animals/:species/:name/mood', (req, res) => {
  const { species, name } = req.params;
  const { mood } = req.body;

  let animal = animals.find(a => a.species === species && a.name === name);
  if (animal) {
    animal.mood = mood;
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
