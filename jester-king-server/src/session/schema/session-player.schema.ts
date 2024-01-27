import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type SessionPlayerDocument = HydratedDocument<SessionPlayer>;

@Schema()
export class SessionPlayer {
  _id: Types.ObjectId;

  @Prop({ default: '' })
  name: string;

  @Prop({ type: [String] })
  punchlineOptions: string[];

  @Prop()
  selectedPunchline: string;

  @Prop({ default: 0 })
  voteCount: number;
}

export const SessionPlayerSchema = SchemaFactory.createForClass(SessionPlayer);
