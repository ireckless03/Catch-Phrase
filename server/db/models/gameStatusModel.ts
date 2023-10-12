// src/models/gameStatusModel.ts
import { Schema, Document, model } from 'mongoose';

// Define the shape of a GameStatus document
export interface GameStatus {
  roomId: string;
  remainingTime: number;
  score: number;
  winner: string | null;
}

// Define the GameStatus document type that extends Mongoose's Document
export interface GameStatusDocument extends Document, GameStatus {}

// Create a Mongoose schema for the GameStatus collection
const gameStatusSchema = new Schema<GameStatusDocument>({
  roomId: { type: Schema.Types.ObjectId, ref: 'GameRoom', required: true },
  remainingTime: { type: Number, default: 0 },
  score: { type: Number, default: 0 },
  winner: { type: String, default: null },
});

// Create a Mongoose model for the GameStatus collection
export const GameStatusModel = model<GameStatusDocument>('GameStatus', gameStatusSchema);
