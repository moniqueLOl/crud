
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SalaoDocument = Salao & Document;

@Schema()
export class Salao {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    cpf: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    telephone: number;

    @Prop({ required: true })
    pendency: boolean;

    @Prop({ required: false })
    appointment?: string;

    @Prop({ required: true })
    active: boolean;

}

export const SalaoSchema = SchemaFactory.createForClass(Salao);