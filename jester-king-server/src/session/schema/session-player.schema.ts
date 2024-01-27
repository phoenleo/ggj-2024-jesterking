import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SessionPlayerDocument = HydratedDocument<SessionPlayer>;

@Schema({
  _id: false,
})
export class SessionPlayer {
  @Prop({ default: '' })
  name: string;

  @Prop({ type: [String] })
  punchlineOptions: string[];

  @Prop()
  selectedPunchline: string;

  @Prop({ default: 0 })
  voteCount: number;
}

export const SessionPlayerSchema = SchemaFactory.createForClass(SessionPlayer)

