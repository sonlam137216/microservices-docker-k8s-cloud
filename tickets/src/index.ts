import mongoose from 'mongoose';
import { app } from './app';

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error('jwt must be defined');
  }

  if (!process.env.MONGO_URI) {
    throw new Error('mongo uri must be defined');
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log(error);
  }
};

start();

app.listen(3000, () => {
  console.log('App listening on PORT 3000!');
});
