import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { SessionPlayer, SessionPlayerSchema } from './session-player.schema';

export type SessionDocument = HydratedDocument<Session>;

@Schema({
  timestamps: true,
})
export class Session {
  @Prop({ index: true })
  sessionCode: string;

  @Prop()
  jokeSetup: string;

  @Prop({ type: SessionPlayerSchema })
  player1: SessionPlayer;

  @Prop({ type: SessionPlayerSchema })
  player2: SessionPlayer;

  @Prop()
  winner: string;

  @Prop({ default: false })
  isBothPlayerSubmitted: boolean;

  @Prop({ default: false })
  canVote: boolean;

  @Prop({ default: false })
  isCompleted: boolean;
}

export const SessionSchema = SchemaFactory.createForClass(Session)

