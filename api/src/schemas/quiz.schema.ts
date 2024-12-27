import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { QuizTypeEnum } from 'src/enums/quiz';

@Schema()
export class Question {
  @Prop({ type: String, required: false })
  id: string;

  @Prop({ type: String, enum: QuizTypeEnum, required: true })
  type: QuizTypeEnum;

  @Prop({ type: String, required: true })
  question: string;

  @Prop({ type: [String], required: true })
  answers: string[];

  @Prop({ type: String, required: true })
  correct: string;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);

@Schema({ timestamps: true })
export class Quiz {
  @Prop({ type: String, required: false })
  userId?: string;

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: [QuestionSchema], required: true })
  questions: Question[];
}

export const QuizSchema = SchemaFactory.createForClass(Quiz);
