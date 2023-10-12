// src/models/players.ts
import { Schema, Document, model } from 'mongoose';

// Define the shape of a Player document
export interface Player {
  roomId: string;
  playerName: string;
  team: string;
}

// Define the Player document type that extends Mongoose's Document
export interface PlayerDocument extends Document, Player {}

// Create a Mongoose schema for the Player collection
const playerSchema = new Schema<PlayerDocument>({
  roomId: { type: Schema.Types.ObjectId, ref: 'GameRoom', required: true },
  playerName: { type: String, required: true },
  team: { type: String, required: true },
});

// Create a Mongoose model for the Player collection
export const PlayerModel = model<PlayerDocument>('Player', playerSchema);
