// src/seed/playersSeed.ts
import { PlayerModel } from "../models/PlayersModel";

// Function to seed Player data
const playersSeed = async () => {
  try {
    await PlayerModel.create({
      roomId: 'your_game_room_id',
      playerName: 'Player 1',
      team: 'Team A',
    });
    // Add more players as needed
  } catch (error) {
    console.error('Error seeding players:', error);
  }
};

export default playersSeed;
