// src/seed/gameWordsSeed.ts
import { GameWordModel } from "../models/gameWordModel";

// Function to seed GameWord data
const gameWordsSeed = async () => {
  try {
    await GameWordModel.create({
      word: 'Word 1',
      team: 'Team A',
    });
    // Add more game words as needed
  } catch (error) {
    console.error('Error seeding game words:', error);
  }
};

export default gameWordsSeed;
