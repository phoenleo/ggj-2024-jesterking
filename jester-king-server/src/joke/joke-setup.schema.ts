import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type JokeSetupDocument = HydratedDocument<JokeSetup>;

@Schema()
export class JokeSetup {
  @Prop()
  jokeSetupId: string;

  @Prop()
  value: string;

  @Prop()
  category: string;
}

export const JokeSetupSchema = SchemaFactory.createForClass(JokeSetup);
