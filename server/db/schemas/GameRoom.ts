// src/models/gameRooms.ts
import { Schema, Document, model } from 'mongoose';

// Define the shape of a GameRoom document
export interface GameRoom {
  roomCode: string;
  status: string;
}

// Define the GameRoom document type that extends Mongoose's Document
export interface GameRoomDocument extends Document, GameRoom {}

// Create a Mongoose schema for the GameRoom collection
const gameRoomSchema = new Schema<GameRoomDocument>({
  roomCode: { type: String, unique: true, required: true },
  status: { type: String, required: true },
});

// Create a Mongoose model for the GameRoom collection
export const GameRoomModel = model<GameRoomDocument>('GameRoom', gameRoomSchema);
