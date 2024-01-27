import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { SessionPlayer, SessionPlayerSchema } from './session-player.schema';

export type SessionDocument = HydratedDocument<Session>;

@Schema({
  timestamps: true,
})
export class Session {
  @Prop()
  sessionCode: string;

  @Prop()
  jokeSetup: string;

  @Prop({ type: SessionPlayerSchema })
  player1: SessionPlayer;

  @Prop({ type: SessionPlayerSchema })
  player2: SessionPlayer;

  @Prop()
  winner: string;
}

export const SessionSchema = SchemaFactory.createForClass(Session)
