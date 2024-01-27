import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type JokePunchlineDocument = HydratedDocument<JokePunchline>;

@Schema()
export class JokePunchline {
  @Prop()
  jokePunchlineId: string;

  @Prop()
  value: string;

  @Prop()
  category: string;
}

export const JokePunchlineSchema = SchemaFactory.createForClass(JokePunchline)