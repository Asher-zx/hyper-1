import mongoose from 'mongoose';

const AnimalSchema = new mongoose.Schema({
  species: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  mood: {
    type: String,
    required: true
  }
});

const Animal = mongoose.model('Animal', AnimalSchema);
export default Animal;