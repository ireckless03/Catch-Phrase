// src/models/gameWords.ts
import { Schema, Document, model } from 'mongoose';

// Define the shape of a GameWord document
export interface GameWord {
  word: string;
  team: string;
  guessed: boolean;
  skip: boolean;
}

// Define the GameWord document type that extends Mongoose's Document
export interface GameWordDocument extends Document, GameWord {}

// Create a Mongoose schema for the GameWord collection
const gameWordSchema = new Schema<GameWordDocument>({
  word: { type: String, required: true },
  team: { type: String, required: true },
  guessed: { type: Boolean, default: false },
  skip: { type: Boolean, default: false },
});

// Create a Mongoose model for the GameWord collection
export const GameWordModel = model<GameWordDocument>('GameWord', gameWordSchema);
