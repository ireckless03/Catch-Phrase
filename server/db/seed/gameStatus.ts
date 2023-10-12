// src/seed/gameStatusSeed.ts
import { GameStatusModel } from "../models/GameStatusModel";

// Function to seed GameStatus data
const gameStatusSeed = async () => {
  try {
    await GameStatusModel.create({
      roomId: 'your_game_room_id',
      remainingTime: 60,
      score: 0,
      winner: null,
    });
    // Add more game status entries as needed
  } catch (error) {
    console.error('Error seeding game status:', error);
  }
};

export default gameStatusSeed;
